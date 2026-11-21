import ssl
import urllib.request
import urllib.error
from concurrent.futures import ThreadPoolExecutor, as_completed
import json

ssl_context = ssl.create_default_context()
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

with open('schemes_database.json', 'r', encoding='utf-8') as f:
    schemes = json.load(f)

unique_urls = set()
for s in schemes:
    for fld in ['official_portal_url', 'dept_portal_url']:
        u = s.get(fld)
        if u and isinstance(u, str) and u.startswith('http'):
            unique_urls.add(u)

def test_url(u):
    req = urllib.request.Request(u, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=5, context=ssl_context) as res:
            return (u, True, f"OK ({res.status})")
    except ssl.SSLError as e:
        return (u, False, f"SSL Error: {e}")
    except urllib.error.HTTPError as e:
        # HTTP response from server means SSL succeeded
        return (u, True, f"HTTP {e.code} (SSL Valid)")
    except Exception as e:
        return (u, False, f"Error: {e}")

print(f"Auditing SSL for all {len(unique_urls)} distinct URLs...")
audit_results = {}
with ThreadPoolExecutor(max_workers=35) as executor:
    futures = {executor.submit(test_url, u): u for u in unique_urls}
    for f in as_completed(futures):
        u, ok, msg = f.result()
        audit_results[u] = (ok, msg)

ssl_bad_urls = {u: msg for u, (ok, msg) in audit_results.items() if not ok}
print(f"Total failing/SSL invalid URLs: {len(ssl_bad_urls)}")
for u, msg in sorted(ssl_bad_urls.items()):
    print(f"  [BAD] {u} -> {msg}")

with open('bad_ssl_urls.json', 'w', encoding='utf-8') as f:
    json.dump(ssl_bad_urls, f, indent=2)
