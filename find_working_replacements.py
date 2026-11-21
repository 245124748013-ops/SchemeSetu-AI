import socket
import urllib.request
import urllib.error

candidates = {
    "ahd.ap.gov.in": [
        "https://ahd.telangana.gov.in",
        "https://animalhusbandry.ap.gov.in",
        "https://apagrisnet.gov.in",
        "https://onlineap.meeseva.gov.in"
    ],
    "ahd.maharashtra.gov.in": [
        "https://ahd.maharashtra.gov.in",
        "https://ahd.mahadbt.maharashtra.gov.in",
        "https://mahadbt.maharashtra.gov.in",
        "https://krishi.maharashtra.gov.in"
    ],
    "apmip.ap.gov.in": [
        "https://horticulture.ap.gov.in",
        "https://apagrisnet.gov.in",
        "https://onlineap.meeseva.gov.in"
    ],
    "breda.bihar.gov.in": [
        "https://state.bihar.gov.in/prdbihar",
        "https://energy.bihar.gov.in",
        "https://serviceonline.bihar.gov.in",
        "https://state.bihar.gov.in"
    ],
    "goswift.investodisha.gov.in": [
        "https://investodisha.gov.in",
        "https://odisha.gov.in",
        "https://edistrict.odisha.gov.in"
    ],
    "horticulture.maharashtra.gov.in": [
        "https://krishi.maharashtra.gov.in",
        "https://mahadbt.maharashtra.gov.in"
    ],
    "horticulture.odisha.gov.in": [
        "https://agri.odisha.gov.in",
        "https://odisha.gov.in",
        "https://edistrict.odisha.gov.in"
    ],
    "hortnet.gov.in": [
        "https://midh.gov.in",
        "https://agricoop.nic.in",
        "https://hortharyana.gov.in",
        "https://agricoop.gov.in"
    ],
    "investorgujarat.gujarat.gov.in": [
        "https://digitalgujarat.gov.in",
        "https://gujaratindia.gov.in",
        "https://ikhedut.gujarat.gov.in",
        "https://cottage.gujarat.gov.in"
    ],
    "irrigationap.cgg.gov.in": [
        "https://irrigation.ap.gov.in",
        "https://waterresources.ap.gov.in",
        "https://onlineap.meeseva.gov.in",
        "https://apagrisnet.gov.in"
    ],
    "kalia.odisha.gov.in": [
        "https://kalia.odisha.gov.in",
        "https://agri.odisha.gov.in",
        "https://odisha.gov.in"
    ],
    "krishi.jharkhand.gov.in": [
        "https://jharsewa.jharkhand.gov.in",
        "https://jharkhand.gov.in",
        "https://jharkhandegovernance.gov.in"
    ],
    "kum.karnataka.gov.in": [
        "https://kredl.karnataka.gov.in",
        "https://industries.karnataka.gov.in",
        "https://sevasindhu.karnataka.gov.in",
        "https://karnataka.gov.in"
    ],
    "scholarshipportal.mp.nic.in": [
        "https://scholarshipportal.mp.nic.in",
        "https://scholarships.gov.in",
        "https://mpedistrict.gov.in",
        "https://mp.gov.in"
    ],
    "ysraarogyasri.ap.gov.in": [
        "https://aarogyasri.ap.gov.in",
        "https://hmfw.ap.gov.in",
        "https://onlineap.meeseva.gov.in",
        "https://ap.gov.in"
    ],
    "ysrrythubharosa.ap.gov.in": [
        "https://karshak.ap.gov.in",
        "https://apagrisnet.gov.in",
        "https://agri.ap.gov.in",
        "https://onlineap.meeseva.gov.in"
    ]
}

from urllib.parse import urlparse

print("Testing candidate domains...")
for old_d, cands in candidates.items():
    print(f"\n--- Candidates for {old_d} ---")
    for url in cands:
        d = urlparse(url).hostname
        dns_ok = False
        try:
            ip = socket.gethostbyname(d)
            dns_ok = True
        except Exception as e:
            dns_ok = False
        print(f"  {url} -> DNS: {'OK ('+ip+')' if dns_ok else 'FAIL'}")
