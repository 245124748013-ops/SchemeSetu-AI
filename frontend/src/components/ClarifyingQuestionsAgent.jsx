import React, { useState } from 'react';
import { 
  BrainCircuit, 
  HelpCircle, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight
} from 'lucide-react';
import { bhashini } from '../services/bhashiniService';

export default function ClarifyingQuestionsAgent({ profile, setProfile, onRunDiscovery, currentLang = 'en' }) {
  const t = (k) => bhashini.t(k, currentLang);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [answers, setAnswers] = useState({});

  const localizedQuestions = {
  "te": [
    {
      "id": "q_rural",
      "question": "మీ వ్యాపారం గ్రామీణ ప్రాంతంలో (గ్రామ పంచాయతీ పరిధిలో) ఉందా లేదా పట్టణ మున్సిపాలిటీలో ఉందా?",
      "impact": "+10% అదనపు PMEGP రాయితీని అన్‌లాక్ చేస్తుంది (35% గ్రామీణ vs 25% పట్టణ)",
      "options": [
        {
          "label": "గ్రామీణ (గ్రామ పంచాయతీ)",
          "value": "rural",
          "bonus": "+10% అదనపు గ్రామీణ రాయితీ"
        },
        {
          "label": "పట్టణ మున్సిపాలిటీ",
          "value": "urban",
          "bonus": "సాధారణ పట్టణ రాయితీ"
        }
      ]
    },
    {
      "id": "q_shg",
      "question": "మీరు లేదా మీ కుటుంబ సభ్యులు ఎవరైనా మహిళా స్వయం సహాయక సంఘంలో (SHG / డ్వాక్రా) సభ్యులా?",
      "impact": "₹30,000 DAY-NRLM రివాల్వ్ ఫండ్ మరియు 4% వడ్డీతో రుణాన్ని అన్‌లాక్ చేస్తుంది",
      "options": [
        {
          "label": "అవును, క్రియాశీల SHG సభ్యురాలిని",
          "value": "yes",
          "bonus": "DAY-NRLM 4% రుణం అన్‌లాక్"
        },
        {
          "label": "కాదు, వ్యక్తిగత దరఖాస్తుదారు",
          "value": "no",
          "bonus": "సాధారణ MSME ట్రాక్"
        }
      ]
    },
    {
      "id": "q_education",
      "question": "మీ వద్ద కనీసం 8వ లేదా 10వ తరగతి ఉత్తీర్ణత విద్యా ధృవీకరణ పత్రం ఉందా?",
      "impact": "PMEGP లో ₹10 లక్షల నుండి ₹50 లక్షల వరకు పెద్ద ప్రాజెక్టులకు అనుమతిస్తుంది",
      "options": [
        {
          "label": "అవును, 8వ / 10వ పాస్ లేదా అంతకంటే ఎక్కువ",
          "value": "yes",
          "bonus": "గరిష్టంగా ₹50 లక్షల ప్రాజెక్ట్ పరిమితి"
        },
        {
          "label": "8వ తరగతి కంటే తక్కువ",
          "value": "no",
          "bonus": "₹10 లక్షల వరకు మాత్రమే పరిమితం"
        }
      ]
    },
    {
      "id": "q_greenfield",
      "question": "ఇది పూర్తిగా సరికొత్త వ్యాపార ప్రారంభమా (Greenfield) లేదా ఉన్న వ్యాపార విస్తరణా?",
      "impact": "స్టాండ్-అప్ ఇండియా మరియు SISFS పథకాలకు మొదటిసారి కొత్త ప్రాజెక్టులు తప్పనిసరి",
      "options": [
        {
          "label": "సరికొత్త వ్యాపారం (Greenfield)",
          "value": "greenfield",
          "bonus": "100% స్టాండ్-అప్ ఇండియా అర్హత"
        },
        {
          "label": "ఉన్న వ్యాపార విస్తరణ",
          "value": "existing",
          "bonus": "ముద్రా / PMFME ట్రాక్"
        }
      ]
    }
  ],
  "kn": [
    {
      "id": "q_rural",
      "question": "ನಿಮ್ಮ ಉದ್ಯಮವು ಗ್ರಾಮೀಣ ಪ್ರದೇಶದಲ್ಲಿದೆಯೇ (ಗ್ರಾಮ ಪಂಚಾಯತ್) ಅಥವಾ ನಗರ ಪುರಸಭೆಯಲ್ಲಿದೆಯೇ?",
      "impact": "+10% ಹೆಚ್ಚಿನ PMEGP ಸಬ್ಸಿಡಿ ನೀಡುತ್ತದೆ (35% ಗ್ರಾಮೀಣ vs 25% ನಗರ)",
      "options": [
        {
          "label": "ಗ್ರಾಮೀಣ (ಗ್ರಾಮ ಪಂಚಾಯತ್)",
          "value": "rural",
          "bonus": "+10% ಗ್ರಾಮೀಣ ಸಬ್ಸಿಡಿ"
        },
        {
          "label": "ನಗರ ಪುರಸಭೆ",
          "value": "urban",
          "bonus": "ಸಾಮಾನ್ಯ ನಗರ ಸಬ್ಸಿಡಿ"
        }
      ]
    },
    {
      "id": "q_shg",
      "question": "ನೀವು ಅಥವಾ ನಿಮ್ಮ ಕುಟುಂಬದವರು ಮಹಿಳಾ ಸ್ವಸಹಾಯ ಸಂಘದ (SHG) ಸದಸ್ಯರಾಗಿದ್ದೀರಾ?",
      "impact": "ರೂ. 30,000 ರಿವಾಲ್ವಿಂಗ್ ಫಂಡ್ ಮತ್ತು 4% ಬಡ್ಡಿಯಲ್ಲಿ ಸಾಲ ಒದಗಿಸುತ್ತದೆ",
      "options": [
        {
          "label": "ಹೌದು, ಸಕ್ರಿಯ SHG ಸದಸ್ಯೆ",
          "value": "yes",
          "bonus": "DAY-NRLM 4% ಸಾಲ ಲಭ್ಯ"
        },
        {
          "label": "ಇಲ್ಲ, ವೈಯಕ್ತಿಕ ಅಭ್ಯರ್ಥಿ",
          "value": "no",
          "bonus": "ಸಾಮಾನ್ಯ ಎಂಎಸ್‌ಎಂಇ ಟ್ರ್ಯಾಕ್"
        }
      ]
    },
    {
      "id": "q_education",
      "question": "ನೀವು ಕನಿಷ್ಠ 8ನೇ ಅಥವಾ 10ನೇ ತರಗತಿ ಉತ್ತೀರ್ಣ ಪ್ರಮಾಣಪತ್ರ ಹೊಂದಿದ್ದೀರಾ?",
      "impact": "PMEGP ಯಲ್ಲಿ ರೂ. 50 ಲಕ್ಷದವರೆಗಿನ ದೊಡ್ಡ ಯೋಜನೆಗಳಿಗೆ ಅನುಮತಿಸುತ್ತದೆ",
      "options": [
        {
          "label": "ಹೌದು, 8ನೇ/10ನೇ ಪಾಸ್ ಅಥವಾ ಹೆಚ್ಚು",
          "value": "yes",
          "bonus": "ರೂ. 50 ಲಕ್ಷ ಪ್ರಾಜೆಕ್ಟ್ ಸೀಲಿಂಗ್"
        },
        {
          "label": "8ನೇ ತರಗತಿಗಿಂತ ಕಡಿಮೆ",
          "value": "no",
          "bonus": "ರೂ. 10 ಲಕ್ಷ ಮಿತಿ"
        }
      ]
    },
    {
      "id": "q_greenfield",
      "question": "ಇದು ಸಂಪೂರ್ಣ ಹೊಸ ವ್ಯವಹಾರವೇ (ಗ್ರೀನ್‌ಫೀಲ್ಡ್) ಅಥವಾ ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ ವಿಸ್ತರಣೆಯೇ?",
      "impact": "ಸ್ಟ್ಯಾಂಡ್-ಅಪ್ ಇಂಡಿಯಾಗೆ ಹೊಸ ಉದ್ಯಮ ಕಡ್ಡಾಯವಾಗಿದೆ",
      "options": [
        {
          "label": "ಹೊಸ ಪ್ರಾಜೆಕ್ಟ್ (Greenfield)",
          "value": "greenfield",
          "bonus": "100% ಸ್ಟ್ಯಾಂಡ್-ಅಪ್ ಇಂಡಿಯಾ ಅರ್ಹತೆ"
        },
        {
          "label": "ಹಾಲಿ ವ್ಯಾಪಾರ ವಿಸ್ತರಣೆ",
          "value": "existing",
          "bonus": "ಮುದ್ರಾ / ಪಿಎಂಎಫ್‌ಎಂಇ ಟ್ರ್ಯಾಕ್"
        }
      ]
    }
  ],
  "hi": [
    {
      "id": "q_rural",
      "question": "क्या आपका उद्यम ग्रामीण क्षेत्र (ग्राम पंचायत) में स्थित है या शहरी नगरपालिका में?",
      "impact": "+10% अधिक PMEGP सब्सिडी अनलॉक करता है (35% ग्रामीण vs 25% शहरी)",
      "options": [
        {
          "label": "ग्रामीण (ग्राम पंचायत)",
          "value": "rural",
          "bonus": "+10% अतिरिक्त ग्रामीण सब्सिडी"
        },
        {
          "label": "शहरी नगरपालिका",
          "value": "urban",
          "bonus": "मानक शहरी सब्सिडी"
        }
      ]
    },
    {
      "id": "q_shg",
      "question": "क्या आप या आपके परिवार का कोई सदस्य महिला स्वयं सहायता समूह (SHG) से जुड़ा है?",
      "impact": "₹30,000 DAY-NRLM रिवॉल्विंग फंड और 4% ब्याज पर ऋण अनलॉक करता है",
      "options": [
        {
          "label": "हाँ, सक्रिय SHG सदस्य",
          "value": "yes",
          "bonus": "DAY-NRLM 4% ऋण अनलॉक"
        },
        {
          "label": "नहीं, व्यक्तिगत आवेदक",
          "value": "no",
          "bonus": "मानक एमएसएमई ट्रैक"
        }
      ]
    },
    {
      "id": "q_education",
      "question": "क्या आपके पास न्यूनतम 8वीं या 10वीं कक्षा का शैक्षणिक प्रमाण पत्र है?",
      "impact": "PMEGP में ₹10 लाख से ₹50 लाख तक के बड़े प्रोजेक्ट की अनुमति देता है",
      "options": [
        {
          "label": "हाँ, 8वीं / 10वीं पास या अधिक",
          "value": "yes",
          "bonus": "₹50 लाख तक प्रोजेक्ट सीलिंग"
        },
        {
          "label": "8वीं कक्षा से कम",
          "value": "no",
          "bonus": "₹10 लाख तक सीमित"
        }
      ]
    },
    {
      "id": "q_greenfield",
      "question": "क्या यह पूरी तरह से नया व्यवसाय (Greenfield) है या मौजूदा व्यवसाय का विस्तार?",
      "impact": "स्टैंड-अप इंडिया और SISFS के लिए प्रथम बार नए प्रोजेक्ट अनिवार्य हैं",
      "options": [
        {
          "label": "नया उद्यम (Greenfield)",
          "value": "greenfield",
          "bonus": "100% स्टैंड-अप इंडिया पात्र"
        },
        {
          "label": "मौजूदा व्यवसाय विस्तार",
          "value": "existing",
          "bonus": "मुद्रा / पीएमएफएमई ट्रैक"
        }
      ]
    }
  ],
  "ta": [
    {
      "id": "q_rural",
      "question": "உங்கள் தொழில் கிராமப்புறத்தில் (கிராம பஞ்சாயத்து) உள்ளதா அல்லது நகராட்சியில் உள்ளதா?",
      "impact": "+10% கூடுதல் PMEGP மானியத்தை திறக்கிறது (35% கிராமப்புறம் vs 25% நகர்ப்புறம்)",
      "options": [
        {
          "label": "கிராமப்புறம் (கிராம பஞ்சாயத்து)",
          "value": "rural",
          "bonus": "+10% கூடுதல் கிராமப்புற மானியம்"
        },
        {
          "label": "நகராட்சி / மாநகராட்சி",
          "value": "urban",
          "bonus": "நிலையான நகர்ப்புற மானியம்"
        }
      ]
    },
    {
      "id": "q_shg",
      "question": "நீங்களோ அல்லது உங்கள் குடும்பத்தினரோ மகளிர் சுயஉதவிக் குழுவில் (SHG) உறுப்பினரா?",
      "impact": "₹30,000 DAY-NRLM சுழல் நிதி மற்றும் 4% வட்டியில் கடனைத் திறக்கிறது",
      "options": [
        {
          "label": "ஆம், SHG உறுப்பினர்",
          "value": "yes",
          "bonus": "DAY-NRLM 4% கடன் திறப்பு"
        },
        {
          "label": "இல்லை, தனிப்பட்ட விண்ணப்பதாரர்",
          "value": "no",
          "bonus": "நிலையான MSME பாதை"
        }
      ]
    },
    {
      "id": "q_education",
      "question": "உங்களிடம் குறைந்தபட்சம் 8-ஆம் வகுப்பு அல்லது 10-ஆம் வகுப்பு தேர்ச்சி சான்றிதழ் உள்ளதா?",
      "impact": "PMEGP திட்டத்தில் ₹50 லட்சம் வரையிலான பெரிய உற்பத்தி திட்டங்களுக்கு அனுமதிக்கிறது",
      "options": [
        {
          "label": "ஆம், 8/10-ஆம் வகுப்பு அல்லது அதற்கு மேல்",
          "value": "yes",
          "bonus": "₹50 லட்சம் வரை திட்ட உச்சவரம்பு"
        },
        {
          "label": "8-ஆம் வகுப்புக்கு கீழ்",
          "value": "no",
          "bonus": "₹10 லட்சம் வரை மட்டுமே"
        }
      ]
    },
    {
      "id": "q_greenfield",
      "question": "இது முற்றிலும் புதிய தொழிலா (Greenfield) அல்லது தற்போதுள்ள தொழிலின் விரிவாக்கமா?",
      "impact": "ஸ்டாண்ட்-அப் இந்தியா திட்டத்திற்கு புதிய தொழில்கள் மட்டுமே அனுமதிக்கப்படும்",
      "options": [
        {
          "label": "புதிய தொழில் (Greenfield)",
          "value": "greenfield",
          "bonus": "100% ஸ்டாண்ட்-அப் இந்தியா தகுதி"
        },
        {
          "label": "தற்போதுள்ள தொழில் விரிவாக்கம்",
          "value": "existing",
          "bonus": "முத்ரா திட்டம்"
        }
      ]
    }
  ],
  "mr": [
    {
      "id": "q_rural",
      "question": "तुमचा व्यवसाय ग्रामीण भागात (ग्रामपंचायत) आहे की शहरी नगरपालिकेत?",
      "impact": "+१०% अधिक PMEGP सबसिडी अनलॉक करतो (३५% ग्रामीण vs २५% शहरी)",
      "options": [
        {
          "label": "ग्रामीण (ग्रामपंचायत)",
          "value": "rural",
          "bonus": "+१०% अतिरिक्त ग्रामीण सबसिडी"
        },
        {
          "label": "शहरी नगरपालिका",
          "value": "urban",
          "bonus": "मानक शहरी सबसिडी"
        }
      ]
    },
    {
      "id": "q_shg",
      "question": "तुम्ही किंवा तुमच्या कुटुंबातील कोणी महिला बचत गटाचे (SHG) सदस्य आहात का?",
      "impact": "₹३०,००० DAY-NRLM फिरता निधी आणि ४% व्याजाने कर्ज उपलब्ध करते",
      "options": [
        {
          "label": "होय, सक्रिय बचत गट सदस्य",
          "value": "yes",
          "bonus": "DAY-NRLM ४% कर्ज अनलॉक"
        },
        {
          "label": "नाही, वैयक्तिक अर्जदार",
          "value": "no",
          "bonus": "मानक एमएसएमई ट्रॅक"
        }
      ]
    },
    {
      "id": "q_education",
      "question": "तुमच्याकडे किमान ८ वी किंवा १० वी उत्तीर्ण शैक्षणिक प्रमाणपत्र आहे का?",
      "impact": "PMEGP मध्ये ₹५० लाखांपर्यंतच्या मोठ्या प्रकल्पांना परवानगी देतो",
      "options": [
        {
          "label": "होय, ८ वी / १० वी उत्तीर्ण किंवा अधिक",
          "value": "yes",
          "bonus": "₹५० लाखांपर्यंत प्रकल्प मर्यादा"
        },
        {
          "label": "८ वी पेक्षा कमी",
          "value": "no",
          "bonus": "₹१० लाखांपर्यंत मर्यादित"
        }
      ]
    },
    {
      "id": "q_greenfield",
      "question": "हा पूर्णपणे नवीन व्यवसाय (Greenfield) आहे की सध्याच्या व्यवसायाचा विस्तार?",
      "impact": "स्टँड-अप इंडियासाठी नवीन प्रकल्प असणे अनिवार्य आहे",
      "options": [
        {
          "label": "नवीन व्यवसाय (Greenfield)",
          "value": "greenfield",
          "bonus": "१००% स्टँड-अप इंडिया पात्र"
        },
        {
          "label": "विद्यमान व्यवसाय विस्तार",
          "value": "existing",
          "bonus": "मुद्रा / पीएमएफएमई ट्रॅक"
        }
      ]
    }
  ],
  "gu": [
    {
      "id": "q_rural",
      "question": "શું તમારો વ્યવસાય ગ્રામીણ વિસ્તાર (ગ્રામ પંચાયત) માં છે કે શહેરમાં?",
      "impact": "+10% વધારાની PMEGP સબસિડી અનલૉક કરે છે (35% ગ્રામીણ)",
      "options": [
        {
          "label": "ગ્રામીણ (ગ્રામ પંચાયત)",
          "value": "rural",
          "bonus": "+10% ગ્રામીણ સબસિડી"
        },
        {
          "label": "શહેરી વિસ્તાર",
          "value": "urban",
          "bonus": "સામાન્ય સબસિડી"
        }
      ]
    },
    {
      "id": "q_shg",
      "question": "શું તમે અથવા તમારા પરિવારના સભ્ય મહિલા સખી મંડળ (SHG) ના સભ્ય છો?",
      "impact": "4% વ્યાજે ₹20 લાખ સુધીની લોન અનલૉક કરે છે",
      "options": [
        {
          "label": "હા, સખી મંડળ સભ્ય",
          "value": "yes",
          "bonus": "DAY-NRLM 4% લોન"
        },
        {
          "label": "ના, વ્યક્તિગત અરજદાર",
          "value": "no",
          "bonus": "સામાન્ય ટ્રેક"
        }
      ]
    },
    {
      "id": "q_education",
      "question": "શું તમારી પાસે લઘુત્તમ 8મું અથવા 10મું પાસનું પ્રમાણપત્ર છે?",
      "impact": "PMEGP માં ₹50 લાખ સુધીના મોટા પ્રોજેક્ટની મંજૂરી",
      "options": [
        {
          "label": "હા, 8મું/10મું પાસ",
          "value": "yes",
          "bonus": "₹50 લાખ પ્રોજેક્ટ સીમા"
        },
        {
          "label": "8માથી ઓછું",
          "value": "no",
          "bonus": "₹10 લાખ મર્યાદા"
        }
      ]
    },
    {
      "id": "q_greenfield",
      "question": "શું આ સંપૂર્ણ નવો વ્યવસાય (Greenfield) છે કે જૂનો વિસ્તાર?",
      "impact": "સ્ટેન્ડ-અપ ઇન્ડિયા માટે નવો વ્યવસાય ફરજિયાત છે",
      "options": [
        {
          "label": "નવો પ્રોજેક્ટ (Greenfield)",
          "value": "greenfield",
          "bonus": "100% પાત્ર"
        },
        {
          "label": "ચાલુ વ્યવસાય વિસ્તાર",
          "value": "existing",
          "bonus": "મુદ્રા ટ્રેક"
        }
      ]
    }
  ],
  "bn": [
    {
      "id": "q_rural",
      "question": "আপনার উদ্যোগটি কি গ্রামীণ এলাকায় (গ্রাম পঞ্চায়েত) নাকি পৌরসভায় অবস্থিত?",
      "impact": "+১০% অতিরিক্ত PMEGP ভর্তুকি আনলক করে (৩৫% গ্রামীণ vs ২৫% শহুরে)",
      "options": [
        {
          "label": "গ্রামীণ (গ্রাম পঞ্চায়েত)",
          "value": "rural",
          "bonus": "+১০% অতিরিক্ত গ্রামীণ ভর্তুকি"
        },
        {
          "label": "পৌরসভা এলাকা",
          "value": "urban",
          "bonus": "স্ট্যান্ডার্ড শহুরে ভর্তুকি"
        }
      ]
    },
    {
      "id": "q_shg",
      "question": "আপনি বা আপনার পরিবারের কেউ কি মহিলা স্বনির্ভর দলের (SHG) সদস্য?",
      "impact": "₹৩০,০০০ DAY-NRLM তহবিল এবং ৪% সুদে ঋণ আনলক করে",
      "options": [
        {
          "label": "হ্যাঁ, সক্রিয় SHG সদস্য",
          "value": "yes",
          "bonus": "DAY-NRLM ৪% ঋণ আনলক"
        },
        {
          "label": "না, একক আবেদনকারী",
          "value": "no",
          "bonus": "সাধারণ এমএসএমই ট্র্যাক"
        }
      ]
    },
    {
      "id": "q_education",
      "question": "আপনার কি ন্যূনতম অষ্টম বা দশম শ্রেণী উত্তীর্ণের সার্টিফিকেট রয়েছে?",
      "impact": "PMEGP-তে ₹৫০ লাখ পর্যন্ত বড় উৎপাদন প্রকল্পের অনুমতি দেয়",
      "options": [
        {
          "label": "হ্যাঁ, ৮ম / ১০ম পাস বা তার বেশি",
          "value": "yes",
          "bonus": "সর্বোচ্চ ₹৫০ লাখ প্রকল্প সিলিং"
        },
        {
          "label": "৮ম শ্রেণীর কম",
          "value": "no",
          "bonus": "₹১০ লাখ পর্যন্ত সীমাবদ্ধ"
        }
      ]
    },
    {
      "id": "q_greenfield",
      "question": "এটি কি সম্পূর্ণ নতুন ব্যবসা (Greenfield) নাকি বিদ্যমান ব্যবসার সম্প্রসারণ?",
      "impact": "স্ট্যান্ড-আপ ইন্ডিয়ার জন্য প্রথমবার নতুন প্রকল্প বাধ্যতামূলক",
      "options": [
        {
          "label": "নতুন উদ্যোগ (Greenfield)",
          "value": "greenfield",
          "bonus": "১০০% স্ট্যান্ড-আপ ইন্ডিয়া যোগ্য"
        },
        {
          "label": "বিদ্যমান ব্যবসা সম্প্রসারণ",
          "value": "existing",
          "bonus": "মুদ্রা ট্র্যাক"
        }
      ]
    }
  ],
  "pa": [
    {
      "id": "q_rural",
      "question": "ਕੀ ਤੁਹਾਡਾ ਕਾਰੋਬਾਰ ਪੇਂਡੂ ਖੇਤਰ (ਗ੍ਰਾਮ ਪੰਚਾਇਤ) ਵਿੱਚ ਹੈ ਜਾਂ ਸ਼ਹਿਰ ਵਿੱਚ?",
      "impact": "+10% ਵਾਧੂ PMEGP ਸਬਸਿਡੀ ਅਨਲੌਕ ਕਰਦਾ ਹੈ (35% ਪੇਂਡੂ)",
      "options": [
        {
          "label": "ਪੇਂਡੂ (ਗ੍ਰਾਮ ਪੰਚਾਇਤ)",
          "value": "rural",
          "bonus": "+10% ਪੇਂਡੂ ਸਬਸਿਡੀ"
        },
        {
          "label": "ਸ਼ਹਿਰੀ ਖੇਤਰ",
          "value": "urban",
          "bonus": "ਸਟੈਂਡਰਡ ਸਬਸਿਡੀ"
        }
      ]
    },
    {
      "id": "q_shg",
      "question": "ਕੀ ਤੁਸੀਂ ਕਿਸੇ ਮਹਿਲਾ ਸਵੈ-ਸਹਾਇਤਾ ਸਮੂਹ (SHG) ਦੇ ਮੈਂਬਰ ਹੋ?",
      "impact": "4% ਵਿਆਜ ਤੇ ₹20 ਲੱਖ ਤੱਕ ਦਾ ਕਰਜ਼ਾ ਅਨਲੌਕ ਕਰਦਾ ਹੈ",
      "options": [
        {
          "label": "ਹਾਂ, SHG ਮੈਂਬਰ",
          "value": "yes",
          "bonus": "DAY-NRLM 4% ਕਰਜ਼ਾ"
        },
        {
          "label": "ਨਹੀਂ, ਵਿਅਕਤੀਗਤ ਬਿਨੈਕਾਰ",
          "value": "no",
          "bonus": "ਸਟੈਂਡਰਡ ਟਰੈਕ"
        }
      ]
    },
    {
      "id": "q_education",
      "question": "ਕੀ ਤੁਹਾਡੇ ਕੋਲ ਘੱਟੋ-ਘੱਟ 8ਵੀਂ ਜਾਂ 10ਵੀਂ ਪਾਸ ਦਾ ਸਰਟੀਫਿਕੇਟ ਹੈ?",
      "impact": "PMEGP ਵਿੱਚ ₹50 ਲੱਖ ਤੱਕ ਦੇ ਪ੍ਰੋਜੈਕਟ ਦੀ ਇਜਾਜ਼ਤ",
      "options": [
        {
          "label": "ਹਾਂ, 8ਵੀਂ/10ਵੀਂ ਪਾਸ",
          "value": "yes",
          "bonus": "₹50 ਲੱਖ ਪ੍ਰੋਜੈਕਟ ਹੱਦ"
        },
        {
          "label": "8ਵੀਂ ਤੋਂ ਘੱਟ",
          "value": "no",
          "bonus": "₹10 ਲੱਖ ਹੱਦ"
        }
      ]
    },
    {
      "id": "q_greenfield",
      "question": "ਕੀ ਇਹ ਬਿਲਕੁਲ ਨਵਾਂ ਕਾਰੋਬਾਰ (Greenfield) ਹੈ ਜਾਂ ਪੁਰਾਣੇ ਦਾ ਵਿਸਥਾਰ?",
      "impact": "ਸਟੈਂਡ-ਅੱਪ ਇੰਡੀਆ ਲਈ ਨਵਾਂ ਪ੍ਰੋਜੈਕਟ ਲਾਜ਼ਮੀ ਹੈ",
      "options": [
        {
          "label": "ਨਵਾਂ ਪ੍ਰੋਜੈਕਟ (Greenfield)",
          "value": "greenfield",
          "bonus": "100% ਯੋਗ"
        },
        {
          "label": "ਮੌਜੂਦਾ ਕਾਰੋਬਾਰ",
          "value": "existing",
          "bonus": "ਮੁਦਰਾ ਟਰੈਕ"
        }
      ]
    }
  ],
  "ml": [
    {
      "id": "q_rural",
      "question": "നിങ്ങളുടെ സംരംഭം ഗ്രാമപഞ്ചായത്തിലാണോ നഗരസഭയിലാണോ സ്ഥിതി ചെയ്യുന്നത്?",
      "impact": "+10% അധിക PMEGP സബ്‌സിഡി നൽകുന്നു (35% ഗ്രാമീണം)",
      "options": [
        {
          "label": "ഗ്രാമപഞ്ചായത്ത്",
          "value": "rural",
          "bonus": "+10% ഗ്രാമീണ സബ്‌സിഡി"
        },
        {
          "label": "നഗരസഭ",
          "value": "urban",
          "bonus": "സാധാരണ നിരക്ക്"
        }
      ]
    },
    {
      "id": "q_shg",
      "question": "നിങ്ങൾ കുടുംബശ്രീ / വനിതാ സ്വയംസഹായ സംഘത്തിൽ (SHG) അംഗമാണോ?",
      "impact": "4% പലിശയിൽ 20 ലക്ഷം രൂപ വരെ വായ്പ അൺലോക്ക് ചെയ്യുന്നു",
      "options": [
        {
          "label": "അതെ, SHG അംഗമാണ്",
          "value": "yes",
          "bonus": "കുടുംബശ്രീ വായ്പ അൺലോക്ക്"
        },
        {
          "label": "അല്ല, വ്യക്തിഗത അപേക്ഷകൻ",
          "value": "no",
          "bonus": "സാധാരണ ട്രാക്ക്"
        }
      ]
    },
    {
      "id": "q_education",
      "question": "നിങ്ങൾക്ക് കുറഞ്ഞത് എട്ടാം ക്ലാസ് അല്ലെങ്കിൽ പത്താം ക്ലാസ് പാസ് സർട്ടിഫിക്കറ്റ് ഉണ്ടോ?",
      "impact": "PMEGP യിൽ 50 ലക്ഷം രൂപ വരെയുള്ള വലിയ പ്രോജക്റ്റുകൾക്ക് അനുമതി",
      "options": [
        {
          "label": "അതെ, പാസ്സായിട്ടുണ്ട്",
          "value": "yes",
          "bonus": "50 ലക്ഷം പ്രോജക്റ്റ് പരിധി"
        },
        {
          "label": "എട്ടാം ക്ലാസ്സിൽ താഴെ",
          "value": "no",
          "bonus": "10 ലക്ഷം പരിധി"
        }
      ]
    },
    {
      "id": "q_greenfield",
      "question": "ഇത് പൂർണ്ണമായും പുതിയ സംരംഭമാണോ അതോ നിലവിലുള്ള വിപുലീകരണമാണോ?",
      "impact": "സ്റ്റാൻഡ്-അപ്പ് ഇന്ത്യ പുതിയ ഗ്രീൻഫീൽഡ് സംരംഭങ്ങൾക്ക് മാത്രമാണ്",
      "options": [
        {
          "label": "പുതിയ പ്രോജക്റ്റ് (Greenfield)",
          "value": "greenfield",
          "bonus": "100% അർഹൻ"
        },
        {
          "label": "നിലവിലുള്ള ബിസിനസ്സ്",
          "value": "existing",
          "bonus": "മുദ്ര ട്രാക്ക്"
        }
      ]
    }
  ],
  "en": [
    {
      "id": "q_rural",
      "question": "Is your enterprise located in a Rural area (under Gram Panchayat) or Urban municipality?",
      "impact": "Unlocks +10% higher PMEGP subsidy (35% rural vs 25% urban)",
      "options": [
        {
          "label": "Rural (Gram Panchayat)",
          "value": "rural",
          "bonus": "+10% Rural Subsidy"
        },
        {
          "label": "Urban Municipality",
          "value": "urban",
          "bonus": "Standard Urban Rate"
        }
      ]
    },
    {
      "id": "q_shg",
      "question": "Are you or any family member currently registered in a Women Self Help Group (SHG)?",
      "impact": "Unlocks ₹30,000 DAY-NRLM Revolving Fund & 4% interest subvention loans",
      "options": [
        {
          "label": "Yes, Active SHG Member",
          "value": "yes",
          "bonus": "Unlocks DAY-NRLM 4% Loan"
        },
        {
          "label": "No, Individual Applicant",
          "value": "no",
          "bonus": "Standard MSME Track"
        }
      ]
    },
    {
      "id": "q_education",
      "question": "Do you possess minimum 8th Standard or 10th Standard educational certificate?",
      "impact": "Permits manufacturing projects up to ₹50 Lakhs under PMEGP",
      "options": [
        {
          "label": "Yes, 8th / 10th Pass or Higher",
          "value": "yes",
          "bonus": "Max ₹50L Project Ceiling"
        },
        {
          "label": "Below 8th Standard",
          "value": "no",
          "bonus": "Up to ₹10L Ceiling"
        }
      ]
    },
    {
      "id": "q_greenfield",
      "question": "Is this a completely New Business Setup (Greenfield) or an existing expansion?",
      "impact": "Stand-Up India and SISFS require first-time new greenfield enterprises",
      "options": [
        {
          "label": "New Project (Greenfield)",
          "value": "greenfield",
          "bonus": "100% Greenfield Eligible"
        },
        {
          "label": "Existing Unit Upgradation",
          "value": "existing",
          "bonus": "Mudra / PMFME Track"
        }
      ]
    }
  ]
};

  const questions = localizedQuestions[currentLang] || localizedQuestions['te'] || localizedQuestions['en'];

  const handleSelectOption = (qId, option) => {
    setAnswers(prev => ({ ...prev, [qId]: option.value }));
    setAnsweredCount(prev => prev + 1);

    if (qId === 'q_rural' && option.value === 'rural') {
      setProfile(p => ({ ...p, is_rural: true }));
    }
    if (qId === 'q_education' && option.value === 'yes') {
      setProfile(p => ({ ...p, education: '10th Pass' }));
    }
  };

  const handleApplyClarifications = () => {
    onRunDiscovery(profile);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* Header */}
      <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <BrainCircuit className="w-5 h-5 text-amber-400" />
            {t('clarifyTitle')}
          </h2>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
            {answeredCount}/4 {t('answered')}
          </span>
        </div>
        <p className="text-xs md:text-sm text-slate-400">
          {t('clarifySub')}
        </p>
      </div>

      {/* Questions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {questions.map((q, idx) => {
          const selected = answers[q.id];
          return (
            <div
              key={q.id}
              className={`glass-panel p-6 rounded-3xl border transition-all ${
                selected ? 'border-amber-500/50 bg-amber-950/10' : 'border-slate-800'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-800 text-amber-400 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {idx + 1}
                  </span>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white leading-snug">{q.question}</h4>
                    <p className="text-[11px] text-slate-400 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      <span>{q.impact}</span>
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {q.options.map((opt, oIdx) => {
                    const isOptionSelected = selected === opt.value;
                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleSelectOption(q.id, opt)}
                        className={`p-3 rounded-2xl text-left border transition-all text-xs flex flex-col justify-between gap-1.5 ${
                          isOptionSelected
                            ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-lg'
                            : 'bg-slate-900/90 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                        }`}
                      >
                        <span>{opt.label}</span>
                        <span className={`text-[10px] font-semibold ${isOptionSelected ? 'text-slate-900' : 'text-emerald-400'}`}>
                          {opt.bonus}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Apply Button */}
      <div className="flex justify-end pt-2">
        <button
          onClick={handleApplyClarifications}
          className="px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-xl flex items-center gap-2"
        >
          <span>{t('applyClarifyBtn')}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
