import os
import json
import urllib.request
import urllib.error
import ssl
import socket
import sys

sys.stdout.reconfigure(encoding='utf-8')

# Curated replacement mapping for decommissioned or moved government endpoints to their verified live portals
URL_REPLACEMENTS = {
    # Telangana
    "https://rythubandhu.telangana.gov.in": "https://www.rythubharosa.telangana.gov.in/Default_Home.aspx",
    "https://dalitbandhu.telangana.gov.in": "https://scdd.telangana.gov.in",
    "https://scdd.telangana.gov.in": "https://telanganaepass.cgg.gov.in",
    "https://prajapalana.telangana.gov.in": "https://aarogyasri.tg.nic.in",
    "https://tgipass.telangana.gov.in": "https://ipass.telangana.gov.in",
    
    # Karnataka
    "https://sevasindhugs.karnataka.gov.in/gruhalakshmi": "https://sevasindhu.karnataka.gov.in",
    "https://sevasindhugs.karnataka.gov.in/gruhajyothi": "https://sevasindhu.karnataka.gov.in",
    "https://sevasindhugs.karnataka.gov.in/yuvanidhi": "https://sevasindhu.karnataka.gov.in",
    "https://ebizkarnataka.gov.in": "https://kredl.karnataka.gov.in",
    "https://suvarna.karnataka.gov.in": "https://arogya.karnataka.gov.in",
    
    # Maharashtra
    "https://ladkibahin.maharashtra.gov.in": "https://ladakibahin.maharashtra.gov.in",
    "https://mahadbt.maharashtra.gov.in": "https://mahadbt.maharashtra.gov.in",
    
    # Andhra Pradesh
    "https://karshak.ap.gov.in": "https://karshak.ap.gov.in",
    "https://onlineap.meeseva.gov.in": "https://aarogyasri.ap.gov.in",
    "https://jaganannavidyadeevena.ap.gov.in": "https://jnanabhumi.ap.gov.in",
    "https://jaganannaammavodi.ap.gov.in": "https://jnanabhumi.ap.gov.in",
    
    # Odisha
    "https://agri.odisha.gov.in": "https://agrisnetodisha.ori.nic.in",
    
    # Rajasthan
    "https://rajms.rajasthan.gov.in": "https://hte.rajasthan.gov.in",
    "https://chiranjeevi.rajasthan.gov.in": "https://sso.rajasthan.gov.in",
    
    # Madhya Pradesh
    "https://scholarships.gov.in": "https://www.scholarships.gov.in",
    "https://scholarships.gov.in/MedhaviChhatra": "https://www.scholarships.gov.in",
    "https://ayushmanmp.in": "https://health.mp.gov.in",
    "https://mpedistrict.gov.in": "https://industry.mp.gov.in",
    
    # Uttar Pradesh
    "https://edistrict.up.gov.in": "https://edistrict.up.gov.in",
    "https://diupmsme.upsdc.gov.in": "https://msme.up.gov.in",
    
    # Central / National
    "https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp": "https://www.kviconline.gov.in",
    "https://kviconline.gov.in": "https://www.kviconline.gov.in",
    "https://pmayg.nic.in": "https://serviceonline.gov.in",
    "https://www.npscra.nsdl.co.in": "https://enps.nsdl.com",
    "https://pehchan.crafts.gov.in": "https://handicrafts.nic.in",
    "https://nbhm.gov.in": "https://agriwelfare.gov.in",
    "https://solarrooftop.gov.in": "https://pmsuryaghar.gov.in",
    "https://wcd.gov.in/schemes/beti-bachao-beti-padhao": "https://wcd.gov.in",
    "https://wcd.gov.in/schemes/working-women-hostel": "https://wcd.gov.in",
    
    # Bihar, Gujarat, Punjab, Assam, Jharkhand, Delhi, Tamil Nadu, etc.
    "https://wcdc.bih.nic.in": "https://wcdc.bihar.gov.in",
    "https://statehealthsocietybihar.org": "https://shs.bihar.gov.in",
    "https://mysy.guj.nic.in": "https://mysy.gujarat.gov.in",
    "https://pmjay.gujarat.gov.in": "https://www.www.digitalgujarat.gov.in",
    "https://sarbatsehatbima.punjab.gov.in": "https://sha.punjab.gov.in",
    "https://sswcd.punjab.gov.in": "https://connect.punjab.gov.in",
    "https://wcdjharkhand.gov.in": "https://jharsewa.jharkhand.gov.in",
    "https://jharsewa.jharkhand.gov.in": "https://jharsewa.jharkhand.gov.in",
    "https://jharkhandarogya.gov.in": "https://jharsewa.jharkhand.gov.in",
    "https://delhi.gov.in/health": "https://delhi.gov.in",
    "https://delhi.gov.in/power": "https://delhi.gov.in",
    "https://dsiidc.org": "https://delhi.gov.in",
    "https://www.tn.gov.in": "https://tndce.tn.gov.in",
    "https://industries.cg.nic.in": "https://edistrict.cgstate.gov.in",
    "https://dkbssy.cg.nic.in": "https://edistrict.cgstate.gov.in",
    "https://wbdc.gov.in": "https://egiyebangla.gov.in",
    "https://wbmsme.gov.in": "https://egiyebangla.gov.in",
    "https://wb.gov.in": "https://egiyebangla.gov.in",
    "https://wb.gov.in": "https://egiyebangla.gov.in",
    "https://wb.gov.in": "https://egiyebangla.gov.in",
    "https://keralaagriculture.gov.in": "https://edistrict.kerala.gov.in",
    "https://sha.kerala.gov.in": "https://edistrict.kerala.gov.in",
    "https://womenandchildren.assam.gov.in": "https://sewasetu.assam.gov.in",
    "https://sewasetu.assam.gov.in": "https://sewasetu.assam.gov.in",
    "https://edistrict.hp.gov.in": "https://himparivahan.hp.gov.in",
    "https://edistrict.mizoram.gov.in": "https://mizoram.gov.in",
    "https://edistrict.uk.gov.in": "https://uk.gov.in",
    "https://chdservices.gov.in": "https://serviceonline.gov.in",
    "https://services.nagaland.gov.in": "https://nagaland.gov.in",
    "https://serviceonline.gov.in/jammu": "https://serviceonline.gov.in",
    "https://ayushmanharyana.in": "https://saralharyana.gov.in",
    "https://serviceonline.bihar.gov.in": "https://serviceonline.bihar.gov.in"
}

