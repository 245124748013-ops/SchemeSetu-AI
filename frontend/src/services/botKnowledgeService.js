// Comprehensive Government Welfare Scheme AI Knowledge & Q&A Engine
// Integrates 16 Central Flagship Schemes, Landmark State Schemes, and Live Search across all 5,093+ schemes
import { FLAGSHIP_SCHEMES_DATA } from './flagshipData.js';
import { bhashini } from './bhashiniService.js';
import { API_BASE } from '../config.js';

// Deep structured scheme directory for specific QA (Documents, Eligibility, Benefit, Application)
export const SCHEME_KNOWLEDGE_BASE = {
  "pmegp": {
    flagshipId: "pmegp-flagship",
    keywords: ["pmegp", "employment generation", "margin money", "kvic", "उद्योग", "ఉపాధి", "ಉದ್ಯೋಗ"],
    category: "MSME, Industry & Self-Employment",
    portalUrl: "https://www.kviconline.gov.in/pmegpeportal/",
    maxSubsidy: "Up to ₹17.5 Lakhs (35% Margin Money Subsidy)",
    projectCeiling: "₹50 Lakhs for Manufacturing, ₹20 Lakhs for Services",
    documents: [
      "Aadhaar Card & PAN Card",
      "Passport Size Photographs",
      "Educational Qualification Certificate (Min 8th pass for projects >₹10L/₹5L)",
      "Detailed Project Report (DPR / Business Plan)",
      "Caste / Category Certificate (for SC/ST/OBC/Women +10% subsidy)",
      "Rural Area Certificate from Gram Panchayat (for 35% rural subsidy)",
      "Bank Account Passbook / Cancelled Cheque",
      "EDP (Entrepreneurship Development Training) Certificate"
    ],
    eligibility: {
      age: "18+ years (no upper age limit)",
      education: "At least 8th pass for manufacturing > ₹10 Lakhs or service > ₹5 Lakhs",
      category: "General gets 15% (Urban) / 25% (Rural); Women/SC/ST/OBC/Minority gets 25% (Urban) / 35% (Rural)",
      contribution: "Own contribution only 5% for special categories, 10% for General"
    }
  },

  "standup-india": {
    flagshipId: "standup-india-flagship",
    keywords: ["standup", "stand-up", "stand up", "sc st loan", "women loan", "స్టాండప్", "ಸ್ಟ್ಯಾಂಡಪ್", "स्टैंड-अप"],
    category: "Banking, Financial Services & Insurance",
    portalUrl: "https://www.standupmitra.in/",
    maxSubsidy: "₹10 Lakhs to ₹1 Crore Bank Loan",
    documents: [
      "Aadhaar Card, PAN Card & Voter ID",
      "Caste Certificate (for SC/ST applicants)",
      "Proof of Business Address and Rent / Lease Agreement",
      "Detailed Project Report (DPR) for Greenfield enterprise",
      "Last 6 months Bank Statement",
      "Balance Sheet / Net Worth details of promoter & guarantor",
      "Pollution Control Board Clearance (if applicable)"
    ],
    eligibility: {
      age: "18+ years",
      target: "SC/ST and Women Entrepreneurs only",
      enterprise: "Greenfield projects only (first-time venture in manufacturing, services, agri-allied or trading)",
      shareholding: "In non-individual enterprises, 51% shareholding & controlling stake must be held by SC/ST or Woman"
    }
  },

  "mudra": {
    flagshipId: "pm-mudra-flagship",
    keywords: ["mudra", "pmmy", "shishu", "kishore", "tarun", "મુદ્રા", "ముద్ర", "ಮುದ್ರಾ", "मुद्रा"],
    category: "Banking, Financial Services & Insurance",
    portalUrl: "https://www.udyamimitra.in/",
    maxSubsidy: "Up to ₹20 Lakhs Collateral-Free Loan with Mudra RuPay Card",
    documents: [
      "Aadhaar Card, PAN Card & Proof of Identity",
      "Proof of Residence (Electricity bill, Ration card)",
      "Business Identity & Registration (Udyam Registration)",
      "Last 12 months Bank Account Statement",
      "Quotation / Invoices of machinery, equipment or stock to be purchased",
      "Past 2 years ITR / Balance Sheet (for Tarun > ₹5 Lakhs)"
    ],
    eligibility: {
      categories: "Shishu (up to ₹50,000), Kishore (₹50,000 to ₹5 Lakhs), Tarun (₹5 Lakhs to ₹10 Lakhs), Tarun Plus (₹10 Lakhs to ₹20 Lakhs)",
      collateral: "Zero collateral / security required",
      target: "Non-corporate, non-farm small/micro enterprises"
    }
  },

  "pm-kisan": {
    flagshipId: "pm-kisan-flagship",
    keywords: ["pm kisan", "pm-kisan", "pmkisan", "kisan samman", "రైతు నిధి", "ಕಿಸಾನ್", "किसान सम्मान"],
    category: "Agriculture & Rural Development",
    portalUrl: "https://pmkisan.gov.in/",
    maxSubsidy: "₹6,000 per year (3 installments of ₹2,000 via DBT)",
    documents: [
      "Aadhaar Card (Aadhaar must be linked to active bank account)",
      "Land Ownership Documents (Pahani, RoR, 7/12 extract or Patta)",
      "Bank Account Passbook with IFSC code",
      "Mobile number registered with Aadhaar (for e-KYC verification)"
    ],
    eligibility: {
      target: "All landholding farmer families with cultivable land parcel in their name",
      exclusions: "Institutional landholders, income tax payees, retired pensioners receiving ₹10,000+/mo, ministers and constitutional post holders"
    }
  },

  "pm-surya-ghar": {
    flagshipId: "pm-surya-ghar-flagship",
    keywords: ["surya ghar", "muft bijli", "rooftop solar", "solar subsidy", "సూర్య ఘర్", "ಸೂರ್ಯ ಘರ್", "सूर्य घर"],
    category: "Power, Energy & Renewable Resources",
    portalUrl: "https://pmsuryaghar.gov.in/",
    maxSubsidy: "Up to ₹78,000 Capital Subsidy + 300 Units Free Electricity/mo",
    documents: [
      "Electricity Bill (showing CA / Consumer Account number in applicant's name)",
      "Aadhaar Card & Mobile number linked to bank account",
      "Proof of Roof Ownership / Residential premise documents",
      "Cancelled Bank Cheque / Passbook copy for direct subsidy credit"
    ],
    eligibility: {
      subsidy_slabs: "₹30,000 for 1 kW; ₹60,000 for 2 kW; ₹78,000 for 3 kW or above",
      premises: "Residential houses with suitable shadow-free rooftop space and valid DISCOM electricity connection"
    }
  },

  "sukanya-samriddhi": {
    flagshipId: "sukanya-samriddhi-flagship",
    keywords: ["sukanya", "ssy", "girl child", "samriddhi", "సుకన్య", "ಸುಕನ್ಯಾ", "सुकन्या समृद्धि"],
    category: "Banking, Financial Services & Insurance",
    portalUrl: "https://www.indiapost.gov.in/",
    maxSubsidy: "8.2% Compound Interest p.a. + Triple Tax Exemption (EEE)",
    documents: [
      "Girl Child's Birth Certificate (mandatory from Registrar of Births)",
      "Parent's or Legal Guardian's Aadhaar Card & PAN Card",
      "Proof of Residence (Passport, Driving License, Utility Bill)",
      "Initial opening deposit (minimum ₹250)"
    ],
    eligibility: {
      age: "Can be opened for a girl child from birth up to 10 years of age",
      accounts: "Maximum 2 accounts per family (one for each girl child, exception for twins/triplets)",
      tenure: "Matures 21 years from account opening or on marriage after age 18"
    }
  },

  "ayushman-bharat": {
    flagshipId: "ayushman-bharat-flagship",
    keywords: ["ayushman", "pmjay", "health insurance", "golden card", "ఆయుష్మాన్", "ಆಯುಷ್ಮಾನ್", "आयुष्मान भारत"],
    category: "Health & Family Welfare",
    portalUrl: "https://beneficiary.nha.gov.in/",
    maxSubsidy: "₹5,00,000 cashless hospital treatment cover per family per year",
    documents: [
      "Aadhaar Card of all family members",
      "Ration Card (NFSA / BPL / Antyodaya)",
      "Mobile number linked to Aadhaar for OTP verification",
      "PMJAY Eligibility letter or SECC family verification slip"
    ],
    eligibility: {
      target: "Poor and vulnerable rural & urban families identified via SECC / NFSA database + all Senior Citizens aged 70+ (new Vayo Vandana expansion)",
      cashless: "100% cashless treatment across 29,000+ empaneled hospitals across India"
    }
  },

  "pm-vishwakarma": {
    flagshipId: "pm-vishwakarma-flagship",
    keywords: ["vishwakarma", "artisan", "toolkit", "craftsperson", "విశ్వకర్మ", "ವಿಶ್ವಕರ್ಮ", "विश्वकर्मा"],
    category: "MSME, Industry & Self-Employment",
    portalUrl: "https://pmvishwakarma.gov.in/",
    maxSubsidy: "₹15,000 Free Toolkit Voucher + ₹3 Lakhs Loan at 5% + ₹500/day Stipend",
    documents: [
      "Aadhaar Card & Active Mobile Number",
      "Bank Account Passbook / Details",
      "Ration Card / Proof of artisan trade engagement",
      "Self-declaration / Gram Panchayat verification of trade practice"
    ],
    eligibility: {
      trades: "18 traditional trades including Carpenter, Blacksmith, Goldsmith, Potter, Sculptor, Cobbler, Mason, Weaver, Barber, Washerman, Tailor, Fishing Net Maker",
      age: "Minimum 18 years, only one member per family"
    }
  },

  "pm-svanidhi": {
    flagshipId: "pm-svanidhi-flagship",
    keywords: ["svanidhi", "street vendor", "hawker", "thelawala", "స్వనిధి", "ಸ್ವನಿಧಿ", "स्वनिधि"],
    category: "MSME, Industry & Self-Employment",
    portalUrl: "https://pmsvanidhi.mohua.gov.in/",
    maxSubsidy: "₹10,000 to ₹50,000 Collateral-Free Loan + 7% Interest Subsidy + ₹1200 UPI Cashback",
    documents: [
      "Aadhaar Card & Voter ID",
      "Vending Certificate / Identity Card issued by Urban Local Body (ULB)",
      "Letter of Recommendation (LoR) from Town Vending Committee (TVC)",
      "Bank Account linked with Aadhaar & UPI details"
    ],
    eligibility: {
      tranches: "1st Tranche: ₹10,000; 2nd Tranche: ₹20,000; 3rd Tranche: ₹50,000",
      incentive: "7% interest subsidy credited directly via DBT on timely repayments, plus ₹100/month UPI digital transaction cashback"
    }
  },

  "atal-pension": {
    flagshipId: "atal-pension-flagship",
    keywords: ["atal pension", "apy", "pension", "అటల్ పెన్షన్", "ಅಟಲ್ ಪಿಂಚಣಿ", "अटल पेंशन"],
    category: "Social Welfare & Safety Nets",
    portalUrl: "https://enps.nsdl.com/",
    maxSubsidy: "₹1,000 to ₹5,000 Guaranteed Monthly Pension for Life",
    documents: [
      "Aadhaar Card",
      "Savings Bank Account / Post Office Account",
      "Mobile number registered with bank",
      "Nominee details and spouse Aadhaar"
    ],
    eligibility: {
      age: "Entry age 18 to 40 years",
      pension_start: "Guaranteed lifelong pension starts at age 60",
      tax: "Must not be an Income Tax payer (post Oct 2022 rule)"
    }
  },

  "pm-awas": {
    flagshipId: "pmay-gramin-flagship",
    keywords: ["pm awas", "pmay", "housing", "pucca house", "ఆవాస్", "ಆವಾಸ್", "प्रधानमंत्री आवास"],
    category: "Housing & Shelter",
    portalUrl: "https://pmayg.nic.in/",
    maxSubsidy: "₹1,20,000 to ₹1,30,000 Direct Housing Grant + MGNREGA wages + ₹12,000 Toilet Grant",
    documents: [
      "Aadhaar Card of all family members",
      "Job Card (MGNREGA)",
      "Bank Account linked to Aadhaar (DBT enabled)",
      "Land ownership document / Homestead site patta",
      "Photograph of existing kutcha house / proposed construction site"
    ],
    eligibility: {
      target: "Homeless families or families living in kutcha/dilapidated houses in rural or urban areas verified via SECC/Awaas+ database",
      preference: "SC/ST, Minorities, Women-headed households, Persons with Disabilities"
    }
  },

  "pm-ujjwala": {
    flagshipId: "pm-ujjwala-flagship",
    keywords: ["ujjwala", "pmuy", "lpg gas", "cylinder subsidy", "ఉజ్జ్వల", "ಉಜ್ವಲ", "उज्ज्वला"],
    category: "Social Welfare & Safety Nets",
    portalUrl: "https://www.pmuy.gov.in/",
    maxSubsidy: "100% Free LPG Gas Connection + Free Stove & First Refill + ₹300/Cylinder DBT",
    documents: [
      "Aadhaar Card of Adult Woman Applicant & all adult family members",
      "Ration Card showing family composition",
      "Bank Account details (Passbook / IFSC code)",
      "14-Point Declaration of no existing LPG connection in household"
    ],
    eligibility: {
      applicant: "Adult woman (18+) belonging to poor / BPL household",
      restriction: "No member of the household must have an active LPG connection"
    }
  },

  "pm-jan-dhan": {
    flagshipId: "pm-jan-dhan-flagship",
    keywords: ["jan dhan", "pmjdy", "zero balance", "rupay card", "జన్ ధన్", "ಜನ ಧನ", "जन धन"],
    category: "Banking, Financial Services & Insurance",
    portalUrl: "https://pmjdy.gov.in/",
    maxSubsidy: "Zero Balance Account + ₹2,00,000 Free Accident Insurance + ₹10,000 Overdraft",
    documents: [
      "Aadhaar Card",
      "Passport size photograph",
      "If Aadhaar unavailable: Voter ID, Driving License, PAN or NREGA card"
    ],
    eligibility: {
      target: "Any Indian citizen aged 10+ with no existing bank account",
      zero_balance: "Zero minimum balance requirement, free RuPay debit card"
    }
  },

  "pm-internship": {
    flagshipId: "pm-internship-flagship",
    keywords: ["internship", "pmis", "pm internship", "stipend", "ఇంటర్న్‌షిప్", "ಇಂಟರ್ನ್‌ಶಿಪ್", "इंटर्नशिप"],
    category: "Education, Skills & Children",
    portalUrl: "https://pminternship.mca.gov.in/",
    maxSubsidy: "₹5,000 / month Stipend + ₹6,000 One-time Incidentals Grant",
    documents: [
      "Aadhaar Card & Educational Qualification Certificate (10th, 12th, ITI, Diploma or Degree)",
      "Bank Account details with Aadhaar seeding",
      "Resume / Profile on portal",
      "Self-declaration of family income < ₹8 Lakhs"
    ],
    eligibility: {
      age: "21 to 24 years",
      criteria: "Candidates not engaged in full-time employment or full-time higher education; family income under ₹8 Lakhs/yr"
    }
  },

  "pmkvy": {
    flagshipId: "pmkvy-flagship",
    keywords: ["pmkvy", "kaushal vikas", "skill india", "training", "కౌశల్ వికాస్", "ಕೌಶಲ್ಯ", "कौशल विकास"],
    category: "Education, Skills & Children",
    portalUrl: "https://www.skillindiadigital.gov.in/",
    maxSubsidy: "100% Free Industry Skill Training + NSQF Certification + Placement Support",
    documents: [
      "Aadhaar Card & Voter ID",
      "Bank Account details",
      "Education proof (School leaving or degree)",
      "Passport size photos"
    ],
    eligibility: {
      target: "Any Indian citizen aged 15-45 looking for skill development or industry certification"
    }
  },

  "pmfby": {
    flagshipId: "pmfby-flagship",
    keywords: ["fasal bima", "pmfby", "crop insurance", "drought", "flood", "ఫసల్ బీమా", "ಫಸಲ್ ಬಿಮಾ", "फसल बीमा"],
    category: "Agriculture & Rural Development",
    portalUrl: "https://pmfby.gov.in/",
    maxSubsidy: "Full Sum Insured Value of Crop Loss Claim via DBT",
    documents: [
      "Aadhaar Card",
      "Land Possession Certificate (LPC) / Land RoR / Tenancy Agreement",
      "Sowing Certificate / Crop Declaration issued by Village Officer / Patwari",
      "Bank Passbook / Loan account statement"
    ],
    eligibility: {
      premium: "Only 2% for Kharif crops, 1.5% for Rabi crops, 5% for Annual Commercial & Horticultural crops. Remaining paid by Central & State Govt."
    }
  }
};

