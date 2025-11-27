# Script to convert anchor links to React Router Links
# This script will:
# 1. Add Link import where needed
# 2. Replace href="#section" with to="/section"
# 3. Replace <a> tags with <Link> tags

$files = @(
    "src\pages\OverMij.tsx",
    "src\pages\Diensten.tsx",
    "src\pages\Quiz.tsx",
    "src\pages\Tarieven.tsx",
    "src\components\Footer.tsx",
    "src\components\PricingCard.tsx"
)

$anchorToRouteMap = @{
    "#home" = "/"
    "#over-mij" = "/over-mij"
    "#diensten" = "/diensten"
    "#aanpak" = "/aanpak"
    "#tarieven" = "/tarieven"
    "#vergoedingen" = "/vergoeding"
    "#contact" = "/contact"
}

foreach ($file in $files) {
    $fullPath = Join-Path $PSScriptRoot $file
    
    if (Test-Path $fullPath) {
        Write-Host "Processing: $file"
        
        $content = Get-Content $fullPath -Raw
        
        # Check if Link is already imported
        if ($content -notmatch "import.*\{.*Link.*\}.*from.*'react-router-dom'") {
            # Add Link import after the first import statement
            $content = $content -replace "(import.*from.*;)", "`$1`nimport { Link } from 'react-router-dom';"
            Write-Host "  - Added Link import"
        }
        
        # Replace anchor links with Link components
        foreach ($anchor in $anchorToRouteMap.Keys) {
            $route = $anchorToRouteMap[$anchor]
            
            # Replace href="#..." with to="/..."
            if ($content -match [regex]::Escape("href=`"$anchor`"")) {
                $content = $content -replace [regex]::Escape("href=`"$anchor`""), "to=`"$route`""
                Write-Host "  - Replaced $anchor with $route"
            }
            
            # Replace <a with <Link (only for lines that have the route)
            $content = $content -replace "(<\s*)a(\s+[^>]*to=`"$([regex]::Escape($route))`")", "`${1}Link`$2"
            
            # Replace </a> with </Link> on the same logical block
            # This is tricky, so we'll do a simple replacement
            $content = $content -replace "</a>", "</Link>"
        }
        
        # Save the file
        Set-Content -Path $fullPath -Value $content -NoNewline
        Write-Host "  - Saved $file"
    }
    else {
        Write-Host "File not found: $file" -ForegroundColor Red
    }
}

Write-Host "`nConversion complete!" -ForegroundColor Green
