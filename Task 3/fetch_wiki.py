import re
import os
import requests

os.makedirs('images', exist_ok=True)

with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

titles = list(set(re.findall(r"title:\s*'([^']+)'", content)))

mappings = {}
count = 0

session = requests.Session()
URL = "https://en.wikipedia.org/w/api.php"

# Let's map some titles dynamically
for title in titles:
    count += 1
    filename = re.sub(r'[^a-z0-9]', '_', title.lower()) + '.jpg'
    filepath = os.path.join('images', filename)
    
    if os.path.exists(filepath):
        print(f"[{count}/{len(titles)}] Skipped existing: {title}")
        mappings[title] = f"images/{filename}"
        continue
    
    # Try Wikipedia Search to get best page title
    S = requests.Session()
    search_params = {
        "action": "query",
        "format": "json",
        "list": "search",
        "srsearch": title,
        "srlimit": 1
    }
    try:
        r = S.get(URL, params=search_params, timeout=5).json()
        if not r.get("query", {}).get("search"):
            print(f"[{count}/{len(titles)}] FAIL (No wiki page): {title}")
            continue
        page_title = r["query"]["search"][0]["title"]
        
        # Now get image for page
        img_params = {
            "action": "query",
            "format": "json",
            "prop": "pageimages",
            "piprop": "original",
            "titles": page_title
        }
        r = S.get(URL, params=img_params, timeout=5).json()
        pages = r.get("query", {}).get("pages", {})
        
        img_url = None
        for k, v in pages.items():
            if "original" in v and "source" in v["original"]:
                img_url = v["original"]["source"]
                break
        
        if img_url:
            response = requests.get(img_url, timeout=5, headers={'User-Agent': 'Mozilla/5.0'})
            if response.status_code == 200:
                with open(filepath, 'wb') as f:
                    f.write(response.content)
                print(f"[{count}/{len(titles)}] Downloaded: {title}")
                mappings[title] = f"images/{filename}"
            else:
                print(f"[{count}/{len(titles)}] FAIL (Bad image): {title}")
        else:
            print(f"[{count}/{len(titles)}] FAIL (No image on page): {title}")
    except Exception as e:
        print(f"[{count}/{len(titles)}] ERROR: {title} - {e}")

print("Updating script.js...")

def replace_image(match):
    full_block = match.group(0)
    title_match = re.search(r"title:\s*'([^']+)'", full_block)
    if not title_match:
        return full_block
    title = title_match.group(1)
    if title in mappings:
        new_image = mappings[title]
        new_block = re.sub(r"image:\s*'images/[^']+',", f"image: '{new_image}',", full_block)
        return new_block
    return full_block

new_content = re.sub(r"\{\s*id:\s*\d+.*?tags:\s*\[.*?\]\s*\}", replace_image, content, flags=re.DOTALL)

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Done!")
