import urllib.request
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

profiles = [
    {
        "label": "Telangana Farmer",
        "data": {"age": 40, "gender": "Male", "state": "Telangana", "occupation": "Farmer", "income": 100000, "category": "OBC", "has_land": True}
    },
    {
        "label": "Karnataka Woman Homemaker",
        "data": {"age": 35, "gender": "Female", "state": "Karnataka", "occupation": "Homemaker", "income": 120000, "category": "General", "has_land": False}
    },
    {
        "label": "Maharashtra MSME Owner",
        "data": {"age": 38, "gender": "Male", "state": "Maharashtra", "occupation": "MSME Owner", "income": 300000, "category": "General", "has_land": False}
    },
    {
        "label": "Tamil Nadu Student",
        "data": {"age": 20, "gender": "Female", "state": "Tamil Nadu", "occupation": "Student", "income": 120000, "category": "OBC", "has_land": False}
    },
    {
        "label": "UP Youth Seeking Free Coaching",
        "data": {"age": 22, "gender": "Male", "state": "Uttar Pradesh", "occupation": "Student", "income": 150000, "category": "SC", "has_land": False}
    }
]

url = "http://127.0.0.1:8000/api/match"

for p in profiles:
    print(f"==================================================")
    print(f"PROFILE: {p['label']}")
    print(f"==================================================")
    req = urllib.request.Request(
        url,
        data=json.dumps(p['data']).encode('utf-8'),
        headers={'Content-Type': 'application/json'}
    )
    try:
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            print(f"Total Eligible: {data.get('eligible_matches_count')}")
            for idx, s in enumerate(data.get('ranked_schemes', [])[:4], 1):
                print(f"  {idx}. {s['name']}")
                print(f"     Level: {s.get('level')} | State: {s.get('state')} | Cat: {s.get('category')}")
                print(f"     Direct Portal: {s.get('official_portal_url')}")
                print(f"     Confidence: {s.get('combined_confidence')}%")
    except Exception as e:
        print(f"Error: {e}")
    print()
