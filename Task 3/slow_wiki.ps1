$targetDishes = @(
    "Gulab Jamun Cheesecake",
    "Dal Makhani",
    "Pav Bhaji",
    "Honey Garlic Chicken",
    "Arancini di Riso",
    "Vegetable Lasagna",
    "Laccha Paratha",
    "Sweet and Sour Cauliflower",
    "Chole Bhature",
    "Crispy Cantonese Tofu",
    "Affogato",
    "Ma Po Tofu",
    "Roomali Roti",
    "Masala Chai",
    "Szechuan Tofu Stir Fry",
    "Paneer Paratha",
    "Samosa Trio",
    "Lemon Risotto",
    "Onion Bhaji",
    "Paneer Pakora",
    "Garlic Chilli Baby Corn",
    "Fish Pakora",
    "Fried Spicy Chicken Momos",
    "Mixed Vegetable Fried Momos",
    "Gajar Halwa",
    "Kesar Kulfi",
    "Garlic Butter Mushrooms",
    "Ratatouille Tart",
    "Iced Matcha Latte",
    "Hibiscus Iced Tea",
    "Orange Mojito"
)

$headers = @{
    "User-Agent" = "SavoriaMenuUpdater/1.5 (hardi@example.com)"
}

# Mapping of complex dish names to simple Wikipedia search terms to guarantee a result
$searchMap = @{
    "Gulab Jamun Cheesecake" = "Gulab jamun"
    "Honey Garlic Chicken" = "Fried chicken"
    "Arancini di Riso" = "Arancini"
    "Vegetable Lasagna" = "Lasagna"
    "Laccha Paratha" = "Paratha"
    "Sweet and Sour Cauliflower" = "Cauliflower"
    "Crispy Cantonese Tofu" = "Tofu"
    "Szechuan Tofu Stir Fry" = "Tofu"
    "Paneer Paratha" = "Paratha"
    "Samosa Trio" = "Samosa"
    "Lemon Risotto" = "Risotto"
    "Onion Bhaji" = "Bhaji"
    "Paneer Pakora" = "Pakora"
    "Garlic Chilli Baby Corn" = "Baby corn"
    "Fish Pakora" = "Pakora"
    "Fried Spicy Chicken Momos" = "Momo (food)"
    "Mixed Vegetable Fried Momos" = "Momo (food)"
    "Kesar Kulfi" = "Kulfi"
    "Garlic Butter Mushrooms" = "Mushroom"
    "Ratatouille Tart" = "Ratatouille"
    "Iced Matcha Latte" = "Matcha"
    "Hibiscus Iced Tea" = "Iced tea"
    "Orange Mojito" = "Mojito"
}

foreach ($dish in $targetDishes) {
    $cleanDish = $dish -replace "[^a-zA-Z0-9]", "_"
    $cleanDish = $cleanDish.ToLower()
    $outFile = "images\$cleanDish.jpg"
    
    $searchTerm = if ($searchMap.ContainsKey($dish)) { $searchMap[$dish] } else { $dish }
    
    Write-Host "Fetching: $dish using term '$searchTerm'..."
    
    $searchUrl = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=$([uri]::EscapeDataString($searchTerm))&utf8=&format=json&srlimit=1"
    
    try {
        $searchRes = Invoke-RestMethod -Uri $searchUrl -Headers $headers -TimeoutSec 10
        $title = $searchRes.query.search[0].title
        
        if ($title) {
            $imgUrl = "https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&piprop=original&titles=$([uri]::EscapeDataString($title))&format=json"
            $imgRes = Invoke-RestMethod -Uri $imgUrl -Headers $headers -TimeoutSec 10
            
            $pages = $imgRes.query.pages
            $pageId = ($pages | Get-Member -MemberType NoteProperty)[0].Name
            $original = $pages.$pageId.original.source
            
            if ($original) {
                Invoke-WebRequest -Uri $original -OutFile $outFile -TimeoutSec 15
                Write-Host "  [OK] Downloaded: $original"
            } else {
                Write-Host "  [FAIL] No image on page for $title"
            }
        } else {
            Write-Host "  [FAIL] No article for $searchTerm"
        }
    } catch {
        Write-Host "  [ERROR] $_"
    }
    
    # 5 seconds strict delay to prevent any rate limiting
    Start-Sleep -Seconds 5
}
Write-Host "Done downloading!"
