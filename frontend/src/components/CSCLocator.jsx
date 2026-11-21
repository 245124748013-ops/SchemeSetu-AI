import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Building, 
  Phone, 
  Clock, 
  ExternalLink, 
  Search, 
  Navigation 
} from 'lucide-react';
import { bhashini } from '../services/bhashiniService';

export const CSC_SERVICES_MAP = {
  'Startup India Seed Verification': {
    te: 'స్టార్టప్ ఇండియా సీడ్ ధృవీకరణ',
    hi: 'स्टार्टअप इंडिया सीड सत्यापन',
    kn: 'ಸ್ಟಾರ್ಟ್ಅಪ್ ಇಂಡಿಯಾ ಸೀಡ್ ಪರಿಶೀಲನೆ',
    ta: 'ஸ்டார்ட்அப் இந்தியா விதை சரிபார்ப்பு',
    mr: 'स्टार्टअप इंडिया सीड पडताळणी'
  },
  'PMKVY 4.0 Enrollment': {
    te: 'పీఎం కౌశల్ వికాస్ (PMKVY 4.0) నమోదు',
    hi: 'पीएमकेवीवाई 4.0 कौशल पंजीकरण',
    kn: 'ಪಿಎಂಕೆವಿವೈ 4.0 ಕೌಶಲ್ಯ ನೋಂದಣಿ',
    ta: 'PMKVY 4.0 திறன் பதிவு',
    mr: 'पीएमकेव्हीवाय 4.0 कौशल्य नोंदणी'
  },
  'Stand-Up India': {
    te: 'స్టాండ్-అప్ ఇండియా రుణ సహాయం',
    hi: 'स्टैंड-अप इंडिया ऋण सहायता',
    kn: 'ಸ್ಟ್ಯಾಂಡ್-ಅಪ್ ಇಂಡಿಯಾ ಸಾಲ ನೆರವು',
    ta: 'ஸ்டாண்ட்-அப் இந்தியா கடன்',
    mr: 'स्टँड-अप इंडिया कर्ज सहाय्य'
  },
  'Ganga Kalyana Application': {
    te: 'గంగా కళ్యాణ ఉచిత బోర్‌వెల్ దరఖాస్తు',
    hi: 'गंगा कल्याण बोरवेल योजना',
    kn: 'ಗಂಗಾ ಕಲ್ಯಾಣ ಉಚಿತ ಬೋರ್‌ವೆಲ್ ಅರ್ಜಿ',
    ta: 'கங்கா கல்யாண விண்ணப்பம்',
    mr: 'गंगा कल्याण बोरवेल अर्ज'
  },
  'Raitha Vidya Nidhi': {
    te: 'రైత విద్యా నిధి స్కాలర్‌షిప్',
    hi: 'रैता विद्या निधि छात्रवृत्ति',
    kn: 'ರೈತ ವಿದ್ಯಾ ನಿಧಿ ವಿದ್ಯಾರ್ಥಿವೇತನ',
    ta: 'ரைத்த வித்யா நிதி உதவித்தொகை',
    mr: 'रैता विद्या निधी शिष्यवृत्ती'
  },
  'KCC Seva': {
    te: 'కిసాన్ క్రెడిట్ కార్డ్ (KCC) సేవలు',
    hi: 'किसान क्रेडिट कार्ड (KCC) सेवा',
    kn: 'ಕಿಸಾನ್ ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ (KCC) ಸೇವೆ',
    ta: 'விவசாய கடன் அட்டை (KCC) சேவை',
    mr: 'किसान क्रेडिट कार्ड सेवा'
  },
  'PM-KISAN DBT': {
    te: 'పీఎం కిసాన్ DBT నిధుల బదిలీ',
    hi: 'पीएम-किसान डीबीटी भुगतान',
    kn: 'ಪಿಎಂ-ಕಿಸಾನ್ ಡಿಬಿಟಿ ಹಣ ವರ್ಗಾವಣೆ',
    ta: 'பிஎம்-கிசான் நேரடி மானியம்',
    mr: 'पीएम-किसान डीबीटी हस्तांतरण'
  },
  'e-KYC': {
    te: 'ఆధార్ బయోమెట్రిక్ e-KYC',
    hi: 'आधार बायोमेट्रिक ई-केवाईसी',
    kn: 'ಆಧಾರ್ ಬಯೋಮೆಟ್ರಿಕ್ ಇ-ಕೆವೈಸಿ',
    ta: 'ஆதார் பயோமெட்ரிக் இ-கேஒய்சி',
    mr: 'आधार बायोमेट्रिक ई-केवायसी'
  },
  'PM-KISAN Registration': {
    te: 'పీఎం కిసాన్ కొత్త రైతు నమోదు',
    hi: 'पीएम-किसान नया किसान पंजीकरण',
    kn: 'ಪಿಎಂ-ಕಿಸಾನ್ ಹೊಸ ರೈತ ನೋಂದಣಿ',
    ta: 'பிஎம்-கிசான் புதிய பதிவு',
    mr: 'पीएम-किसान नवीन शेतकरी नोंदणी'
  },
  'PMEGP DPR Drafting': {
    te: 'PMEGP ప్రాజెక్ట్ రిపోర్ట్ (DPR) తయారీ',
    hi: 'पीएमईजीपी डीपीआर व प्रोजेक्ट रिपोर्ट',
    kn: 'ಪಿಎಂಇಜಿಪಿ ಯೋಜನೆ ವರದಿ ಸಿದ್ಧತೆ',
    ta: 'PMEGP திட்ட அறிக்கை தயாரித்தல்',
    mr: 'पीएमईजीपी डीपीआर प्रकल्प अहवाल'
  },
  'Ayushman Card': {
    te: 'ఆయుష్మాన్ భారత్ హెల్త్ కార్డ్ జారీ',
    hi: 'आयुष्मान गोल्डन कार्ड निर्माण',
    kn: 'ಆಯುಷ್ಮಾನ್ ಭಾರತ್ ಆರೋಗ್ಯ ಕಾರ್ಡ್',
    ta: 'ஆயுஷ்மான் பாரத் கார்டு',
    mr: 'आयुष्मान भारत आरोग्य कार्ड'
  },
  'Stand-Up India Handholding': {
    te: 'స్టాండ్-అప్ ఇండియా ప్రాజెక్ట్ గైడెన్స్',
    hi: 'स्टैंड-अप इंडिया प्रोजेक्ट मार्गदर्शन',
    kn: 'ಸ್ಟ್ಯಾಂಡ್-ಅಪ್ ಇಂಡಿಯಾ ಮಾರ್ಗದರ್ಶನ',
    ta: 'ஸ்டாண்ட்-அப் இந்தியா வழிகாட்டல்',
    mr: 'स्टँड-अप इंडिया प्रकल्प मार्गदर्शन'
  },
  'PM Vishwakarma Biometric': {
    te: 'పీఎం విశ్వకర్మ బయోమెట్రిక్ నమోదు',
    hi: 'पीएम विश्वकर्मा बायोमेट्रिक सत्यापन',
    kn: 'ಪಿಎಂ ವಿಶ್ವಕರ್ಮ ಬಯೋಮೆಟ್ರಿಕ್ ನೋಂದಣಿ',
    ta: 'பிஎம் விஸ்வகர்மா பயோமெட்ரிக் பதிவு',
    mr: 'पीएम विश्वकर्मा बायोमेट्रिक नोंदणी'
  },
  'Udyam Registration': {
    te: 'ఉద్యమ్ ఆధార్ MSME రిజిస్ట్రేషన్',
    hi: 'उद्यम आधार एमएसएमई पंजीकरण',
    kn: 'ಉದ್ಯಮ್ ಎಂಎಸ್‌ಎಂಇ ನೋಂದಣಿ',
    ta: 'உத்யம் எம்எஸ்எம்இ பதிவு',
    mr: 'उद्यम एमएसएमई नोंदणी'
  },
  'PMAY-G Survey': {
    te: 'పీఎం ఆవాస్ యోజన గ్రామీణ సర్వే',
    hi: 'पीएमएवाई-जी आवास सर्वेक्षण',
    kn: 'ಪಿಎಂ ಆವಾಸ್ ಗ್ರಾಮೀಣ ಸಮೀಕ್ಷೆ',
    ta: 'பிரதமர் கிராமப்புற வீடு கணக்கெடுப்பு',
    mr: 'पीएम आवास ग्रामीण सर्वेक्षण'
  },
  'Mudra Loan Application': {
    te: 'ముద్ర వ్యాపార రుణ దరఖాస్తు',
    hi: 'मुद्रा ऋण ऑनलाइन आवेदन',
    kn: 'ಮುದ್ರಾ ಸಾಲದ ಅರ್ಜಿ',
    ta: 'முத்ரா கடன் விண்ணப்பம்',
    mr: 'मुद्रा कर्ज अर्ज'
  },
  'Aadhaar Seeding': {
    te: 'బ్యాంక్ ఖాతా ఆధార్ లింకింగ్',
    hi: 'बैंक खाता आधार सीडिंग',
    kn: 'ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಆಧಾರ್ ಲಿಂಕ್',
    ta: 'வங்கி கணக்கு ஆதார் இணைப்பு',
    mr: 'बँक खाते आधार लिंकिंग'
  },
  'Mudra Application': {
    te: 'ముద్ర లోన్ దరఖాస్తు సహాయం',
    hi: 'मुद्रा ऋण सहायता',
    kn: 'ಮುದ್ರಾ ಸಾಲ ನೆರವು',
    ta: 'முத்ரா கடன் உதவி',
    mr: 'मुद्रा कर्ज सहाय्य'
  },
  'PMEGP Subsidy Filing': {
    te: 'PMEGP 35% సబ్సిడీ ఫైలింగ్',
    hi: 'पीएमईजीपी 35% सब्सिडी आवेदन',
    kn: 'ಪಿಎಂಇಜಿಪಿ 35% ಸಬ್ಸಿಡಿ ಅರ್ಜಿ',
    ta: 'PMEGP 35% மானிய விண்ணப்பம்',
    mr: 'पीएमईजीपी 35% सबसिडी अर्ज'
  },
  'PM SVANidhi UPI Cashback': {
    te: 'పీఎం స్వనిధి డిజిటల్ క్యాష్‌బ్యాక్',
    hi: 'पीएम स्वनिधि डिजिटल कैशबैक',
    kn: 'ಪಿಎಂ ಸ್ವನಿಧಿ ಡಿಜಿಟಲ್ ಕ್ಯಾಶ್‌ಬ್ಯಾಕ್',
    ta: 'பிஎம் ஸ்வநிதி டிஜிட்டல் கேஷ்பேக்',
    mr: 'पीएम स्वनिधी डिजिटल कॅशबॅक'
  },
  '7/12 Land Record Verification': {
    te: '7/12 & పహాణీ భూమి రికార్డుల ధృవీకరణ',
    hi: '7/12 भूलेख सत्यापन',
    kn: '7/12 ಭೂದಾಖಲೆಗಳ ಪರಿಶೀಲನೆ',
    ta: '7/12 நில ஆவண சரிபார்ப்பு',
    mr: '7/12 भूमी अभिलेख पडताळणी'
  },
  'NRLM SHG Loan': {
    te: 'NRLM మహిళా స్వయం సహాయక సంఘాల రుణం',
    hi: 'एनआरएलएम महिला स्वयं सहायता समूह ऋण',
    kn: 'ಎನ್‌ಆರ್‌ಎಲ್‌ಎಂ ಸ್ವಸಹಾಯ ಸಂಘಗಳ ಸಾಲ',
    ta: 'NRLM மகளிர் குழு கடன்',
    mr: 'एनआरएलएम महिला बचत गट कर्ज'
  },
  'Kudumbashree Loan Linkage': {
    te: 'కుటుంబశ్రీ మహిళా రుణ అనుసంధానం',
    hi: 'कुदुम्बश्री ऋण लिंकेज',
    kn: 'ಕುಡುಂಬಶ್ರೀ ಸಾಲ ಸಂಪರ್ಕ',
    ta: 'குடும்பஸ்ரீ கடன் இணைப்பு',
    mr: 'कुदुंबश्री कर्ज जोडणी'
  },
  'Ayushman Golden Card': {
    te: 'ఆయుష్మాన్ గోల్డెన్ కార్డ్ జారీ',
    hi: 'आयुष्मान भारत गोल्डन कार्ड',
    kn: 'ಆಯುಷ್ಮಾನ್ ಗೋಲ್ಡನ್ ಕಾರ್ಡ್',
    ta: 'ஆயுஷ்மான் கோல்டன் கார்டு',
    mr: 'आयुष्मान गोल्डन कार्ड'
  },
  'PMMSY Aquaculture Registration': {
    te: 'మత్స్య సంపద ఆక్వాకల్చర్ నమోదు',
    hi: 'मत्स्य संपदा एक्वाकल्चर पंजीकरण',
    kn: 'ಮತ್ಸ್ಯ ಸಂಪದ ಜಲಕೃಷಿ ನೋಂದಣಿ',
    ta: 'மத்ஸ்ய சம்பதா மீன்வளர்ப்பு பதிவு',
    mr: 'मत्स्य संपदा मत्स्यपालन नोंदणी'
  },
  'MSME Udyam Registration': {
    te: 'ఉద్యమ్ ఆధార్ MSME రిజిస్ట్రేషన్',
    hi: 'उद्यम आधार एमएसएमई पंजीकरण',
    kn: 'ಉದ್ಯಮ್ ಎಂಎಸ್‌ಎಂಇ ನೋಂದಣಿ',
    ta: 'உத்யம் எம்எஸ்எம்இ பதிவு',
    mr: 'उद्यम एमएसएमई नोंदणी'
  },
  'PM-KISAN e-KYC': {
    te: 'పీఎం కిసాన్ బయోమెట్రిక్ e-KYC',
    hi: 'पीएम-किसान बायोमेट्रिक ई-केवाईसी',
    kn: 'ಪಿಎಂ-ಕಿಸಾನ್ ಇ-ಕೆವೈಸಿ ಪರಿಶೀಲನೆ',
    ta: 'பிஎம்-கிசான் இ-கேஒய்சி',
    mr: 'पीएम-किसान बायोमेट्रिक ई-केवायसी'
  },
  'Stand-Up India Bank Linkage': {
    te: 'స్టాండ్-అప్ ఇండియా బ్యాంక్ అనుసంధానం',
    hi: 'स्टैंड-अप इंडिया बैंक लिंकेज',
    kn: 'ಸ್ಟ್ಯಾಂಡ್-ಅಪ್ ಇಂಡಿಯಾ ಬ್ಯಾಂಕ್ ಸಂಪರ್ಕ',
    ta: 'ஸ்டாண்ட்-அப் இந்தியா வங்கி இணைப்பு',
    mr: 'स्टँड-अप इंडिया बँक जोडणी'
  },
  'PMFME Food Processing DPR': {
    te: 'పీఎం ఫుడ్ ప్రాసెసింగ్ ప్రాజెక్ట్ రిపోర్ట్',
    hi: 'पीएमएफएमई खाद्य प्रसंस्करण परियोजना',
    kn: 'ಪಿಎಂಎಫ್‌ಎಂಇ ಆಹಾರ ಸಂಸ್ಕರಣೆ ವರದಿ',
    ta: 'உணவு பதப்படுத்துதல் திட்ட அறிக்கை',
    mr: 'पीएमएफएमई अन्न प्रक्रिया प्रकल्प अहवाल'
  },
  'All Central Schemes Guidance': {
    te: 'అన్ని కేంద్ర సంక్షేమ పథకాల మార్గదర్శకత్వం',
    hi: 'सभी केंद्रीय योजनाओं का मार्गदर्शन',
    kn: 'ಎಲ್ಲಾ ಕೇಂದ್ರ ಯೋಜನೆಗಳ ಮಾರ್ಗದರ್ಶನ',
    ta: 'அனைத்து மத்திய திட்ட வழிகாட்டுதல்',
    mr: 'सर्व केंद्रीय योजनांचे मार्गदर्शन'
  },
  'e-KYC Grievance Redressal': {
    te: 'e-KYC సమస్యల తక్షణ పరిష్కారం',
    hi: 'ई-केवाईसी शिकायत निवारण',
    kn: 'ಇ-ಕೆವೈಸಿ ದೂರು ಪರಿಹಾರ',
    ta: 'இ-கேஒய்சி குறைதீர்ப்பு',
    mr: 'ई-केवायसी तक्रार निवारण'
  },
  'Portal Application Assistance': {
    te: 'ఆన్‌లైన్ పోర్టల్ దరఖాస్తు సహాయం',
    hi: 'ऑनलाइन पोर्टल आवेदन सहायता',
    kn: 'ಆನ್‌ಲೈನ್ ಪೋರ್ಟಲ್ ಅರ್ಜಿ ಸಹಾಯ',
    ta: 'ஆன்லைன் விண்ணப்ப உதவி',
    mr: 'ऑनलाइन पोर्टल अर्ज सहाय্য'
  },
  'Rythu Bharosa Verification': {
    te: 'రైతు భరోసా అర్హత ధృవీకరణ',
    hi: 'रैथु भरोसा पात्रता सत्यापन',
    kn: 'ರೈತ ಭರೋಸಾ ಪರಿಶೀಲನೆ',
    ta: 'ரைத்து பரோசா சரிபார்ப்பு',
    mr: 'रैथू भरोसा पडताळणी'
  },
  'Rythu Bima Nomination': {
    te: 'రైతు బీమా నామినీ నమోదు',
    hi: 'रैथु बीमा नॉमिनी नामांकन',
    kn: 'ರೈತ ಬಿಮಾ ನಾಮಿನಿ ನೋಂದಣಿ',
    ta: 'ரைத்து பீமா நியமனம்',
    mr: 'రైథూ విమా నామినేషన్'
  },
  'Dharani Passbook e-KYC': {
    te: 'ధరణి పాస్‌బుక్ & రికార్డుల e-KYC',
    hi: 'धरणी पासबुक ई-केवाईसी',
    kn: 'ಧರಣಿ ಪಾಸ್‌ಬುಕ್ ಇ-ಕೆವೈಸಿ',
    ta: 'தரணி பாஸ்புக் இ-கேஒய்சி',
    mr: 'धरणी पासबुक ई-केवायसी'
  },
  'Crop Loan Waiver Inquiry': {
    te: 'పంట రుణమాఫీ స్థితి పరిశీలన',
    hi: 'फसल ऋण माफी स्थिति जांच',
    kn: 'ಬೆಳೆ ಸಾಲ ಮನ್ನಾ ಸ್ಥಿತಿ ಪರಿಶೀಲನೆ',
    ta: 'பயிர் கடன் தள்ளுபடி விவரம்',
    mr: 'पीक कर्ज माफी स्थिती तपासणी'
  },
  'Aasara Pension Enrollment': {
    te: 'ఆసరా పెన్షన్ కొత్త దరఖాస్తు',
    hi: 'आसरा पेंशन नया आवेदन',
    kn: 'ಆಸರಾ ಪಿಂಚಣಿ ಹೊಸ ಅರ್ಜಿ',
    ta: 'ஆசரா ஓய்வூதிய பதிவு',
    mr: 'आसरा पेन्शन नवीन अर्ज'
  },
  'YSR Rythu Bharosa': {
    te: 'వైఎస్సార్ రైతు భరోసా నమోదు',
    hi: 'वाईएसआर रैथु भरोसा पंजीकरण',
    kn: 'ವೈಎಸ್ಆರ್ ರೈತ ಭರೋಸಾ',
    ta: 'ஒய்எஸ்ஆர் ரைத்து பரோசா',
    mr: 'वायएसआर रैथू भरोसा'
  },
  'e-Crop Booking Verification': {
    te: 'ఈ-క్రాప్ బుకింగ్ ధృవీకరణ',
    hi: 'ई-क्रॉप बुकिंग सत्यापन',
    kn: 'ಇ-ಕ್ರಾಪ್ ಬುಕಿಂಗ್ ಪರಿಶೀಲನೆ',
    ta: 'இ-பயிர் பதிவு சரிபார்ப்பு',
    mr: 'ई-पीक नोंदणी पडताळणी'
  },
  'Free Crop Insurance': {
    te: 'ఉచిత పంట బీమా నమోదు',
    hi: 'निःशुल्क फसल बीमा',
    kn: 'ಉಚಿತ ಬೆಳೆ ವಿಮೆ',
    ta: 'இலவச பயிர் காப்பீடு',
    mr: 'मोफत पीक विमा'
  },
  'Jala Kala Enrollment': {
    te: 'వైఎస్సార్ జలకళ ఉచిత బోర్‌వెల్ నమోదు',
    hi: 'वाईएसआर जल कला निःशुल्क बोरवेल',
    kn: 'ವೈಎಸ್ಆರ್ ಜಲ ಕಲಾ ಬೋರ್‌ವೆಲ್ ನೋಂದಣಿ',
    ta: 'ஒய்எஸ்ஆர் ஜல கலா போர்வெல்',
    mr: 'वायएसआर जल कला बोअरवेल नोंदणी'
  },
  'Kalaignar Magalir Urimai': {
    te: 'కలైంజర్ మహిళా హక్కు పథకం',
    hi: 'कलैग्नार महिला अधिकार योजना',
    kn: 'ಕಲೈಂಜರ್ ಮಹಿಳಾ ಹಕ್ಕು ಯೋಜನೆ',
    ta: 'கலைஞர் மகளிர் உரிமைத் திட்டம்',
    mr: 'कलैग्नार महिला अधिकार योजना'
  },
  'Pudhumai Penn': {
    te: 'పుదుమై పెణ్ ఉన్నత విద్యా ప్రోత్సాహకం',
    hi: 'पुधुमाई पेन उच्च शिक्षा प्रोत्साहन',
    kn: 'ಪುದುಮೈ ಪೆಣ್ ವಿದ್ಯಾರ್ಥಿವೇತನ',
    ta: 'புதுமைப் பெண் திட்டம்',
    mr: 'पुधुमाई पेन उच्च शिक्षण'
  },
  'Uzhavar Pathukappu': {
    te: 'ఉళవర్ రైతు సామాజిక భద్రత',
    hi: 'उझावर किसान सामाजिक सुरक्षा',
    kn: 'ಉಳವರ್ ರೈತ ಸಾಮಾಜಿಕ ಭದ್ರತೆ',
    ta: 'உழவர் பாதுகாப்புத் திட்டம்',
    mr: 'उझावर शेतकरी सामाजिक सुरक्षा'
  }
};

