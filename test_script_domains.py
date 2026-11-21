import re
import socket
from urllib.parse import urlparse

def test_file(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    urls = re.findall(r'https?://[^\s\'"\,]+', content)
    domains = set()
    for u in urls:
        parsed = urlparse(u)
        if parsed.hostname:
            domains.add(parsed.hostname)
            
    print(f"Testing {len(domains)} unique domains in {filename}...")
    bad = {}
    for d in sorted(domains):
        try:
            socket.gethostbyname(d)
        except Exception as e:
            bad[d] = str(e)
            
    print(f"Failed in {filename}: {len(bad)}")
    for d, err in bad.items():
        print(f"  FAILED: {d} -> {err}")
    return bad

test_file('flagship_schemes_curation.py')
test_file('ingest_kaggle_myscheme.py')
