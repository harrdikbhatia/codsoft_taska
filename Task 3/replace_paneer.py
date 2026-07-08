import urllib.request
import re
import time

item_name = 'Paneer Tikka Masala'
filename = 'paneer_tikka_masala.jpg'
url = 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Shahi_panner.jpg'
ts = int(time.time())

with open('script.js', 'r', encoding='utf-8') as f:
    script_content = f.read()

print(f'Downloading {item_name} from {url}')
try:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=15) as response:
        with open(f'images/{filename}', 'wb') as f:
            f.write(response.read())
    print(f'Saved {filename}')
    
    # update script.js with cache buster
    pattern = r'(title:\s*\'[^\']*?' + re.escape(item_name) + r'[^\']*\'[\s\S]*?image:\s*\')[^\']+(\')'
    script_content = re.sub(pattern, r'\g<1>' + 'images/' + filename + '?v=' + str(ts) + r'\g<2>', script_content, flags=re.IGNORECASE)
except Exception as e:
    print(f'Failed to download {item_name}: {e}')

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(script_content)

print('Image updated and cache busted.')
