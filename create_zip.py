"""
Distribution Packaging Script
Packages frontend (source, components, configs), backend, scripts, databases, and documentation
into schemesetu-ai.zip, excluding node_modules, build artifacts, and cache files.
"""
import os
import shutil
import zipfile

src_dir = r"C:\Users\Ashritha\.gemini\antigravity\scratch\schemesetu-ai"
zip_scratch = r"C:\Users\Ashritha\.gemini\antigravity\scratch\schemesetu-ai.zip"
zip_brain = r"C:\Users\Ashritha\.gemini\antigravity\brain\97aa173c-8ef5-4ff0-a2cd-63c87f964a36\schemesetu-ai.zip"

exclude_dirs = {"node_modules", ".git", "__pycache__", ".pytest_cache", "dist", ".vscode"}

print("Packaging SchemeSetu AI into comprehensive distribution archive...")

with zipfile.ZipFile(zip_scratch, 'w', zipfile.ZIP_DEFLATED) as zipf:
    for root, dirs, files in os.walk(src_dir):
        # Exclude development dependencies and caches
        dirs[:] = [d for d in dirs if d not in exclude_dirs]
        for file in files:
            if file.endswith((".zip", ".pyc")):
                continue
            full_path = os.path.join(root, file)
            rel_path = os.path.relpath(full_path, src_dir)
            zipf.write(full_path, rel_path)

# Copy to brain artifact directory as well
if os.path.exists(os.path.dirname(zip_brain)):
    shutil.copyfile(zip_scratch, zip_brain)

print(f"[+] Archive created successfully at:")
print(f"    - {zip_scratch}")
print(f"    - Size: {os.path.getsize(zip_scratch):,} bytes")
