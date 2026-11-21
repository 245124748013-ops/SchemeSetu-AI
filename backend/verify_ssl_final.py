import ssl
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed

ssl_context = ssl.create_default_context()
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

replacement_map = {
    # Andhra Pradesh
    "https://apagrisnet.gov.in": "https://karshak.ap.gov.in",
    "https://hmfw.ap.gov.in": "https://onlineap.meeseva.gov.in",
    "https://ahd.ap.gov.in": "https://karshak.ap.gov.in",
    "https://ysraarogyasri.ap.gov.in": "https://onlineap.meeseva.gov.in",
    "https://ysrrythubharosa.ap.gov.in": "https://karshak.ap.gov.in",
    # Telangana
    "https://aasara.telangana.gov.in": "https://telanganaepass.cgg.gov.in",
    "https://ahd.telangana.gov.in": "https://prajapalana.telangana.gov.in",
    "https://aarogyasri.telangana.gov.in": "https://prajapalana.telangana.gov.in",
    # Haryana
    "https://agriharyana.gov.in": "https://fasal.haryana.gov.in",
    "https://hrex.gov.in": "https://saralharyana.gov.in",
    # Gujarat
    "https://digitalgujarat.gov.in": "https://www.digitalgujarat.gov.in",
    "https://investorgujarat.gujarat.gov.in": "https://www.digitalgujarat.gov.in",
    "https://wcd.gujarat.gov.in": "https://www.digitalgujarat.gov.in",
    "https://gujhealth.gujarat.gov.in": "https://www.digitalgujarat.gov.in",
    # DST / Science
    "https://dst.gov.in": "https://online-inspire.gov.in",
    # Karnataka
    "https://dwcd.karnataka.gov.in": "https://sevasindhu.karnataka.gov.in",
    "https://industries.karnataka.gov.in": "https://kredl.karnataka.gov.in",
    "https://kum.karnataka.gov.in": "https://kredl.karnataka.gov.in",
    # Puducherry / Chandigarh
    "https://edistrict.py.gov.in": "https://serviceonline.gov.in",
    "https://chandigarh.gov.in": "https://serviceonline.gov.in",
    # Organic / PMAY / Central
    "https://jaivikkheti.in": "https://serviceonline.gov.in",
    "https://pmayg.dord.gov.in": "https://serviceonline.gov.in",
    "https://pmkisan.gov.in": "https://serviceonline.gov.in",
    "https://pmsvanidhi.mohua.gov.in": "https://serviceonline.gov.in",
    "https://www.mudra.org.in": "https://msme.gov.in",
    # Tamil Nadu
    "https://kmut.tn.gov.in": "https://www.tn.gov.in",
    "https://wrd.tn.gov.in": "https://www.tn.gov.in",
    "https://pudhumaipenn.tn.gov.in": "https://www.tn.gov.in",
    # West Bengal
    "https://krishakbandhu.wb.gov.in": "https://wb.gov.in",
    "https://silpasathi.wb.gov.in": "https://wb.gov.in",
    "https://socialsecurity.wb.gov.in": "https://wb.gov.in",
    "https://wbscc.wb.gov.in": "https://wb.gov.in",
    # Maharashtra
    "https://maitri.mahaonline.gov.in": "https://mahadbt.maharashtra.gov.in",
    "https://www.jeevandayee.gov.in": "https://mahadbt.maharashtra.gov.in",
    # Bihar
    "https://medhasoft.bih.nic.in": "https://serviceonline.bihar.gov.in",
    "https://breda.bihar.gov.in": "https://serviceonline.bihar.gov.in",
    # MP
    "https://mpmsme.gov.in": "https://mpedistrict.gov.in",
    "https://scholarshipportal.mp.nic.in": "https://mpedistrict.gov.in",
    # Assam
    "https://orunodoi.assam.gov.in": "https://sewasetu.assam.gov.in",
    # Punjab
    "https://pbindustries.gov.in": "https://connect.punjab.gov.in",
    # UP
    "https://scholarship.up.gov.in": "https://edistrict.up.gov.in",
    "https://upagriculture.com": "https://edistrict.up.gov.in",
    "https://uphorticulture.gov.in": "https://edistrict.up.gov.in",
    "https://abhyuday.up.gov.in": "https://edistrict.up.gov.in",
    # Odisha
    "https://bsky.odisha.gov.in": "https://edistrict.odisha.gov.in",
    "https://kalia.odisha.gov.in": "https://edistrict.odisha.gov.in",
    "https://goswift.investodisha.gov.in": "https://edistrict.odisha.gov.in"
}

def test_url(target):
    req = urllib.request.Request(target, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=5, context=ssl_context) as res:
            return (target, True, f"OK ({res.status})")
    except Exception as e:
        return (target, False, str(e))

targets = set(replacement_map.values())
print(f"Testing {len(targets)} unique target portals...")

results = {}
with ThreadPoolExecutor(max_workers=20) as executor:
    futures = {executor.submit(test_url, t): t for t in targets}
    for f in as_completed(futures):
        target, ok, msg = f.result()
        results[target] = (ok, msg)
        print(f"  {'[OK]' if ok else '[FAIL]'} {target} -> {msg}")

all_ok = all(ok for ok, _ in results.values())
print(f"\nFinal Result: All {len(targets)} targets 100% clean SSL = {all_ok}")
