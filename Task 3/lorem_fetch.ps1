$dishes = @(
    "Garlic Chilli Baby Corn", "Chicken Parmesan", "Fettuccine Alfredo",
    "Pesto Ravioli", "Sicilian Eggplant Parmigiana", "Lemon Risotto",
    "Burrata Caprese", "Garlic Rosemary Focaccia", "Meatball Parmigiana",
    "Polenta Fries with Truffle Aioli", "Achari Paneer Tikka", "Tandoori Lamb Chops",
    "Tandoori Broccoli", "Tandoori Butter Chicken", "Cheese Garlic Naan",
    "Peshawari Naan", "Paneer Kulcha", "Ajwain Naan", "Multigrain Roti",
    "Stuffed Aloo Paratha", "Jowar Bhakri", "Mediterranean Veg Pizza",
    "Chicken Tikka Pizza", "Veggie Delight Pizza", "Spinach Ricotta Pizza",
    "Prawn Pesto Pizza", "Mushroom Truffle Pizza", "Buffalo Chicken Pizza",
    "Caramelized Onion Pizza", "Spicy Chicken Burger", "Fish Burger",
    "Paneer Tikka Burger", "Mushroom Swiss Burger", "BBQ Bacon Burger",
    "Grilled Veggie Burger", "Loaded Cheese Burger", "Falafel Burger",
    "Chicken Kebab Burger", "Lamb Burger", "Onion Bhaji", "Chicken 65",
    "Paneer Pakora", "Seekh Kebab", "Shrimp Koliwada", "Gajar Halwa",
    "Chocolate Brownie Sundae", "Kesar Kulfi", "Mango Cheesecake",
    "Caramel Flan", "Rose Lassi", "Sparkling Mango Cooler", "Ginger Lemon Honey",
    "Cold Brew Coffee", "Hibiscus Iced Tea", "Orange Mojito",
    "Vanilla Cold Brew", "Coconut Water Cooler"
)

$searchMap = @{
    "Garlic Chilli Baby Corn" = "babycorn"
    "Chicken Parmesan" = "chickenparmesan"
    "Fettuccine Alfredo" = "alfredo"
    "Pesto Ravioli" = "ravioli"
    "Sicilian Eggplant Parmigiana" = "eggplant"
    "Lemon Risotto" = "risotto"
    "Burrata Caprese" = "caprese"
    "Garlic Rosemary Focaccia" = "focaccia"
    "Meatball Parmigiana" = "meatball"
    "Polenta Fries with Truffle Aioli" = "polenta"
    "Achari Paneer Tikka" = "paneer"
    "Tandoori Lamb Chops" = "lambchops"
    "Tandoori Broccoli" = "broccoli"
    "Tandoori Butter Chicken" = "butterchicken"
    "Cheese Garlic Naan" = "naan"
    "Peshawari Naan" = "naan"
    "Paneer Kulcha" = "kulcha"
    "Ajwain Naan" = "naan"
    "Multigrain Roti" = "roti"
    "Stuffed Aloo Paratha" = "paratha"
    "Jowar Bhakri" = "bhakri"
    "Mediterranean Veg Pizza" = "pizza"
    "Chicken Tikka Pizza" = "pizza"
    "Veggie Delight Pizza" = "pizza"
    "Spinach Ricotta Pizza" = "pizza"
    "Prawn Pesto Pizza" = "pizza"
    "Mushroom Truffle Pizza" = "pizza"
    "Buffalo Chicken Pizza" = "pizza"
    "Caramelized Onion Pizza" = "pizza"
    "Spicy Chicken Burger" = "burger"
    "Fish Burger" = "burger"
    "Paneer Tikka Burger" = "burger"
    "Mushroom Swiss Burger" = "burger"
    "BBQ Bacon Burger" = "burger"
    "Grilled Veggie Burger" = "burger"
    "Loaded Cheese Burger" = "burger"
    "Falafel Burger" = "falafel"
    "Chicken Kebab Burger" = "kebab"
    "Lamb Burger" = "burger"
    "Onion Bhaji" = "bhaji"
    "Chicken 65" = "chicken65"
    "Paneer Pakora" = "pakora"
    "Seekh Kebab" = "kebab"
    "Shrimp Koliwada" = "shrimp"
    "Gajar Halwa" = "halwa"
    "Chocolate Brownie Sundae" = "sundae"
    "Kesar Kulfi" = "kulfi"
    "Mango Cheesecake" = "cheesecake"
    "Caramel Flan" = "flan"
    "Rose Lassi" = "lassi"
    "Sparkling Mango Cooler" = "mango"
    "Ginger Lemon Honey" = "lemonade"
    "Cold Brew Coffee" = "coldbrew"
    "Hibiscus Iced Tea" = "icedtea"
    "Orange Mojito" = "mojito"
    "Vanilla Cold Brew" = "coldbrew"
    "Coconut Water Cooler" = "coconutwater"
}

New-Item -ItemType Directory -Force -Path "images" | Out-Null

foreach ($dish in $dishes) {
    $search = if ($searchMap.ContainsKey($dish)) { $searchMap[$dish] } else { $dish -replace " ", "" }
    
    $cleanDish = $dish -replace "[^a-zA-Z0-9]", "_"
    $cleanDish = $cleanDish.ToLower()
    $outFile = "images\$cleanDish.jpg"
    
    if (Test-Path $outFile) {
        if ((Get-Item $outFile).length -gt 10000) {
            Write-Host "Skipping $dish"
            continue
        }
    }

    $url = "https://loremflickr.com/600/400/$search,food/all"
    try {
        Invoke-WebRequest -Uri $url -OutFile $outFile -TimeoutSec 15
        Write-Host "Downloaded: $dish"
        Start-Sleep -Milliseconds 500
    } catch {
        Write-Host "Error for $dish : $_"
    }
}
Write-Host "Done downloading images!"
