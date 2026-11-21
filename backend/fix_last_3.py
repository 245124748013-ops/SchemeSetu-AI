last_fixes = {
    "www.www.digitalgujarat.gov.in": "www.digitalgujarat.gov.in",
    "https://aims.kerala.gov.in": "https://edistrict.kerala.gov.in",
    "https://sewayojan.up.nic.in": "https://edistrict.up.gov.in"
}

files = ['ingest_kaggle_myscheme.py', 'flagship_schemes_curation.py']

for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    for bad, good in last_fixes.items():
        c = c.replace(bad, good)
    with open(f, 'w', encoding='utf-8') as fp:
        fp.write(c)
    print(f"Updated {f}")
