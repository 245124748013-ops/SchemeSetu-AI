import requests
import time
import concurrent.futures

profiles = [
    {'name': 'Ramesh Kumar', 'age': 45, 'occupation': 'Farmer', 'category': 'OBC', 'state': 'Andhra Pradesh', 'has_land': True, 'land_holding_acres': 2.5, 'income': 120000},
    {'name': 'Sunita Devi', 'age': 42, 'gender': 'Female', 'occupation': 'Women Entrepreneur', 'category': 'OBC', 'state': 'Andhra Pradesh', 'income': 0},
    {'name': 'Pooja Kumari', 'age': 19, 'gender': 'Female', 'occupation': 'Student', 'category': 'OBC', 'state': 'Andhra Pradesh', 'income': 0},
    {'name': 'Ramphal Sharma', 'age': 72, 'gender': 'Male', 'occupation': 'Senior Citizen', 'category': 'OBC', 'state': 'Andhra Pradesh', 'income': 0}
]

def fetch_match(p):
    r = requests.post('http://127.0.0.1:8000/api/match', json=p)
    return len(r.json().get('ranked_schemes', []))

# Single Request Benchmark
t0 = time.time()
n1 = fetch_match(profiles[0])
t1 = time.time()
print(f"Single Member Discovery Time: {(t1 - t0)*1000:.2f} ms ({n1} schemes)")

# Parallel 4-Member Household Benchmark
t2 = time.time()
with concurrent.futures.ThreadPoolExecutor() as executor:
    results = list(executor.map(fetch_match, profiles))
t3 = time.time()
print(f"All 4 Family Members Parallel Discovery Time: {(t3 - t2)*1000:.2f} ms (Total results: {sum(results)} schemes)")
