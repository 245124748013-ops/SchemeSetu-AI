import ssl
import urllib.request
import urllib.error
from concurrent.futures import ThreadPoolExecutor, as_completed

ssl_context = ssl.create_default_context()
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

def is_ssl_clean(url):
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=4, context=ssl_context) as res:
            return (url, True, f"OK (Status {res.status})")
    except ssl.SSLError as e:
        return (url, False, f"SSL Error: {e}")
    except urllib.error.HTTPError as e:
        return (url, True, f"HTTP {e.code} (SSL Valid)")
    except Exception as e:
        return (url, False, f"Error: {e}")

candidates_to_test = {
    "https://apagrisnet.gov.in": [
        "https://karshak.ap.gov.in",
        "https://onlineap.meeseva.gov.in",
        "https://ap.gov.in",
        "https://services.india.gov.in"
    ],
    "https://aasara.telangana.gov.in": [
        "https://telanganaepass.cgg.gov.in",
        "https://prajapalana.telangana.gov.in",
        "https://ts.meeseva.telangana.gov.in",
        "https://telangana.gov.in"
    ],
    "https://ahd.telangana.gov.in": [
        "https://prajapalana.telangana.gov.in",
        "https://agri.telangana.gov.in",
        "https://telangana.gov.in"
    ],
    "https://agriharyana.gov.in": [
        "https://fasal.haryana.gov.in",
        "https://saralharyana.gov.in",
        "https://haryana.gov.in"
    ],
    "https://chandigarh.gov.in": [
        "https://services.india.gov.in",
        "https://serviceonline.gov.in"
    ],
    "https://dst.gov.in": [
        "https://online-inspire.gov.in",
        "https://dst.gov.in",
        "https://services.india.gov.in"
    ],
    "https://dwcd.karnataka.gov.in": [
        "https://sevasindhu.karnataka.gov.in",
        "https://karnataka.gov.in"
    ],
    "https://edistrict.py.gov.in": [
        "https://py.gov.in",
        "https://serviceonline.gov.in"
    ],
    "https://hrex.gov.in": [
        "https://saralharyana.gov.in",
        "https://haryana.gov.in"
    ],
    "https://industries.karnataka.gov.in": [
        "https://kredl.karnataka.gov.in",
        "https://sevasindhu.karnataka.gov.in",
        "https://karnataka.gov.in"
    ],
    "https://jaivikkheti.in": [
        "https://services.india.gov.in",
        "https://pmkisan.gov.in"
    ],
    "https://maitri.mahaonline.gov.in": [
        "https://mahadbt.maharashtra.gov.in",
        "https://maharashtra.gov.in"
    ],
    "https://mpmsme.gov.in": [
        "https://mpedistrict.gov.in",
        "https://mponline.gov.in",
        "https://mp.gov.in"
    ],
    "https://pbindustries.gov.in": [
        "https://connect.punjab.gov.in",
        "https://punjab.gov.in"
    ],
    "https://pmayg.dord.gov.in": [
        "https://services.india.gov.in",
        "https://pmkisan.gov.in"
    ],
    "https://scholarship.up.gov.in": [
        "https://edistrict.up.gov.in",
        "https://scholarships.gov.in"
    ],
    "https://upagriculture.com": [
        "https://edistrict.up.gov.in",
        "https://services.india.gov.in"
    ],
    "https://uphorticulture.gov.in": [
        "https://edistrict.up.gov.in",
        "https://services.india.gov.in"
    ],
    "https://www.mudra.org.in": [
        "https://udyamimitra.in",
        "https://msme.gov.in"
    ]
}

all_cands = set()
for cands in candidates_to_test.values():
    all_cands.update(cands)

results = {}
with ThreadPoolExecutor(max_workers=30) as executor:
    futures = {executor.submit(is_ssl_clean, c): c for c in all_cands}
    for f in as_completed(futures):
        url, clean, reason = f.result()
        results[url] = (clean, reason)

for bad_url, cands in candidates_to_test.items():
    print(f"\n--- Candidates for {bad_url} ---")
    chosen = None
    for cand in cands:
        clean, reason = results.get(cand, (False, "N/A"))
        print(f"  {cand} -> {'[SSL VALID]' if clean else '[FAILED]'}: {reason}")
        if clean and not chosen:
            chosen = cand
    print(f"  => Best replacement: {chosen}")
