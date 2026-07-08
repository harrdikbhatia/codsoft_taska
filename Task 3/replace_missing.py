import urllib.request
import re
import time

items = {
    'Tandoori Mushroom Tikka': ('tandoori_mushroom_tikka.jpg', 'https://upload.wikimedia.org/wikipedia/commons/2/21/Portobello_with_goats%27_cheese%2C_bacon_and_thym.jpg'),
    'Neapolitan Margherita': ('neapolitan_margherita.jpg', 'https://upload.wikimedia.org/wikipedia/commons/5/57/Neapolitan_pizza_at_Trappica_%2848701940197%29.jpg')
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

print('All missing images updated and cache busted.')
