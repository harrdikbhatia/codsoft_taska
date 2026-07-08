import re, os

target_dishes = [
    "Gulab Jamun Cheesecake", "Dal Makhani", "Pav Bhaji", "Honey Garlic Chicken",
    "Arancini di Riso", "Vegetable Lasagna", "Laccha Paratha", "Sweet and Sour Cauliflower",
    "Chole Bhature", "Crispy Cantonese Tofu", "Affogato", "Ma Po Tofu", "Roomali Roti",
    "Masala Chai", "Szechuan Tofu Stir Fry", "Paneer Paratha", "Samosa Trio",
    "Lemon Risotto", "Onion Bhaji", "Paneer Pakora", "Garlic Chilli Baby Corn",
    "Fish Pakora", "Fried Spicy Chicken Momos", "Mixed Vegetable Fried Momos", 
    "Gajar Halwa", "Kesar Kulfi", "Garlic Butter Mushrooms", "Ratatouille Tart",
    "Iced Matcha Latte", "Hibiscus Iced Tea", "Orange Mojito"
]

with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

def replace_image(match):
    full_block = match.group(0)
    title_match = re.search(r"title:\s*'([^']+)'", full_block)
    if not title_match: return full_block
    title = title_match.group(1)
    
    # Check if this is one of our target dishes loosely
    is_target = False
    for t in target_dishes:
        if t.lower() in title.lower() or title.lower() in t.lower():
            is_target = True
            break
            
    if is_target:
        clean_dish = re.sub(r'[^a-zA-Z0-9]', '_', t).lower()
        # if the file exists, map it!
        jpg_path = f'images/{clean_dish}.jpg'
        if os.path.exists(jpg_path):
            return re.sub(r"image:\s*'[^']+',", f"image: '{jpg_path}',", full_block)
    
    return full_block

new_content = re.sub(r"\{\s*id:\s*\d+.*?tags:\s*\[.*?\]\s*\}", replace_image, content, flags=re.DOTALL)
with open('script.js', 'w', encoding='utf-8') as f:
    f.write(new_content)