// Specialized Farmer Schemes by State
export const STATE_FARMER_SCHEMES = {
  "telangana": [
    {
      name: "Telangana Rythu Bharosa / Rythu Bandhu",
      localName: { te: "తెలంగాణ రైతు భరోసా పథకం (ఎకరాకు ₹15,000)", kn: "ತೆಲಂಗಾಣ ರೈತ ಭರೋಸಾ ಯೋಜನೆ", hi: "तेलंगाना रैतु भरोसा योजना" },
      benefit: "₹15,000 / acre / year (₹7,500 per crop season) direct input financial grant for farmers",
      target: "All landowning farmers and registered tenant farmers in Telangana",
      documents: "Pattadar Passbook, Aadhaar, Linked Bank Account",
      portal: "https://telangana.gov.in/"
    },
    {
      name: "Telangana Rythu Bima (Farmer Life Insurance)",
      localName: { te: "తెలంగాణ రైతు బీమా పథకం (₹5 లక్షల ఉచిత బీమా)", kn: "ತೆಲಂಗಾಣ ರೈತ ಬಿಮಾ ಯೋಜನೆ", hi: "तेलंगाना रैतु बीमा योजना" },
      benefit: "₹5,00,000 (₹5 Lakhs) 100% Free Life Insurance Cover settled within 10 days to nominee",
      target: "All farmers aged 18 to 59 years holding Pattadar Passbooks in Telangana (100% premium paid by State Govt)",
      documents: "Pattadar Passbook, Aadhaar Card, Nominee Details",
      portal: "https://telangana.gov.in/"
    },
    {
      name: "Telangana 24x7 Free Agriculture Electricity",
      localName: { te: "తెలంగాణ 24 గంటల ఉచిత వ్యవసాయ విద్యుత్", kn: "ತೆಲಂಗಾಣ 24x7 ಉಚಿತ ಕೃಷಿ ವಿದ್ಯುತ್", hi: "तेलंगाना 24x7 मुफ्त कृषि बिजली" },
      benefit: "100% Free 24-hour Three-Phase Electricity for all agricultural pump-sets (Zero power bill)",
      target: "All farmers with agricultural electricity connections across Telangana",
      documents: "DISCOM Agriculture Connection Service Number",
      portal: "https://tssouthernpower.com/"
    },
    {
      name: "Telangana Crop Loan Waiver (Runa Mafi)",
      localName: { te: "తెలంగాణ రైతు రుణమాఫీ పథకం (రూ. 2 లక్షల వరకు)", kn: "ತೆಲಂಗಾಣ ಕೃಷಿ ಸಾಲ ಮನ್ನಾ ಯೋಜನೆ", hi: "तेलंगाना कृषि ऋण माफी योजना" },
      benefit: "Up to ₹2,00,000 (₹2 Lakhs) agriculture crop loan waiver per farmer family",
      target: "Farmers with short-term crop loans disbursed by commercial, RRB, and cooperative banks",
      documents: "Loan Account Passbook, Aadhaar, Ration Card",
      portal: "https://clw.telangana.gov.in/"
    }
  ],

  "karnataka": [
    {
      name: "Karnataka Ganga Kalyana Scheme",
      localName: { te: "కర్ణాటక గంగా కళ్యాణ పథకం (ఉచిత బోర్‌వెల్)", kn: "ಕರ್ನಾಟಕ ಗಂಗಾ ಕಲ್ಯಾಣ ಯೋಜನೆ (ಉಚಿತ ಕೊಳವೆಬಾವಿ)", hi: "कर्नाटक गंगा कल्याण योजना" },
      benefit: "100% Free Irrigation Borewell + Submersible Pump + Energization (Up to ₹4.5 Lakhs)",
      target: "Small & marginal farmers belonging to SC, ST, OBC and Minority communities with 1 to 5 acres",
      documents: "Caste Certificate, Land RTC / Pahani, Income Certificate < ₹2 Lakhs",
      portal: "https://cmegp.kar.nic.in/"
    },
    {
      name: "Karnataka Honey Bee Keeping & Apiary Development Mission",
      localName: { te: "కర్ణాటక తేనెటీగల పెంపకం అభివృద్ధి మిషన్", kn: "ಕರ್ನಾಟಕ ಜೇನುಸಾಕಣೆ ಅಭಿವೃದ್ಧಿ ಮಿಷನ್", hi: "कर्नाटक मधुमक्खी पालन मिशन" },
      benefit: "80% Subsidy on Bee Boxes & Extraction Units (Up to ₹40,000 grant)",
      target: "Smallholders, farmers and rural youth engaging in apiary / honey cultivation",
      documents: "RTC / Land record, Aadhaar, Bank Passbook, Training Certificate",
      portal: "https://horticulturedir.karnataka.gov.in/"
    },
    {
      name: "Karnataka Solar Water Pump & Feeder Solarization Grant",
      localName: { te: "కర్ణాటక సోలార్ వాటర్ పంప్ పథకం", kn: "ಕರ್ನಾಟಕ ಸೌರ ಕೃಷಿ ಪಂಪ್ ಯೋಜನೆ", hi: "कर्नाटक सौर जल पंप योजना" },
      benefit: "60% Capital Subsidy + 30% Bank Loan (Farmer contribution only 10%) for 3 HP to 7.5 HP pumps",
      target: "Farmers with off-grid or remote agricultural lands",
      documents: "Land RTC, Water source proof, Aadhaar",
      portal: "https://kredl.karnataka.gov.in/"
    }
  ],

  "andhra pradesh": [
    {
      name: "Andhra Pradesh Rythu Bharosa",
      localName: { te: "ఆంధ్రప్రదేశ్ రైతు భరోసా పథకం (రూ. 20,000/సం)", hi: "आंध्र प्रदेश रैतु भरोसा" },
      benefit: "₹20,000 / year direct financial assistance for farmers (including PM-KISAN component)",
      target: "All landowning farmers and eligible tenant farmers across Andhra Pradesh",
      documents: "Pattadar Passbook, Aadhaar, e-Crop booking confirmation",
      portal: "https://ysrrythubharosa.ap.gov.in/"
    },
    {
      name: "YSR Jala Kala (Free Agriculture Borewells)",
      localName: { te: "వైఎస్సార్ జలకళ (ఉచిత బోర్‌వెల్ పథకం)", hi: "वाईएसआर जल कला" },
      benefit: "100% Free Drilling of Agriculture Borewells + Free Motor Pump sets for needy farmers",
      target: "Small & marginal farmers without existing borewells holding 2.5+ acres contiguous land",
      documents: "Pattadar Passbook, Aadhaar, RoR-1B record",
      portal: "https://ysrjalakala.ap.gov.in/"
    }
  ],

  "maharashtra": [
    {
      name: "Namo Shetkari Mahasanman Nidhi",
      localName: { mr: "नमो शेतकरी महासन्मान निधी", hi: "नमो शेतकरी महासम्मान निधि" },
      benefit: "₹6,000 / year additional state DBT aid (combined with PM-KISAN = ₹12,000/year total)",
      target: "All landholding farmers in Maharashtra eligible under PM-KISAN",
      documents: "PM-KISAN registration ID, 7/12 extract, Aadhaar-linked bank account",
      portal: "https://mahadbt.maharashtra.gov.in/"
    },
    {
      name: "Magel Tyala Shettale (Subsidized Farm Ponds)",
      localName: { mr: "मागेल त्याला शेततळे योजना", hi: "मागेल त्याला शेततळे योजना" },
      benefit: "Up to ₹50,000 to ₹75,000 direct subsidy for constructing lined farm ponds",
      target: "Farmers holding min 0.60 hectares land in drought-prone or rainfed regions",
      documents: "7/12 extract, 8A certificate, Aadhaar",
      portal: "https://mahadbt.maharashtra.gov.in/"
    }
  ]
};

