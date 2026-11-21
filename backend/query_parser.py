"""
Natural Language Query Parser & Intent Extraction Engine
Extracts citizen demographic profile (gender, caste, occupation, state, financial intent)
and filters out universal stop words to prevent naive keyword flooding.
"""
import re
from typing import Dict, Any, List, Set, Tuple

STOPWORDS: Set[str] = {
    "scheme", "schemes", "yojana", "yojanayein", "for", "in", "of", "and", "a", "an",
    "the", "to", "is", "with", "owned", "by", "all", "government", "govt", "seeking",
    "looking", "need", "give", "me", "want", "under", "apply", "eligible", "eligibility",
    "please", "find", "show", "search", "list", "get", "avail", "benefit", "benefits",
    "assistance", "support", "india", "indian", "portal", "official", "citizen"
}

STATE_ALIASES: Dict[str, List[str]] = {
    "Telangana": ["telangana", "hyderabad", "tg", "ts"],
    "Andhra Pradesh": ["andhra pradesh", "andhra", "amaravati", "visakhapatnam", "ap"],
    "Karnataka": ["karnataka", "bengaluru", "bangalore", "mysuru", "mysore"],
    "Maharashtra": ["maharashtra", "mumbai", "pune", "nagpur"],
    "Tamil Nadu": ["tamil nadu", "tamilnadu", "chennai", "coimbatore", "tn"],
    "Kerala": ["kerala", "thiruvananthapuram", "kochi", "cochin", "calicut"],
    "Uttar Pradesh": ["uttar pradesh", "lucknow", "kanpur", "varanasi", "up"],
    "Bihar": ["bihar", "patna", "gaya"],
    "Madhya Pradesh": ["madhya pradesh", "bhopal", "indore", "mp"],
    "Rajasthan": ["rajasthan", "jaipur", "jodhpur", "udaipur"],
    "Gujarat": ["gujarat", "ahmedabad", "gandhinagar", "surat"],
    "Haryana": ["haryana", "chandigarh", "gurugram", "gurgaon", "faridabad"],
    "Punjab": ["punjab", "amritsar", "ludhiana"],
    "Delhi": ["delhi", "new delhi", "ncr"],
    "Odisha": ["odisha", "orissa", "bhubaneswar"],
    "West Bengal": ["west bengal", "kolkata", "calcutta", "bengal"],
    "Assam": ["assam", "guwahati"],
    "Jharkhand": ["jharkhand", "ranchi"],
    "Chhattisgarh": ["chhattisgarh", "raipur"],
    "Himachal Pradesh": ["himachal pradesh", "shimla"],
    "Uttarakhand": ["uttarakhand", "dehradun"],
    "Goa": ["goa", "panaji"],
    "Jammu and Kashmir": ["jammu and kashmir", "jammu", "srinagar", "j&k"]
}

