import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('backend/schemes_database.json', 'r', encoding='utf-8') as f:
    schemes = json.load(f)

urls = [s.get('official_portal_url') for s in schemes]
print(f"Total schemes in database: {len(schemes)}")
print(f"Total distinct URLs in database: {len(set(urls))}")

states_to_sample = [
    'Telangana', 'Andhra Pradesh', 'Karnataka', 'Maharashtra', 
    'Uttar Pradesh', 'Bihar', 'Kerala', 'Punjab', 'West Bengal', 'Assam', 'Gujarat', 'Haryana'
]

for st in states_to_sample:
    print(f"\n📍 STATE: {st}")
    st_schemes = [s for s in schemes if s.get('state') == st][:3]
    for s in st_schemes:
        print(f"   • {s.get('name')}")
        print(f"     🔗 URL: {s.get('official_portal_url')}")
