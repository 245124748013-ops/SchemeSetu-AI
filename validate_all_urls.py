import json
import os
import urllib.request
import urllib.error
import ssl
import socket
import sys
from concurrent.futures import ThreadPoolExecutor, as_completed

sys.stdout.reconfigure(encoding='utf-8')

# Load all schemes from schemes_database.json
db_path = os.path.join(os.path.dirname(__file__), "schemes_database.json")
with open(db_path, "r", encoding="utf-8") as f:
    schemes = json.load(f)

# Collect all unique URLs
unique_urls = set()
for s in schemes:
    url = s.get("official_portal_url")
    if url and url.startswith("http"):
        unique_urls.add(url.strip())

print(f"Total Unique URLs to validate across 5,093 schemes: {len(unique_urls)}")

# Create SSL context that doesn't fail on self-signed government certs
ssl_ctx = ssl.create_default_context()
ssl_ctx.check_hostname = False
ssl_ctx.verify_mode = ssl.CERT_NONE

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5',
    'Connection': 'keep-alive'
}

def check_url(url):
    domain = url.split("//")[-1].split("/")[0].split(":")[0]
    
    # 1. DNS check
    try:
        ip = socket.gethostbyname(domain)
    except socket.gaierror as e:
        return {
            "url": url,
            "domain": domain,
            "status": "DNS_FAIL",
            "error": f"NXDOMAIN / DNS Resolution Failed ({e})",
            "working": False
        }
    except Exception as e:
        return {
            "url": url,
            "domain": domain,
            "status": "DNS_ERROR",
            "error": str(e),
            "working": False
        }

    # 2. HTTP Request check
    req = urllib.request.Request(url, headers=HEADERS)
    for attempt in range(2):
        try:
            timeout_sec = 8 if attempt == 0 else 14
            with urllib.request.urlopen(req, context=ssl_ctx, timeout=timeout_sec) as response:
                code = response.getcode()
                final_url = response.geturl()
                return {
                    "url": url,
                    "domain": domain,
                    "status": f"HTTP_{code}",
                    "final_url": final_url,
                    "ip": ip,
                    "working": True
                }
        except urllib.error.HTTPError as e:
            # Some government NIC firewalls return 403 to automated scripts, but domain is live
            if e.code in [403, 401, 301, 302, 307, 308]:
                return {
                    "url": url,
                    "domain": domain,
                    "status": f"HTTP_{e.code}_LIVE",
                    "ip": ip,
                    "working": True,
                    "note": f"Live (Firewall/Redirect {e.code})"
                }
            else:
                return {
                    "url": url,
                    "domain": domain,
                    "status": f"HTTP_{e.code}",
                    "ip": ip,
                    "error": str(e),
                    "working": False
                }
        except urllib.error.URLError as e:
            if attempt == 0 and "timed out" in str(e).lower():
                continue
            return {
                "url": url,
                "domain": domain,
                "status": "CONN_FAIL",
                "ip": ip,
                "error": str(e.reason),
                "working": False
            }
        except Exception as e:
            if attempt == 0 and "timed out" in str(e).lower():
                continue
            return {
                "url": url,
                "domain": domain,
                "status": "ERROR",
                "ip": ip,
                "error": str(e),
                "working": False
            }

results = []
broken_urls = []
working_urls = []

print("Starting multithreaded URL connectivity test...")
with ThreadPoolExecutor(max_workers=20) as executor:
    future_to_url = {executor.submit(check_url, u): u for u in unique_urls}
    for future in as_completed(future_to_url):
        res = future.result()
        results.append(res)
        if res["working"]:
            working_urls.append(res)
        else:
            broken_urls.append(res)

print("\n" + "="*70)
print(f"URL VALIDATION SUMMARY")
print(f"Total Unique Portals: {len(unique_urls)}")
print(f"Working / Live Portals: {len(working_urls)} ({(len(working_urls)/len(unique_urls))*100:.1f}%)")
print(f"Broken / Non-resolving Portals: {len(broken_urls)}")
print("="*70)

if broken_urls:
    print("\n--- BROKEN / UNREACHABLE PORTALS TO FIX ---")
    for b in sorted(broken_urls, key=lambda x: x["url"]):
        print(f"❌ {b['url']}")
        print(f"   Status: {b['status']} | Reason: {b.get('error')}")
        print()
else:
    print("\n✅ All portal URLs resolved and passed connectivity checks!")

# Save full report
with open(os.path.join(os.path.dirname(__file__), "url_validation_report.json"), "w", encoding="utf-8") as f:
    json.dump({
        "total": len(unique_urls),
        "working_count": len(working_urls),
        "broken_count": len(broken_urls),
        "broken_urls": broken_urls,
        "working_urls": working_urls
    }, f, indent=2)

print(f"Report saved to url_validation_report.json")
