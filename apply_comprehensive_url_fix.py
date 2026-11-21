import re

REPLACEMENTS = {
    "https://aajeevika.gov.in": "https://rural.gov.in",
    "https://adwelfare.tn.gov.in": "https://www.tn.gov.in",
    "https://agrimachinery.nic.in": "https://agriwelfare.gov.in",
    "https://apscstudycircle.ap.gov.in": "https://jnanabhumi.ap.gov.in",
    "https://state.bihar.gov.in": "https://serviceonline.bihar.gov.in",
    "https://cottage.gujarat.gov.in": "https://anyror.gujarat.gov.in",
    "https://daman.nic.in": "https://ddd.gov.in",
    "https://deshkeincharge.delhi.gov.in": "https://delhi.gov.in",
    "https://www.www.digitalgujarat.gov.in": "https://anyror.gujarat.gov.in",
    "https://edistrict.tripura.gov.in": "https://tripura.gov.in",
    "https://egiyebangla.gov.in": "https://wb.gov.in",
    "https://geda.gujarat.gov.in": "https://gujaratinformation.gujarat.gov.in",
    "https://haryanascbc.gov.in": "https://saralharyana.gov.in",
    "https://ikhedut.gujarat.gov.in": "https://anyror.gujarat.gov.in",
    "https://jharkhandwelfare.gov.in": "https://jharsewa.jharkhand.gov.in",
    "https://jsdm.org.in": "https://jharsewa.jharkhand.gov.in",
    "https://meda.gov.in": "https://maharashtra.gov.in",
    "https://mprenewable.nic.in": "https://mponline.gov.in",
    "https://mprojgar.gov.in": "https://mponline.gov.in",
    "https://msmeonline.tn.gov.in": "https://www.tn.gov.in",
    "https://nredcap.ap.gov.in": "https://onlineap.meeseva.gov.in",
    "https://nsap.nic.in": "https://maandhan.in",
    "https://nulm.gov.in": "https://serviceonline.gov.in",
    "https://oasis.gov.in": "https://oasis.wb.gov.in",
    "https://oredaorissa.com": "https://odisha.gov.in",
    "https://pbssd.gov.in": "https://connect.punjab.gov.in",
    "https://pmay-urban.gov.in": "https://pmaymis.gov.in",
    "https://scstwelfare.bihar.gov.in": "https://serviceonline.bihar.gov.in",
    "https://sje.gujarat.gov.in": "https://gujaratinformation.gujarat.gov.in",
    "https://skillconnect.ka.gov.in": "https://sevasindhu.karnataka.gov.in",
    "https://socialjustice.mp.gov.in": "https://mponline.gov.in",
    "https://stscodisha.gov.in": "https://odisha.gov.in",
    "https://sw.karnataka.gov.in": "https://sevasindhu.karnataka.gov.in",
    "https://swd.up.gov.in": "https://edistrict.up.gov.in",
    "https://talimrojgar.gujarat.gov.in": "https://gujaratinformation.gujarat.gov.in",
    "https://teda.in": "https://cms.tn.gov.in",
    "https://tnagrisnet.tn.gov.in": "https://www.tn.gov.in",
    "https://tndce.tn.gov.in": "https://www.tn.gov.in",
    "https://tnsocialwelfare.tn.gov.in": "https://www.tn.gov.in",
    "https://tribal.cg.gov.in": "https://cgstate.gov.in",
    "https://upneeda.org.in": "https://edistrict.up.gov.in",
    "https://upsdm.gov.in": "https://edistrict.up.gov.in",
    "https://wbbcdev.gov.in": "https://wb.gov.in",
    "https://wbreda.gov.in": "https://wb.gov.in",
    "https://www.www.digitalgujarat.gov.in": "https://gujaratinformation.gujarat.gov.in",
    "https://wdcw.ap.gov.in": "https://onlineap.meeseva.gov.in",
    "https://welfarepunjab.gov.in": "https://connect.punjab.gov.in",
    "https://www.pmkvyofficial.org": "https://skillindia.gov.in",
    "https://www.tnesevai.tn.gov.in": "https://www.tn.gov.in",
    "https://karshak.ap.gov.in": "https://onlineap.meeseva.gov.in",
    "https://tnesevai.tn.gov.in": "https://www.tn.gov.in",
}

target_files = [
    'backend/ingest_kaggle_myscheme.py',
    'backend/flagship_schemes_curation.py',
    'frontend/src/services/schemesData.js'
]

for file_path in target_files:
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        updated = 0
        for old_url, new_url in REPLACEMENTS.items():
            if old_url in content:
                content = content.replace(old_url, new_url)
                updated += 1

        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)

        print(f"Updated {updated} URL patterns in {file_path}")
    except Exception as e:
        print(f"Error updating {file_path}: {e}")

print("Comprehensive URL updates applied successfully.")