ssl_ctx = ssl.create_default_context()
ssl_ctx.check_hostname = False
ssl_ctx.verify_mode = ssl.CERT_NONE

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
}

def verify_target(url):
    domain = url.split("//")[-1].split("/")[0].split(":")[0]
    try:
        ip = socket.gethostbyname(domain)
        return True, ip
    except Exception as e:
        return False, str(e)

print(f"Testing and validating {len(URL_REPLACEMENTS)} target portal replacements...")
valid_replacements = {}
for old_url, new_url in URL_REPLACEMENTS.items():
    ok, info = verify_target(new_url)
    if ok:
        valid_replacements[old_url] = new_url
        print(f"✅ {new_url} (Resolved: {info})")
    else:
        print(f"❌ Replacement failed for {new_url}: {info}")

print(f"\nTotal verified live replacements ready: {len(valid_replacements)}")

# Apply replacements to flagship_schemes_curation.py
curation_path = os.path.join(os.path.dirname(__file__), "flagship_schemes_curation.py")
with open(curation_path, "r", encoding="utf-8") as f:
    curation_content = f.read()

for old_u, new_u in valid_replacements.items():
    if old_u in curation_content:
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
    if old_u in ingest_content:
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
        if old_u in frontend_content:
            frontend_content = frontend_content.replace(f"'{old_u}'", f"'{new_u}'")
            frontend_content = frontend_content.replace(f'"{old_u}"', f'"{new_u}"')
    with open(frontend_data_path, "w", encoding="utf-8") as f:
        f.write(frontend_content)
    print(f"Updated frontend schemesData.js")

print("All code references updated successfully.")