export const CSC_CENTRE_NAMES_MAP = {
  'Bangalore One / CSC Kendra - Indiranagar': {
    te: 'బెంగళూరు వన్ / CSC కేంద్రం - ఇందిరానగర్',
    kn: 'ಬೆಂಗಳೂರು ಒನ್ / CSC ಕೇಂದ್ರ - ಇಂದಿರಾನಗರ',
    hi: 'बेंगलुरु वन / सीएससी केंद्र - इंदिरानगर',
    ta: 'பெங்களூரு ஒன் / சிஎஸ்இ மையம் - இந்திராநகர்',
    mr: 'बेंगळुरू वन / सीएससी केंद्र - इंदिरानगर'
  },
  'Grama One Kendra - Mysuru Rural': {
    te: 'గ్రామ వన్ కేంద్రం - మైసూర్ గ్రామీణ',
    kn: 'ಗ್ರಾಮ ಒನ್ ಕೇಂದ್ರ - ಮೈಸೂರು ಗ್ರಾಮಾಂತರ',
    hi: 'ग्राम वन केंद्र - मैसूर ग्रामीण',
    ta: 'கிராம ஒன் மையம் - மைசூர் ஊரகம்',
    mr: 'ग्राम वन केंद्र - म्हैसूर ग्रामीण'
  },
  'MeeSeva / CSC Digital Kendra - Hyderabad Abids': {
    te: 'మీసేవ / CSC డిజిటల్ కేంద్రం - హైదరాబాద్ అబిడ్స్',
    kn: 'ಮೀಸೇವ / ಸಿಎಸ್‌ಸಿ ಡಿಜಿಟಲ್ ಕೇಂದ್ರ - ಹೈದರಾಬಾದ್ ಅಬಿಡ್ಸ್',
    hi: 'मीसेवा / सीएससी डिजिटल केंद्र - हैदराबाद आबिड्स',
    ta: 'மீசேவா / சிஎஸ்இ டிஜிட்டல் மையம் - ஹைதராபாத் அபிட்ஸ்',
    mr: 'मीसेवा / सीएससी डिजिटल केंद्र - हैदराबाद आबिड्स'
  },
  'MeeSeva Facilitation Centre - Warangal Urban': {
    te: 'మీసేవ సహాయ కేంద్రం - వరంగల్ అర్బన్',
    kn: 'ಮೀಸೇವ ಸೌಲಭ್ಯ ಕೇಂದ್ರ - ವಾರಂಗಲ್ ನಗರ',
    hi: 'मीसेवा सुविधा केंद्र - वारंगल शहरी',
    ta: 'மீசேவா உதவி மையம் - வாரங்கல் நகர்ப்புறம்',
    mr: 'मीसेवा सुविधा केंद्र - वारंगल शहर'
  },
  'Grama Panchayat CSC Kendra - Nizamabad Rural': {
    te: 'గ్రామ పంచాయతీ CSC కేంద్రం - నిజామాబాద్ రూరల్',
    kn: 'ಗ್ರಾಮ ಪಂಚಾಯತ್ ಸಿಎಸ್‌ಸಿ ಕೇಂದ್ರ - ನಿಜಾಮಾಬಾದ್ ಗ್ರಾಮೀಣ',
    hi: 'ग्राम पंचायत सीएससी केंद्र - निजामाबाद ग्रामीण',
    ta: 'கிராம பஞ்சாயத்து சிஎஸ்இ மையம் - நிஜாமாபாத் ஊரகம்',
    mr: 'ग्रामपंचायत सीएससी केंद्र - निजामाबाद ग्रामीण'
  },
  'Grama Ward Sachivalayam / CSC - Vijayawada Central': {
    te: 'గ్రామ వార్డు సచివాలయం / CSC - విజయవాడ సెంట్రల్',
    kn: 'ಗ್ರಾಮ ವಾರ್ಡ್ ಸಚಿವಾಲಯ / ಸಿಎಸ್‌ಸಿ - ವಿಜಯವಾಡ ಸೆಂಟ್ರಲ್',
    hi: 'ग्राम वार्ड सचिवालय / सीएससी - विजयवाड़ा सेंट्रल',
    ta: 'கிராம வார்டு செயலகம் / சிஎஸ்இ - விஜயவாடா',
    mr: 'ग्राम प्रभाग सचिवालय / सीएससी - विजयवाडा'
  },
  'MeeSeva Citizen Service Centre - Visakhapatnam': {
    te: 'మీసేవ పౌర సేవా కేంద్రం - విశాఖపట్నం',
    kn: 'ಮೀಸೇವ ನಾಗರಿಕ ಸೇವಾ ಕೇಂದ್ರ - ವಿಶಾಖಪಟ್ಟಣಂ',
    hi: 'मीसेवा नागरिक सेवा केंद्र - विशाखापत्तनम',
    ta: 'மீசேவா குடிமக்கள் சேவை மையம் - விசாகப்பட்டினம்',
    mr: 'मीसेवा नागरिक सेवा केंद्र - विशाखापट्टणम'
  },
  'e-Sevai Maiyam / CSC - Chennai Central': {
    te: 'ఈ-సేవై కేంద్రం / CSC - చెన్నై సెంట్రల్',
    ta: 'இ-சேவை மையம் / CSC - சென்னை சென்ட்ரல்',
    kn: 'ಇ-ಸೇವೈ ಕೇಂದ್ರ / ಸಿಎಸ್‌ಸಿ - ಚೆನ್ನೈ ಸೆಂಟ್ರಲ್',
    hi: 'ई-सेवई मय्यम / सीएससी - चेन्नई सेंट्रल',
    mr: 'ई-सेवई केंद्र / सीएससी - चेन्नई सेंट्रल'
  },
  'VLE Digital Seva Kendra - Lucknow Central': {
    te: 'VLE డిజిటల్ సేవా కేంద్రం - లక్నో సెంట్రల్',
    hi: 'वीएलई डिजिटल सेवा केंद्र - लखनऊ सेंट्रल',
    kn: 'ವಿಎಲ್‌ಇ ಡಿಜಿಟಲ್ ಸೇವಾ ಕೇಂದ್ರ - ಲಕ್ನೋ ಸೆಂಟ್ರಲ್',
    ta: 'விஎல்இ டிஜிட்டல் சேவை மையம் - லக்னோ',
    mr: 'व्हीएलई डिजिटल सेवा केंद्र - लखनौ सेंट्रल'
  },
  'District MSME Facilitation Cell - Varanasi': {
    te: 'జిల్లా MSME సహాయక కేంద్రం - వారణాసి',
    hi: 'जिला एमएसएमई सुविधा केंद्र - वाराणसी',
    kn: 'ಜಿಲ್ಲಾ ಎಂಎಸ್‌ಎಂಇ ಸೌಲಭ್ಯ ಕೋಶ - ವಾರಣಾಸಿ',
    ta: 'மாவட்ட எம்எஸ்எம்இ உதவி மையம் - வாரணாசி',
    mr: 'जिल्हा एमएसएमई सुविधा कक्ष - वाराणसी'
  },
  'Jan Seva Kendra - Prayagraj Civil Lines': {
    te: 'జన్ సేవా కేంద్రం - ప్రయాగ్‌రాజ్ సివిల్ లైన్స్',
    hi: 'जन सेवा केंद्र - प्रयागराज सिविल लाइंस',
    kn: 'ಜನ ಸೇವಾ ಕೇಂದ್ರ - ಪ್ರಯಾಗ್‌ರಾಜ್ ಸಿವಿಲ್ ಲೈನ್ಸ್',
    ta: 'மக்கள் சேவை மையம் - பிரயாக்ராஜ்',
    mr: 'जन सेवा केंद्र - प्रयागराज सिव्हिल लाइन्स'
  },
  'CSC Digital Kendra - Mumbai Dadar': {
    te: 'CSC డిజిటల్ కేంద్రం - ముంబై దాదర్',
    mr: 'सीएससी डिजिटल केंद्र - मुंबई दादर',
    hi: 'सीएससी डिजिटल केंद्र - मुंबई दादर',
    kn: 'ಸಿಎಸ್‌ಸಿ ಡಿಜಿಟಲ್ ಕೇಂದ್ರ - ಮುಂಬೈ ದಾದರ್',
    ta: 'சிஎஸ்இ டிஜிட்டல் மையம் - மும்பை தாதர்'
  },
  'Gram Panchayat VLE Centre - Pune Rural': {
    te: 'గ్రామ పంచాయతీ VLE కేంద్రం - పూణే రూరల్',
    mr: 'ग्रामपंचायत व्हीएलई केंद्र - पुणे ग्रामीण',
    hi: 'ग्राम पंचायत वीएलई केंद्र - पुणे ग्रामीण',
    kn: 'ಗ್ರಾಮ ಪಂಚಾಯತ್ ವಿಎಲ್‌ಇ ಕೇಂದ್ರ - ಪುಣೆ ಗ್ರಾಮೀಣ',
    ta: 'கிராம பஞ்சாயத்து விஎல்இ மையம் - புனே'
  },
  'Akshaya e-Centre - Thiruvananthapuram Main': {
    te: 'అక్షయ ఈ-కేంద్రం - తిరువనంతపురం మెయిన్',
    ml: 'അക്ഷയ ഇ-കേന്ദ്രം - തിരുവനന്തപുരം മെയിൻ',
    hi: 'अक्षय ई-केंद्र - तिरुवनंतपुरम मुख्य',
    kn: 'ಅಕ್ಷಯ ಇ-ಕೇಂದ್ರ - ತಿರುವನಂತಪುರಂ',
    ta: 'அக்ஷயா இ-மையம் - திருவனந்தபுரம்'
  },
  'e-Gram Vishwagram CSC - Ahmedabad Central': {
    te: 'ఈ-గ్రామ్ విశ్వగ్రామ్ CSC - అహ్మదాబాద్ సెంట్రల్',
    gu: 'ઇ-ગ્રામ વિશ્વગ્રામ સીએસસી - અમદાવાદ સેન્ટ્રલ',
    hi: 'ई-ग्राम विश्वग्राम सीएससी - अहमदाबाद सेंट्रल',
    kn: 'ಇ-ಗ್ರಾಮ್ ವಿಶ್ವಗ್ರಾಮ್ ಸಿಎಸ್‌ಸಿ - ಅಹಮದಾಬಾದ್',
    ta: 'இ-கிராம் விஸ்வகிராம் சிஎஸ்இ - அகமதாபாத்'
  },
  'Sewa Kendra - Ludhiana Industrial Area': {
    te: 'సేవా కేంద్రం - లూధియానా ఇండస్ట్రియల్ ఏరియా',
    pa: 'ਸੇਵਾ ਕੇਂਦਰ - ਲੁਧਿਆਣਾ ਉਦਯੋਗਿਕ ਖੇਤਰ',
    hi: 'सेवा केंद्र - लुधियाना औद्योगिक क्षेत्र',
    kn: 'ಸೇವಾ ಕೇಂದ್ರ - ಲೂಧಿಯಾನ ಕೈಗಾರಿಕಾ ಪ್ರದೇಶ',
    ta: 'சேவை மையம் - லூதியானா'
  },
  'National Common Service Centre Helpline (Toll-Free)': {
    te: 'జాతీయ కామన్ సర్వీస్ సెంటర్ సహాయవాణి (టోల్-ఫ్రీ)',
    hi: 'राष्ट्रीय कॉमन सर्विस सेंटर हेल्पलाइन (टोल-फ्री)',
    kn: 'ರಾಷ್ಟ್ರೀಯ ಕಾಮನ್ ಸರ್ವಿಸ್ ಸೆಂಟರ್ ಸಹಾಯವಾಣಿ (ಟೋಲ್-ಫ್ರೀ)',
    ta: 'தேசிய பொது சேவை மைய உதவி மையம் (கட்டணமில்லா எண்)',
    mr: 'राष्ट्रीय कॉमन सर्व्हिस सेंटर हेल्पलाइन (टोल-फ्री)'
  }
};

