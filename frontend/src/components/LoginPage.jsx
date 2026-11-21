import React, { useState } from 'react';
import ThreeBackground from './ThreeBackground';
import { 
  ShieldCheck, 
  Sparkles, 
  Lock, 
  Mail, 
  ArrowRight, 
  UserCheck, 
  Cpu, 
  Eye, 
  EyeOff,
  FileCheck,
  Globe,
  Landmark
} from 'lucide-react';
import { SUPPORTED_LANGUAGES, bhashini } from '../services/bhashiniService';
import { DEMO_PERSONAS } from '../services/personas';
export { DEMO_PERSONAS };

const LOGIN_LOCALIZATIONS = {
  en: {
    heroSub: '143+ Flagship Central & State Government Welfare Schemes Powered by Agentic AI & Multilingual Bhashini Voice.',
    b1Title: 'Central + State Coverage',
    b1Desc: '39 Central & 104 State flagship welfare schemes across all States.',
    b2Title: '10 Regional Languages',
    b2Desc: 'English, Hindi, Kannada, Telugu, Tamil, Marathi, Gujarati & more.',
    b3Title: 'Hybrid Matching Engine',
    b3Desc: 'Deterministic rule filter + Vector RAG similarity.',
    b4Title: 'Direct DBT & Portals',
    b4Desc: 'Direct portal links with instant checklist validation.',
    tabPersona: 'Test Citizen Personas (1-Click)',
    tabCredentials: 'Custom Login',
    selectProfile: 'Select a Verified Citizen Profile:',
    autoLoginBadge: '1-Click Auto Login',
    continueBtn: (name, state) => `Continue as ${name} (${state})`,
    launching: 'Launching SchemeSetu AI...',
    dbtVerified: 'Direct Benefit Transfer (DBT) & Aadhaar NPCI Verified',
    emailLabel: 'Official / Citizen Email ID',
    passwordLabel: 'Password / PIN',
    signInBtn: 'Sign In to Portal',
    verifying: 'Verifying...',
    personas: {
      'lakshmi-karnataka': {
        role: 'Woman Head of Family & Homemaker',
        topSchemes: ['Gruha Lakshmi (₹2,000/mo)', 'Stand-Up India', 'PMEGP Subsidy']
      },
      'kavitha-telangana': {
        role: 'SC Woman Entrepreneur & Dairy Unit',
        topSchemes: ['Dalit Bandhu (₹10 Lakh Grant)', 'Rythu Bharosa', 'Stand-Up India']
      },
      'sunita-maharashtra': {
        role: 'Self Employed Tailor & SHG Member',
        topSchemes: ['Majhi Ladki Bahin (₹1,500/mo)', 'PM SVANidhi', 'Mudra Shishu']
      },
      'anita-dev': {
        role: 'Rural Woman Artisan & ODOP Craft',
        topSchemes: ['UP ODOP Margin Money (₹20L)', 'Stand-Up India', 'PMEGP Subsidy']
      },
      'ramesh-farmer': {
        role: 'Small & Marginal Farmer (2.5 Acres)',
        topSchemes: ['PM-KISAN DBT', 'PM Awas Gramin', 'Kisan Credit']
      },
      'vikram-startup': {
        role: 'Graduate Youth Seeking Employment',
        topSchemes: ['Yuva Nidhi (₹3,000/mo)', 'Startup India Seed Fund', 'PMKVY 4.0']
      },
      'suresh-vendor': {
        role: 'Urban Street Vendor & Hawker',
        topSchemes: ['PM SVANidhi (₹50k Loan)', 'Atal Pension Yojana', 'Ayushman Golden Card']
      }
    }
  },
  hi: {
    heroSub: '143+ प्रमुख केंद्रीय और राज्य स्तरीय सरकारी कल्याणकारी योजनाएं • हाइब्रिड AI और बहुभाषी भाषिणी वॉइस द्वारा संचालित',
    b1Title: 'केंद्रीय + राज्य व्याप्ति',
    b1Desc: '39 केंद्रीय और 104 राज्य स्तरीय प्रमुख कल्याणकारी योजनाएं।',
    b2Title: '10 क्षेत्रीय भाषाएं',
    b2Desc: 'हिन्दी, कन्नड़, तेलुगु, तमिल, मराठी, गुजराती, पंजाबी, बांग्ला आदि।',
    b3Title: 'हाइब्रिड मैचिंग इंजन',
    b3Desc: 'सख्त नियम फिल्टर (55%) + सिमेंटिक RAG समानता स्कोर (40%)।',
    b4Title: 'सीधा DBT एवं आधिकारिक पोर्टल',
    b4Desc: 'तत्काल दस्तावेज़ जांच के साथ सीधा आधिकारिक पोर्टल लिंक।',
    tabPersona: 'नागरिक प्रोफाइल टेस्ट (1-क्लिक)',
    tabCredentials: 'कस्टम लॉगिन',
    selectProfile: 'सत्यापित नागरिक प्रोफ़ाइल चुनें:',
    autoLoginBadge: '1-क्लिक ऑटो लॉगिन',
    continueBtn: (name, state) => `${name} (${state}) के रूप में जारी रखें`,
    launching: 'स्कीमसेतु AI प्रारंभ हो रहा है...',
    dbtVerified: 'प्रत्यक्ष लाभ हस्तांतरण (DBT) एवं आधार NPCI सत्यापित',
    emailLabel: 'आधिकारिक / नागरिक ईमेल आईडी',
    passwordLabel: 'पासवर्ड / पिन',
    signInBtn: 'पोर्टल में प्रवेश करें',
    verifying: 'सत्यापित किया जा रहा है...',
    personas: {
      'lakshmi-karnataka': {
        role: 'परिवार की महिला मुखिया एवं गृहिणी',
        topSchemes: ['गृह लक्ष्मी (₹2,000/माह)', 'स्टैंड-अप इंडिया', 'PMEGP 35% सब्सिडी']
      },
      'kavitha-telangana': {
        role: 'एससी महिला उद्यमी एवं डेयरी इकाई संचालक',
        topSchemes: ['दलित बंधु (₹10 लाख अनुदान)', 'रैतु भरोसा', 'स्टैंड-अप इंडिया']
      },
      'sunita-maharashtra': {
        role: 'स्व-रोज़गार दर्जी एवं SHG महिला सदस्य',
        topSchemes: ['माझी लाडकी बहीण (₹1,500/माह)', 'पीएम स्वनिधि', 'मुद्रा शिशु ऋण']
      },
      'anita-dev': {
        role: 'ग्रामीण महिला शिल्पकार एवं ODOP कारीगर',
        topSchemes: ['UP ODOP मार्जिन मनी (₹20 लाख)', 'स्टैंड-अप इंडिया', 'PMEGP सब्सिडी']
      },
      'ramesh-farmer': {
        role: 'छोटे व सीमांत किसान (2.5 एकड़ भूमि)',
        topSchemes: ['पीएम-किसान DBT', 'पीएम आवास ग्रामीण', 'किसान क्रेडिट कार्ड']
      },
      'vikram-startup': {
        role: 'स्नातक युवा (रोज़गार एवं कौशल आकांक्षी)',
        topSchemes: ['युवा निधि (₹3,000/माह)', 'स्टार्टअप इंडिया सीड फंड', 'PMKVY 4.0']
      },
      'suresh-vendor': {
        role: 'शहरी स्ट्रीट वेंडर एवं रेहड़ी-पटरी संचालक',
        topSchemes: ['पीएम स्वनिधि (₹50,000 ऋण)', 'अटल पेंशन योजना', 'आयुष्मान गोल्डन कार्ड']
      }
    }
  },
  kn: {
    heroSub: '143+ ಪ್ರಮುಖ ಕೇಂದ್ರ ಮತ್ತು ರಾಜ್ಯ ಸರ್ಕಾರಿ ಕಲ್ಯಾಣ ಯೋಜನೆಗಳು • ಹೈಬ್ರಿಡ್ AI ಮತ್ತು ಬಹುಭಾಷಾ ಭಾಷಿಣಿ ಧ್ವನಿ',
    b1Title: 'ಕೇಂದ್ರ + ರಾಜ್ಯ ವ್ಯಾಪ್ತಿ',
    b1Desc: '39 ಕೇಂದ್ರ ಮತ್ತು 104 ರಾಜ್ಯ ಮಟ್ಟದ ಪ್ರಮುಖ ಕಲ್ಯಾಣ ಯೋಜನೆಗಳು.',
    b2Title: '10 ಪ್ರಾದೇಶಿಕ ಭಾಷೆಗಳು',
    b2Desc: 'ಕನ್ನಡ, ಇಂಗ್ಲಿಷ್, ಹಿಂದಿ, ತೆಲುಗು, ತಮಿಳು, ಮರಾಠಿ, ಗುಜರಾತಿ ಇತ್ಯಾದಿ.',
    b3Title: 'ಹೈಬ್ರಿಡ್ ಮ್ಯಾಚಿಂಗ್ ಎಂಜಿನ್',
    b3Desc: 'ನಿಯಮ ಆಧಾರಿತ ಫಿಲ್ಟರ್ (55%) + ವೆಕ್ಟರ್ RAG ಹೋಲಿಕೆ ಸ್ಕೋರ್ (40%).',
    b4Title: 'ನೇರ ಡಿಬಿಟಿ ಮತ್ತು ಪೋರ್ಟಲ್‌ಗಳು',
    b4Desc: 'ತ್ವರಿತ ಪರಿಶೀಲನೆಯೊಂದಿಗೆ ನೇರ ಅಧಿಕೃತ ಪೋರ್ಟಲ್ ಲಿಂಕ್‌ಗಳು.',
    tabPersona: 'ಪೌರ ಪ್ರೊಫೈಲ್ ಪರೀಕ್ಷೆ (1-ಕ್ಲಿಕ್)',
    tabCredentials: 'ಕಸ್ಟಮ್ ಲಾಗಿನ್',
    selectProfile: 'ಪರಿಶೀಲಿಸಿದ ಪೌರ ಪ್ರೊಫೈಲ್ ಆಯ್ಕೆಮಾಡಿ:',
    autoLoginBadge: '1-ಕ್ಲಿಕ್ ಆಟೋ ಲಾಗಿನ್',
    continueBtn: (name, state) => `${name} (${state}) ಆಗಿ ಮುಂದುವರಿಯಿರಿ`,
    launching: 'ಸ್ಕೀಮ್‌ಸೇತು AI ಪ್ರಾರಂಭವಾಗುತ್ತಿದೆ...',
    dbtVerified: 'ನೇರ ಲಾಭ ವರ್ಗಾವಣೆ (DBT) ಮತ್ತು ಆಧಾರ್ NPCI ಪರಿಶೀಲಿಸಲಾಗಿದೆ',
    emailLabel: 'ಅಧಿಕೃತ / ಪೌರ ಇಮೇಲ್ ಐಡಿ',
    passwordLabel: 'ಪಾಸ್‌ವರ್ಡ್ / ಪಿನ್',
    signInBtn: 'ಪೋರ್ಟಲ್‌ಗೆ ಲಾಗಿನ್ ಮಾಡಿ',
    verifying: 'ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ...',
    personas: {
      'lakshmi-karnataka': {
        role: 'ಕುಟುಂಬದ ಮಹಿಳಾ ಮುಖ್ಯಸ್ಥೆ ಮತ್ತು ಗೃಹಿಣಿ',
        topSchemes: ['ಗೃಹ ಲಕ್ಷ್ಮಿ (₹2,000/ತಿಂಗಳು)', 'ಸ್ಟ್ಯಾಂಡ್‌-ಅಪ್ ಇಂಡಿಯಾ', 'PMEGP ಸಬ್ಸಿಡಿ']
      },
      'kavitha-telangana': {
        role: 'ಎಸ್‌ಸಿ ಮಹಿಳಾ ಉದ್ಯಮಿ ಮತ್ತು ಡೇರಿ ಘಟಕ',
        topSchemes: ['ದಳಿತ ಬಂಧು (₹10 ಲಕ್ಷ ಅನುದಾನ)', 'ರೈತು ಭರೋಸಾ', 'ಸ್ಟ್ಯಾಂಡ್‌-ಅಪ್ ಇಂಡಿಯಾ']
      },
      'sunita-maharashtra': {
        role: 'ಸ್ವಯಂ ಉದ್ಯೋಗಿ ಟೈಲರ್ ಮತ್ತು ಎಸ್‌ಎಚ್‌ಜಿ ಸದಸ್ಯೆ',
        topSchemes: ['ಮಾಝಿ ಲಾಡ್ಕಿ ಬಹಿನ್ (₹1,500/ತಿಂಗಳು)', 'ಪಿಎಂ ಸ್ವನಿಧಿ', 'ಮುದ್ರಾ ಶಿಶು']
      },
      'anita-dev': {
        role: 'ಗ್ರಾಮೀಣ ಮಹಿಳಾ ಕುಶಲಕರ್ಮಿ ಮತ್ತು ಓಡಿಒಪಿ ಕರಕುಶಲತೆ',
        topSchemes: ['ಯುಪಿ ಓಡಿಒಪಿ ಮಾರ್ಜಿನ್ ಮನಿ (₹20 ಲಕ್ಷ)', 'ಸ್ಟ್ಯಾಂಡ್‌-ಅಪ್ ಇಂಡಿಯಾ', 'PMEGP']
      },
      'ramesh-farmer': {
        role: 'ಸಣ್ಣ ಮತ್ತು ಅತಿ ಸಣ್ಣ ರೈತ (2.5 ಎಕರೆ)',
        topSchemes: ['ಪಿಎಂ-ಕಿಸಾನ್ ಡಿಬಿಟಿ', 'ಪಿಎಂ ಆವಾಸ್ ಗ್ರಾಮೀಣ', 'ಕಿಸಾನ್ ಕ್ರೆಡಿಟ್']
      },
      'vikram-startup': {
        role: 'ಉದ್ಯೋಗ ಹುಡುಕುತ್ತಿರುವ ಪದವೀಧರ ಯುವಕ',
        topSchemes: ['ಯುವ ನಿಧಿ (₹3,000/ತಿಂಗಳು)', 'ಸ್ಟಾರ್ಟ್‌ಅಪ್ ಇಂಡಿಯಾ ಸೀಡ್ ಫಂಡ್', 'PMKVY 4.0']
      },
      'suresh-vendor': {
        role: 'ನಗರ ಬೀದಿ ವ್ಯಾಪಾರಿ ಮತ್ತು ಮಾರಾಟಗಾರ',
        topSchemes: ['ಪಿಎಂ ಸ್ವನಿಧಿ (₹50k ಸಾಲ)', 'ಅಟಲ್ ಪಿಂಚಣಿ ಯೋಜನೆ', 'ಆಯುಷ್ಮಾನ್ ಕಾರ್ಡ್']
      }
    }
  },
  te: {
    heroSub: '143+ ప్రధాన కేంద్ర మరియు రాష్ట్ర ప్రభుత్వ సంక్షేమ పథకాలు • హైబ్రిడ్ AI మరియు బహుభాషా భాషిణి వాయిస్',
    b1Title: 'కేంద్ర + రాష్ట్ర పథకాలు',
    b1Desc: '39 కేంద్ర మరియు 104 రాష్ట్ర స్థాయి ఫ్లాగ్‌షిప్ సంక్షేమ పథకాలు.',
    b2Title: '10 ప్రాంతీయ భాషలు',
    b2Desc: 'తెలుగు, ఇంగ్లీష్, హిందీ, కన్నడ, తమిళం, మరాఠీ, గుజరాతీ మొదలైనవి.',
    b3Title: 'హైబ్రిడ్ మ్యాచింగ్ ఇంజిన్',
    b3Desc: 'రూల్ ఫిల్టర్ (55%) + వెక్టర్ RAG సారూప్యత స్కోర్ (40%).',
    b4Title: 'డైరెక్ట్ డిబిటి & పోర్టల్స్',
    b4Desc: 'తక్షణ చెక్‌లిస్ట్ ధృవీకరణతో ప్రత్యక్ష అధికారిక పోర్టల్ లింక్‌లు.',
    tabPersona: 'పౌర ప్రొఫైల్ పరీక్ష (1-క్లిక్)',
    tabCredentials: 'కస్టమ్ లాగిన్',
    selectProfile: 'ధృవీకరించబడిన పౌర ప్రొఫైల్‌ను ఎంచుకోండి:',
    autoLoginBadge: '1-క్లిక్ ఆటో లాగిన్',
    continueBtn: (name, state) => `${name} (${state}) గా కొనసాగండి`,
    launching: 'స్కీమ్‌సేతు AI ప్రారంభించబడుతోంది...',
    dbtVerified: 'డైరెక్ట్ బెనిఫిట్ ట్రాన్స్‌ఫర్ (DBT) & ఆధార్ NPCI ధృవీకరించబడింది',
    emailLabel: 'అధికారిక / పౌర ఈమెయిల్ ఐడి',
    passwordLabel: 'పాస్‌వర్డ్ / పిన్',
    signInBtn: 'పోర్టల్‌లోకి ప్రవేశించండి',
    verifying: 'ధృవీకరిస్తోంది...',
    personas: {
      'lakshmi-karnataka': {
        role: 'కుటుంబ మహిళా పెద్ద మరియు గృహిణి',
        topSchemes: ['గృహ లక్ష్మి (₹2,000/నెల)', 'స్టాండప్ ఇండియా', 'PMEGP సబ్సిడీ']
      },
      'kavitha-telangana': {
        role: 'ఎస్సీ మహిళా పారిశ్రామికవేత్త & డెయిరీ యూనిట్',
        topSchemes: ['దళిత బంధు (₹10 లక్షల గ్రాంట్)', 'రైతు భరోసా', 'స్టాండప్ ఇండియా']
      },
      'sunita-maharashtra': {
        role: 'స్వయం ఉపాధి టైలర్ & స్వయం సహాయక సంఘ సభ్యురాలు',
        topSchemes: ['మాఝీ లాడ్కీ బహిన్ (₹1,500/నెల)', 'పీఎం స్వనిధి', 'ముద్రా శిశు']
      },
      'anita-dev': {
        role: 'గ్రామీణ మహిళా చేతివృత్తి కళాకారిణి & ODOP క్రాఫ్ట్',
        topSchemes: ['యూపీ ODOP మార్జిన్ మనీ (₹20 లక్షలు)', 'స్టాండప్ ఇండియా', 'PMEGP']
      },
      'ramesh-farmer': {
        role: 'చిన్న మరియు సన్నకారు రైతు (2.5 ఎకరాలు)',
        topSchemes: ['పీఎం-కిసాన్ DBT', 'పీఎం ఆవాస్ గ్రామీణ్', 'కిసాన్ క్రెడిట్']
      },
      'vikram-startup': {
        role: 'ఉద్యోగం కోసం చూస్తున్న పట్టభద్ర యువకుడు',
        topSchemes: ['యువ నిధి (₹3,000/నెల)', 'స్టార్టప్ ఇండియా సీడ్ ఫండ్', 'PMKVY 4.0']
      },
      'suresh-vendor': {
        role: 'పట్టణ వీధి వ్యాపారి మరియు హాకర్',
        topSchemes: ['పీఎం స్వనిధి (₹50k రుణం)', 'అటల్ పెన్షన్ యోజన', 'ఆయుష్మాన్ గోల్డెన్ కార్డ్']
      }
    }
  },
  ta: {
    heroSub: '143+ முதன்மை மத்திய மற்றும் மாநில அரசு நலத்திட்டங்கள் • ஹைப்ரிட் AI மற்றும் பன்மொழி பாஷினி வாய்ஸ்',
    b1Title: 'மத்திய + மாநில கவரேஜ்',
    b1Desc: '39 மத்திய & 104 மாநில முதன்மை நலத்திட்டங்கள்.',
    b2Title: '10 பிராந்திய மொழிகள்',
    b2Desc: 'தமிழ், ஆங்கிலம், இந்தி, கன்னடம், தெலுங்கு, மராத்தி மற்றும் பல.',
    b3Title: 'ஹைப்ரிட் பொருத்துதல் எஞ்சின்',
    b3Desc: 'விதி வடிகட்டி (55%) + வெக்டர் RAG ஒற்றுமை (40%).',
    b4Title: 'நேரடி DBT & அரசு தளங்கள்',
    b4Desc: 'உடனடி ஆவண சரிபார்ப்புடன் நேரடி அதிகாரப்பூர்வ போர்டல் இணைப்புகள்.',
    tabPersona: 'குடிமக்கள் சுயவிவரம் (1-கிளிக்)',
    tabCredentials: 'விருப்ப உள்நுழைவு',
    selectProfile: 'சரிபார்க்கப்பட்ட சுயவிவரத்தைத் தேர்ந்தெடுக்கவும்:',
    autoLoginBadge: '1-கிளிக் தானியங்கி உள்நுழைவு',
    continueBtn: (name, state) => `${name} (${state}) ஆக தொடரவும்`,
    launching: 'ஸ்கீம்சேது AI தொடங்குகிறது...',
    dbtVerified: 'நேரடி பயன் பரிமாற்றம் (DBT) & ஆதார் NPCI சரிபார்க்கப்பட்டது',
    emailLabel: 'அதிகாரப்பூர்வ / குடிமக்கள் மின்னஞ்சல்',
    passwordLabel: 'கடவுச்சொல் / பின்',
    signInBtn: 'போர்ட்டலில் உள்நுழைக',
    verifying: 'சரிபார்க்கிறது...',
    personas: {
      'lakshmi-karnataka': {
        role: 'குடும்ப பெண் தலைவர் மற்றும் குடும்பத்தலைவி',
        topSchemes: ['கிருஹ லக்ஷ்மி (₹2,000/மாதம்)', 'ஸ்டாண்ட்-அப் இந்தியா', 'PMEGP மானியம்']
      },
      'kavitha-telangana': {
        role: 'எஸ்.சி பெண் தொழில்முனைவோர் & பால் பண்ணை',
        topSchemes: ['தலித் பந்து (₹10 லட்சம் மானியம்)', 'ரைத்து பரோசா', 'ஸ்டாண்ட்-அப் இந்தியா']
      },
      'sunita-maharashtra': {
        role: 'சுயதொழில் தையல்காரர் மற்றும் SHG உறுப்பினர்',
        topSchemes: ['லாட்கி பஹின் (₹1,500/மாதம்)', 'பிஎம் ஸ்வநிதி', 'முத்ரா சிசு']
      },
      'anita-dev': {
        role: 'கிராமப்புற பெண் கைவினைஞர் & ODOP கைவினை',
        topSchemes: ['உபி ODOP விளிம்பு தொகை (₹20 லட்சம்)', 'ஸ்டாண்ட்-அப் இந்தியா', 'PMEGP']
      },
      'ramesh-farmer': {
        role: 'சிறு மற்றும் குறு விவசாயி (2.5 ஏக்கர்)',
        topSchemes: ['பிஎம்-கிசான் DBT', 'பிஎம் ஆவாஸ் கிராமின்', 'கிசான் கிரெடிட்']
      },
      'vikram-startup': {
        role: 'வேலை தேடும் பட்டதாரி இளைஞர்',
        topSchemes: ['யுவ நிதி (₹3,000/மாதம்)', 'ஸ்டார்ட்அப் இந்தியா நிதி', 'PMKVY 4.0']
      },
      'suresh-vendor': {
        role: 'நகர்ப்புற தெரு வியாபாரி மற்றும் நடைபாதை வியாபாரி',
        topSchemes: ['பிஎம் ஸ்வநிதி (₹50,000 கடன்)', 'அடல் பென்ஷன்', 'ஆயுஷ்மான் அட்டை']
      }
    }
  },
  mr: {
    heroSub: '143+ प्रमुख केंद्र आणि राज्य सरकारी कल्याणकारी योजना • हायब्रिड AI आणि बहुभाषिक भाषिणी व्हॉईस',
    b1Title: 'केंद्र + राज्य व्याप्ती',
    b1Desc: '39 केंद्रीय आणि 104 राज्यस्तरीय प्रमुख कल्याणकारी योजना.',
    b2Title: '10 प्रादेशिक भाषा',
    b2Desc: 'मराठी, इंग्रजी, हिंदी, कन्नड, तेलुगू, तमिळ, गुजराती इ.',
    b3Title: 'हायब्रिड मॅचिंग इंजिन',
    b3Desc: 'नियम फिल्टर (55%) + व्हेक्टर RAG समानता स्कोअर (40%).',
    b4Title: 'थेट डीबीटी आणि अधिकृत पोर्टल्स',
    b4Desc: 'त्वरित पडताळणीसह थेट अधिकृत पोर्टल लिंक्स.',
    tabPersona: 'नागरिक प्रोफाइल चाचणी (1-क्लिक)',
    tabCredentials: 'कस्टम लॉगिन',
    selectProfile: 'पडताळणी केलेले नागरिक प्रोफाइल निवडा:',
    autoLoginBadge: '1-क्लिक ऑटो लॉगिन',
    continueBtn: (name, state) => `${name} (${state}) म्हणून सुरू ठेवा`,
    launching: 'स्कीमसेतू AI सुरू होत आहे...',
    dbtVerified: 'थेट लाभ हस्तांतरण (DBT) आणि आधार NPCI पडताळणीकृत',
    emailLabel: 'अधिकृत / नागरिक ईमेल आयडी',
    passwordLabel: 'पासवर्ड / पिन',
    signInBtn: 'पोर्टलवर लॉगिन करा',
    verifying: 'पडताळणी सुरू आहे...',
    personas: {
      'lakshmi-karnataka': {
        role: 'कुटुंबाची महिला प्रमुख आणि गृहिणी',
        topSchemes: ['गृह लक्ष्मी (₹2,000/महिना)', 'स्टँड-अप इंडिया', 'PMEGP सबसिडी']
      },
      'kavitha-telangana': {
        role: 'एससी महिला उद्योजक आणि दुग्ध व्यवसाय',
        topSchemes: ['दलित बंधू (₹10 लाख अनुदान)', 'रयतू भरोसा', 'स्टँड-अप इंडिया']
      },
      'sunita-maharashtra': {
        role: 'स्वयंरोजगार शिंपी आणि बचत गट सदस्य',
        topSchemes: ['माझी लाडकी बहीण (₹1,500/महिना)', 'पीएम स्वनिधी', 'मुद्रा शिशु']
      },
      'anita-dev': {
        role: 'ग्रामीण महिला कारागीर आणि ओडीओपी हस्तकला',
        topSchemes: ['UP ODOP मार्जिन मनी (₹20 लाख)', 'स्टँड-अप इंडिया', 'PMEGP']
      },
      'ramesh-farmer': {
        role: 'लहान आणि अल्पभूधारक शेतकरी (2.5 एकर)',
        topSchemes: ['पीएम-किसान DBT', 'पीएम आवास ग्रामीण', 'किसान क्रेडिट कार्ड']
      },
      'vikram-startup': {
        role: 'पदवीधर तरुण (रोजगार इच्छुक)',
        topSchemes: ['युवा निधी (₹3,000/महिना)', 'स्टार्टअप इंडिया फंड', 'PMKVY 4.0']
      },
      'suresh-vendor': {
        role: 'शहरी फेरीवाला आणि पथविक्रेता',
        topSchemes: ['पीएम स्वनिधी (₹50k कर्ज)', 'अटल पेन्शन योजना', 'आयुष्मान कार्ड']
      }
    }
  },
  gu: {
    heroSub: '143+ મુખ્ય કેન્દ્રીય અને રાજ્ય સરકારી કલ્યાણ યોજનાઓ • હાઇબ્રિડ AI અને બહુભાષી ભાષિણી વૉઇસ',
    b1Title: 'કેન્દ્રીય + રાજ્ય કવરેજ',
    b1Desc: '39 કેન્દ્રીય અને 104 રાજ્ય કક્ષાની મુખ્ય કલ્યાણ યોજનાઓ.',
    b2Title: '10 પ્રાદેશિક ભાષાઓ',
    b2Desc: 'ગુજરાતી, અંગ્રેજી, હિન્દી, કન્નડ, તેલુગુ, તમિલ, મરાઠી વગેરે.',
    b3Title: 'હાઇબ્રિડ મેચિંગ એન્જિન',
    b3Desc: 'નિયમ આધારિત ફિલ્ટર (55%) + વેક્ટર RAG સમાનતા (40%).',
    b4Title: 'ડાયરેક્ટ ડીબીટી અને પોર્ટલ',
    b4Desc: 'ત્વરિત ચકાસણી સાથે સીધી સત્તાવાર પોર્ટલ લિંક્સ.',
    tabPersona: 'નાગરિક પ્રોફાઇલ પરીક્ષણ (1-ક્લિક)',
    tabCredentials: 'કસ્ટમ લૉગિન',
    selectProfile: 'ચકાસાયેલ નાગરિક પ્રોફાઇલ પસંદ કરો:',
    autoLoginBadge: '1-ક્લિક ઑટો લૉગિન',
    continueBtn: (name, state) => `${name} (${state}) તરીકે ચાલુ રાખો`,
    launching: 'સ્કીમસેતુ AI શરૂ થઈ રહ્યું છે...',
    dbtVerified: 'ડાયરેક્ટ બેનિફિટ ટ્રાન્સફર (DBT) અને આધાર NPCI ચકાસાયેલ',
    emailLabel: 'સત્તાવાર / નાગરિક ઈમેલ આઈડી',
    passwordLabel: 'પાસવર્ડ / પિન',
    signInBtn: 'પોર્ટલ પર સાઇન ઇન કરો',
    verifying: 'ચકાસી રહ્યું છે...',
    personas: {
      'lakshmi-karnataka': {
        role: 'પરિવારના મહિલા વડા અને ગૃહિણી',
        topSchemes: ['ગૃહ લક્ષ્મી (₹2,000/માસ)', 'સ્ટેન્ડ-અપ ઇન્ડિયા', 'PMEGP સબસિડી']
      },
      'kavitha-telangana': {
        role: 'એસસી મહિલા ઉદ્યોગસાહસિક અને ડેરી યુનિટ',
        topSchemes: ['દલિત બંધુ (₹10 લાખ ગ્રાન્ટ)', 'રયથુ ભરોસા', 'સ્ટેન્ડ-અપ ઇન્ડિયા']
      },
      'sunita-maharashtra': {
        role: 'સ્વ-રોજગાર દરજી અને SHG સભ્ય',
        topSchemes: ['માઝી લાડકી બહેન (₹1,500/માસ)', 'પીએમ સ્વનિધિ', 'મુદ્રા શિશુ']
      },
      'anita-dev': {
        role: 'ગ્રામીણ મહિલા કારીગર અને ODOP હસ્તકલા',
        topSchemes: ['યુપી ODOP માર્જિન મની (₹20 લાખ)', 'સ્ટેન્ડ-અપ ઇન્ડિયા', 'PMEGP']
      },
      'ramesh-farmer': {
        role: 'નાના અને સીમાંત ખેડૂત (2.5 એકર)',
        topSchemes: ['પીએમ-કિસાન DBT', 'પીએમ આવાસ ગ્રામીણ', 'કિસાન ક્રેડિટ']
      },
      'vikram-startup': {
        role: 'રોજગાર શોધતા સ્નાતક યુવાન',
        topSchemes: ['યુવા નિધિ (₹3,000/માસ)', 'સ્ટાર્ટઅપ ઇન્ડિયા સીડ ફંડ', 'PMKVY 4.0']
      },
      'suresh-vendor': {
        role: 'શહેરી ફેરિયો અને લારી ગલ્લા સંચાલક',
        topSchemes: ['પીએમ સ્વનિધિ (₹50k લોન)', 'અટલ પેન્શન યોજના', 'આયુષ્માન કાર્ડ']
      }
    }
  },
  bn: {
    heroSub: '143+ প্রধান কেন্দ্রীয় ও রাজ্য সরকারি কল্যাণমূলক প্রকল্প • হাইব্রিড AI এবং বহুভাষিক ভাষিণী ভয়েস',
    b1Title: 'কেন্দ্রীয় + রাজ্য কভারেজ',
    b1Desc: '39টি কেন্দ্রীয় এবং 104টি রাজ্য স্তরের প্রধান কল্যাণমূলক প্রকল্প।',
    b2Title: '10টি আঞ্চলিক ভাষা',
    b2Desc: 'বাংলা, ইংরেজি, হিন্দি, কন্নড়, তেলুগু, তামিল ইত্যাদি।',
    b3Title: 'হাইব্রিড ম্যাচিং ইঞ্জিন',
    b3Desc: 'নিয়ম ভিত্তিক ফিল্টার (55%) + ভেক্টর RAG মিল (40%)।',
    b4Title: 'সরাসরি ডিবিটি ও পোর্টাল',
    b4Desc: 'তাৎক্ষণিক যাচাইকরণের সাথে সরাসরি অফিসিয়াল পোর্টাল লিঙ্ক।',
    tabPersona: 'নাগরিক প্রোফাইল পরীক্ষা (1-ক্লিক)',
    tabCredentials: 'কাস্টম লগইন',
    selectProfile: 'যাচাইকৃত নাগরিক প্রোফাইল নির্বাচন করুন:',
    autoLoginBadge: '1-ক্লিক অটো লগইন',
    continueBtn: (name, state) => `${name} (${state}) হিসেবে এগিয়ে যান`,
    launching: 'স্কিমসেতু AI চালু হচ্ছে...',
    dbtVerified: 'সরাসরি সুবিধা স্থানান্তর (ডিবিটি) ও আধার এনপিসিআই যাচাইকৃত',
    emailLabel: 'অফিসিয়াল / নাগরিক ইমেল আইডি',
    passwordLabel: 'পাসওয়ার্ড / পিন',
    signInBtn: 'পোর্টাল সাইন ইন করুন',
    verifying: 'যাচাই করা হচ্ছে...',
    personas: {
      'lakshmi-karnataka': {
        role: 'পরিবারের মহিলা প্রধান ও গৃহিনী',
        topSchemes: ['গৃহ লক্ষ্মী (₹2,000/মাস)', 'স্ট্যান্ড-আপ ইন্ডিয়া', 'PMEGP ভর্তুকি']
      },
      'kavitha-telangana': {
        role: 'তফসিলি জাতিভুক্ত নারী উদ্যোক্তা ও দুগ্ধ ইউনিট',
        topSchemes: ['দলিত বন্ধু (₹10 লাখ অনুদান)', 'রায়তু ভরসা', 'স্ট্যান্ড-আপ ইন্ডিয়া']
      },
      'sunita-maharashtra': {
        role: 'স্বনির্ভর দর্জি এবং স্বনির্ভর দলের সদস্য',
        topSchemes: ['লাডকি বহিন (₹1,500/মাস)', 'পিএম স্বনিধি', 'মুদ্রা শিশু']
      },
      'anita-dev': {
        role: 'গ্রামীণ নারী কারিগর ও ওডিওপি শিল্প',
        topSchemes: ['ইউপি ওডিওপি মার্জিন মানি (₹20 লাখ)', 'স্ট্যান্ড-আপ ইন্ডিয়া', 'PMEGP']
      },
      'ramesh-farmer': {
        role: 'ক্ষুদ্র ও প্রান্তিক কৃষক (২.৫ একর)',
        topSchemes: ['পিএম-কিষাণ ডিবিটি', 'পিএম আবাস গ্রামীণ', 'কিষাণ ক্রেডিট']
      },
      'vikram-startup': {
        role: 'চাকরি প্রার্থী স্নাতক যুবক',
        topSchemes: ['যুব নিধি (₹3,000/মাস)', 'স্টার্টআপ ইন্ডিয়া ফান্ড', 'PMKVY 4.0']
      },
      'suresh-vendor': {
        role: 'শহুরে হকার ও পথ বিক্রেতা',
        topSchemes: ['পিএম স্বনিধি (₹50k ঋণ)', 'অটল পেনশন যোজনা', 'আয়ুষ্মান কার্ড']
      }
    }
  },
  pa: {
    heroSub: '143+ ਪ੍ਰਮੁੱਖ ਕੇਂਦਰੀ ਅਤੇ ਰਾਜ ਸਰਕਾਰੀ ਭਲਾਈ ਸਕੀਮਾਂ • ਹਾਈਬ੍ਰਿਡ AI ਅਤੇ ਬਹੁਭਾਸ਼ਾਈ ਭਾਸ਼ਿਨੀ ਆਵਾਜ਼',
    b1Title: 'ਕੇਂਦਰੀ + ਰਾਜ ਕਵਰੇਜ',
    b1Desc: '39 ਕੇਂਦਰੀ ਅਤੇ 104 ਰਾਜ ਪੱਧਰੀ ਪ੍ਰਮੁੱਖ ਭਲਾਈ ਸਕੀਮਾਂ।',
    b2Title: '10 ਖੇਤਰੀ ਭਾਸ਼ਾਵਾਂ',
    b2Desc: 'ਪੰਜਾਬੀ, ਅੰਗਰੇਜ਼ੀ, ਹਿੰਦੀ, ਕੰਨੜ, ਤੇਲਗੂ, ਤਾਮਿਲ ਆਦਿ।',
    b3Title: 'ਹਾਈਬ੍ਰਿਡ ਮੈਚਿੰਗ ਇੰਜਣ',
    b3Desc: 'ਨਿਯਮ ਫਿਲਟਰ (55%) + ਵੈਕਟਰ RAG ਸਮਾਨਤਾ (40%)।',
    b4Title: 'ਸਿੱਧਾ ਡੀਬੀਟੀ ਅਤੇ ਪੋਰਟਲ',
    b4Desc: 'ਤੁਰੰਤ ਜਾਂਚ ਦੇ ਨਾਲ ਸਿੱਧੇ ਅਧਿਕਾਰਤ ਪੋਰਟਲ ਲਿੰਕ।',
    tabPersona: 'ਨਾਗਰਿਕ ਪ੍ਰੋਫਾਈਲ ਟੈਸਟ (1-ਕਲਿੱਕ)',
    tabCredentials: 'ਕਸਟਮ ਲੌਗਇਨ',
    selectProfile: 'ਪ੍ਰਮਾਣਿਤ ਨਾਗਰਿਕ ਪ੍ਰੋਫਾਈਲ ਚੁਣੋ:',
    autoLoginBadge: '1-ਕਲਿੱਕ ਆਟੋ ਲੌਗਇਨ',
    continueBtn: (name, state) => `${name} (${state}) ਵਜੋਂ ਜਾਰੀ ਰੱਖੋ`,
    launching: 'ਸਕੀਮਸੇਤੂ AI ਸ਼ੁਰੂ ਹੋ ਰਿਹਾ ਹੈ...',
    dbtVerified: 'ਸਿੱਧਾ ਲਾਭ ਟ੍ਰਾਂਸਫਰ (ਡੀਬੀਟੀ) ਅਤੇ ਆਧਾਰ NPCI ਪ੍ਰਮਾਣਿਤ',
    emailLabel: 'ਸਰਕਾਰੀ / ਨਾਗਰਿਕ ਈਮੇਲ ਆਈਡੀ',
    passwordLabel: 'ਪਾਸਵਰਡ / ਪਿੰਨ',
    signInBtn: 'ਪੋਰਟਲ ਵਿੱਚ ਲੌਗਇਨ ਕਰੋ',
    verifying: 'ਜਾਂਚ ਹੋ ਰਹੀ ਹੈ...',
    personas: {
      'lakshmi-karnataka': {
        role: 'ਪਰਿਵਾਰ ਦੀ ਮਹਿਲਾ ਮੁਖੀ ਅਤੇ ਘਰੇਲੂ ਔਰਤ',
        topSchemes: ['ਗ੍ਰਹਿ ਲਕਸ਼ਮੀ (₹2,000/ਮਹੀਨਾ)', 'ਸਟੈਂਡ-ਅੱਪ ਇੰਡੀਆ', 'PMEGP ਸਬਸਿਡੀ']
      },
      'kavitha-telangana': {
        role: 'ਐਸਸੀ ਮਹਿਲਾ ਉਦਮੀ ਅਤੇ ਡੇਅਰੀ ਯੂਨਿਟ',
        topSchemes: ['ਦਲਿਤ ਬੰਧੂ (₹10 ਲੱਖ ਗ੍ਰਾਂਟ)', 'ਰੈਥੂ ਭਰੋਸਾ', 'ਸਟੈਂਡ-ਅੱਪ ਇੰਡੀਆ']
      },
      'sunita-maharashtra': {
        role: 'ਸਵੈ-ਰੁਜ਼ਗਾਰ ਪ੍ਰਾਪਤ ਦਰਜ਼ੀ ਅਤੇ ਐਸਐਚਜੀ ਮੈਂਬਰ',
        topSchemes: ['ਲਾਡਕੀ ਬਹਿਣ (₹1,500/ਮਹੀਨਾ)', 'ਪੀਐਮ ਸਵਨਿਧੀ', 'ਮੁਦਰਾ ਸ਼ਿਸ਼ੂ']
      },
      'anita-dev': {
        role: 'ਪੇਂਡੂ ਮਹਿਲਾ ਕਾਰੀਗਰ ਅਤੇ ਓਡੀਓਪੀ ਕਰਾਫਟ',
        topSchemes: ['ਯੂਪੀ ਓਡੀਓਪੀ ਮਾਰਜਿਨ ਮਨੀ (₹20 ਲੱਖ)', 'ਸਟੈਂਡ-ਅੱਪ ਇੰਡੀਆ', 'PMEGP']
      },
      'ramesh-farmer': {
        role: 'ਛੋਟੇ ਅਤੇ ਸੀਮਾਂਤ ਕਿਸਾਨ (2.5 ਏਕੜ)',
        topSchemes: ['ਪੀਐਮ-ਕਿਸਾਨ ਡੀਬੀਟੀ', 'ਪੀਐਮ ਆਵਾਸ ਗ੍ਰਾਮੀਣ', 'ਕਿਸਾਨ ਕ੍ਰੈਡਿਟ']
      },
      'vikram-startup': {
        role: 'ਰੁਜ਼ਗਾਰ ਦੀ ਭਾਲ ਕਰ ਰਿਹਾ ਗ੍ਰੈਜੂਏਟ ਨੌਜਵਾਨ',
        topSchemes: ['ਯੁਵਾ ਨਿਧੀ (₹3,000/ਮਹੀਨਾ)', 'ਸਟਾਰਟਅੱਪ ਇੰਡੀਆ ਫੰਡ', 'PMKVY 4.0']
      },
      'suresh-vendor': {
        role: 'ਸ਼ਹਿਰੀ ਸਟਰੀਟ ਵਿਕਰੇਤਾ ਅਤੇ ਹਾਕਰ',
        topSchemes: ['ਪੀਐਮ ਸਵਨਿਧੀ (₹50k ਕਰਜ਼ਾ)', 'ਅਟਲ ਪੈਨਸ਼ਨ ਸਕੀਮ', 'ਆਯੁਸ਼ਮਾਨ ਕਾਰਡ']
      }
    }
  },
  ml: {
    heroSub: '143+ പ്രമുഖ കേന്ദ്ര-സംസ്ഥാന ക്ഷേമ പദ്ധതികൾ • ഹൈബ്രിഡ് AI & ബഹുഭാഷാ ഭാഷിണി വോയ്‌സ്',
    b1Title: 'കേന്ദ്ര + സംസ്ഥാന കവറേജ്',
    b1Desc: '39 കേന്ദ്രവും 104 സംസ്ഥാനവുമായ മുൻനിര ക്ഷേമ പദ്ധതികൾ.',
    b2Title: '10 പ്രാദേശിക ഭാഷകൾ',
    b2Desc: 'മലയാളം, ഇംഗ്ലീഷ്, ഹിന്ദി, കന്നഡ, തെലുങ്ക്, തമിഴ് മുതലായവ.',
    b3Title: 'ഹൈബ്രിഡ് മാച്ചിംഗ് എഞ്ചിൻ',
    b3Desc: 'റൂൾ ഫിൽട്ടർ (55%) + വെക്റ്റർ RAG സാമ്യം (40%).',
    b4Title: 'നേരിട്ടുള്ള ഡി.ബി.ടി & പോർട്ടലുകൾ',
    b4Desc: 'തൽക്ഷണ ചെക്ക്‌ലിസ്റ്റ് പരിശോധനയോടെ നേരിട്ടുള്ള ഔദ്യോഗിക പോർട്ടൽ ലിങ്കുകൾ.',
    tabPersona: 'പൗര പ്രൊഫൈൽ ടെസ്റ്റ് (1-ക്ലിക്ക്)',
    tabCredentials: 'കസ്റ്റം ലോഗിൻ',
    selectProfile: 'സ്ഥിരീകരിച്ച പൗര പ്രൊഫൈൽ തിരഞ്ഞെടുക്കുക:',
    autoLoginBadge: '1-ക്ലിക്ക് ഓട്ടോ ലോഗിൻ',
    continueBtn: (name, state) => `${name} (${state}) ആയി തുടരുക`,
    launching: 'സ്കീംസേതു AI ആരംഭിക്കുന്നു...',
    dbtVerified: 'ഡയറക്ട് ബെനിഫിറ്റ് ട്രാൻസ്ഫർ (DBT) & ആധാർ NPCI പരിശോധിച്ചു',
    emailLabel: 'ഔദ്യോഗിക / പൗര ഇമെയിൽ ഐഡി',
    passwordLabel: 'പാസ്‌വേഡ് / പിൻ',
    signInBtn: 'പോർട്ടലിൽ പ്രവേശിക്കുക',
    verifying: 'പരിശോധിക്കുന്നു...',
    personas: {
      'lakshmi-karnataka': {
        role: 'കുടുംബനാഥയും വീട്ടമ്മയും',
        topSchemes: ['ഗൃഹ ലക്ഷ്മി (₹2,000/മാസം)', 'സ്റ്റാൻഡ്-അപ്പ് ഇന്ത്യ', 'PMEGP സബ്‌സിഡി']
      },
      'kavitha-telangana': {
        role: 'പട്ടികജാതി വനിതാ സംരംഭക & ഡയറി യൂണിറ്റ്',
        topSchemes: ['ദളിത് ബന്ധു (₹10 ലക്ഷം ഗ്രാന്റ്)', 'റൈത്തു ഭരോസ', 'സ്റ്റാൻഡ്-അപ്പ് ഇന്ത്യ']
      },
      'sunita-maharashtra': {
        role: 'സ്വയംതൊഴിൽ തയ്യൽക്കാരൻ & എസ്.എച്ച്.ജി അംഗം',
        topSchemes: ['ലാഡ്കി ബഹിൻ (₹1,500/മാസം)', 'പിഎം സ്വനിധി', 'മുദ്ര ശിശു']
      },
      'anita-dev': {
        role: 'ഗ്രാമീണ വനിതാ കരകൗശല വിദഗ്ധ & ഒ.ഡി.ಒ.പി ക്രാഫ്റ്റ്',
        topSchemes: ['യുപി ഒഡിഒപി മാർജിൻ മണി (₹20 ലക്ഷം)', 'സ്റ്റാൻഡ്-അപ്പ് ഇന്ത്യ', 'PMEGP']
      },
      'ramesh-farmer': {
        role: 'ചെറുകിട, നാമമാത്ര കർഷകൻ (2.5 ഏക്കർ)',
        topSchemes: ['പിഎം-കിസാൻ ഡിബിടി', 'പിഎം ആവാസ് ഗ്രാമീൺ', 'കിസാൻ ക്രെഡിറ്റ്']
      },
      'vikram-startup': {
        role: 'തൊഴിൽ അന്വേഷിക്കുന്ന ബിരുദധാരിയായ യുവാവ്',
        topSchemes: ['യുവ നിധി (₹3,000/മാസം)', 'സ്റ്റാർട്ടപ്പ് ഇന്ത്യ സീഡ് ഫണ്ട്', 'PMKVY 4.0']
      },
      'suresh-vendor': {
        role: 'നഗര തെരുവ് കച്ചവടക്കാരൻ',
        topSchemes: ['പിഎം സ്വനിധി (₹50k വായ്പ)', 'അടൽ പെൻഷൻ യോജന', 'ആയുഷ്മാൻ കാർഡ്']
      }
    }
  }
};

