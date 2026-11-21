import requests
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

tests = [
    ('Telangana Farmer', {'age': 40, 'gender': 'Male', 'state': 'Telangana', 'occupation': 'Farmer', 'income': 100000, 'category': 'OBC', 'has_land': True}),
    ('Karnataka Women Homemaker', {'age': 35, 'gender': 'Female', 'state': 'Karnataka', 'occupation': 'Homemaker', 'income': 120000, 'category': 'General', 'has_land': False}),
    ('Maharashtra Farmer', {'age': 42, 'gender': 'Male', 'state': 'Maharashtra', 'occupation': 'Farmer', 'income': 110000, 'category': 'General', 'has_land': True}),
    ('Maharashtra Youth/Student', {'age': 22, 'gender': 'Male', 'state': 'Maharashtra', 'occupation': 'Student', 'income': 150000, 'category': 'General', 'has_land': False}),
    ('Tamil Nadu Woman Student', {'age': 19, 'gender': 'Female', 'state': 'Tamil Nadu', 'occupation': 'Student', 'income': 100000, 'category': 'OBC', 'has_land': False}),
    ('UP Student Coaching', {'age': 21, 'gender': 'Male', 'state': 'Uttar Pradesh', 'occupation': 'Student', 'income': 180000, 'category': 'SC', 'has_land': False}),
    ('National Artisan', {'age': 38, 'gender': 'Male', 'state': 'Telangana', 'occupation': 'Artisan', 'income': 90000, 'category': 'OBC', 'has_land': False}),
    ('National Street Vendor', {'age': 32, 'gender': 'Male', 'state': 'Delhi', 'occupation': 'Street Vendor', 'income': 80000, 'category': 'General', 'has_land': False}),
    ('West Bengal Women', {'age': 30, 'gender': 'Female', 'state': 'West Bengal', 'occupation': 'Homemaker', 'income': 120000, 'category': 'SC', 'has_land': False}),
    ('Bihar Student', {'age': 20, 'gender': 'Female', 'state': 'Bihar', 'occupation': 'Student', 'income': 140000, 'category': 'EWS', 'has_land': False}),
    ('AP Farmer', {'age': 45, 'gender': 'Male', 'state': 'Andhra Pradesh', 'occupation': 'Farmer', 'income': 120000, 'category': 'General', 'has_land': True}),
    ('Odisha Farmer', {'age': 40, 'gender': 'Male', 'state': 'Odisha', 'occupation': 'Farmer', 'income': 95000, 'category': 'General', 'has_land': True}),
    ('Assam Women', {'age': 32, 'gender': 'Female', 'state': 'Assam', 'occupation': 'Homemaker', 'income': 100000, 'category': 'OBC', 'has_land': False}),
    ('Chhattisgarh Women', {'age': 28, 'gender': 'Female', 'state': 'Chhattisgarh', 'occupation': 'Homemaker', 'income': 110000, 'category': 'General', 'has_land': False}),
    ('Delhi Women', {'age': 29, 'gender': 'Female', 'state': 'Delhi', 'occupation': 'Homemaker', 'income': 120000, 'category': 'General', 'has_land': False})
]

for label, payload in tests:
    try:
        res = requests.post('http://127.0.0.1:8000/api/match', json=payload).json()
        top_schemes = res.get('ranked_schemes', [])[:3]
        print(f"=== {label} (Eligible Total: {res.get('eligible_matches_count')}) ===")
        for idx, s in enumerate(top_schemes, 1):
            name = s.get('name')
            score = s.get('combined_confidence')
            url = s.get('official_portal_url')
            benefit = s.get('financial_benefit')
            print(f"  {idx}. {name} | Score: {score}% | URL: {url}")
            print(f"     Benefit: {benefit}")
    except Exception as e:
        print(f"Error testing {label}: {e}")
