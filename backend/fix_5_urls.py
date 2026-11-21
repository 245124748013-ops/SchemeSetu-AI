replacements = {
    "https://agrisnetodisha.ori.nic.in": "https://agri.odisha.gov.in",
    "https://mahtarivandan.cgstate.gov.in": "https://cgstate.gov.in",
    "https://nhm.gov.in": "https://mohfw.gov.in",
    "https://oasis.wb.gov.in": "https://wb.gov.in",
    "https://upagripardarshi.gov.in": "https://edistrict.up.gov.in",
}

target_files = [
    'backend/ingest_kaggle_myscheme.py',
    'backend/flagship_schemes_curation.py',
    'frontend/src/services/schemesData.js'
]

for file_path in target_files:
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        updated = 0
        for old_url, new_url in replacements.items():
            if old_url in content:
                content = content.replace(old_url, new_url)
                updated += 1

        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)

        print(f"Updated {updated} URLs in {file_path}")
    except Exception as e:
        print(f"Error updating {file_path}: {e}")

print("Done fixing 5 URLs.")
