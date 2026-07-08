from duckduckgo_search import DDGS
import urllib.request
import re
import time
import os

items = [
    'Margherita Pizza', 'Four Cheese Pizza', 'Truffle Mushroom Pizza', 'BBQ Chicken Pizza', 'Roasted Vegetable Pizza', 'Pepperoni Overload Pizza', 'Mediterranean Veg Pizza', 'Neapolitan Margherita', 'Chicken Tikka Pizza', 'Veggie Delight Pizza', 'Spinach Ricotta Pizza', 'Prawn Pesto Pizza', 'Mushroom Truffle Pizza', 'Buffalo Chicken Pizza', 'Caramelized Onion Pizza',
    'Classic Smash Burger', 'Spicy Paneer Burger', 'Truffle Wagyu Burger', 'Blue Cheese Burger', 'Avocado Chickpea Burger', 'Spicy Chicken Burger', 'Fish Burger', 'Paneer Tikka Burger', 'Mushroom Swiss Burger', 'BBQ Bacon Burger', 'Grilled Veggie Burger', 'Loaded Cheese Burger', 'Falafel Burger', 'Chicken Kebab Burger', 'Lamb Burger',
    'Paneer Tikka Masala', 'Tandoori Paneer', 'Tandoori Roti', 'Tandoori Paneer Tikka', 'Paneer Kebab Platter', 'Tandoori Mushroom Tikka', 'Naan Basket', 'Tandoori Mushroom', 'Paneer Malai Tikka', 'Tandoori Mixed Veg Grill', 'Paneer Reshmi Kebab', 'Tandoori Mushroom Bites', 'Tandoori Chaap', 'Seekh Kebab (3 Pieces)', 'Hara Bhara Kebab', 'Achari Paneer Tikka', 'Tandoori Lamb Chops', 'Tandoori Broccoli', 'Tandoori Butter Chicken'
]

def safe_filename(name):
    return name.lower().replace(' ', '_').replace('(', '').replace(')', '').replace('-', '_')

with open('script.js', 'r', encoding='utf-8') as f:
    script_content = f.read()

ddgs = DDGS()

for item in items:
    filename = safe_filename(item) + '.jpg'
    filepath = f'images/{filename}'
    
    query = f'{item} professional food photography'
    
    # Try fetching via DuckDuckGo
    print(f'Fetching {item}...')
    img_url = None
    try:
        results = list(ddgs.images(query, max_results=1))
        if results:
            img_url = results[0]['image']
    except Exception as e:
        print(f"Error searching DDG for {item}: {e}")
        time.sleep(2)
        
    if img_url:
        print(f'Found URL for {item}: {img_url}')
        try:
            req = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=10) as response:
                with open(filepath, 'wb') as f:
                    f.write(response.read())
            print(f'Successfully downloaded {filename}')
        except Exception as e:
            print(f'Failed to download {img_url}: {e}')
    else:
        print(f'Could not find image for {item}')

    # Update script.js
    pattern = r'(title:\s*\'[^\']*?' + re.escape(item) + r'[^\']*\'[\s\S]*?image:\s*\')[^\']+(\')'
    script_content = re.sub(pattern, r'\g<1>' + 'images/' + filename + r'\g<2>', script_content, flags=re.IGNORECASE)
    
    time.sleep(1)

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(script_content)

print("All done!")
