import ssl
import urllib.request

ssl_context = ssl.create_default_context()
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

cands = [
    "https://www.myscheme.gov.in",
    "https://msme.gov.in",
    "https://pmsuryaghar.gov.in",
    "https://pmjdy.gov.in",
    "https://nha.gov.in/PM-JAY",
    "https://serviceonline.gov.in",
    "https://scholarships.gov.in",
    "https://udyamregistration.gov.in",
    "https://swachhbharatmission.ddws.gov.in"
]

for c in cands:
    try:
        req = urllib.request.Request(c, headers=headers)
        with urllib.request.urlopen(req, timeout=4, context=ssl_context) as res:
            print(f"[OK] {c} -> {res.status}")
    except Exception as e:
        print(f"[FAIL] {c} -> {e}")
