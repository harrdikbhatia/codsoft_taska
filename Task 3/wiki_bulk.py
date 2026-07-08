import urllib.request, json, time, re, os, urllib.parse

items = [
    'Margherita Pizza', 'Four Cheese Pizza', 'Truffle Mushroom Pizza', 'BBQ Chicken Pizza', 'Roasted Vegetable Pizza', 'Pepperoni Overload Pizza', 'Mediterranean Veg Pizza', 'Neapolitan Margherita', 'Chicken Tikka Pizza', 'Veggie Delight Pizza', 'Spinach Ricotta Pizza', 'Prawn Pesto Pizza', 'Mushroom Truffle Pizza', 'Buffalo Chicken Pizza', 'Caramelized Onion Pizza',
    'Classic Smash Burger', 'Spicy Paneer Burger', 'Truffle Wagyu Burger', 'Blue Cheese Burger', 'Avocado Chickpea Burger', 'Spicy Chicken Burger', 'Fish Burger', 'Paneer Tikka Burger', 'Mushroom Swiss Burger', 'BBQ Bacon Burger', 'Grilled Veggie Burger', 'Loaded Cheese Burger', 'Falafel Burger', 'Chicken Kebab Burger', 'Lamb Burger',
    'Paneer Tikka Masala', 'Tandoori Paneer', 'Tandoori Roti', 'Tandoori Paneer Tikka', 'Paneer Kebab Platter', 'Tandoori Mushroom Tikka', 'Naan Basket', 'Tandoori Mushroom', 'Paneer Malai Tikka', 'Tandoori Mixed Veg Grill', 'Paneer Reshmi Kebab', 'Tandoori Mushroom Bites', 'Tandoori Chaap', 'Seekh Kebab (3 Pieces)', 'Hara Bhara Kebab', 'Achari Paneer Tikka', 'Tandoori Lamb Chops', 'Tandoori Broccoli', 'Tandoori Butter Chicken'
]

def safe_filename(name):
    return name.lower().replace(' ', '_').replace('(', '').replace(')', '').replace('-', '_')

def get_wiki_image(dish_name):
    # 1. Search for the file
    query = urllib.parse.quote(dish_name)
    search_url = f'https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch={query}&srnamespace=6&format=json'
    req = urllib.request.Request(search_url, headers={'User-Agent': 'Mozilla/5.0'})
    
    file_title = None
    try:
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            results = data['query']['search']
            if results:
                file_title = results[0]['title']
    except:
        pass
        
    if not file_title:
        # Fallback to generic search
        fallback = dish_name.split()[-1]
        search_url = f'https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch={fallback}&srnamespace=6&format=json'
        req = urllib.request.Request(search_url, headers={'User-Agent': 'Mozilla/5.0'})
        try:
            with urllib.request.urlopen(req) as response:
                data = json.loads(response.read().decode())
                results = data['query']['search']
                if results:
                    file_title = results[0]['title']
        except:
            pass

    if not file_title:
        return None

    # 2. Get the actual image URL
    file_title_encoded = urllib.parse.quote(file_title)
    img_info_url = f'https://commons.wikimedia.org/w/api.php?action=query&titles={file_title_encoded}&prop=imageinfo&iiprop=url&format=json'
    req = urllib.request.Request(img_info_url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            pages = data['query']['pages']
            for page_id in pages:
                if 'imageinfo' in pages[page_id]:
                    return pages[page_id]['imageinfo'][0]['url']
    except:
        pass
    return None

with open('script.js', 'r', encoding='utf-8') as f:
    script_content = f.read()

for item in items:
    filename = safe_filename(item) + '.jpg'
    filepath = f'images/{filename}'
    
    img_url = get_wiki_image(item)
    if img_url:
        print(f'Found {item}: {img_url}')
        img_req = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
        try:
            with urllib.request.urlopen(img_req) as img_resp:
                with open(filepath, 'wb') as f:
                    f.write(img_resp.read())
            print(f'Downloaded {filename}')
        except Exception as e:
            print(f"Failed to download {img_url}: {e}")
    else:
        print(f'Could not find image for {item}')
    
    # Update script.js
    pattern = r'(title:\s*\'[^\']*?' + re.escape(item) + r'[^\']*\'[\s\S]*?image:\s*\')[^\']+(\')'
    script_content = re.sub(pattern, r'\g<1>' + 'images/' + filename + r'\g<2>', script_content, flags=re.IGNORECASE)
    
    time.sleep(1)

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(script_content)

print("All done!")
