#!/usr/bin/env python3
from PIL import Image
import os

public_dir = r"c:\Users\angel\projects\Portfolio\public"

images = [
    "food-pastries.jpg", "food-pancakes.jpg", "food-pho-noodles.jpg",
    "food-rice-dish.jpg", "food-japanese-bowls.jpg", "food-travel-cover.jpg",
    "booboo-1.jpg", "booboo-2.jpg", "booboo-3.jpg", "booboo-4.png",
    "booboo-5.jpg", "booboo-6.jpg", "booboo-7.jpg", "booboo-8.jpg",
    "booboo-9.jpg", "booboo-10.jpg"
]

print("Starting image optimization...\n")

for img_name in images:
    img_path = os.path.join(public_dir, img_name)
    
    if not os.path.exists(img_path):
        print(f"⚠️  Skipping {img_name} (not found)")
        continue
    
    try:
        size_before = os.path.getsize(img_path) / 1024
        
        # Open image
        img = Image.open(img_path)
        
        # Convert RGBA to RGB if needed
        if img.mode == 'RGBA':
            rgb_img = Image.new('RGB', img.size, (255, 255, 255))
            rgb_img.paste(img, mask=img.split()[3])
            img = rgb_img
        
        # Resize if too large (max 1200px on longest side)
        max_size = 1200
        if max(img.size) > max_size:
            img.thumbnail((max_size, max_size), Image.Resampling.LANCZOS)
        
        # Save with optimization
        if img_name.endswith('.png'):
            img.save(img_path, 'PNG', optimize=True)
        else:
            img.save(img_path, 'JPEG', quality=85, optimize=True)
        
        size_after = os.path.getsize(img_path) / 1024
        reduction = ((size_before - size_after) / size_before) * 100
        
        print(f"✅ {img_name}: {size_before:.2f}KB → {size_after:.2f}KB ({reduction:.1f}% reduction)")
        
    except Exception as e:
        print(f"❌ Failed to optimize {img_name}: {str(e)}")

print("\n✨ Image optimization complete!")
