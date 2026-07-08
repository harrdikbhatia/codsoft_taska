$scriptContent = Get-Content -Raw -Path "script.js"
$regex = "title:\s*'([^']+)'(?:.|\n)*?image:\s*'([^']+)'"
$matches = [regex]::Matches($scriptContent, $regex)

$headers = @{
    "User-Agent" = "SavoriaMenuUpdater/1.0 (hardi@example.com) PowerShell/7.0"
}

New-Item -ItemType Directory -Force -Path "images" | Out-Null

foreach ($m in $matches) {
    $dish = $m.Groups[1].Value
    $imagePath = $m.Groups[2].Value
    
    if ($imagePath -like "*.jpg" -and -not (Test-Path $imagePath)) {
        Write-Host "Fetching: $dish"
        
        $searchTerms = @($dish)
        $words = $dish -split ' '
        if ($words.Length -gt 1) {
            $searchTerms += $words[-1] # fallback to last word (e.g. Burger, Pizza)
        }
        if ($words.Length -gt 2) {
            $searchTerms += "$($words[-2]) $($words[-1])" # fallback to last two words
        }
        
        $downloaded = $false
        foreach ($term in $searchTerms) {
            if ($downloaded) { break }
            $searchUrl = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=$([uri]::EscapeDataString($term))&utf8=&format=json&srlimit=1"
            
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
                        Invoke-WebRequest -Uri $original -OutFile $imagePath -TimeoutSec 15
                        Write-Host "  [OK] $original"
                        $downloaded = $true
                    }
                }
            } catch {
                Write-Host "  [ERROR] $_"
            }
            Start-Sleep -Milliseconds 300
        }
        if (-not $downloaded) {
            Write-Host "  [FAIL] Could not find any image for $dish"
            # Fallback to a tiny transparent pixel just to prevent broken image icon? 
            # Or just ignore and let it 404. Let's let it 404 so we know it failed.
        }
    }
}
Write-Host "Done!"