export const CSC_ADDRESS_MAP = {
  '100ft Road, CMH Junction, Bengaluru': {
    te: '100 అడుగుల రోడ్డు, CMH జంక్షన్, బెంగళూరు',
    kn: '100 ಅಡಿ ರಸ್ತೆ, ಸಿಎಂಹೆಚ್ ಜಂಕ್ಷನ್, ಬೆಂಗಳೂರು',
    hi: '100 फीट रोड, सीएमएच जंक्शन, बेंगलुरु',
    ta: '100 அடி சாலை, CMH சந்திப்பு, பெங்களூரு',
    mr: '100 फूट रस्ता, सीएमएच जंक्शन, बेंगळुरू'
  },
  'Taluk Office Complex, Nazarbad, Mysuru': {
    te: 'తాలూకా కార్యాలయ సముదాయం, నజర్‌బాద్, మైసూర్',
    kn: 'ತಾಲೂಕು ಕಚೇರಿ ಸಂಕೀರ್ಣ, ನಜರ್‌ಬಾದ್, ಮೈಸೂರು',
    hi: 'तालुका कार्यालय परिसर, नज़रबाद, मैसूर',
    ta: 'வட்டார அலுவலக வளாகம், நசர்பாத், மைசூர்',
    mr: 'तालुका कार्यालय संकुल, नजरबाद, म्हैसूर'
  },
  'Near GPO Complex, Abids, Hyderabad': {
    te: 'జీపీవో కాంప్లెక్స్ సమీపంలో, అబిడ్స్, హైదరాబాద్',
    kn: 'ಜಿಪಿಒ ಕಾಂಪ್ಲೆಕ್ಸ್ ಹತ್ತಿರ, ಅಬಿಡ್ಸ್, ಹೈದರಾಬಾದ್',
    hi: 'जीपीओ कॉम्प्लेक्स के पास, आबिड्स, हैदराबाद',
    ta: 'ஜிபிஓ வளாகம் அருகில், அபிட்ஸ், ஹைதராபாத்',
    mr: 'जीपीओ कॉम्प्लेक्स जवळ, आबिड्स, हैदराबाद'
  },
  'Near Collectorate Complex, Subedari, Hanamkonda': {
    te: 'కలెక్టరేట్ కాంప్లెక్స్ సమీపంలో, సుబేదారి, హనుమకొండ',
    kn: 'ಕಲೆಕ್ಟರೇಟ್ ಕಾಂಪ್ಲೆಕ್ಸ್ ಹತ್ತಿರ, ಸುಬೇದಾರಿ, ಹನಮಕೊಂಡ',
    hi: 'कलेक्ट्रेट कॉम्प्लेक्स के पास, सूबेदारी, हनमकोंडा',
    ta: 'மாவட்ட ஆட்சியர் அலுவலகம் அருகில், சுபேதாரி, ஹனம்கொண்டா',
    mr: 'जिल्हाधिकारी कार्यालय संकुलाजवळ, सुभेदारी, हनमकोंडा'
  },
  'Grama Panchayat Bhavan, Armoor Road, Nizamabad': {
    te: 'గ్రామ పంచాయతీ భవనం, ఆర్మూర్ రోడ్, నిజామాబాద్',
    kn: 'ಗ್ರಾಮ ಪಂಚಾಯಿತಿ ಭವನ, ಆರ್ಮೂರ್ ರಸ್ತೆ, ನಿಜಾಮಾಬಾದ್',
    hi: 'ग्राम पंचायत भवन, आर्मूर रोड, निजामाबाद',
    ta: 'கிராம பஞ்சாயத்து கட்டிடம், ஆர்மூர் சாலை, நிசாமாபாத்',
    mr: 'ग्रामपंचायत भवन, आर्मूर रोड, निजामाबाद'
  },
  'MG Road, Near Municipal Corporation, Vijayawada': {
    te: 'ఎంజీ రోడ్డు, మున్సిపల్ కార్పొరేషన్ సమీపంలో, విజయవాడ',
    kn: 'ಎಂಜಿ ರಸ್ತೆ, ಮುನ್ಸಿಪಲ್ ಕಾರ್ಪೊರೇಷನ್ ಹತ್ತಿರ, ವಿಜಯವಾಡ',
    hi: 'एमजी रोड, नगर निगम के पास, विजयवाड़ा',
    ta: 'எம்.ஜி சாலை, மாநகராட்சி அருகில், விஜயவாடா',
    mr: 'एमजी रोड, महानगरपालिकेजवळ, विजयवाडा'
  },
  'Dwaraka Nagar, Main Road, Visakhapatnam': {
    te: 'ద్వారకా నగర్, మెయిన్ రోడ్, విశాఖపట్నం',
    kn: 'ದ್ವಾರಕಾ ನಗರ, ಮುಖ್ಯ ರಸ್ತೆ, ವಿಶಾಖಪಟ್ಟಣಂ',
    hi: 'द्वारका नगर, मुख्य मार्ग, विशाखापत्तनम',
    ta: 'துவாரகா நகர், மெயின் ரோடு, விசாகப்பட்டினம்',
    mr: 'द्वारका नगर, मुख्य रस्ता, विशाखापट्टणम'
  },
  'Ripon Building Annex, Periamet, Chennai': {
    te: 'రిపన్ భవనం ఎనెక్స్, పెరియామెట్, చెన్నై',
    ta: 'ரிப்பன் மாளிகை இணைப்பு, பெரியமேடு, சென்னை',
    kn: 'ರಿಪನ್ ಕಟ್ಟಡ ಸಂಕೀರ್ಣ, ಪೆರಿಯಾಮೆಟ್, ಚೆನ್ನೈ',
    hi: 'रिपन बिल्डिंग एनेक्स, पेरियामेट, चेन्नई',
    mr: 'रिपन बिल्डिंग अ‍ॅनेक्स, पेरियामेट, चेन्नई'
  },
  'Shop 14, Hazratganj Commercial Complex, Lucknow': {
    te: 'షాప్ 14, హజ్రత్‌గంజ్ కమర్షియల్ కాంప్లెక్స్, లక్నో',
    hi: 'दुकान 14, हजरतगंज कमर्शियल कॉम्प्लेक्स, लखनऊ',
    kn: 'ಶಾಪ್ 14, ಹಜರತ್‌ಗಂಜ್ ಕಮರ್ಷಿಯಲ್ ಕಾಂಪ್ಲೆಕ್ಸ್, ಲಕ್ನೋ',
    ta: 'கடை 14, ஹஸ்ரத்கஞ்ச் வணிக வளாகம், லக்னோ',
    mr: 'दुकान 14, हजरतगंज कमर्शियल कॉम्प्लेक्स, लखनौ'
  },
  'DIC Office Complex, Kashi Industrial Area, Varanasi': {
    te: 'డిఐసి కార్యాలయ సముదాయం, కాశీ పారిశ్రామిక ప్రాంతం, వారణాసి',
    hi: 'डीआईसी कार्यालय परिसर, काशी औद्योगिक क्षेत्र, वाराणसी',
    kn: 'ಡಿಐಸಿ ಕಚೇರಿ ಸಂಕೀರ್ಣ, ಕಾಶಿ ಕೈಗಾರಿಕಾ ಪ್ರದೇಶ, ವಾರಣಾಸಿ',
    ta: 'டிஐசி அலுவலக வளாகம், காசி தொழில் பகுதி, வாரணாசி',
    mr: 'डीआयसी कार्यालय संकुल, काशी औद्योगिक क्षेत्र, वाराणसी'
  },
  'Near Head Post Office, Civil Lines, Prayagraj': {
    te: 'ప్రధాన పోస్టాఫీస్ సమీపంలో, సివిల్ లైన్స్, ప్రయాగ్‌రాజ్',
    hi: 'प्रधान डाकघर के पास, सिविल लाइंस, प्रयागराज',
    kn: 'ಮುಖ್ಯ ಅಂಚೆ ಕಚೇರಿ ಹತ್ತಿರ, ಸಿವಿಲ್ ಲೈನ್ಸ್, ಪ್ರಯಾಗ್‌ರಾಜ್',
    ta: 'தலைமை அஞ்சலகம் அருகில், சிவில் லைன்ஸ், பிரயாக்ராஜ்',
    mr: 'मुख्य पोस्ट ऑफिस जवळ, सिव्हिल लाइन्स, प्रयागराज'
  },
  'Opposite Railway Station, Dadar West, Mumbai': {
    te: 'రైల్వే స్టేషన్ ఎదురుగా, దాదర్ వెస్ట్, ముంబై',
    mr: 'रेल्वे स्टेशन समोर, दादर पश्चिम, मुंबई',
    hi: 'रेलवे स्टेशन के सामने, दादर पश्चिम, मुंबई',
    kn: 'ರೈಲ್ವೆ ನಿಲ್ದಾಣದ ಎದುರು, ದಾದರ್ ಪಶ್ಚಿಮ, ಮುಂಬೈ',
    ta: 'ரயில் நிலையம் எதிரில், தாதர் மேற்கு, மும்பை'
  },
  'Gram Panchayat Bhavan, Shirur Taluka, Pune': {
    te: 'గ్రామ పంచాయతీ భవన్, శిరూర్ తాలూకా, పూణే',
    mr: 'ग्रामपंचायत भवन, शिरूर तालुका, पुणे',
    hi: 'ग्राम पंचायत भवन, शिरूर तालुका, पुणे',
    kn: 'ಗ್ರಾಮ ಪಂಚಾಯಿತಿ ಭವನ, ಶಿರೂರು ತಾಲೂಕು, ಪುಣೆ',
    ta: 'கிராம பஞ்சாயத்து கட்டிடம், ஷிரூர் வட்டம், புனே'
  },
  'Near Secretariat Complex, MG Road, Thiruvananthapuram': {
    te: 'సెక్రటేరియట్ కాంప్లెక్స్ సమీపంలో, ఎంజీ రోడ్డు, తిరువనంతపురం',
    ml: 'സെക്രട്ടേറിയറ്റ് കോംപ്ലക്സിന് സമീപം, എംജി റോഡ്, തിരുവനന്തപുരം',
    hi: 'सचिवालय परिसर के पास, एमजी रोड, तिरुवनंतपुरम',
    kn: 'ಸಚಿವಾಲಯ ಸಂಕೀರ್ಣದ ಹತ್ತಿರ, ಎಂಜಿ ರಸ್ತೆ, ತಿರುವನಂತಪುರಂ',
    ta: 'செயலக வளாகம் அருகில், எம்.ஜி சாலை, திருவனந்தபுரம்'
  },
  'Navrangpura Commerce Zone, Ahmedabad': {
    te: 'నవరంగ్‌పురా కామర్స్ జోన్, అహ్మదాబాద్',
    gu: 'નવરંગપુરા કોમર્સ ઝોન, અમદાવાદ',
    hi: 'नवरंगपुरा कॉमर्स जोन, अहमदाबाद',
    kn: 'ನವರಂಗಪುರ ವಾಣಿಜ್ಯ ವಲಯ, ಅಹಮದಾಬಾದ್',
    ta: 'நவரங்கபுரா வணிக மண்டலம், அகமதாபாத்'
  },
  'Near Clock Tower, GT Road, Ludhiana': {
    te: 'క్లాక్ టవర్ సమీపంలో, జిటి రోడ్, లూధియానా',
    pa: 'ਕਲਾਕ ਟਾਵਰ ਦੇ ਨੇੜੇ, ਜੀਟੀ ਰੋਡ, ਲੁਧਿਆਣਾ',
    hi: 'क्लॉक टॉवर के पास, जीटी रोड, लुधियाना',
    kn: 'ಕ್ಲಾಕ್ ಟವರ್ ಹತ್ತಿರ, ಜಿಟಿ ರಸ್ತೆ, ಲೂಧಿಯಾನ',
    ta: 'கடிகார கோபுரம் அருகில், ஜிடி சாலை, லூதியானா'
  },
  'Electronics Niketan, 6 CGO Complex, Lodhi Road, New Delhi': {
    te: 'ఎలక్ట్రానిక్స్ నికేతన్, 6 CGO కాంప్లెక్స్, లోధి రోడ్, న్యూఢిల్లీ',
    hi: 'इलेक्ट्रॉनिक्स निकेतन, 6 सीजीओ कॉम्प्लेक्स, लोधी रोड, नई दिल्ली',
    kn: 'ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್ ನಿಕೇತನ, 6 ಸಿಜಿಒ ಕಾಂಪ್ಲೆಕ್ಸ್, ಲೋಧಿ ರಸ್ತೆ, ನವದೆಹಲಿ',
    ta: 'எலக்ட்ரானிக்ஸ் நிகேதன், 6 சிஜிஓ வளாகம், லோதி சாலை, புது தில்லி',
    mr: 'इलेक्ट्रॉनिक्स निकेतन, 6 सीजीओ संकुल, लोधी रोड, नवी दिल्ली'
  }
};

