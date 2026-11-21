import re
import socket
import ssl
import urllib.request
import urllib.error
from concurrent.futures import ThreadPoolExecutor

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

with open('backend/ingest_kaggle_myscheme.py', 'r', encoding='utf-8') as f:
    ingest_code = f.read()

urls = sorted(list(set(re.findall(r'https?://[^\s\"\'\(\),]+', ingest_code))))
print(f"Total distinct URLs in ingest script: {len(urls)}")

def check(url):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        with urllib.request.urlopen(req, timeout=6, context=ctx) as res:
            return (url, res.status, 'OK')
    except urllib.error.HTTPError as e:
        if e.code in [200, 301, 302, 303, 307, 308, 401, 403]:
            return (url, e.code, 'HTTP_LIVE')
        return (url, e.code, 'HTTP_ERR')
    except Exception as e:
        return (url, 0, str(e))

results = []
with ThreadPoolExecutor(max_workers=25) as ex:
    for r in ex.map(check, urls):
        results.append(r)

failed = [r for r in results if r[2] not in ['OK', 'HTTP_LIVE']]
print(f"\nTested {len(results)} URLs: {len(results)-len(failed)} LIVE, {len(failed)} FAILED\n")
for f_url, code, reason in failed:
    print(f"FAILED: {f_url} | Code: {code} | Reason: {reason}")
