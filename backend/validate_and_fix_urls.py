import json
import socket
import urllib.request
import urllib.error
import ssl
from concurrent.futures import ThreadPoolExecutor

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def test_host_and_url(url):
    try:
        from urllib.parse import urlparse
        parsed = urlparse(url)
        host = parsed.netloc.split(':')[0]
        # 1. Test DNS resolution
        try:
            socket.getaddrinfo(host, 443, timeout=3.0)
        except Exception as e:
            return url, False, f"DNS NXDOMAIN: {e}"
        
        # 2. Test HTTP GET/HEAD
        req = urllib.request.Request(
            url,
            headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}
        )
        with urllib.request.urlopen(req, timeout=5.0, context=ctx) as resp:
            return url, True, f"HTTP {resp.status}"
    except urllib.error.HTTPError as e:
        if e.code == 404:
            return url, False, f"HTTP 404 Not Found"
        return url, True, f"HTTP {e.code} (Server Live)"
    except Exception as e:
        # Check if DNS was fine but connection timed out / rejected
        try:
            from urllib.parse import urlparse
            host = urlparse(url).netloc.split(':')[0]
            socket.getaddrinfo(host, 80, timeout=2.0)
            return url, True, f"DNS Live (HTTP error: {e})"
        except Exception:
            return url, False, f"Connection Failed: {e}"

if __name__ == "__main__":
    with open('schemes_database.json', 'r', encoding='utf-8') as f:
        schemes = json.load(f)

    urls = set()
    for s in schemes:
        if s.get('official_portal_url'):
            urls.add(s['official_portal_url'])
        if s.get('dept_portal_url'):
            urls.add(s['dept_portal_url'])

    print(f"Testing {len(urls)} distinct portal URLs...")
    results = {}
    with ThreadPoolExecutor(max_workers=25) as executor:
        futures = {executor.submit(test_host_and_url, u): u for u in urls}
        for f in futures:
            u, ok, msg = f.result()
            results[u] = (ok, msg)

    failed = {u: msg for u, (ok, msg) in results.items() if not ok}
    print(f"\nRESULTS: {len(urls) - len(failed)} LIVE, {len(failed)} FAILED")
    print("\n--- FAILED DOMAINS ---")
    for u, m in sorted(failed.items()):
        print(f"{u} -> {m}")