export function getLocalizedTiming(timingStr, lang = 'en') {
  if (!timingStr || lang === 'en') return timingStr;
  
  if (timingStr.includes('24x7')) {
    if (lang === 'te') return '24x7 సహాయవాణి సేవలు (నిరంతరం అందుబాటులో)';
    if (lang === 'hi') return '24x7 हेल्पलाइन सहायता (सदैव उपलब्ध)';
    if (lang === 'kn') return '24x7 ಸಹಾಯವಾಣಿ ಬೆಂಬಲ';
    if (lang === 'ta') return '24x7 உதவி மையம்';
    if (lang === 'mr') return '24x7 हेल्पलाइन सपोर्ट';
  }

  const timingMap = {
    '8:00 AM - 8:00 PM': {
      te: 'ఉదయం 8:00 - రాత్రి 8:00',
      hi: 'सुबह 8:00 - शाम 8:00',
      kn: 'ಬೆಳಿಗ್ಗೆ 8:00 - ರಾತ್ರಿ 8:00',
      ta: 'காலை 8:00 - இரவு 8:00',
      mr: 'सकाळी 8:00 - रात्री 8:00'
    },
    '9:00 AM - 6:00 PM': {
      te: 'ఉదయం 9:00 - సాయంత్రం 6:00',
      hi: 'सुबह 9:00 - शाम 6:00',
      kn: 'ಬೆಳಿಗ್ಗೆ 9:00 - ಸಂಜೆ 6:00',
      ta: 'காலை 9:00 - மாலை 6:00',
      mr: 'सकाळी 9:00 - संध्याकाळी 6:00'
    },
    '10:00 AM - 5:00 PM': {
      te: 'ఉదయం 10:00 - సాయంత్రం 5:00',
      hi: 'सुबह 10:00 - शाम 5:00',
      kn: 'ಬೆಳಿಗ್ಗೆ 10:00 - ಸಂಜೆ 5:00',
      ta: 'காலை 10:00 - மாலை 5:00',
      mr: 'सकाळी 10:00 - संध्याकाळी 5:00'
    },
    '8:30 AM - 7:00 PM': {
      te: 'ఉదయం 8:30 - రాత్రి 7:00',
      hi: 'सुबह 8:30 - शाम 7:00',
      kn: 'ಬೆಳಿಗ್ಗೆ 8:30 - ರಾತ್ರಿ 7:00',
      ta: 'காலை 8:30 - இரவு 7:00',
      mr: 'सकाळी 8:30 - संध्याकाळी 7:00'
    },
    '8:30 AM - 6:30 PM': {
      te: 'ఉదయం 8:30 - సాయంత్రం 6:30',
      hi: 'सुबह 8:30 - शाम 6:30',
      kn: 'ಬೆಳಿಗ್ಗೆ 8:30 - ಸಂಜೆ 6:30',
      ta: 'காலை 8:30 - மாலை 6:30',
      mr: 'सकाळी 8:30 - संध्याकाळी 6:30'
    },
    '9:00 AM - 7:00 PM': {
      te: 'ఉదయం 9:00 - రాత్రి 7:00',
      hi: 'सुबह 9:00 - शाम 7:00',
      kn: 'ಬೆಳಿಗ್ಗೆ 9:00 - ರಾತ್ರಿ 7:00',
      ta: 'காலை 9:00 - இரவு 7:00',
      mr: 'सकाळी 9:00 - रात्री 7:00'
    },
    '8:00 AM - 5:00 PM': {
      te: 'ఉదయం 8:00 - సాయంత్రం 5:00',
      hi: 'सुबह 8:00 - शाम 5:00',
      kn: 'ಬೆಳಿಗ್ಗೆ 8:00 - ಸಂಜೆ 5:00',
      ta: 'காலை 8:00 - மாலை 5:00',
      mr: 'सकाळी 8:00 - संध्याकाळी 5:00'
    },
    '9:00 AM - 5:30 PM': {
      te: 'ఉదయం 9:00 - సాయంత్రం 5:30',
      hi: 'सुबह 9:00 - शाम 5:30',
      kn: 'ಬೆಳಿಗ್ಗೆ 9:00 - ಸಂಜೆ 5:30',
      ta: 'காலை 9:00 - மாலை 5:30',
      mr: 'सकाळी 9:00 - संध्याकाळी 5:30'
    },
    '8:00 AM - 7:30 PM': {
      te: 'ఉదయం 8:00 - రాత్రి 7:30',
      hi: 'सुबह 8:00 - शाम 7:30',
      kn: 'ಬೆಳಿಗ್ಗೆ 8:00 - ರಾತ್ರಿ 7:30',
      ta: 'காலை 8:00 - இரவு 7:30',
      mr: 'सकाळी 8:00 - रात्री 7:30'
    }
  };

  return timingMap[timingStr]?.[lang] || timingStr;
}

