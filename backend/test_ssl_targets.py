import ssl
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed

ssl_context = ssl.create_default_context()
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

replacement_map = {
    "https://apagrisnet.gov.in": "https://karshak.ap.gov.in",
    "https://hmfw.ap.gov.in": "https://onlineap.meeseva.gov.in",
    "https://aasara.telangana.gov.in": "https://telanganaepass.cgg.gov.in",
    "https://ahd.telangana.gov.in": "https://prajapalana.telangana.gov.in",
    "https://aarogyasri.telangana.gov.in": "https://prajapalana.telangana.gov.in",
    "https://agriharyana.gov.in": "https://fasal.haryana.gov.in",
    "https://hrex.gov.in": "https://saralharyana.gov.in",
    "https://digitalgujarat.gov.in": "https://www.digitalgujarat.gov.in",
    "https://dst.gov.in": "https://online-inspire.gov.in",
    "https://dwcd.karnataka.gov.in": "https://sevasindhu.karnataka.gov.in",
    "https://industries.karnataka.gov.in": "https://kredl.karnataka.gov.in",
    "https://edistrict.py.gov.in": "https://serviceonline.gov.in",
    "https://chandigarh.gov.in": "https://serviceonline.gov.in",
    "https://jaivikkheti.in": "https://services.india.gov.in",
    "https://kmut.tn.gov.in": "https://www.tn.gov.in",
    "https://wrd.tn.gov.in": "https://www.tn.gov.in",
    "https://pudhumaipenn.tn.gov.in": "https://www.tn.gov.in",
    "https://krishakbandhu.wb.gov.in": "https://wb.gov.in",
    "https://silpasathi.wb.gov.in": "https://wb.gov.in",
    "https://socialsecurity.wb.gov.in": "https://wb.gov.in",
    "https://wbscc.wb.gov.in": "https://wb.gov.in",
    "https://maitri.mahaonline.gov.in": "https://mahadbt.maharashtra.gov.in",
    "https://www.jeevandayee.gov.in": "https://mahadbt.maharashtra.gov.in",
    "https://medhasoft.bih.nic.in": "https://serviceonline.bihar.gov.in",
    "https://mpmsme.gov.in": "https://mpedistrict.gov.in",
    "https://orunodoi.assam.gov.in": "https://sewasetu.assam.gov.in",
    "https://pbindustries.gov.in": "https://connect.punjab.gov.in",
    "https://pmayg.dord.gov.in": "https://services.india.gov.in",
    "https://pmkisan.gov.in": "https://services.india.gov.in",
    "https://pmsvanidhi.mohua.gov.in": "https://services.india.gov.in",
    "https://www.mudra.org.in": "https://udyamimitra.in",
    "https://scholarship.up.gov.in": "https://edistrict.up.gov.in",
    "https://upagriculture.com": "https://edistrict.up.gov.in",
    "https://uphorticulture.gov.in": "https://edistrict.up.gov.in",
    "https://abhyuday.up.gov.in": "https://edistrict.up.gov.in",
    "https://bsky.odisha.gov.in": "https://edistrict.odisha.gov.in"
}

def test_target(target_url):
    req = urllib.request.Request(target_url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=5, context=ssl_context) as res:
            return target_url, True, f"OK ({res.status})"
    except Exception as e:
        return target_url, False, str(e)

unique_targets = set(replacement_map.values())
print(f"Testing {len(unique_targets)} replacement target URLs for clean SSL...")

results = {}
with ThreadPoolExecutor(max_workers=20) as executor:
    futures = {executor.submit(test_target, t): t for t in unique_targets}
    for f in as_completed(futures):
        t, ok, msg = f.result()
        results[t] = (ok, msg)
        print(f"  {'[OK]' if ok else '[FAIL]'} {t} -> {msg}")

all_clean = all(ok for ok, _ in results.values())
print(f"\nAll replacements clean SSL: {all_clean}")
