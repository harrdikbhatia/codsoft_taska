import urllib.request
import re
import time

items = {
    'Naan Basket': ('naan_basket.jpg', 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Annapurna_Naan.jpg'),
    'Tandoori Mixed Veg Grill': ('tandoori_mixed_veg_grill.jpg', 'https://upload.wikimedia.org/wikipedia/commons/1/11/PinchosAmericanos.jpg'),
    'Tandoori Paneer Tikka': ('tandoori_paneer_tikka.jpg', 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Paneer_tikka.jpg'),
    'Gajar Halwa': ('gajar_halwa.jpg', 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Cuisine_%28268%29_44.jpg'),
    'Veggie Delight Pizza': ('veggie_delight_pizza.jpg', 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg')
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
        # search for: title: 'Item Name' ... image: 'images/filename.jpg?v=X'
        # replace with: image: 'images/filename.jpg?v=NEW_TS'
        pattern = r'(title:\s*\'[^\']*?' + re.escape(item_name) + r'[^\']*\'[\s\S]*?image:\s*\')[^\']+(\')'
        script_content = re.sub(pattern, r'\g<1>' + 'images/' + filename + '?v=' + str(ts) + r'\g<2>', script_content, flags=re.IGNORECASE)
    except Exception as e:
        print(f'Failed to download {item_name}: {e}')

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(script_content)

print('All specific images updated and cache busted.')