export function getLocalizedService(serviceName, lang = 'en') {
  if (!serviceName || lang === 'en') return serviceName;
  return CSC_SERVICES_MAP[serviceName]?.[lang] || serviceName;
}

export function getLocalizedCentreName(centre, lang = 'en') {
  if (!centre || !centre.name || lang === 'en') return centre?.name || '';
  return CSC_CENTRE_NAMES_MAP[centre.name]?.[lang] || centre.name;
}

export function getLocalizedCentreAddress(centre, lang = 'en') {
  if (!centre || !centre.address || lang === 'en') return centre?.address || '';
  return CSC_ADDRESS_MAP[centre.address]?.[lang] || centre.address;
}

export const CSC_CENTRES_DATA = {
  'Telangana': [
    { 
      name: 'MeeSeva / CSC Digital Kendra - Hyderabad Abids', 
      address: 'Near GPO Complex, Abids, Hyderabad', 
      phone: '+91 98490 12345', 
      timing: '8:00 AM - 8:00 PM', 
      services: ['Rythu Bharosa Verification', 'Rythu Bima Nomination', 'Dharani Passbook e-KYC', 'Aadhaar Seeding'] 
    },
    { 
      name: 'MeeSeva Facilitation Centre - Warangal Urban', 
      address: 'Near Collectorate Complex, Subedari, Hanamkonda', 
      phone: '+91 94400 67890', 
      timing: '9:00 AM - 6:00 PM', 
      services: ['Crop Loan Waiver Inquiry', 'PMEGP Subsidy Filing', 'PM Vishwakarma Biometric'] 
    },
    { 
      name: 'Grama Panchayat CSC Kendra - Nizamabad Rural', 
      address: 'Grama Panchayat Bhavan, Armoor Road, Nizamabad', 
      phone: '+91 91210 54321', 
      timing: '8:30 AM - 6:30 PM', 
      services: ['PM-KISAN e-KYC', 'Aasara Pension Enrollment', 'Ayushman Golden Card'] 
    }
  ],
  'Andhra Pradesh': [
    { 
      name: 'Grama Ward Sachivalayam / CSC - Vijayawada Central', 
      address: 'MG Road, Near Municipal Corporation, Vijayawada', 
      phone: '+91 98480 23456', 
      timing: '9:00 AM - 7:00 PM', 
      services: ['YSR Rythu Bharosa', 'e-Crop Booking Verification', 'Free Crop Insurance', 'Jala Kala Enrollment'] 
    },
    { 
      name: 'MeeSeva Citizen Service Centre - Visakhapatnam', 
      address: 'Dwaraka Nagar, Main Road, Visakhapatnam', 
      phone: '+91 94900 78901', 
      timing: '8:00 AM - 7:30 PM', 
      services: ['PM-KISAN e-KYC', 'Stand-Up India Handholding', 'Mudra Application'] 
    }
  ],
  'Karnataka': [
    { 
      name: 'Bangalore One / CSC Kendra - Indiranagar', 
      address: '100ft Road, CMH Junction, Bengaluru', 
      phone: '+91 98450 99887', 
      timing: '8:00 AM - 8:00 PM', 
      services: ['Startup India Seed Verification', 'PMKVY 4.0 Enrollment', 'Stand-Up India', 'Ganga Kalyana Application'] 
    },
    { 
      name: 'Grama One Kendra - Mysuru Rural', 
      address: 'Taluk Office Complex, Nazarbad, Mysuru', 
      phone: '+91 94800 34567', 
      timing: '9:00 AM - 6:00 PM', 
      services: ['Raitha Vidya Nidhi', 'KCC Seva', 'PM-KISAN DBT'] 
    }
  ],
  'Tamil Nadu': [
    { 
      name: 'e-Sevai Maiyam / CSC - Chennai Central', 
      address: 'Ripon Building Annex, Periamet, Chennai', 
      phone: '+91 98400 45678', 
      timing: '9:00 AM - 6:00 PM', 
      services: ['Kalaignar Magalir Urimai', 'Pudhumai Penn', 'PM-KISAN DBT', 'Uzhavar Pathukappu'] 
    }
  ],
  'Maharashtra': [
    { 
      name: 'CSC Digital Kendra - Mumbai Dadar', 
      address: 'Opposite Railway Station, Dadar West, Mumbai', 
      phone: '+91 98200 11223', 
      timing: '9:00 AM - 7:00 PM', 
      services: ['Mudra Application', 'PMEGP Subsidy Filing', 'PM SVANidhi UPI Cashback'] 
    },
    { 
      name: 'Gram Panchayat VLE Centre - Pune Rural', 
      address: 'Gram Panchayat Bhavan, Shirur Taluka, Pune', 
      phone: '+91 97650 44556', 
      timing: '8:00 AM - 5:00 PM', 
      services: ['PM-KISAN DBT', '7/12 Land Record Verification', 'NRLM SHG Loan'] 
    }
  ],
  'Uttar Pradesh': [
    { 
      name: 'VLE Digital Seva Kendra - Lucknow Central', 
      address: 'Shop 14, Hazratganj Commercial Complex, Lucknow', 
      phone: '+91 98390 12345', 
      timing: '9:00 AM - 6:00 PM', 
      services: ['e-KYC', 'PM-KISAN Registration', 'PMEGP DPR Drafting', 'Ayushman Card'] 
    },
    { 
      name: 'District MSME Facilitation Cell - Varanasi', 
      address: 'DIC Office Complex, Kashi Industrial Area, Varanasi', 
      phone: '+91 94500 67890', 
      timing: '10:00 AM - 5:00 PM', 
      services: ['Stand-Up India Handholding', 'PM Vishwakarma Biometric', 'Udyam Registration'] 
    },
    { 
      name: 'Jan Seva Kendra - Prayagraj Civil Lines', 
      address: 'Near Head Post Office, Civil Lines, Prayagraj', 
      phone: '+91 91200 54321', 
      timing: '8:30 AM - 7:00 PM', 
      services: ['PMAY-G Survey', 'Mudra Loan Application', 'Aadhaar Seeding'] 
    }
  ],
  'Kerala': [
    { 
      name: 'Akshaya e-Centre - Thiruvananthapuram Main', 
      address: 'Near Secretariat Complex, MG Road, Thiruvananthapuram', 
      phone: '+91 98470 12345', 
      timing: '9:00 AM - 6:00 PM', 
      services: ['Kudumbashree Loan Linkage', 'Ayushman Golden Card', 'PMMSY Aquaculture Registration'] 
    }
  ],
  'Gujarat': [
    { 
      name: 'e-Gram Vishwagram CSC - Ahmedabad Central', 
      address: 'Navrangpura Commerce Zone, Ahmedabad', 
      phone: '+91 98250 54321', 
      timing: '9:00 AM - 7:00 PM', 
      services: ['MSME Udyam Registration', 'PMEGP Subsidy Filing', 'PM Vishwakarma Biometrics'] 
    }
  ],
  'Punjab': [
    { 
      name: 'Sewa Kendra - Ludhiana Industrial Area', 
      address: 'Near Clock Tower, GT Road, Ludhiana', 
      phone: '+91 98140 67890', 
      timing: '9:00 AM - 5:30 PM', 
      services: ['PM-KISAN e-KYC', 'Stand-Up India Bank Linkage', 'PMFME Food Processing DPR'] 
    }
  ],
  'National / All India': [
    { 
      name: 'National Common Service Centre Helpline (Toll-Free)', 
      address: 'Electronics Niketan, 6 CGO Complex, Lodhi Road, New Delhi', 
      phone: '1800 121 3468', 
      timing: '24x7 Helpline Support', 
      services: ['All Central Schemes Guidance', 'e-KYC Grievance Redressal', 'Portal Application Assistance'] 
    }
  ]
};

