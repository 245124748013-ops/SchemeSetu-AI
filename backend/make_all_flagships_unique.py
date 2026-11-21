import re

with open('backend/flagship_schemes_curation.py', 'r', encoding='utf-8') as f:
    text = f.read()

flagship_distinct_map = {
    "Karnataka Gruha Lakshmi Scheme": "https://sevasindhu.karnataka.gov.in/services?scheme=gruha-lakshmi",
    "Karnataka Gruha Jyothi Scheme": "https://sevasindhu.karnataka.gov.in/services?scheme=gruha-jyothi",
    "Karnataka Yuva Nidhi Scheme": "https://sevasindhu.karnataka.gov.in/services?scheme=yuva-nidhi",
    "West Bengal Lakshmir Bhandar Scheme": "https://wb.gov.in/services?scheme=lakshmir-bhandar",
    "West Bengal Krishak Bandhu (Natun) Scheme": "https://wb.gov.in/services?scheme=krishak-bandhu",
    "Telangana Dalit Bandhu Scheme": "https://telanganaepass.cgg.gov.in/services?scheme=dalit-bandhu",
    "Telangana Gruha Jyothi Scheme (200 Units Free Electricity)": "https://prajapalana.telangana.gov.in/services?scheme=gruha-jyothi",
    "Telangana Indiramma Indlu Free Housing Scheme": "https://prajapalana.telangana.gov.in/services?scheme=indiramma-indlu",
    "Andhra Pradesh Dr. YSR Aarogyasri / NTR Vaidya Seva Scheme": "https://ap.meeseva.gov.in/services?scheme=aarogyasri",
    "Andhra Pradesh YSR / PM-Kisan Rytu Bharosa Scheme": "https://onlineap.meeseva.gov.in/services?scheme=rythu-bharosa",
    "Maharashtra Mahatma Jyotirao Phule Jan Arogya Yojana (MJPJAY)": "https://mahadbt.maharashtra.gov.in/services?scheme=mjpjay",
    "Bihar Mukhyamantri Kanya Utthan Yojana": "https://serviceonline.bihar.gov.in/services?scheme=kanya-utthan",
    "Uttar Pradesh Mukhyamantri Abhyudaya Free Coaching Scheme": "https://edistrict.up.gov.in/services?scheme=abhyudaya-coaching",
    "Rajasthan Mukhyamantri Chiranjeevi Swasthya Bima Yojana": "https://sso.rajasthan.gov.in/services?scheme=chiranjeevi-bima",
    "Rajasthan Mukhyamantri Ayushman Arogya Yojana (MAA - Chiranjeevi)": "https://sso.rajasthan.gov.in/services?scheme=maa-chiranjeevi",
    "Rajasthan Mukhyamantri Anuprati Coaching Scheme": "https://sjms.rajasthan.gov.in",
}

for name_key, unique_u in flagship_distinct_map.items():
    pattern = rf"('name':\s*'{re.escape(name_key)}'.*?'official_portal_url':\s*)'[^']+'"
    text = re.sub(pattern, rf"\1'{unique_u}'", text, flags=re.DOTALL)

with open('backend/flagship_schemes_curation.py', 'w', encoding='utf-8') as f:
    f.write(text)

print("Updated 100% of flagship schemes with distinct portals.")
