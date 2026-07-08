$dishes = @(
    "Garlic Chilli Baby Corn",
    "Chicken Parmesan",
    "Fettuccine Alfredo",
    "Pesto Ravioli",
    "Sicilian Eggplant Parmigiana",
    "Lemon Risotto",
    "Burrata Caprese",
    "Garlic Rosemary Focaccia",
    "Meatball Parmigiana",
    "Polenta Fries with Truffle Aioli",
    "Achari Paneer Tikka",
    "Tandoori Lamb Chops",
    "Tandoori Broccoli",
    "Tandoori Butter Chicken",
    "Cheese Garlic Naan",
    "Peshawari Naan",
    "Paneer Kulcha",
    "Ajwain Naan",
    "Multigrain Roti",
    "Stuffed Aloo Paratha",
    "Jowar Bhakri",
    "Mediterranean Veg Pizza",
    "Chicken Tikka Pizza",
    "Veggie Delight Pizza",
    "Spinach Ricotta Pizza",
    "Prawn Pesto Pizza",
    "Mushroom Truffle Pizza",
    "Buffalo Chicken Pizza",
    "Caramelized Onion Pizza",
    "Spicy Chicken Burger",
    "Fish Burger",
    "Paneer Tikka Burger",
    "Mushroom Swiss Burger",
    "BBQ Bacon Burger",
    "Grilled Veggie Burger",
    "Loaded Cheese Burger",
    "Falafel Burger",
    "Chicken Kebab Burger",
    "Lamb Burger",
    "Onion Bhaji",
    "Chicken 65",
    "Paneer Pakora",
    "Seekh Kebab",
    "Shrimp Koliwada",
    "Gajar Halwa",
    "Chocolate Brownie Sundae",
    "Kesar Kulfi",
    "Mango Cheesecake",
    "Caramel Flan",
    "Rose Lassi",
    "Sparkling Mango Cooler",
    "Ginger Lemon Honey",
    "Cold Brew Coffee",
    "Hibiscus Iced Tea",
    "Orange Mojito",
    "Vanilla Cold Brew",
    "Coconut Water Cooler"
)

# We map a few complex ones to simpler search terms to guarantee hits
$searchMap = @{
    "Garlic Chilli Baby Corn" = "Baby corn"
    "Chicken Parmesan" = "Chicken parmigiana"
    "Fettuccine Alfredo" = "Fettuccine Alfredo"
    "Pesto Ravioli" = "Ravioli"
    "Sicilian Eggplant Parmigiana" = "Parmigiana"
    "Lemon Risotto" = "Risotto"
    "Burrata Caprese" = "Caprese salad"
    "Garlic Rosemary Focaccia" = "Focaccia"
    "Meatball Parmigiana" = "Meatball"
    "Polenta Fries with Truffle Aioli" = "Polenta"
    "Achari Paneer Tikka" = "Paneer tikka"
    "Tandoori Lamb Chops" = "Meat chop"
    "Tandoori Broccoli" = "Broccoli"
    "Tandoori Butter Chicken" = "Butter chicken"
    "Cheese Garlic Naan" = "Naan"
    "Peshawari Naan" = "Naan"
    "Paneer Kulcha" = "Kulcha"
    "Ajwain Naan" = "Naan"
    "Multigrain Roti" = "Roti"
    "Stuffed Aloo Paratha" = "Aloo paratha"
    "Jowar Bhakri" = "Bhakri"
    "Mediterranean Veg Pizza" = "Vegetarian pizza"
    "Chicken Tikka Pizza" = "Pizza"
    "Veggie Delight Pizza" = "Vegetarian pizza"
    "Spinach Ricotta Pizza" = "Pizza"
    "Prawn Pesto Pizza" = "Pizza"
    "Mushroom Truffle Pizza" = "Pizza"
    "Buffalo Chicken Pizza" = "Pizza"
    "Caramelized Onion Pizza" = "Pizza"
    "Spicy Chicken Burger" = "Chicken sandwich"
    "Fish Burger" = "Salmon burger"
    "Paneer Tikka Burger" = "Veggie burger"
    "Mushroom Swiss Burger" = "Cheeseburger"
    "BBQ Bacon Burger" = "Bacon cheeseburger"
    "Grilled Veggie Burger" = "Veggie burger"
    "Loaded Cheese Burger" = "Cheeseburger"
    "Falafel Burger" = "Falafel"
    "Chicken Kebab Burger" = "Kebab"
    "Lamb Burger" = "Hamburger"
    "Onion Bhaji" = "Bhaji"
    "Chicken 65" = "Chicken 65"
    "Paneer Pakora" = "Pakora"
    "Seekh Kebab" = "Seekh kebab"
    "Shrimp Koliwada" = "Fried shrimp"
    "Gajar Halwa" = "Gajar ka halwa"
    "Chocolate Brownie Sundae" = "Sundae"
    "Kesar Kulfi" = "Kulfi"
    "Mango Cheesecake" = "Cheesecake"
    "Caramel Flan" = "Crème caramel"
    "Rose Lassi" = "Lassi"
    "Sparkling Mango Cooler" = "Mango"
    "Ginger Lemon Honey" = "Lemonade"
    "Cold Brew Coffee" = "Cold brew coffee"
    "Hibiscus Iced Tea" = "Iced tea"
    "Orange Mojito" = "Mojito"
    "Vanilla Cold Brew" = "Iced coffee"
    "Coconut Water Cooler" = "Coconut water"
}

New-Item -ItemType Directory -Force -Path "images" | Out-Null

foreach ($dish in $dishes) {
    $search = if ($searchMap.ContainsKey($dish)) { $searchMap[$dish] } else { $dish }
    
    $cleanDish = $dish -replace "[^a-zA-Z0-9]", "_"
    $cleanDish = $cleanDish.ToLower()
    $outFile = "images\$cleanDish.jpg"
    
    if (Test-Path $outFile) {
        Write-Host "Skipping $dish"
        continue
    }

    $searchUrl = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=$([uri]::EscapeDataString($search))&utf8=&format=json&srlimit=1"
    try {
        $searchRes = Invoke-RestMethod -Uri $searchUrl -TimeoutSec 10
        $title = $searchRes.query.search[0].title
        if (-not $title) {
            Write-Host "No wiki page found for $dish"
            continue
        }
        
        $imgUrl = "https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&piprop=original&titles=$([uri]::EscapeDataString($title))&format=json"
        $imgRes = Invoke-RestMethod -Uri $imgUrl -TimeoutSec 10
        
        $pages = $imgRes.query.pages
        $pageId = ($pages | Get-Member -MemberType NoteProperty)[0].Name
        $original = $pages.$pageId.original.source
        
        if ($original) {
            Invoke-WebRequest -Uri $original -OutFile $outFile -TimeoutSec 15
            Write-Host "Downloaded: $dish"
        } else {
            Write-Host "No image on page for $dish"
        }
    } catch {
        Write-Host "Error for $dish : $_"
    }
}
Write-Host "Done downloading images!"
