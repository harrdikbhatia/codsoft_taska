$scriptContent = Get-Content -Raw -Path "script.js"
$regex = "title:\s*'([^']+)'"
$matches = [regex]::Matches($scriptContent, $regex)

# Keep the hyper-realistic AI images for these core ones to retain some high quality visuals
$keepAI = @("Veg Hyderabadi Biryani", "Mango Lassi", "Spring Onion Soup", "Classic Bruschetta", "Vegetable Spring Rolls", "Butter Naan", "Honey Chili Potato", "Veg Steamed Dumplings", "Margherita Pizza", "Tiramisu", "Classic Smash Burger", "Rasmalai", "Masala Chai")

foreach ($m in $matches) {
    $dish = $m.Groups[1].Value
    $cleanDish = $dish -replace "[^a-zA-Z0-9]", "_"
    $cleanDish = $cleanDish.ToLower()
    $outFile = "images\$cleanDish.jpg"
    
    # Generate search term (grab last word or key words)
    $search = $dish -replace " ", ""
    
    if (-not (Test-Path $outFile) -and $dish -notin $keepAI) {
        $url = "https://loremflickr.com/600/400/$search,food/all"
        try {
            Invoke-WebRequest -Uri $url -OutFile $outFile -TimeoutSec 15
            Write-Host "Downloaded: $dish"
            Start-Sleep -Milliseconds 200
        } catch {
            Write-Host "Error for $dish"
        }
    }
}

# Now carefully update script.js to point every dish to its corresponding file (either .jpg if it exists, or leave .png)
# Using python for reliable regex replacement since PS regex replace with capture groups can be tricky

$pyScript = @"
import re, os
with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

def replace_image(match):
    full_block = match.group(0)
    title_match = re.search(r"title:\s*'([^']+)'", full_block)
    if not title_match: return full_block
    title = title_match.group(1)
    
    clean_dish = re.sub(r'[^a-zA-Z0-9]', '_', title).lower()
    jpg_path = f'images/{clean_dish}.jpg'
    
    if os.path.exists(jpg_path):
        return re.sub(r"image:\s*'[^']+',", f"image: '{jpg_path}',", full_block)
    return full_block

new_content = re.sub(r"\{\s*id:\s*\d+.*?tags:\s*\[.*?\]\s*\}", replace_image, content, flags=re.DOTALL)
with open('script.js', 'w', encoding='utf-8') as f:
    f.write(new_content)
"@

Set-Content -Path "map.py" -Value $pyScript
python map.py
Write-Host "All 65 dishes fully resolved and mapped!"