// General Landmark State Schemes (when state is queried WITHOUT specific target group)
export const GENERAL_STATE_SCHEMES = {
  "karnataka": [
    {
      name: "Karnataka Gruha Lakshmi Scheme",
      localName: { te: "కర్ణాటక గృహ లక్ష్మి పథకం", kn: "ಕರ್ನಾಟಕ ಗೃಹ ಲಕ್ಷ್ಮಿ ಯೋಜನೆ", hi: "कर्नाटक गृह लक्ष्मी योजना" },
      benefit: "₹2,000 / month Direct Bank Transfer (₹24,000 / year)",
      target: "Female head of the family as listed in BPL / AAY / APL ration card",
      portal: "https://sevasindhu.karnataka.gov.in/"
    },
    {
      name: "Karnataka Yuva Nidhi Scheme",
      localName: { te: "కర్ణాటక యువ నిధి పథకం", kn: "ಕರ್ನಾಟಕ ಯುವ ನಿಧಿ ಯೋಜನೆ", hi: "कर्नाटक युवा निधि योजना" },
      benefit: "₹3,000/month for unemployed Graduates & ₹1,500/month for Diploma holders",
      target: "Unemployed Degree/Diploma holders in Karnataka",
      portal: "https://sevasindhu.karnataka.gov.in/"
    },
    {
      name: "Karnataka Gruha Jyothi Scheme",
      localName: { te: "కర్ణాటక గృహ జ్యోతి పథకం", kn: "ಕರ್ನಾಟಕ ಗೃಹ ಜ್ಯೋತಿ ಯೋಜನೆ", hi: "कर्नाटक गृह ज्योति योजना" },
      benefit: "Zero Electricity Bill up to 200 Units / month",
      target: "Domestic electricity consumers in Karnataka",
      portal: "https://sevasindhu.karnataka.gov.in/"
    }
  ],
  "telangana": [
    {
      name: "Telangana Rythu Bharosa",
      localName: { te: "తెలంగాణ రైతు భరోసా పథకం", kn: "ತೆಲಂಗಾಣ ರೈತ ಭರೋಸಾ ಯೋಜನೆ", hi: "तेलंगाना रैतु भरोसा योजना" },
      benefit: "₹15,000 / acre / year input assistance for farmers",
      target: "Farmers in Telangana",
      portal: "https://telangana.gov.in/"
    },
    {
      name: "Telangana Dalit Bandhu Scheme",
      localName: { te: "తెలంగాణ దళిత బంధు పథకం", kn: "ತೆಲಂಗಾಣ ದಲಿತ ಬಂಧು ಯೋಜನೆ", hi: "तेलंगाना दलित बंधु योजना" },
      benefit: "₹10,00,000 (₹10 Lakhs) 100% Direct Financial Grant per SC family",
      target: "Scheduled Caste (SC) families in Telangana for self-employment",
      portal: "https://telangana.gov.in/"
    },
    {
      name: "Telangana Mahalakshmi Scheme",
      localName: { te: "తెలంగాణ మహాలక్ష్మి పథకం", kn: "ತೆಲಂಗಾಣ ಮಹಾಲಕ್ಷ್ಮಿ ಯೋಜನೆ", hi: "तेलंगाना महालक्ष्मी योजना" },
      benefit: "₹2,500/month financial aid to women + ₹500 gas cylinder + Free RTC bus",
      target: "Eligible women in Telangana",
      portal: "https://telangana.gov.in/"
    }
  ]
};

/**
 * Intelligent Query Engine: Processes citizen queries and returns rich, meaningful, accurate answers
 * Connected directly to the 5,093 Central & State Government Welfare Schemes Knowledge Engine.
 */
