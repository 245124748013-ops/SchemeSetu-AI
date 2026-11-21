import requests
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

profiles = [
    {'name': 'Ramesh Kumar', 'age': 45, 'occupation': 'Farmer', 'category': 'OBC', 'state': 'Andhra Pradesh', 'has_land': True, 'land_holding_acres': 2.5, 'income': 120000},
    {'name': 'Sunita Devi', 'age': 42, 'gender': 'Female', 'occupation': 'Women Entrepreneur', 'category': 'OBC', 'state': 'Andhra Pradesh', 'income': 0},
    {'name': 'Pooja Kumari', 'age': 19, 'gender': 'Female', 'occupation': 'Student', 'category': 'OBC', 'state': 'Andhra Pradesh', 'income': 0},
    {'name': 'Ramphal Sharma', 'age': 72, 'gender': 'Male', 'occupation': 'Senior Citizen', 'category': 'OBC', 'state': 'Andhra Pradesh', 'income': 0}
]

for p in profiles:
    r = requests.post('http://127.0.0.1:8000/api/match', json=p)
    data = r.json()
    top3 = [s['name'] for s in data.get('ranked_schemes', [])[:3]]
    benefits = [s.get('financial_benefit', '') for s in data.get('ranked_schemes', [])[:3]]
    print(f"Citizen: {p['name']} ({p['occupation']}, Age {p['age']})")
    print(f"Top 3 Schemes: {top3}")
    print(f"Benefits: {benefits}\n")