export default function CSCLocator({ profile, currentLang = 'hi' }) {
  const t = (k) => bhashini.t(k, currentLang);
  const [selectedState, setSelectedState] = useState(
    profile?.state && CSC_CENTRES_DATA[profile.state] ? profile.state : 'Telangana'
  );
  const [searchFilter, setSearchFilter] = useState('');

  useEffect(() => {
    if (profile?.state && CSC_CENTRES_DATA[profile.state]) {
      setSelectedState(profile.state);
    }
  }, [profile?.state]);

  const centres = CSC_CENTRES_DATA[selectedState] || CSC_CENTRES_DATA['National / All India'];
  
  const filteredCentres = centres.filter(c => {
    const term = searchFilter.toLowerCase();
    const locName = getLocalizedCentreName(c, currentLang).toLowerCase();
    const locAddr = getLocalizedCentreAddress(c, currentLang).toLowerCase();
    const matchesName = c.name.toLowerCase().includes(term) || locName.includes(term);
    const matchesAddr = c.address.toLowerCase().includes(term) || locAddr.includes(term);
    const matchesSrv = c.services.some(s => {
      const locSrv = getLocalizedService(s, currentLang).toLowerCase();
      return s.toLowerCase().includes(term) || locSrv.includes(term);
    });
    return matchesName || matchesAddr || matchesSrv;
  });

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* Header */}
      <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <MapPin className="w-5 h-5 text-amber-400" />
            {t('cscTitle')}
          </h2>
          <p className="text-xs md:text-sm text-slate-400 pt-1">
            {t('cscSub')}
          </p>
        </div>

        {/* State Selector & Search */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div>
            <label className="text-xs font-semibold text-slate-300 mb-1 block">{t('filterByState')}</label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-white text-xs font-semibold focus:outline-none focus:border-amber-400 cursor-pointer"
            >
              {Object.keys(CSC_CENTRES_DATA).map(st => (
                <option key={st} value={st}>
                  {bhashini.getStateName(st, currentLang) || st}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 mb-1 block">{t('searchCentres')}</label>
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder={t('searchCentres')}
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Centre Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredCentres.map((centre, idx) => {
          const locName = getLocalizedCentreName(centre, currentLang);
          const locAddress = getLocalizedCentreAddress(centre, currentLang);
          const locTiming = getLocalizedTiming(centre.timing, currentLang);

          return (
            <div key={idx} className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4 hover:border-amber-500/40 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-base font-bold text-white">{locName}</h4>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                    {t('authorizedVle')}
                  </span>
                </div>

                <div className="space-y-1.5 text-xs text-slate-300">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>{locAddress}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Clock className="w-4 h-4 text-sky-400 flex-shrink-0" />
                    <span>{t('timingsLabel')} {locTiming}</span>
                  </div>
                </div>

                <div className="space-y-1.5 pt-2">
                  <div className="text-[10px] uppercase font-bold text-slate-400">{t('servicesOffered')}</div>
                  <div className="flex flex-wrap gap-1.5">
                    {centre.services.map((srv, sIdx) => {
                      const locService = getLocalizedService(srv, currentLang);
                      return (
                        <span key={sIdx} className="px-2.5 py-1 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-amber-200">
                          ✓ {locService}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <a
                  href={`tel:${centre.phone.replace(/\s+/g, '')}`}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold flex items-center gap-1.5 border border-slate-800"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{centre.phone}</span>
                </a>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(centre.name + ' ' + centre.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>{t('getDirections')}</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
