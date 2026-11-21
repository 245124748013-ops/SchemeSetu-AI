// SchemeSetu AI Schemes Database - 143 Flagship Central & State Schemes
export const SCHEMES_DATABASE = [
  {
    "id": "pmegp-001",
    "name": "Prime Minister's Employment Generation Programme (PMEGP)",
    "ministry": "Ministry of Micro, Small and Medium Enterprises (MSME)",
    "category": "MSME & Entrepreneurship",
    "level": "Central",
    "target_beneficiary": "Aspiring entrepreneurs, micro-enterprises, rural youth, women, SC/ST, and artisans",
    "summary": "Credit-linked subsidy scheme offering up to 35% government subsidy for setting up new micro-enterprises in manufacturing (up to ₹50 Lakhs) and service sectors (up to ₹20 Lakhs).",
    "financial_benefit": "₹5 Lakhs - ₹17.5 Lakhs Subsidy (up to 35% Margin Money grant)",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 65,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "MSME Owner",
        "Women Entrepreneur",
        "Self Employed",
        "Artisan",
        "Youth",
        "Unemployed"
      ],
      "states": [
        "All"
      ],
      "min_education": "8th Pass (for projects above ₹10L in Mfg or ₹5L in Service)",
      "is_new_enterprise_only": true
    },
    "rag_clauses": [
      "Clause 3.1: Any individual above 18 years of age is eligible. There is no upper income ceiling for setting up projects under PMEGP.",
      "Clause 4.2: For setting up of projects costing above Rs.10 lakh in manufacturing sector and above Rs. 5 lakh in service sector, beneficiaries should possess at least VIII standard pass educational qualification.",
      "Clause 6.1: Beneficiary contribution is 10% of project cost for General category and 5% for Special Categories (SC/ST/OBC/Minorities/Women/Differently-abled/NER).",
      "Clause 7.3: Rate of subsidy (Margin Money) in Rural areas is 25% for General and 35% for Special categories; in Urban areas it is 15% for General and 25% for Special categories."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Passport size Photograph",
      "Educational Qualification Certificate (8th / 10th / 12th)",
      "Detailed Project Report (DPR)",
      "Special Category Certificate (Caste/EWS/Disability) if applicable",
      "Rural Area Certificate from Gram Panchayat (if claiming rural rate)",
      "Bank Account Passbook"
    ],
    "application_process": "1. Apply online at KVIC PMEGP e-portal. 2. Submit Project Report & KYC. 3. District Task Force Committee (DTFC) reviews and forwards to bank. 4. Bank sanctions loan and claims Margin Money subsidy.",
    "official_portal_url": "https://msme.gov.in/",
    "tags": [
      "business loan",
      "subsidy",
      "manufacturing",
      "service business",
      "self-employment",
      "startup loan",
      "kvic",
      "margin money",
      "new business"
    ]
  },
  {
    "id": "standup-india-002",
    "name": "Stand-Up India Scheme",
    "ministry": "Ministry of Finance",
    "category": "Women & Minority Support",
    "level": "Central",
    "target_beneficiary": "Women entrepreneurs and SC/ST greenfield enterprise founders",
    "summary": "Facilitates bank loans between ₹10 Lakhs and ₹1 Crore to SC/ST and Women borrowers for setting up greenfield projects in manufacturing, services, agri-allied or trading sectors.",
    "financial_benefit": "₹10 Lakhs to ₹1 Crore Bank Loan (Composite Term Loan + Working Capital)",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 70,
      "max_annual_income": null,
      "gender": [
        "Female",
        "All"
      ],
      "social_categories": [
        "SC",
        "ST",
        "General",
        "OBC",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Women Entrepreneur",
        "MSME Owner",
        "Self Employed"
      ],
      "states": [
        "All"
      ],
      "special_rule": "Applicant MUST either be a Woman OR belong to SC/ST category."
    },
    "rag_clauses": [
      "Clause 2: Stand-Up India caters to SC/ST and women entrepreneurs above 18 years for setting up greenfield enterprises in manufacturing, services, agri-allied activities or trading.",
      "Clause 3.4: The loan shall be a composite loan covering term loan and working capital between Rs. 10 lakh and Rs. 100 lakh, covering up to 85% of total project cost.",
      "Clause 5.1: The borrower should not be in default to any bank or financial institution at the time of application.",
      "Clause 8.2: Margin money requirement is up to 15% which can be converged with eligible Central/State subsidy schemes."
    ],
    "required_documents": [
      "Identity Proof (Aadhaar / Voter ID / Passport)",
      "Proof of Residence",
      "Caste Certificate (for SC/ST applicants)",
      "Project Report with financial projections",
      "Rent agreement or proof of business premises",
      "PAN Card & Bank Statements (6 months)"
    ],
    "application_process": "1. Register on standupmitra.in. 2. Choose handholding agency if needed or apply directly to preferred bank. 3. Bank reviews greenfield project and disburses composite credit.",
    "official_portal_url": "https://www.standupmitra.in/",
    "tags": [
      "women entrepreneur",
      "sc st loan",
      "greenfield enterprise",
      "1 crore loan",
      "standup india",
      "business setup",
      "woman business"
    ]
  },
  {
    "id": "pm-mudra-003",
    "name": "Pradhan Mantri Mudra Yojana (PMMY)",
    "ministry": "Ministry of Finance",
    "category": "MSME & Entrepreneurship",
    "level": "Central",
    "target_beneficiary": "Micro-enterprises, small shopkeepers, street vendors, and self-employed artisans",
    "summary": "Collateral-free institutional credit up to ₹20 Lakhs for non-corporate, non-farm small and micro enterprises divided into Shishu (up to ₹50k), Kishore (₹50k to ₹5L), and Tarun (₹5L to ₹20L) tiers.",
    "financial_benefit": "Up to ₹20 Lakhs Collateral-Free Loan with Mudra RuPay Card",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 65,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "MSME Owner",
        "Street Vendor",
        "Artisan",
        "Women Entrepreneur",
        "Self Employed",
        "Farmer"
      ],
      "states": [
        "All"
      ]
    },
    "rag_clauses": [
      "Clause 1: Any Indian citizen who has a business plan for a non-farm sector income generating activity can apply.",
      "Clause 2: Categorized into three stages: Shishu (up to Rs. 50,000), Kishore (Rs. 50,000 to Rs. 5 Lakhs), and Tarun (Rs. 5 Lakhs to Rs. 20 Lakhs).",
      "Clause 4: No collateral security is required from borrowers for loans up to the prescribed ceiling.",
      "Clause 6: Repayment tenure ranges from 36 months to 60 months with nominal processing charges."
    ],
    "required_documents": [
      "Aadhaar Card / Voter ID",
      "Quotation of machinery/goods to be purchased",
      "Proof of Business establishment",
      "Recent passport size photographs",
      "Bank statement (last 6 months)"
    ],
    "application_process": "1. Prepare business proposal. 2. Apply via Udyamimitra portal or visit any commercial bank, RRB or MFI.",
    "official_portal_url": "https://www.mudra.org.in/",
    "tags": [
      "mudra loan",
      "shishu",
      "kishore",
      "tarun",
      "collateral free loan",
      "micro business",
      "kirana store loan",
      "small business loan"
    ]
  },
  {
    "id": "pm-vishwakarma-004",
    "name": "PM Vishwakarma Scheme",
    "ministry": "Ministry of MSME",
    "category": "Rural Livelihood & Artisans",
    "level": "Central",
    "target_beneficiary": "Traditional artisans and craftspersons across 18 family-based trades",
    "summary": "End-to-end holistic support for traditional artisans including PM Vishwakarma Certificate & ID, skill training with ₹500/day stipend, modern toolkits grant of ₹15,000, and collateral-free enterprise loans up to ₹3 Lakhs at 5% concessional interest.",
    "financial_benefit": "₹15,000 Free Toolkit Voucher + ₹3 Lakhs Loan at 5% Concessional Interest + ₹500/day stipend",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Artisan",
        "Weaver"
      ],
      "states": [
        "All"
      ],
      "special_rule": "Must be engaged in one of the 18 recognized traditional artisanal trades."
    },
    "rag_clauses": [
      "Clause 2.1: An artisan or craftsperson working with hands and tools engaged in one of the 18 specified trades in the unorganized sector.",
      "Clause 3.2: Only one member per family is eligible to avail scheme benefits.",
      "Clause 4.1: Recognition through PM Vishwakarma Certificate and ID Card with digital verification via Gram Panchayat.",
      "Clause 5.3: Skill upgradation with 5-7 days basic training and 15+ days advanced training with Rs 500 daily stipend, followed by Rs 15,000 toolkit voucher."
    ],
    "required_documents": [
      "Aadhaar Card (Mobile linked)",
      "Bank Account Details (IFSC & Account Number)",
      "Ration Card for family details verification",
      "Trade Declaration / Verification from Gram Panchayat or ULB"
    ],
    "application_process": "1. Citizen completes biometric registration at nearest CSC center. 2. Gram Panchayat / ULB verifies trade. 3. Skill training conducted + toolkit voucher & loan credit enabled.",
    "official_portal_url": "https://pmvishwakarma.gov.in/",
    "tags": [
      "artisan",
      "carpenter",
      "blacksmith",
      "potter",
      "barber",
      "tailor",
      "vishwakarma",
      "toolkit grant",
      "15000 grant",
      "5 percent loan",
      "craftsman"
    ]
  },
  {
    "id": "pm-kisan-005",
    "name": "PM Kisan Samman Nidhi (PM-KISAN)",
    "ministry": "Ministry of Agriculture and Farmers Welfare",
    "category": "Agriculture & Rural",
    "level": "Central",
    "target_beneficiary": "Small and marginal landholding farmer families across India",
    "summary": "Direct Income Support of ₹6,000 per year transferred directly into bank accounts in three equal installments of ₹2,000 every 4 months to all landholding farmer families.",
    "financial_benefit": "₹6,000 / year Direct Benefit Transfer (DBT) in 3 installments",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 100,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Farmer",
        "Smallholder",
        "Cultivator"
      ],
      "states": [
        "All"
      ],
      "land_ownership_required": true,
      "exclusions": [
        "Institutional landholders",
        "Income tax payees in last assessment year",
        "Govt employees"
      ]
    },
    "rag_clauses": [
      "Clause 1: Operational scheme providing income assistance to all cultivable landholding farmer families in the country.",
      "Clause 2: Financial benefit of Rs 6000 per annum per family payable in three equal four-monthly installments of Rs 2000 each.",
      "Clause 3.1: Mandatory e-KYC via Aadhaar biometric or OTP authentication to ensure targeted DBT delivery.",
      "Clause 4.2: Land records must be validated against state revenue database (Bhulekh / RoR)."
    ],
    "required_documents": [
      "Aadhaar Card (linked with Mobile Number)",
      "Land Ownership Record (Khatauni / Khasra / RoR / 7/12 Extract)",
      "Aadhaar-seeded Bank Account Passbook (NPCI mapped)",
      "Voter ID / Domicile Certificate"
    ],
    "application_process": "1. Self-register on pmkisan.gov.in Farmer Corner or visit CSC center. 2. Submit Aadhaar and land revenue record details. 3. Complete biometric/OTP e-KYC. 4. State revenue approval releases DBT.",
    "official_portal_url": "https://pmkisan.gov.in/",
    "tags": [
      "pm kisan",
      "farmer subsidy",
      "kisan 6000",
      "agriculture income",
      "kheti",
      "dbt transfer",
      "land record",
      "crop support"
    ]
  },
  {
    "id": "pm-svanidhi-006",
    "name": "PM Street Vendor's AtmaNirbhar Nidhi (PM SVANidhi)",
    "ministry": "Ministry of Housing and Urban Affairs",
    "category": "MSME & Entrepreneurship",
    "level": "Central",
    "target_beneficiary": "Urban street vendors, hawkers, thela walas, and informal sellers",
    "summary": "Special micro-credit facility providing working capital collateral-free loans of ₹10,000 (1st tranche), ₹20,000 (2nd tranche), and ₹50,000 (3rd tranche) with 7% interest subsidy and cashback on digital transactions.",
    "financial_benefit": "₹10,000 to ₹50,000 Collateral-free Working Capital + 7% Interest Subsidy + ₹1200/yr UPI Cashback",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 70,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Street Vendor"
      ],
      "states": [
        "All"
      ]
    },
    "rag_clauses": [
      "Clause 2: Available to all street vendors engaged in vending in urban areas possessing Certificate of Vending / LOR issued by ULB.",
      "Clause 4.1: Initial working capital loan of up to Rs. 10,000 repayable in 12 monthly installments. On timely repayment, vendor becomes eligible for enhanced credit of Rs. 20,000 and Rs. 50,000.",
      "Clause 6.2: Early repayment carries no prepayment penalty and accelerates eligibility for next higher loan tranche."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Vending Certificate / ID Card or Letter of Recommendation (LoR) from Municipality / ULB",
      "Bank Account Passbook / UPI QR Code",
      "Active Mobile number"
    ],
    "application_process": "1. Visit pmsvanidhi.mohua.gov.in or nearest Banking Correspondent / CSC. 2. Enter Aadhaar and ULB survey/vending code. 3. Choose lending institution. 4. Loan disbursed directly into account.",
    "official_portal_url": "https://pmsvanidhi.mohua.gov.in/",
    "tags": [
      "street vendor",
      "thela loan",
      "10000 loan",
      "svanidhi",
      "hawker loan",
      "urban vendor",
      "fruit seller",
      "vegetable seller"
    ]
  },
  {
    "id": "pm-awas-gramin-007",
    "name": "Pradhan Mantri Awas Yojana - Gramin (PMAY-G)",
    "ministry": "Ministry of Rural Development",
    "category": "Social Welfare & Housing",
    "level": "Central",
    "target_beneficiary": "Homeless and kutcha-house dwelling rural families",
    "summary": "Financial assistance of ₹1.20 Lakh in plain areas and ₹1.30 Lakh in hilly/difficult areas for constructing a pucca house of minimum 25 sq.m with toilet, LPG, electricity + 90/95 days of unskilled MGNREGA labor wages.",
    "financial_benefit": "₹1.20 Lakh to ₹1.30 Lakh Direct Grant + ₹25,000 MGNREGA Labor wages + ₹12,000 Toilet assistance",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 100,
      "max_annual_income": 150000,
      "gender": [
        "All",
        "Female",
        "Male"
      ],
      "social_categories": [
        "SC",
        "ST",
        "Minority",
        "OBC",
        "EWS",
        "General"
      ],
      "occupations": [
        "All",
        "Daily Wage Worker",
        "Farmer",
        "Artisan",
        "Homemaker",
        "Unemployed",
        "Self Employed"
      ],
      "states": [
        "All"
      ]
    },
    "rag_clauses": [
      "Clause 2.1: Target beneficiaries identified using Socio-Economic and Caste Census (SECC 2011) deprivation parameters verified by Gram Sabha.",
      "Clause 4.3: Financial assistance of Rs 1,20,000 in plain areas and Rs 1,30,000 in North-Eastern and Himalayan states.",
      "Clause 7.1: House must be registered jointly in the name of husband and wife or single woman head of family.",
      "Clause 8.4: Payment released in 3-4 installments upon geo-tagged photo verification via AwaasApp."
    ],
    "required_documents": [
      "Aadhaar Card of all family members",
      "Bank Account Passbook (Aadhaar linked)",
      "MGNREGA Job Card Number",
      "Affidavit confirming no pucca house anywhere in India",
      "Gram Panchayat verification document"
    ],
    "application_process": "1. Gram Sabha shortlists eligible families from Awaas+ list. 2. Geo-tagging of current house location. 3. Installments released directly to bank account based on construction progress.",
    "official_portal_url": "https://pmayg.dord.gov.in/",
    "tags": [
      "pmay",
      "awas yojana",
      "house grant",
      "pucca makan",
      "rural housing",
      "1.2 lakh grant",
      "garib awas",
      "home subsidy"
    ]
  },
  {
    "id": "ayushman-bharat-008",
    "name": "Ayushman Bharat - PM Jan Arogya Yojana (AB-PMJAY)",
    "ministry": "Ministry of Health and Family Welfare",
    "category": "Healthcare & Social Security",
    "level": "Central",
    "target_beneficiary": "Vulnerable families identified in SECC and unorganized workers",
    "summary": "World's largest government-funded health assurance scheme providing cashless cover of ₹5 Lakhs per family per year for secondary and tertiary care hospitalization across 29,000+ empanelled public and private hospitals.",
    "financial_benefit": "₹5,00,000 / year Cashless Hospitalization Treatment Cover per family",
    "eligibility_criteria": {
      "min_age": 0,
      "max_age": 120,
      "max_annual_income": 250000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "SC",
        "ST",
        "OBC",
        "EWS",
        "General",
        "Minority"
      ],
      "occupations": [
        "All",
        "Daily Wage Worker",
        "Farmer",
        "Artisan",
        "Street Vendor",
        "Homemaker",
        "Unemployed",
        "Self Employed"
      ],
      "states": [
        "All"
      ],
      "special_rule": "Automatically eligible if age is 70+ (Universal Senior Citizen expansion) or family listed in SECC/Ration database."
    },
    "rag_clauses": [
      "Clause 1: Provides a health cover of Rs. 5 lakhs per family per year for secondary and tertiary care hospitalization.",
      "Clause 2.3: Pre-existing conditions are covered from day one of scheme enrollment without any waiting period.",
      "Clause 5.1: Cashless access to services at any empanelled hospital (public or private) anywhere in India with Ayushman Golden Card.",
      "Clause 9.2: Free Rs. 5 Lakh universal health cover for all seniors aged 70 years and above irrespective of income."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Ration Card (NFSA / State Priority)",
      "Mobile Number",
      "Ayushman Card / ABHA ID"
    ],
    "application_process": "1. Check eligibility on beneficiary.nha.gov.in using Aadhaar/Ration Card. 2. Complete e-KYC online or at empanelled hospital/CSC. 3. Download instant Ayushman Golden Card.",
    "official_portal_url": "https://nha.gov.in/PM-JAY",
    "tags": [
      "ayushman bharat",
      "pmjay",
      "5 lakh health insurance",
      "free hospital treatment",
      "golden card",
      "senior citizen 70 health",
      "cashless medical"
    ]
  },
  {
    "id": "pm-fme-009",
    "name": "PM Formalisation of Micro food processing Enterprises (PMFME)",
    "ministry": "Ministry of Food Processing Industries",
    "category": "MSME & Entrepreneurship",
    "level": "Central",
    "target_beneficiary": "Micro food processing enterprises, FPOs, and women SHG food processors",
    "summary": "Provides 35% credit-linked capital subsidy (up to ₹10 Lakhs) for upgrading and setting up micro food processing units, along with Seed Capital of ₹40,000 per SHG member for working capital and small tools.",
    "financial_benefit": "35% Capital Subsidy up to ₹10 Lakhs + ₹40,000 Seed Capital per SHG member",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 65,
      "max_annual_income": null,
      "gender": [
        "All",
        "Female",
        "Male"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "MSME Owner",
        "Farmer",
        "Women Entrepreneur",
        "Self Employed"
      ],
      "states": [
        "All"
      ]
    },
    "rag_clauses": [
      "Clause 3.1: Individual micro-enterprises get credit-linked capital subsidy @35% of eligible project cost with max ceiling of Rs. 10 lakh per unit.",
      "Clause 4.2: Priority given to enterprises aligned with One District One Product (ODOP) identified for the district.",
      "Clause 7: Seed capital of Rs. 40,000 per SHG member for working capital and purchase of small tools."
    ],
    "required_documents": [
      "Aadhaar Card & PAN Card",
      "FSSAI Food License / Registration (or undertaking)",
      "Bank statement (6 months)",
      "Quotation for food processing machinery",
      "Detailed Project Report (DPR)"
    ],
    "application_process": "1. Register on pmfme.mofpi.gov.in. 2. Prepare DPR with help of District Resource Person (DRP). 3. Submit online to District Level Committee & Bank. 4. Bank disburses subsidy-linked loan.",
    "official_portal_url": "https://pmfme.mofpi.gov.in/",
    "tags": [
      "food processing",
      "pickle making",
      "flour mill",
      "bakery",
      "spice unit",
      "oil extraction",
      "fssai subsidy",
      "odop",
      "food startup"
    ]
  },
  {
    "id": "startup-india-seed-010",
    "name": "Startup India Seed Fund Scheme (SISFS)",
    "ministry": "Ministry of Commerce and Industry (DPIIT)",
    "category": "MSME & Entrepreneurship",
    "level": "Central",
    "target_beneficiary": "Early-stage DPIIT-recognized startup founders and student innovators",
    "summary": "Provides financial assistance to DPIIT-recognized startups for proof of concept, prototype development, product trials, market-entry and commercialization through grants up to ₹20 Lakhs and debt up to ₹50 Lakhs.",
    "financial_benefit": "Up to ₹20 Lakhs Grant for Prototype + Up to ₹50 Lakhs Debt/Convertible Debentures",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 50,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Student",
        "Youth",
        "MSME Owner",
        "Self Employed"
      ],
      "states": [
        "All"
      ]
    },
    "rag_clauses": [
      "Clause 2: A startup recognized by DPIIT incorporated not more than 2 years ago at the time of application.",
      "Clause 3.1: The startup must have a business idea to develop a product or service with a market fit, viable commercialization, and scope of scaling.",
      "Clause 5: Seed fund grant of up to Rs. 20 Lakhs disbursed in milestone-based tranches for PoC, prototype, and product trials."
    ],
    "required_documents": [
      "DPIIT Startup Recognition Certificate",
      "Company Incorporation Certificate (Pvt Ltd / LLP)",
      "Pitch Deck & Business Plan",
      "Founder Profiles & Equity structure",
      "Bank Account Statement of entity"
    ],
    "application_process": "1. Get DPIIT recognition on startupindia.gov.in. 2. Login to seedfund.startupindia.gov.in. 3. Select up to 3 incubators and apply with pitch deck. 4. Incubator Evaluation Committee interviews and awards fund.",
    "official_portal_url": "https://seedfund.startupindia.gov.in/",
    "tags": [
      "startup fund",
      "seed money",
      "dpiit grant",
      "20 lakh grant",
      "tech startup",
      "innovation fund",
      "youth entrepreneur",
      "incubator"
    ]
  },
  {
    "id": "sukanya-samriddhi-011",
    "name": "Sukanya Samriddhi Yojana (SSY)",
    "ministry": "Ministry of Finance",
    "category": "Women & Child Development",
    "level": "Central",
    "target_beneficiary": "Parents and legal guardians of girl children aged 0 to 10 years",
    "summary": "High-interest government-backed small savings scheme (8.2% p.a.) with Section 80C tax exemption (EEE status) to secure higher education and marriage financial needs of the girl child.",
    "financial_benefit": "8.2% Compound Interest p.a. + Triple Tax Exemption (EEE) + High maturity payout",
    "eligibility_criteria": {
      "min_age": 0,
      "max_age": 10,
      "max_annual_income": null,
      "gender": [
        "Female"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Student",
        "Youth",
        "Homemaker",
        "All"
      ],
      "states": [
        "All"
      ]
    },
    "rag_clauses": [
      "Clause 1: Account can be opened in any Post Office or commercial bank branch by natural/legal guardian for a girl child from birth till age of 10 years.",
      "Clause 4: Minimum initial deposit of Rs 250 and subsequent deposits in multiples of Rs 50, with maximum limit of Rs 1,50,000 per financial year.",
      "Clause 7: Partial withdrawal up to 50% of balance permitted for higher education after girl child attains 18 years."
    ],
    "required_documents": [
      "Birth Certificate of Girl Child",
      "Identity Proof of Parent/Guardian (Aadhaar / PAN)",
      "Address Proof of Guardian",
      "Photographs of child and guardian"
    ],
    "application_process": "1. Visit nearest Post Office or authorized commercial bank branch. 2. Fill SSY Form-1. 3. Submit KYC of guardian and child birth certificate with minimum deposit of ₹250.",
    "official_portal_url": "https://www.indiapost.gov.in/",
    "tags": [
      "beti bachao",
      "sukanya samriddhi",
      "girl child savings",
      "80c tax exemption",
      "post office scheme",
      "daughter education",
      "high interest scheme"
    ]
  },
  {
    "id": "pm-matsya-012",
    "name": "Pradhan Mantri Matsya Sampada Yojana (PMMSY)",
    "ministry": "Ministry of Fisheries, Animal Husbandry and Dairying",
    "category": "Agriculture & Rural",
    "level": "Central",
    "target_beneficiary": "Fishers, fish farmers, aquaculture entrepreneurs, and SHGs",
    "summary": "Flagship scheme for integrated development of fisheries with government subsidies of 40% for General category and 60% for SC/ST/Women for pond construction, biofloc, RAS, ice plants, and refrigerated vans.",
    "financial_benefit": "40% to 60% Direct Capital Subsidy for Aquaculture and Fisheries Equipment",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 70,
      "max_annual_income": null,
      "gender": [
        "All",
        "Female",
        "Male"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Farmer",
        "Self Employed",
        "MSME Owner"
      ],
      "states": [
        "All"
      ]
    },
    "rag_clauses": [
      "Clause 3.2: Governmental financial assistance is 40% of project cost for General category and 60% for SC, ST, and Women beneficiaries.",
      "Clause 5.1: Covers both marine and inland aquaculture including modern technology induction (Biofloc, RAS, Cages).",
      "Clause 8.4: Post-harvest infrastructure such as cold chains and refrigerated transport vehicles subsidized up to 60%."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Caste Certificate (if SC/ST)",
      "Land / Waterbody ownership or lease deed (minimum 7-10 years)",
      "Detailed Project Report (DPR) approved by District Fisheries Officer",
      "Bank Account Passbook"
    ],
    "application_process": "1. Submit DPR to District Fisheries Office or online via PMMSY portal. 2. District Level Committee approves proposal. 3. Subsidy disbursed into escrow account in construction milestones.",
    "official_portal_url": "https://dof.gov.in/",
    "tags": [
      "fish farming",
      "biofloc",
      "matsya",
      "aquaculture",
      "pond subsidy",
      "fisheries loan",
      "ras setup",
      "60 percent subsidy"
    ]
  },
  {
    "id": "post-matric-sc-013",
    "name": "Post Matric Scholarship for SC & ST Students",
    "ministry": "Ministry of Social Justice and Empowerment",
    "category": "Education & Skill Development",
    "level": "Central",
    "target_beneficiary": "SC and ST students enrolled in post-matriculation / college courses",
    "summary": "100% financial assistance covering full compulsory non-refundable course fees + monthly maintenance allowance up to ₹13,500/year for SC and ST students whose family income does not exceed ₹2.5 Lakhs per year.",
    "financial_benefit": "100% Tuition Fee Reimbursement + ₹13,500/year Maintenance Allowance",
    "eligibility_criteria": {
      "min_age": 15,
      "max_age": 35,
      "max_annual_income": 250000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "SC",
        "ST"
      ],
      "occupations": [
        "Student",
        "Youth"
      ],
      "states": [
        "All"
      ]
    },
    "rag_clauses": [
      "Clause 2: Scholarships are paid to students whose parents' annual income does not exceed Rs. 2,50,000 per annum.",
      "Clause 4.1: Covers all post-matriculation courses in recognized institutions including engineering, medical, law, and diplomas.",
      "Clause 6.3: Central share of 60% and State share of 40% paid directly via Aadhaar Enabled Payment System (AEPS)."
    ],
    "required_documents": [
      "Aadhaar Card of Student",
      "Caste Certificate (SC/ST)",
      "Income Certificate (Income <= 2.5 Lakhs)",
      "Previous Year Marksheets",
      "College Admission Fee Receipt & Bonafide Certificate",
      "Aadhaar-seeded Student Bank Passbook"
    ],
    "application_process": "1. Register on National Scholarship Portal (scholarships.gov.in). 2. Submit student profile and college verification. 3. State & Central nodal officers approve. 4. Direct DBT credited to account.",
    "official_portal_url": "https://scholarships.gov.in/",
    "tags": [
      "sc scholarship",
      "st scholarship",
      "college fee reimbursement",
      "post matric",
      "nsp scholarship",
      "free college",
      "student aid"
    ]
  },
  {
    "id": "day-nrlm-014",
    "name": "DAY-NRLM (National Rural Livelihoods Mission / Aajeevika)",
    "ministry": "Ministry of Rural Development",
    "category": "Women & Minority Support",
    "level": "Central",
    "target_beneficiary": "Rural women organized into Self-Help Groups (SHGs) and federations",
    "summary": "Mobilizes rural women into SHGs, providing Revolving Fund of ₹20,000 - ₹30,000, Community Investment Fund (CIF) up to ₹1.5 Lakhs, and collateral-free bank credit up to ₹20 Lakhs at 7% interest subvention (reduced to 4% for prompt repayment).",
    "financial_benefit": "₹30,000 Revolving Fund + ₹1.5 Lakh CIF + ₹20 Lakhs Bank Linkage Loan at 4% Interest",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 65,
      "max_annual_income": 180000,
      "gender": [
        "Female"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Women Entrepreneur",
        "Homemaker",
        "Self Employed",
        "Daily Wage Worker"
      ],
      "states": [
        "All"
      ]
    },
    "rag_clauses": [
      "Clause 1.2: Focuses on universal social mobilization of at least one woman member from each poor rural household into SHGs.",
      "Clause 3.1: SHGs in existence for 3-6 months get Revolving Fund of Rs 20,000 - 30,000 to catalyze micro-savings.",
      "Clause 5: Collateral-free bank linkage loans up to Rs 20 Lakhs per SHG at concessional 7% interest rate with 3% additional subvention for prompt repayment (net 4%)."
    ],
    "required_documents": [
      "Aadhaar Card",
      "SHG Membership Passbook & Resolution copy",
      "BPL / SECC Ration Card / Income Certificate",
      "SHG Bank Account details"
    ],
    "application_process": "1. Join or form a 10-20 member Village SHG under Village Organization (VO). 2. Complete 6 months internal lending. 3. Bank Mitra facilitates bank linkage loan sanction.",
    "official_portal_url": "https://rural.gov.in/",
    "tags": [
      "shg loan",
      "women self help group",
      "aajeevika",
      "nrlm",
      "rural women livelihood",
      "4 percent loan",
      "revolving fund",
      "mahila bachat gat"
    ]
  },
  {
    "id": "pm-kvy-015",
    "name": "Pradhan Mantri Kaushal Vikas Yojana 4.0 (PMKVY)",
    "ministry": "Ministry of Skill Development and Entrepreneurship",
    "category": "Education & Skill Development",
    "level": "Central",
    "target_beneficiary": "Unemployed youth, school/college dropouts seeking industry skills",
    "summary": "100% free industry-aligned skill certification courses across Industry 4.0, AI, Robotics, Solar, EV, Drone, Textiles, Electronics, and Healthcare with free NSDC certification, assessment fee waiver, and placement support.",
    "financial_benefit": "100% Free Government Training + Government NSDC Skill Certificate + Placement Linkage",
    "eligibility_criteria": {
      "min_age": 15,
      "max_age": 45,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Student",
        "Youth",
        "Unemployed",
        "Self Employed"
      ],
      "states": [
        "All"
      ]
    },
    "rag_clauses": [
      "Clause 2: Open to any Indian national youth seeking job-ready vocational skills, upskilling, or Recognition of Prior Learning (RPL).",
      "Clause 4.1: Special emphasis on Future Skills: Industry 4.0, AI, Mechatronics, IoT, 3D Printing, Drones, and Green Energy.",
      "Clause 6: Complete fee including training, study materials, and certification exam is fully borne by the Central Government."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Bank Account Passbook",
      "Educational Qualification Certificate (5th/8th/10th/12th/Graduation or self-declaration for RPL)",
      "Passport size Photograph"
    ],
    "application_process": "1. Register on Skill India Digital portal (skillindiadigital.gov.in). 2. Select course and nearest PMKVY training centre. 3. Complete hands-on training, assessment, and get certification.",
    "official_portal_url": "https://www.skillindiadigital.gov.in/",
    "tags": [
      "free skill course",
      "pmkvy",
      "job training",
      "nsdc certificate",
      "drone training",
      "ai skill",
      "electrician course",
      "tailoring training"
    ]
  },
  {
    "id": "atal-pension-016",
    "name": "Atal Pension Yojana (APY)",
    "ministry": "Ministry of Finance (PFRDA)",
    "category": "Healthcare & Social Security",
    "level": "Central",
    "target_beneficiary": "All unorganized sector workers aged 18-40",
    "summary": "Guaranteed monthly pension of ₹1,000, ₹2,000, ₹3,000, ₹4,000 or ₹5,000 per month starting at age 60 for unorganized workers based on small monthly contributions from ₹42/month.",
    "financial_benefit": "Guaranteed ₹1,000 - ₹5,000 Monthly Pension for Lifetime from Age 60",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 40,
      "max_annual_income": 300000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "All",
        "Daily Wage Worker",
        "Farmer",
        "Artisan",
        "Street Vendor",
        "Self Employed",
        "Homemaker",
        "Unemployed"
      ],
      "states": [
        "All"
      ]
    },
    "rag_clauses": [
      "Clause 1: Open to all Indian bank/post office savings account holders between 18 and 40 years of age.",
      "Clause 3: Choice of fixed pension amount of Rs. 1,000 to Rs. 5,000 per month after completing 60 years of age.",
      "Clause 5: Auto-debit facility from bank account ensuring seamless long-term retirement corpus accumulation."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Savings Bank Account / Post Office Account",
      "Active Mobile Number",
      "Nominee details"
    ],
    "application_process": "1. Visit home bank branch or submit online eNPS APY form. 2. Choose pension slab (₹1k to ₹5k). 3. Enable auto-debit on savings bank account.",
    "official_portal_url": "https://www.pfrda.org.in/",
    "tags": [
      "atal pension",
      "apy",
      "5000 pension",
      "retirement scheme",
      "unorganized worker pension",
      "old age security",
      "monthly pension"
    ]
  },
  {
    "id": "state-ka-gruha-lakshmi-017",
    "name": "Gruha Lakshmi Scheme - Karnataka",
    "ministry": "Women & Child Development Department, Govt of Karnataka",
    "category": "Women & Family Welfare",
    "level": "State",
    "target_beneficiary": "Woman head of every BPL / Antyodaya / APL household in Karnataka",
    "summary": "Flagship guarantee scheme providing ₹2,000 per month direct financial assistance (₹24,000 annually) directly transferred into the Aadhaar-seeded bank account of the woman head of every eligible household in Karnataka.",
    "financial_benefit": "₹2,000 / month Direct Cash Benefit (₹24,000 per year)",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 100,
      "max_annual_income": null,
      "gender": [
        "Female"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Homemaker",
        "Women Entrepreneur",
        "Self Employed",
        "Unemployed"
      ],
      "states": [
        "Karnataka"
      ],
      "is_woman_head_of_family": true,
      "tax_payer_ineligible": true
    },
    "rag_clauses": [
      "Clause 1.1: The beneficiary woman must be recognized as the head of the family in the Ration Card (BPL / AAY / APL).",
      "Clause 2.3: Women taxpayers or women whose husbands are paying income tax or GST returns are not eligible.",
      "Clause 3.1: Monthly direct benefit transfer of Rs 2,000 is credited automatically via DBT onto NPCI-mapped Aadhaar bank accounts.",
      "Clause 4.2: Application can be submitted through Seva Sindhu / Karnataka One / Grama One centers without any service fee."
    ],
    "required_documents": [
      "Ration Card (BPL / Antyodaya / APL card) with woman listed as head",
      "Aadhaar Card of the applicant woman",
      "Aadhaar Card of spouse/husband",
      "Aadhaar-seeded Bank Passbook / Account Number",
      "Mobile number linked with Aadhaar"
    ],
    "portal_url": "https://sevasindhugs.karnataka.gov.in/",
    "application_mode": "Online / Seva Sindhu / Grama One",
    "application_deadline": "Open Year-Round (Continuous Enrollment)",
    "tags": [
      "women",
      "karnataka",
      "state",
      "direct benefit",
      "guarantee",
      "cash transfer",
      "gruha lakshmi",
      "bpl",
      "family head"
    ],
    "official_portal_url": "https://sevasindhugs.karnataka.gov.in/"
  },
  {
    "id": "state-ka-yuva-nidhi-018",
    "name": "Yuva Nidhi Scheme - Karnataka",
    "ministry": "Skill Development, Entrepreneurship and Livelihood Dept, Govt of Karnataka",
    "category": "Skill & Employment",
    "level": "State",
    "target_beneficiary": "Unemployed degree and diploma holders graduated in Karnataka",
    "summary": "Monthly unemployment allowance of ₹3,000 for degree holders and ₹1,500 for diploma holders for up to 2 years while actively pursuing skill development and employment opportunities.",
    "financial_benefit": "₹3,000/month (Graduates) | ₹1,500/month (Diploma holders) for up to 24 months",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 35,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Student",
        "Youth",
        "Unemployed"
      ],
      "states": [
        "Karnataka"
      ],
      "min_education": "Diploma / Bachelor Degree Pass",
      "unemployment_period_months": 6
    },
    "rag_clauses": [
      "Clause 2.1: Candidates who completed graduation or diploma in Karnataka and remained unemployed after 6 months of passing are eligible.",
      "Clause 3.2: Beneficiary receives Rs 3,000/month (degree holders) or Rs 1,500/month (diploma holders) for a maximum duration of 2 years or until finding employment.",
      "Clause 4.1: Beneficiaries must register on the Kaushalya Karnataka portal and attend mandatory skill development and career enhancement workshops.",
      "Clause 5.3: Self-employed individuals earning above basic threshold or individuals pursuing higher full-time degrees are excluded."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Degree / Diploma Passing Certificate and Marksheets",
      "Karnataka Domicile / Study Certificate (minimum 6 years in Karnataka)",
      "Unemployment Self-Declaration Undertaking",
      "Bank Account linked to Aadhaar (NPCI active)"
    ],
    "portal_url": "https://sevasindhu.karnataka.gov.in/",
    "application_mode": "Online via Seva Sindhu Portal",
    "application_deadline": "Active Continuous Enrollment",
    "tags": [
      "youth",
      "karnataka",
      "unemployment",
      "stipend",
      "skill",
      "graduates",
      "diploma",
      "yuva nidhi"
    ],
    "official_portal_url": "https://sevasindhu.karnataka.gov.in/"
  },
  {
    "id": "state-ka-ganga-kalyana-019",
    "name": "Ganga Kalyana Scheme - Karnataka",
    "ministry": "Social Welfare & Backward Classes Development Dept, Govt of Karnataka",
    "category": "Agriculture & Irrigation",
    "level": "State",
    "target_beneficiary": "Small & marginal farmers belonging to SC, ST, OBC and Minority communities in Karnataka",
    "summary": "100% government subsidized drilling of individual/community borewells, supply of submersible pump sets, electrification, and piping to provide assured irrigation for dry land smallholders.",
    "financial_benefit": "₹3.5 Lakhs - ₹4.5 Lakhs 100% Government Subsidy per unit",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 65,
      "max_annual_income": 300000,
      "gender": [
        "All",
        "Male",
        "Female"
      ],
      "social_categories": [
        "SC",
        "ST",
        "OBC",
        "Minority",
        "EWS"
      ],
      "occupations": [
        "Farmer",
        "Smallholder",
        "Cultivator"
      ],
      "states": [
        "Karnataka"
      ],
      "land_ownership_required": true,
      "min_land_acres": 1.5,
      "max_land_acres": 5.0
    },
    "rag_clauses": [
      "Clause 1.4: Eligible small and marginal farmers owning between 1.5 acres and 5.0 acres of dry land belonging to SC/ST/OBC/Minority categories.",
      "Clause 2.2: Unit cost up to Rs. 4,00,000 in plain areas and Rs. 4,50,000 in difficult/hilly terrain is 100% borne by corporation as government grant.",
      "Clause 3.1: Includes complete hydrogeological survey, borewell drilling, casing pipe, 5HP/7.5HP submersible pump set installation, and BESCOM/HESCOM electrification.",
      "Clause 4.5: No financial contribution required from beneficiary farmer."
    ],
    "required_documents": [
      "RTC (Pahani) Land Record Document showing ownership",
      "Caste Certificate issued by Tahsildar",
      "Annual Income Certificate (below ₹3,00,000)",
      "Small / Marginal Farmer Certificate issued by Agriculture Dept",
      "Aadhaar Card and Bank Passbook",
      "No Objection Certificate (NOC) from local power DISCOM"
    ],
    "portal_url": "https://sevasindhu.karnataka.gov.in/",
    "application_mode": "Online / Seva Sindhu / KMDC / D. Devaraj Urs Portal",
    "application_deadline": "Annual Notification Window (Open on portal)",
    "tags": [
      "agriculture",
      "irrigation",
      "borewell",
      "karnataka",
      "sc st",
      "subsidy",
      "ganga kalyana",
      "farmers"
    ],
    "official_portal_url": "https://sevasindhu.karnataka.gov.in/"
  },
  {
    "id": "state-tg-dalit-bandhu-020",
    "name": "Dalit Bandhu Scheme - Telangana",
    "ministry": "Scheduled Castes Development Department, Govt of Telangana",
    "category": "MSME & Entrepreneurship",
    "level": "State",
    "target_beneficiary": "Scheduled Caste (SC) families establishing enterprise units in Telangana",
    "summary": "India's largest unconditional direct enterprise grant providing ₹10 Lakhs 100% direct cash grant (non-repayable) per SC family to establish manufacturing units, transport, services, or commercial businesses with no bank loan linkage or collateral.",
    "financial_benefit": "₹10,00,000 100% Direct Grant (Non-repayable, zero bank loan)",
    "eligibility_criteria": {
      "min_age": 21,
      "max_age": 60,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "SC"
      ],
      "occupations": [
        "MSME Owner",
        "Women Entrepreneur",
        "Self Employed",
        "Artisan",
        "Unemployed"
      ],
      "states": [
        "Telangana"
      ],
      "is_sc_resident_of_telangana": true
    },
    "rag_clauses": [
      "Clause 1.1: Every eligible Dalit (SC) family residing in Telangana is entitled to receive Rs 10 Lakh financial grant for enterprise creation.",
      "Clause 2.1: The amount of Rs 10 Lakh is a 100% direct government grant with NO bank loan component, zero interest, and zero repayment liability.",
      "Clause 3.4: Beneficiaries can choose any viable enterprise including transport vehicles, dairy, poultry, medical diagnostic labs, retail, manufacturing, or machinery.",
      "Clause 4.2: Dalit Bandhu Protection Fund is created with contribution from government and beneficiary to support the unit against unexpected contingencies."
    ],
    "required_documents": [
      "Integrated Caste Certificate (SC) issued by MeeSeva",
      "Telangana Food Security Card (Ration Card) / Domicile Certificate",
      "Aadhaar Card of family head and members",
      "Special Dalit Bandhu Savings Bank Account Passbook",
      "Enterprise / Business Proposal Option Form"
    ],
    "portal_url": "https://telangana.gov.in/",
    "application_mode": "Online via MeeSeva / District Collectorate Selection",
    "application_deadline": "Ongoing Phased Implementation",
    "tags": [
      "telangana",
      "sc",
      "dalit bandhu",
      "10 lakh grant",
      "entrepreneurship",
      "business",
      "no loan",
      "full subsidy"
    ],
    "official_portal_url": "https://telangana.gov.in/"
  },
  {
    "id": "state-tg-rythu-bharosa-021",
    "name": "Rythu Bharosa (Rythu Bandhu) - Telangana",
    "ministry": "Agriculture & Farmers Welfare Department, Govt of Telangana",
    "category": "Agriculture & Farming",
    "level": "State",
    "target_beneficiary": "All landholding farmers and registered cultivators in Telangana",
    "summary": "Investment support scheme offering ₹15,000 per acre per year (₹7,500 per acre per Kharif and Rabi season) deposited directly into farmers' accounts to purchase high-yield seeds, fertilizers, pesticides, and pay for field labor.",
    "financial_benefit": "₹15,000 / acre / year (₹7,500 per crop season)",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 100,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Farmer",
        "Smallholder",
        "Cultivator"
      ],
      "states": [
        "Telangana"
      ],
      "land_ownership_required": true
    },
    "rag_clauses": [
      "Clause 1.2: All pattadar farmers owning cultivable agricultural land in Telangana are entitled to Rs 7,500 per acre per season.",
      "Clause 2.4: Assistance is provided twice a year prior to the commencement of Kharif (Vanakaalam) and Rabi (Yasangi) seasons.",
      "Clause 3.1: Electronic direct transfer through Dharani portal integrated banking network directly into farmers' verified accounts.",
      "Clause 4.1: Land records verified via Dharani integrated land management portal without requiring manual physical sanction."
    ],
    "required_documents": [
      "Dharani Pattadar Passbook / Land Record",
      "Aadhaar Card",
      "Bank Account Passbook (IFSC & Account details)",
      "Mobile number registered in Dharani"
    ],
    "portal_url": "https://telangana.gov.in/",
    "application_mode": "Auto-credited via Dharani Land Portal",
    "application_deadline": "Seasonal (Before Kharif & Rabi)",
    "tags": [
      "telangana",
      "agriculture",
      "farmer",
      "rythu bharosa",
      "rythu bandhu",
      "dharani",
      "crop subsidy",
      "investment support"
    ],
    "official_portal_url": "https://telangana.gov.in/"
  },
  {
    "id": "state-ap-ysr-cheyutha-022",
    "name": "YSR Cheyutha Scheme - Andhra Pradesh",
    "ministry": "Social Welfare & BC Welfare Department, Govt of Andhra Pradesh",
    "category": "Women & Social Welfare",
    "level": "State",
    "target_beneficiary": "SC/ST/BC/Minority women aged 45 to 60 establishing micro-enterprises in Andhra Pradesh",
    "summary": "Provides total financial assistance of ₹75,000 over 4 years (₹18,750 per year) directly to middle-aged women belonging to marginalized communities to set up grocery stores, dairy units, goat rearing, or retail micro-enterprises in partnership with corporate partners (Amul, ITC, P&G, Reliance).",
    "financial_benefit": "₹75,000 total assistance (₹18,750 / year direct cash grant)",
    "eligibility_criteria": {
      "min_age": 45,
      "max_age": 60,
      "max_annual_income": 144000,
      "gender": [
        "Female"
      ],
      "social_categories": [
        "SC",
        "ST",
        "OBC",
        "Minority"
      ],
      "occupations": [
        "Homemaker",
        "Women Entrepreneur",
        "Self Employed",
        "Daily Wage Worker"
      ],
      "states": [
        "Andhra Pradesh"
      ],
      "rural_income_limit": 120000,
      "urban_income_limit": 144000
    },
    "rag_clauses": [
      "Clause 1.2: Eligible woman must be between 45 and 60 years of age on the date of notification and belong to SC, ST, BC, or Minority communities.",
      "Clause 2.1: Annual family income must not exceed Rs. 10,000 per month in rural areas and Rs. 12,000 per month in urban areas.",
      "Clause 3.3: Total assistance of Rs. 75,000 is disbursed in 4 equal annual tranches of Rs. 18,750 each.",
      "Clause 4.1: Technical and marketing support is extended via tie-ups with Amul, AP Dairy, Reliance, and ITC for retail & livestock ventures."
    ],
    "required_documents": [
      "Aadhaar Card of the applicant woman",
      "Caste Certificate (SC/ST/BC/Minority) from Navasakam / MeeSeva",
      "Integrated Rice Card (Ration Card) / BPL Card",
      "Age proof certificate (Birth Certificate / 10th TC / Voter ID)",
      "Aadhaar-seeded Bank Account Passbook"
    ],
    "portal_url": "https://ap.meeseva.gov.in/",
    "application_mode": "Gram / Ward Sachivalayam & Navasakam Portal",
    "application_deadline": "Annual Notification (Navasakam Calendar)",
    "tags": [
      "andhra pradesh",
      "women",
      "cheyutha",
      "sc st bc",
      "dbt",
      "livelihood",
      "amul",
      "micro enterprise"
    ],
    "official_portal_url": "https://ap.meeseva.gov.in/"
  },
  {
    "id": "state-tn-magalir-urimai-023",
    "name": "Kalaignar Magalir Urimai Thittam - Tamil Nadu",
    "ministry": "Special Programme Implementation Department, Govt of Tamil Nadu",
    "category": "Women & Family Welfare",
    "level": "State",
    "target_beneficiary": "Eligible women family heads across Tamil Nadu",
    "summary": "Landmark Universal Basic Income scheme granting ₹1,000 per month (₹12,000 per year) direct cash benefit to women family heads recognizing their unpaid domestic labor and boosting economic independence.",
    "financial_benefit": "₹1,000 / month Direct Cash Benefit (₹12,000 per year)",
    "eligibility_criteria": {
      "min_age": 21,
      "max_age": 100,
      "max_annual_income": 250000,
      "gender": [
        "Female"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Homemaker",
        "Women Entrepreneur",
        "Self Employed",
        "Unemployed"
      ],
      "states": [
        "Tamil Nadu"
      ],
      "max_electricity_consumption_units": 3600
    },
    "rag_clauses": [
      "Clause 1.1: Woman listed as the head of family in Smart Smart Ration Card or eldest adult female member is eligible.",
      "Clause 2.2: Family annual income must be below Rs 2.50 Lakhs; family holding must be less than 5 acres of wet land or 10 acres of dry land.",
      "Clause 3.1: Electricity consumption of the household must be under 3,600 units per year.",
      "Clause 4.3: Direct benefit transfer of Rs. 1,000 deposited on the 15th of every month into beneficiary's bank account."
    ],
    "required_documents": [
      "Smart Family Ration Card (Tamil Nadu PDS Card)",
      "Aadhaar Card of woman family head",
      "Bank Account Passbook (Aadhaar Linked)",
      "Electricity Consumer Number (TANGEDCO Bill)"
    ],
    "portal_url": "https://kmut.tn.gov.in/",
    "application_mode": "e-Sevai Centers / Ration Shop Camps",
    "application_deadline": "Continuous Enrollment",
    "tags": [
      "tamil nadu",
      "women",
      "magalir urimai",
      "basic income",
      "1000 per month",
      "dbt",
      "kmut"
    ],
    "official_portal_url": "https://www.tn.gov.in/"
  },
  {
    "id": "state-tn-pudhumai-penn-024",
    "name": "Moovalur Ramamirtham Pudhumai Penn Scheme - Tamil Nadu",
    "ministry": "Social Welfare & Women Empowerment Dept, Govt of Tamil Nadu",
    "category": "Education & Scholarship",
    "level": "State",
    "target_beneficiary": "Girl students from Tamil Nadu Govt schools pursuing higher education",
    "summary": "Provides monthly financial assistance of ₹1,000 directly into the bank accounts of female students pursuing undergraduate degrees, polytechnic diplomas, or professional courses until graduation.",
    "financial_benefit": "₹1,000 / month until course completion (₹36,000 - ₹50,000 total)",
    "eligibility_criteria": {
      "min_age": 17,
      "max_age": 25,
      "max_annual_income": null,
      "gender": [
        "Female"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Student",
        "Youth"
      ],
      "states": [
        "Tamil Nadu"
      ],
      "school_type": "Govt School (Class 6-12)"
    },
    "rag_clauses": [
      "Clause 1.1: Girl students who studied from Standard 6 to Standard 12 in Tamil Nadu Government schools are eligible.",
      "Clause 2.3: Eligible for all recognized higher education programs including BA, BSc, BCom, BTech/BE, MBBS, BDS, LLB, Diploma and ITI.",
      "Clause 3.2: Monthly stipend of Rs. 1,000 is paid directly through DBT during every active semester until graduation.",
      "Clause 4.1: Students already availing other educational scholarships can also simultaneously receive Pudhumai Penn benefits."
    ],
    "required_documents": [
      "School Bonafide / Transfer Certificate (TC) certifying study from Class 6 to 12 in Govt School",
      "College / University Admission Bonafide Certificate & Student ID",
      "Aadhaar Card",
      "Bank Passbook in student's name (Aadhaar seeded)",
      "10th and 12th Standard Marksheets"
    ],
    "portal_url": "https://www.tn.gov.in/",
    "application_mode": "Online through College Nodal Officer / Portal",
    "application_deadline": "Academic Year Admission Cycles",
    "tags": [
      "tamil nadu",
      "education",
      "girl student",
      "pudhumai penn",
      "scholarship",
      "higher education",
      "stipend"
    ],
    "official_portal_url": "https://www.tn.gov.in/"
  },
  {
    "id": "state-mh-ladki-bahin-025",
    "name": "Mukhyamantri Majhi Ladki Bahin Yojana - Maharashtra",
    "ministry": "Women & Child Development Department, Govt of Maharashtra",
    "category": "Women Empowerment",
    "level": "State",
    "target_beneficiary": "Women family heads aged 21-65 from low-income families in Maharashtra",
    "summary": "Flagship direct financial support scheme providing ₹1,500 per month (₹18,000 annually) direct cash assistance to women from economically disadvantaged families to foster self-reliance, nutrition, and health.",
    "financial_benefit": "₹1,500 / month Direct Cash Benefit (₹18,000 per year)",
    "eligibility_criteria": {
      "min_age": 21,
      "max_age": 65,
      "max_annual_income": 250000,
      "gender": [
        "Female"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Homemaker",
        "Women Entrepreneur",
        "Self Employed",
        "Unemployed"
      ],
      "states": [
        "Maharashtra"
      ],
      "is_maharashtra_domicile": true
    },
    "rag_clauses": [
      "Clause 1.2: Beneficiary woman must be a permanent resident of Maharashtra aged between 21 and 65 years.",
      "Clause 2.1: Combined family annual income from all sources must not exceed Rs 2.50 Lakhs (verified via Yellow/Orange Ration Card or Income Certificate).",
      "Clause 3.3: Direct monthly installment of Rs. 1,500 is transferred via Aadhaar Payment Bridge (APB) to the beneficiary's own bank account.",
      "Clause 4.1: Applications can be filed online via Nari Shakti Doot App, Aaple Sarkar, or through Anganwadi / Setu Suvidha Kendra."
    ],
    "required_documents": [
      "Aadhaar Card of the applicant woman",
      "Maharashtra Domicile Certificate / Ration Card / Voter ID / 15-year School LC",
      "Yellow or Orange Ration Card / Income Certificate (below ₹2.5L)",
      "Aadhaar-linked Bank Passbook (single holder)",
      "Hamipatra (Self-Declaration Form)"
    ],
    "portal_url": "https://mahadbt.maharashtra.gov.in/",
    "application_mode": "Nari Shakti Doot App / Aaple Sarkar / Setu Kendra",
    "application_deadline": "Continuous Enrollment",
    "tags": [
      "maharashtra",
      "women",
      "ladki bahin",
      "dbt",
      "financial aid",
      "nari shakti",
      "monthly cash"
    ],
    "official_portal_url": "https://mahadbt.maharashtra.gov.in/"
  },
  {
    "id": "state-mh-namo-shetkari-026",
    "name": "Namo Shetkari Mahasanman Nidhi Yojana - Maharashtra",
    "ministry": "Department of Agriculture, Govt of Maharashtra",
    "category": "Agriculture & Farming",
    "level": "State",
    "target_beneficiary": "All landholding farmer families in Maharashtra registered under PM-KISAN",
    "summary": "State supplementary grant providing ₹6,000 per year in 3 equal installments of ₹2,000 each, matching the Central PM-KISAN benefit so that farmers in Maharashtra receive a combined ₹12,000 per year.",
    "financial_benefit": "₹6,000 / year (Combined ₹12,000/yr with PM-KISAN)",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 100,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Farmer",
        "Smallholder",
        "Cultivator"
      ],
      "states": [
        "Maharashtra"
      ],
      "land_ownership_required": true,
      "pm_kisan_registered": true
    },
    "rag_clauses": [
      "Clause 1.1: All farmers in Maharashtra approved and active in the PM-KISAN portal database are automatically covered.",
      "Clause 2.1: State Government credits Rs 2,000 per installment for 3 cycles (total Rs 6,000/year) into verified DBT bank accounts.",
      "Clause 3.2: 7/12 land extract and 8-A khata must be digitally linked to farmer's Aadhaar on MahaDBT.",
      "Clause 4.3: Landholding e-KYC must be completed on PM-KISAN portal."
    ],
    "required_documents": [
      "7/12 (Satbara) & 8-A Land Extract Document",
      "Aadhaar Card linked with PM-KISAN registration",
      "Bank Account Passbook (NPCI mapped)",
      "PM-KISAN Beneficiary ID Number"
    ],
    "portal_url": "https://mahadbt.maharashtra.gov.in/",
    "application_mode": "Direct Auto-Credit via PM-KISAN integration & MahaDBT",
    "application_deadline": "Continuous Seasonal Installments",
    "tags": [
      "maharashtra",
      "agriculture",
      "farmer",
      "namo shetkari",
      "pm kisan topup",
      "dbt",
      "crop assistance"
    ],
    "official_portal_url": "https://mahadbt.maharashtra.gov.in/"
  },
  {
    "id": "state-up-kanya-sumangala-027",
    "name": "Mukhyamantri Kanya Sumangala Yojana - Uttar Pradesh",
    "ministry": "Women and Child Development Department, Govt of Uttar Pradesh",
    "category": "Women & Child Welfare",
    "level": "State",
    "target_beneficiary": "Girl children and students born and residing in Uttar Pradesh",
    "summary": "Structured conditional cash grant providing up to ₹25,000 in 6 key milestone installments from birth, vaccinations, school admissions (Class 1, 6, 9) to graduation / degree admission to end female foeticide and promote girls' higher education.",
    "financial_benefit": "Up to ₹25,000 Total Milestone Cash Grant",
    "eligibility_criteria": {
      "min_age": 0,
      "max_age": 22,
      "max_annual_income": 300000,
      "gender": [
        "Female"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Student",
        "Youth",
        "Homemaker"
      ],
      "states": [
        "Uttar Pradesh"
      ],
      "max_girls_per_family": 2
    },
    "rag_clauses": [
      "Clause 1.2: Family must be a permanent resident of Uttar Pradesh with annual family income not exceeding Rs. 3.00 Lakhs.",
      "Clause 2.1: Six milestone installments: Stage 1 (Birth) - Rs 5,000; Stage 2 (Vaccination) - Rs 2,000; Stage 3 (Class 1 Admission) - Rs 3,000; Stage 4 (Class 6 Admission) - Rs 3,000; Stage 5 (Class 9 Admission) - Rs 5,000; Stage 6 (Graduation/Diploma) - Rs 7,000.",
      "Clause 3.4: Maximum of two girl children per family eligible (or three in case of twin girls in second delivery).",
      "Clause 4.1: Direct DBT transfer into parent/guardian bank account (or student's account for Stage 6)."
    ],
    "required_documents": [
      "UP Domicile Certificate / Permanent Residence Proof",
      "Aadhaar Card of Parent/Guardian and Child",
      "Birth Certificate of Girl Child",
      "Income Certificate (under ₹3,00,000/year)",
      "Vaccination Card / School Admission Certificate (as per milestone stage)",
      "Bank Passbook (Joint account with mother or applicant)"
    ],
    "portal_url": "https://mksy.up.gov.in/",
    "application_mode": "Online via MKSY Portal / CSC Jan Seva Kendra",
    "application_deadline": "Stage-wise Open Enrollment",
    "tags": [
      "uttar pradesh",
      "girl child",
      "kanya sumangala",
      "education",
      "milestone grant",
      "women welfare",
      "up"
    ],
    "official_portal_url": "https://mksy.up.gov.in/"
  },
  {
    "id": "state-up-odop-028",
    "name": "One District One Product (ODOP) Margin Money Scheme - Uttar Pradesh",
    "ministry": "MSME and Export Promotion Department, Govt of Uttar Pradesh",
    "category": "MSME & Traditional Artisans",
    "level": "State",
    "target_beneficiary": "Artisans, weavers, and craftspersons manufacturing UP district ODOP products",
    "summary": "Credit-linked capital margin money subsidy providing up to 25% project cost subsidy (up to ₹20 Lakhs grant) and interest subvention for setting up modern manufacturing, packaging, and processing units of specialized district craft products.",
    "financial_benefit": "Up to ₹20 Lakhs Government Margin Money Grant (up to 25% subsidy)",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 60,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Artisan",
        "Weaver",
        "MSME Owner",
        "Self Employed"
      ],
      "states": [
        "Uttar Pradesh"
      ],
      "min_education": "8th Pass"
    },
    "rag_clauses": [
      "Clause 1.3: Projects for manufacturing or processing designated ODOP products of the respective 75 districts of UP are eligible.",
      "Clause 2.1: Margin money subsidy rates: Projects up to Rs 25L - 25% subsidy (max Rs 6.25L); Rs 25L to 50L - 20% subsidy (max Rs 10L); Rs 50L to 1 Cr - 15% subsidy (max Rs 15L); Above Rs 1 Cr - 10% (max Rs 20 Lakhs).",
      "Clause 3.2: Additional 2% interest subvention for women, SC, ST, and OBC entrepreneurs for the first 3 years.",
      "Clause 4.1: Loan sanctioned by nationalized banks, RRBs, or commercial banks."
    ],
    "required_documents": [
      "Aadhaar Card and PAN Card",
      "UP Resident Certificate",
      "Educational Qualification Certificate",
      "Detailed Project Report (DPR) for designated ODOP product unit",
      "Bank Loan Sanction / In-principle Letter",
      "Caste Certificate (if claiming special concession)"
    ],
    "portal_url": "https://odopup.in/",
    "application_mode": "Online via DIUP MSME Portal / Nivesh Mitra",
    "application_deadline": "Ongoing Year-Round",
    "tags": [
      "uttar pradesh",
      "odop",
      "artisan",
      "msme",
      "subsidy",
      "manufacturing",
      "crafts",
      "margin money",
      "up"
    ],
    "official_portal_url": "https://odopup.in/"
  },
  {
    "id": "state-gu-mahila-utkarsh-029",
    "name": "Mukhyamantri Mahila Utkarsh Yojana (MMUY) - Gujarat",
    "ministry": "Women & Child Development Department, Govt of Gujarat",
    "category": "Women & Microfinance",
    "level": "State",
    "target_beneficiary": "10-member Joint Liability Women Earning Groups in Gujarat",
    "summary": "Provides ₹1,00,000 completely interest-free loans (0% interest, where all bank interest is 100% paid by the Gujarat State Government) to 10-member women self-help and joint earning groups to initiate micro-businesses, retail shops, tailoring, food catering, and handicrafts.",
    "financial_benefit": "₹1,00,000 Zero-Interest Loan (100% Interest Subvention by State Govt)",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 59,
      "max_annual_income": null,
      "gender": [
        "Female"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Women Entrepreneur",
        "Self Employed",
        "Homemaker"
      ],
      "states": [
        "Gujarat"
      ],
      "group_size_min": 10
    },
    "rag_clauses": [
      "Clause 1.2: Group must comprise 10 women members formed as a Joint Liability Earning Group (JLEG) residing in Gujarat.",
      "Clause 2.1: Loan of Rs 1,00,000 provided per group with 0% interest to the women group (total interest amount directly paid to banks by state govt).",
      "Clause 3.3: Loan repayment period is 12 to 24 months in affordable monthly installments.",
      "Clause 4.2: Stamp duty, loan processing charges, and documentation fees are completely waived by the government."
    ],
    "required_documents": [
      "Aadhaar Cards of all 10 group members",
      "Gujarat Domicile / Ration Card copies",
      "Joint Liability Group (JLEG) formation resolution and bank account details",
      "Mobile numbers linked to Aadhaar",
      "Undertaking of proposed micro-enterprise business activity"
    ],
    "portal_url": "https://gujaratindia.gov.in/",
    "application_mode": "District Rural Development Agency (DRDA) / Urban Local Bodies / Banks",
    "application_deadline": "Continuous Group Sanctioning",
    "tags": [
      "gujarat",
      "women",
      "mmuy",
      "zero interest loan",
      "shg",
      "jleg",
      "microfinance",
      "mahila utkarsh"
    ],
    "official_portal_url": "https://services.india.gov.in/service/search?query=gujarat"
  },
  {
    "id": "state-pb-sarbat-sehat-030",
    "name": "Ayushman Bharat Sarbat Sehat Bima Yojana (SSBY) - Punjab",
    "ministry": "State Health Agency, Department of Health and Family Welfare, Govt of Punjab",
    "category": "Healthcare & Social Security",
    "level": "State",
    "target_beneficiary": "Farmer families, NFSA ration card holders, and workers in Punjab",
    "summary": "Flagship universal health protection scheme providing ₹5 Lakhs cashless secondary and tertiary hospitalization cover per family per year across 800+ empanelled government and private hospitals covering over 40 lakh families (75% of Punjab's population).",
    "financial_benefit": "₹5,00,000 / year Cashless Hospitalization Coverage per family",
    "eligibility_criteria": {
      "min_age": 0,
      "max_age": 100,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "All",
        "Farmer",
        "Daily Wage Worker",
        "MSME Owner",
        "Artisan",
        "Self Employed"
      ],
      "states": [
        "Punjab"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Covers NFSA ration card holders, J-form holding farmers, small traders registered with Excise & Taxation, and construction workers registered with BOCW board.",
      "Clause 2.3: Cashless treatment up to Rs 5,00,000 per family per year on a family floater basis across 1,579 medical and surgical packages.",
      "Clause 3.1: Pre-existing conditions are covered from day one of card activation.",
      "Clause 4.2: Treatment availed through Aadhaar e-KYC verified Sehat Card at any empanelled public or private network hospital."
    ],
    "required_documents": [
      "Aadhaar Card of all family members",
      "NFSA Blue / Smart Ration Card / Kisan J-Form / BOCW Registration Card",
      "Sarbat Sehat Bima Card (e-Card)",
      "Passport size photographs"
    ],
    "portal_url": "https://punjab.gov.in/",
    "application_mode": "Common Service Centers (CSC) / Sewa Kendras / Empanelled Hospitals",
    "application_deadline": "Open Year-Round",
    "tags": [
      "punjab",
      "healthcare",
      "sarbat sehat",
      "health insurance",
      "5 lakh cover",
      "cashless hospital",
      "sehat bima"
    ],
    "official_portal_url": "https://connect.punjab.gov.in/"
  },
  {
    "id": "state-kl-kudumbashree-031",
    "name": "Kudumbashree Micro-Enterprise Development & Revolving Fund - Kerala",
    "ministry": "Local Self Government Department, Govt of Kerala",
    "category": "MSME & Women Livelihoods",
    "level": "State",
    "target_beneficiary": "Women neighbourhood group (Ayalkoottam) members in Kerala",
    "summary": "Empowers women through interest-subsidized micro-credit, matching seed capital grants up to ₹2.5 Lakhs, technology support, and branding under Kudumbashree network for catering, agri-processing, garment manufacturing, IT, and home-care services.",
    "financial_benefit": "Up to ₹2.5 Lakhs Seed Capital Grant + Interest Subsidy (Loan at effective 4% interest)",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 65,
      "max_annual_income": null,
      "gender": [
        "Female"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Women Entrepreneur",
        "Self Employed",
        "Homemaker"
      ],
      "states": [
        "Kerala"
      ],
      "is_kudumbashree_nhg_member": true
    },
    "rag_clauses": [
      "Clause 1.2: Beneficiaries must be active members of registered Kudumbashree Neighbourhood Groups (Ayalkoottam) graded A or B.",
      "Clause 2.1: Technology grant and seed capital up to Rs 2,50,000 provided for collective micro-enterprises and Rs 50,000 for individual micro-enterprises.",
      "Clause 3.3: Interest subvention provided through 'Vaddi Samanyayam' scheme bringing down bank loan interest rate to effective 4% per annum.",
      "Clause 4.1: Free business development training, mentorship, and marketing through Kudumbashree Bazar and retail counters."
    ],
    "required_documents": [
      "Kudumbashree NHG Membership Passbook & CDS/ADS Grading Certificate",
      "Aadhaar Card of applicant / group members",
      "Bank Account Passbook (Joint NHG account)",
      "Micro-Enterprise Feasibility Project Plan",
      "Kerala Resident Certificate / Ration Card"
    ],
    "portal_url": "https://www.kudumbashree.org/",
    "application_mode": "Through Community Development Society (CDS) / Local Panchayat Office",
    "application_deadline": "Continuous Year-Round",
    "tags": [
      "kerala",
      "women",
      "kudumbashree",
      "shg",
      "micro enterprise",
      "seed grant",
      "interest subsidy",
      "ayalkoottam"
    ],
    "official_portal_url": "https://www.kudumbashree.org/"
  },
  {
    "id": "state-wb-lakshmir-bhandar-032",
    "name": "Lakshmir Bhandar Scheme - West Bengal",
    "ministry": "Department of Women & Child Development and Social Welfare, Govt of West Bengal",
    "category": "Women & Social Security",
    "level": "State",
    "target_beneficiary": "Women family heads aged 25-60 residing in West Bengal",
    "summary": "Direct basic income support scheme providing ₹1,200 per month for SC/ST women and ₹1,000 per month for General/OBC women directly transferred into their bank accounts to guarantee social protection and basic financial security.",
    "financial_benefit": "₹1,200/month (SC/ST) | ₹1,000/month (General/OBC) Direct Cash Benefit (₹12,000 - ₹14,400/yr)",
    "eligibility_criteria": {
      "min_age": 25,
      "max_age": 60,
      "max_annual_income": null,
      "gender": [
        "Female"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Homemaker",
        "Women Entrepreneur",
        "Self Employed",
        "Unemployed"
      ],
      "states": [
        "West Bengal"
      ],
      "govt_pensioners_ineligible": true
    },
    "rag_clauses": [
      "Clause 1.1: Every woman resident of West Bengal aged between 25 and 60 years is eligible, excluding government employees and regular pensioners.",
      "Clause 2.1: Monthly grant amount: Rs. 1,200 per month for SC and ST category women; Rs. 1,000 per month for all other categories.",
      "Clause 3.2: Direct benefit transfer deposited every month directly to single-operated Aadhaar-linked bank accounts.",
      "Clause 4.1: Applications submitted easily at Duare Sarkar (Government at Doorstep) camps across the state."
    ],
    "required_documents": [
      "Swasthya Sathi Card Number / Copy",
      "Aadhaar Card of the applicant woman",
      "Caste Certificate (for SC/ST higher assistance rate)",
      "Bank Account Passbook (Single holder, Aadhaar linked)",
      "Colour Passport size photograph"
    ],
    "portal_url": "https://wb.gov.in/",
    "application_mode": "Duare Sarkar Camps / BDO Office / Online Portal",
    "application_deadline": "Continuous & Duare Sarkar Seasonal Camps",
    "tags": [
      "west bengal",
      "women",
      "lakshmir bhandar",
      "dbt",
      "basic income",
      "sc st",
      "duare sarkar",
      "monthly cash"
    ],
    "official_portal_url": "https://wb.gov.in/"
  },
  {
    "id": "state-wb-krishak-bandhu-033",
    "name": "Krishak Bandhu (Assured Income & Death Benefit) - West Bengal",
    "ministry": "Department of Agriculture, Govt of West Bengal",
    "category": "Agriculture & Farming",
    "level": "State",
    "target_beneficiary": "All farmers and sharecroppers (Bhagchasi) in West Bengal",
    "summary": "Two-fold agricultural support scheme giving up to ₹10,000 per year (₹5,000 each in Kharif and Rabi seasons) direct crop input grant for farmers with 1+ acre land (pro-rata min ₹4,000/yr), plus ₹2 Lakhs death insurance grant for farmer families.",
    "financial_benefit": "Up to ₹10,000 / year Crop Input Grant + ₹2,00,000 Death Insurance Benefit",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 60,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Farmer",
        "Smallholder",
        "Cultivator"
      ],
      "states": [
        "West Bengal"
      ],
      "land_ownership_required": true
    },
    "rag_clauses": [
      "Clause 1.2: All farmers holding cultivable agricultural land (including recorded sharecroppers / bargadars) are eligible.",
      "Clause 2.1: Financial assistance of Rs 10,000 per year for 1 acre or more land in two installments; pro-rata minimum of Rs 4,000 per year for less than 1 acre.",
      "Clause 3.3: In the unfortunate event of death of a farmer aged 18 to 60, the family is granted Rs 2,00,000 unconditional financial compensation.",
      "Clause 4.1: Direct DBT credit before Kharif and Rabi sowing seasons."
    ],
    "required_documents": [
      "ROR (Khatian) / Land Record (Porcha) / Bargadar Registration Certificate",
      "Aadhaar Card and Voter ID Card (EPIC)",
      "Bank Account Passbook (IFSC & Account details)",
      "Mobile number registered with Krishak Bandhu"
    ],
    "portal_url": "https://wb.gov.in/",
    "application_mode": "Online / Assistant Director of Agriculture (ADA) Office / Duare Sarkar",
    "application_deadline": "Continuous & Pre-Sowing Cycles",
    "tags": [
      "west bengal",
      "agriculture",
      "farmer",
      "krishak bandhu",
      "crop subsidy",
      "death insurance",
      "dbt",
      "bargadar"
    ],
    "official_portal_url": "https://wb.gov.in/"
  },
  {
    "id": "state-ap-jagananna-thodu-034",
    "name": "YSR Jagananna Thodu - Andhra Pradesh",
    "ministry": "Municipal Administration & Urban Development, Govt of Andhra Pradesh",
    "category": "Livelihood & Credit",
    "level": "State",
    "target_beneficiary": "Small street vendors, vegetable/fruit sellers, push-cart hawkers, and traditional artisans",
    "summary": "Provides ₹10,000 annual collateral-free interest-free micro-credit directly into the bank accounts of small street vendors and push-cart hawkers, with the state government paying 100% of the interest.",
    "financial_benefit": "₹10,000/year Interest-Free Micro-Credit Loan (100% State Interest Subvention)",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 60,
      "max_annual_income": 120000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Street Vendor",
        "Daily Wage Worker",
        "Self Employed"
      ],
      "states": [
        "Andhra Pradesh"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Beneficiary must be an active street vendor operating with a vending cart, roadside stall, or head-load business in Andhra Pradesh.",
      "Clause 2.3: Total loan amount of Rs 10,000 is sanctioned through commercial banks and RRBs with full interest reimbursed by the State Government directly via DBT.",
      "Clause 3.2: Vendors who repay the loan within the stipulated 1-year tenure are eligible for enhanced successive loan slabs up to Rs 20,000."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Voter ID / AP Domicile Proof",
      "Street Vendor ID Card / ULB Town Vending Committee (TVC) Certificate",
      "Bank Passbook seeded with Aadhaar",
      "White Ration Card / AP Rice Card"
    ],
    "official_portal_url": "https://ap.meeseva.gov.in/",
    "tags": [
      "street vendor",
      "hawker",
      "jagananna thodu",
      "andhra pradesh",
      "zero interest loan",
      "working capital"
    ],
    "state": "Andhra Pradesh"
  },
  {
    "id": "state-mp-gramin-path-vikreta-035",
    "name": "Mukhyamantri Gramin Path Vikreta Yojana - Madhya Pradesh",
    "ministry": "Panchayat and Rural Development Department, Govt of Madhya Pradesh",
    "category": "Livelihood & Credit",
    "level": "State",
    "target_beneficiary": "Rural street vendors, small weekly market (haat-bazaar) sellers, and rural push-cart operators",
    "summary": "Provides ₹10,000 interest-free working capital loan for rural street vendors and weekly village market traders, with 100% interest subsidy and credit guarantee borne by the MP State Government.",
    "financial_benefit": "₹10,000 Working Capital Loan (100% Interest Subsidy paid by MP Govt)",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 55,
      "max_annual_income": 150000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Street Vendor",
        "Self Employed",
        "Daily Wage Worker"
      ],
      "states": [
        "Madhya Pradesh"
      ]
    },
    "rag_clauses": [
      "Clause 2.1: Applicable to street vendors residing in rural Gram Panchayat areas of Madhya Pradesh carrying out petty retail trades.",
      "Clause 3.4: Interest burden up to 14% is fully borne by the Government of MP; zero collateral or security required.",
      "Clause 4.1: Samagra ID and Gram Panchayat Vendor Certificate required for online portal registration."
    ],
    "required_documents": [
      "Aadhaar Card & Samagra ID",
      "Rural Street Vendor Registration Certificate from Gram Panchayat",
      "Bank Account Passbook",
      "Mobile Number"
    ],
    "official_portal_url": "https://samast.mponline.gov.in/",
    "tags": [
      "street vendor",
      "madhya pradesh",
      "rural vendor",
      "path vikreta",
      "interest free",
      "working capital"
    ],
    "state": "Madhya Pradesh"
  },
  {
    "id": "state-dl-street-vendor-036",
    "name": "Delhi Street Vendor Welfare & Micro-Credit Support - Delhi",
    "ministry": "Department of Urban Development, Govt of NCT of Delhi",
    "category": "Livelihood & Credit",
    "level": "State",
    "target_beneficiary": "Urban street vendors, weekly market traders, and push-cart operators in Delhi NCT",
    "summary": "Provides Town Vending Committee (TVC) legal vending certificates, designated vending zone allocations, 7% interest subvention on micro-credit loans up to ₹50,000, and welfare safety net coverage.",
    "financial_benefit": "₹10,000 - ₹50,000 Micro-Credit + 7% Interest Subsidy + Vending Protection",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 60,
      "max_annual_income": 200000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Street Vendor",
        "Self Employed",
        "Daily Wage Worker"
      ],
      "states": [
        "Delhi"
      ]
    },
    "rag_clauses": [
      "Clause 1.2: Vending rights and certificates issued under Delhi Street Vendors (Protection of Livelihood and Regulation of Street Vending) Scheme.",
      "Clause 3.1: Eligible for interest subsidy and collateral-free micro-credit through municipal urban development branches.",
      "Clause 4.3: Free enrollment into Delhi unorganized workers health and social security welfare boards."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Delhi Address Proof / Voter ID",
      "MCD / NDMC Town Vending Certificate / Survey Slip",
      "Bank Account Details"
    ],
    "official_portal_url": "https://delhi.gov.in/",
    "tags": [
      "street vendor",
      "delhi",
      "hawker",
      "tvc certificate",
      "urban vendor",
      "micro credit"
    ],
    "state": "Delhi"
  },
  {
    "id": "state-tg-mepma-vendor-037",
    "name": "Telangana MEPMA Urban Street Vendor Livelihood Scheme - Telangana",
    "ministry": "Municipal Administration and Urban Development Department, Govt of Telangana",
    "category": "Livelihood & Credit",
    "level": "State",
    "target_beneficiary": "Urban street vendors, vegetable/fruit sellers, and roadside micro-merchants in Telangana",
    "summary": "Offers digital smart identity cards, designated vending zone allotments, interest-subsidized credit up to ₹20,000, and QR-code digital cashback incentives for urban street vendors.",
    "financial_benefit": "₹10,000 - ₹20,000 Working Capital Loan + QR-Code Cashback + Smart ID Card",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 60,
      "max_annual_income": 180000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Street Vendor",
        "Self Employed"
      ],
      "states": [
        "Telangana"
      ]
    },
    "rag_clauses": [
      "Clause 2.1: Street vendors identified under Urban Local Bodies (ULBs) in Telangana receive digital identity cards and vending zone permits.",
      "Clause 3.3: Direct interest subvention credited on regular monthly EMI repayments.",
      "Clause 5.1: Special focus on women street vendors and SHG-assisted micro-retailing."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Telangana Food Security Card / Ration Card",
      "ULB / MEPMA Street Vendor Survey ID",
      "Bank Account Passbook"
    ],
    "official_portal_url": "https://tmepma.cgg.gov.in/",
    "tags": [
      "street vendor",
      "telangana",
      "mepma",
      "urban hawker",
      "working capital"
    ],
    "state": "Telangana"
  },
  {
    "id": "state-ap-nethanna-nestham-038",
    "name": "YSR Nethanna Nestham - Andhra Pradesh",
    "ministry": "Handlooms & Textiles Department, Govt of Andhra Pradesh",
    "category": "Livelihood & Credit",
    "level": "State",
    "target_beneficiary": "Handloom weaver families owning an operational loom in Andhra Pradesh",
    "summary": "Provides direct financial assistance of ₹24,000 every year to each eligible weaver family owning a handloom to modernize their looms and purchase high-quality raw materials.",
    "financial_benefit": "₹24,000/year Direct Bank Transfer (DBT) to Handloom Weavers",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 65,
      "max_annual_income": 120000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Weaver",
        "Artisan"
      ],
      "states": [
        "Andhra Pradesh"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Every handloom weaver family owning one or more handlooms is eligible for annual assistance of Rs 24,000.",
      "Clause 2.2: The amount is deposited directly into the beneficiary's Aadhaar-linked unencumbered bank account.",
      "Clause 3.1: The applicant must be verified by the Assistant Director of Handlooms & Textiles."
    ],
    "required_documents": [
      "Aadhaar Card",
      "AP Rice Card / White Ration Card",
      "Handloom Weaver Registration Certificate / Geo-tagged Loom ID",
      "Bank Account Passbook"
    ],
    "official_portal_url": "https://ap.meeseva.gov.in/",
    "tags": [
      "weaver",
      "artisan",
      "andhra pradesh",
      "nethanna nestham",
      "handloom",
      "dbt"
    ],
    "state": "Andhra Pradesh"
  },
  {
    "id": "state-ka-nekar-samman-039",
    "name": "Nekar Samman Yojana - Karnataka",
    "ministry": "Department of Handlooms & Textiles, Govt of Karnataka",
    "category": "Livelihood & Credit",
    "level": "State",
    "target_beneficiary": "Individual handloom and powerloom weavers operating in Karnataka",
    "summary": "Provides annual direct financial assistance of ₹5,000 to registered handloom and powerloom weavers through DBT to support livelihood, yarn purchase, and loom maintenance.",
    "financial_benefit": "₹5,000/year Direct Bank Transfer (DBT) to registered weavers",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 65,
      "max_annual_income": 200000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Weaver",
        "Artisan"
      ],
      "states": [
        "Karnataka"
      ]
    },
    "rag_clauses": [
      "Clause 1.2: All registered individual handloom weavers and powerloom weavers under the Department of Handlooms & Textiles receive Rs 5,000 per year.",
      "Clause 2.4: Payment is processed via Seva Sindhu through direct benefit transfer (DBT) into Aadhaar-seeded accounts.",
      "Clause 3.1: Weavers who have updated their weaver identity card in the Seva Sindhu portal are automatically enrolled."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Weaver Identification Card / Seva Sindhu Registration",
      "Ration Card",
      "Bank Account Passbook"
    ],
    "official_portal_url": "https://sevasindhu.karnataka.gov.in/",
    "tags": [
      "weaver",
      "artisan",
      "karnataka",
      "nekar samman",
      "handloom",
      "seva sindhu"
    ],
    "state": "Karnataka"
  },
  {
    "id": "state-gu-manav-kalyan-040",
    "name": "Manav Kalyan Yojana - Gujarat",
    "ministry": "Cottage and Rural Industries Department, Govt of Gujarat",
    "category": "Livelihood & Credit",
    "level": "State",
    "target_beneficiary": "Traditional artisans, craftspersons, cobblers, tailors, carpenters, potters, and rural laborers",
    "summary": "Provides 100% free modern specialized toolkit sets and equipment worth up to ₹20,000 across 28 traditional trades to self-employed artisans, cobblers, carpenters, and weavers in Gujarat.",
    "financial_benefit": "100% Free Advanced Toolkits & Equipment worth ₹15,000 - ₹20,000",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 60,
      "max_annual_income": 120000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Artisan",
        "Weaver",
        "Self Employed",
        "Daily Wage Worker"
      ],
      "states": [
        "Gujarat"
      ]
    },
    "rag_clauses": [
      "Clause 2.1: Available to citizens belonging to low-income groups in rural and urban Gujarat working in 28 designated artisan vocations.",
      "Clause 3.2: Toolkits are distributed free of cost directly by the District Cottage Industries Center without any repayment liability.",
      "Clause 4.1: Annual family income must not exceed Rs 1,20,000 in rural areas and Rs 1,50,000 in urban areas."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Income Certificate issued by Mamlatdar / TDO",
      "Caste Certificate (if SC/ST/OBC)",
      "Vocation / Trade Experience Proof or Certificate"
    ],
    "official_portal_url": "https://services.india.gov.in/service/search?query=gujarat",
    "tags": [
      "artisan",
      "gujarat",
      "manav kalyan",
      "free toolkit",
      "e-kutir",
      "weaver",
      "craftsman"
    ],
    "state": "Gujarat"
  },
  {
    "id": "state-rj-vishwakarma-kaushal-041",
    "name": "Rajasthan Vishwakarma Kaushal Samman Yojana - Rajasthan",
    "ministry": "Department of Industries and Commerce, Govt of Rajasthan",
    "category": "Livelihood & Credit",
    "level": "State",
    "target_beneficiary": "Traditional artisans, handicrafts workers, sculptors, blacksmiths, carpenters, and potters",
    "summary": "Provides ₹5,000 cash grant for purchasing modernized trade toolkits, skill upgradation training with ₹500/day stipend, and collateral-free subsidized credit up to ₹1,00,000.",
    "financial_benefit": "₹5,000 Direct Toolkit Grant + ₹500/day Training Stipend + Subsidized Loan",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 60,
      "max_annual_income": 250000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Artisan",
        "Weaver",
        "Self Employed"
      ],
      "states": [
        "Rajasthan"
      ]
    },
    "rag_clauses": [
      "Clause 1.2: Designed to revive and modernize traditional artisanal vocations across Rajasthan.",
      "Clause 2.3: Eligible artisans receive Rs 5,000 direct kit assistance on completion of training module.",
      "Clause 3.1: Jan Aadhaar card verification is mandatory for eligibility processing."
    ],
    "required_documents": [
      "Jan Aadhaar Card / Aadhaar Card",
      "Artisan Identity Card / DIC Registration",
      "Bank Account linked with Jan Aadhaar",
      "Passport-size photograph"
    ],
    "official_portal_url": "https://industries.rajasthan.gov.in/",
    "tags": [
      "artisan",
      "rajasthan",
      "vishwakarma",
      "handicrafts",
      "toolkit",
      "jan aadhaar"
    ],
    "state": "Rajasthan"
  },
  {
    "id": "state-ap-rythu-bharosa-042",
    "name": "YSR Rythu Bharosa - PM KISAN - Andhra Pradesh",
    "ministry": "Agriculture & Farmers Welfare Department, Govt of Andhra Pradesh",
    "category": "Agriculture & Rural Development",
    "level": "State",
    "target_beneficiary": "Small & marginal farmer families including SC, ST, BC, Minority tenant landless cultivators",
    "summary": "Provides ₹13,500 per year per farmer family in 3 installments for purchasing seeds, fertilizers, and agricultural inputs, including coverage for tenant farmers.",
    "financial_benefit": "₹13,500/year Direct Bank Transfer for Farm Inputs (including Tenant Farmers)",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 80,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Farmer",
        "Smallholder",
        "Cultivator"
      ],
      "states": [
        "Andhra Pradesh"
      ],
      "land_ownership_required": true
    },
    "rag_clauses": [
      "Clause 1.1: Financial assistance of Rs 13,500 per year is provided in three installments: Rs 7,500 in May, Rs 4,000 in October, and Rs 2,000 in January.",
      "Clause 2.2: Eligible tenant farmers belonging to SC, ST, BC, and Minority categories receive the full Rs 13,500 from the State Government.",
      "Clause 3.4: Free comprehensive crop insurance and zero-interest crop loans are provided to all Rythu Bharosa beneficiaries."
    ],
    "required_documents": [
      "Aadhaar Card",
      "AP Rice Card",
      "Pattadar Passbook / Land 1B Record (or Crop Cultivator Rights Card - CCRC for tenant farmers)",
      "Aadhaar-seeded Bank Passbook"
    ],
    "official_portal_url": "https://ap.meeseva.gov.in/",
    "tags": [
      "farmer",
      "andhra pradesh",
      "rythu bharosa",
      "pm kisan",
      "crop subsidy",
      "tenant farmer"
    ],
    "state": "Andhra Pradesh"
  },
  {
    "id": "state-mp-kisan-kalyan-043",
    "name": "Mukhyamantri Kisan Kalyan Yojana - Madhya Pradesh",
    "ministry": "Farmer Welfare and Agriculture Development Department, Govt of Madhya Pradesh",
    "category": "Agriculture & Rural Development",
    "level": "State",
    "target_beneficiary": "All landholding farmer families in Madhya Pradesh enrolled under PM-KISAN",
    "summary": "Provides ₹6,000 per year supplementary cash assistance directly from MP State Government in addition to PM-KISAN ₹6,000, bringing total annual farmer support to ₹12,000.",
    "financial_benefit": "₹6,000/year MP State Cash Grant (Total ₹12,000/year with PM-KISAN)",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 80,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Farmer",
        "Smallholder",
        "Cultivator"
      ],
      "states": [
        "Madhya Pradesh"
      ],
      "land_ownership_required": true
    },
    "rag_clauses": [
      "Clause 1.1: All beneficiary farmers registered under the PM-KISAN Samman Nidhi in Madhya Pradesh are automatically eligible.",
      "Clause 2.1: The state grant of Rs 6,000 is transferred in two equal installments of Rs 3,000 each via DBT.",
      "Clause 3.2: SAARA portal and Patwari land record verification confirm land ownership."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Samagra ID",
      "Khasra / Khatoni Land Record",
      "Bank Account linked with NPCI"
    ],
    "official_portal_url": "https://saara.mp.gov.in/",
    "tags": [
      "farmer",
      "madhya pradesh",
      "kisan kalyan",
      "saara portal",
      "samagra",
      "pm kisan"
    ],
    "state": "Madhya Pradesh"
  },
  {
    "id": "state-up-kisan-uday-044",
    "name": "UP Kisan Uday Yojana & Solar Pump Subsidy - Uttar Pradesh",
    "ministry": "Agriculture Department & UPNEDA, Govt of Uttar Pradesh",
    "category": "Agriculture & Rural Development",
    "level": "State",
    "target_beneficiary": "Small, marginal, and medium farmers in Uttar Pradesh",
    "summary": "Provides 70% to 90% capital subsidy on highly energy-efficient solar water pump sets (2 HP to 7.5 HP) and free electricity for agricultural tubewells to reduce irrigation costs to zero.",
    "financial_benefit": "70% - 90% Subsidy on Solar Irrigation Pumps + 100% Free Tubewell Power",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Farmer",
        "Smallholder",
        "Cultivator"
      ],
      "states": [
        "Uttar Pradesh"
      ],
      "land_ownership_required": true
    },
    "rag_clauses": [
      "Clause 1.2: Farmers with cultivable land and a functional boring/tubewell are eligible for solar pump installation.",
      "Clause 3.1: Up to 90% subsidy for SC/ST farmers and up to 70% subsidy for General/OBC farmers.",
      "Clause 4.2: Direct integration with PM-KUSUM Component-B for fast-track installation by UPNEDA."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Khatoni Land Record / Bhulekh UP Certificate",
      "Boring / Water Source Certificate",
      "Bank Passbook"
    ],
    "official_portal_url": "https://up.gov.in/",
    "tags": [
      "farmer",
      "uttar pradesh",
      "solar pump",
      "irrigation",
      "kisan uday",
      "free power"
    ],
    "state": "Uttar Pradesh"
  },
  {
    "id": "state-gu-kisan-sahay-045",
    "name": "Mukhya Mantri Kisan Sahay Yojana (MMKSY) - Gujarat",
    "ministry": "Agriculture, Farmers Welfare & Co-operation Department, Govt of Gujarat",
    "category": "Agriculture & Rural Development",
    "level": "State",
    "target_beneficiary": "All landholding farmers in Gujarat affected by drought, heavy rainfall, or unseasonal rains",
    "summary": "100% State-funded disaster crop loss compensation providing ₹20,000 to ₹25,000 per hectare for crop losses above 33% with zero premium paid by the farmer.",
    "financial_benefit": "₹20,000 - ₹25,000/hectare Crop Loss Relief with 0% Farmer Premium",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 80,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Farmer",
        "Smallholder",
        "Cultivator"
      ],
      "states": [
        "Gujarat"
      ],
      "land_ownership_required": true
    },
    "rag_clauses": [
      "Clause 1.1: All small, marginal, and large farmers registered under revenue records (8-A / 7/12) in Gujarat are covered.",
      "Clause 2.3: Crop loss between 33% and 60% receives Rs 20,000/ha; crop loss exceeding 60% receives Rs 25,000/ha up to max 4 hectares.",
      "Clause 3.1: No insurance premium is charged from farmers; 100% expenditure borne by Gujarat State Budget."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Gujarat Land Record (7/12 and 8-A Utara)",
      "Bank Account Passbook",
      "Crop Sowing Certificate / Talati Verification"
    ],
    "official_portal_url": "https://services.india.gov.in/service/search?query=gujarat",
    "tags": [
      "farmer",
      "gujarat",
      "kisan sahay",
      "crop insurance",
      "ikhedut",
      "disaster relief"
    ],
    "state": "Gujarat"
  },
  {
    "id": "state-ap-vidya-deevena-046",
    "name": "Jagananna Vidya Deevena & Vasathi Deevena - Andhra Pradesh",
    "ministry": "Higher Education & Social Welfare Department, Govt of Andhra Pradesh",
    "category": "Education & Student Aid",
    "level": "State",
    "target_beneficiary": "College students pursuing ITI, Polytechnic, Degree, Engineering, Medicine, and Post Graduation in AP",
    "summary": "Provides 100% full fee reimbursement paid directly to the college + ₹20,000/year maintenance allowance credited directly to mother's account for hostel food and lodging.",
    "financial_benefit": "100% Full Tuition Fee Reimbursement + ₹20,000/year Hostel & Mess Allowance",
    "eligibility_criteria": {
      "min_age": 16,
      "max_age": 28,
      "max_annual_income": 250000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Student",
        "Youth"
      ],
      "states": [
        "Andhra Pradesh"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Full tuition fee reimbursement (Jagananna Vidya Deevena) is credited on quarterly basis.",
      "Clause 2.2: Vasathi Deevena provides Rs 10,000 for ITI, Rs 15,000 for Polytechnic, and Rs 20,000 for Degree/Engineering/Medicine courses per year.",
      "Clause 3.4: Mandatory 75% student attendance required for scholarship disbursement."
    ],
    "required_documents": [
      "Aadhaar Card of Student & Mother",
      "AP Rice Card / Income Certificate (< ₹2.5 Lakh)",
      "College Admission & Bonafide Certificate",
      "Mother's Bank Account Passbook"
    ],
    "official_portal_url": "https://jnanabhumi.ap.gov.in/",
    "tags": [
      "student",
      "andhra pradesh",
      "vidya deevena",
      "scholarship",
      "fee reimbursement",
      "higher education"
    ],
    "state": "Andhra Pradesh"
  },
  {
    "id": "state-up-tablet-smartphone-047",
    "name": "UP Swami Vivekananda Youth Empowerment Free Smartphone/Tablet Scheme - Uttar Pradesh",
    "ministry": "Department of IT & Electronics, Govt of Uttar Pradesh",
    "category": "Education & Student Aid",
    "level": "State",
    "target_beneficiary": "Final year and enrolled students in Higher Education, Technical, Medical, Skill, and Degree colleges in UP",
    "summary": "Distributes 100% free high-configuration 4G/5G tablets and smartphones with digital study materials, employment portal access, and skill software pre-installed to over 25 lakh youth every year.",
    "financial_benefit": "100% Free 4G/5G Smartphone or Tablet with Pre-loaded Educational Tools",
    "eligibility_criteria": {
      "min_age": 17,
      "max_age": 30,
      "max_annual_income": 200000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Student",
        "Youth"
      ],
      "states": [
        "Uttar Pradesh"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Enrolled regular students of Graduate, Post Graduate, Diploma, ITI, Skill, and Nursing courses in UP are eligible.",
      "Clause 2.3: Distribution managed through the DigiShakti portal in collaboration with educational institutes.",
      "Clause 3.1: Zero fees or security deposit required from the student."
    ],
    "required_documents": [
      "Aadhaar Card",
      "College Identity Card / Enrollment Number",
      "UP Domicile Certificate",
      "Income Certificate"
    ],
    "official_portal_url": "https://digishakti.up.gov.in/",
    "tags": [
      "student",
      "uttar pradesh",
      "digishakti",
      "free tablet",
      "smartphone",
      "youth empowerment"
    ],
    "state": "Uttar Pradesh"
  },
  {
    "id": "state-wb-student-credit-card-048",
    "name": "West Bengal Student Credit Card Scheme - West Bengal",
    "ministry": "Higher Education Department, Govt of West Bengal",
    "category": "Education & Student Aid",
    "level": "State",
    "target_beneficiary": "Students residing in West Bengal for last 10 years pursuing secondary to doctoral education",
    "summary": "Provides collateral-free, guarantor-free education loan up to ₹10,00,000 at a nominal simple interest rate of 4% with 100% State Government credit guarantee and 15-year flexible repayment.",
    "financial_benefit": "Up to ₹10 Lakhs Collateral-Free Education Loan @4% Simple Interest",
    "eligibility_criteria": {
      "min_age": 16,
      "max_age": 40,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Student",
        "Youth"
      ],
      "states": [
        "West Bengal"
      ]
    },
    "rag_clauses": [
      "Clause 1.2: Applicable for courses in schools, madrasahs, colleges, universities, professional/technical institutions in India or abroad.",
      "Clause 2.1: Maximum loan amount Rs 10 Lakhs with 1% interest concession if interest is served during study period.",
      "Clause 4.1: Repayment starts 1 year after completion of course or securing employment."
    ],
    "required_documents": [
      "Aadhaar Card / Student ID",
      "Address & Domicile Proof of WB",
      "Course Admission Receipt & Fee Structure",
      "Co-borrower PAN Card & Bank Details"
    ],
    "official_portal_url": "https://wb.gov.in/",
    "tags": [
      "student",
      "west bengal",
      "student credit card",
      "education loan",
      "higher education"
    ],
    "state": "West Bengal"
  },
  {
    "id": "state-dl-education-loan-049",
    "name": "Delhi Higher Education and Skill Development Guarantee Scheme - Delhi",
    "ministry": "Department of Higher Education, Govt of NCT of Delhi",
    "category": "Education & Student Aid",
    "level": "State",
    "target_beneficiary": "Students who have completed Class 10/12 in Delhi pursuing higher education or skill diplomas",
    "summary": "Provides 100% collateral-free education loans up to ₹10,00,000 without any third-party guarantee, backed by the Higher Education and Skill Development Credit Guarantee Fund of Delhi Govt.",
    "financial_benefit": "Up to ₹10 Lakhs Collateral-Free Higher Education Loan backed by Delhi Govt",
    "eligibility_criteria": {
      "min_age": 16,
      "max_age": 30,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Student",
        "Youth"
      ],
      "states": [
        "Delhi"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Covers tuition fees, examination fees, library, laboratory, hostel charges, and book/equipment expenses.",
      "Clause 2.2: Repayment period of 15 years with a 1-year moratorium after course completion.",
      "Clause 3.1: Delhi Government provides 100% default credit guarantee to participating banks."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Delhi Class 10th / 12th Marksheet",
      "College Admission Proof & Fee Schedule",
      "Bank Account Details"
    ],
    "official_portal_url": "https://delhi.gov.in/",
    "tags": [
      "student",
      "delhi",
      "education loan",
      "credit guarantee",
      "skill development"
    ],
    "state": "Delhi"
  },
  {
    "id": "state-mh-vasatigruh-bhatta-050",
    "name": "Dr. Panjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojana - Maharashtra",
    "ministry": "Higher & Technical Education Department, Govt of Maharashtra",
    "category": "Education & Student Aid",
    "level": "State",
    "target_beneficiary": "Children of registered small/marginal farmers and unorganized workers pursuing professional degrees in MH",
    "summary": "Provides annual hostel and maintenance allowance of ₹30,000 (Mumbai/Pune/Nagpur) or ₹20,000 (other cities) for 10 months to students admitted to technical, medical, and professional degree courses.",
    "financial_benefit": "₹20,000 - ₹30,000/year Hostel & Maintenance Living Allowance",
    "eligibility_criteria": {
      "min_age": 17,
      "max_age": 28,
      "max_annual_income": 800000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Student",
        "Youth"
      ],
      "states": [
        "Maharashtra"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Open to students whose parent is a registered small/marginal farmer or registered unorganized laborer with annual income under Rs 8 Lakh.",
      "Clause 2.3: Disbursed directly into student bank account via MahaDBT portal in two installments.",
      "Clause 3.1: Student must be enrolled in an approved AICTE/DTE/DME technical or professional course."
    ],
    "required_documents": [
      "Aadhaar Card",
      "MahaDBT Registration Details",
      "Parent's Small Farmer / Land Record or Construction Worker Registration",
      "College Admission Receipt & Hostel Allotment Proof"
    ],
    "official_portal_url": "https://mahadbt.maharashtra.gov.in/",
    "tags": [
      "student",
      "maharashtra",
      "mahadbt",
      "hostel allowance",
      "panjabrao deshmukh",
      "higher education"
    ],
    "state": "Maharashtra"
  },
  {
    "id": "state-ka-cmegp-051",
    "name": "Karnataka Chief Minister's Employment Generation Programme (CMEGP) - Karnataka",
    "ministry": "Commerce & Industries Department, Govt of Karnataka",
    "category": "MSME & Entrepreneurship",
    "level": "State",
    "target_beneficiary": "Micro & Small entrepreneurs, rural youth, women, and self-employed units in Karnataka",
    "summary": "Provides up to ₹25 Lakhs project finance with 25% to 35% government capital subsidy (up to ₹8.75 Lakhs) for setting up new manufacturing and service micro-enterprises.",
    "financial_benefit": "25% to 35% Government Capital Subsidy (Up to ₹8.75 Lakhs) on loans up to ₹25L",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 45,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "MSME Owner",
        "Women Entrepreneur",
        "Self Employed",
        "Youth"
      ],
      "states": [
        "Karnataka"
      ]
    },
    "rag_clauses": [
      "Clause 1.2: Project cost up to Rs 25 Lakh for manufacturing and Rs 10 Lakh for service enterprises.",
      "Clause 2.1: Subsidy rate is 35% for SC/ST/Women/Minority/Rural entrepreneurs and 25% for General urban entrepreneurs.",
      "Clause 4.1: Beneficiary contribution is only 5% for special categories and 10% for general category."
    ],
    "required_documents": [
      "Aadhaar Card & PAN Card",
      "Detailed Project Report (DPR)",
      "Education Qualification Certificate (8th pass minimum for projects > ₹5L)",
      "Caste / Domicile Certificate"
    ],
    "official_portal_url": "https://sevasindhu.karnataka.gov.in/",
    "tags": [
      "msme",
      "karnataka",
      "cmegp",
      "capital subsidy",
      "entrepreneurship",
      "business loan"
    ],
    "state": "Karnataka"
  },
  {
    "id": "state-mh-cmegp-052",
    "name": "Chief Minister Employment Generation Programme (CMEGP) - Maharashtra",
    "ministry": "Industries Department & Directorate of Industries, Govt of Maharashtra",
    "category": "MSME & Entrepreneurship",
    "level": "State",
    "target_beneficiary": "New first-generation entrepreneurs, youth, and women setting up micro-enterprises in MH",
    "summary": "Offers bank-linked project financing up to ₹50 Lakhs for manufacturing and ₹10 Lakhs for service sector with 15% to 35% capital subsidy backed by the Government of Maharashtra.",
    "financial_benefit": "15% - 35% Capital Subsidy (Max ₹17.5 Lakhs) on project loans up to ₹50 Lakhs",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 50,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "MSME Owner",
        "Women Entrepreneur",
        "Self Employed",
        "Youth"
      ],
      "states": [
        "Maharashtra"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Maximum project cost Rs 50 Lakhs for manufacturing sector and Rs 10 Lakhs for service/business sector.",
      "Clause 2.3: Subsidy is 35% for Special Categories (SC/ST/Women/Ex-Servicemen/Handicapped/Rural) and 25% for General Rural.",
      "Clause 4.2: Application processed through single-window MahaCMEGP portal with bank branch integration."
    ],
    "required_documents": [
      "Aadhaar Card & PAN Card",
      "Project Report / Business Plan",
      "Maharashtra Domicile Certificate",
      "Caste Certificate (if applicable)"
    ],
    "official_portal_url": "https://maha-cmegp.gov.in/",
    "tags": [
      "msme",
      "maharashtra",
      "cmegp",
      "subsidy",
      "entrepreneurship",
      "business loan"
    ],
    "state": "Maharashtra"
  },
  {
    "id": "state-tn-uyegp-053",
    "name": "Unemployed Youth Employment Generation Programme (UYEGP) - Tamil Nadu",
    "ministry": "Micro, Small and Medium Enterprises Department, Govt of Tamil Nadu",
    "category": "MSME & Entrepreneurship",
    "level": "State",
    "target_beneficiary": "Unemployed youth, small business owners, and rural entrepreneurs in Tamil Nadu",
    "summary": "Provides project finance up to ₹15 Lakhs for manufacturing, ₹5 Lakhs for service, and ₹5 Lakhs for business with 25% government subsidy (up to ₹1.25 Lakhs) directly through DIC Tamil Nadu.",
    "financial_benefit": "25% State Capital Subsidy on MSME project loans up to ₹15 Lakhs",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 45,
      "max_annual_income": 500000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "MSME Owner",
        "Self Employed",
        "Unemployed",
        "Youth"
      ],
      "states": [
        "Tamil Nadu"
      ]
    },
    "rag_clauses": [
      "Clause 1.2: Minimum educational qualification is 8th standard pass.",
      "Clause 2.1: Government subsidy is 25% of the project cost subject to a maximum of Rs 1,25,000.",
      "Clause 3.3: Promoter contribution is 10% for General category and 5% for Special categories (SC/ST/BC/MBC/Minorities/Women)."
    ],
    "required_documents": [
      "Aadhaar Card",
      "8th / 10th / 12th Pass Marksheet",
      "Community / Caste Certificate",
      "Project Quotation / Estimation"
    ],
    "official_portal_url": "https://www.tn.gov.in/",
    "tags": [
      "msme",
      "tamil nadu",
      "uyegp",
      "unemployed youth",
      "capital subsidy",
      "business startup"
    ],
    "state": "Tamil Nadu"
  },
  {
    "id": "state-rj-mlupy-054",
    "name": "Mukhyamantri Laghu Udyog Protsahan Yojana (MLUPY) - Rajasthan",
    "ministry": "Department of Industries and Commerce, Govt of Rajasthan",
    "category": "MSME & Entrepreneurship",
    "level": "State",
    "target_beneficiary": "Manufacturing, service, and trading micro and small enterprises in Rajasthan",
    "summary": "Provides subsidized collateral-free bank loans up to ₹10 Crores with 5% to 8% annual interest subsidy for establishing new enterprises or expanding existing business units.",
    "financial_benefit": "5% - 8% Annual Interest Subsidy on business loans up to ₹10 Crores",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 65,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "MSME Owner",
        "Women Entrepreneur",
        "Self Employed"
      ],
      "states": [
        "Rajasthan"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: 8% interest subsidy on loans up to Rs 25 Lakhs, 6% on loans from Rs 25L to Rs 5 Crores, and 5% on loans from Rs 5Cr to Rs 10 Crores.",
      "Clause 2.2: Available for both Term Loans (machinery/shed) and Working Capital Composite Loans.",
      "Clause 3.1: 100% online application and verification via Rajasthan Single Sign-On (SSO)."
    ],
    "required_documents": [
      "Jan Aadhaar Card & Aadhaar Card",
      "Project Report / Quotations",
      "Bank Account Statement",
      "PAN Card & Udyam Registration (if existing unit)"
    ],
    "official_portal_url": "https://industries.rajasthan.gov.in/",
    "tags": [
      "msme",
      "rajasthan",
      "mlupy",
      "interest subsidy",
      "business loan",
      "sso portal"
    ],
    "state": "Rajasthan"
  },
  {
    "id": "state-ka-bocw-welfare-055",
    "name": "Karnataka Building & Other Construction Workers Welfare Scheme - Karnataka",
    "ministry": "Karnataka Building and Other Construction Workers Welfare Board (KBOCWWB)",
    "category": "Social Welfare & Safety Nets",
    "level": "State",
    "target_beneficiary": "Registered construction laborers, daily wage building workers, carpenters, masons, and painters",
    "summary": "Provides free professional toolkits, ₹5,000 annual health grant, ₹50,000 marriage assistance, ₹5,000 maternity assistance, children education scholarships up to ₹25,000, and ₹3,000/month pension.",
    "financial_benefit": "Free Toolkits + ₹50,000 Marriage Grant + ₹25,000 Scholarship + ₹3,000/mo Pension",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 60,
      "max_annual_income": 180000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Daily Wage Worker",
        "Self Employed",
        "Unemployed"
      ],
      "states": [
        "Karnataka"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Worker must have completed at least 90 days of construction or daily wage labor in the preceding 12 months.",
      "Clause 2.4: Free toolkits and safety kits distributed directly at Seva Sindhu / Taluk Labor offices.",
      "Clause 3.2: Direct DBT transfer for maternity, funeral, accident insurance, and children's higher education fees."
    ],
    "required_documents": [
      "Aadhaar Card",
      "KBOCWWB Smart Card / Labor Registration Certificate",
      "90-Day Work Certificate from Contractor / Gram Panchayat / Labor Officer",
      "Bank Passbook seeded with Aadhaar"
    ],
    "official_portal_url": "https://kbocwwb.karnataka.gov.in/",
    "tags": [
      "daily wage worker",
      "karnataka",
      "bocw",
      "construction laborer",
      "mason",
      "labor welfare"
    ],
    "state": "Karnataka"
  },
  {
    "id": "state-mh-bandhkam-kamgar-056",
    "name": "Maharashtra Bandhkam Kamgar Kalyan Yojana (BOCW) - Maharashtra",
    "ministry": "Maharashtra Building and Other Construction Worker's Welfare Board",
    "category": "Social Welfare & Safety Nets",
    "level": "State",
    "target_beneficiary": "Registered construction workers, daily wage laborers, painters, electricians, and masons",
    "summary": "Provides ₹5,000 direct annual Diwali safety kit grant, free essential household kitchen set, toolkits, ₹30,000 marriage assistance, and ₹10,000 - ₹50,000 education scholarships for children.",
    "financial_benefit": "Free Household & Tool Kits + ₹30,000 Marriage Aid + ₹50,000 Education Grant",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 60,
      "max_annual_income": 200000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Daily Wage Worker",
        "Self Employed",
        "Unemployed"
      ],
      "states": [
        "Maharashtra"
      ]
    },
    "rag_clauses": [
      "Clause 1.2: Registered workers with 90 days working proof get direct benefit of essential kit and cash transfers.",
      "Clause 2.1: Free annual health check-up and Rs 5 Lakhs health insurance coverage.",
      "Clause 3.4: Scholarship for children pursuing engineering, medical, or diploma degrees."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Maharashtra BOCW Registration Card",
      "90-Day Work Experience Certificate",
      "Bank Account Details"
    ],
    "official_portal_url": "https://mahabocw.in/",
    "tags": [
      "daily wage worker",
      "maharashtra",
      "mahabocw",
      "construction worker",
      "labor welfare"
    ],
    "state": "Maharashtra"
  },
  {
    "id": "state-dl-construction-worker-057",
    "name": "Delhi Construction Worker Welfare & Financial Assistance - Delhi",
    "ministry": "Delhi Building and Other Construction Workers Welfare Board (DBOCWWB)",
    "category": "Social Welfare & Safety Nets",
    "level": "State",
    "target_beneficiary": "Registered daily wage construction workers and unorganized laborers in Delhi NCT",
    "summary": "Provides ₹5,000 seasonal/pollution relief cash transfers during construction bans, free DTC bus passes, ₹55,000 marriage assistance, ₹10,000 annual education grant, and ₹3,000/month pension.",
    "financial_benefit": "₹5,000 Seasonal Relief Grant + ₹55,000 Marriage Aid + Free Public Bus Passes",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 60,
      "max_annual_income": 180000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Daily Wage Worker",
        "Self Employed",
        "Unemployed"
      ],
      "states": [
        "Delhi"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Direct transfer of Rs 5,000 during GRAP-3 / GRAP-4 construction ban periods in winter.",
      "Clause 2.3: Maternity benefit of Rs 30,000 for female construction workers.",
      "Clause 3.1: Free bus travel across all DTC and cluster buses in NCT of Delhi."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Delhi Address Proof",
      "DBOCWWB Smart Card / Registration Slip",
      "90-Day Work Certificate"
    ],
    "official_portal_url": "https://delhi.gov.in/",
    "tags": [
      "daily wage worker",
      "delhi",
      "dbocwwb",
      "construction worker",
      "pollution relief",
      "dtc pass"
    ],
    "state": "Delhi"
  },
  {
    "id": "state-up-shramik-kalyan-058",
    "name": "UP Shramik Kalyan & Sant Ravidas Shiksha Protsahan - Uttar Pradesh",
    "ministry": "Labor Department, Govt of Uttar Pradesh",
    "category": "Social Welfare & Safety Nets",
    "level": "State",
    "target_beneficiary": "Registered unorganized workers, daily wage laborers, carpenters, and masons in UP",
    "summary": "Provides free bicycles for workers, ₹12,000 to ₹24,000/year children education stipends, ₹55,000 marriage grant (Kanya Vivah), and ₹1,000/month old age pension through the UP BOCW Board.",
    "financial_benefit": "Free Bicycle + ₹55,000 Marriage Grant + Up to ₹24,000/yr Education Scholarship",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 60,
      "max_annual_income": 150000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Daily Wage Worker",
        "Self Employed",
        "Unemployed"
      ],
      "states": [
        "Uttar Pradesh"
      ]
    },
    "rag_clauses": [
      "Clause 1.2: Registered workers with 90 days work slip get free bicycle for commuting to work sites.",
      "Clause 2.4: Sant Ravidas Shiksha Protsahan grants up to Rs 2,000/month for children studying from Class 1 to graduation.",
      "Clause 3.2: Direct DBT deposit on e-district UP portal."
    ],
    "required_documents": [
      "Aadhaar Card",
      "UP BOCW Shramik Registration Card",
      "90-Day Work Slip / Self Declaration",
      "Bank Passbook"
    ],
    "official_portal_url": "https://upbocw.in/",
    "tags": [
      "daily wage worker",
      "uttar pradesh",
      "upbocw",
      "shramik kalyan",
      "free bicycle",
      "scholarship"
    ],
    "state": "Uttar Pradesh"
  },
  {
    "id": "state-bh-udyami-059",
    "name": "Mukhyamantri Udyami Yojana - Bihar",
    "ministry": "Industries Department, Govt of Bihar",
    "category": "MSME & Entrepreneurship",
    "level": "State",
    "target_beneficiary": "Youth, Women, SC, ST, EBC, and Minorities setting up new manufacturing/service units in Bihar",
    "summary": "Provides ₹10,00,000 total project finance: ₹5,00,000 as a 100% direct non-refundable grant (50% subsidy) and ₹5,00,000 as an interest-free loan repayable in 84 easy installments.",
    "financial_benefit": "₹5 Lakhs Free Grant + ₹5 Lakhs Interest-Free Loan (Total ₹10 Lakhs Project Support)",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 50,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "MSME Owner",
        "Women Entrepreneur",
        "Self Employed",
        "Youth",
        "Unemployed",
        "Weaver",
        "Artisan"
      ],
      "states": [
        "Bihar"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Applicant must be a permanent resident of Bihar with 10+2 / Intermediate / ITI / Polytechnic / Diploma or equivalent qualification.",
      "Clause 2.1: Total maximum project cost Rs 10 Lakhs. 50% is provided as direct state grant and remaining 50% as 0% interest loan (1% for general males).",
      "Clause 3.2: 84 equal monthly installments for loan repayment starting 1 year after unit establishment."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Bihar Domicile Certificate",
      "10+2 / ITI / Graduation Marksheet",
      "Caste Certificate (for SC/ST/EBC)",
      "Bank Account Passbook / Cancelled Cheque",
      "PAN Card"
    ],
    "official_portal_url": "https://udyami.bihar.gov.in/",
    "tags": [
      "msme",
      "bihar",
      "udyami yojana",
      "subsidy",
      "interest free",
      "startup"
    ],
    "state": "Bihar"
  },
  {
    "id": "state-bh-student-credit-card-060",
    "name": "Bihar Student Credit Card Scheme (MNSSBY) - Bihar",
    "ministry": "Education Department & Bihar State Higher Education Council, Govt of Bihar",
    "category": "Education & Student Aid",
    "level": "State",
    "target_beneficiary": "12th pass students from Bihar pursuing Higher, Technical, Professional, and Medical education",
    "summary": "Provides education loan up to ₹4,00,000 with 100% state credit guarantee at a nominal interest rate of 1% for females/transgender/PWD and 4% for males, with repayment starting after employment.",
    "financial_benefit": "Up to ₹4,00,000 Education Loan @1% - 4% Interest with 100% Bihar Govt Guarantee",
    "eligibility_criteria": {
      "min_age": 17,
      "max_age": 25,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Student",
        "Youth"
      ],
      "states": [
        "Bihar"
      ]
    },
    "rag_clauses": [
      "Clause 1.2: Applicable for over 80 designated technical, medical, management, and degree courses in Bihar or other states in India.",
      "Clause 2.3: Covers institutional fees, books, laptops, hostel accommodation, and mess expenses.",
      "Clause 4.1: Moratorium period is course duration plus 1 year or 6 months after securing a job."
    ],
    "required_documents": [
      "Aadhaar Card of Student and Co-applicant",
      "10th and 12th Pass Marksheets",
      "Admission Proof / Fee Structure from Recognized College",
      "Bihar Resident Certificate"
    ],
    "official_portal_url": "https://www.7nishchay-yuvaupmission.bihar.gov.in/",
    "tags": [
      "student",
      "bihar",
      "student credit card",
      "higher education",
      "mnssby"
    ],
    "state": "Bihar"
  },
  {
    "id": "state-bh-fasal-sahayata-061",
    "name": "Bihar Rajya Fasal Sahayata Yojana (BRFSY) - Bihar",
    "ministry": "Cooperative Department, Govt of Bihar",
    "category": "Agriculture & Rural Development",
    "level": "State",
    "target_beneficiary": "Small, marginal, and tenant (Gair-Raiyat) farmers in Bihar cultivating Kharif and Rabi crops",
    "summary": "100% State-funded crop insurance relief providing ₹7,500/hectare (for loss up to 20%) and ₹10,000/hectare (for loss > 20%) with zero insurance premium paid by the farmer.",
    "financial_benefit": "₹7,500 - ₹10,000/hectare Direct Crop Loss Assistance with 0% Farmer Premium",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 80,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Farmer",
        "Smallholder",
        "Cultivator"
      ],
      "states": [
        "Bihar"
      ],
      "land_ownership_required": true
    },
    "rag_clauses": [
      "Clause 1.1: Covers both landowning (Raiyat) farmers and tenant/sharecroppers (Gair-Raiyat) cultivating in Bihar.",
      "Clause 2.1: No premium is charged from the farmers. 100% compensation paid directly by State Government.",
      "Clause 3.2: Direct benefit transfer to DBT Agriculture portal linked bank accounts."
    ],
    "required_documents": [
      "Aadhaar Card",
      "LPC (Land Possession Certificate) or Revenue Receipt (for Raiyat) / Self Declaration (for Gair-Raiyat)",
      "Bank Passbook",
      "Kharif/Rabi Sowing Self-Declaration"
    ],
    "official_portal_url": "https://serviceonline.bihar.gov.in/",
    "tags": [
      "farmer",
      "bihar",
      "fasal sahayata",
      "crop loss relief",
      "tenant farmer",
      "brfsy"
    ],
    "state": "Bihar"
  },
  {
    "id": "state-bh-shramik-kalyan-062",
    "name": "Bihar Building & Other Construction Worker Welfare Scheme - Bihar",
    "ministry": "Labor Resources Department, Govt of Bihar",
    "category": "Social Welfare & Safety Nets",
    "level": "State",
    "target_beneficiary": "Registered construction workers, daily wage laborers, masons, carpenters, and street vendors in Bihar",
    "summary": "Provides ₹5,000 annual medical/safety grant, ₹50,000 daughter marriage grant (Pitra Vivah), ₹25,000 educational scholarship, free clothing grant, and ₹3,000/month old age pension.",
    "financial_benefit": "₹5,000 Health Grant + ₹50,000 Marriage Aid + ₹25,000 Scholarship + ₹3,000/mo Pension",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 60,
      "max_annual_income": 150000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Daily Wage Worker",
        "Street Vendor",
        "Artisan",
        "Self Employed",
        "Unemployed",
        "Weaver"
      ],
      "states": [
        "Bihar"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Open to all unorganized construction workers with at least 90 days of work in preceding year.",
      "Clause 2.3: Annual grant of Rs 5,000 deposited in bank account for health and safety equipment.",
      "Clause 3.1: Financial support for purchasing bicycle and tools for registered laborers."
    ],
    "required_documents": [
      "Aadhaar Card",
      "BOCW Labor Registration Card",
      "90-Day Work Certificate from Contractor / Panchayat",
      "Bank Account Details"
    ],
    "official_portal_url": "https://serviceonline.bihar.gov.in/",
    "tags": [
      "daily wage worker",
      "bihar",
      "bocw",
      "street vendor",
      "labor welfare",
      "shramik"
    ],
    "state": "Bihar"
  },
  {
    "id": "state-as-orunodoi-063",
    "name": "Orunodoi 2.0 Scheme - Assam",
    "ministry": "Finance Department, Govt of Assam",
    "category": "Social Welfare & Safety Nets",
    "level": "State",
    "target_beneficiary": "Poor and economically vulnerable women family heads and widows in Assam",
    "summary": "Provides direct unconditional monthly basic income of ₹1,400 credited directly into the bank account of the woman head of the household to purchase medicines, food essentials, and nutrition.",
    "financial_benefit": "₹1,400/month (₹16,800/year) Direct Bank Transfer to Women Beneficiaries",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 65,
      "max_annual_income": 200000,
      "gender": [
        "Female"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Homemaker",
        "Women Entrepreneur",
        "Self Employed",
        "Daily Wage Worker",
        "Unemployed"
      ],
      "states": [
        "Assam"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Beneficiary must be a female head of an eligible family residing permanently in Assam.",
      "Clause 2.2: Monthly sum of Rs 1,400 is credited automatically on the 10th of every month via DBT.",
      "Clause 3.1: Special priority for households with widows, unmarried women over 35, divorced women, and disabled family members."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Assam Ration Card / Family ID",
      "Bank Account seeded with Aadhaar (Woman account only)",
      "Income Certificate (< ₹2 Lakh)"
    ],
    "official_portal_url": "https://assam.gov.in/",
    "tags": [
      "women",
      "assam",
      "orunodoi",
      "direct benefit",
      "cash transfer",
      "family head"
    ],
    "state": "Assam"
  },
  {
    "id": "state-as-swanirbhar-nari-064",
    "name": "Swanirbhar Nari Handloom Weavers Scheme - Assam",
    "ministry": "Handloom, Textiles & Sericulture Department, Govt of Assam",
    "category": "Livelihood & Credit",
    "level": "State",
    "target_beneficiary": "Indigenous women handloom weavers and traditional artisans in Assam",
    "summary": "Ensures direct government procurement of traditional handloom products (Gamosa, Mekhela Chador, Aronai, Dokhona) directly from registered indigenous women weavers at guaranteed fair prices.",
    "financial_benefit": "Guaranteed 100% Direct Product Procurement at Benchmark Fair Prices + Loom Grants",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 65,
      "max_annual_income": 250000,
      "gender": [
        "All",
        "Female",
        "Male"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Weaver",
        "Artisan",
        "Women Entrepreneur",
        "Self Employed"
      ],
      "states": [
        "Assam"
      ]
    },
    "rag_clauses": [
      "Clause 1.2: Indigenous women weavers sell their woven handloom items directly to ARTFED and AGMC without middlemen.",
      "Clause 2.1: Payment is made directly into weaver bank accounts within 4 days of procurement.",
      "Clause 3.3: 31 traditional handloom items covered under minimum guaranteed benchmark procurement prices."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Weaver Registration Card / Yarn Card",
      "Bank Passbook",
      "Assam Domicile Certificate"
    ],
    "official_portal_url": "https://assam.gov.in/",
    "tags": [
      "weaver",
      "artisan",
      "assam",
      "swanirbhar nari",
      "handloom",
      "gamosa",
      "procurement"
    ],
    "state": "Assam"
  },
  {
    "id": "state-as-krishi-sajuli-065",
    "name": "Chief Minister Krishi Sa-Sajuli Yojana - Assam",
    "ministry": "Agriculture Department, Govt of Assam",
    "category": "Agriculture & Rural Development",
    "level": "State",
    "target_beneficiary": "Small and marginal farmers across all districts of Assam",
    "summary": "Provides direct financial assistance of ₹5,000 per farmer family through DBT for purchasing modern farm tools, implements, seed drills, and agricultural sprayers.",
    "financial_benefit": "₹5,000 Direct Cash Assistance for Purchasing Agricultural Tools & Implements",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Farmer",
        "Smallholder",
        "Cultivator"
      ],
      "states": [
        "Assam"
      ],
      "land_ownership_required": true
    },
    "rag_clauses": [
      "Clause 1.1: Small and marginal farmers with cultivable land in Assam receive Rs 5,000 direct bank grant.",
      "Clause 2.3: Funds are specifically dedicated to farm mechanization and input toolkits.",
      "Clause 3.1: Selection by District Level Committee headed by District Agriculture Officer."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Land Patta / Revenue Receipt (Jamabandi)",
      "Kisan Credit Card (if available)",
      "Bank Account Details"
    ],
    "official_portal_url": "https://diragri.assam.gov.in/",
    "tags": [
      "farmer",
      "assam",
      "krishi sa sajuli",
      "farm tools",
      "mechanization",
      "crop input"
    ],
    "state": "Assam"
  },
  {
    "id": "state-as-youth-swarojgar-066",
    "name": "Mukhya Mantri Karma Sanyog & Atmanirbhar Assam Scheme - Assam",
    "ministry": "Skill, Employment & Entrepreneurship Department, Govt of Assam",
    "category": "MSME & Entrepreneurship",
    "level": "State",
    "target_beneficiary": "Educated unemployed youth, street vendors, small retailers, and micro-entrepreneurs in Assam",
    "summary": "Provides ₹2,00,000 financial support (₹1 Lakh grant + ₹1 Lakh interest-free loan) in two installments for establishing self-employment ventures in agriculture, trade, packaging, and services.",
    "financial_benefit": "₹1,00,000 Direct Grant + ₹1,00,000 Interest-Free Loan (Total ₹2 Lakhs Support)",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 40,
      "max_annual_income": 300000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "MSME Owner",
        "Youth",
        "Student",
        "Street Vendor",
        "Self Employed",
        "Unemployed",
        "Daily Wage Worker"
      ],
      "states": [
        "Assam"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Open to unemployed youth with minimum 10th standard qualification registered on Assam Employment Exchange portal.",
      "Clause 2.1: First installment of Rs 1 Lakh provided upon completion of 3-day entrepreneurship training.",
      "Clause 3.4: Applicable across petty trade, manufacturing, agro-processing, food carts, and technical workshops."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Employment Exchange Registration Card",
      "Class 10th / 12th Certificate",
      "Detailed Business Plan / Proposal",
      "Bank Account Passbook"
    ],
    "official_portal_url": "https://assam.gov.in/",
    "tags": [
      "msme",
      "assam",
      "atmanirbhar assam",
      "youth startup",
      "self employment",
      "street vendor"
    ],
    "state": "Assam"
  },
  {
    "id": "state-od-kalia-067",
    "name": "KALIA Scheme (Krushak Assistance for Livelihood and Income Augmentation) - Odisha",
    "ministry": "Agriculture & Farmers' Empowerment Department, Govt of Odisha",
    "category": "Agriculture & Rural Development",
    "level": "State",
    "target_beneficiary": "Small/marginal farmers, sharecroppers, and landless agricultural households in Odisha",
    "summary": "Provides ₹10,000/year (₹4,000 in Kharif & Rabi) to small farmers + ₹12,500 livelihood grant for landless agricultural laborers + ₹2,00,000 life and accident insurance cover.",
    "financial_benefit": "₹10,000/year for Farmers | ₹12,500 for Landless Laborers + ₹2 Lakh Insurance",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Farmer",
        "Smallholder",
        "Cultivator",
        "Daily Wage Worker"
      ],
      "states": [
        "Odisha"
      ],
      "land_ownership_required": false
    },
    "rag_clauses": [
      "Clause 1.1: Direct transfer of Rs 10,000 per family for purchasing seeds, fertilizers, and pesticides.",
      "Clause 2.3: Landless agricultural laborers receive Rs 12,500 for goat rearing, duckery, poultry, or mushroom cultivation units.",
      "Clause 3.2: 0% interest crop loan up to Rs 50,000 for all KALIA beneficiaries."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Ration Card / BSKY Card",
      "Land Record (for farmers) / Village Labor Certificate (for landless laborers)",
      "Bank Account Passbook"
    ],
    "official_portal_url": "https://odisha.gov.in/",
    "tags": [
      "farmer",
      "odisha",
      "kalia",
      "landless labor",
      "crop assistance",
      "daily wage worker"
    ],
    "state": "Odisha"
  },
  {
    "id": "state-od-mission-shakti-068",
    "name": "Mission Shakti Micro-Credit & SHG Enterprise Scheme - Odisha",
    "ministry": "Department of Mission Shakti, Govt of Odisha",
    "category": "MSME & Entrepreneurship",
    "level": "State",
    "target_beneficiary": "Women Self Help Groups (SHGs), women entrepreneurs, and rural artisans in Odisha",
    "summary": "Provides zero-interest bank loans up to ₹5,00,000 for women SHGs and individual women entrepreneurs, with 100% interest subvention paid directly by the Odisha Government.",
    "financial_benefit": "Up to ₹5,00,000 0% Interest Business Loan + ₹1,50,000 Revolving Enterprise Capital",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 60,
      "max_annual_income": null,
      "gender": [
        "Female"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Women Entrepreneur",
        "Homemaker",
        "MSME Owner",
        "Artisan",
        "Self Employed",
        "Weaver"
      ],
      "states": [
        "Odisha"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: 0% interest on loans up to Rs 5 Lakhs for SHGs taking up business activities in food processing, textiles, retail, and handicrafts.",
      "Clause 2.2: Interest subvention amount is reimbursed directly via DBT into group bank account.",
      "Clause 3.4: Guaranteed government procurement preference for Mission Shakti manufactured goods."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Mission Shakti SHG Registration ID",
      "Group Bank Account Statement",
      "Business Plan / Micro-Credit Proposal"
    ],
    "official_portal_url": "https://missionshakti.odisha.gov.in/",
    "tags": [
      "women",
      "odisha",
      "mission shakti",
      "zero interest",
      "shg loan",
      "msme",
      "artisan"
    ],
    "state": "Odisha"
  },
  {
    "id": "state-od-student-scholarship-069",
    "name": "Kalia Chhatra Brutti / Odisha State Higher Education Scholarship - Odisha",
    "ministry": "Higher Education & Agriculture Department, Govt of Odisha",
    "category": "Education & Student Aid",
    "level": "State",
    "target_beneficiary": "Children of small farmers, landless agricultural workers, and SC/ST/OBC students in Odisha",
    "summary": "Provides 100% full financial assistance covering college tuition fees, examination fees, hostel accommodation, and mess charges for students pursuing MBBS, Engineering, MBA, MCA, ITI, and Agriculture.",
    "financial_benefit": "100% Complete Tuition, Hostel, and Mess Fee Coverage for Professional Degrees",
    "eligibility_criteria": {
      "min_age": 16,
      "max_age": 28,
      "max_annual_income": 250000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Student",
        "Youth"
      ],
      "states": [
        "Odisha"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Open to children of KALIA beneficiaries admitted to government or approved premier private professional colleges.",
      "Clause 2.3: Covers total annual expenditure on course fees, hostel accommodation, and examination costs without any ceiling.",
      "Clause 3.2: Direct DBT deposit through Odisha State Scholarship Portal."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Parent's KALIA Beneficiary ID / Labor Card",
      "College Admission Receipt & Fee Structure",
      "Student Bank Account Passbook"
    ],
    "official_portal_url": "https://scholarship.odisha.gov.in/",
    "tags": [
      "student",
      "odisha",
      "scholarship",
      "kalia chhatra brutti",
      "free higher education"
    ],
    "state": "Odisha"
  },
  {
    "id": "state-od-urban-vendor-070",
    "name": "Odisha Urban Street Vendor Livelihood Support & Vending Zone Scheme - Odisha",
    "ministry": "Housing & Urban Development Department, Govt of Odisha",
    "category": "Livelihood & Credit",
    "level": "State",
    "target_beneficiary": "Urban street vendors, hawkers, tea/snack stall operators, and roadside micro-merchants in Odisha",
    "summary": "Provides dedicated modern kiosks in designated vending zones, ₹10,000 to ₹30,000 working capital assistance with 100% interest subvention, and biometric smart vending cards.",
    "financial_benefit": "Allotment in Designated Vending Zone + ₹10,000 - ₹30,000 Subsidized Credit",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 60,
      "max_annual_income": 150000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Street Vendor",
        "Self Employed",
        "Daily Wage Worker"
      ],
      "states": [
        "Odisha"
      ]
    },
    "rag_clauses": [
      "Clause 1.2: Vending rights protected under Town Vending Committee survey across all Municipal Corporations in Odisha.",
      "Clause 2.1: Credit linkage supported through SUDA and State Urban Livelihood Mission.",
      "Clause 3.1: Free accidental death and disability coverage up to Rs 2 Lakhs."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Odisha Domicile / Urban Resident Proof",
      "Municipality Street Vending ID / Survey Slip",
      "Bank Account Passbook"
    ],
    "official_portal_url": "https://odisha.gov.in/",
    "tags": [
      "street vendor",
      "odisha",
      "urban vendor",
      "suda",
      "working capital",
      "vending zone"
    ],
    "state": "Odisha"
  },
  {
    "id": "state-hr-bhavantar-bharpayee-071",
    "name": "Haryana Bhavantar Bharpayee Yojana (BBY) - Haryana",
    "ministry": "Agriculture & Farmers Welfare Department, Govt of Haryana",
    "category": "Agriculture & Rural Development",
    "level": "State",
    "target_beneficiary": "Horticulture, vegetable, and pulse cultivating farmers across Haryana",
    "summary": "Guarantees base benchmark prices for 21 horticulture crops (potatoes, onions, tomatoes, cauliflower, etc.) by directly compensating farmers for the price deficit if market selling price falls below the fixed base price.",
    "financial_benefit": "Direct Deficit Cash Compensation (₹500 - ₹2,000/quintal) for Horticulture Crops",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Farmer",
        "Smallholder",
        "Cultivator"
      ],
      "states": [
        "Haryana"
      ],
      "land_ownership_required": true
    },
    "rag_clauses": [
      "Clause 1.1: Covers 21 vegetable, fruit, and pulse crops cultivated in Haryana.",
      "Clause 2.3: Difference between market selling price and pre-declared base price is deposited directly via Meri Fasal Mera Byora portal.",
      "Clause 3.2: 100% state financed risk-mitigation scheme."
    ],
    "required_documents": [
      "Aadhaar Card & Parivar Pehchan Patra (PPP / Family ID)",
      "Meri Fasal Mera Byora Crop Registration",
      "Mandi J-Form / Produce Sale Receipt",
      "Bank Passbook"
    ],
    "official_portal_url": "https://fasal.haryana.gov.in/",
    "tags": [
      "farmer",
      "haryana",
      "bhavantar bharpayee",
      "horticulture",
      "meri fasal",
      "price support"
    ],
    "state": "Haryana"
  },
  {
    "id": "state-hr-matrushakti-udyamita-072",
    "name": "Haryana Matrushakti Udyamita Yojana - Haryana",
    "ministry": "Women & Child Development and Industries Department, Govt of Haryana",
    "category": "MSME & Entrepreneurship",
    "level": "State",
    "target_beneficiary": "Women entrepreneurs, female family heads, and self-employed women in Haryana",
    "summary": "Provides collateral-free business loans up to ₹3,00,000 with a 7% interest rebate paid by the Haryana Government for establishing small enterprises in trade, tailoring, beauty, retail, and manufacturing.",
    "financial_benefit": "Up to ₹3,00,000 Collateral-Free Business Loan with 7% State Interest Subsidy",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 60,
      "max_annual_income": 500000,
      "gender": [
        "Female"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Women Entrepreneur",
        "Homemaker",
        "MSME Owner",
        "Artisan",
        "Street Vendor",
        "Self Employed"
      ],
      "states": [
        "Haryana"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Open to female residents of Haryana verified through Parivar Pehchan Patra (PPP) with family income under Rs 5 Lakh.",
      "Clause 2.1: 7% interest subvention for 3 years on timely repayment.",
      "Clause 3.4: Implemented in partnership with Haryana Women Development Corporation (HWDC)."
    ],
    "required_documents": [
      "Aadhaar Card & Parivar Pehchan Patra (PPP ID)",
      "Project Proposal / Activity Details",
      "Haryana Domicile Certificate",
      "Bank Account Passbook"
    ],
    "official_portal_url": "https://wcdhry.gov.in/",
    "tags": [
      "women",
      "haryana",
      "matrushakti",
      "business loan",
      "interest subsidy",
      "msme",
      "street vendor"
    ],
    "state": "Haryana"
  },
  {
    "id": "state-hr-bocw-shramik-073",
    "name": "Haryana Construction Workers Welfare & Toolkit Financial Aid - Haryana",
    "ministry": "Haryana Building and Other Construction Workers Welfare Board (HBOCW)",
    "category": "Social Welfare & Safety Nets",
    "level": "State",
    "target_beneficiary": "Registered construction laborers, daily wage workers, carpenters, masons, and artisans in Haryana",
    "summary": "Provides ₹5,000 tool purchase grant, ₹50,000 daughter marriage assistance (Kanyadan), ₹10,000 annual education grant, free bicycles, and ₹2,750/month old age pension through the HBOCW Board.",
    "financial_benefit": "₹5,000 Toolkit Aid + ₹50,000 Marriage Grant + Free Bicycle + ₹2,750/mo Pension",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 60,
      "max_annual_income": 180000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Daily Wage Worker",
        "Artisan",
        "Weaver",
        "Self Employed",
        "Unemployed",
        "Street Vendor"
      ],
      "states": [
        "Haryana"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Construction worker with at least 90 days of work verified through Parivar Pehchan Patra.",
      "Clause 2.4: Free toolkits and safety accessories supplied directly to registered masons, carpenters, and electricians.",
      "Clause 3.1: Financial incentive for children excelling in 10th and 12th board examinations."
    ],
    "required_documents": [
      "Aadhaar Card & Parivar Pehchan Patra (PPP)",
      "HBOCW Registration Card / Labor ID",
      "90-Day Work Certificate",
      "Bank Passbook"
    ],
    "official_portal_url": "https://hrylabour.gov.in/",
    "tags": [
      "daily wage worker",
      "haryana",
      "hbocw",
      "artisan",
      "toolkit",
      "shramik welfare"
    ],
    "state": "Haryana"
  },
  {
    "id": "state-hr-student-scholarship-074",
    "name": "Haryana Post-Matric & Higher Education Merit Scholarship - Haryana",
    "ministry": "Higher Education Department, Govt of Haryana",
    "category": "Education & Student Aid",
    "level": "State",
    "target_beneficiary": "SC, BC, and EWS students pursuing Post-Matric, Technical, and Degree courses in Haryana",
    "summary": "Provides 100% full tuition fee reimbursement + ₹10,000/year annual maintenance allowance + free bus travel passes on Haryana Roadways for college students.",
    "financial_benefit": "100% Tuition Fee Waiver + ₹10,000/year Maintenance Allowance + Free Bus Travel",
    "eligibility_criteria": {
      "min_age": 16,
      "max_age": 28,
      "max_annual_income": 250000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Student",
        "Youth"
      ],
      "states": [
        "Haryana"
      ]
    },
    "rag_clauses": [
      "Clause 1.2: Applicable for all recognized government and private colleges/universities in Haryana.",
      "Clause 2.1: Full reimbursement of non-refundable tuition and examination fees directly through Har-Chhatravratti portal.",
      "Clause 3.3: Free transport pass on Haryana Roadways buses for college commuting."
    ],
    "required_documents": [
      "Aadhaar Card & Parivar Pehchan Patra (PPP ID)",
      "Caste / Income Certificate",
      "College Admission Fee Receipt",
      "Bank Account Passbook"
    ],
    "official_portal_url": "https://harchhatravratti.highereduhry.ac.in/",
    "tags": [
      "student",
      "haryana",
      "scholarship",
      "free bus pass",
      "tuition waiver",
      "har chhatravratti"
    ],
    "state": "Haryana"
  },
  {
    "id": "state-cg-mahtari-vandan-075",
    "name": "Mahtari Vandan Yojana - Chhattisgarh",
    "ministry": "Women & Child Development Department, Govt of Chhattisgarh",
    "category": "Social Welfare & Safety Nets",
    "level": "State",
    "target_beneficiary": "Married women aged 21-60 years residing permanently in Chhattisgarh",
    "summary": "Provides direct financial assistance of ₹1,000 per month (₹12,000 annually) transferred directly into the Aadhaar-linked bank accounts of married, widowed, and divorced women in Chhattisgarh.",
    "financial_benefit": "₹1,000/month (₹12,000/year) Direct Bank Transfer (DBT) to Women Beneficiaries",
    "eligibility_criteria": {
      "min_age": 21,
      "max_age": 60,
      "max_annual_income": 250000,
      "gender": [
        "Female"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Homemaker",
        "Women Entrepreneur",
        "Self Employed",
        "Daily Wage Worker",
        "Unemployed"
      ],
      "states": [
        "Chhattisgarh"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Beneficiary must be a married woman residing permanently in Chhattisgarh aged 21 years or older.",
      "Clause 2.1: Monthly DBT of Rs 1,000 credited on the 1st week of every month.",
      "Clause 3.2: Widowed, divorced, and abandoned women are fully eligible with priority enrollment."
    ],
    "required_documents": [
      "Aadhaar Card of Self and Husband",
      "Marriage Certificate / Ration Card / Voter ID",
      "Bank Account linked with Aadhaar / NPCI",
      "Domicile Certificate of Chhattisgarh"
    ],
    "official_portal_url": "https://cgstate.gov.in/",
    "tags": [
      "women",
      "chhattisgarh",
      "mahtari vandan",
      "direct cash",
      "dbt",
      "family head"
    ],
    "state": "Chhattisgarh"
  },
  {
    "id": "state-cg-kisan-nyay-076",
    "name": "Rajiv Gandhi / Krishi Unnati Kisan Nyay Yojana - Chhattisgarh",
    "ministry": "Agriculture & Farmers Welfare Department, Govt of Chhattisgarh",
    "category": "Agriculture & Rural Development",
    "level": "State",
    "target_beneficiary": "Paddy, maize, pulse, and sugarcane farmers in Chhattisgarh",
    "summary": "Provides crop input assistance up to ₹10,000 per acre (₹3,100/quintal guaranteed procurement price for paddy up to 21 quintals/acre) transferred directly into farmer bank accounts.",
    "financial_benefit": "Up to ₹10,000/acre Crop Input Grant + ₹3,100/quintal Guaranteed Crop Price",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 80,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Farmer",
        "Smallholder",
        "Cultivator"
      ],
      "states": [
        "Chhattisgarh"
      ],
      "land_ownership_required": true
    },
    "rag_clauses": [
      "Clause 1.1: Open to all registered farmers selling paddy and registered kharif crops in Primary Agricultural Credit Societies (PACS).",
      "Clause 2.3: Difference between MSP and Rs 3,100/quintal is deposited directly as state input assistance.",
      "Clause 3.1: Covers maximum 21 quintals per acre production yield."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Khasra / B-1 Land Record (Bhuiyan Portal)",
      "PACS Farmer Registration Token",
      "Bank Passbook"
    ],
    "official_portal_url": "https://kisan.cg.nic.in/",
    "tags": [
      "farmer",
      "chhattisgarh",
      "kisan nyay",
      "krishi unnati",
      "paddy procurement",
      "crop input"
    ],
    "state": "Chhattisgarh"
  },
  {
    "id": "state-cg-shramik-cycle-toolkit-077",
    "name": "Chhattisgarh Construction Worker Cycle & Toolkit Sahayata - Chhattisgarh",
    "ministry": "Labor Department & CG BOCW Board, Govt of Chhattisgarh",
    "category": "Social Welfare & Safety Nets",
    "level": "State",
    "target_beneficiary": "Registered daily wage construction workers, masons, street vendors, and craftspersons",
    "summary": "Provides 100% free safety toolkits, free heavy-duty bicycles for daily commute, ₹20,000 daughter marriage grant (Noni Suraksha), and ₹10,000 - ₹50,000 children education stipends.",
    "financial_benefit": "Free Bicycle + Free Trade Toolkits + ₹20,000 Marriage Grant + Education Stipends",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 60,
      "max_annual_income": 180000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Daily Wage Worker",
        "Street Vendor",
        "Artisan",
        "Self Employed",
        "Unemployed",
        "Weaver"
      ],
      "states": [
        "Chhattisgarh"
      ]
    },
    "rag_clauses": [
      "Clause 1.2: Registered workers with 90 days work slip get free bicycle for commuting to work sites.",
      "Clause 2.1: Free trade toolkits for carpenters, masons, plumbers, painters, and electricians.",
      "Clause 3.4: Special financial grant of Rs 10,000 under Mukhyamantri Nirman Shramik Awas Sahayata."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Chhattisgarh Shramik Registration Card",
      "90-Day Work Verification Certificate",
      "Bank Account Passbook"
    ],
    "official_portal_url": "https://cgstate.gov.in/",
    "tags": [
      "daily wage worker",
      "chhattisgarh",
      "shramik",
      "bocw",
      "free bicycle",
      "toolkit",
      "street vendor"
    ],
    "state": "Chhattisgarh"
  },
  {
    "id": "state-cg-yuva-swarojgar-078",
    "name": "Mukhyamantri Yuva Swarojgar Yojana - Chhattisgarh",
    "ministry": "Commerce & Industries Department, Govt of Chhattisgarh",
    "category": "MSME & Entrepreneurship",
    "level": "State",
    "target_beneficiary": "Youth, college graduates, and small entrepreneurs starting manufacturing or service enterprises in CG",
    "summary": "Provides bank project loans up to ₹25 Lakhs for industry, ₹10 Lakhs for service, and ₹2 Lakhs for business with 25% (up to ₹3.5 Lakhs) state capital subsidy and 5% interest subsidy for 5 years.",
    "financial_benefit": "25% Capital Subsidy (Up to ₹3.5 Lakhs) + 5% Interest Rebate on loans up to ₹25L",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 45,
      "max_annual_income": 300000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "MSME Owner",
        "Youth",
        "Student",
        "Self Employed",
        "Unemployed",
        "Weaver",
        "Artisan"
      ],
      "states": [
        "Chhattisgarh"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Minimum 8th standard qualification required for applicants.",
      "Clause 2.2: 25% margin money subsidy for General category (max Rs 1.5L for service, Rs 3.5L for industry) and 35% for SC/ST/Women/PWD.",
      "Clause 3.3: Collateral security waiver under CGTMSE credit guarantee."
    ],
    "required_documents": [
      "Aadhaar Card & PAN Card",
      "Chhattisgarh Resident Certificate",
      "8th / 10th / 12th Pass Marksheet",
      "Project Report & Machinery Quotations"
    ],
    "official_portal_url": "https://cgstate.gov.in/",
    "tags": [
      "msme",
      "chhattisgarh",
      "yuva swarojgar",
      "capital subsidy",
      "startup loan",
      "entrepreneurship"
    ],
    "state": "Chhattisgarh"
  },
  {
    "id": "state-wb-bhabishyat-cc-079",
    "name": "Bhabishyat Credit Card Scheme - West Bengal",
    "ministry": "Micro, Small & Medium Enterprises and Textiles Dept, Govt of West Bengal",
    "category": "MSME & Entrepreneurship",
    "level": "State",
    "target_beneficiary": "Youth, micro-entrepreneurs, street vendors, and artisans in West Bengal",
    "summary": "Provides bank project loans up to ₹5,00,000 for setting up micro manufacturing, service, or business enterprises, with 10% government subsidy (up to ₹25,000) and 85% state credit guarantee.",
    "financial_benefit": "Up to ₹5,00,000 Business Loan + 10% State Subsidy + 85% Credit Guarantee",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 45,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "MSME Owner",
        "Street Vendor",
        "Artisan",
        "Self Employed",
        "Unemployed",
        "Youth",
        "Weaver"
      ],
      "states": [
        "West Bengal"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Open to all residents of West Bengal for setting up new viable income-generating business projects.",
      "Clause 2.2: 10% margin money grant provided directly into bank account via DBT.",
      "Clause 3.1: 85% credit guarantee under West Bengal Credit Guarantee Scheme."
    ],
    "required_documents": [
      "Aadhaar Card",
      "West Bengal Resident Certificate",
      "Project Report / Business Proposal",
      "Bank Passbook"
    ],
    "official_portal_url": "https://wb.gov.in/",
    "tags": [
      "msme",
      "west bengal",
      "bhabishyat credit card",
      "startup",
      "street vendor",
      "artisan"
    ],
    "state": "West Bengal"
  },
  {
    "id": "state-wb-samajik-suraksha-080",
    "name": "Bina Mulye Samajik Suraksha Yojana (BM-SSY) - West Bengal",
    "ministry": "Labour Department, Govt of West Bengal",
    "category": "Social Welfare & Safety Nets",
    "level": "State",
    "target_beneficiary": "Unorganized workers, daily wage laborers, masons, street vendors, and transport workers in WB",
    "summary": "Provides 100% free state-funded Provident Fund (₹30/month paid by State), accident compensation up to ₹2,00,000, death relief, and educational assistance up to ₹30,000 for children.",
    "financial_benefit": "100% Free State-Funded PF + ₹2,00,000 Accident Cover + ₹30,000 Education Aid",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 60,
      "max_annual_income": 150000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Daily Wage Worker",
        "Street Vendor",
        "Artisan",
        "Weaver",
        "Self Employed",
        "Unemployed"
      ],
      "states": [
        "West Bengal"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Workers in unorganized sector receive monthly PF contribution of Rs 30 paid entirely by the State Government.",
      "Clause 2.3: Zero worker premium. Full benefits credited on Samajik Suraksha portal.",
      "Clause 3.4: Cash grant for children pursuing technical and higher education courses."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Samajik Mukti Card / Registration Details",
      "Self-Declaration of Unorganized Profession",
      "Bank Passbook"
    ],
    "official_portal_url": "https://wb.gov.in/",
    "tags": [
      "daily wage worker",
      "west bengal",
      "bmssy",
      "samajik suraksha",
      "unorganized labor",
      "pf"
    ],
    "state": "West Bengal"
  },
  {
    "id": "state-wb-banglasree-081",
    "name": "Banglasree Handloom & Handicraft Artisan Incentive Scheme - West Bengal",
    "ministry": "Micro, Small & Medium Enterprises and Textiles Dept, Govt of West Bengal",
    "category": "Livelihood & Credit",
    "level": "State",
    "target_beneficiary": "Traditional handloom weavers, terracotta artisans, jute craftspersons, and silk workers in WB",
    "summary": "Provides raw material yarn subsidies, modernization grants up to ₹50,000 for purchasing advanced looms, free artisan toolkits, and guaranteed procurement stalls at Biswa Bangla haats.",
    "financial_benefit": "Up to ₹50,000 Modern Loom Grant + 20% Yarn Subsidy + Biswa Bangla Stalls",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 65,
      "max_annual_income": 200000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Weaver",
        "Artisan",
        "Self Employed"
      ],
      "states": [
        "West Bengal"
      ]
    },
    "rag_clauses": [
      "Clause 1.2: Registered weavers and artisans get direct assistance for Jacquard and modern frame loom installations.",
      "Clause 2.1: Priority access to Biswa Bangla sales counters and export marketing facilitation.",
      "Clause 3.1: Artisan identity card issued by Directorate of Textiles."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Weaver / Artisan Identity Card",
      "Bank Account Passbook",
      "Trade Experience Proof"
    ],
    "official_portal_url": "https://wb.gov.in/",
    "tags": [
      "weaver",
      "artisan",
      "west bengal",
      "banglasree",
      "biswa bangla",
      "handloom"
    ],
    "state": "West Bengal"
  },
  {
    "id": "state-tn-solar-kisan-082",
    "name": "Tamil Nadu Chief Minister's Solar Powered Pump Sets & Kuruvai Cultivation Scheme - Tamil Nadu",
    "ministry": "Agriculture & Farmers Welfare Department, Govt of Tamil Nadu",
    "category": "Agriculture & Rural Development",
    "level": "State",
    "target_beneficiary": "Small, marginal, and delta farmers in Tamil Nadu",
    "summary": "Provides 70% state capital subsidy for installing 5 HP to 10 HP stand-alone solar agricultural pumping systems + free kuruvai seed, fertilizer, and micro-nutrient cultivation packages.",
    "financial_benefit": "70% Capital Subsidy on Solar Pumping Systems + 100% Free Delta Kuruvai Package",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Farmer",
        "Smallholder",
        "Cultivator"
      ],
      "states": [
        "Tamil Nadu"
      ],
      "land_ownership_required": true
    },
    "rag_clauses": [
      "Clause 1.1: 70% subsidy (30% MNRE + 40% TN Government) on standalone solar water pumps.",
      "Clause 2.3: Special assistance for Delta farmers under Kuruvai Cultivation Package through Uzhavan app.",
      "Clause 3.2: 100% free agricultural power for registered connections."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Patta / Chitta Land Records",
      "Adangal Extract",
      "Bank Passbook"
    ],
    "official_portal_url": "https://www.tn.gov.in/",
    "tags": [
      "farmer",
      "tamil nadu",
      "solar pump",
      "uzhavan",
      "kuruvai",
      "crop subsidy"
    ],
    "state": "Tamil Nadu"
  },
  {
    "id": "state-tn-weaver-power-083",
    "name": "Tamil Nadu Handloom & Powerloom Weavers Free Electricity & Modernization Scheme - Tamil Nadu",
    "ministry": "Handlooms, Handicrafts, Textiles and Khadi Dept, Govt of Tamil Nadu",
    "category": "Livelihood & Credit",
    "level": "State",
    "target_beneficiary": "Handloom and powerloom weavers and silk craftspersons in Tamil Nadu",
    "summary": "Provides 300 units of free bi-monthly electricity for handloom units and 1000 units for powerloom units + ₹1,000/month weaver pension and loom modernization subsidies.",
    "financial_benefit": "300 - 1000 Units Free Electricity + ₹1,000/month Pension + Loom Grants",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 65,
      "max_annual_income": 200000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Weaver",
        "Artisan",
        "Self Employed"
      ],
      "states": [
        "Tamil Nadu"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Handloom weavers get 300 units free power and powerloom weavers get 1000 units free electricity per billing cycle.",
      "Clause 2.2: Free insurance cover and cooperative society yarn distribution.",
      "Clause 3.1: Direct linkage through TANGEDCO meter mapping."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Weaver Cooperative Society ID Card / Loom Proof",
      "TANGEDCO Electricity Consumer Number",
      "Bank Passbook"
    ],
    "official_portal_url": "https://www.tn.gov.in/",
    "tags": [
      "weaver",
      "artisan",
      "tamil nadu",
      "free electricity",
      "handloom",
      "powerloom"
    ],
    "state": "Tamil Nadu"
  },
  {
    "id": "state-tn-unorganized-workers-084",
    "name": "Tamil Nadu Unorganized & Construction Workers Welfare Scheme - Tamil Nadu",
    "ministry": "Labour Welfare and Skill Development Department, Govt of Tamil Nadu",
    "category": "Social Welfare & Safety Nets",
    "level": "State",
    "target_beneficiary": "Construction laborers, street vendors, manual workers, and domestic workers in TN",
    "summary": "Provides ₹5,00,000 accidental death relief, ₹50,000 marriage grant, ₹6,000 maternity assistance, educational aid up to ₹20,000, free safety toolkits, and ₹1,000/month old age pension.",
    "financial_benefit": "₹5 Lakhs Accident Cover + ₹50,000 Marriage Grant + ₹20,000 Education Aid + Pension",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 60,
      "max_annual_income": 180000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Daily Wage Worker",
        "Street Vendor",
        "Self Employed",
        "Unemployed"
      ],
      "states": [
        "Tamil Nadu"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Covers 17 designated unorganized worker boards in Tamil Nadu.",
      "Clause 2.4: Fast-track online registration and renewal via TNUWW portal.",
      "Clause 3.2: Direct DBT deposit for education, marriage, and pension benefits."
    ],
    "required_documents": [
      "Aadhaar Card",
      "TNUWWB Worker Smart Card",
      "Employer / Contractor Work Certificate",
      "Bank Account Passbook"
    ],
    "official_portal_url": "https://www.tn.gov.in/",
    "tags": [
      "daily wage worker",
      "street vendor",
      "tamil nadu",
      "tnuwwb",
      "unorganized labor",
      "accident cover"
    ],
    "state": "Tamil Nadu"
  },
  {
    "id": "state-rj-kisan-urja-085",
    "name": "Mukhyamantri Kisan Mitra Urja Yojana - Rajasthan",
    "ministry": "Department of Energy & Agriculture, Govt of Rajasthan",
    "category": "Agriculture & Rural Development",
    "level": "State",
    "target_beneficiary": "All metered agricultural electricity connection holding farmers in Rajasthan",
    "summary": "Provides monthly electricity subsidy of ₹1,000 (up to ₹12,000/year) directly adjusted against the agricultural power bills, effectively reducing electricity bills to zero for over 8 lakh farmers.",
    "financial_benefit": "₹12,000/year Free Agricultural Electricity Subsidy (Zero Power Bills)",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 80,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Farmer",
        "Smallholder",
        "Cultivator"
      ],
      "states": [
        "Rajasthan"
      ],
      "land_ownership_required": true
    },
    "rag_clauses": [
      "Clause 1.1: Rs 1,000 per month subsidy directly applied to electricity bills of metered agricultural connections.",
      "Clause 2.2: Jan Aadhaar linked DISCOM billing integration.",
      "Clause 3.1: If bill is less than Rs 1,000, remaining balance is carried forward to subsequent months."
    ],
    "required_documents": [
      "Jan Aadhaar Card",
      "Agricultural Electricity Connection K-Number",
      "Land Record (Jamabandi)",
      "Bank Account linked with Jan Aadhaar"
    ],
    "official_portal_url": "https://industries.rajasthan.gov.in/",
    "tags": [
      "farmer",
      "rajasthan",
      "kisan mitra",
      "electricity subsidy",
      "free power",
      "jan aadhaar"
    ],
    "state": "Rajasthan"
  },
  {
    "id": "state-rj-urban-vendor-086",
    "name": "Indira Gandhi Urban Credit Card & Street Vendor Scheme - Rajasthan",
    "ministry": "Local Self Government Department, Govt of Rajasthan",
    "category": "Livelihood & Credit",
    "level": "State",
    "target_beneficiary": "Urban street vendors, hawkers, youth, service providers, and unorganized workers in Rajasthan",
    "summary": "Provides 100% collateral-free, interest-free micro-credit loans up to ₹50,000 for urban street vendors, unorganized workers, and unemployed youth, with 100% interest subsidy borne by Rajasthan Govt.",
    "financial_benefit": "₹50,000 Interest-Free Working Capital Loan (100% State Interest Subsidy)",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 50,
      "max_annual_income": 150000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Street Vendor",
        "Daily Wage Worker",
        "Youth",
        "Unemployed",
        "Self Employed"
      ],
      "states": [
        "Rajasthan"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Loan of Rs 50,000 sanctioned for 12 months with zero interest and zero processing fee.",
      "Clause 2.3: Verification through Town Vending Committee (TVC) certificate or Jan Aadhaar survey.",
      "Clause 3.2: 100% interest reimbursed directly by the State Government."
    ],
    "required_documents": [
      "Jan Aadhaar Card / Aadhaar Card",
      "Street Vending Survey Certificate / Urban ID",
      "Bank Passbook",
      "Passport Size Photograph"
    ],
    "official_portal_url": "https://urban.rajasthan.gov.in/",
    "tags": [
      "street vendor",
      "rajasthan",
      "indira gandhi credit card",
      "interest free",
      "daily wage worker"
    ],
    "state": "Rajasthan"
  },
  {
    "id": "state-rj-anuprati-coaching-087",
    "name": "Mukhyamantri Anuprati Coaching & Scholarship Yojana - Rajasthan",
    "ministry": "Social Justice and Empowerment Department, Govt of Rajasthan",
    "category": "Education & Student Aid",
    "level": "State",
    "target_beneficiary": "Meritorious SC, ST, OBC, MBC, EWS, and Minority students in Rajasthan",
    "summary": "Provides 100% free professional competitive examination coaching (UPSC, RAS, IIT-JEE, NEET, CLAT, Bank PO, REET) at premier institutes + ₹40,000 annual living/hostel allowance for outstation students.",
    "financial_benefit": "100% Free Premier Coaching Fees + ₹40,000/year Hostel & Living Stipend",
    "eligibility_criteria": {
      "min_age": 16,
      "max_age": 28,
      "max_annual_income": 800000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Student",
        "Youth",
        "Unemployed"
      ],
      "states": [
        "Rajasthan"
      ]
    },
    "rag_clauses": [
      "Clause 1.2: Selection based on 10th and 12th board merit with priority for low-income families.",
      "Clause 2.1: Government pays 100% of coaching fees directly to empanelled top coaching institutions.",
      "Clause 3.4: Rs 40,000 living allowance credited directly into student's Jan Aadhaar account."
    ],
    "required_documents": [
      "Jan Aadhaar Card & Aadhaar Card",
      "10th / 12th / Graduation Marksheet",
      "Caste / EWS Certificate",
      "Income Certificate (< ₹8 Lakh)"
    ],
    "official_portal_url": "https://sje.rajasthan.gov.in/",
    "tags": [
      "student",
      "rajasthan",
      "anuprati coaching",
      "free coaching",
      "scholarship",
      "living allowance"
    ],
    "state": "Rajasthan"
  },
  {
    "id": "state-rj-bocw-shramik-088",
    "name": "Rajasthan Building & Other Construction Worker Welfare Scheme - Rajasthan",
    "ministry": "BOCW Board & Department of Labour, Govt of Rajasthan",
    "category": "Social Welfare & Safety Nets",
    "level": "State",
    "target_beneficiary": "Registered construction laborers, daily wage workers, painters, and masons in Rajasthan",
    "summary": "Provides ₹55,000 daughter marriage grant (Shubhshakti), toolkits, ₹5,00,000 accident insurance, ₹8,000 - ₹35,000 education scholarships for children, and old age pension.",
    "financial_benefit": "₹55,000 Marriage Grant + Free Toolkits + ₹35,000 Education Aid + Accident Insurance",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 60,
      "max_annual_income": 180000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Daily Wage Worker",
        "Self Employed",
        "Unemployed",
        "Artisan"
      ],
      "states": [
        "Rajasthan"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: 90 days work verification through Labor Welfare Portal.",
      "Clause 2.3: Shubhshakti Yojana grants Rs 55,000 for unmarried daughters of registered workers.",
      "Clause 3.1: Free annual health check-up and tool assistance."
    ],
    "required_documents": [
      "Jan Aadhaar Card",
      "Rajasthan BOCW Labor Registration ID",
      "90-Day Work Certificate",
      "Bank Passbook"
    ],
    "official_portal_url": "https://labour.rajasthan.gov.in/",
    "tags": [
      "daily wage worker",
      "rajasthan",
      "bocw",
      "shubhshakti",
      "marriage grant",
      "labor welfare"
    ],
    "state": "Rajasthan"
  },
  {
    "id": "state-mp-udyam-kranti-089",
    "name": "Mukhyamantri Udyam Kranti Yojana - Madhya Pradesh",
    "ministry": "Micro, Small & Medium Enterprises Department, Govt of Madhya Pradesh",
    "category": "MSME & Entrepreneurship",
    "level": "State",
    "target_beneficiary": "Youth, small business owners, traders, and first-generation entrepreneurs in MP",
    "summary": "Provides collateral-free bank project loans from ₹1 Lakh to ₹50 Lakhs for manufacturing and ₹1 Lakh to ₹25 Lakhs for service/business, with 3% annual interest subsidy and 100% state credit guarantee.",
    "financial_benefit": "₹1L - ₹50L Collateral-Free MSME Loan + 3% Interest Subsidy + 100% Credit Guarantee",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 45,
      "max_annual_income": 1200000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "MSME Owner",
        "Women Entrepreneur",
        "Self Employed",
        "Youth",
        "Unemployed"
      ],
      "states": [
        "Madhya Pradesh"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: 12th standard pass resident of MP setting up a new enterprise.",
      "Clause 2.1: 3% interest subvention per annum for 7 years on timely repayment.",
      "Clause 3.2: 100% CGTMSE credit guarantee fee paid by MP Government."
    ],
    "required_documents": [
      "Aadhaar Card & Samagra ID",
      "12th Pass Marksheet",
      "Project Report & Quotations",
      "PAN Card & Bank Statement"
    ],
    "official_portal_url": "https://samast.mponline.gov.in/",
    "tags": [
      "msme",
      "madhya pradesh",
      "udyam kranti",
      "business loan",
      "interest subsidy",
      "startup"
    ],
    "state": "Madhya Pradesh"
  },
  {
    "id": "state-mp-medhavi-vidyarthi-090",
    "name": "Mukhyamantri Medhavi Vidyarthi Yojana (MMVY) - Madhya Pradesh",
    "ministry": "Technical Education & Higher Education Department, Govt of Madhya Pradesh",
    "category": "Education & Student Aid",
    "level": "State",
    "target_beneficiary": "Meritorious students from MP who scored 70%+ in MPBSE or 85%+ in CBSE 12th exams",
    "summary": "100% state-funded full tuition fee payment for meritorious students admitted to engineering (IIT/NIT/JEE), medical (NEET/MBBS), law (CLAT/NLU), and premier degree colleges.",
    "financial_benefit": "100% Full Tuition Fee Covered by MP Govt for Professional & Degree Courses",
    "eligibility_criteria": {
      "min_age": 16,
      "max_age": 28,
      "max_annual_income": 600000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Student",
        "Youth"
      ],
      "states": [
        "Madhya Pradesh"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: 70% or more in MP Board (or 85% in CBSE/ICSE) in 12th board exams with family income under Rs 6 Lakh.",
      "Clause 2.2: Total tuition fee of private or government medical/engineering colleges paid directly by MP Govt.",
      "Clause 3.1: Application processed via MP Scholarship 2.0 portal."
    ],
    "required_documents": [
      "Aadhaar Card & Samagra ID",
      "12th Board Marksheet",
      "College Admission Allotment Letter & Fee Receipt",
      "Income Certificate"
    ],
    "official_portal_url": "https://samast.mponline.gov.in/",
    "tags": [
      "student",
      "madhya pradesh",
      "medhavi vidyarthi",
      "100% fee waiver",
      "higher education"
    ],
    "state": "Madhya Pradesh"
  },
  {
    "id": "state-mp-sant-ravidas-091",
    "name": "Mukhyamantri Sant Ravidas Swarojgar & Artisan Scheme - Madhya Pradesh",
    "ministry": "SC Welfare Department, Govt of Madhya Pradesh",
    "category": "Livelihood & Credit",
    "level": "State",
    "target_beneficiary": "Traditional artisans, sculptors, cobblers, weavers, and self-employed craftspersons in MP",
    "summary": "Provides project finance up to ₹25 Lakhs with 5% annual interest subsidy for 5 years and 100% free toolkits for traditional artisans and craftspersons.",
    "financial_benefit": "Up to ₹25 Lakhs Business Loan + 5% Interest Subsidy + Free Toolkits",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 45,
      "max_annual_income": 400000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Artisan",
        "Weaver",
        "Self Employed"
      ],
      "states": [
        "Madhya Pradesh"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Financial support for purchasing modern tools, setting up artisanal workshops, and procuring raw materials.",
      "Clause 2.3: 5% interest subvention credited directly every quarter into the loan account.",
      "Clause 3.1: Samagra portal verification."
    ],
    "required_documents": [
      "Aadhaar Card & Samagra ID",
      "Artisan / Vocation Proof",
      "Project Estimate",
      "Bank Passbook"
    ],
    "official_portal_url": "https://samast.mponline.gov.in/",
    "tags": [
      "artisan",
      "weaver",
      "madhya pradesh",
      "sant ravidas",
      "toolkit",
      "swarojgar"
    ],
    "state": "Madhya Pradesh"
  },
  {
    "id": "state-gu-mysy-092",
    "name": "Mukhyamantri Yuva Swavalamban Yojana (MYSY) - Gujarat",
    "ministry": "Education Department & KCG, Govt of Gujarat",
    "category": "Education & Student Aid",
    "level": "State",
    "target_beneficiary": "Students in Gujarat scoring 80%+ in 10th/12th pursuing diploma, degree, medical, or engineering",
    "summary": "Provides 50% tuition fee subsidy up to ₹2,00,000/year (Medical) and ₹50,000/year (Engineering/Degree) + ₹12,000/year hostel allowance + ₹10,000 book/equipment grant.",
    "financial_benefit": "Up to ₹2,00,000/year Tuition Subsidy + ₹12,000/yr Hostel Aid + ₹10,000 Books",
    "eligibility_criteria": {
      "min_age": 16,
      "max_age": 28,
      "max_annual_income": 600000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Student",
        "Youth"
      ],
      "states": [
        "Gujarat"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: 80 percentile or above in 10th/12th board exams with annual family income up to Rs 6 Lakh.",
      "Clause 2.2: 50% tuition fee reimbursement for government or private recognized colleges in Gujarat.",
      "Clause 3.4: Rs 1,200 per month (for 10 months) hostel accommodation assistance for outstation students."
    ],
    "required_documents": [
      "Aadhaar Card",
      "10th / 12th Board Marksheet",
      "Income Certificate issued by Mamlatdar",
      "College Admission Letter & Fee Receipt"
    ],
    "official_portal_url": "https://services.india.gov.in/service/search?query=gujarat",
    "tags": [
      "student",
      "gujarat",
      "mysy",
      "tuition subsidy",
      "hostel allowance",
      "higher education"
    ],
    "state": "Gujarat"
  },
  {
    "id": "state-gu-msme-assistance-093",
    "name": "Gujarat MSME Capital Subsidy & Financial Assistance Scheme - Gujarat",
    "ministry": "Industries and Mines Department, Govt of Gujarat",
    "category": "MSME & Entrepreneurship",
    "level": "State",
    "target_beneficiary": "Micro, Small & Medium Enterprises, youth startups, and manufacturers in Gujarat",
    "summary": "Provides 25% capital subsidy up to ₹35 Lakhs on plant and machinery + 7% annual interest subsidy up to ₹35 Lakhs for 5 years under Gujarat Industrial Policy.",
    "financial_benefit": "25% Capital Subsidy (Up to ₹35 Lakhs) + 7% Annual Interest Rebate for 5 Years",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 60,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "MSME Owner",
        "Women Entrepreneur",
        "Self Employed",
        "Youth"
      ],
      "states": [
        "Gujarat"
      ]
    },
    "rag_clauses": [
      "Clause 1.2: Capital subsidy @25% of eligible plant & machinery investment in municipal and rural areas.",
      "Clause 2.1: 7% interest subvention for Micro enterprises (up to Rs 35L per year for 5 years).",
      "Clause 3.1: Single window clearance through Investor Facilitation Portal (IFP Gujarat)."
    ],
    "required_documents": [
      "Aadhaar Card & PAN Card",
      "Udyam Registration Certificate",
      "Plant & Machinery Invoices and Project Report",
      "Bank Loan Sanction Letter"
    ],
    "official_portal_url": "https://services.india.gov.in/service/search?query=gujarat",
    "tags": [
      "msme",
      "gujarat",
      "capital subsidy",
      "industrial policy",
      "interest rebate",
      "factory"
    ],
    "state": "Gujarat"
  },
  {
    "id": "state-gu-urban-vendor-094",
    "name": "Gujarat Urban Street Vendor Livelihood & Push-Cart Subsidy - Gujarat",
    "ministry": "Urban Development and Urban Housing Department, Govt of Gujarat",
    "category": "Livelihood & Credit",
    "level": "State",
    "target_beneficiary": "Urban street vendors, vegetable hawkers, fruit sellers, and roadside micro-merchants in Gujarat",
    "summary": "Provides 75% state subsidy on purchasing modernized hygienic stainless steel vending carts/thelas with solar lighting + ₹10,000 to ₹30,000 working capital loans with 100% interest subvention.",
    "financial_benefit": "75% Subsidy on Modern Vending Carts + ₹10,000 - ₹30,000 Zero-Interest Loan",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 60,
      "max_annual_income": 180000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Street Vendor",
        "Daily Wage Worker",
        "Self Employed",
        "Unemployed"
      ],
      "states": [
        "Gujarat"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: 75% subsidy provided on specialized food and vegetable vending carts through GULM.",
      "Clause 2.3: Interest subvention credited directly on monthly repayments.",
      "Clause 3.2: Town Vending Committee smart QR-code identity card."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Municipality Street Vending Certificate",
      "Ration Card",
      "Bank Account Passbook"
    ],
    "official_portal_url": "https://services.india.gov.in/service/search?query=gujarat",
    "tags": [
      "street vendor",
      "gujarat",
      "gulm",
      "vending cart subsidy",
      "urban hawker",
      "working capital"
    ],
    "state": "Gujarat"
  },
  {
    "id": "state-kl-subhiksha-095",
    "name": "Subhiksha Keralam & Crop Livelihood Incentive Scheme - Kerala",
    "ministry": "Agriculture Development and Farmers' Welfare Department, Govt of Kerala",
    "category": "Agriculture & Rural Development",
    "level": "State",
    "target_beneficiary": "Farmers, homestead cultivators, tenant farmers, and women farmer groups in Kerala",
    "summary": "Provides ₹40,000/hectare direct incentive for cultivating fallow land + 50% subsidy on hi-tech polyhouses, drip irrigation, and zero-interest seasonal crop production credit.",
    "financial_benefit": "₹40,000/hectare Fallow Land Cultivation Grant + 50% Subsidy on Hi-Tech Agri",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Farmer",
        "Smallholder",
        "Cultivator"
      ],
      "states": [
        "Kerala"
      ],
      "land_ownership_required": true
    },
    "rag_clauses": [
      "Clause 1.1: Financial support of Rs 40,000/ha for converting fallow lands into paddy, tuber, and vegetable cultivation.",
      "Clause 2.3: Credit and input subsidy routed through Krishi Bhavans across Kerala via AIMS portal.",
      "Clause 3.1: Free crop insurance under State Crop Insurance Scheme (SCIS)."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Land Tax Receipt (Thandaper)",
      "AIMS Portal Farmer Registration",
      "Bank Account Passbook"
    ],
    "official_portal_url": "https://kudumbashree.org/",
    "tags": [
      "farmer",
      "kerala",
      "subhiksha keralam",
      "aims portal",
      "krishi bhavan",
      "crop subsidy"
    ],
    "state": "Kerala"
  },
  {
    "id": "state-kl-kesru-096",
    "name": "Kerala Self Employment Scheme for Registered Unemployed (KESRU) & MSME - Kerala",
    "ministry": "Labour and Skills & Industries Department, Govt of Kerala",
    "category": "MSME & Entrepreneurship",
    "level": "State",
    "target_beneficiary": "Registered unemployed youth, small entrepreneurs, and street vendors in Kerala",
    "summary": "Provides bank project loans up to ₹1,00,000 for individuals and ₹10,00,000 for groups with 20% direct state capital subsidy for starting retail, manufacturing, repair, and trade businesses.",
    "financial_benefit": "20% State Capital Subsidy on loans up to ₹1 Lakh (Individual) / ₹10 Lakhs (Group)",
    "eligibility_criteria": {
      "min_age": 21,
      "max_age": 50,
      "max_annual_income": 100000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "MSME Owner",
        "Youth",
        "Student",
        "Street Vendor",
        "Self Employed",
        "Unemployed"
      ],
      "states": [
        "Kerala"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Open to unemployed persons registered on Kerala Employment Exchange for at least 2 years.",
      "Clause 2.2: 20% of project cost (max Rs 20,000 for individual, Rs 2,00,000 for group) provided as non-refundable state subsidy.",
      "Clause 3.4: Sanctioned through nationalized and cooperative banks across Kerala."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Employment Exchange Registration Card",
      "Ration Card / Income Certificate (< ₹1 Lakh)",
      "Project Feasibility Report"
    ],
    "official_portal_url": "https://kudumbashree.org/",
    "tags": [
      "msme",
      "kerala",
      "kesru",
      "self employment",
      "unemployed youth",
      "capital subsidy",
      "street vendor"
    ],
    "state": "Kerala"
  },
  {
    "id": "state-kl-bocw-shramik-097",
    "name": "Kerala Construction Workers Welfare Fund Board Scheme - Kerala",
    "ministry": "Kerala Building and Other Construction Workers Welfare Fund Board (KBOCWWFB)",
    "category": "Social Welfare & Safety Nets",
    "level": "State",
    "target_beneficiary": "Registered construction laborers, masons, painters, and unorganized workers in Kerala",
    "summary": "Provides ₹2,000/month monthly pension, ₹50,000 marriage assistance, ₹15,000 maternity assistance, educational grants up to ₹30,000 for professional courses, and tool allowances.",
    "financial_benefit": "₹2,000/mo Pension + ₹50,000 Marriage Aid + ₹30,000 Higher Education Grant",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 60,
      "max_annual_income": 180000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Daily Wage Worker",
        "Artisan",
        "Weaver",
        "Self Employed",
        "Unemployed"
      ],
      "states": [
        "Kerala"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Open to workers with at least 90 days work in building or construction sector in Kerala.",
      "Clause 2.3: Full pension of Rs 2,000 per month after 60 years of age.",
      "Clause 3.2: Direct DBT deposit for education, medical treatment, and death relief."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Kerala BOCW Membership Passbook",
      "Work Experience Certificate",
      "Bank Account Details"
    ],
    "official_portal_url": "https://kudumbashree.org/",
    "tags": [
      "daily wage worker",
      "kerala",
      "kbocw",
      "construction laborer",
      "pension",
      "education aid"
    ],
    "state": "Kerala"
  },
  {
    "id": "state-ap-jagananna-chedodu-098",
    "name": "YSR Jagananna Chedodu - Andhra Pradesh",
    "ministry": "Backward Classes Welfare Department, Govt of Andhra Pradesh",
    "category": "Livelihood & Credit",
    "level": "State",
    "target_beneficiary": "Small tailors, barbers (Nayi Brahmins), washermen (Rajakas), and micro-retailers in AP",
    "summary": "Provides annual direct financial assistance of ₹10,000 credited directly via DBT to small tailor shops, barbers, and washermen to purchase modern equipment, sewing machines, and tools.",
    "financial_benefit": "₹10,000/year Direct Bank Transfer (DBT) for Tools and Working Capital",
    "eligibility_criteria": {
      "min_age": 21,
      "max_age": 60,
      "max_annual_income": 120000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "MSME Owner",
        "Artisan",
        "Self Employed",
        "Unemployed",
        "Street Vendor"
      ],
      "states": [
        "Andhra Pradesh"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Individual small shop operators in tailoring, hair-dressing, and laundry services are eligible.",
      "Clause 2.1: Annual sum of Rs 10,000 transferred with zero deductions.",
      "Clause 3.4: Verified through Village / Ward Secretariats and Navasakam portal."
    ],
    "required_documents": [
      "Aadhaar Card",
      "AP Rice Card / White Ration Card",
      "Shop Registration / Trade License / Village Secretariat Verification",
      "Bank Passbook"
    ],
    "official_portal_url": "https://ap.meeseva.gov.in/",
    "tags": [
      "msme",
      "artisan",
      "andhra pradesh",
      "jagananna chedodu",
      "tailor",
      "barber",
      "self employed"
    ],
    "state": "Andhra Pradesh"
  },
  {
    "id": "state-tg-nethanna-bima-099",
    "name": "Nethanna Bima & Handloom Thrift Fund Scheme - Telangana",
    "ministry": "Handlooms & Textiles Department, Govt of Telangana",
    "category": "Livelihood & Credit",
    "level": "State",
    "target_beneficiary": "Handloom and powerloom weavers, ancillary workers, and artisans in Telangana",
    "summary": "Provides ₹5,00,000 comprehensive insurance cover to weaver families (with 100% premium paid by Telangana Govt) + 16% matching government thrift fund contribution to promote weaver savings.",
    "financial_benefit": "₹5,00,000 Insurance Cover + 16% State Matching Thrift Fund Grant",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 60,
      "max_annual_income": 200000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Weaver",
        "Artisan",
        "Self Employed"
      ],
      "states": [
        "Telangana"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Full Rs 5 Lakhs insurance payout in case of natural or accidental death of registered weaver.",
      "Clause 2.3: Government deposits 16% matching contribution against 8% weaver contribution under Chenetha Mithra.",
      "Clause 3.2: Implemented in partnership with LIC of India and Telangana Handloom Department."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Telangana Food Security Card",
      "Weaver Geo-tag ID / Assistant Director of Handlooms Certificate",
      "Bank Account Passbook"
    ],
    "official_portal_url": "https://telangana.gov.in/",
    "tags": [
      "weaver",
      "artisan",
      "telangana",
      "nethanna bima",
      "thrift fund",
      "handloom insurance"
    ],
    "state": "Telangana"
  },
  {
    "id": "state-tg-bocw-labor-100",
    "name": "Telangana Building & Other Construction Workers Welfare Scheme - Telangana",
    "ministry": "Labour Department & TBOCWW Board, Govt of Telangana",
    "category": "Social Welfare & Safety Nets",
    "level": "State",
    "target_beneficiary": "Registered construction workers, daily wage laborers, masons, and painters in Telangana",
    "summary": "Provides ₹30,000 marriage gift (Shadi Mubarak/Kalyana Lakshmi top-up), ₹5,00,000 accidental death relief, ₹10,000 - ₹30,000 children scholarship, and free toolkits for registered workers.",
    "financial_benefit": "₹5 Lakhs Accident Cover + ₹30,000 Marriage Grant + Up to ₹30,000 Scholarship",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 60,
      "max_annual_income": 180000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Daily Wage Worker",
        "Self Employed",
        "Unemployed",
        "Street Vendor"
      ],
      "states": [
        "Telangana"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Construction worker with 90 days work registered under TBOCWW Board.",
      "Clause 2.2: Free toolkits and safety kits distributed directly through Labor Department offices.",
      "Clause 3.1: Direct DBT deposit for student scholarships and medical expenses."
    ],
    "required_documents": [
      "Aadhaar Card",
      "TBOCWW Registration Card",
      "90-Day Work Certificate",
      "Bank Passbook"
    ],
    "official_portal_url": "https://tbocwwb.telangana.gov.in/",
    "tags": [
      "daily wage worker",
      "telangana",
      "tbocwwb",
      "construction worker",
      "labor welfare",
      "accident relief"
    ],
    "state": "Telangana"
  },
  {
    "id": "state-ka-urban-vendor-101",
    "name": "Karnataka DAY-NULM & Urban Street Vendor Livelihood Scheme - Karnataka",
    "ministry": "Directorate of Municipal Administration, Govt of Karnataka",
    "category": "Livelihood & Credit",
    "level": "State",
    "target_beneficiary": "Urban street vendors, push-cart hawkers, and roadside retailers across Karnataka",
    "summary": "Provides smart digital vending identity cards, designated vending zone allotments, interest subsidy on working capital loans up to ₹50,000, and state matching revolving funds.",
    "financial_benefit": "Smart Vending ID + Designated Zone Stall + ₹10,000 - ₹50,000 Subsidized Loan",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 60,
      "max_annual_income": 180000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Street Vendor",
        "Self Employed",
        "Daily Wage Worker",
        "Unemployed"
      ],
      "states": [
        "Karnataka"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: All urban street vendors surveyed by Urban Local Bodies (ULBs) in Karnataka receive smart ID cards.",
      "Clause 2.3: Interest subvention and credit guarantee under State Urban Livelihood Mission.",
      "Clause 3.2: Protection from unauthorized eviction in designated vending zones."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Karnataka Ration Card",
      "ULB / Town Vending Certificate",
      "Bank Account Passbook"
    ],
    "official_portal_url": "https://sevasindhu.karnataka.gov.in/",
    "tags": [
      "street vendor",
      "karnataka",
      "urban vendor",
      "nulm",
      "vending zone",
      "working capital"
    ],
    "state": "Karnataka"
  },
  {
    "id": "state-mh-artisan-weaver-102",
    "name": "Sant Rohidas Leather Artisan & Handloom Modernization Scheme - Maharashtra",
    "ministry": "Social Justice and Special Assistance Department, Govt of Maharashtra",
    "category": "Livelihood & Credit",
    "level": "State",
    "target_beneficiary": "Traditional leather artisans, footwear makers, handloom weavers, and craftspersons in MH",
    "summary": "Provides 50% capital subsidy (up to ₹50,000) for establishing modern artisan shoe/leather kiosks, free toolkits, raw material credit linkages, and exhibition marketing subsidies.",
    "financial_benefit": "50% Capital Subsidy (Up to ₹50,000) + Free Trade Toolkits + Raw Material Grants",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 60,
      "max_annual_income": 200000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Artisan",
        "Weaver",
        "Self Employed"
      ],
      "states": [
        "Maharashtra"
      ]
    },
    "rag_clauses": [
      "Clause 1.2: Implemented through LIDCOM and Handloom Development Corporation.",
      "Clause 2.1: Free modernized toolkits distributed to registered artisans and cobblers.",
      "Clause 3.4: Subsidized stall allocations at State-level exhibitions and fairs."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Maharashtra Domicile Certificate",
      "Artisan / Vocation Certificate",
      "Bank Account Passbook"
    ],
    "official_portal_url": "https://sjsa.maharashtra.gov.in/",
    "tags": [
      "artisan",
      "weaver",
      "maharashtra",
      "sant rohidas",
      "leather craft",
      "toolkit",
      "lidcom"
    ],
    "state": "Maharashtra"
  },
  {
    "id": "state-mh-street-vendor-103",
    "name": "Maharashtra Urban Street Vendor Swavalamban Scheme - Maharashtra",
    "ministry": "Urban Development Department, Govt of Maharashtra",
    "category": "Livelihood & Credit",
    "level": "State",
    "target_beneficiary": "Urban street vendors, push-cart fruit/vegetable sellers, and hawkers across Maharashtra",
    "summary": "Offers ₹10,000 to ₹50,000 micro-credit working capital loans with 100% interest subvention paid by Maharashtra Government + Town Vending Committee biometric ID cards.",
    "financial_benefit": "₹10,000 - ₹50,000 Interest-Free Micro-Credit Loan + Biometric Smart Vending Card",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 60,
      "max_annual_income": 200000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Street Vendor",
        "Daily Wage Worker",
        "Self Employed",
        "Unemployed"
      ],
      "states": [
        "Maharashtra"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Street vendors registered under Municipal Corporations (BMC, PMC, NMC, etc.) in Maharashtra.",
      "Clause 2.3: 100% interest subvention on timely monthly repayment.",
      "Clause 3.2: Integration with PM SVANidhi as a top-up credit incentive."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Municipal Corporation Vending ID / Survey Receipt",
      "Maharashtra Domicile / Ration Card",
      "Bank Passbook"
    ],
    "official_portal_url": "https://urban.maharashtra.gov.in/",
    "tags": [
      "street vendor",
      "maharashtra",
      "swavalamban",
      "urban hawker",
      "interest free",
      "working capital"
    ],
    "state": "Maharashtra"
  },
  {
    "id": "state-up-street-vendor-104",
    "name": "UP Nagariya Path Vikreta Kalyan & Micro-Credit Subsidy - Uttar Pradesh",
    "ministry": "Urban Development Department & SUDA, Govt of Uttar Pradesh",
    "category": "Livelihood & Credit",
    "level": "State",
    "target_beneficiary": "Urban street vendors, push-cart sellers, and roadside micro-entrepreneurs in UP",
    "summary": "Provides Town Vending Committee smart identity cards, zero processing fee micro-credit loans up to ₹50,000 with 7% interest subsidy, and free accidental insurance cover of ₹5,00,000.",
    "financial_benefit": "Smart Vending ID + ₹10,000 - ₹50,000 Subsidized Loan + ₹5 Lakh Insurance",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 60,
      "max_annual_income": 180000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Street Vendor",
        "Daily Wage Worker",
        "Self Employed",
        "Unemployed"
      ],
      "states": [
        "Uttar Pradesh"
      ]
    },
    "rag_clauses": [
      "Clause 1.2: Vending rights issued under State Urban Development Agency (SUDA UP).",
      "Clause 2.1: Direct interest subvention credited on regular monthly EMI repayments.",
      "Clause 3.4: Free coverage under Mukhyamantri Jan Arogya Yojana."
    ],
    "required_documents": [
      "Aadhaar Card",
      "UP Domicile / Ration Card",
      "SUDA / Nagar Nigam Street Vending ID",
      "Bank Passbook"
    ],
    "official_portal_url": "https://edistrict.up.gov.in/",
    "tags": [
      "street vendor",
      "uttar pradesh",
      "suda",
      "path vikreta",
      "nagar nigam",
      "working capital"
    ],
    "state": "Uttar Pradesh"
  },
  {
    "id": "state-od-karigar-sahayata-105",
    "name": "Mukhyamantri Karigar Sahayata Scheme - Odisha",
    "ministry": "Handlooms, Textiles & Handicrafts Department, Govt of Odisha",
    "category": "Livelihood & Credit",
    "level": "State",
    "target_beneficiary": "Eminent traditional artisans, craftspersons, weavers, and sculptors in Odisha",
    "summary": "Provides monthly financial assistance of ₹2,000 (below 80 years) and ₹2,500 (above 80 years) to master artisans and traditional craftspersons with over 10 years experience to sustain their craft.",
    "financial_benefit": "₹2,000 - ₹2,500/month Direct Monthly Livelihood Grant to Master Artisans & Weavers",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 85,
      "max_annual_income": 200000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Artisan",
        "Weaver",
        "Self Employed"
      ],
      "states": [
        "Odisha"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Craftspersons practicing any of the 50 approved traditional handicrafts in Odisha.",
      "Clause 2.3: Monthly pension allowance credited on 15th of every month via DBT.",
      "Clause 3.1: Issued artisan card through Directorate of Handicrafts."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Artisan Identity Card / Handicrafts Registration",
      "Experience Proof Certificate from DIC",
      "Bank Passbook"
    ],
    "official_portal_url": "https://odisha.gov.in/",
    "tags": [
      "artisan",
      "weaver",
      "odisha",
      "karigar sahayata",
      "handicrafts",
      "monthly grant"
    ],
    "state": "Odisha"
  },
  {
    "id": "state-od-yuva-swarojgar-106",
    "name": "Odisha MSME Capital Investment Subsidy & Startup Assistance - Odisha",
    "ministry": "MSME Department, Govt of Odisha",
    "category": "MSME & Entrepreneurship",
    "level": "State",
    "target_beneficiary": "New micro & small entrepreneurs, youth startups, and manufacturers in Odisha",
    "summary": "Provides 30% Capital Investment Subsidy (up to ₹1 Crore for General and ₹1.25 Crore for SC/ST/Women/PWD) + 5% annual interest subsidy for 5 years on MSME term loans.",
    "financial_benefit": "30% Capital Investment Subsidy (Up to ₹1.25 Crore) + 5% Annual Interest Rebate",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 55,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "MSME Owner",
        "Women Entrepreneur",
        "Youth",
        "Self Employed",
        "Unemployed"
      ],
      "states": [
        "Odisha"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Available to new MSME units in manufacturing and priority service sectors in Odisha.",
      "Clause 2.2: 30% capital subsidy on plant and machinery investment.",
      "Clause 3.4: Processed through Odisha Single Window Portal (GO SWIFT)."
    ],
    "required_documents": [
      "Aadhaar Card & PAN Card",
      "Udyam Registration Certificate",
      "Detailed Project Report & Machinery Invoices",
      "Bank Loan Sanction Copy"
    ],
    "official_portal_url": "https://msme.odisha.gov.in/",
    "tags": [
      "msme",
      "odisha",
      "capital subsidy",
      "startup",
      "go swift",
      "manufacturing"
    ],
    "state": "Odisha"
  },
  {
    "id": "state-dl-krishi-sahayata-107",
    "name": "Delhi Krishi Livelihood & Fasal Subsidy Scheme - Delhi",
    "ministry": "Development Department (Agriculture Unit), Govt of NCT of Delhi",
    "category": "Agriculture & Rural Development",
    "level": "State",
    "target_beneficiary": "Small farmers, vegetable/flower cultivators, and peri-urban growers in Delhi NCT",
    "summary": "Provides ₹20,000/acre direct crop compensation for natural disaster/unseasonal rain losses + 50% subsidy on micro-irrigation, solar pumps, and certified vegetable seeds in Delhi.",
    "financial_benefit": "₹20,000/acre Direct Crop Loss Compensation + 50% Drip Irrigation Subsidy",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Farmer",
        "Smallholder",
        "Cultivator"
      ],
      "states": [
        "Delhi"
      ],
      "land_ownership_required": true
    },
    "rag_clauses": [
      "Clause 1.1: Covers agricultural land in rural and peri-urban villages of NCT of Delhi.",
      "Clause 2.1: Highest disaster compensation in India @Rs 20,000 per acre.",
      "Clause 3.3: Revenue Department Girdawari assessment verification."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Delhi Khasra / Khatoni Revenue Record",
      "Girdawari Inspection Slip",
      "Bank Account Details"
    ],
    "official_portal_url": "https://delhi.gov.in/",
    "tags": [
      "farmer",
      "delhi",
      "krishi sahayata",
      "crop loss relief",
      "drip irrigation"
    ],
    "state": "Delhi"
  },
  {
    "id": "state-dl-artisan-handicraft-108",
    "name": "Delhi State Handicraft Artisan & Handloom Support Scheme - Delhi",
    "ministry": "Department of Industries & DSIIDC, Govt of NCT of Delhi",
    "category": "Livelihood & Credit",
    "level": "State",
    "target_beneficiary": "Traditional artisans, sculptors, weavers, potters, and handicraft workers in Delhi",
    "summary": "Provides ₹30,000 state grant for purchasing modernized craft machinery/toolkits + 100% subsidized stall allocations at Dilli Haat (INA, Janakpuri, Pitampura) for direct artisan sales.",
    "financial_benefit": "₹30,000 Modern Machinery Grant + 100% Subsidized Dilli Haat Stalls",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 65,
      "max_annual_income": 250000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Artisan",
        "Weaver",
        "Self Employed"
      ],
      "states": [
        "Delhi"
      ]
    },
    "rag_clauses": [
      "Clause 1.2: Registered artisans with Development Commissioner (Handicrafts) ID cards in Delhi.",
      "Clause 2.4: 15-day rotational stall allotments at Dilli Haat at nominal subsidized charges.",
      "Clause 3.1: Financial grant for raw material and toolkit purchases."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Artisan Pehchan Card / DSIIDC Registration",
      "Delhi Address Proof",
      "Bank Passbook"
    ],
    "official_portal_url": "https://delhi.gov.in/",
    "tags": [
      "artisan",
      "weaver",
      "delhi",
      "dilli haat",
      "dsiidc",
      "handicrafts",
      "toolkit"
    ],
    "state": "Delhi"
  },
  {
    "id": "state-dl-dilli-bazaar-msme-109",
    "name": "Delhi Dilli Bazaar MSME & Retailer Growth Scheme - Delhi",
    "ministry": "Industries Department, Govt of NCT of Delhi",
    "category": "MSME & Entrepreneurship",
    "level": "State",
    "target_beneficiary": "Micro-enterprises, small shopkeepers, traders, and startups operating in Delhi",
    "summary": "Provides zero-setup-cost digital e-commerce storefronts on the Dilli Bazaar portal + up to ₹10 Lakhs collateral-free credit assistance with 5% interest subvention for small businesses.",
    "financial_benefit": "100% Free Global E-Commerce Storefront + ₹10 Lakhs Loan with 5% Interest Rebate",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 60,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "MSME Owner",
        "Women Entrepreneur",
        "Self Employed",
        "Youth",
        "Unemployed"
      ],
      "states": [
        "Delhi"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Open to all retail shops and micro enterprises registered with GST or Municipal Trade License in Delhi.",
      "Clause 2.3: Zero transaction commission on Dilli Bazaar government digital marketplace.",
      "Clause 3.2: 5% interest rebate on working capital and equipment loans."
    ],
    "required_documents": [
      "Aadhaar Card & PAN Card",
      "Delhi Trade License / Shop & Establishment Registration / GST",
      "Bank Statement",
      "Electricity Bill of Business Premises"
    ],
    "official_portal_url": "https://delhi.gov.in/",
    "tags": [
      "msme",
      "delhi",
      "dilli bazaar",
      "retailer",
      "interest rebate",
      "e-commerce"
    ],
    "state": "Delhi"
  },
  {
    "id": "state-bh-bunkar-silk-110",
    "name": "Mukhyamantri Bunkar Sahayata & Silk Weaver Scheme - Bihar",
    "ministry": "Department of Industries, Govt of Bihar",
    "category": "Livelihood & Credit",
    "level": "State",
    "state": "Bihar",
    "target_beneficiary": "Bhagalpur silk weavers, khadi artisans, and handloom craftspersons in Bihar",
    "summary": "Provides ₹10,000 direct working capital grant + 50% subsidy on motorized Jacquard looms and free access to Bihar State Handloom sales emporiums.",
    "financial_benefit": "₹10,000 Cash Working Capital + 50% Loom Modernization Subsidy",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 65,
      "max_annual_income": 200000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Weaver",
        "Artisan",
        "Self Employed"
      ],
      "states": [
        "Bihar"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Active handloom and silk weavers registered with Bihar State Handloom Directorate.",
      "Clause 2.3: Direct DBT disbursement of raw material subsidy into Aadhaar-seeded bank account.",
      "Clause 3.2: 50% capital subsidy on mechanized loom upgrades."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Bihar Weaver Identity Card / Udyog Aadhaar",
      "Bank Passbook",
      "Residential Certificate"
    ],
    "official_portal_url": "https://serviceonline.bihar.gov.in/",
    "tags": [
      "weaver",
      "bihar",
      "bhagalpur silk",
      "bunkar sahayata",
      "handloom",
      "artisan"
    ]
  },
  {
    "id": "state-cg-bunkar-kosa-111",
    "name": "Chhattisgarh Handloom Weaver & Kosa Silk Subsidy Scheme - Chhattisgarh",
    "ministry": "Village & Cottage Industries Dept, Govt of Chhattisgarh",
    "category": "Livelihood & Credit",
    "level": "State",
    "state": "Chhattisgarh",
    "target_beneficiary": "Kosa silk weavers, bell metal artisans, and traditional handloom workers in Chhattisgarh",
    "summary": "Provides ₹20,000 raw material cocoon/yarn subsidy per weaver family + 100% free solar-assisted loom setup and Bilasa Handloom brand sales linkage.",
    "financial_benefit": "₹20,000 Annual Yarn Subsidy + 100% Free Solar Loom Kit",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 65,
      "max_annual_income": 200000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Weaver",
        "Artisan",
        "Self Employed"
      ],
      "states": [
        "Chhattisgarh"
      ]
    },
    "rag_clauses": [
      "Clause 1.2: Traditional Kosa silk and cotton weavers in rural and tribal belts of Chhattisgarh.",
      "Clause 2.1: 100% grant for solar lighting and motorized reelers.",
      "Clause 3.4: Minimum support price purchase guarantee for certified handloom fabric."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Weaver Cooperative Society Membership / Weaver Card",
      "Chhattisgarh Domicile Certificate",
      "Bank Passbook"
    ],
    "official_portal_url": "https://cgstate.gov.in/",
    "tags": [
      "weaver",
      "chhattisgarh",
      "kosa silk",
      "handloom",
      "solar loom",
      "artisan"
    ]
  },
  {
    "id": "state-hr-msme-subvention-112",
    "name": "Haryana Enterprise Promotion & MSME Interest Subvention Scheme - Haryana",
    "ministry": "Industries & Commerce Department, Govt of Haryana",
    "category": "MSME & Entrepreneurship",
    "level": "State",
    "state": "Haryana",
    "target_beneficiary": "Micro & Small business owners, manufacturing startups, and traders in Haryana",
    "summary": "Provides 5% annual interest subvention (up to ₹20 Lakhs) on term loans + ₹2 Lakhs financial support for ISO certification, ZED certification, and patent registration.",
    "financial_benefit": "5% Interest Subvention up to ₹20 Lakhs + ₹2 Lakhs Quality/ZED Grant",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 65,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "MSME Owner",
        "Women Entrepreneur",
        "Self Employed",
        "Youth"
      ],
      "states": [
        "Haryana"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Micro and Small enterprises with valid Udyam Registration located in Haryana.",
      "Clause 2.2: 5% per annum interest subsidy reimbursed semi-annually through HEPC single roof portal.",
      "Clause 3.1: 100% reimbursement of patent registration fees up to ₹2 Lakhs."
    ],
    "required_documents": [
      "Aadhaar Card & PAN Card",
      "Udyam Registration Certificate (Haryana)",
      "Bank Term Loan Sanction Letter",
      "Audited Financials / GST Returns"
    ],
    "official_portal_url": "https://investharyana.in/",
    "tags": [
      "msme",
      "haryana",
      "interest subvention",
      "udyam",
      "startup",
      "manufacturing"
    ]
  },
  {
    "id": "state-hr-vyapari-kalyan-113",
    "name": "Haryana Mukhyamantri Vyapari Kshatipurti & Street Vendor Sahayata - Haryana",
    "ministry": "Finance & Urban Local Bodies Dept, Govt of Haryana",
    "category": "Social Welfare & Safety Nets",
    "level": "State",
    "state": "Haryana",
    "target_beneficiary": "Street vendors, small shopkeepers, registered hawkers, and informal traders in Haryana",
    "summary": "Provides ₹5,00,000 accidental insurance coverage + 7% interest rebate on working capital loans up to ₹50,000 + ₹2,000 quarterly digital transaction incentive.",
    "financial_benefit": "₹5,00,000 Insurance Cover + 7% Loan Interest Rebate + ₹2,000 Digital Incentive",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 60,
      "max_annual_income": 300000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Street Vendor",
        "Daily Wage Worker",
        "Self Employed",
        "Unemployed"
      ],
      "states": [
        "Haryana"
      ]
    },
    "rag_clauses": [
      "Clause 1.3: Registered street vendors holding Town Vending Committee (TVC) ID cards or Parivar Pehchan Patra (PPP).",
      "Clause 2.1: 100% state-sponsored accidental risk and asset damage insurance up to ₹5 Lakhs.",
      "Clause 3.3: Direct interest reimbursement into bank accounts on regular repayment."
    ],
    "required_documents": [
      "Aadhaar Card / Parivar Pehchan Patra (PPP)",
      "Street Vending Certificate / Local Body ID",
      "Bank Passbook",
      "Passport Size Photograph"
    ],
    "official_portal_url": "https://saralharyana.gov.in/",
    "tags": [
      "street vendor",
      "haryana",
      "vyapari kalyan",
      "insurance",
      "micro credit",
      "hawker"
    ]
  },
  {
    "id": "state-as-bocw-shramik-114",
    "name": "Assam Building & Other Construction Workers Welfare Scheme - Assam",
    "ministry": "Labour Welfare Department, Govt of Assam",
    "category": "Social Welfare & Safety Nets",
    "level": "State",
    "state": "Assam",
    "target_beneficiary": "Daily wage construction laborers, carpenters, painters, plumbers, and manual workers in Assam",
    "summary": "Provides ₹20,000 safety toolkit & bicycle grant + ₹2,00,000 accidental medical insurance + ₹25,000 daughter marriage grant + ₹50,000 education assistance for children.",
    "financial_benefit": "₹20,000 Toolkit/Cycle Grant + ₹2,00,000 Health/Accident Cover + ₹25,000 Marriage Grant",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 60,
      "max_annual_income": 180000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Daily Wage Worker",
        "Street Vendor",
        "Artisan",
        "Self Employed",
        "Unemployed"
      ],
      "states": [
        "Assam"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Building and unorganized construction workers working in Assam for at least 90 days in a year.",
      "Clause 2.4: Free toolkits and safety gear delivered through District Labour Officer.",
      "Clause 3.2: Educational stipends and higher study financial rewards for registered workers' children."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Assam BOCW Board Registration / Labour Card",
      "90-Day Work Certificate / Self-Declaration",
      "Bank Passbook"
    ],
    "official_portal_url": "https://abocwwb.assam.gov.in/",
    "tags": [
      "daily wage worker",
      "assam",
      "bocw",
      "shramik kalyan",
      "toolkit",
      "insurance"
    ]
  },
  {
    "id": "pm-surya-ghar-017",
    "name": "PM Surya Ghar: Muft Bijli Yojana",
    "ministry": "Ministry of New and Renewable Energy (MNRE)",
    "category": "Social Welfare & Safety Nets",
    "level": "Central",
    "target_beneficiary": "Residential households, middle class, lower income families, housing societies",
    "summary": "Flagship national rooftop solar scheme providing up to ₹78,000 direct capital subsidy for 1kW to 3kW residential solar installations and up to 300 units of free electricity every month.",
    "financial_benefit": "₹30,000 to ₹78,000 Direct Subsidy + up to 300 units free solar electricity/month",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 85,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "All",
        "Farmer",
        "Self Employed",
        "MSME Owner",
        "Homemaker",
        "Salaried",
        "Artisan",
        "Street Vendor"
      ],
      "states": [
        "All"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Financial assistance of Rs. 30,000 per kW for up to 2 kW capacity and Rs. 18,000 per kW for additional capacity up to 3 kW (Max Rs. 78,000).",
      "Clause 2.3: The applicant household must possess a valid domestic electricity connection and suitable roof space.",
      "Clause 3.2: Collateral-free low-interest loans available from public sector banks at 7% interest rate for the balance amount."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Recent Domestic Electricity Bill",
      "Bank Account Passbook / Cancelled Cheque",
      "Proof of Roof Ownership / Electricity Consumer Number"
    ],
    "application_process": "1. Register on National Portal for Rooftop Solar (pmsuryaghar.gov.in) with DISCOM details. 2. Select empaneled vendor for installation. 3. DISCOM inspects and installs net meter. 4. DBT subsidy credited directly to bank account within 30 days.",
    "official_portal_url": "https://pmsuryaghar.gov.in",
    "tags": [
      "Solar",
      "Electricity",
      "Renewable Energy",
      "Subsidy",
      "Muft Bijli",
      "Rooftop Solar"
    ]
  },
  {
    "id": "pm-awas-urban-018",
    "name": "Pradhan Mantri Awas Yojana - Urban 2.0 (PMAY-U 2.0)",
    "ministry": "Ministry of Housing and Urban Affairs (MoHUA)",
    "category": "Social Welfare & Safety Nets",
    "level": "Central",
    "target_beneficiary": "Urban poor, slum dwellers, EWS, LIG, and Middle Income Group (MIG) families without a pucca house",
    "summary": "Provides interest subsidy up to ₹1.80 Lakhs and direct financial assistance up to ₹2.50 Lakhs for construction, purchase, or enhancement of pucca houses in urban areas.",
    "financial_benefit": "Up to ₹2.50 Lakhs Subsidy (4% interest subsidy on home loans up to ₹25 Lakhs)",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 70,
      "max_annual_income": 900000,
      "gender": [
        "All",
        "Female",
        "Male"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "All",
        "Self Employed",
        "Street Vendor",
        "Artisan",
        "Unorganized Worker",
        "MSME Owner"
      ],
      "states": [
        "All"
      ]
    },
    "rag_clauses": [
      "Clause 4.1: Beneficiary family should not own a pucca house anywhere in India in the name of any family member.",
      "Clause 5.2: EWS annual household income up to Rs. 3,00,000; LIG up to Rs. 6,00,000; MIG up to Rs. 9,00,000.",
      "Clause 6.3: Female ownership or co-ownership of the dwelling unit is mandatory for EWS/LIG categories."
    ],
    "required_documents": [
      "Aadhaar Card of all family members",
      "Income Certificate / ITR / Form 16",
      "Affidavit declaring no pucca house ownership",
      "Bank Account Details",
      "Land / Property Documents or Allotment Letter"
    ],
    "application_process": "Apply online at pmay-urban.gov.in or through Common Service Centre (CSC) with Aadhaar and income proof.",
    "official_portal_url": "https://pmaymis.gov.in",
    "tags": [
      "Housing",
      "PMAY",
      "Urban",
      "Home Loan Subsidy",
      "Pucca Ghar",
      "EWS",
      "LIG"
    ]
  },
  {
    "id": "pm-matru-vandana-019",
    "name": "Pradhan Mantri Matru Vandana Yojana (PMMVY)",
    "ministry": "Ministry of Women and Child Development",
    "category": "Women & Family Welfare",
    "level": "Central",
    "target_beneficiary": "Pregnant women and lactating mothers (PW&LM) for first living child and second girl child",
    "summary": "Direct Benefit Transfer (DBT) maternity benefit of ₹5,000 for first child in two installments and ₹6,000 for second girl child to compensate for wage loss and promote maternal health.",
    "financial_benefit": "₹5,000 - ₹6,000 Direct Cash Benefit into Aadhaar-seeded Bank Account",
    "eligibility_criteria": {
      "min_age": 19,
      "max_age": 45,
      "max_annual_income": 800000,
      "gender": [
        "Female"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "All",
        "Homemaker",
        "Self Employed",
        "Artisan",
        "Farmer",
        "Unorganized Worker"
      ],
      "states": [
        "All"
      ]
    },
    "rag_clauses": [
      "Clause 2.1: Eligible pregnant women receive Rs. 5,000 in two installments (Rs. 3,000 on ANC registration, Rs. 2,000 on child birth registration and first cycle of vaccination).",
      "Clause 2.4: For second child, if the newborn is a girl, the mother is eligible for a single installment of Rs. 6,000.",
      "Clause 3.1: Regular government/PSU employees with paid maternity leave are excluded."
    ],
    "required_documents": [
      "Mother & Father Aadhaar Card",
      "Mother-Child Protection (MCP) Card",
      "Aadhaar-seeded Bank Account Passbook",
      "Birth Certificate of Child (for 2nd installment)"
    ],
    "application_process": "Register through Anganwadi Centre, ASHA worker, or online at pmmvy.wcd.gov.in.",
    "official_portal_url": "https://pmmvy.wcd.gov.in",
    "tags": [
      "Maternity",
      "Pregnancy",
      "Women Welfare",
      "DBT",
      "Nutrition",
      "Girl Child",
      "Childcare"
    ]
  },
  {
    "id": "pm-fasal-bima-020",
    "name": "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    "ministry": "Ministry of Agriculture and Farmers Welfare",
    "category": "Agriculture & Rural Development",
    "level": "Central",
    "target_beneficiary": "All farmers growing notified food crops, oilseeds, and commercial/horticultural crops",
    "summary": "Comprehensive nationwide crop insurance scheme offering full financial protection against non-preventable natural risks, drought, flood, pests, and post-harvest losses at nominal farmer premium rates of 1.5% to 2.0%.",
    "financial_benefit": "Up to 100% Insured Sum Claim for crop failure / loss (Farmer pays only 1.5% - 2% premium)",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 90,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Farmer",
        "Cultivator",
        "Smallholder",
        "Tenant Farmer",
        "Sharecropper"
      ],
      "states": [
        "All"
      ],
      "land_ownership_required": true
    },
    "rag_clauses": [
      "Clause 3.2: Maximum premium payable by farmers is 2% for Kharif food/oilseed crops, 1.5% for Rabi crops, and 5% for annual commercial/horticultural crops.",
      "Clause 4.5: Balance actuarial premium is subsidized 50:50 by Government of India and respective State Government.",
      "Clause 6.1: Covers localized calamities, post-harvest losses (up to 14 days), mid-season adversity, and prevented sowing."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Land Possession Certificate / RoR / Khasra Khatauni",
      "Sowing Certificate / Crop Sowing Declaration",
      "Bank Passbook with IFSC"
    ],
    "application_process": "Enroll via National Crop Insurance Portal (pmfby.gov.in), bank branch, Primary Agricultural Credit Society (PACS), or CSC.",
    "official_portal_url": "https://pmfby.gov.in",
    "tags": [
      "Crop Insurance",
      "Agriculture",
      "Kharif",
      "Rabi",
      "Fasal Bima",
      "Drought Relief",
      "Farmers"
    ]
  },
  {
    "id": "pm-kusum-021",
    "name": "Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan (PM-KUSUM)",
    "ministry": "Ministry of New and Renewable Energy (MNRE)",
    "category": "Agriculture & Rural Development",
    "level": "Central",
    "target_beneficiary": "Individual farmers, farmer producer organizations (FPOs), cooperatives, and water user associations",
    "summary": "Provides 60% government subsidy (30% Central + 30% State) for setting up stand-alone solar agriculture pumps and solarizing grid-connected irrigation pumps up to 7.5 HP.",
    "financial_benefit": "60% Capital Subsidy on Solar Irrigation Pumps + 30% bank loan (Farmer pays only 10%)",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Farmer",
        "Smallholder",
        "Cultivator"
      ],
      "states": [
        "All"
      ],
      "land_ownership_required": true
    },
    "rag_clauses": [
      "Clause 1.2: Component B provides 30% CFA from Central Govt and 30% State subsidy for standalone solar pumps up to 7.5 HP capacity.",
      "Clause 2.1: Farmer contribution is only 10% of total benchmark cost; remaining 30% can be financed through bank loan.",
      "Clause 4.3: Enables diesel pump replacement with clean solar power and solar power feeder monetization (Component C)."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Land Ownership Record / Khasra-Khatauni",
      "Bank Account Details",
      "Electricity Bill (for Component C grid-connected pumps)"
    ],
    "application_process": "Apply online at state renewable energy nodal agency portal or pmkusum.mnre.gov.in.",
    "official_portal_url": "https://pmkusum.mnre.gov.in",
    "tags": [
      "Solar Pump",
      "Irrigation",
      "KUSUM",
      "Agriculture",
      "Renewable Energy",
      "Farmers",
      "Solar"
    ]
  },
  {
    "id": "namo-drone-didi-022",
    "name": "Namo Drone Didi Scheme (NRLM Drone Initiative)",
    "ministry": "Ministry of Rural Development & Ministry of Agriculture",
    "category": "Women & Microfinance",
    "level": "Central",
    "target_beneficiary": "Women Self-Help Groups (SHGs) under Deendayal Antyodaya Yojana - NRLM",
    "summary": "Empowers rural women SHGs by providing 80% capital subsidy (up to ₹8 Lakhs) on agricultural drones, DGCA pilot training, and ₹15,000/month training stipend to provide rental spraying services to farmers.",
    "financial_benefit": "Up to ₹8 Lakhs Capital Subsidy (80% drone cost) + ₹15,000/month stipend during training + sustainable rental income",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 50,
      "max_annual_income": null,
      "gender": [
        "Female"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Women Entrepreneur",
        "Self Employed",
        "Artisan",
        "Farmer"
      ],
      "states": [
        "All"
      ],
      "min_education": "10th Pass"
    },
    "rag_clauses": [
      "Clause 2.1: 80% cost of drone and accessories package (up to Rs. 8 Lakhs) provided as grant to selected Women SHG clusters.",
      "Clause 3.2: One woman member from each SHG is designated Drone Didi and given 15-day certified DGCA remote pilot training.",
      "Clause 4.1: Drone Didis earn recurring service revenue by spraying nano-fertilizers and pesticides on local farmlands."
    ],
    "required_documents": [
      "Aadhaar Card",
      "SHG Membership Certificate",
      "10th Pass Marksheet / Certificate",
      "Bank Account Passbook of SHG"
    ],
    "application_process": "Nomination and selection through Block Mission Management Unit (BMMU) of State Rural Livelihoods Mission (SRLM).",
    "official_portal_url": "https://nrlm.gov.in",
    "tags": [
      "Drone Didi",
      "Women SHG",
      "NRLM",
      "AgriTech",
      "Women Empowerment",
      "Drone Pilot",
      "Livelihood"
    ]
  },
  {
    "id": "pm-internship-scheme-023",
    "name": "Prime Minister's Internship Scheme 2024-25",
    "ministry": "Ministry of Corporate Affairs (MCA)",
    "category": "Education & Student Aid",
    "level": "Central",
    "target_beneficiary": "Youth aged 21-24 years looking for corporate work experience in India's top 500 companies",
    "summary": "Nationwide paid corporate internship initiative offering ₹5,000/month stipend and ₹6,000 one-time incidentals grant for a 12-month internship across leading Indian corporate houses.",
    "financial_benefit": "₹5,000/month Stipend + ₹6,000 One-time Incidentals Allowance (Total ₹66,000/year)",
    "eligibility_criteria": {
      "min_age": 21,
      "max_age": 24,
      "max_annual_income": 800000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Youth",
        "Student",
        "Unemployed"
      ],
      "states": [
        "All"
      ],
      "min_education": "10th / 12th / ITI / Diploma / Graduate"
    },
    "rag_clauses": [
      "Clause 1.2: Candidates aged 21-24 years not engaged in full-time employment or full-time higher education are eligible.",
      "Clause 2.1: Monthly financial assistance of Rs. 4,500 from Central Govt + Rs. 500 from host company CSR (Total Rs. 5,000/mo).",
      "Clause 3.3: Exclusions: IIT/IIM/IISER/NLU graduates, CA/CMA/CS, and families with annual income exceeding Rs. 8 Lakhs or income tax payees."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Educational Certificates (10th/12th/ITI/Degree)",
      "Income Certificate / Self-Declaration",
      "Bank Account Details"
    ],
    "application_process": "Register on the official PM Internship Portal (pminternship.mca.gov.in), create profile, and apply to shortlisted companies.",
    "official_portal_url": "https://pminternship.mca.gov.in",
    "tags": [
      "Internship",
      "Corporate Training",
      "Youth",
      "Stipend",
      "Skill Development",
      "PM Internship",
      "Employment"
    ]
  },
  {
    "id": "lakhpati-didi-024",
    "name": "Lakhpati Didi Initiative (DAY-NRLM)",
    "ministry": "Ministry of Rural Development (MoRD)",
    "category": "Livelihood & Credit",
    "level": "Central",
    "target_beneficiary": "Rural women members of Self-Help Groups (SHGs) across India",
    "summary": "National economic enablement mission designed to help 3 Crore rural SHG women earn a sustainable annual income of at least ₹1,00,000 (₹8,300+/month) through skill training, micro-enterprises, and bank credit linkages.",
    "financial_benefit": "Up to ₹5 Lakhs Interest-Subsidized Micro-Credit + Community Investment Support + Enterprise Training",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 65,
      "max_annual_income": null,
      "gender": [
        "Female"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Women Entrepreneur",
        "Self Employed",
        "Artisan",
        "Farmer",
        "Homemaker"
      ],
      "states": [
        "All"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Aims to enable SHG households to cross an annual sustainable household income threshold of Rs. 1 Lakh.",
      "Clause 2.4: Provides training in high-value agriculture, dairy, poultry, handlooms, food processing, and solar/digital services.",
      "Clause 3.1: Facilitates bank linkages under SHG Bank Linkage Programme with interest subvention up to Rs. 3 Lakhs loan."
    ],
    "required_documents": [
      "Aadhaar Card",
      "SHG Group Passbook",
      "Individual Bank Account Details",
      "SHG Resolution Copy"
    ],
    "application_process": "Enroll through Gram Panchayat Village Organization (VO) / Cluster Level Federation (CLF) under SRLM.",
    "official_portal_url": "https://nrlm.gov.in",
    "tags": [
      "Lakhpati Didi",
      "NRLM",
      "Women SHG",
      "Micro-Enterprise",
      "Self-Help Groups",
      "Rural Livelihood"
    ]
  },
  {
    "id": "naps-scheme-025",
    "name": "National Apprenticeship Promotion Scheme (NAPS-2)",
    "ministry": "Ministry of Skill Development and Entrepreneurship (MSDE)",
    "category": "Skill & Employment",
    "level": "Central",
    "target_beneficiary": "ITI graduates, diploma holders, graduates, and 10th/12th pass youth seeking on-the-job industrial apprenticeship",
    "summary": "Promotes apprenticeship training across Indian industrial establishments by providing 25% of prescribed monthly stipend (up to ₹1,500/month) directly into the apprentice’s bank account via DBT.",
    "financial_benefit": "25% Stipend Subsidy (up to ₹1,500/month) via DBT + Industry Training Certificate",
    "eligibility_criteria": {
      "min_age": 14,
      "max_age": 35,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Youth",
        "Student",
        "Unemployed"
      ],
      "states": [
        "All"
      ],
      "min_education": "5th Pass to Graduate"
    },
    "rag_clauses": [
      "Clause 2.1: Direct Benefit Transfer of 25% of the stipend payable (maximum Rs. 1,500 per month) directly to the apprentice bank account.",
      "Clause 3.2: Industry establishments pay remaining 75% stipend directly to apprentice.",
      "Clause 4.1: National Apprenticeship Certificate (NAC) awarded upon completion and assessment by NCVET."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Educational Marksheets (10th/12th/ITI/Diploma)",
      "Bank Account Details",
      "Passport Size Photograph"
    ],
    "application_process": "Register on Apprenticeship India Portal (apprenticeshipindia.gov.in), search opportunities, and apply directly to establishments.",
    "official_portal_url": "https://www.apprenticeshipindia.gov.in",
    "tags": [
      "Apprenticeship",
      "NAPS",
      "Skill Development",
      "Stipend",
      "Industrial Training",
      "Youth Employment"
    ]
  },
  {
    "id": "pm-janaushadhi-026",
    "name": "Pradhan Mantri Bharatiya Janaushadhi Pariyojana (PMBJP)",
    "ministry": "Ministry of Chemicals and Fertilizers (Department of Pharmaceuticals)",
    "category": "Healthcare & Social Security",
    "level": "Central",
    "target_beneficiary": "Unemployed pharmacists, entrepreneurs, doctors, NGOs, and cooperatives opening Jan Aushadhi Kendras",
    "summary": "Provides financial incentive of up to ₹5.00 Lakhs (15% of monthly sales up to ₹20,000/month) and additional ₹2.00 Lakh one-time reimbursement for women entrepreneurs, SC/ST, and aspirational districts to operate generic medicine pharmacies.",
    "financial_benefit": "Up to ₹5 Lakhs - ₹7 Lakhs Financial Incentive / Reimbursement + 20% pharmacy retail margin",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 65,
      "max_annual_income": null,
      "gender": [
        "All",
        "Female",
        "Male"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "MSME Owner",
        "Women Entrepreneur",
        "Self Employed",
        "Youth"
      ],
      "states": [
        "All"
      ],
      "min_education": "D.Pharm / B.Pharm degree or hiring a registered pharmacist"
    },
    "rag_clauses": [
      "Clause 3.1: Financial incentive of 15% of monthly purchase value, subject to ceiling of Rs. 20,000 per month up to total Rs. 5.00 Lakh.",
      "Clause 3.3: Special one-time additional incentive of Rs. 2.00 Lakh for Kendras opened in North-East, Himalayan, SC/ST, and Women entrepreneurs.",
      "Clause 4.2: Retail margin of 20% on MRP of all generic medicines and surgical products."
    ],
    "required_documents": [
      "Aadhaar Card & PAN Card",
      "D.Pharm / B.Pharm Registration Certificate",
      "Shop Ownership / Rental Agreement (Min 120 sq ft)",
      "Bank Details",
      "Drug License (Retail)"
    ],
    "application_process": "Apply online through Pharmaceuticals & Medical Devices Bureau of India (PMBI) portal at janaushadhi.gov.in.",
    "official_portal_url": "https://janaushadhi.gov.in",
    "tags": [
      "Jan Aushadhi",
      "Pharmacy",
      "Generic Medicine",
      "Healthcare",
      "Entrepreneurship",
      "PMBJP"
    ]
  },
  {
    "id": "mahila-samman-savings-027",
    "name": "Mahila Samman Savings Certificate (MSSC)",
    "ministry": "Ministry of Finance (Department of Economic Affairs)",
    "category": "Women Empowerment",
    "level": "Central",
    "target_beneficiary": "All women and minor girls (opened by legal guardian)",
    "summary": "Government-backed small savings scheme for women offering high guaranteed 7.5% annual compound interest on a 2-year fixed deposit of up to ₹2 Lakhs with partial withdrawal facility after 1 year.",
    "financial_benefit": "7.5% Guaranteed Fixed Interest compounded quarterly + up to ₹2 Lakhs secure investment",
    "eligibility_criteria": {
      "min_age": 0,
      "max_age": 100,
      "max_annual_income": null,
      "gender": [
        "Female"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "All",
        "Homemaker",
        "Women Entrepreneur",
        "Student",
        "Self Employed"
      ],
      "states": [
        "All"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Account can be opened by a woman for herself, or by a guardian on behalf of a minor girl child.",
      "Clause 2.2: Minimum deposit Rs. 1,000; maximum deposit Rs. 2,00,000 in multiples of Rs. 100.",
      "Clause 3.1: Fixed interest rate of 7.5% per annum, compounded quarterly and paid upon maturity after 2 years.",
      "Clause 4.1: Up to 40% partial withdrawal permitted after completion of 1 year from account opening."
    ],
    "required_documents": [
      "Aadhaar Card of Account Holder / Guardian",
      "PAN Card",
      "KYC Form & Passport Size Photo",
      "Birth Certificate (for minor girl)"
    ],
    "application_process": "Submit application form at any Post Office branch or authorized Public/Private Sector Bank.",
    "official_portal_url": "https://www.indiapost.gov.in",
    "tags": [
      "Mahila Samman",
      "Savings",
      "Women Scheme",
      "Fixed Deposit",
      "India Post",
      "Finance"
    ]
  },
  {
    "id": "nmmss-scholarship-028",
    "name": "National Means-cum-Merit Scholarship Scheme (NMMSS)",
    "ministry": "Ministry of Education (Department of School Education & Literacy)",
    "category": "Education & Student Aid",
    "level": "Central",
    "target_beneficiary": "Meritorious students from economically weaker sections studying in Class 9 to Class 12",
    "summary": "Provides ₹12,000 per year (₹1,000/month) direct cash scholarship to meritorious students from Class 9 through Class 12 in government/aided schools to arrest secondary school dropout rates.",
    "financial_benefit": "₹12,000/year (Total ₹48,000 over 4 years) via DBT directly into student’s bank account",
    "eligibility_criteria": {
      "min_age": 12,
      "max_age": 19,
      "max_annual_income": 350000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Student"
      ],
      "states": [
        "All"
      ],
      "min_education": "Class 7 / 8 Pass (Min 55% marks, 50% for SC/ST)"
    },
    "rag_clauses": [
      "Clause 1.1: Total parental annual income from all sources must not exceed Rs. 3,50,000.",
      "Clause 2.1: Selection through state-level NMMS Examination conducted at Class 8 level (Mental Ability Test + Scholastic Aptitude Test).",
      "Clause 3.2: Scholarship of Rs. 12,000 per annum paid from Class 9 to Class 12, subject to maintaining at least 55% marks in annual exams."
    ],
    "required_documents": [
      "Aadhaar Card of Student",
      "Income Certificate (<= Rs. 3.5L)",
      "Class 7/8 Marksheet",
      "Caste Certificate (if SC/ST)",
      "Bank Account Details (Aadhaar Seeded)"
    ],
    "application_process": "Apply online on the National Scholarship Portal (NSP) at scholarships.gov.in.",
    "official_portal_url": "https://scholarships.gov.in",
    "tags": [
      "Scholarship",
      "NMMSS",
      "School Education",
      "Merit",
      "DBT",
      "Students",
      "EWS"
    ]
  },
  {
    "id": "nsap-ignoaps-029",
    "name": "Indira Gandhi National Old Age Pension Scheme (IGNOAPS - NSAP)",
    "ministry": "Ministry of Rural Development",
    "category": "Social Welfare & Safety Nets",
    "level": "Central",
    "target_beneficiary": "Senior citizens aged 60 years and above living below poverty line (BPL)",
    "summary": "Central monthly non-contributory social security pension for BPL senior citizens, topped up with additional state contributions to provide ₹500 to ₹2,500/month dignified livelihood support.",
    "financial_benefit": "₹500 - ₹2,500/month Direct Cash Pension (Central assistance + State top-up)",
    "eligibility_criteria": {
      "min_age": 60,
      "max_age": 120,
      "max_annual_income": 100000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "All",
        "Senior Citizen",
        "Unorganized Worker",
        "Artisan",
        "Farmer"
      ],
      "states": [
        "All"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Applicant must be 60 years or older and belong to a household living Below the Poverty Line (BPL).",
      "Clause 2.1: Central assistance of Rs. 200/month for age 60-79 and Rs. 500/month for age 80+, enhanced significantly by respective State Govts.",
      "Clause 3.1: Pension disbursed monthly directly to beneficiary bank/post office account via DBT."
    ],
    "required_documents": [
      "Aadhaar Card",
      "BPL Ration Card / SECC Data Proof",
      "Age Proof (Voter ID / Birth Certificate)",
      "Bank / Post Office Passbook"
    ],
    "application_process": "Apply at Gram Panchayat / Block Development Office / Municipal Ward Office or online via nsap.nic.in.",
    "official_portal_url": "https://rural.gov.in",
    "tags": [
      "Old Age Pension",
      "Senior Citizen",
      "NSAP",
      "IGNOAPS",
      "Social Security",
      "BPL",
      "DBT"
    ]
  },
  {
    "id": "pm-edrive-032",
    "name": "PM Electric Drive Revolution in Innovative Vehicle Enhancement (PM e-Drive)",
    "ministry": "Ministry of Heavy Industries (MHI)",
    "category": "MSME & Entrepreneurship",
    "level": "Central",
    "target_beneficiary": "Buyers of electric 2-wheelers, electric 3-wheelers, commercial e-rickshaws, and fleet operators",
    "summary": "₹10,900 Crore national flagship EV incentive scheme offering upfront purchase demand incentives from ₹5,000 to ₹50,000 for electric vehicles and subsidized charging infrastructure.",
    "financial_benefit": "₹5,000 to ₹50,000 Upfront Purchase Incentive / Discount on EV purchase",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 75,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "All",
        "Street Vendor",
        "MSME Owner",
        "Self Employed",
        "Delivery Partner",
        "Youth"
      ],
      "states": [
        "All"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Financial incentives provided directly at point of sale to reduce purchase cost of eligible electric two-wheelers and three-wheelers.",
      "Clause 2.3: Aadhaar-authenticated e-vouchers generated for transparent verification and instant subsidy deduction at authorized dealership."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Driving License",
      "PAN Card",
      "Electricity Bill (for charging connection)"
    ],
    "application_process": "Incentive applied instantly at approved EV dealership upon Aadhaar OTP e-voucher authentication.",
    "official_portal_url": "https://heavyindustries.gov.in",
    "tags": [
      "Electric Vehicle",
      "EV Subsidy",
      "PM e-Drive",
      "Clean Mobility",
      "Auto",
      "Two Wheeler",
      "E-Rickshaw"
    ]
  },
  {
    "id": "pm-ujjwala-037",
    "name": "Pradhan Mantri Ujjwala Yojana 2.0 (PMUY 2.0)",
    "ministry": "Ministry of Petroleum and Natural Gas (MoPNG)",
    "category": "Social Welfare & Safety Nets",
    "level": "Central",
    "target_beneficiary": "Adult women from poor/BPL, SC, ST, PM Awas, and most backward households without existing LPG connection",
    "summary": "Provides deposit-free LPG gas connection, free first cylinder refill, free gas stove (hotplate), and targeted ₹300/cylinder DBT refill subsidy up to 12 refills/year.",
    "financial_benefit": "100% Free LPG Connection + Free Stove & First Refill (₹2,200 value) + ₹300/cylinder Refill DBT Subsidy",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 80,
      "max_annual_income": 150000,
      "gender": [
        "Female"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "All",
        "Homemaker",
        "Farmer",
        "Self Employed",
        "Artisan"
      ],
      "states": [
        "All"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Adult woman of poor household having no LPG connection in any household member’s name.",
      "Clause 2.1: Connection provided without deposit for cylinder, pressure regulator, and installation charges.",
      "Clause 3.2: First refill and hotplate provided completely free of cost by Oil Marketing Companies (IOCL/BPCL/HPCL).",
      "Clause 4.1: Direct cash subsidy of Rs. 300 per 14.2 kg cylinder credited directly to beneficiary bank account for up to 12 refills/year."
    ],
    "required_documents": [
      "Aadhaar Card of Applicant & adult family members",
      "Ration Card / BPL Document / Family Composition Certificate",
      "Bank Passbook with Aadhaar Linkage"
    ],
    "application_process": "Apply at nearest Indane / Bharatgas / HP Gas distributor or online at pmuy.gov.in.",
    "official_portal_url": "https://pmuy.gov.in",
    "tags": [
      "Ujjwala",
      "LPG Gas",
      "Free Connection",
      "Clean Cooking Fuel",
      "Women Welfare",
      "DBT",
      "PMUY"
    ]
  },
  {
    "id": "kmut-tamilnadu-115",
    "name": "Kalaignar Magalir Urimai Thittam (KMUT) - Tamil Nadu",
    "ministry": "Department of Special Programme Implementation, Government of Tamil Nadu",
    "category": "Women & Social Security",
    "level": "State",
    "target_beneficiary": "Women heads of family in Tamil Nadu with annual household income <= ₹2.5 Lakhs",
    "summary": "Flagship basic income rights scheme of Tamil Nadu providing ₹1,000 every month directly to bank accounts of over 1.15 Crore women family heads to recognize their unpaid care work.",
    "financial_benefit": "₹1,000/month (₹12,000/year) Direct Benefit Transfer to Bank Account",
    "eligibility_criteria": {
      "min_age": 21,
      "max_age": 75,
      "max_annual_income": 250000,
      "gender": [
        "Female"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "All",
        "Homemaker",
        "Women Entrepreneur",
        "Self Employed",
        "Artisan",
        "Farmer"
      ],
      "states": [
        "Tamil Nadu"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: The applicant must be a woman head of household resident in Tamil Nadu aged 21 years or older.",
      "Clause 2.1: Annual household income must be below Rs. 2,50,000, landholding below 5 acres wetland or 10 acres dryland, and annual electricity consumption below 3,600 units.",
      "Clause 3.2: Amount of Rs. 1,000 deposited on 15th of every month into woman’s Aadhaar-linked bank account."
    ],
    "required_documents": [
      "Smart Ration Card (Family Card)",
      "Aadhaar Card",
      "Electricity Consumer Card / Bill",
      "Bank Passbook with Aadhaar Linkage"
    ],
    "application_process": "Submit application at special ward/village camp or e-Sevai centre (tnesevai.tn.gov.in).",
    "official_portal_url": "https://kmut.tn.gov.in",
    "tags": [
      "KMUT",
      "Tamil Nadu",
      "Magalir Urimai",
      "Women Basic Income",
      "DBT",
      "Monthly Pension"
    ]
  },
  {
    "id": "mahila-samman-delhi-116",
    "name": "Mukhyamantri Mahila Samman Yojana - Delhi",
    "ministry": "Department of Women and Child Development, Government of NCT of Delhi",
    "category": "Women & Social Welfare",
    "level": "State",
    "target_beneficiary": "All women aged 18 and above residing in Delhi who are not government employees or taxpayers",
    "summary": "Universal women empowerment financial assistance providing ₹1,000 per month direct cash transfer to adult women in Delhi for financial independence and dignity.",
    "financial_benefit": "₹1,000/month (₹12,000/year) Direct Bank Transfer",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 80,
      "max_annual_income": 300000,
      "gender": [
        "Female"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "All",
        "Homemaker",
        "Self Employed",
        "Student",
        "Artisan"
      ],
      "states": [
        "Delhi"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Woman must be a bona fide resident of NCT of Delhi registered on Delhi Voter List.",
      "Clause 2.1: Applicant must not be an income tax payer, government employee, or already receiving other government pension."
    ],
    "required_documents": [
      "Delhi Voter ID Card",
      "Aadhaar Card",
      "Self-declaration of non-taxpayer status",
      "Bank Account Passbook"
    ],
    "application_process": "Apply online at edistrict.delhigovt.nic.in or designated Delhi Government citizen service camps.",
    "official_portal_url": "https://delhi.gov.in",
    "tags": [
      "Delhi",
      "Mahila Samman",
      "Women Empowerment",
      "Monthly Allowance",
      "DBT"
    ]
  },
  {
    "id": "subhadra-yojana-odisha-118",
    "name": "Subhadra Yojana - Odisha",
    "ministry": "Women and Child Development Department, Government of Odisha",
    "category": "Women Empowerment",
    "level": "State",
    "target_beneficiary": "Women aged 21 to 60 years belonging to eligible families in Odisha",
    "summary": "Landmark women transformation scheme offering ₹50,000 total financial assistance over 5 years (₹10,000/year paid in two installments of ₹5,000 on Rakhi Purnima and International Women’s Day).",
    "financial_benefit": "₹50,000 Total Assistance (₹10,000 per year via 2 installments of ₹5,000) + Subhadra Debit Card",
    "eligibility_criteria": {
      "min_age": 21,
      "max_age": 60,
      "max_annual_income": 250000,
      "gender": [
        "Female"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "All",
        "Homemaker",
        "Women Entrepreneur",
        "Self Employed",
        "Farmer"
      ],
      "states": [
        "Odisha"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Women resident in Odisha aged 21 to 60 years covered under NFSA/SFSS or fulfilling income criteria are eligible.",
      "Clause 2.1: Rs. 10,000 disbursed annually in two equal installments of Rs. 5,000 directly through Aadhaar-enabled DBT.",
      "Clause 3.1: Beneficiaries with highest digital transactions in each Gram Panchayat/ULB receive additional Rs. 500 reward."
    ],
    "required_documents": [
      "Aadhaar Card (linked with mobile number)",
      "Aadhaar-seeded Bank Account Passbook",
      "Ration Card (NFSA/SFSS)"
    ],
    "application_process": "Fill offline form available free at Anganwadi / Mo Seva Kendras, or apply online at subhadra.odisha.gov.in.",
    "official_portal_url": "https://subhadra.odisha.gov.in",
    "tags": [
      "Subhadra Yojana",
      "Odisha",
      "Women DBT",
      "Rakhi Purnima",
      "Financial Independence",
      "Mo Seva"
    ]
  },
  {
    "id": "kanya-sumangala-up-120",
    "name": "Mukhyamantri Kanya Sumangala Yojana - Uttar Pradesh",
    "ministry": "Women and Child Development Department, Government of Uttar Pradesh",
    "category": "Women & Child Development",
    "level": "State",
    "target_beneficiary": "Girl children born in Uttar Pradesh into families with annual income <= ₹3 Lakhs (up to 2 girls per family)",
    "summary": "Enhanced milestone-based direct financial assistance providing ₹25,000 across 6 stages from birth, complete vaccinations, Class 1 admission, Class 6 admission, Class 9 admission, to Degree/Diploma admission.",
    "financial_benefit": "₹25,000 Total Financial Assistance across 6 Educational & Health Milestones",
    "eligibility_criteria": {
      "min_age": 0,
      "max_age": 25,
      "max_annual_income": 300000,
      "gender": [
        "Female"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Student",
        "All"
      ],
      "states": [
        "Uttar Pradesh"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Permanent resident of Uttar Pradesh with annual family income not exceeding Rs. 3,00,000.",
      "Clause 2.1: Stage 1: Rs. 5,000 at birth; Stage 2: Rs. 2,000 upon complete immunization; Stage 3: Rs. 3,000 at Class 1 admission; Stage 4: Rs. 3,000 at Class 6 admission; Stage 5: Rs. 5,000 at Class 9 admission; Stage 6: Rs. 7,000 upon admission to Degree/Diploma."
    ],
    "required_documents": [
      "Birth Certificate of Girl Child",
      "Aadhaar Card of Parent & Child",
      "Income Certificate (<= Rs. 3 Lakhs)",
      "Admission Proof / School Marksheet",
      "Bank Passbook"
    ],
    "application_process": "Apply online at mksy.up.gov.in or through Citizen Service Centres (CSC).",
    "official_portal_url": "https://mksy.up.gov.in",
    "tags": [
      "Kanya Sumangala",
      "Uttar Pradesh",
      "Girl Child",
      "Education Subsidy",
      "Scholarship",
      "DBT"
    ]
  },
  {
    "id": "kanyashree-westbengal-121",
    "name": "Kanyashree Prakalpa (K1, K2, K3) - West Bengal",
    "ministry": "Department of Women & Child Development and Social Welfare, Government of West Bengal",
    "category": "Education & Scholarship",
    "level": "State",
    "target_beneficiary": "Unmarried adolescent girls aged 13-19 years studying in recognized institutions in West Bengal",
    "summary": "Globally acclaimed United Nations Public Service Award-winning conditional cash transfer scheme providing ₹1,000 annual scholarship (K1) and ₹25,000 one-time grant at age 18 (K2) to prevent child marriage and promote girl education.",
    "financial_benefit": "₹1,000/year Scholarship (K1) + ₹25,000 One-time Grant (K2) + Post-Graduate Stipend (K3)",
    "eligibility_criteria": {
      "min_age": 13,
      "max_age": 19,
      "max_annual_income": 120000,
      "gender": [
        "Female"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Student"
      ],
      "states": [
        "West Bengal"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: K1: Annual scholarship of Rs. 1,000 for unmarried girls aged 13-18 enrolled in Classes 8-12.",
      "Clause 2.1: K2: One-time grant of Rs. 25,000 for unmarried girls turning 18 who are enrolled in higher education or vocational training.",
      "Clause 3.1: Income cap waived for children of special homes and differently-abled girls."
    ],
    "required_documents": [
      "Birth Certificate",
      "Unmarried Declaration / Affidavit",
      "School Enrollment Certificate",
      "Bank Account Details",
      "Aadhaar Card"
    ],
    "application_process": "Forms distributed and submitted directly through school/college head of institution on wbkanyashree.gov.in.",
    "official_portal_url": "https://wbkanyashree.gov.in",
    "tags": [
      "Kanyashree",
      "West Bengal",
      "Girl Education",
      "Child Marriage Prevention",
      "UN Award",
      "Scholarship"
    ]
  },
  {
    "id": "gruha-jyothi-karnataka-128",
    "name": "Gruha Jyothi Scheme (200 Units Free Power) - Karnataka",
    "ministry": "Energy Department, Government of Karnataka",
    "category": "Social Welfare & Safety Nets",
    "level": "State",
    "target_beneficiary": "All domestic electricity consumers / households in Karnataka",
    "summary": "Flagship guarantee scheme providing 100% free domestic electricity up to 200 units every month to all residential households in Karnataka.",
    "financial_benefit": "Up to ₹1,500 - ₹2,000/month Zero Electricity Bill (100% Free Power up to 200 Units)",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 100,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "All",
        "Homemaker",
        "Farmer",
        "Self Employed",
        "MSME Owner",
        "Artisan"
      ],
      "states": [
        "Karnataka"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Domestic consumers whose average monthly consumption in past 12 months is under 200 units receive zero electricity bill.",
      "Clause 2.2: Consumers receive entitlement of average consumption + 10% buffer units completely free.",
      "Clause 3.1: Both homeowners and tenants with valid rental agreement / electricity consumer account are eligible."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Electricity Account ID / Consumer Number",
      "Tenancy Agreement (if tenant)"
    ],
    "application_process": "Apply online at Seva Sindhu Portal (sevasindhugs.karnataka.gov.in) with Aadhaar and Consumer Account ID.",
    "official_portal_url": "https://sevasindhugs.karnataka.gov.in",
    "tags": [
      "Gruha Jyothi",
      "Karnataka",
      "Free Power",
      "Electricity Subsidy",
      "Seva Sindhu",
      "Guarantees"
    ]
  },
  {
    "id": "pm-kmy-038",
    "name": "Pradhan Mantri Kisan Maandhan Yojana (PM-KMY)",
    "ministry": "Ministry of Agriculture and Farmers Welfare",
    "category": "Agriculture & Rural Development",
    "level": "Central",
    "target_beneficiary": "Small and marginal farmers owning up to 2 hectares (5 acres) of cultivable land",
    "summary": "Voluntary and contributory pension scheme providing an assured minimum monthly pension of ₹3,000 to small and marginal farmers upon reaching the age of 60 years.",
    "financial_benefit": "₹3,000/month Assured Lifetime Pension upon turning 60 (50% matching govt contribution)",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 40,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Farmer",
        "Smallholder",
        "Cultivator"
      ],
      "states": [
        "All"
      ],
      "land_ownership_required": true
    },
    "rag_clauses": [
      "Clause 1.1: Small and marginal farmers possessing cultivable land up to 2 hectares as per state land records.",
      "Clause 2.1: Entry age between 18 to 40 years with monthly contribution ranging from Rs. 55 to Rs. 200.",
      "Clause 3.1: Central Government matches equal 50% contribution into pension fund managed by LIC of India.",
      "Clause 4.2: In case of death of subscriber, spouse is entitled to 50% family pension (Rs. 1,500/month)."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Savings Bank Account Passbook / PM-KISAN Account",
      "Land Record Documents (Khasra/Khatauni)"
    ],
    "application_process": "Enroll at nearest Common Services Centre (CSC) or self-enroll on maandhan.in.",
    "official_portal_url": "https://maandhan.in",
    "tags": [
      "Kisan Pension",
      "PM-KMY",
      "Agriculture",
      "Farmers",
      "Old Age Security",
      "CSC",
      "Maandhan"
    ]
  },
  {
    "id": "pm-sym-039",
    "name": "Pradhan Mantri Shram Yogi Maandhan (PM-SYM)",
    "ministry": "Ministry of Labour and Employment",
    "category": "Social Welfare & Safety Nets",
    "level": "Central",
    "target_beneficiary": "Unorganized workers (domestic helpers, street vendors, drivers, construction workers, tailors, agricultural labourers)",
    "summary": "Contributory pension scheme for unorganized workers with monthly income <= ₹15,000, ensuring a guaranteed ₹3,000/month pension after 60 years of age with 50:50 government matching contribution.",
    "financial_benefit": "₹3,000/month Guaranteed Pension after age 60 + Family Pension for spouse",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 40,
      "max_annual_income": 180000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Street Vendor",
        "Artisan",
        "Self Employed",
        "Delivery Partner",
        "Unorganized Worker",
        "Homemaker"
      ],
      "states": [
        "All"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Unorganized worker engaged in occupations such as street vending, domestic work, rickshaw pulling, construction, etc.",
      "Clause 2.1: Monthly income must be Rs. 15,000 or less; not covered under EPFO/ESIC/NPS.",
      "Clause 3.1: Minimum monthly contribution Rs. 55 to Rs. 200 depending on entry age, with equal 100% government matching."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Savings Bank Account Passbook / Jan Dhan Account",
      "Mobile Number linked with Aadhaar"
    ],
    "application_process": "Visit nearest CSC with Aadhaar and bank details or register at maandhan.in / e-Shram portal.",
    "official_portal_url": "https://maandhan.in",
    "tags": [
      "Shram Yogi",
      "PM-SYM",
      "Unorganized Sector",
      "Pension",
      "e-Shram",
      "Labour",
      "Social Security"
    ]
  },
  {
    "id": "pm-gkay-040",
    "name": "Pradhan Mantri Garib Kalyan Anna Yojana (PMGKAY)",
    "ministry": "Ministry of Consumer Affairs, Food and Public Distribution",
    "category": "Social Welfare & Safety Nets",
    "level": "Central",
    "target_beneficiary": "81.35 Crore NFSA beneficiaries (Antyodaya Anna Yojana & Priority Households)",
    "summary": "Provides 5 kg of free foodgrains (rice/wheat/coarse grains) per person per month to Priority Households and 35 kg per family per month to AAY families through the One Nation One Ration Card (ONORC) network.",
    "financial_benefit": "100% Free Foodgrains (5 kg/person/month for PHH; 35 kg/family/month for AAY)",
    "eligibility_criteria": {
      "min_age": 0,
      "max_age": 120,
      "max_annual_income": 150000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "All",
        "Farmer",
        "Street Vendor",
        "Artisan",
        "Unorganized Worker",
        "Homemaker"
      ],
      "states": [
        "All"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: All beneficiaries covered under National Food Security Act (NFSA) receive free foodgrains without paying central issue price.",
      "Clause 2.3: Portability across India enabled via One Nation One Ration Card (ONORC) biometric authentication at any Fair Price Shop (FPS)."
    ],
    "required_documents": [
      "NFSA Ration Card / Smart Ration Card",
      "Aadhaar Card of Family Members",
      "Biometric / e-PoS Verification"
    ],
    "application_process": "Collect entitled free grains monthly from nearest Fair Price Shop (FPS) using biometric authentication.",
    "official_portal_url": "https://nfsa.gov.in",
    "tags": [
      "Free Ration",
      "PMGKAY",
      "Food Security",
      "ONORC",
      "Ration Card",
      "Antyodaya",
      "DBT Food"
    ]
  },
  {
    "id": "sbm-gramin-041",
    "name": "Swachh Bharat Mission - Gramin (IHHL Toilet Subsidy)",
    "ministry": "Ministry of Jal Shakti (Department of Drinking Water and Sanitation)",
    "category": "Social Welfare & Safety Nets",
    "level": "Central",
    "target_beneficiary": "Rural households without sanitation facilities (BPL, SC/ST, small farmers, women-headed households)",
    "summary": "Provides ₹12,000 direct financial incentive for construction of Individual Household Latrines (IHHL) with twin-pit safe sanitation technology to ensure Open Defecation Free (ODF) Plus rural India.",
    "financial_benefit": "₹12,000 Direct Financial Incentive / Subsidy for toilet construction",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 90,
      "max_annual_income": 200000,
      "gender": [
        "All",
        "Female",
        "Male"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "All",
        "Farmer",
        "Artisan",
        "Homemaker",
        "Unorganized Worker"
      ],
      "states": [
        "All"
      ]
    },
    "rag_clauses": [
      "Clause 2.1: Financial incentive of Rs. 12,000 provided to eligible rural households for constructing an Individual Household Latrine (IHHL).",
      "Clause 3.1: Central-State funding share is 60:40 (90:10 for North East and Himalayan States).",
      "Clause 4.1: Geo-tagging of constructed toilet photograph required before final DBT disbursement."
    ],
    "required_documents": [
      "Aadhaar Card",
      "Bank Passbook Details with IFSC",
      "Photograph of applicant with constructed toilet (Geo-tagged)"
    ],
    "application_process": "Apply online on SBM-G portal (sbm.gov.in) or submit application to Gram Panchayat Secretary.",
    "official_portal_url": "https://sbm.gov.in",
    "tags": [
      "Toilet Subsidy",
      "Swachh Bharat",
      "Sanitation",
      "SBM-G",
      "Rural Development",
      "IHHL",
      "Jal Shakti"
    ]
  },
  {
    "id": "cgtmse-msme-042",
    "name": "Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE)",
    "ministry": "Ministry of Micro, Small and Medium Enterprises (MSME)",
    "category": "MSME & Entrepreneurship",
    "level": "Central",
    "target_beneficiary": "New and existing Micro and Small Enterprises (MSEs) seeking collateral-free business loans",
    "summary": "Enables collateral-free credit facilities up to ₹5.00 Crores for micro and small enterprises by providing 75% to 85% credit guarantee coverage to Member Lending Institutions (MLIs).",
    "financial_benefit": "Up to ₹5 Crores Collateral-Free Bank Loan with 85% Govt Credit Guarantee",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 70,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "MSME Owner",
        "Women Entrepreneur",
        "Self Employed",
        "Artisan"
      ],
      "states": [
        "All"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: Collateral-free credit facility up to Rs. 500 Lakhs extended to new and existing Micro and Small Enterprises.",
      "Clause 2.2: Guarantee coverage is 85% for micro enterprises up to Rs. 5 Lakhs, and 85% for Women-owned MSEs and SC/ST entrepreneurs across all loan slabs.",
      "Clause 3.1: Annual guarantee fee capped at concessional 0.37% for loans up to Rs. 10 Lakhs."
    ],
    "required_documents": [
      "Udyam Registration Certificate",
      "Detailed Project Report (DPR) / Business Plan",
      "PAN Card & Aadhaar Card of Promoters",
      "ITR / GST Returns / Bank Account Statements"
    ],
    "application_process": "Apply through any scheduled commercial bank or apply online via JanSamarth Portal (jansamarth.in).",
    "official_portal_url": "https://www.cgtmse.in",
    "tags": [
      "CGTMSE",
      "Collateral Free Loan",
      "MSME",
      "Credit Guarantee",
      "Business Loan",
      "JanSamarth"
    ]
  },
  {
    "id": "ddu-gky-043",
    "name": "Deen Dayal Upadhyaya Grameen Kaushalya Yojana (DDU-GKY)",
    "ministry": "Ministry of Rural Development (MoRD)",
    "category": "Skill & Employment",
    "level": "Central",
    "target_beneficiary": "Poor rural youth aged 15-35 years (up to 45 years for women and special categories)",
    "summary": "Demand-driven, placement-linked residential skill training program guaranteeing at least 70% placement with minimum wage standards and post-placement financial support for rural poor youth.",
    "financial_benefit": "100% Free Residential Skill Training + Uniform + Boarding + Guaranteed Placement (Min ₹6,000 - ₹12,000/mo wage)",
    "eligibility_criteria": {
      "min_age": 15,
      "max_age": 35,
      "max_annual_income": 150000,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Youth",
        "Student",
        "Unemployed"
      ],
      "states": [
        "All"
      ],
      "min_education": "5th Pass to 12th Pass"
    },
    "rag_clauses": [
      "Clause 1.2: Targets rural youth from BPL/SECC households, MGNREGA workers households (with >= 15 days work), or RSBY beneficiaries.",
      "Clause 2.1: Mandates guaranteed placement for at least 70% trained candidates with salary >= statutory minimum wages.",
      "Clause 3.2: Post-placement support of Rs. 1,000/month for 2 to 6 months to assist transition to urban employment."
    ],
    "required_documents": [
      "Aadhaar Card / Voter ID",
      "BPL Proof / MGNREGA Job Card / SECC Verification",
      "Educational Certificates",
      "Bank Account Passbook"
    ],
    "application_process": "Register with Project Implementing Agency (PIA) or online at ddugky.gov.in / Kaushal Panjee.",
    "official_portal_url": "https://rural.gov.in",
    "tags": [
      "DDU-GKY",
      "Skill Development",
      "Rural Youth",
      "Free Training",
      "Job Placement",
      "NRLM"
    ]
  },
  {
    "id": "national-livestock-044",
    "name": "National Livestock Mission (NLM Entrepreneurship Subsidy)",
    "ministry": "Ministry of Fisheries, Animal Husbandry and Dairying",
    "category": "Agriculture & Rural Development",
    "level": "Central",
    "target_beneficiary": "Individual farmers, entrepreneurs, SHGs, FPOs, and private companies establishing livestock breeding units",
    "summary": "Provides 50% capital subsidy up to ₹50 Lakhs for setting up entrepreneurship units in poultry, sheep, goat, and piggery breeding and fodder seed production.",
    "financial_benefit": "50% Capital Subsidy up to ₹25 Lakhs (Sheep/Goat/Pig) and up to ₹50 Lakhs (Poultry & Fodder)",
    "eligibility_criteria": {
      "min_age": 18,
      "max_age": 70,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Farmer",
        "MSME Owner",
        "Women Entrepreneur",
        "Self Employed"
      ],
      "states": [
        "All"
      ],
      "land_ownership_required": true
    },
    "rag_clauses": [
      "Clause 1.1: 50% capital subsidy provided directly to lending bank account in two equal tranches.",
      "Clause 2.2: Maximum subsidy for poultry breeding farm is Rs. 50 Lakhs; for sheep and goat breeding unit (500 females + 25 males) is Rs. 50 Lakhs.",
      "Clause 3.1: Beneficiary contribution is 10% to 25%; remaining amount can be financed via bank loan."
    ],
    "required_documents": [
      "Detailed Project Report (DPR)",
      "Land Ownership / Lease Agreement (Min 3-5 acres)",
      "Aadhaar & PAN Card",
      "Bank Loan In-Principle Sanction Letter",
      "Training Certificate in Animal Husbandry"
    ],
    "application_process": "Apply online through National Livestock Mission portal (nlm.udyamimitra.in).",
    "official_portal_url": "https://nlm.udyamimitra.in",
    "tags": [
      "Livestock",
      "Poultry",
      "Goat Farming",
      "Dairy & Animal Husbandry",
      "NLM Subsidy",
      "Agriculture"
    ]
  },
  {
    "id": "samagra-shiksha-045",
    "name": "Samagra Shiksha Abhiyan (Free Textbooks, Uniforms & Transport Allowance)",
    "ministry": "Ministry of Education (Department of School Education & Literacy)",
    "category": "Education & Student Aid",
    "level": "Central",
    "target_beneficiary": "Students enrolled in Government and Government-aided schools from Pre-School to Class 12",
    "summary": "Overarching national school education program providing free textbooks, two sets of uniforms (up to ₹600/year), transport allowance, remedial teaching, and composite school grants.",
    "financial_benefit": "100% Free Textbooks + 2 Sets of Free Uniforms + Transport Allowance up to ₹6,000/year",
    "eligibility_criteria": {
      "min_age": 4,
      "max_age": 18,
      "max_annual_income": null,
      "gender": [
        "All",
        "Male",
        "Female",
        "Transgender"
      ],
      "social_categories": [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "Minority"
      ],
      "occupations": [
        "Student"
      ],
      "states": [
        "All"
      ]
    },
    "rag_clauses": [
      "Clause 1.1: All boys and girls belonging to SC/ST/BPL communities in elementary classes receive two sets of uniforms and textbooks free.",
      "Clause 2.1: Transport/escort allowance up to Rs. 6,000 per child per annum for children in remote habitations without nearby school."
    ],
    "required_documents": [
      "Student School Admission Number (APAAR / PEN ID)",
      "Aadhaar Card of Student / Parent",
      "Caste Certificate (for SC/ST benefit)"
    ],
    "application_process": "Benefits disbursed automatically upon admission in any Government / Aided school.",
    "official_portal_url": "https://samagra.education.gov.in",
    "tags": [
      "Samagra Shiksha",
      "Free Uniforms",
      "School Education",
      "Textbooks",
      "Education",
      "Students"
    ]
  }
];

