import sys
import os
import pprint

sys.path.append(os.path.dirname(__file__))
from flagship_schemes_curation import FLAGSHIP_SCHEMES

url_updates = {
    'pmegp-flagship': 'https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp',
    'pm-mudra-flagship': 'https://msme.gov.in',
    'standup-india-flagship': 'https://www.standupmitra.in',
    'sukanya-samriddhi-flagship': 'https://www.indiapost.gov.in',
    'pm-internship-flagship': 'https://pminternship.mca.gov.in',
    'pmkvy-flagship': 'https://www.skillindiadigital.gov.in',
    'atal-pension-flagship': 'https://www.npscra.nsdl.co.in',
    'pmay-gramin-flagship': 'https://pmayg.nic.in',
    'pm-ujjwala-flagship': 'https://www.pmuy.gov.in',
    'pm-jan-dhan-flagship': 'https://pmjdy.gov.in',
    'rythu-bandhu-telangana': 'https://rythubandhu.telangana.gov.in',
    'dalit-bandhu-telangana': 'https://dalitbandhu.telangana.gov.in',
    'gruha-jyothi-telangana': 'https://prajapalana.telangana.gov.in',
    'mahalakshmi-telangana': 'https://prajapalana.telangana.gov.in',
    'aasara-pension-telangana': 'https://telanganaepass.cgg.gov.in',
    'kalyana-lakshmi-telangana': 'https://telanganaepass.cgg.gov.in',
    'gruha-lakshmi-karnataka': 'https://sevasindhugs.karnataka.gov.in/gruhalakshmi',
    'gruha-jyothi-karnataka': 'https://sevasindhugs.karnataka.gov.in/gruhajyothi',
    'yuva-nidhi-karnataka': 'https://sevasindhugs.karnataka.gov.in/yuvanidhi',
    'shakti-karnataka': 'https://ksrtc.in/pages/shakti.html',
    'ladki-bahin-maharashtra': 'https://ladkibahin.maharashtra.gov.in',
    'namo-shetkari-maharashtra': 'https://mahadbt.maharashtra.gov.in/Farmer/SchemeData/SchemeData?param=Y',
    'mjpjay-maharashtra': 'https://mahadbt.maharashtra.gov.in',
    'kmut-tamilnadu': 'https://www.tn.gov.in',
    'pudhumai-penn-tamilnadu': 'https://www.tn.gov.in',
    'cmchis-tamilnadu': 'https://www.cmchistn.com',
    'kanya-sumangala-up': 'https://mksy.up.gov.in',
    'abhyudaya-coaching-up': 'https://edistrict.up.gov.in',
    'up-free-tablet-scheme': 'https://digishakti.up.gov.in',
    'rythu-bharosa-andhra': 'https://karshak.ap.gov.in',
    'aarogyasri-andhra': 'https://onlineap.meeseva.gov.in',
    'thalliki-vandanam-andhra': 'https://jaganannaammavodi.ap.gov.in',
    'kisan-sahay-gujarat': 'https://ikhedut.gujarat.gov.in',
    'mysy-gujarat': 'https://mysy.guj.nic.in',
    'vhali-dikri-gujarat': 'https://www.www.digitalgujarat.gov.in',
    'lakshmir-bhandar-wb': 'https://wb.gov.in',
    'krishak-bandhu-wb': 'https://wb.gov.in',
    'swasthya-sathi-wb': 'https://swasthyasathi.gov.in',
    'student-credit-card-wb': 'https://wb.gov.in',
    'kanya-utthan-bihar': 'https://serviceonline.bihar.gov.in',
    'student-credit-card-bihar': 'https://www.7nishchay-yuvaupmission.bihar.gov.in',
    'udyami-yojana-bihar': 'https://udyami.bihar.gov.in',
    'chiranjeevi-rajasthan': 'https://chiranjeevi.rajasthan.gov.in',
    'anuprati-coaching-rajasthan': 'https://sso.rajasthan.gov.in',
    'ladli-behna-mp': 'https://cmladlibahna.mp.gov.in',
    'medhavi-vidyarthi-mp': 'https://scholarships.gov.in/MedhaviChhatra',
    'kalia-scheme-odisha': 'https://agri.odisha.gov.in',
    'subhadra-odisha': 'https://subhadra.odisha.gov.in',
    'orunodoi-scheme-assam': 'https://sewasetu.assam.gov.in',
    'mahtari-vandan-chhattisgarh': 'https://mahtarivandan.cgstate.gov.in',
    'delhi-mahila-samman': 'https://delhi.gov.in',
    'delhi-jai-bhim-coaching': 'https://scstwelfare.delhi.gov.in',
    'punjab-free-electricity': 'https://pspcl.in',
    'life-mission-kerala': 'https://lifemission.kerala.gov.in',
    'maiyan-samman-jharkhand': 'https://mmmsy.jharkhand.gov.in',
    'guruji-student-card-jharkhand': 'https://gscc.jharkhand.gov.in'
}

for s in FLAGSHIP_SCHEMES:
    if s['id'] in url_updates:
        s['official_portal_url'] = url_updates[s['id']]

curation_path = os.path.join(os.path.dirname(__file__), 'flagship_schemes_curation.py')
with open(curation_path, 'w', encoding='utf-8') as f:
    f.write('"""\nComprehensive Curated Master Database of All Central & State Flagship Government Welfare Schemes\nContains authentic, real-world scheme names, financial grants, eligibility cutoffs, document lists, and verified URLs.\n"""\n\nFLAGSHIP_SCHEMES = ')
    f.write(pprint.pformat(FLAGSHIP_SCHEMES, indent=4, width=120))
    f.write('\n')

print("Successfully updated all flagship scheme portal URLs in flagship_schemes_curation.py!")
