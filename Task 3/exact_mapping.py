import re

with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Exact mapping for every dish found in the script!
mappings = {
    'Paneer Tikka Masala': 'images/butter_chicken.png',
    'Veg Hyderabadi Biryani': 'images/biryani.png',
    'Mango Lassi': 'images/mango_lassi.png',
    'Gulab Jamun Cheesecake': 'images/indian_desserts.png',
    'Spring Onion Soup': 'images/soup.png',
    'Classic Bruschetta': 'images/bruschetta.png',
    'Vegetable Spring Rolls': 'images/spring_rolls.png',
    'Mushroom Risotto': 'images/pasta_alfredo.png',
    'Tandoori Paneer': 'images/kebab_tikka.png',
    'Garlic Butter Mushrooms': 'images/gourmet_steak.png',
    'Dal Makhani': 'images/butter_chicken.png',
    'Paneer Korma': 'images/butter_chicken.png',
    'Pav Bhaji': 'images/butter_chicken.png',
    'Butter Naan': 'images/naan_bread.png',
    'Garlic Naan': 'images/naan_bread.png',
    'Tandoori Roti': 'images/naan_bread.png',
    'Laccha Paratha': 'images/naan_bread.png',
    'Paneer Lababdar': 'images/butter_chicken.png',
    'Chole Bhature': 'images/naan_bread.png',
    'Paneer Curry': 'images/butter_chicken.png',
    'Szechuan Noodles': 'images/noodles.png',
    'Kung Pao Paneer': 'images/kebab_tikka.png',
    'Honey Chili Potato': 'images/honey_chili_potato.png',
    'Veg Steamed Dumplings': 'images/dumplings.png',
    'Sweet Corn Soup': 'images/soup.png',
    'Chow Mein': 'images/noodles.png',
    'Honey Garlic Chicken': 'images/butter_chicken.png',
    'Veg Tom Yum Soup': 'images/soup.png',
    'Crispy Chilli Paneer': 'images/kebab_tikka.png',
    'Sweet and Sour Cauliflower': 'images/spring_rolls.png',
    'Veg Dan Dan Noodles': 'images/noodles.png',
    'Margherita Pizza': 'images/margherita_pizza.png',
    'Mushroom Bolognese': 'images/pasta_alfredo.png',
    'Pesto Gnocchi': 'images/pasta_alfredo.png',
    'Caprese Salad': 'images/salad.png',
    'Four Cheese Pizza': 'images/margherita_pizza.png',
    'Tiramisu': 'images/tiramisu.png',
    'Arancini di Riso': 'images/bruschetta.png',
    'Vegetable Lasagna': 'images/pasta_alfredo.png',
    'Panna Cotta': 'images/tiramisu.png',
    'Ratatouille Tart': 'images/bruschetta.png',
    'Mushroom Wellington': 'images/gourmet_steak.png',
    'Caesar Salad': 'images/salad.png',
    'Grilled Portobello Fillet': 'images/gourmet_steak.png',
    'Creamy Mushroom Soup': 'images/soup.png',
    'Chocolate Fondant': 'images/chocolate_lava_cake.png',
    'Herb Crusted Paneer': 'images/gourmet_steak.png',
    'Mushroom Confit': 'images/gourmet_steak.png',
    'Veg en Papillote': 'images/gourmet_steak.png',
    'Apple Tarte Tatin': 'images/tiramisu.png',
    'Tandoori Paneer Tikka': 'images/kebab_tikka.png',
    'Paneer Kebab Platter': 'images/kebab_tikka.png',
    'Tandoori Mushroom Tikka': 'images/kebab_tikka.png',
    'Naan Basket': 'images/naan_bread.png',
    'Tandoori Mushroom': 'images/kebab_tikka.png',
    'Paneer Malai Tikka': 'images/kebab_tikka.png',
    'Tandoori Mixed Veg Grill': 'images/kebab_tikka.png',
    'Paneer Reshmi Kebab': 'images/kebab_tikka.png',
    'Tandoori Mushroom Bites': 'images/kebab_tikka.png',
    'Tandoori Chaap': 'images/kebab_tikka.png',
    'Truffle Mushroom Pizza': 'images/margherita_pizza.png',
    'BBQ Chicken Pizza': 'images/margherita_pizza.png',
    'Classic Smash Burger': 'images/classic_burger.png',
    'Spicy Paneer Burger': 'images/classic_burger.png',
    'Truffle Wagyu Burger': 'images/classic_burger.png',
    
    # Missing from old extraction but present in the huge dump:
    'Garlic Chilli Baby Corn': 'images/spring_rolls.png',
    'Chicken Parmesan': 'images/gourmet_steak.png',
    'Fettuccine Alfredo': 'images/pasta_alfredo.png',
    'Pesto Ravioli': 'images/pasta_alfredo.png',
    'Sicilian Eggplant Parmigiana': 'images/lasagna.png', # we'll fallback to pasta_alfredo if missing
    'Lemon Risotto': 'images/pasta_alfredo.png',
    'Burrata Caprese': 'images/salad.png',
    'Garlic Rosemary Focaccia': 'images/naan_bread.png',
    'Meatball Parmigiana': 'images/gourmet_steak.png',
    'Polenta Fries with Truffle Aioli': 'images/honey_chili_potato.png',
    'Achari Paneer Tikka': 'images/kebab_tikka.png',
    'Tandoori Lamb Chops': 'images/kebab_tikka.png',
    'Tandoori Broccoli': 'images/kebab_tikka.png',
    'Tandoori Butter Chicken': 'images/butter_chicken.png',
    'Cheese Garlic Naan': 'images/naan_bread.png',
    'Peshawari Naan': 'images/naan_bread.png',
    'Paneer Kulcha': 'images/naan_bread.png',
    'Ajwain Naan': 'images/naan_bread.png',
    'Multigrain Roti': 'images/naan_bread.png',
    'Stuffed Aloo Paratha': 'images/naan_bread.png',
    'Jowar Bhakri': 'images/naan_bread.png',
    'Mediterranean Veg Pizza': 'images/margherita_pizza.png',
    'Neapolitan Margherita': 'images/margherita_pizza.png',
    'Chicken Tikka Pizza': 'images/margherita_pizza.png',
    'Veggie Delight Pizza': 'images/margherita_pizza.png',
    'Spinach Ricotta Pizza': 'images/margherita_pizza.png',
    'Prawn Pesto Pizza': 'images/margherita_pizza.png',
    'Mushroom Truffle Pizza': 'images/margherita_pizza.png',
    'Buffalo Chicken Pizza': 'images/margherita_pizza.png',
    'Caramelized Onion Pizza': 'images/margherita_pizza.png',
    'Spicy Chicken Burger': 'images/classic_burger.png',
    'Fish Burger': 'images/classic_burger.png',
    'Paneer Tikka Burger': 'images/classic_burger.png',
    'Mushroom Swiss Burger': 'images/classic_burger.png',
    'BBQ Bacon Burger': 'images/classic_burger.png',
    'Grilled Veggie Burger': 'images/classic_burger.png',
    'Loaded Cheese Burger': 'images/classic_burger.png',
    'Falafel Burger': 'images/classic_burger.png',
    'Chicken Kebab Burger': 'images/classic_burger.png',
    'Lamb Burger': 'images/classic_burger.png',
    'Rasmalai': 'images/indian_desserts.png',
    'Gajar Halwa': 'images/indian_desserts.png',
    'Chocolate Brownie Sundae': 'images/chocolate_lava_cake.png',
    'Kesar Kulfi': 'images/indian_desserts.png',
    'Mango Cheesecake': 'images/chocolate_lava_cake.png',
    'Caramel Flan': 'images/chocolate_lava_cake.png',
    'Masala Chai': 'images/coffee_tea.png',
    'Rose Lassi': 'images/mango_lassi.png',
    'Sparkling Mango Cooler': 'images/cold_drinks.png',
    'Ginger Lemon Honey': 'images/cold_drinks.png',
    'Cold Brew Coffee': 'images/coffee_tea.png',
    'Hibiscus Iced Tea': 'images/cold_drinks.png',
    'Orange Mojito': 'images/cold_drinks.png',
    'Vanilla Cold Brew': 'images/coffee_tea.png',
    'Coconut Water Cooler': 'images/cold_drinks.png',
    'Onion Bhaji': 'images/spring_rolls.png',
    'Chicken 65': 'images/honey_chili_potato.png',
    'Paneer Pakora': 'images/spring_rolls.png',
    'Seekh Kebab (3 Pieces)': 'images/kebab_tikka.png',
    'Shrimp Koliwada': 'images/spring_rolls.png'
}

def replace_image(match):
    full_block = match.group(0)
    title_match = re.search(r"title:\s*'([^']+)'", full_block)
    if not title_match:
        return full_block
    title = title_match.group(1)
    
    # We will safely match it or keep existing if not explicitly mapped
    if title in mappings:
        new_image = mappings[title]
        # Replace the image line safely
        # It could look like: image: 'images/butter_chicken.png',
        # Or image: 'images/pasta_alfredo.png', etc.
        new_block = re.sub(r"image:\s*'[^']+',", f"image: '{new_image}',", full_block)
        return new_block
    return full_block

new_content = re.sub(r"\{\s*id:\s*\d+.*?tags:\s*\[.*?\]\s*\}", replace_image, content, flags=re.DOTALL)

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Exact mapping applied successfully!")
