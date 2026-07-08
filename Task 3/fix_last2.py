import urllib.request
import re
import time

items = {
    'Paneer Tikka Masala': ('paneer_tikka_masala.jpg', 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Paneer_Makhani_Veggie.jpeg'),
    'Loaded Cheese Burger': ('loaded_cheese_burger.jpg', 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Cheeseburger.jpg')
}

ts = int(time.time())

with open('script.js', 'r', encoding='utf-8') as f:
    script_content = f.read()

for item_name, (filename, url) in items.items():
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

print('All missing images updated and cache busted.')
