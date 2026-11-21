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

files_to_modify = [
    'flagship_schemes_curation.py',
    'ingest_kaggle_myscheme.py',
    'update_portals.py',
    'fix_broken_urls.py',
    'apply_clean_fallbacks.py',
    'apply_comprehensive_url_fix.py',
    'perform_domain_replacements.py'
]

for filename in files_to_modify:
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        modified = content
        count = 0
        for bad_url, good_url in replacement_map.items():
            if bad_url in modified:
                cnt = modified.count(bad_url)
                modified = modified.replace(bad_url, good_url)
                count += cnt
        # Also check domain names without protocol
        for bad_url, good_url in replacement_map.items():
            bad_d = bad_url.replace("https://", "").replace("http://", "")
            good_d = good_url.replace("https://", "").replace("http://", "")
            if bad_d in modified:
                cnt = modified.count(bad_d)
                modified = modified.replace(bad_d, good_d)
                count += cnt

        if count > 0:
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(modified)
            print(f"Updated {filename}: replaced {count} occurrences.")
        else:
            print(f"No occurrences in {filename}.")
    except Exception as e:
        print(f"Error modifying {filename}: {e}")