export default function LoginPage({ onLoginSuccess, currentLang = 'en', setCurrentLang }) {
  const t = (k) => bhashini.t(k, currentLang);
  const loc = LOGIN_LOCALIZATIONS[currentLang] || LOGIN_LOCALIZATIONS['en'];

  const [email, setEmail] = useState('citizen@schemesetu.gov.in');
  const [password, setPassword] = useState('demo1234');
  const [showPassword, setShowPassword] = useState(false);
  const [selectedPersona, setSelectedPersona] = useState(DEMO_PERSONAS[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('persona'); // 'persona' | 'credentials'

  const handlePersonaLogin = (persona) => {
    setIsLoading(true);
    setTimeout(() => {
      onLoginSuccess({
        email: `${persona.id}@schemesetu.gov.in`,
        name: persona.name,
        role: persona.role,
        profile: persona.profile,
        avatar: persona.avatar,
        isGuest: false
      });
      setIsLoading(false);
    }, 400);
  };

  const handleFormLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      onLoginSuccess({
        email,
        name: email.split('@')[0].toUpperCase(),
        role: 'Citizen User',
        profile: {
          name: email.split('@')[0],
          age: 32,
          income: 150000,
          category: 'OBC',
          gender: 'Female',
          occupation: 'Women Entrepreneur',
          state: 'Karnataka',
          has_land: false
        },
        avatar: '🇮🇳',
        isGuest: false
      });
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 md:p-8 bg-slate-950 text-slate-100 overflow-hidden font-sans">
      <ThreeBackground />

      {/* Top Floating Language Switcher */}
      <div className="absolute top-4 right-4 md:top-6 md:right-8 z-30 flex items-center gap-2 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-slate-700/80 shadow-2xl">
        <Globe className="w-4 h-4 text-amber-400" />
        <span className="text-xs font-bold text-slate-300 hidden sm:inline">भाषा / Language:</span>
        <select
          value={currentLang}
          onChange={(e) => setCurrentLang && setCurrentLang(e.target.value)}
          className="bg-slate-800 text-amber-300 font-bold text-xs py-1 px-2.5 rounded-xl border border-slate-600 focus:outline-none focus:border-amber-400 cursor-pointer"
        >
          {SUPPORTED_LANGUAGES.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.native} ({lang.name})
            </option>
          ))}
        </select>
      </div>

      <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Hero & Value Proposition */}
        <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs md:text-sm font-semibold backdrop-blur-md">
            <Sparkles className="w-4 h-4" />
            <span>{t('brandSub')}</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white">
              {(() => {
                const brand = bhashini.t('brandTitle', currentLang) || 'SchemeSetu AI';
                const lastSpace = brand.lastIndexOf(' ');
                if (lastSpace !== -1) {
                  const mainPart = brand.substring(0, lastSpace);
                  const aiPart = brand.substring(lastSpace + 1);
                  return (
                    <>
                      {mainPart}{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
                        {aiPart}
                      </span>
                    </>
                  );
                }
                return brand;
              })()}
            </h1>
            <p className="text-sm md:text-base text-slate-300 font-medium leading-relaxed">
              {loc.heroSub}
            </p>
          </div>

          {/* Value Bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md flex items-start gap-3 text-left">
              <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 mt-0.5">
                <Landmark className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">{loc.b1Title}</h4>
                <p className="text-[11px] text-slate-400">{loc.b1Desc}</p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md flex items-start gap-3 text-left">
              <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400 mt-0.5">
                <Globe className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">{loc.b2Title}</h4>
                <p className="text-[11px] text-slate-400">{loc.b2Desc}</p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md flex items-start gap-3 text-left">
              <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 mt-0.5">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">{loc.b3Title}</h4>
                <p className="text-[11px] text-slate-400">{loc.b3Desc}</p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md flex items-start gap-3 text-left">
              <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400 mt-0.5">
                <FileCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">{loc.b4Title}</h4>
                <p className="text-[11px] text-slate-400">{loc.b4Desc}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Authentication & Persona Selector Card */}
        <div className="lg:col-span-6">
          <div className="glass-panel p-6 md:p-8 rounded-3xl border border-slate-700/60 shadow-2xl space-y-6 relative overflow-hidden backdrop-blur-xl">
            
            {/* Header Tabs */}
            <div className="flex rounded-2xl bg-slate-900/90 p-1 border border-slate-800">
              <button
                type="button"
                onClick={() => setActiveTab('persona')}
                className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'persona'
                    ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 font-black'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <UserCheck className="w-4 h-4" />
                <span>{loc.tabPersona}</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('credentials')}
                className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'credentials'
                    ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 font-black'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Lock className="w-4 h-4" />
                <span>{loc.tabCredentials}</span>
              </button>
            </div>

            {/* TAB 1: 1-Click Persona Login */}
            {activeTab === 'persona' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    {loc.selectProfile}
                  </span>
                  <span className="text-[11px] text-amber-400 font-semibold">
                    {loc.autoLoginBadge}
                  </span>
                </div>

                <div className="space-y-2.5 max-h-[360px] overflow-y-auto pr-1">
                  {DEMO_PERSONAS.map((persona) => {
                    const isSelected = selectedPersona.id === persona.id;
                    const personaLoc = loc.personas?.[persona.id] || {
                      role: persona.role,
                      topSchemes: persona.topSchemes
                    };

                    return (
                      <div
                        key={persona.id}
                        onClick={() => setSelectedPersona(persona)}
                        className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                          isSelected
                            ? 'bg-amber-500/10 border-amber-500/80 shadow-md ring-1 ring-amber-500/30'
                            : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{persona.avatar}</span>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="text-sm font-bold text-white">{persona.name}</h4>
                              <span className="px-2 py-0.2 rounded-full text-[10px] font-medium bg-slate-800 text-slate-300">
                                {persona.profile.state}
                              </span>
                            </div>
                            <p className="text-xs text-slate-400 font-normal">{personaLoc.role}</p>
                            <div className="text-[10px] text-emerald-400 font-medium pt-0.5">
                              {personaLoc.topSchemes.join(' • ')}
                            </div>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePersonaLogin(persona);
                          }}
                          className={`p-2 rounded-xl text-xs font-bold transition-transform active:scale-95 ${
                            isSelected
                              ? 'bg-amber-500 text-slate-950 hover:bg-amber-400'
                              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                          }`}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={() => handlePersonaLogin(selectedPersona)}
                  disabled={isLoading}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 transition-all transform active:scale-98 disabled:opacity-50"
                >
                  <UserCheck className="w-4 h-4" />
                  <span>
                    {isLoading 
                      ? loc.launching 
                      : loc.continueBtn(selectedPersona.name, selectedPersona.profile.state)}
                  </span>
                </button>
              </div>
            )}

            {/* TAB 2: Standard Login Form */}
            {activeTab === 'credentials' && (
              <form onSubmit={handleFormLogin} className="space-y-4 animate-fadeIn">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">{loc.emailLabel}</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="citizen@schemesetu.gov.in"
                      className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">{loc.passwordLabel}</label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="••••••••"
                      className="w-full pl-10 pr-10 py-3 rounded-2xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-200"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 transition-all transform active:scale-98 disabled:opacity-50"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>{isLoading ? loc.verifying : loc.signInBtn}</span>
                </button>
              </form>
            )}

            {/* Bottom Security Footer */}
            <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{loc.dbtVerified}</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}