import ssl
import socket
import urllib.request
import urllib.error
from concurrent.futures import ThreadPoolExecutor, as_completed
import json

with open('schemes_database.json', 'r', encoding='utf-8') as f:
    schemes = json.load(f)

unique_urls = set()
for s in schemes:
    for fld in ['official_portal_url', 'dept_portal_url']:
        u = s.get(fld)
        if u and isinstance(u, str) and u.startswith('http'):
            unique_urls.add(u)

print(f"Total unique URLs to test: {len(unique_urls)}")

ssl_context = ssl.create_default_context()
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

ssl_errors = {}
http_errors = {}
working_urls = {}

def check_url(u):
    req = urllib.request.Request(u, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=6, context=ssl_context) as response:
            return (u, "OK", response.status)
    except ssl.SSLCertVerificationError as e:
        return (u, "SSL_ERR", f"SSLCertVerificationError: {e.verify_message} (reason: {e.reason})")
    except ssl.SSLError as e:
        return (u, "SSL_ERR", f"SSLError: {str(e)}")
    except urllib.error.HTTPError as e:
        # HTTP 403, 404, 500 means SSL handshake was 100% SUCCESSFUL!
        return (u, "OK", f"HTTP {e.code}")
    except urllib.error.URLError as e:
        if isinstance(e.reason, ssl.SSLError):
            return (u, "SSL_ERR", f"URLError SSL: {str(e.reason)}")
        else:
            return (u, "NET_ERR", f"URLError: {str(e.reason)}")
    except Exception as e:
        return (u, "NET_ERR", f"Error: {str(e)}")

with ThreadPoolExecutor(max_workers=35) as executor:
    futures = {executor.submit(check_url, u): u for u in unique_urls}
    for future in as_completed(futures):
        u, status, detail = future.result()
        if status == "OK":
            working_urls[u] = detail
        elif status == "SSL_ERR":
            ssl_errors[u] = detail
        else:
            http_errors[u] = detail

print(f"\n==========================================")
print(f"RESULTS SUMMARY:")
print(f"  Working / Clean SSL: {len(working_urls)}")
print(f"  SSL Certificate Failures: {len(ssl_errors)}")
print(f"  Other Network/Timeout Failures: {len(http_errors)}")
print(f"==========================================")

print("\n--- SSL Certificate Errors ---")
for u, err in sorted(ssl_errors.items()):
    print(f"  [SSL FAIL] {u} -> {err}")

print("\n--- Network/Timeout Errors ---")
for u, err in sorted(http_errors.items()):
    print(f"  [NET FAIL] {u} -> {err}")

with open('ssl_validation_report.json', 'w', encoding='utf-8') as f:
    json.dump({
        "ssl_errors": ssl_errors,
        "http_errors": http_errors,
        "working_urls": working_urls
    }, f, indent=2)