class QueryParser:
    @staticmethod
    def parse_query(query: str, base_profile: Dict[str, Any] = None) -> Tuple[Dict[str, Any], List[str], Dict[str, Any]]:
        """
        Parses natural language query string into:
        1. structured_profile (for RuleEngine & AgentOrchestrator)
        2. clean_keywords (non-stopword search tokens)
        3. intent_metadata (intents such as loan, grant, business, scholarship, shelter)
        """
        q_raw = query.strip()
        q_lower = q_raw.lower()
        
        profile = {
            "name": "Citizen",
            "age": 32,
            "income": 180000,
            "category": "General",
            "gender": "All",
            "occupation": "All",
            "state": "National / All India",
            "has_land": False
        }
        
        if base_profile:
            profile.update({k: v for k, v in base_profile.items() if v is not None})
            
        intent = {
            "is_loan_or_credit": False,
            "is_grant_or_subsidy": False,
            "is_scholarship": False,
            "is_housing_or_shelter": False,
            "is_pension": False,
            "is_micro_business": False,
            "is_women_centric": False,
            "is_sc_st_centric": False
        }
        
        # 1. State extraction
        detected_state = None
        for state_name, aliases in STATE_ALIASES.items():
            for alias in aliases:
                pattern = r'\b' + re.escape(alias) + r'\b'
                if re.search(pattern, q_lower):
                    detected_state = state_name
                    break
            if detected_state:
                break
        if detected_state:
            profile["state"] = detected_state
            
        # 2. Gender extraction
        if re.search(r'\b(woman|women|female|girl|mahila|nari|lady|ladies)\b', q_lower):
            profile["gender"] = "Female"
            intent["is_women_centric"] = True
        elif re.search(r'\b(man|men|male|purush)\b', q_lower) and not re.search(r'\b(woman|women)\b', q_lower):
            profile["gender"] = "Male"
            
        # 3. Social Category / Caste extraction
        if re.search(r'\b(sc\s*[\/\&]?\s*st|sc\s+and\s+st|scheduled\s+caste\s+and\s+scheduled\s+tribe|dalit|adivasi|tribal)\b', q_lower):
            profile["category"] = "SC"
            intent["is_sc_st_centric"] = True
        elif re.search(r'\b(sc|scheduled\s+caste|dalit)\b', q_lower):
            profile["category"] = "SC"
            intent["is_sc_st_centric"] = True
        elif re.search(r'\b(st|scheduled\s+tribe|adivasi|tribal)\b', q_lower):
            profile["category"] = "ST"
            intent["is_sc_st_centric"] = True
        elif re.search(r'\b(obc|other\s+backward\s+class|bc)\b', q_lower):
            profile["category"] = "OBC"
        elif re.search(r'\b(ews|economically\s+weaker)\b', q_lower):
            profile["category"] = "EWS"
        elif re.search(r'\b(minority|muslim|sikh|christian|jain|buddhist|parsi)\b', q_lower):
            profile["category"] = "Minority"

        # 4. Intent detection
        if re.search(r'\b(loan|credit|borrow|debt|mudra|bank\s*loan|working\s*capital|term\s*loan)\b', q_lower):
            intent["is_loan_or_credit"] = True
        if re.search(r'\b(grant|subsidy|seed\s*capital|margin\s*money|dbt|financial\s*assistance|cash|incentive)\b', q_lower):
            intent["is_grant_or_subsidy"] = True
        if re.search(r'\b(scholarship|tuition|fellowship|stipend|coaching|school|college|education|matric)\b', q_lower):
            intent["is_scholarship"] = True
        if re.search(r'\b(shelter|hostel|swadhar|stay|accommodation|housing|awas|home)\b', q_lower):
            intent["is_housing_or_shelter"] = True
        if re.search(r'\b(pension|old\s*age|vridha|senior|elderly)\b', q_lower):
            intent["is_pension"] = True
        if re.search(r'\b(micro\s*business|small\s*business|business|msme|enterprise|entrepreneur|startup|shop|store|trade|trading|manufacturing|vendor)\b', q_lower):
            intent["is_micro_business"] = True

        # 5. Occupation mapping
        if intent["is_micro_business"]:
            if profile["gender"] == "Female":
                profile["occupation"] = "Women Entrepreneur"
            else:
                profile["occupation"] = "MSME Owner"
        elif re.search(r'\b(farmer|krishi|kisan|agriculture|crop|cultivator|dairy|horticulture)\b', q_lower):
            profile["occupation"] = "Farmer"
            profile["has_land"] = True
        elif re.search(r'\b(artisan|weaver|handloom|handicraft|craftsperson|potter|carpenter|blacksmith|vishwakarma)\b', q_lower):
            profile["occupation"] = "Artisan"
        elif re.search(r'\b(vendor|street\s*vendor|hawker|thelawala|rehridari|cart)\b', q_lower):
            profile["occupation"] = "Street Vendor"
        elif re.search(r'\b(student|vidyarthi|youth|intern)\b', q_lower):
            profile["occupation"] = "Student"
            profile["age"] = 21
        elif re.search(r'\b(daily\s*wage|labour|construction\s*worker|shramik|mazdoor)\b', q_lower):
            profile["occupation"] = "Daily Wage Worker"
        elif re.search(r'\b(homemaker|housewife|grihini)\b', q_lower):
            profile["occupation"] = "Homemaker"
            profile["gender"] = "Female"
        elif re.search(r'\b(senior\s*citizen|elderly|pensioner|old\s*age)\b', q_lower):
            profile["occupation"] = "Senior Citizen"
            profile["age"] = 65
        elif re.search(r'\b(unemployed|job\s*seeker|berozgar)\b', q_lower):
            profile["occupation"] = "Unemployed"

        # 6. Extract meaningful keywords (filter out filler words)
        words = re.findall(r'[a-zA-Z0-9]+', q_lower)
        clean_tokens = [w for w in words if w not in STOPWORDS and len(w) > 1]

        return profile, clean_tokens, intent