export async function processBotQuery(userQuery, profile, lang = 'en', lastSchemeId = null) {
  const q = (userQuery || '').trim().toLowerCase();
  if (!q) {
    return {
      text: lang === 'te' 
        ? "నమస్కారం! దయచేసి ఏదైనా పథకం పేరు, రాష్ట్రం లేదా మీ అవసరం (ఉదా: రైతుల పథకాలు, మహిళల రుణాలు, PMEGP, సూర్య ఘర్) గురించి అడగండి."
        : "Hello! Please ask about any scheme by name, state, or your requirement (e.g. loans, subsidies, farmer schemes, women schemes).",
      quickReplies: ["Top Central Schemes", "Karnataka Schemes", "PMEGP 35% Subsidy", "Schemes for Farmers"]
    };
  }

  // 1. Direct High-Precision Backend Query (Access to ALL 5,093 Schemes + Multi-turn context)
  try {
    const endpoint = `${API_BASE}/api/bot/chat`;
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: userQuery,
        language: lang,
        profile: profile || {},
        last_scheme_id: lastSchemeId
      })
    });

    if (res.ok) {
      const data = await res.json();
      if (data && data.text) {
        return {
          text: data.text,
          audioText: data.audioText || data.text,
          scheme: data.scheme || null,
          portalUrl: data.scheme?.portalUrl || null,
          schemeName: data.scheme?.name || null,
          intent: data.intent || 'info',
          quickReplies: data.quickReplies || []
        };
      }
    }
  } catch (err) {
    console.warn("Backend Bot QA Engine fallback to local knowledge:", err);
  }

  // 2. Local Fallback Processing (in case backend is offline)

  // Detect State from query or profile
  let detectedState = null;
  if (q.includes('telangana') || q.includes('తెలంగాణ') || q.includes('ತೆಲಂಗಾಣ')) detectedState = 'telangana';
  else if (q.includes('karnataka') || q.includes('కర్ణాటక') || q.includes('ಕರ್ನಾಟಕ')) detectedState = 'karnataka';
  else if (q.includes('andhra') || q.includes('ఆంధ్ర') || q.includes('ఆంధ్రప్రదేశ్') || q.includes('ಆಂಧ್ರ')) detectedState = 'andhra pradesh';
  else if (q.includes('maharashtra') || q.includes('మహారాష్ట్ర') || q.includes('महाराष्ट्र')) detectedState = 'maharashtra';
  else if (q.includes('uttar pradesh') || q.includes('up') || q.includes('उत्तर प्रदेश')) detectedState = 'uttar pradesh';
  else if (q.includes('tamil') || q.includes('தமிழ்') || q.includes('తమిళనాడు')) detectedState = 'tamil nadu';
  else if (profile?.state) {
    const sLow = profile.state.toLowerCase();
    if (sLow.includes('telangana')) detectedState = 'telangana';
    else if (sLow.includes('karnataka')) detectedState = 'karnataka';
    else if (sLow.includes('andhra')) detectedState = 'andhra pradesh';
    else if (sLow.includes('maharashtra')) detectedState = 'maharashtra';
  }

  // Linguistic Target Group Detection
  const isFarmerQuery = /farmer|krishi|kisan|agriculture/i.test(q) || 
                        q.includes('రైతు') || q.includes('ರೈತ') || q.includes('किसान') || 
                        q.includes('విసాయ') || q.includes('शेतकरी');

  const isWomenQuery = /women|woman|female|girl|ladies/i.test(q) || 
                       q.includes('మహిళ') || q.includes('స్త్రీ') || q.includes('మహిళలకు') || 
                       q.includes('ಮಹಿಳೆ') || q.includes('महिला') || q.includes('மகளிர்') || q.includes('नारी');

  const isStudentQuery = /student|scholarship|education|college|youth|intern/i.test(q) || 
                         q.includes('విద్యార్థి') || q.includes('విద్యా') || q.includes('యూత్') || 
                         q.includes('ವಿದ್ಯಾರ್ಥಿ') || q.includes('छात्र') || q.includes('மாணவர்');

  const isArtisanQuery = /artisan|weaver|craft|potter|blacksmith|vishwakarma/i.test(q) || 
                         q.includes('చేతివృత్తుల') || q.includes('నేత') || q.includes('విశ్వకర్మ') || 
                         q.includes('ಕುಶಲಕರ್ಮಿ') || q.includes('ನೇಕಾರ') || q.includes('कारीगर') || q.includes('बुनकर');

  // Intent Classifiers
  const isDocQuery = /document|proof|certificate|paper/i.test(q) || 
                     q.includes('డాక్యుమెంట్') || q.includes('పత్రాలు') || q.includes('సాక్ష్యాలు') || 
                     q.includes('ದಾಖಲೆ') || q.includes('दस्तावेज') || q.includes('प्रमाणपत्र');

  const isApplyQuery = /apply|application|how to|where to|process|steps|portal|link/i.test(q) || 
                       q.includes('దరఖాస్తు') || q.includes('ఎలా') || q.includes('అర్జీ') || 
                       q.includes('ಅರ್ಜಿ') || q.includes('आवेदन') || q.includes('पोर्टल');

  const isEligQuery = /eligible|eligibility|qualif|criteria|who can/i.test(q) || 
                      q.includes('అర్హత') || q.includes('అర్హులు') || q.includes('అర్హతగల') || 
                      q.includes('ಅರ್ಹತೆ') || q.includes('पात्रता') || q.includes('योग्य');

  const isStatsQuery = /how many|count|number of|total|beneficiar|stat|reach|disburs|how much money|budget|figures|metrics/i.test(q) || 
                       q.includes('ఎంతమంది') || q.includes('ఎంత మంది') || q.includes('లబ్ధిదారులు') || q.includes('సంఖ్య') || q.includes('మొత్తం') ||
                       q.includes('ఎంత మందికి') || q.includes('ఎంతమందికి') ||
                       q.includes('ಎಷ್ಟು ಜನ') || q.includes('ಎಷ್ಟು ಮಂದಿ') || q.includes('ಫಲಾನುಭವಿಗಳು') || q.includes('ಸಂಖ್ಯೆ') || q.includes('ಎಷ್ಟು ರೈತರು') ||
                       q.includes('कितने') || q.includes('संख्या') || q.includes('लाभार्थी') || q.includes('कुल कितने') || q.includes('कितने किसान');

  const isHelplineQuery = /helpline|toll free|tollfree|call center|contact|phone number|support|grievance/i.test(q) ||
                          q.includes('హెల్ప్‌లైన్') || q.includes('టోల్ ఫ్రీ') || q.includes('ఫోన్ నంబర్') ||
                          q.includes('ಹೆಲ್ಪ್‌ಲೈನ್') || q.includes('टोल फ्री') || q.includes('हेल्पलाइन');

  // =========================================================================
  // 0. QUANTITATIVE & STATISTICAL QUERIES ("How many farmers...", "How many beneficiaries...")
  // =========================================================================
  if (isStatsQuery) {
    if (isFarmerQuery || q.includes('kisan') || q.includes('farm') || q.includes('రైతు') || q.includes('ರೈತ')) {
      if (lang === 'te') {
        return {
          text: `📊 **రైతు సంక్షేమ పథకాల అధికారిక లబ్ధిదారుల సంఖ్య & తాజా వివరాలు (Official Farmer Beneficiary Statistics)**:

భారతదేశవ్యాప్తంగా మరియు రాష్ట్రాల స్థాయిలో కోట్లాది మంది రైతులకు ప్రభుత్వం నుండి అందుతున్న ప్రయోజనాల అధికారిక గణాంకాలు:

1. **పీఎం కిసాన్ సమ్మాన్ నిధి (PM-KISAN)**:
   • 👥 **దేశవ్యాప్త లబ్ధిదారులు**: **11 కోట్లకు పైగా (110+ మిలియన్లు) రైతు కుటుంబాలు**
   • 💰 **పంపిణీ చేసిన మొత్తం నిధులు**: 18 విడతల్లో నేరుగా DBT ద్వారా **₹3.24 లక్షల కోట్లకు పైగా** బ్యాంక్ ఖాతాల్లో జమ
   • 📍 **రాష్ట్రాల వారీగా ప్రధాన సంఖ్యలు**:
     - **తెలంగాణ**: సుమారు **39.4 లక్షల మంది రైతులు** (సంవత్సరానికి ₹6,000)
     - **ఆంధ్రప్రదేశ్**: సుమారు **50.2 లక్షల మంది రైతులు**
     - **కర్ణాటక**: సుమారు **54.2 లక్షల మంది రైతులు**
     - **మహారాష్ట్ర**: సుమారు **90 లక్షలకు పైగా రైతులు**

2. **రాష్ట్ర ప్రభుత్వాల ప్రత్యేక రైతు పథకాలు**:
   • 🌾 **తెలంగాణ రైతు భరోసా / రైతు బంధు**: ఇప్పటివరకు **68.99 లక్షల మంది రైతులకు** **₹72,000 కోట్లకు పైగా** పెట్టుబడి సహాయం అందించబడింది.
   • 🛡️ **తెలంగాణ రైతు బీమా**: **41.04 లక్షల మంది రైతులకు** 100% ఉచిత జీవిత బీమా రక్షణ ఉంది; 1.1 లక్షల కుటుంబాలకు ₹5,500 కోట్లకు పైగా క్లెయిమ్‌లు చెల్లించబడ్డాయి.
   • 💧 **కర్ణాటక గంగా కళ్యాణ**: **4.8 లక్షల మందికి పైగా** చిన్న, సన్నకారు రైతులకు ఉచిత బోర్‌వెల్స్ & మోటార్లు సమకూర్చబడ్డాయి.
   • 🌾 **మహారాష్ట్ర నమో శేత్కరీ యోజన**: **90 లక్షల మంది రైతులకు** రాష్ట్ర ప్రభుత్వం నుండి అదనంగా ₹6,000/సం జమ.

3. **ప్రధాన మంత్రి ఫసల్ బీమా యోజన (PMFBY - పంట బీమా)**:
   • 👥 **నమోదైన రైతులు**: ప్రతి సీజన్‌లో **4 కోట్లకు పైగా రైతులు** పంట బీమా చేయించుకుంటున్నారు.
   • 💰 **పరిహారం**: ప్రకృతి వైపరీత్యాల వల్ల పంట నష్టపోయిన రైతులకు **₹1.60 లక్షల కోట్లకు పైగా** క్లెయిమ్‌లు చెల్లించబడ్డాయి.

4. **కిసాన్ క్రెడిట్ కార్డ్ (KCC - రాయితీ రుణం)**:
   • 💳 **యాక్టివ్ కార్డులు**: దేశవ్యాప్తంగా **7.5 కోట్లకు పైగా రైతులు** కేవలం 4% వడ్డీతో KCC పంట రుణాలను పొందుతున్నారు (మొత్తం మంజూరైన రుణం ₹9 లక్షల కోట్లకు పైగా).

🔗 *అధికారిక ధృవీకరణ: వ్యవసాయ & రైతు సంక్షేమ మంత్రిత్వ శాఖ ([agricoop.nic.in](https://agricoop.nic.in/)) & పీఎం-కిసాన్ పోర్టల్ ([pmkisan.gov.in](https://pmkisan.gov.in/)).*`,
          audioText: "పీఎం కిసాన్ కింద దేశవ్యాప్తంగా 11 కోట్లకు పైగా రైతులకు 3 లక్షల 24 వేల కోట్ల రూపాయలు అందాయి. తెలంగాణలో 39 లక్షల మందికి, కర్ణాటకలో 54 లక్షల మంది రైతులకు లబ్ధి చేకూరుతోంది."
        };
      }

      if (lang === 'kn') {
        return {
          text: `📊 **ರೈತ ಕಲ್ಯಾಣ ಯೋಜನೆಗಳ ಅಧಿಕೃತ ಫಲಾನುಭವಿಗಳ ಅಂಕಿ-ಅಂಶಗಳು (Official Farmer Beneficiary Statistics)**:

ದೇಶಾದ್ಯಂತ ಹಾಗೂ ವಿವಿಧ ರಾಜ್ಯಗಳಲ್ಲಿ ರೈತರಿಗೆ ದೊರೆಯುತ್ತಿರುವ ಸವಲತ್ತುಗಳ ಅಧಿಕೃತ ಅಂಕಿ-ಅಂಶಗಳು:

1. **ಪಿಎಂ ಕಿಸಾನ್ ಸಮ್ಮಾನ್ ನಿಧಿ (PM-KISAN)**:
   • 👥 **ಒಟ್ಟು ಫಲಾನುಭವಿಗಳು**: ದೇಶದ **11 ಕೋಟಿಗೂ ಹೆಚ್ಚು ರೈತ ಕುಟುಂಬಗಳು**
   • 💰 **ವರ್ಗಾವಣೆಯಾದ ಒಟ್ಟು ಮೊತ್ತ**: 18 ಕಂತುಗಳಲ್ಲಿ ಡಿಬಿಟಿ ಮೂಲಕ **₹3.24 ಲಕ್ಷ ಕೋಟಿಗೂ ಅಧಿಕ** ಹಣ ಜಮೆ
   • 📍 **ಪ್ರಮುಖ ರಾಜ್ಯಗಳ ವಿವರ**:
     - **ಕರ್ನಾಟಕ**: ಸುಮಾರು **54.2 ಲಕ್ಷ ರೈತರು**
     - **ತೆಲಂಗಾಣ**: ಸುಮಾರು **39.4 ಲಕ್ಷ ರೈತರು**
     - **ಆಂಧ್ರಪ್ರದೇಶ**: ಸುಮಾರು **50.2 ಲಕ್ಷ ರೈತರು**
     - **ಮಹಾರಾಷ್ಟ್ರ**: ಸುಮಾರು **90 ಲಕ್ಷಕ್ಕೂ ಅಧಿಕ ರೈತರು**

2. **ರಾಜ್ಯ ಸರ್ಕಾರಗಳ ವಿಶೇಷ ರೈತ ಯೋಜನೆಗಳು**:
   • 💧 **ಕರ್ನಾಟಕ ಗಂಗಾ ಕಲ್ಯಾಣ ಯೋಜನೆ**: **4.8 ಲಕ್ಷಕ್ಕೂ ಹೆಚ್ಚು** ಸಣ್ಣ ಮತ್ತು ಅತಿ ಸಣ್ಣ ರೈತರಿಗೆ ಉಚಿತ ಕೊಳವೆಬಾವಿ ಮತ್ತು ಪಂಪ್‌ಸೆಟ್ ಸೌಲಭ್ಯ.
   • 🌾 **ತೆಲಂಗಾಣ ರೈತ ಭರೋಸಾ**: **68.99 ಲಕ್ಷ ರೈತರಿಗೆ** ₹72,000 ಕೋಟಿಗೂ ಅಧಿಕ ಬಂಡವಾಳ ನೆರವು.
   • 🛡️ **ತೆಲಂಗಾಣ ರೈತ ಬಿಮಾ**: **41.04 ಲಕ್ಷ ರೈತರಿಗೆ** ಉಚಿತ ಜೀವ ವಿಮೆ ರಕ್ಷಣೆ.

3. **ಪ್ರಧಾನ ಮಂತ್ರಿ ಫಸಲ್ ಬಿಮಾ ಯೋಜನೆ (PMFBY)**:
   • 👥 ಪ್ರತಿ ವರ್ಷ **4 ಕೋಟಿಗೂ ಹೆಚ್ಚು ರೈತರು** ಬೆಳೆ ವಿಮೆ ವ್ಯಾಪ್ತಿಗೆ ಬರುತ್ತಾರೆ.
   • 💰 ಬೆಳೆ ನಷ್ಟ ಪರಿಹಾರವಾಗಿ **₹1.60 ಲಕ್ಷ ಕೋಟಿಗೂ ಅಧಿಕ** ಮೊತ್ತ ಪಾವತಿಯಾಗಿದೆ.

4. **ಕಿಸಾನ್ ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ (KCC)**:
   • 💳 ದೇಶದಲ್ಲಿ **7.5 ಕೋಟಿಗೂ ಹೆಚ್ಚು ರೈತರು** ಶೇಕಡಾ 4 ರ ಬಡ್ಡಿ ದರದಲ್ಲಿ ಕೆಸಿಸಿ ಸಾಲ ಸೌಲಭ್ಯ ಹೊಂದಿದ್ದಾರೆ.

🔗 *ಅಧಿಕೃತ ಮಾಹಿತಿ: ಕೃಷಿ ಮತ್ತು ರೈತರ ಕಲ್ಯಾಣ ಸಚಿವಾಲಯ ([agricoop.nic.in](https://agricoop.nic.in/)) ಮತ್ತು ಪಿಎಂ-ಕಿಸಾನ್ ಪೋರ್ಟಲ್ ([pmkisan.gov.in](https://pmkisan.gov.in/)).*`,
          audioText: "ಪಿಎಂ ಕಿಸಾನ್ ಯೋಜನೆಯಡಿ ದೇಶಾದ್ಯಂತ 11 ಕೋಟಿಗೂ ಹೆಚ್ಚು ರೈತರಿಗೆ 3 ಲಕ್ಷ 24 ಸಾವಿರ ಕೋಟಿ ರೂಪಾಯಿ ಡಿಬಿಟಿ ಮೂಲಕ ತಲುಪಿದೆ. ಕರ್ನಾಟಕದಲ್ಲಿ 54 ಲಕ್ಷಕ್ಕೂ ಹೆಚ್ಚು ರೈತರು ಇದರ ಪ್ರಯೋಜನ ಪಡೆಯುತ್ತಿದ್ದಾರೆ."
        };
      }

      return {
        text: `📊 **Official Beneficiary Statistics & Reach for Farmer Welfare Schemes**:

Across India, agricultural welfare schemes support tens of crores of farmers through Direct Benefit Transfer (DBT), subsidized loans, and risk insurance:

1. **PM Kisan Samman Nidhi (PM-KISAN)**:
   • 👥 **National Beneficiaries**: **Over 11 Crore (110+ Million) landholding farmers**
   • 💰 **Total Disbursed**: **Over ₹3.24 Lakh Crores** directly credited into farmer bank accounts across 18 installments via DBT
   • 📍 **Key State Beneficiary Numbers**:
     - **Karnataka**: ~**54.2 Lakh (5.42 Million) farmers** receive ₹6,000/year
     - **Telangana**: ~**39.4 Lakh (3.94 Million) farmers** receive ₹6,000/year
     - **Andhra Pradesh**: ~**50.2 Lakh (5.02 Million) farmers** receive ₹6,000/year
     - **Maharashtra**: ~**90+ Lakh (9.0 Million) farmers** receive ₹6,000/year
     - **Uttar Pradesh**: ~**2.6+ Crore (26 Million) farmers** receive ₹6,000/year

2. **State-Level Farmer Welfare Programs**:
   • 🌾 **Telangana Rythu Bharosa / Rythu Bandhu**: **~68.99 Lakh (6.9 Million) farmers** have received **₹72,000+ Crores** in input financial grants.
   • 🛡️ **Telangana Rythu Bima**: **41.04 Lakh farmers** covered with 100% state-paid ₹5 Lakh life insurance; over **₹5,500+ Crores** settled for 1.1 Lakh bereaved families.
   • 💧 **Karnataka Ganga Kalyana Scheme**: Over **4.8 Lakh+ small and marginal farmers** provided free irrigation borewells and energization.
   • 🌾 **Maharashtra Namo Shetkari Mahasanman**: **90+ Lakh farmers** receive an additional ₹6,000/year from the state government.

3. **Pradhan Mantri Fasal Bima Yojana (PMFBY)**:
   • 👥 **Enrolled**: **Over 4 Crore (40 Million) farmer applications** insured each season.
   • 💰 **Claims Settled**: **Over ₹1.60 Lakh Crores** paid directly to farmers for crop losses.

4. **Kisan Credit Card (KCC)**:
   • 💳 **Active Cards**: **Over 7.5 Crore (75 Million) farmers** currently hold active subsidized credit up to ₹3 Lakhs at only 4% concessional interest.

5. **Solar Agriculture Pumps (PM-KUSUM / Surya Ghar)**:
   • ☀️ **Pumps Installed**: **Over 10 Lakh+ farmers** provided solar irrigation pump sets with 60%–80% government subsidy.

🔗 *Source: Ministry of Agriculture & Farmers Welfare ([agricoop.nic.in](https://agricoop.nic.in/)) and PM-KISAN Portal ([pmkisan.gov.in](https://pmkisan.gov.in/)).*`,
        audioText: "Under PM-KISAN, over 11 Crore farmers across India have received direct benefits totaling over 3.24 Lakh Crore rupees. In Karnataka, over 54 Lakh farmers and in Telangana over 39 Lakh farmers receive these benefits."
      };
    }

    if (q.includes('pmegp') || q.includes('employment')) {
      return {
        text: `📊 **PMEGP (Prime Minister's Employment Generation Programme) Official Reach**:
• 🏢 **Micro-Enterprises Established**: Over **9.5 Lakh new manufacturing & service units** funded nationwide.
• 👥 **Employment Generated**: Created sustainable jobs for over **78+ Lakh citizens**.
• 💰 **Margin Money Subsidy Disbursed**: Over **₹25,500+ Crores** provided as direct capital grants (up to 35% subsidy) via KVIC and partner banks.
🔗 [Official Portal](https://www.kviconline.gov.in/)`,
        portalUrl: "https://www.kviconline.gov.in/"
      };
    }

    if (q.includes('mudra')) {
      return {
        text: `📊 **Pradhan Mantri MUDRA Yojana (PMMY) Official Reach**:
• 💼 **Total Loans Sanctioned**: Over **46 Crore (460 Million) loans** sanctioned to micro and small entrepreneurs.
• 💰 **Total Credit Disbursed**: Over **₹27 Lakh Crores** collateral-free loans disbursed across Shishu, Kishore, and Tarun categories.
• 👩 **Women Inclusion**: Over **68% of all Mudra loans** have been sanctioned to Women entrepreneurs.
🔗 [Official Portal](https://www.udyamimitra.in/)`,
        portalUrl: "https://www.udyamimitra.in/"
      };
    }

    if (q.includes('standup') || q.includes('sc st')) {
      return {
        text: `📊 **Stand-Up India Scheme Official Reach**:
• 🏛️ **Beneficiary Accounts**: Over **2.1 Lakh SC, ST, and Women borrowers** sanctioned bank loans between ₹10 Lakhs and ₹1 Crore.
• 💰 **Total Sanctioned Amount**: Over **₹48,000+ Crores** for setting up greenfield enterprises.
• 👩 **Women Representation**: More than **84% of total beneficiaries** under Stand-Up India are Women entrepreneurs.
🔗 [Official Portal](https://www.standupmitra.in/)`,
        portalUrl: "https://www.standupmitra.in/"
      };
    }

    // Generic count response
    return {
      text: `📊 **SchemeSetu Welfare Database & Citizen Coverage Summary**:
• 🏛️ **Total Welfare Schemes**: **5,093 Central & State Government Schemes** indexed and live.
• 🇮🇳 **Coverage**: All 28 Indian States & 8 Union Territories across 16 Central Flagship Missions.
• 🌾 **Farmers Covered Nationally**: Over **11 Crore farmers** under PM-KISAN (₹3.24 Lakh Crores disbursed).
• 💼 **Entrepreneurs & MSMEs**: Over **46 Crore Mudra loans** & **9.5 Lakh PMEGP units** funded.
• 👩 **Women Empowerment**: Over **3.5 Crore Sukanya Samriddhi accounts** & **10 Crore Ujjwala gas connections**.
💡 *Ask for any specific scheme (e.g. "how many farmers in PM-KISAN" or "PMEGP beneficiaries") for detailed breakdown.*`
    };
  }

  // =========================================================================
  // 0.1 HELPLINE & TOLL-FREE NUMBERS
  // =========================================================================
  if (isHelplineQuery) {
    if (lang === 'te') {
      return {
        text: `📞 **ప్రభుత్వ ముఖ్య హెల్ప్‌లైన్ & టోల్-ఫ్రీ నంబర్లు (Toll-Free Helplines)**:

1. **రైతుల కిసాన్ కాల్ సెంటర్ (KCC)**: 
   📞 **1800-180-1551** (ఉచిత టోల్ ఫ్రీ, తెలుగుతో సహా 22 భాషల్లో, ఉదయం 6 నుండి రాత్రి 10 వరకు)
2. **పీఎం కిసాన్ హెల్ప్‌లైన్ (PM-KISAN)**: 
   📞 **155261** / **1800-115-526** / 011-24300606
3. **పంట బీమా టోల్ ఫ్రీ (PMFBY)**: 
   📞 **14447** / **1800-200-5142**
4. **MSME & PMEGP హెల్ప్‌లైన్**: 
   📞 **1800-180-6763**
5. **జాతీయ వినియోగదారుల & పౌర సహాయవాణి**: 
   📞 **1915**
6. **మహిళా సహాయవాణి (Women Helpline)**: 
   📞 **181** / **1091**

💡 *అన్ని టోల్-ఫ్రీ నంబర్లు ఉచితం మరియు ప్రభుత్వ కార్యాలయాల ద్వారా నేరుగా నిర్వహించబడతాయి.*`
      };
    }
    return {
      text: `📞 **Official Government Toll-Free Helplines & Support Centers**:

1. **Kisan Call Center (KCC for Farmers)**: 
   📞 **1800-180-1551** (Toll-Free, 22 languages including Telugu & Kannada, 6:00 AM – 10:00 PM, 365 days)
2. **PM-KISAN Central Helpline**: 
   📞 **155261** / **1800-115-526** / 011-24300606
3. **Pradhan Mantri Fasal Bima (PMFBY Crop Insurance)**: 
   📞 **14447** / **1800-200-5142**
4. **MSME & PMEGP Helpline**: 
   📞 **1800-180-6763**
5. **National Citizen & Grievance Helpline**: 
   📞 **1915**
6. **National Women Helpline**: 
   📞 **181** / **1091**

💡 *All the above numbers are 100% free of charge and connected directly to government nodal officers.*`
    };
  }

  // =========================================================================
  // 1. FARMER QUERIES (HANDLED FIRST WITH 100% SPECIFICITY)
  // =========================================================================
  if (isFarmerQuery) {
    // 1.1 If Farmer is specifically asking for documents
    if (isDocQuery) {
      if (lang === 'te') {
        return {
          text: `📄 **రైతు సంక్షేమ పథకాలకు కావలసిన ముఖ్య పత్రాలు (Required Documents for Farmer Schemes)**:

1. **భూమి యాజమాన్య పత్రాలు (Land Ownership Records)**:
   • పట్టాదార్ పాస్‌బుక్ / Pahani / 1B అడంగల్ / 7-12 ఎక్స్‌ట్రాక్ట్
2. **ఆధార్ కార్డు (Aadhaar Card - తప్పనిసరి)**:
   • ఆధార్ మీ బ్యాంక్ ఖాతాతో లింక్ చేయబడి ఉండాలి (NPCI Aadhaar Seeding తప్పనిసరి)
3. **యాక్టివ్ బ్యాంక్ ఖాతా పాస్‌బుక్**:
   • IFSC కోడ్ మరియు స్పష్టమైన ఖాతా సంఖ్యతో కూడిన బ్యాంక్ పాస్‌బుక్ జిరాక్స్
4. **ఆధార్‌తో లింక్ అయిన మొబైల్ నంబర్**:
   • e-KYC ధృవీకరణ మరియు OTP నమోదు కోసం
5. **కులం & ఆదాయ ధృవీకరణ పత్రాలు (వర్తించే చోట)**:
   • గంగా కళ్యాణ, ఉచిత బోర్‌వెల్స్ లేదా ప్రత్యేక సబ్సిడీ పథకాల కోసం

👉 [PM-KISAN e-KYC అధికారిక పోర్టల్](https://pmkisan.gov.in/)`,
          portalUrl: "https://pmkisan.gov.in/"
        };
      }
      return {
        text: `📄 **Essential Documents Required for Farmer Welfare Schemes**:

1. **Land Ownership Proof**:
   • Pattadar Passbook / RTC / Pahani / RoR-1B record or Land Title Deed
2. **Aadhaar Card (Mandatory)**:
   • Must be linked to your active bank account for DBT (NPCI Aadhaar Seeding)
3. **Bank Account Details**:
   • Bank Passbook copy showing clear Account Number and IFSC Code
4. **Aadhaar-Linked Mobile Number**:
   • For OTP generation and mandatory annual e-KYC verification
5. **Caste & Income Certificates (where applicable)**:
   • Required for special target subsidies like Ganga Kalyana free borewells or SC/ST farmer grants

👉 [PM-KISAN e-KYC Portal](https://pmkisan.gov.in/)`,
        portalUrl: "https://pmkisan.gov.in/"
      };
    }

    // 1.2 If Farmer is specifically asking how/where to apply
    if (isApplyQuery) {
      if (lang === 'te') {
        return {
          text: `📝 **రైతు పథకాలకు దరఖాస్తు చేసుకునే విధానం (How to Apply for Farmer Schemes)**:

1. **పీఎం కిసాన్ (PM-KISAN)**:
   • [pmkisan.gov.in](https://pmkisan.gov.in/) పోర్టల్‌ని సందర్శించండి ➔ 'Farmers Corner' ➔ 'New Farmer Registration' పై క్లిక్ చేయండి.
   • ఆధార్ నంబర్, మొబైల్ నంబర్, భూమి సర్వే నంబర్ నమోదు చేసి ఓటీపీతో దరఖాస్తు సమర్పించండి.
2. **రాష్ట్ర ప్రభుత్వ పథకాలు (రైతు భరోసా / గంగా కళ్యాణ)**:
   • తెలంగాణ: మీసేవ (MeeSeva) లేదా ప్రజా పాలన కేంద్రాల్లో దరఖాస్తు చేసుకోండి.
   • కర్ణాటక: గ్రామ వన్ (Grama One) / సేవా సింధు లేదా FRUITS పోర్టల్ (fruits.karnataka.gov.in) ద్వారా నమోదు చేసుకోండి.
   • ఆంధ్రప్రదేశ్: సమీప గ్రామ/వార్డు సచివాలయంలో సంప్రదించండి.
3. **కామన్ సర్వీస్ సెంటర్ (CSC)**:
   • సమీపంలోని CSC కేంద్రాన్ని సందర్శించి బయోమెట్రిక్ e-KYC పూర్తి చేయవచ్చు.

👉 [PM-KISAN అధికారిక పోర్టల్](https://pmkisan.gov.in/)`,
          portalUrl: "https://pmkisan.gov.in/"
        };
      }
      return {
        text: `📝 **Step-by-Step Guide: How to Apply for Farmer Welfare Schemes**:

1. **PM Kisan Samman Nidhi (PM-KISAN)**:
   • Visit the official portal: [pmkisan.gov.in](https://pmkisan.gov.in/)
   • Go to **'Farmers Corner'** ➔ Click **'New Farmer Registration'**.
   • Enter your Aadhaar number, state, mobile number, land survey/patta details, and verify with OTP.
2. **State Agriculture Portals**:
   • **Karnataka**: Register on the **FRUITS Portal** ([fruits.karnataka.gov.in](https://fruits.karnataka.gov.in/)) or visit **Grama One / Seva Sindhu** centers.
   • **Telangana**: Apply through **MeeSeva** or **Praja Palana** facilitation counters.
   • **Andhra Pradesh**: Visit your local **Grama / Ward Sachivalayam** and submit e-Crop details.
3. **Common Service Centers (CSC)**:
   • Any citizen farmer can walk into a local CSC center with their Aadhaar and passbook for assisted biometric registration.

👉 [PM-KISAN Portal](https://pmkisan.gov.in/)`,
        portalUrl: "https://pmkisan.gov.in/"
      };
    }

    const stateTitle = detectedState ? detectedState.charAt(0).toUpperCase() + detectedState.slice(1) : (profile?.state || 'National');
    
    // Header in selected language
    const header = lang === 'te' 
      ? `🌾 **${stateTitle} రైతు సోదరుల కోసం ప్రత్యేక ప్రభుత్వ పథకాలు (Agriculture & Farmer Schemes)**:`
      : lang === 'kn'
      ? `🌾 **${stateTitle} ರೈತ ಬಾಂಧವರಿಗಾಗಿ ಪ್ರಮುಖ ಕೃಷಿ ಮತ್ತು ಕಲ್ಯಾಣ ಯೋಜನೆಗಳು**:`
      : lang === 'hi'
      ? `🌾 **${stateTitle} के किसान भाइयों के लिए विशेष कृषि एवं कल्याणकारी योजनाएं**:`
      : `🌾 **Dedicated Agriculture & Welfare Schemes for Farmers in ${stateTitle}**:`;

    let schemesList = [];

    // A. Add State-Specific Farmer Schemes if available
    if (detectedState && STATE_FARMER_SCHEMES[detectedState]) {
      const stateList = STATE_FARMER_SCHEMES[detectedState];
      stateList.forEach(s => {
        const title = s.localName?.[lang] || s.name;
        schemesList.push(`• **${title}**\n  💰 **${lang === 'te' ? 'ప్రయోజనం' : 'Benefit'}**: ${s.benefit}\n  🎯 **${lang === 'te' ? 'అర్హత' : 'Eligibility'}**: ${s.target}\n  📄 **${lang === 'te' ? 'పత్రాలు' : 'Docs'}**: ${s.documents}\n  🔗 [${lang === 'te' ? 'పోర్టల్' : 'Portal'}](${s.portal})`);
      });
    }

    // B. Add Major Central Agriculture Schemes Applicable Nationwide
    const centralFarmSchemes = [
      {
        name: lang === 'te' ? "పీఎం కిసాన్ సమ్మాన్ నిధి (PM-KISAN)" : "PM Kisan Samman Nidhi (PM-KISAN)",
        benefit: lang === 'te' ? "సంవత్సరానికి ₹6,000 నగదు సహాయం (ప్రతి 4 నెలలకు ₹2,000 చొప్పున 3 విడతల్లో నేరుగా బ్యాంక్ ఖాతాలో జమ)" : "₹6,000 / year direct cash support (3 installments of ₹2,000 via DBT)",
        target: lang === 'te' ? "భూమిగల రైతు కుటుంబాలందరూ" : "All landholding farmer families across India",
        portal: "https://pmkisan.gov.in/"
      },
      {
        name: lang === 'te' ? "ప్రధాన మంత్రి ఫసల్ బీమా యోజన (PMFBY)" : "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
        benefit: lang === 'te' ? "కరువు, వరదలు, తెగుళ్ల వల్ల పంట నష్టం జరిగితే పూర్తి బీమా పరిహారం (రైతు ప్రీమియం కేవలం 1.5% నుండి 2% మాత్రమే)" : "Comprehensive crop loss compensation with only 1.5% to 2% farmer premium",
        target: lang === 'te' ? "ఆహార ధాన్యాలు, నూనెగింజలు మరియు ఉద్యానవన పంటలు సాగుచేసే రైతులందరూ" : "All farmers growing notified food, oilseed and commercial crops",
        portal: "https://pmfby.gov.in/"
      },
      {
        name: lang === 'te' ? "కిసాన్ క్రెడిట్ కార్డ్ (KCC - వ్యవసాయ రుణం)" : "Kisan Credit Card (KCC Low-Interest Crop Loan)",
        benefit: lang === 'te' ? "కేవలం 4% రాయితీ వడ్డీతో ₹3,00,000 (₹3 లక్షలు) వరకు పంట రుణం" : "Subsidized crop credit up to ₹3,00,000 at only 4% concessional interest",
        target: lang === 'te' ? "రైతులు, కౌలు రైతులు, పాడి రైతులు మరియు మత్స్యకారులు" : "Landowners, tenant farmers, dairy & fisheries farmers",
        portal: "https://pmkisan.gov.in/"
      },
      {
        name: lang === 'te' ? "పీఎం సూర్య ఘర్ / సోలార్ అగ్రికల్చర్ పంప్" : "Solar Agriculture Pump & Solar Feeder Scheme",
        benefit: lang === 'te' ? "వ్యవసాయ సోలార్ పంపుల ఏర్పాటుకు 60% నుండి 80% వరకు ప్రభుత్వ మూలధన సబ్సిడీ" : "60% to 80% capital subsidy for installing solar irrigation pumps",
        target: lang === 'te' ? "ఆఫ్-గ్రిడ్ వ్యవసాయ భూములు ఉన్న రైతులు" : "Farmers with agricultural borewells / open wells",
        portal: "https://pmsuryaghar.gov.in/"
      }
    ];

    centralFarmSchemes.forEach(s => {
      schemesList.push(`• **${s.name}**\n  💰 **${lang === 'te' ? 'ప్రయోజనం' : 'Benefit'}**: ${s.benefit}\n  🎯 **${lang === 'te' ? 'అర్హత' : 'Eligibility'}**: ${s.target}\n  🔗 [${lang === 'te' ? 'అధికారిక పోర్టల్' : 'Official Portal'}](${s.portal})`);
    });

    const note = lang === 'te' 
      ? `\n\n💡 *గమనిక: ఈ పథకాలన్నీ ప్రత్యేకంగా రైతు సోదరుల కోసం మాత్రమే రూపొందించబడ్డాయి (దళిత బంధు లేదా మహిళా పథకాలు కావు).*`
      : `\n\n💡 *Note: All the above schemes are strictly dedicated to agricultural farmers.*`;

    return {
      text: `${header}\n\n${schemesList.join('\n\n')}${note}`,
      audioText: `${header}. ${schemesList.slice(0, 3).join('. ')}`
    };
  }

  // =========================================================================
  // 2. CHECK SPECIFIC FLAGSHIP SCHEME KEY (PMEGP, Stand-Up, Mudra, etc.)
  // =========================================================================
  let matchedKey = null;
  for (const [key, item] of Object.entries(SCHEME_KNOWLEDGE_BASE)) {
    if (item.keywords.some(kw => q.includes(kw.toLowerCase()))) {
      matchedKey = key;
      break;
    }
  }

  if (matchedKey) {
    const kb = SCHEME_KNOWLEDGE_BASE[matchedKey];
    const flagData = FLAGSHIP_SCHEMES_DATA[kb.flagshipId]?.[lang] || FLAGSHIP_SCHEMES_DATA[kb.flagshipId]?.['en'];
    const schemeName = flagData?.name || kb.flagshipId;
    const category = flagData?.category || kb.category;
    const benefit = flagData?.benefit || kb.maxSubsidy;
    const summary = flagData?.summary || '';
    const applySteps = flagData?.application_process || `Apply online at ${kb.portalUrl}`;

    if (isDocQuery) {
      const docHeader = lang === 'te' ? `📄 **${schemeName} కు కావలసిన పత్రాలు (Required Documents)**:`
                      : lang === 'kn' ? `📄 **${schemeName} ಗೆ ಅಗತ್ಯವಿರುವ ದಾಖಲೆಗಳು (Required Documents)**:`
                      : lang === 'hi' ? `📄 **${schemeName} के लिए आवश्यक दस्तावेज (Required Documents)**:`
                      : `📄 **Required Documents for ${schemeName}**:`;
      const docsList = kb.documents.map((d, i) => `${i + 1}. ${bhashini.translateDocument ? bhashini.translateDocument(d, lang) : d}`).join('\n');
      return {
        text: `${docHeader}\n\n${docsList}\n\n👉 [${lang === 'te' ? 'అధికారిక పోర్టల్' : 'Official Portal'}](${kb.portalUrl})`,
        portalUrl: kb.portalUrl,
        schemeName,
        audioText: `${docHeader}. ${kb.documents.join(', ')}`
      };
    }

    if (isApplyQuery) {
      const applyHeader = lang === 'te' ? `📝 **${schemeName} కి దరఖాస్తు చేసే విధానం (How to Apply)**:`
                        : lang === 'kn' ? `📝 **${schemeName} ಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸುವ ವಿಧಾನ (How to Apply)**:`
                        : lang === 'hi' ? `📝 **${schemeName} के लिए आवेदन कैसे करें (How to Apply)**:`
                        : `📝 **How to Apply for ${schemeName}**:`;
      const steps = [
        lang === 'te' ? `1. అధికారిక పోర్టల్ (${kb.portalUrl}) లేదా సమీప CSC కేంద్రాన్ని సందర్శించండి.` : `1. Visit the official portal (${kb.portalUrl}) or your nearest Common Service Centre (CSC).`,
        lang === 'te' ? `2. ఆధార్ మరియు మొబైల్ నంబర్ ద్వారా e-KYC ధృవీకరణ పూర్తి చేయండి.` : `2. Complete your Aadhaar e-KYC registration with mobile OTP.`,
        lang === 'te' ? `3. అవసరమైన పత్రాలను అప్‌లోడ్ చేసి ఆన్‌లైన్ దరఖాస్తును సమర్పించండి.` : `3. Fill in required details, upload identity/caste/income documents, and submit.`,
        lang === 'te' ? `4. అప్లికేషన్ నంబర్ (Acknowledgement) ప్రింట్ తీసుకొని భద్రపరచుకోండి.` : `4. Keep the Application Acknowledgement Number for tracking.`
      ].join('\n');
      return {
        text: `${applyHeader}\n\n${steps}\n\n🔗 [${lang === 'te' ? 'ఇప్పుడే దరఖాస్తు చేయండి' : 'Apply Now on Official Portal'}](${kb.portalUrl})`,
        portalUrl: kb.portalUrl,
        schemeName
      };
    }

    if (isEligQuery) {
      const eligHeader = lang === 'te' ? `🎯 **${schemeName} అర్హత నిబంధనలు (Eligibility Criteria)**:`
                       : `🎯 **Eligibility Criteria for ${schemeName}**:`;
      const eligDetails = Object.entries(kb.eligibility).map(([k, v]) => `• **${k.toUpperCase()}**: ${v}`).join('\n');
      return {
        text: `${eligHeader}\n\n${eligDetails}\n\n💰 **${lang === 'te' ? 'ప్రయోజనం' : 'Benefit'}**: ${benefit}\n\n🔗 ${kb.portalUrl}`,
        portalUrl: kb.portalUrl,
        schemeName
      };
    }

    const fullHeader = `🏛️ **${schemeName}**\n📂 *${category}*`;
    const benefitSection = lang === 'te' ? `💰 **ఆర్థిక ప్రయోజనం / సబ్సిడీ**:\n${benefit}` : `💰 **Financial Benefit & Subsidy**:\n${benefit}`;
    const summarySection = lang === 'te' ? `📋 **పథకం వివరాలు**:\n${summary}` : `📋 **Scheme Summary**:\n${summary}`;
    const docShortList = kb.documents.slice(0, 4).map(d => `• ${d}`).join('\n') + (kb.documents.length > 4 ? `\n• ... (మొత్తం ${kb.documents.length} పత్రాలు)` : '');
    const docSection = lang === 'te' ? `📄 **ముఖ్యమైన పత్రాలు**:\n${docShortList}` : `📄 **Key Documents**:\n${docShortList}`;
    const applySection = lang === 'te' ? `📝 **దరఖాస్తు విధానం**:\n${applySteps}\n👉 [అధికారిక పోర్టల్](${kb.portalUrl})` : `📝 **How to Apply**:\n${applySteps}\n👉 [Official Portal](${kb.portalUrl})`;

    return {
      text: `${fullHeader}\n\n${benefitSection}\n\n${summarySection}\n\n${docSection}\n\n${applySection}`,
      portalUrl: kb.portalUrl,
      schemeName,
      audioText: `${schemeName}. ${benefit}. ${summary}`
    };
  }

  // =========================================================================
  // 3. WOMEN CENTRIC QUERIES
  // =========================================================================
  if (isWomenQuery) {
    const header = lang === 'te' ? `👩 **మహిళల ఆర్థిక స్వావలంబన & ఉపాధి పథకాలు**:`
                 : lang === 'kn' ? `👩 **ಮಹಿಳೆಯರ ಸಬಲೀಕರಣಕ್ಕಾಗಿ ಪ್ರಮುಖ ಯೋಜನೆಗಳು**:`
                 : lang === 'hi' ? `👩 **महिलाओं एवं महिला उद्यमियों के लिए प्रमुख योजनाएं**:`
                 : `👩 **Top Government Schemes for Women & Women Entrepreneurs**:`;
    const list = [
      `1. **Stand-Up India Scheme**: ₹10 Lakhs to ₹1 Crore composite bank loan for women greenfield ventures (standupmitra.in)`,
      `2. **PMEGP Special Category**: 35% margin money capital subsidy (up to ₹17.5 Lakhs) with only 5% own contribution (kviconline.gov.in)`,
      `3. **Sukanya Samriddhi Yojana (SSY)**: 8.2% tax-free compound interest savings for girl child (indiapost.gov.in)`,
      `4. **PM Ujjwala Yojana 2.0**: 100% Free LPG Gas Connection + Free Stove & First Refill (pmuy.gov.in)`
    ];
    if (detectedState === 'karnataka') {
      list.push(`5. **Karnataka Gruha Lakshmi**: ₹2,000/month direct cash transfer to female head of household`);
      list.push(`6. **Karnataka Shakti Scheme**: 100% free bus travel across Karnataka`);
    } else if (detectedState === 'telangana') {
      list.push(`5. **Telangana Mahalakshmi Scheme**: ₹2,500/month financial grant + ₹500 gas cylinder + Free RTC bus travel`);
    } else if (detectedState === 'maharashtra') {
      list.push(`5. **Mukhyamantri Majhi Ladki Bahin**: ₹1,500/month direct financial grant`);
    }
    return { text: `${header}\n\n${list.join('\n\n')}` };
  }

  // =========================================================================
  // 4. STUDENTS & YOUTH QUERIES
  // =========================================================================
  if (isStudentQuery) {
    const header = lang === 'te' ? `🎓 **విద్యార్థులు & యువత కోసం ప్రభుత్వ పథకాలు**:`
                 : `🎓 **Top Government Schemes for Students & Youth**:`;
    const list = [
      `1. **Prime Minister's Internship Scheme (PMIS 2024-25)**: ₹5,000/month stipend + ₹6,000 grant in top 500 companies (pminternship.mca.gov.in)`,
      `2. **PM Kaushal Vikas Yojana (PMKVY 4.0)**: 100% Free industry skill certification + stipend (skillindiadigital.gov.in)`,
      `3. **National Scholarship Portal (NSP)**: Pre-matric, Post-matric & Merit-cum-Means scholarships (scholarships.gov.in)`
    ];
    if (detectedState === 'karnataka') {
      list.push(`4. **Karnataka Yuva Nidhi**: ₹3,000/month for unemployed Graduates, ₹1,500/month for Diploma holders`);
    }
    return { text: `${header}\n\n${list.join('\n\n')}` };
  }

  // =========================================================================
  // 5. ARTISANS & WEAVERS
  // =========================================================================
  if (isArtisanQuery) {
    const header = lang === 'te' ? `🔨 **చేతివృత్తుల కళాకారులు & నేతన్నల కోసం పథకాలు**:` : `🔨 **Top Government Schemes for Artisans & Weavers**:`;
    const list = [
      `1. **PM Vishwakarma Scheme**: ₹15,000 Free Toolkit Grant + ₹3 Lakhs loan at 5% interest + ₹500/day training stipend (pmvishwakarma.gov.in)`,
      `2. **PMEGP Khadi & Village Industries Track**: Up to 35% subsidy for rural manufacturing units up to ₹50 Lakhs (kviconline.gov.in)`
    ];
    return { text: `${header}\n\n${list.join('\n\n')}` };
  }

  // =========================================================================
  // 6. GENERAL STATE OVERVIEW (ONLY IF STATE MENTIONED WITHOUT SPECIFIC TARGET GROUP)
  // =========================================================================
  if (detectedState && GENERAL_STATE_SCHEMES[detectedState]) {
    const stateTitle = detectedState.charAt(0).toUpperCase() + detectedState.slice(1);
    const header = lang === 'te' ? `🚩 **${stateTitle} ప్రభుత్వ ముఖ్య సంక్షేమ పథకాలు (General Overview)**:`
                 : `🚩 **Key Welfare Schemes of ${stateTitle} Government (General Overview)**:`;
    const list = GENERAL_STATE_SCHEMES[detectedState].map((s, idx) => {
      const localTitle = s.localName?.[lang] || s.name;
      return `${idx + 1}. **${localTitle}**\n   💰 ${s.benefit}\n   🎯 ${s.target}\n   🔗 [${s.portal}](${s.portal})`;
    }).join('\n\n');
    const tip = lang === 'te' 
      ? `\n\n💡 *చిట్కా: మీరు రైతులు, మహిళలు, లేదా విద్యార్థుల పథకాల కోసం వెతుకుతుంటే, "రైతుల పథకాలు" లేదా "మహిళల పథకాలు" అని అడగండి.*`
      : `\n\n💡 *Tip: If you are looking specifically for agriculture or women schemes, ask "Farmer schemes in ${stateTitle}" or "Women schemes in ${stateTitle}".*`;
    return { text: `${header}\n\n${list}${tip}` };
  }

  // =========================================================================
  // 7. DYNAMIC BACKEND SEARCH (ACROSS ALL 5,093 SCHEMES)
  // =========================================================================
  try {
    const searchUrl = `${API_BASE}/api/schemes/search?q=${encodeURIComponent(userQuery)}&limit=3`;
      
    const resp = await fetch(searchUrl);
    if (resp.ok) {
      const data = await resp.json();
      const schemes = data.schemes || [];
      if (schemes.length > 0) {
        const resultHeader = lang === 'te' ? `🔍 **మీ ప్రశ్నకు సరిపోలే అధికారిక ప్రభుత్వ పథకాలు (${schemes.length})**:`
                           : `🔍 **Matched Government Welfare Schemes (${schemes.length})**:`;

        const schemeCards = schemes.map((s, idx) => {
          const loc = bhashini.getLocalizedScheme(s, lang);
          const portal = s.official_portal_url || s.portal_url || 'https://www.myscheme.gov.in/';
          return `${idx + 1}. **${loc.name}**\n   🏛️ ${loc.ministry || s.level + ' Government'}\n   💰 **${lang === 'te' ? 'ప్రయోజనం' : 'Benefit'}**: ${loc.benefit}\n   📋 ${loc.summary?.substring(0, 160)}...\n   🔗 [${lang === 'te' ? 'పోర్టల్ చూడండి' : 'Official Portal'}](${portal})`;
        }).join('\n\n');

        return {
          text: `${resultHeader}\n\n${schemeCards}`,
          audioText: `${resultHeader}. ${schemes.map(s => s.name).join(', ')}`
        };
      }
    }
  } catch (err) {
    console.warn("Backend dynamic search fallback:", err);
  }

  // Default fallback
  return {
    text: lang === 'te'
      ? `నమస్కారం! మీరు కేంద్ర మరియు రాష్ట్ర ప్రభుత్వ సంక్షేమ పథకాల గురించి ఏదైనా అడగవచ్చు:\n• "రైతులకు పథకాలు" (PM-KISAN, ఫసల్ బీమా, రైతు భరోసా)\n• "మహిళల రుణాలు" (స్టాండప్ ఇండియా, గృహ లక్ష్మి, ఉజ్జ్వల)\n• "PMEGP దరఖాస్తు పత్రాలు"\n• "పీఎం సూర్య ఘర్ ఉచిత విద్యుత్"`
      : `Hello! You can ask about any Central or State scheme:\n• "What schemes are there for farmers?" (PM-KISAN, Fasal Bima, Rythu Bharosa)\n• "Women business loans & grants" (Stand-Up India, PMEGP, Gruha Lakshmi)\n• "PMEGP required documents"\n• "PM Surya Ghar rooftop solar subsidy"`,
    quickReplies: [
      "🌾 Top Farmer Schemes in Telangana",
      "🌾 Top Farmer Schemes in Karnataka",
      "👩 Women Business Loans & Grants",
      "📄 What documents for PMEGP?"
    ]
  };
}
