replacements = {
    "https://bsky.odisha.gov.in": "https://health.odisha.gov.in",
    "https://ksrtc.in/pages/shakti.html": "https://transport.karnataka.gov.in",
    "https://ksrtc.in": "https://transport.karnataka.gov.in",
    "https://scholarship.up.gov.in": "https://edistrict.up.gov.in",
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

print("Applied final precise URL fixes.")
