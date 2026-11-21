import requests
import sys

sys.stdout.reconfigure(encoding='utf-8')

tests = [
    ('Search Rythu', {'q': 'Rythu', 'limit': 3}),
    ('Search Ladki Bahin', {'q': 'Ladki Bahin', 'limit': 3}),
    ('Search Vishwakarma', {'q': 'Vishwakarma', 'limit': 3}),
    ('Search Abhyudaya', {'q': 'Abhyudaya', 'limit': 3}),
    ('Search Gruha Lakshmi', {'q': 'Gruha Lakshmi', 'limit': 3}),
    ('Search Lakshmir Bhandar', {'q': 'Lakshmir Bhandar', 'limit': 3}),
    ('Filter Farmer Telangana', {'occupation': 'Farmer', 'state': 'Telangana', 'limit': 3}),
    ('Filter Student UP', {'occupation': 'Student', 'state': 'Uttar Pradesh', 'limit': 3}),
    ('Filter Artisan', {'occupation': 'Artisan', 'limit': 3})
]

for label, params in tests:
    res = requests.get('http://127.0.0.1:8000/api/schemes/search', params=params).json()
    total = res.get('total', 0)
    schemes = res.get('schemes', [])
    print(f"=== {label} (Total Matches: {total}) ===")
    for s in schemes[:2]:
        name = s.get('name')
        level = s.get('level')
        url = s.get('official_portal_url')
        print(f"  - {name} | Level: {level} | URL: {url}")
