replacements = {
    "karshak.ap.gov.in": "karshak.ap.gov.in",
    "ahd.bihar.gov.in": "state.bihar.gov.in",
    "ahd.maharashtra.gov.in": "krishi.maharashtra.gov.in",
    "apmip.ap.gov.in": "horticulture.ap.gov.in",
    "serviceonline.bihar.gov.in": "state.bihar.gov.in",
    "edistrict.odisha.gov.in": "investodisha.gov.in",
    "horticulture.gujarat.gov.in": "ikhedut.gujarat.gov.in",
    "horticulture.maharashtra.gov.in": "krishi.maharashtra.gov.in",
    "horticulture.odisha.gov.in": "agri.odisha.gov.in",
    "hortnet.gov.in": "hortharyana.gov.in",
    "www.digitalgujarat.gov.in": "www.digitalgujarat.gov.in",
    "irrigationap.cgg.gov.in": "irrigation.ap.gov.in",
    "edistrict.odisha.gov.in": "agri.odisha.gov.in",
    "krishi.jharkhand.gov.in": "jharsewa.jharkhand.gov.in",
    "kredl.karnataka.gov.in": "kredl.karnataka.gov.in",
    "mpfsts.mponline.gov.in": "mpkrishi.mp.gov.in",
    "nredcap.gov.in": "nredcap.in",
    "mpedistrict.gov.in": "scholarships.gov.in",
    "wbard.gov.in": "wb.gov.in",
    "wbfisheries.gov.in": "wb.gov.in",
    "onlineap.meeseva.gov.in": "onlineap.meeseva.gov.in",
    "karshak.ap.gov.in": "karshak.ap.gov.in"
}

files_to_update = [
    'flagship_schemes_curation.py',
    'ingest_kaggle_myscheme.py',
    'update_portals.py',
    'fix_broken_urls.py',
    'apply_clean_fallbacks.py',
    'apply_comprehensive_url_fix.py'
]

for filename in files_to_update:
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        modified = content
        count = 0
        for bad_domain, good_domain in replacements.items():
            if bad_domain in modified:
                cnt = modified.count(bad_domain)
                modified = modified.replace(bad_domain, good_domain)
                count += cnt
        if count > 0:
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(modified)
            print(f"Updated {filename}: replaced {count} domain occurrences.")
        else:
            print(f"No changes needed in {filename}.")
    except Exception as e:
        print(f"Error updating {filename}: {e}")
