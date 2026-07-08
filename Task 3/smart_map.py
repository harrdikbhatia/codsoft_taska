import re
import os

with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

def get_image_for_title(title):
    t = title.lower()
    
    # 1. Burgers & Sandwiches
    if 'burger' in t or 'sandwich' in t:
        if 'chicken' in t: return 'images/chicken_burger_1782674680930.png'
        return 'images/classic_burger.png'
        
    # 2. Pizzas
    if 'pizza' in t or 'margherita' in t: return 'images/margherita_pizza.png'
        
    # 3. Rice, Biryani, Pulao
    if 'biryani' in t or 'rice' in t or 'pulao' in t: return 'images/biryani.png'
        
    # 4. Noodles & Chow Mein
    if 'noodle' in t or 'chow mein' in t: return 'images/noodles.png'
        
    # 5. Pasta & Italian Mains
    if 'pasta' in t or 'alfredo' in t or 'ravioli' in t or 'lasagna' in t or 'gnocchi' in t or 'parmigiana' in t: 
        return 'images/pasta_alfredo.png'
        
    # 6. Risotto
    if 'risotto' in t: return 'images/risotto_1782674669907.png'
        
    # 7. Soups
    if 'soup' in t: return 'images/soup.png'
        
    # 8. Salads
    if 'salad' in t or 'caprese' in t: return 'images/salad.png'
        
    # 9. Bread (Naan, Roti, Paratha)
    if 'naan' in t or 'roti' in t or 'paratha' in t or 'kulcha' in t or 'bhakri' in t:
        return 'images/naan_bread.png'
        
    # 10. Kebabs, Tandoori Starters, Pakora, Bhaji
    if 'kebab' in t or 'tikka' in t or 'tandoori' in t or 'pakora' in t or 'bhaji' in t or 'samosa' in t or 'chaap' in t:
        return 'images/kebab_tikka.png'
        
    # 11. Curries (Indian and Asian stir fry)
    if 'masala' in t or 'makhani' in t or 'korma' in t or 'curry' in t or 'lababdar' in t or 'chole' in t or 'tofu' in t or 'chicken 65' in t:
        return 'images/butter_chicken.png'
        
    # 12. Fish and Seafood
    if 'fish' in t or 'salmon' in t or 'shrimp' in t or 'prawn' in t:
        return 'images/grilled_salmon.png'
        
    # 13. Meat (Steak, Ribs, Chops)
    if 'steak' in t or 'ribs' in t or 'chops' in t or 'meatball' in t or 'fillet' in t:
        return 'images/gourmet_steak.png'
        
    # 14. Dumplings, Momos, Spring Rolls
    if 'momo' in t or 'dumpling' in t or 'wonton' in t: return 'images/dumplings.png'
    if 'spring roll' in t: return 'images/spring_rolls.png'
        
    # 15. Fries, Potatoes, Corn, Small crispy appetizers
    if 'potato' in t or 'fries' in t or 'corn' in t or 'cauliflower' in t or 'arancini' in t or 'bruschetta' in t:
        return 'images/honey_chili_potato.png'
        
    # 16. Indian Desserts
    if 'jamun' in t or 'rasmalai' in t or 'halwa' in t or 'kulfi' in t:
        return 'images/indian_desserts.png'
        
    # 17. Western Desserts
    if 'chocolate' in t or 'brownie' in t or 'fondant' in t: return 'images/chocolate_lava_cake.png'
    if 'tiramisu' in t or 'cheesecake' in t or 'flan' in t or 'panna cotta' in t or 'tart' in t or 'affogato' in t or 'mille-feuille' in t:
        return 'images/tiramisu.png'
        
    # 18. Drinks
    if 'lassi' in t: return 'images/mango_lassi.png'
    if 'coffee' in t or 'brew' in t or 'chai' in t or 'latte' in t: return 'images/coffee_tea.png'
    if 'tea' in t or 'mojito' in t or 'cooler' in t or 'lemonade' in t or 'honey' in t or 'water' in t:
        return 'images/cold_drinks.png'
        
    # Fallback to a generic good looking meal
    return 'images/butter_chicken.png'

def replace_image(match):
    full_block = match.group(0)
    title_match = re.search(r"title:\s*'([^']+)'", full_block)
    if not title_match:
        return full_block
    title = title_match.group(1)
    
    img_path = get_image_for_title(title)
    
    new_block = re.sub(r"image:\s*'[^']+',", f"image: '{img_path}',", full_block)
    return new_block

new_content = re.sub(r"\{\s*id:\s*\d+.*?tags:\s*\[.*?\]\s*\}", replace_image, content, flags=re.DOTALL)

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Smart mapping complete!")
