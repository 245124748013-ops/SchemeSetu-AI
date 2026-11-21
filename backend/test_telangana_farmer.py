import urllib.request
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

payload = {
    "age": 40,
    "gender": "Male",
    "state": "Telangana",
    "occupation": "Farmer",
    "income": 100000,
    "category": "OBC",
    "has_land": True
}

req = urllib.request.Request(
    "http://127.0.0.1:8000/api/match",
    data=json.dumps(payload).encode('utf-8'),
    headers={'Content-Type': 'application/json'}
)

with urllib.request.urlopen(req) as resp:
    data = json.loads(resp.read().decode('utf-8'))
    print(f"Total Eligible Matches: {data.get('eligible_matches_count')}")
    print("\n--- ALL RETURNED MATCHES (TOP 20) ---")
    for idx, s in enumerate(data.get('ranked_schemes', [])[:20], 1):
        print(f"{idx}. [{s.get('level')}] {s['name']}")
        print(f"   Category: {s.get('category')} | Score: {s.get('combined_confidence')}%")
        print(f"   Official Portal: {s.get('official_portal_url')}")
        print(f"   Financial Benefit: {s.get('financial_benefit')}")
        print()
