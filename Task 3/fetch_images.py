import re
import os
import requests
from duckduckgo_search import DDGS

os.makedirs('images', exist_ok=True)

with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

titles = list(set(re.findall(r"title:\s*'([^']+)'", content)))

ddgs = DDGS()

mappings = {}
count = 0
for title in titles:
    count += 1
    filename = re.sub(r'[^a-z0-9]', '_', title.lower()) + '.jpg'
    filepath = os.path.join('images', filename)
    
    if os.path.exists(filepath):
        print(f"[{count}/{len(titles)}] Skipped existing: {title}")
        mappings[title] = f"images/{filename}"
        continue
    
    query = f"{title} dish food photography high quality"
    try:
        results = list(ddgs.images(query, max_results=5))
        found = False
        for res in results:
            url = res['image']
            try:
                response = requests.get(url, timeout=5, headers={'User-Agent': 'Mozilla/5.0'})
                if response.status_code == 200:
                    with open(filepath, 'wb') as f:
                        f.write(response.content)
                    print(f"[{count}/{len(titles)}] Downloaded: {title}")
                    mappings[title] = f"images/{filename}"
                    found = True
                    break
            except Exception:
                continue
        if not found:
            print(f"[{count}/{len(titles)}] FAIL: {title} (no working url)")
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
