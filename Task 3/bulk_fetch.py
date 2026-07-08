import urllib.request, json, time, re, os

# Define the 49 items
items = [
    'Margherita Pizza', 'Four Cheese Pizza', 'Truffle Mushroom Pizza', 'BBQ Chicken Pizza', 'Roasted Vegetable Pizza', 'Pepperoni Overload Pizza', 'Mediterranean Veg Pizza', 'Neapolitan Margherita', 'Chicken Tikka Pizza', 'Veggie Delight Pizza', 'Spinach Ricotta Pizza', 'Prawn Pesto Pizza', 'Mushroom Truffle Pizza', 'Buffalo Chicken Pizza', 'Caramelized Onion Pizza',
    'Classic Smash Burger', 'Spicy Paneer Burger', 'Truffle Wagyu Burger', 'Blue Cheese Burger', 'Avocado Chickpea Burger', 'Spicy Chicken Burger', 'Fish Burger', 'Paneer Tikka Burger', 'Mushroom Swiss Burger', 'BBQ Bacon Burger', 'Grilled Veggie Burger', 'Loaded Cheese Burger', 'Falafel Burger', 'Chicken Kebab Burger', 'Lamb Burger',
    'Paneer Tikka Masala', 'Tandoori Paneer', 'Tandoori Roti', 'Tandoori Paneer Tikka', 'Paneer Kebab Platter', 'Tandoori Mushroom Tikka', 'Naan Basket', 'Tandoori Mushroom', 'Paneer Malai Tikka', 'Tandoori Mixed Veg Grill', 'Paneer Reshmi Kebab', 'Tandoori Mushroom Bites', 'Tandoori Chaap', 'Seekh Kebab (3 Pieces)', 'Hara Bhara Kebab', 'Achari Paneer Tikka', 'Tandoori Lamb Chops', 'Tandoori Broccoli', 'Tandoori Butter Chicken'
]

# Read script.js
with open('script.js', 'r', encoding='utf-8') as f:
    script_content = f.read()

def safe_filename(name):
    return name.lower().replace(' ', '_').replace('(', '').replace(')', '').replace('-', '_')

def get_flickr_image(dish_name):
    # generate a highly specific tag
    tag = dish_name.lower().replace(' ', '').replace('(', '').replace(')', '')
    url = f'https://www.flickr.com/services/feeds/photos_public.gne?tags={tag}&format=json&nojsoncallback=1'
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            if data['items']:
                return data['items'][0]['media']['m'].replace('_m.jpg', '_b.jpg')
    except Exception as e:
        pass
    
    # fallback 1: try generic last word
    fallback_tag = dish_name.split()[-1].lower()
    url = f'https://www.flickr.com/services/feeds/photos_public.gne?tags={fallback_tag}food&format=json&nojsoncallback=1'
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            if data['items']:
                return data['items'][0]['media']['m'].replace('_m.jpg', '_b.jpg')
    except:
        pass
    return None

for item in items:
    filename = safe_filename(item) + '.jpg'
    filepath = f'images/{filename}'
    
    # Skip if we already downloaded it
    if not os.path.exists(filepath):
        img_url = get_flickr_image(item)
        if img_url:
            print(f'Found {item}: {img_url}')
            img_req = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
            try:
                with urllib.request.urlopen(img_req) as img_resp:
                    with open(filepath, 'wb') as f:
                        f.write(img_resp.read())
            except:
                print(f"Failed to download {img_url}")
        else:
            print(f'Could not find image for {item}')
    else:
        print(f'Already exists: {filename}')
    
    # Update script.js via regex
    # Match the block for the specific title, and replace its image string
    # We construct a regex that looks for title: 'ITEM', ... image: '...'
    pattern = r'(title:\s*\'[^\']*?' + re.escape(item) + r'[^\']*\'[\s\S]*?image:\s*\')[^\']+(\')'
    script_content = re.sub(pattern, r'\g<1>' + 'images/' + filename + r'\g<2>', script_content, flags=re.IGNORECASE)
    
    time.sleep(1.5)

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(script_content)

print("All done!")
