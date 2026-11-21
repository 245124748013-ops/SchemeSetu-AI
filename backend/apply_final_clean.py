import os
import json
import socket
import sys

sys.stdout.reconfigure(encoding='utf-8')

FINAL_CLEAN_MAP = {
    "https://dbtagriculture.bihar.gov.in": "https://serviceonline.bihar.gov.in",
    "https://edistrict.cgstate.gov.in": "https://cgstate.gov.in",
    "https://health.mp.gov.in": "https://mpedistrict.gov.in",
    "https://hp.gov.in": "https://himachal.nic.in",
    "https://nagaland.gov.in": "https://nagaland.nic.in",
    "https://uk.gov.in": "https://serviceonline.gov.in"
}

# Apply to flagship_schemes_curation.py
curation_path = os.path.join(os.path.dirname(__file__), "flagship_schemes_curation.py")
with open(curation_path, "r", encoding="utf-8") as f:
    curation_content = f.read()
for old_u, new_u in FINAL_CLEAN_MAP.items():
    curation_content = curation_content.replace(f"'{old_u}'", f"'{new_u}'")
    curation_content = curation_content.replace(f'"{old_u}"', f'"{new_u}"')
with open(curation_path, "w", encoding="utf-8") as f:
    f.write(curation_content)

# Apply to ingest_kaggle_myscheme.py
ingest_path = os.path.join(os.path.dirname(__file__), "ingest_kaggle_myscheme.py")
with open(ingest_path, "r", encoding="utf-8") as f:
    ingest_content = f.read()
for old_u, new_u in FINAL_CLEAN_MAP.items():
    ingest_content = ingest_content.replace(f"'{old_u}'", f"'{new_u}'")
    ingest_content = ingest_content.replace(f'"{old_u}"', f'"{new_u}"')
with open(ingest_path, "w", encoding="utf-8") as f:
    f.write(ingest_content)

# Apply to frontend schemesData.js
frontend_data_path = os.path.join(os.path.dirname(__file__), "..", "frontend", "src", "services", "schemesData.js")
if os.path.exists(frontend_data_path):
    with open(frontend_data_path, "r", encoding="utf-8") as f:
        frontend_content = f.read()
    for old_u, new_u in FINAL_CLEAN_MAP.items():
        frontend_content = frontend_content.replace(f"'{old_u}'", f"'{new_u}'")
        frontend_content = frontend_content.replace(f'"{old_u}"', f'"{new_u}"')
    with open(frontend_data_path, "w", encoding="utf-8") as f:
        f.write(frontend_content)

print("Final clean URL replacements written.")
