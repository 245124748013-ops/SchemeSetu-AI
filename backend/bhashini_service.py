"""
Bhashini Multilingual & Voice Service
Translates text and provides voice transcription for Indian regional languages:
Hindi, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, Punjabi, Malayalam, English
"""

SUPPORTED_LANGUAGES = {
    "en": {"name": "English", "native": "English", "code": "en-IN"},
    "hi": {"name": "Hindi", "native": "हिन्दी", "code": "hi-IN"},
    "ta": {"name": "Tamil", "native": "தமிழ்", "code": "ta-IN"},
    "te": {"name": "Telugu", "native": "తెలుగు", "code": "te-IN"},
    "bn": {"name": "Bengali", "native": "বাংলা", "code": "bn-IN"},
    "mr": {"name": "Marathi", "native": "मराठी", "code": "mr-IN"},
    "gu": {"name": "Gujarati", "native": "ગુજરાતી", "code": "gu-IN"},
    "kn": {"name": "Kannada", "native": "ಕನ್ನಡ", "code": "kn-IN"},
    "pa": {"name": "Punjabi", "native": "ਪੰਜਾਬੀ", "code": "pa-IN"},
    "ml": {"name": "Malayalam", "native": "മലയാളം", "code": "ml-IN"}
}

PHRASE_TRANSLATIONS = {
    "hi": {
        "eligible": "आप इस योजना के लिए पूर्ण रूप से पात्र हैं।",
        "subsidy": "सरकारी अनुदान और वित्तीय सहायता उपलब्ध है।",
        "docs_needed": "आवश्यक दस्तावेज़",
        "apply_now": "आधिकारिक पोर्टल पर आवेदन करें",
        "match_confidence": "मैच स्कोर"
    },
    "ta": {
        "eligible": "நீங்கள் இந்த திட்டத்திற்கு முழு தகுதி பெற்றுள்ளீர்கள்.",
        "subsidy": "அரசு மானியம் மற்றும் நிதி உதவி கிடைக்கும்.",
        "docs_needed": "தேவையான ஆவணங்கள்",
        "apply_now": "அதிகாரப்பூர்வ இணையதளத்தில் விண்ணப்பிக்கவும்",
        "match_confidence": "பொருத்த மதிப்பெண்"
    },
    "te": {
        "eligible": "మీరు ఈ పథకానికి పూర్తిగా అర్హులు.",
        "subsidy": "ప్రభుత్వ రాయితీ మరియు ఆర్థిక సహాయం అందుబాటులో ఉంది.",
        "docs_needed": "అవసరమైన పత్రాలు",
        "apply_now": "అధికారిక పోర్టల్‌లో దరఖాస్తు చేసుకోండి",
        "match_confidence": "మ్యాచ్ స్కోరు"
    },
    "bn": {
        "eligible": "আপনি এই প্রকল্পের জন্য সম্পূর্ণ যোগ্য।",
        "subsidy": "সরকারি ভর্তুকি ও আর্থিক সহায়তা প্রযোজ্য।",
        "docs_needed": "প্রয়োজনীয় নথিপত্র",
        "apply_now": "অফিসিয়াল পোর্টালে আবেদন করুন",
        "match_confidence": "ম্যাচ স্কোর"
    },
    "mr": {
        "eligible": "तुम्ही या योजनेसाठी पूर्णपणे पात्र आहात.",
        "subsidy": "सरकारी अनुदान आणि आर्थिक सहाय्य उपलब्ध आहे.",
        "docs_needed": "आवश्यक कागदपत्रे",
        "apply_now": "अधिकृत पोर्टलवर अर्ज करा",
        "match_confidence": "मॅच स्कोअर"
    }
}

class BhashiniService:
    def get_supported_languages(self):
        return SUPPORTED_LANGUAGES

    def translate_phrase(self, phrase_key, target_lang="hi"):
        if target_lang in PHRASE_TRANSLATIONS and phrase_key in PHRASE_TRANSLATIONS[target_lang]:
            return PHRASE_TRANSLATIONS[target_lang][phrase_key]
        return phrase_key

    def parse_voice_transcript(self, text, lang="hi"):
        """Extract profile attributes from spoken voice text"""
        profile = {}
        t = text.lower()
        
        # Age extraction
        import re
        age_match = re.search(r'(\d{2})\s*(?:years|saal|sal|varsh|age)', t)
        if age_match:
            profile["age"] = int(age_match.group(1))

        # Income extraction
        inc_match = re.search(r'(\d+(?:\.\d+)?)\s*(?:lakh|lac|hazaar|thousand|k)', t)
        if inc_match:
            val = float(inc_match.group(1))
            if "lakh" in t or "lac" in t:
                profile["income"] = int(val * 100000)
            elif "hazaar" in t or "thousand" in t or "k" in t:
                profile["income"] = int(val * 1000)

        # Occupation keywords
        if any(w in t for w in ["farmer", "kisan", "kisan hoon", "kheti", "vyavasayam"]):
            profile["occupation"] = "Farmer"
            profile["has_land"] = True
        elif any(w in t for w in ["artisan", "carpenter", "weaver", "barber", "tailor", "karigar"]):
            profile["occupation"] = "Artisan"
        elif any(w in t for w in ["vendor", "thela", "hawker", "shopkeeper", "dukan"]):
            profile["occupation"] = "Street Vendor"
        elif any(w in t for w in ["business", "msme", "factory", "udyam", "startup", "dukan"]):
            profile["occupation"] = "MSME Owner"
        elif any(w in t for w in ["student", "college", "padhai", "degree"]):
            profile["occupation"] = "Student"

        # Gender
        if any(w in t for w in ["mahila", "woman", "female", "aurat", "girl", "ladki"]):
            profile["gender"] = "Female"
        elif any(w in t for w in ["purush", "man", "male", "aadmi", "boy", "ladka"]):
            profile["gender"] = "Male"

        # Category
        if "sc" in t or "dalit" in t:
            profile["category"] = "SC"
        elif "st" in t or "adivasi" in t:
            profile["category"] = "ST"
        elif "obc" in t:
            profile["category"] = "OBC"
        elif "ews" in t:
            profile["category"] = "EWS"

        return profile
