import re

# 1. Update flagship_schemes_curation.py
with open('backend/flagship_schemes_curation.py', 'r', encoding='utf-8') as f:
    text = f.read()

# Mahalakshmi -> TSRTC
text = re.sub(
    r"('id':\s*'telangana-mahalakshmi-flagship'.*?'official_portal_url':\s*)'https://prajapalana.telangana.gov.in'",
    r"\1'https://tsrtc.telangana.gov.in'",
    text,
    flags=re.DOTALL
)

# Shakti -> KSRTC
text = re.sub(
    r"('id':\s*'karnataka-shakti-flagship'.*?'official_portal_url':\s*)'https://sevasindhu.karnataka.gov.in'",
    r"\1'https://ksrtc.in'",
    text,
    flags=re.DOTALL
)

# Swasthya Sathi -> Swasthya Sathi
text = re.sub(
    r"('id':\s*'wb-swasthya-sathi-flagship'.*?'official_portal_url':\s*)'https://wb.gov.in'",
    r"\1'https://swasthyasathi.gov.in'",
    text,
    flags=re.DOTALL
)

# Palanhar -> SJE Rajasthan
text = re.sub(
    r"('id':\s*'rajasthan-palanhar-flagship'.*?'official_portal_url':\s*)'https://sso.rajasthan.gov.in'",
    r"\1'https://sje.rajasthan.gov.in'",
    text,
    flags=re.DOTALL
)

with open('backend/flagship_schemes_curation.py', 'w', encoding='utf-8') as f:
    f.write(text)

print("Updated flagship_schemes_curation.py with distinct portals.")
