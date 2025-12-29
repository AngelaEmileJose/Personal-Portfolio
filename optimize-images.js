const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const publicDir = path.join(__dirname, 'public');

// Images to optimize
const imagesToOptimize = [
    'food-pastries.jpg',
    'food-pancakes.jpg',
    'food-pho-noodles.jpg',
    'food-rice-dish.jpg',
    'food-japanese-bowls.jpg',
    'food-travel-cover.jpg',
    'booboo-1.jpg',
    'booboo-2.jpg',
    'booboo-3.jpg',
    'booboo-4.png',
    'booboo-5.jpg',
    'booboo-6.jpg',
    'booboo-7.jpg',
    'booboo-8.jpg',
    'booboo-9.jpg',
    'booboo-10.jpg',
];

console.log('Starting image optimization...\n');

imagesToOptimize.forEach(img => {
    const imgPath = path.join(publicDir, img);

    if (!fs.existsSync(imgPath)) {
        console.log(`⚠️  Skipping ${img} (not found)`);
        return;
    }

    const statsBefore = fs.statSync(imgPath);
    const sizeBefore = (statsBefore.size / 1024).toFixed(2);

    try {
        // Use ImageMagick via WSL to optimize
        const ext = path.extname(img);
        const quality = ext === '.png' ? 85 : 82;

        execSync(`wsl mogrify -quality ${quality} -resize 1200x1200\\> "${imgPath.replace(/\\/g, '/')}"`, {
            stdio: 'pipe'
        });

        const statsAfter = fs.statSync(imgPath);
        const sizeAfter = (statsAfter.size / 1024).toFixed(2);
        const reduction = ((1 - statsAfter.size / statsBefore.size) * 100).toFixed(1);

        console.log(`✅ ${img}: ${sizeBefore}KB → ${sizeAfter}KB (${reduction}% reduction)`);
    } catch (error) {
        console.log(`❌ Failed to optimize ${img}`);
    }
});

console.log('\n✨ Image optimization complete!');
