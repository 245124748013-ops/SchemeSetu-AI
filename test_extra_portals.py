import ssl
import urllib.request
import urllib.error
from concurrent.futures import ThreadPoolExecutor, as_completed

ssl_context = ssl.create_default_context()
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

def test_url(url):
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=4, context=ssl_context) as res:
            return (url, True, f"OK ({res.status})")
    except Exception as e:
        return (url, False, str(e))

urls_to_test = [
    "https://gujaratindia.gov.in",
    "https://digitalgujarat.gov.in",
    "https://ikhedut.gujarat.gov.in",
    "https://mysy.gujarat.gov.in",
    "https://cottage.gujarat.gov.in",
    "https://www.tn.gov.in",
    "https://tnega.tn.gov.in",
    "https://tnagrisnet.tn.gov.in",
    "https://wb.gov.in",
    "https://banglarbhumi.gov.in",
    "https://swasthyasathi.gov.in",
    "https://krishakbandhu.wb.gov.in",
    "https://socialsecurity.wb.gov.in",
    "https://services.india.gov.in",
    "https://serviceonline.gov.in",
    "https://edistrict.delhigovt.nic.in",
    "https://delhi.gov.in"
]

with ThreadPoolExecutor(max_workers=20) as executor:
    futures = {executor.submit(test_url, u): u for u in urls_to_test}
    for f in as_completed(futures):
        u, ok, msg = f.result()
        print(f"{'[OK]' if ok else '[FAIL]'} {u} -> {msg}")