// High-Speed Verified Official Portal & Scheme Search Resolvers
export function getSafePortalUrl(scheme) {
  if (scheme && scheme.official_portal_url && scheme.official_portal_url.startsWith('http')) {
    return scheme.official_portal_url;
  }
  if (scheme && scheme.dept_portal_url && scheme.dept_portal_url.startsWith('http')) {
    return scheme.dept_portal_url;
  }
  return 'https://www.india.gov.in';
}

export function getNationalMirrorUrl(scheme) {
  if (!scheme) return 'https://www.india.gov.in';
  if (scheme.dept_portal_url && scheme.dept_portal_url.startsWith('http')) {
    return scheme.dept_portal_url;
  }
  return scheme.level === 'State' ? 'https://www.india.gov.in/my-government/state-and-ut-governments' : 'https://www.india.gov.in';
}

export function getGoogleSearchUrl(scheme) {
  if (!scheme) return 'https://www.google.com/search?q=site:gov.in+schemes+india';
  const cleanName = (scheme.name || scheme.id || '').replace(/[^\w\s-]/gi, ' ').trim();
  const statePart = scheme.state && scheme.state !== 'All' ? scheme.state : (scheme.level === 'State' ? 'State Scheme' : 'Govt of India');
  const query = encodeURIComponent(`"${cleanName}" ${statePart} official portal apply online site:gov.in OR site:nic.in`);
  return `https://www.google.com/search?q=${query}`;
}



