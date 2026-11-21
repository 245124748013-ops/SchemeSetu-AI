import urllib.request
import json

payload = {
    "age": 35,
    "gender": "Male",
    "occupation": "Farmer",
    "state": "Telangana",
    "category": "OBC",
    "income": 120000,
    "has_land": True,
    "land_holding_acres": 2.5,
    "education": "10th Pass",
    "marital_status": "Married",
    "disability_status": False
}

req = urllib.request.Request(
    "http://127.0.0.1:8000/api/match",
    data=json.dumps(payload).encode("utf-8"),
    headers={"Content-Type": "application/json"}
)

try:
    with urllib.request.urlopen(req, timeout=10) as res:
        data = json.loads(res.read().decode("utf-8"))
        schemes = data.get("ranked_schemes", [])
        print(f"Total schemes returned: {len(schemes)}")
        for i, s in enumerate(schemes[:10]):
            match_pct = s.get("combined_confidence", 0)
            print(f"{i+1}. [{s.get('level')}] {s.get('name')} ({match_pct}%)")
            print(f"   Category: {s.get('category')} | Sector Fit: {s.get('is_core_sector')}")
            print(f"   Portal: {s.get('official_portal_url')}")
except Exception as e:
    print("API Error:", e)
