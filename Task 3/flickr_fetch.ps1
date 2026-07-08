$targetDishes = @(
    "Gulab jamun cheesecake",
    "Dal makhani",
    "Pav bhaji",
    "Honey garlic chicken",
    "Arancini di riso",
    "Vegetable lasagna",
    "Laccha paratha",
    "Sweet and sour cauliflower",
    "Chole bhature",
    "Crispy cantonese tofu",
    "Affogato",
    "Ma po tofu",
    "Roomali roti",
    "Masala chai",
    "Szechuan tofu stir fry",
    "Paneer paratha",
    "Samosa trio",
    "Lemon risotto",
    "Onion bhaji",
    "Paneer pakora",
    "Garlic chilli baby corn",
    "Fish pakora",
    "Fried momos",
    "Gajar halwa",
    "Kesar kulfi",
    "Garlic butter mushrooms",
    "Ratatouille tart",
    "Iced matcha latte",
    "Hibiscus iced tea",
    "Orange mojito"
)

$searchMap = @{
    "Gulab jamun cheesecake" = "gulabjamun"
    "Arancini di riso" = "arancini"
    "Vegetable lasagna" = "vegetablelasagna"
    "Sweet and sour cauliflower" = "cauliflower"
    "Crispy cantonese tofu" = "cantonesetofu"
    "Szechuan tofu stir fry" = "szechuantofu"
    "Samosa trio" = "samosa"
    "Garlic chilli baby corn" = "babycorn"
    "Fried momos" = "friedmomos"
    "Garlic butter mushrooms" = "garlicmushrooms"
    "Ratatouille tart" = "ratatouille"
}

foreach ($dish in $targetDishes) {
    $cleanDish = $dish -replace "[^a-zA-Z0-9]", "_"
    $cleanDish = $cleanDish.ToLower()
    $outFile = "images\$cleanDish.jpg"
    
    $searchTerm = if ($searchMap.ContainsKey($dish)) { $searchMap[$dish] } else { $dish -replace " ", "" }
    
    Write-Host "Fetching: $dish using tag '$searchTerm'..."
    
    $url = "https://www.flickr.com/services/feeds/photos_public.gne?tags=$searchTerm&format=json&nojsoncallback=1"
    
    try {
        $res = Invoke-RestMethod -Uri $url -TimeoutSec 10
        if ($res.items -and $res.items.Count -gt 0) {
            # Grab the medium image link
            $imgUrl = $res.items[0].media.m
            # Change _m to _b for large image
            $imgUrl = $imgUrl -replace "_m.jpg", "_b.jpg"
            
            Invoke-WebRequest -Uri $imgUrl -OutFile $outFile -TimeoutSec 15
            Write-Host "  [OK] Downloaded: $imgUrl"
        } else {
            Write-Host "  [FAIL] No image found for tag $searchTerm"
        }
    } catch {
        Write-Host "  [ERROR] $_"
    }
    
    Start-Sleep -Milliseconds 500
}

# Update script.js directly 
$pyScript = @"
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
"@

Set-Content -Path "update.py" -Value $pyScript
python update.py
Write-Host "Done!"
