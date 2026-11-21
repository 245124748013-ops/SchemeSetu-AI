import os
import json
import socket
import sys

sys.stdout.reconfigure(encoding='utf-8')

FALLBACK_MAPPINGS = {
    "https://aarogyasri.tg.nic.in": "https://telangana.gov.in",
    "https://prajapalana.telangana.gov.in": "https://telangana.gov.in",
    "https://aarogyasri.ap.gov.in": "https://ap.meeseva.gov.in",
    "https://onlineap.meeseva.gov.in": "https://ap.meeseva.gov.in",
    "https://kredl.karnataka.gov.in": "https://sevasindhu.karnataka.gov.in",
    "https://ebizkarnataka.gov.in": "https://sevasindhu.karnataka.gov.in",
    "https://www.scholarships.gov.in": "https://mpedistrict.gov.in",
    "https://scholarships.gov.in": "https://mpedistrict.gov.in",
    "https://scholarships.gov.in/MedhaviChhatra": "https://mpedistrict.gov.in",
    "https://industry.mp.gov.in": "https://mpedistrict.gov.in",
    "https://mpedistrict.gov.in": "https://mpedistrict.gov.in",
    "https://www.kviconline.gov.in": "https://msme.gov.in",
    "https://kviconline.gov.in": "https://msme.gov.in",
    "https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp": "https://msme.gov.in",
    "https://enps.nsdl.com": "https://pfrda.org.in",
    "https://www.npscra.nsdl.co.in": "https://pfrda.org.in",
    "https://himparivahan.hp.gov.in": "https://hp.gov.in",
    "https://edistrict.hp.gov.in": "https://hp.gov.in",
    "https://edistrict.up.gov.in": "https://edistrict.up.gov.in",
    "https://edistrict.up.gov.in": "https://edistrict.up.gov.in",
    "https://www.tn.gov.in": "https://tndce.tn.gov.in",
    "https://wb.gov.in": "https://egiyebangla.gov.in",
    "https://wb.gov.in": "https://egiyebangla.gov.in",
    "https://wb.gov.in": "https://egiyebangla.gov.in",
    "https://wbmsme.gov.in": "https://egiyebangla.gov.in",
    "https://sewasetu.assam.gov.in": "https://sewasetu.assam.gov.in",
    "https://dkbssy.cg.nic.in": "https://edistrict.cgstate.gov.in",
    "https://chdservices.gov.in": "https://serviceonline.gov.in",
    "https://services.nagaland.gov.in": "https://nagaland.gov.in",
    "https://sha.kerala.gov.in": "https://edistrict.kerala.gov.in",
    "https://keralaagriculture.gov.in": "https://edistrict.kerala.gov.in"
}

def verify_target(url):
    domain = url.split("//")[-1].split("/")[0].split(":")[0]
    try:
        ip = socket.gethostbyname(domain)
        return True, ip
    except Exception as e:
        return False, str(e)

print(f"Testing and validating {len(FALLBACK_MAPPINGS)} fallback portal replacements...")
valid_replacements = {}
for old_url, new_url in FALLBACK_MAPPINGS.items():
    ok, info = verify_target(new_url)
    if ok:
        valid_replacements[old_url] = new_url
        print(f"✅ {new_url} (Resolved: {info})")
    else:
        print(f"❌ Failed for {new_url}: {info}")

# Apply replacements to flagship_schemes_curation.py
curation_path = os.path.join(os.path.dirname(__file__), "flagship_schemes_curation.py")
with open(curation_path, "r", encoding="utf-8") as f:
    curation_content = f.read()

for old_u, new_u in valid_replacements.items():
    curation_content = curation_content.replace(f"'{old_u}'", f"'{new_u}'")
    curation_content = curation_content.replace(f'"{old_u}"', f'"{new_u}"')

with open(curation_path, "w", encoding="utf-8") as f:
    f.write(curation_content)
print(f"Updated flagship_schemes_curation.py")

# Apply replacements to ingest_kaggle_myscheme.py
ingest_path = os.path.join(os.path.dirname(__file__), "ingest_kaggle_myscheme.py")
with open(ingest_path, "r", encoding="utf-8") as f:
    ingest_content = f.read()

for old_u, new_u in valid_replacements.items():
    ingest_content = ingest_content.replace(f"'{old_u}'", f"'{new_u}'")
    ingest_content = ingest_content.replace(f'"{old_u}"', f'"{new_u}"')

with open(ingest_path, "w", encoding="utf-8") as f:
    f.write(ingest_content)
print(f"Updated ingest_kaggle_myscheme.py")

# Apply replacements to frontend schemesData.js
frontend_data_path = os.path.join(os.path.dirname(__file__), "..", "frontend", "src", "services", "schemesData.js")
if os.path.exists(frontend_data_path):
    with open(frontend_data_path, "r", encoding="utf-8") as f:
        frontend_content = f.read()
    for old_u, new_u in valid_replacements.items():
        frontend_content = frontend_content.replace(f"'{old_u}'", f"'{new_u}'")
        frontend_content = frontend_content.replace(f'"{old_u}"', f'"{new_u}"')
    with open(frontend_data_path, "w", encoding="utf-8") as f:
        f.write(frontend_content)
    print(f"Updated frontend schemesData.js")

print("All fallbacks applied successfully.")
