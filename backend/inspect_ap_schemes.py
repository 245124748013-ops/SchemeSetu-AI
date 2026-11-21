import json

with open('schemes_database.json', 'r', encoding='utf-8') as f:
    schemes = json.load(f)

print("Checking Andhra Pradesh schemes:")
ap_schemes = [s for s in schemes if s.get('state') == 'Andhra Pradesh']
print(f"Total AP schemes: {len(ap_schemes)}")

for s in ap_schemes[:10]:
    print(f"ID: {s['id']} | Name: {s['name'][:60]} | URL: {s['official_portal_url']}")
