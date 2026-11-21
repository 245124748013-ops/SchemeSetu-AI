import socket
from urllib.parse import urlparse

domain_tests = {
    "ahd.ap.gov.in": ["apagrisnet.gov.in", "onlineap.meeseva.gov.in", "ap.gov.in"],
    "ahd.bihar.gov.in": ["state.bihar.gov.in", "serviceonline.bihar.gov.in", "dbtagriculture.bihar.gov.in"],
    "ahd.maharashtra.gov.in": ["krishi.maharashtra.gov.in", "mahadbt.maharashtra.gov.in"],
    "apmip.ap.gov.in": ["horticulture.ap.gov.in", "apagrisnet.gov.in"],
    "breda.bihar.gov.in": ["state.bihar.gov.in", "serviceonline.bihar.gov.in"],
    "goswift.investodisha.gov.in": ["investodisha.gov.in", "odisha.gov.in"],
    "horticulture.gujarat.gov.in": ["ikhedut.gujarat.gov.in", "digitalgujarat.gov.in"],
    "horticulture.maharashtra.gov.in": ["krishi.maharashtra.gov.in", "mahadbt.maharashtra.gov.in"],
    "horticulture.odisha.gov.in": ["agri.odisha.gov.in", "odisha.gov.in"],
    "hortnet.gov.in": ["hortharyana.gov.in", "midh.gov.in"],
    "investorgujarat.gujarat.gov.in": ["digitalgujarat.gov.in", "cottage.gujarat.gov.in", "gujaratindia.gov.in"],
    "irrigationap.cgg.gov.in": ["irrigation.ap.gov.in", "onlineap.meeseva.gov.in"],
    "kalia.odisha.gov.in": ["agri.odisha.gov.in", "odisha.gov.in"],
    "krishi.jharkhand.gov.in": ["jharsewa.jharkhand.gov.in", "jharkhand.gov.in"],
    "kum.karnataka.gov.in": ["industries.karnataka.gov.in", "kredl.karnataka.gov.in", "sevasindhu.karnataka.gov.in"],
    "mpfsts.mponline.gov.in": ["mpkrishi.mp.gov.in", "mponline.gov.in", "mpedistrict.gov.in"],
    "nredcap.gov.in": ["nredcap.in", "onlineap.meeseva.gov.in", "ap.gov.in"],
    "scholarshipportal.mp.nic.in": ["scholarships.gov.in", "mpedistrict.gov.in", "samagra.gov.in"],
    "wbard.gov.in": ["wb.gov.in", "socialsecurity.wb.gov.in"],
    "wbfisheries.gov.in": ["wb.gov.in", "socialsecurity.wb.gov.in"],
    "ysraarogyasri.ap.gov.in": ["hmfw.ap.gov.in", "onlineap.meeseva.gov.in"],
    "ysrrythubharosa.ap.gov.in": ["karshak.ap.gov.in", "apagrisnet.gov.in"]
}

print("Verifying replacements for all 22 domains:")
final_mapping = {}
for bad, cands in domain_tests.items():
    working = None
    for cand in cands:
        try:
            ip = socket.gethostbyname(cand)
            working = cand
            print(f"  [OK] {bad} -> {cand} ({ip})")
            break
        except Exception as e:
            pass
    if not working:
        print(f"  [FAIL ALL] {bad} had no working candidates!")
    else:
        final_mapping[bad] = working

print(f"\nSuccessfully resolved: {len(final_mapping)} / {len(domain_tests)}")
