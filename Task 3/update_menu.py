import re
import os

with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Define the precise mapping logic
def get_explicit_image(title):
    t = title.lower()
    
    # Specific assignments
    if 'mango lassi' in t: return "'images/mango_lassi.png'"
    if 'honey chili potato' in t: return "'images/honey_chili_potato.png'"
    if 'biryani' in t: return "'images/biryani.png'"
    if 'soup' in t: return "'images/soup.png'"
    if 'naan' in t or 'roti' in t or 'paratha' in t: return "'images/naan_bread.png'"
    if 'dumpling' in t: return "'images/dumplings.png'"
    if 'noodle' in t or 'chow mein' in t: return "'images/noodles.png'"
    if 'salad' in t: return "'images/salad.png'"
    if 'kebab' in t or 'tikka' in t: return "'images/kebab_tikka.png'"
    if 'wellington' in t or 'fillet' in t: return "'images/gourmet_steak.png'"
    
    # Generic fallbacks
    if 'burger' in t: return "'images/classic_burger.png'"
    if 'pizza' in t: return "'images/margherita_pizza.png'"
    if 'spring roll' in t: return "'images/spring_rolls.png'"
    if 'bruschetta' in t: return "'images/bruschetta.png'"
    if 'salmon' in t or 'fish' in t or 'shrimp' in t or 'prawns' in t or 'lamb' in t: return "'images/grilled_salmon.png'"
    if 'butter chicken' in t or 'chicken' in t or 'paneer' in t or 'korma' in t or 'dal' in t or 'chole' in t or 'pav bhaji' in t or 'chaap' in t or 'mushroom' in t: return "'images/butter_chicken.png'"
    if 'pasta' in t or 'alfredo' in t or 'risotto' in t or 'lasagna' in t or 'gnocchi' in t or 'tart' in t: return "'images/pasta_alfredo.png'"
    if 'latte' in t or 'chai' in t or 'coffee' in t or 'lassi' in t or 'lemonade' in t or 'cooler' in t: return "'images/latte_art.png'"
    if 'chocolate' in t or 'lava' in t or 'brownie' in t or 'cheesecake' in t or 'flan' in t or 'kulfi' in t or 'halwa' in t or 'rasmalai' in t: return "'images/chocolate_lava_cake.png'"
    if 'tiramisu' in t or 'panna' in t or 'dessert' in t or 'fondant' in t or 'arancini' in t: return "'images/tiramisu.png'"

    return "'images/pasta_alfredo.png'"

# Regex to find title and image line
def replace_image(match):
    full_block = match.group(0)
    title_match = re.search(r"title:\s*'([^']+)'", full_block)
    if not title_match:
        return full_block
    title = title_match.group(1)
    new_image = get_explicit_image(title)
    
    # Replace the image line
    new_block = re.sub(r"image:\s*getMenuImage\([^)]+\)", f"image: {new_image}", full_block)
    # Also handle if it's already updated (e.g. honey_chili_potato)
    new_block = re.sub(r"image:\s*'images/[^']+'", f"image: {new_image}", new_block)
    
    return new_block

# Process all menu objects
new_content = re.sub(r"\{\s*id:\s*\d+.*?tags:\s*\[.*?\]\s*\}", replace_image, content, flags=re.DOTALL)

# Remove getMenuImage function entirely (lines 1 to 24ish)
new_content = re.sub(r"function getMenuImage\(.*?\}.*?// Menu Data", "// Menu Data", new_content, flags=re.DOTALL)

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated script.js successfully!")
