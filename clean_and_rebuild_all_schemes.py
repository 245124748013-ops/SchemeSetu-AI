import re
import json
import urllib.parse

# 1. Clean flagship_schemes_curation.py
with open('backend/flagship_schemes_curation.py', 'r', encoding='utf-8') as f:
    text = f.read()

clean_flagship_urls = {
    "Telangana Dalit Bandhu Scheme": "https://telanganaepass.cgg.gov.in",
    "Telangana Gruha Jyothi Scheme (200 Units Free Electricity)": "https://prajapalana.telangana.gov.in",
    "Telangana Indiramma Indlu Free Housing Scheme": "https://prajapalana.telangana.gov.in",
    "Karnataka Gruha Lakshmi Scheme": "https://sevasindhu.karnataka.gov.in",
    "Karnataka Yuva Nidhi Scheme": "https://sevasindhu.karnataka.gov.in",
    "Maharashtra Namo Shetkari Maha Samman Nidhi Yojana": "https://mahadbt.maharashtra.gov.in",
    "Maharashtra Mahatma Jyotirao Phule Jan Arogya Yojana (MJPJAY)": "https://mahadbt.maharashtra.gov.in",
    "Uttar Pradesh Mukhyamantri Abhyudaya Free Coaching Scheme": "https://edistrict.up.gov.in",
    "Andhra Pradesh YSR / PM-Kisan Rytu Bharosa Scheme": "https://onlineap.meeseva.gov.in",
    "Andhra Pradesh Dr. YSR Aarogyasri / NTR Vaidya Seva Scheme": "https://ap.meeseva.gov.in",
    "West Bengal Lakshmir Bhandar Scheme": "https://wb.gov.in",
    "West Bengal Krishak Bandhu (Natun) Scheme": "https://wb.gov.in",
    "Bihar Mukhyamantri Kanya Utthan Yojana": "https://serviceonline.bihar.gov.in",
    "Rajasthan Mukhyamantri Ayushman Arogya Yojana (MAA - Chiranjeevi)": "https://sso.rajasthan.gov.in"
}

for name_key, clean_u in clean_flagship_urls.items():
    pattern = rf"('name':\s*'{re.escape(name_key)}'.*?'official_portal_url':\s*)'[^']+'"
    text = re.sub(pattern, rf"\1'{clean_u}'", text, flags=re.DOTALL)

with open('backend/flagship_schemes_curation.py', 'w', encoding='utf-8') as f:
    f.write(text)

print("Cleaned flagship scheme URLs.")
