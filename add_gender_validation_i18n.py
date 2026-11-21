import re, json

with open('frontend/src/services/bhashiniService.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add GENDER_NAMES if not present
gender_names_code = """export const GENDER_NAMES = {
  "Female": {
    "en": "Female",
    "te": "మహిళ",
    "hi": "महिला",
    "ta": "பெண்",
    "kn": "ಮಹಿಳೆ",
    "mr": "महिला",
    "gu": "મહિલા",
    "bn": "মহিলা",
    "pa": "ਮਹਿਲਾ",
    "ml": "സ്ത്രീ"
  },
  "Male": {
    "en": "Male",
    "te": "పురుషుడు",
    "hi": "पुरुष",
    "ta": "ஆண்",
    "kn": "ಪುರುಷ",
    "mr": "पुरुष",
    "gu": "પુરુષ",
    "bn": "পুরুষ",
    "pa": "ਪੁਰਸ਼",
    "ml": "പുരുഷൻ"
  },
  "Transgender": {
    "en": "Transgender",
    "te": "ట్రాన్స్‌జెండర్",
    "hi": "ट्रांसजेंडर",
    "ta": "திருநங்கை / திருநம்பி",
    "kn": "ತೃತೀಯಲಿಂಗಿ",
    "mr": "तृतीयपंथी",
    "gu": "ટ્રાન્સજેન્ડર",
    "bn": "রূপান্তরকামী",
    "pa": "ਟਰਾਂਸਜੈਂਡਰ",
    "ml": "ഭിന്നലിംഗം"
  }
};

"""

if 'export const GENDER_NAMES =' not in content:
    target = 'export const OCCUPATION_NAMES = {'
    content = content.replace(target, gender_names_code + target, 1)

# 2. Add getGenderName to BhashiniClient if not present
if 'getGenderName(' not in content:
    target_fn = "getOccupationName(occ, lang = 'hi') {"
    replacement_fn = """getGenderName(gender, lang = 'hi') {
    if (!gender) return '';
    return GENDER_NAMES[gender]?.[lang] || gender;
  }

  getOccupationName(occ, lang = 'hi') {"""
    content = content.replace(target_fn, replacement_fn, 1)

# 3. Add UI dictionary keys
ui_additions = {
  "en": {
    "genderOccupationMismatchTitle": "⚠️ Gender & Occupation Inconsistency",
    "genderOccupationMismatchMsg": "You selected Gender as 'Male', but Main Occupation is set to 'Women Entrepreneur'. Male applicants are not eligible for women-exclusive welfare schemes. Please change your occupation or select Female.",
    "autoFixOccupation": "Change Occupation to 'Self Employed'",
    "womenOnly": "Women Only - Not Eligible for Male",
    "genderMismatchBadge": "Gender Mismatch",
    "invalidSelection": "Invalid Selection"
  },
  "te": {
    "genderOccupationMismatchTitle": "⚠️ లింగం & వృత్తి సరిపోలడం లేదు (ఎర్రర్)",
    "genderOccupationMismatchMsg": "మీరు లింగాన్ని 'పురుషుడు'గా ఎంచుకున్నారు, కానీ వృత్తి 'మహిళా వ్యవస్థాపకురాలు'గా ఉంది. పురుష దరఖాస్తుదారులు మహిళల ప్రత్యేక సంక్షేమ పథకాలకు అర్హులు కారు. దయచేసి సరైన వృత్తిని ఎంచుకోండి లేదా లింగాన్ని మార్చండి.",
    "autoFixOccupation": "వృత్తిని 'స్వయం ఉపాధి'గా మార్చండి",
    "womenOnly": "మహిళలకు మాత్రమే - పురుషులకు వర్తించదు",
    "genderMismatchBadge": "లింగం సరిపోలలేదు",
    "invalidSelection": "చెల్లని ఎంపిక"
  },
  "hi": {
    "genderOccupationMismatchTitle": "⚠️ लिंग एवं व्यवसाय में असंगति (त्रुटि)",
    "genderOccupationMismatchMsg": "आपने लिंग 'पुरुष' चुना है, लेकिन मुख्य व्यवसाय 'महिला उद्यमी' सेट है। पुरुष आवेदक महिला-विशिष्ट कल्याणकारी योजनाओं के लिए पात्र नहीं हैं। कृपया अपना व्यवसाय बदलें या लिंग महिला चुनें।",
    "autoFixOccupation": "व्यवसाय को 'स्वरोजगार' में बदलें",
    "womenOnly": "केवल महिलाओं के लिए - पुरुषों के लिए अपात्र",
    "genderMismatchBadge": "लिंग बेमेल",
    "invalidSelection": "अमान्य चयन"
  },
  "kn": {
    "genderOccupationMismatchTitle": "⚠️ ಲಿಂಗ ಮತ್ತು ವೃತ್ತಿ ಹೊಂದಾಣಿಕೆಯಾಗುತ್ತಿಲ್ಲ (ದೋಷ)",
    "genderOccupationMismatchMsg": "ನೀವು ಲಿಂಗವನ್ನು 'ಪುರುಷ' ಎಂದು ಆಯ್ಕೆ ಮಾಡಿದ್ದೀರಿ, ಆದರೆ ಮುಖ್ಯ ಉದ್ಯೋಗ 'ಮಹಿಳಾ ಉದ್ಯಮಿ' ಆಗಿದೆ. ಪುರುಷ ಅಭ್ಯರ್ಥಿಗಳು ಮಹಿಳೆಯರಿಗಾಗಿ ಇರುವ ಕಲ್ಯಾಣ ಯೋಜನೆಗಳಿಗೆ ಅರ್ಹರಲ್ಲ. ದಯವಿಟ್ಟು ಉದ್ಯೋಗವನ್ನು ಬದಲಾಯಿಸಿ.",
    "autoFixOccupation": "ಉದ್ಯೋಗವನ್ನು 'ಸ್ವಯಂ ಉದ್ಯೋಗಿ'ಗೆ ಬದಲಾಯಿಸಿ",
    "womenOnly": "ಮಹಿಳೆಯರಿಗೆ ಮಾತ್ರ - ಪುರುಷರಿಗೆ ಅನ್ವಯಿಸುವುದಿಲ್ಲ",
    "genderMismatchBadge": "ಲಿಂಗ ಹೊಂದಿಕೆಯಾಗುತ್ತಿಲ್ಲ",
    "invalidSelection": "ಅಮಾನ್ಯ ಆಯ್ಕೆ"
  },
  "ta": {
    "genderOccupationMismatchTitle": "⚠️ பாலினம் மற்றும் தொழில் பொருந்தவில்லை (பிழை)",
    "genderOccupationMismatchMsg": "நீங்கள் பாலினத்தை 'ஆண்' என தேர்ந்தெடுத்துள்ளீர்கள், ஆனால் தொழில் 'பெண் தொழில்முனைவோர்' என உள்ளது. ஆண் விண்ணப்பதாரர்கள் மகளிர் நலத்திட்டங்களுக்கு தகுதியற்றவர்கள். தயவுசெய்து தொழிலை மாற்றவும்.",
    "autoFixOccupation": "தொழிலை 'சுயதொழில்' என மாற்றவும்",
    "womenOnly": "பெண்களுக்கு மட்டும் - ஆண்களுக்குப் பொருந்தாது",
    "genderMismatchBadge": "பாலின முரண்பாடு",
    "invalidSelection": "தவறான தேர்வு"
  },
  "mr": {
    "genderOccupationMismatchTitle": "⚠️ लिंग आणि व्यवसाय विसंगती (त्रुटी)",
    "genderOccupationMismatchMsg": "तुम्ही लिंग 'पुरुष' निवडले आहे, पण मुख्य व्यवसाय 'महिला उद्योजक' आहे. पुरुष अर्जदार महिला-विशिष्ट योजनांसाठी पात्र नाहीत. कृपया व्यवसाय बदला किंवा लिंग महिला निवडा.",
    "autoFixOccupation": "व्यवसाय 'स्वयंरोजगार' मध्ये बदला",
    "womenOnly": "केवळ महिलांसाठी - पुरुषांसाठी अपात्र",
    "genderMismatchBadge": "लिंग विसंगती",
    "invalidSelection": "अवैध निवड"
  },
  "gu": {
    "genderOccupationMismatchTitle": "⚠️ જાતિ અને વ્યવસાયમાં વિસંગતતા (ભૂલ)",
    "genderOccupationMismatchMsg": "તમે જાતિ 'પુરુષ' પસંદ કરી છે, પરંતુ મુખ્ય વ્યવસાય 'મહિલા ઉદ્યોગસાહસિક' છે. પુરુષ અરજદારો મહિલા-વિશિષ્ટ યોજનાઓ માટે પાત્ર નથી. કૃપા કરીને વ્યવસાય બદલો.",
    "autoFixOccupation": "વ્યવસાય 'સ્વરોજગાર' માં બદલો",
    "womenOnly": "માત્ર મહિલાઓ માટે - પુરુષો માટે અપાત્ર",
    "genderMismatchBadge": "જાતિ મેળ ખાતી નથી",
    "invalidSelection": "અમાન્ય પસંદગી"
  },
  "bn": {
    "genderOccupationMismatchTitle": "⚠️ লিঙ্গ এবং পেশায় অসঙ্গতি (ত্রুটি)",
    "genderOccupationMismatchMsg": "আপনি লিঙ্গ 'পুরুষ' নির্বাচন করেছেন, কিন্তু মূল পেশা 'নারী উদ্যোক্তা' রয়েছে। পুরুষ আবেদনকারীরা মহিলা-নির্দিষ্ট কল্যাণমূলক প্রকল্পের জন্য যোগ্য নন। অনুগ্রহ করে পেশা পরিবর্তন করুন।",
    "autoFixOccupation": "পেশা 'স্বনির্ভর'-এ পরিবর্তন করুন",
    "womenOnly": "শুধুমাত্র মহিলাদের জন্য - পুরুষদের জন্য প্রযোজ্য নয়",
    "genderMismatchBadge": "লিঙ্গ অমিল",
    "invalidSelection": "অবৈধ নির্বাচন"
  },
  "pa": {
    "genderOccupationMismatchTitle": "⚠️ ਲਿੰਗ ਅਤੇ ਕਿੱਤੇ ਵਿੱਚ ਅਸੰਗਤਤਾ (ਗਲਤੀ)",
    "genderOccupationMismatchMsg": "ਤੁਸੀਂ ਲਿੰਗ 'ਪੁਰਸ਼' ਚੁਣਿਆ ਹੈ, ਪਰ ਮੁੱਖ ਕਿੱਤਾ 'ਮਹਿਲਾ ਉੱਦਮੀ' ਹੈ। ਪੁਰਸ਼ ਬਿਨੈਕਾਰ ਮਹਿਲਾ ਸਕੀਮਾਂ ਲਈ ਯੋਗ ਨਹੀਂ ਹਨ। ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਕਿੱਤਾ ਬਦਲੋ।",
    "autoFixOccupation": "ਕਿੱਤੇ ਨੂੰ 'ਸਵੈ-ਰੁਜ਼ਗਾਰ' ਵਿੱਚ ਬਦਲੋ",
    "womenOnly": "ਸਿਰਫ਼ ਔਰਤਾਂ ਲਈ - ਪੁਰਸ਼ਾਂ ਲਈ ਅਯੋਗ",
    "genderMismatchBadge": "ਲਿੰਗ ਬੇਮੇਲ",
    "invalidSelection": "ਅਵੈਧ ਚੋਣ"
  },
  "ml": {
    "genderOccupationMismatchTitle": "⚠️ ലിംഗഭേദവും തൊഴിലും തമ്മിലുള്ള പൊരുത്തക്കേട് (പിശക്)",
    "genderOccupationMismatchMsg": "നിങ്ങൾ ലിംഗഭേദം 'പുരുഷൻ' എന്ന് തിരഞ്ഞെടുത്തു, എന്നാൽ പ്രധാന തൊഴിൽ 'വനിതാ സംരംഭക' എന്നാണ്. പുരുഷ അപേക്ഷകർക്ക് വനിതാ ക്ഷേമ പദ്ധതികൾക്ക് അർഹതയില്ല. ദയവായി തൊഴിൽ മാറ്റുക.",
    "autoFixOccupation": "തൊഴിൽ 'സ്വയംതൊഴിൽ' ആക്കി മാറ്റുക",
    "womenOnly": "സ്ത്രീകൾക്ക് മാത്രം - പുരുഷന്മാർക്ക് അർഹതയില്ല",
    "genderMismatchBadge": "ലിംഗ പൊരുത്തക്കേട്",
    "invalidSelection": "അസാധുവായ തിരഞ്ഞെടുപ്പ്"
  }
}

for lang, kvs in ui_additions.items():
    lang_pattern = f'"{lang}": {{\n'
    if lang_pattern in content:
        lines = []
        for k, v in kvs.items():
            if f'"{k}":' not in content:
                lines.append(f'    "{k}": {json.dumps(v, ensure_ascii=False)},')
        if lines:
            replacement = lang_pattern + "\n".join(lines) + "\n"
            content = content.replace(lang_pattern, replacement, 1)

with open('frontend/src/services/bhashiniService.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated bhashiniService.js successfully!")
