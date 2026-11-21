import json
import socket
from urllib.parse import urlparse

with open('schemes_database.json', 'r', encoding='utf-8') as f:
    schemes = json.load(f)

url_fields = set()
for s in schemes:
    for k, v in s.items():
        if isinstance(v, str) and (v.startswith('http://') or v.startswith('https://')):
            url_fields.add(k)

print('URL fields detected:', url_fields)

domains = {}
for s in schemes:
    for field_name in url_fields:
        url = s.get(field_name)
        if url and isinstance(url, str):
            parsed = urlparse(url)
            domain = parsed.hostname
            if domain:
                domains.setdefault(domain, []).append((s.get('id'), s.get('name'), url))

print(f'Total unique domains: {len(domains)}')

invalid_domains = {}
for d in sorted(domains.keys()):
    try:
        ip = socket.gethostbyname(d)
    except socket.gaierror as e:
        invalid_domains[d] = {
            'error': str(e),
            'count': len(domains[d]),
            'examples': domains[d][:5]
        }

print(f'Domains failing DNS resolution: {len(invalid_domains)}')
for d, info in invalid_domains.items():
    cnt = info['count']
    err = info['error']
    print(f'\n[FAILED] {d} (used in {cnt} schemes) -> {err}:')
    for ex in info['examples']:
        print(f'   - {ex[0]} | {ex[1]} | {ex[2]}')

with open('invalid_domains.json', 'w', encoding='utf-8') as f:
    json.dump(invalid_domains, f, indent=2)
