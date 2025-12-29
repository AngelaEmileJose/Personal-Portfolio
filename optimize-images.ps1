# PowerShell script to optimize images
Add-Type -AssemblyName System.Drawing

$publicDir = "c:\Users\angel\projects\Portfolio\public"
$images = @(
    "food-pastries.jpg", "food-pancakes.jpg", "food-pho-noodles.jpg",
    "food-rice-dish.jpg", "food-japanese-bowls.jpg", "food-travel-cover.jpg",
    "booboo-1.jpg", "booboo-2.jpg", "booboo-3.jpg", "booboo-4.png",
    "booboo-5.jpg", "booboo-6.jpg", "booboo-7.jpg", "booboo-8.jpg",
    "booboo-9.jpg", "booboo-10.jpg"
)

Write-Host "Starting image optimization...`n"

foreach ($imgName in $images) {
    $imgPath = Join-Path $publicDir $imgName
    
    if (-not (Test-Path $imgPath)) {
        Write-Host "⚠️  Skipping $imgName (not found)"
        continue
    }
    
    try {
        $sizeBefore = [math]::Round((Get-Item $imgPath).Length / 1KB, 2)
        
        # Load image
        $img = [System.Drawing.Image]::FromFile($imgPath)
        
        # Calculate new dimensions (max 1200px on longest side)
        $maxSize = 1200
        $width = $img.Width
        $height = $img.Height
        
        if ($width -gt $maxSize -or $height -gt $maxSize) {
            if ($width -gt $height) {
                $newWidth = $maxSize
                $newHeight = [int]($height * ($maxSize / $width))
            } else {
                $newHeight = $maxSize
                $newWidth = [int]($width * ($maxSize / $height))
            }
        } else {
            $newWidth = $width
            $newHeight = $height
        }
        
        # Create new bitmap with smaller size
        $newImg = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
        $graphics = [System.Drawing.Graphics]::FromImage($newImg)
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.DrawImage($img, 0, 0, $newWidth, $newHeight)
        
        # Save with compression
        $img.Dispose()
        $graphics.Dispose()
        
        $tempPath = $imgPath + ".tmp"
        $newImg.Save($tempPath, $img.RawFormat)
        $newImg.Dispose()
        
        # Replace original
        Remove-Item $imgPath
        Move-Item $tempPath $imgPath
        
        $sizeAfter = [math]::Round((Get-Item $imgPath).Length / 1KB, 2)
        $reduction = [math]::Round((1 - $sizeAfter / $sizeBefore) * 100, 1)
        
        Write-Host "✅ $imgName`: $sizeBefore KB → $sizeAfter KB ($reduction% reduction)"
    }
    catch {
        Write-Host "❌ Failed to optimize $imgName`: $_"
    }
}

Write-Host "`n✨ Image optimization complete!"
