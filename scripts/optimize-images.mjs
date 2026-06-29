/**
 * Image Optimization Script
 * Converts all product images (PNG/JPG) to WebP with aggressive compression
 * Resizes oversized images to their actual display dimensions
 * Target: product cards < 150KB, hero < 250KB
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

// Image optimization configs
const PRODUCT_CARD_WIDTH = 800;   // Max display width for product cards (2x retina for 400px cards)
const PRODUCT_CARD_QUALITY = 75;  // WebP quality for product images
const HERO_WIDTH = 1920;          // Full width hero
const HERO_QUALITY = 72;          // Hero WebP quality

async function optimizeImage(inputPath, outputPath, width, quality, height = null) {
  try {
    const pipeline = sharp(inputPath).webp({ quality, effort: 6 });
    if (height) {
      pipeline.resize(width, height, { fit: 'cover', position: 'center' });
    } else {
      pipeline.resize(width, null, { fit: 'inside', withoutEnlargement: true });
    }
    await pipeline.toFile(outputPath);
    const inSize = fs.statSync(inputPath).size;
    const outSize = fs.statSync(outputPath).size;
    const reduction = ((1 - outSize / inSize) * 100).toFixed(1);
    console.log(`✅ ${path.basename(outputPath)}: ${(inSize/1024).toFixed(0)}KB → ${(outSize/1024).toFixed(0)}KB (-${reduction}%)`);
  } catch (err) {
    console.error(`❌ Failed ${path.basename(inputPath)}:`, err.message);
  }
}

async function main() {
  console.log('🚀 Starting image optimization...\n');

  // ─── Hero Image ───────────────────────────────────────────────────────────
  const heroIn = path.join(root, 'src/assets/aerospace-background.jpg');
  const heroOut = path.join(root, 'public/aerospace-background.webp');
  await optimizeImage(heroIn, heroOut, HERO_WIDTH, HERO_QUALITY, 1080);

  // ─── Careers Hero ─────────────────────────────────────────────────────────
  const careersIn = path.join(root, 'src/assets/careers-hero.png');
  const careersOut = path.join(root, 'public/careers-hero.webp');
  if (fs.existsSync(careersIn)) {
    await optimizeImage(careersIn, careersOut, 1600, 72, 900);
  }

  // ─── Product Images ────────────────────────────────────────────────────────
  const imagesDir = path.join(root, 'public/images');
  const outDir = path.join(root, 'public/images/webp');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const imageFiles = fs.readdirSync(imagesDir).filter(f =>
    /\.(png|jpg|jpeg)$/i.test(f)
  );

  for (const file of imageFiles) {
    const inputPath = path.join(imagesDir, file);
    const outName = file.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    const outputPath = path.join(outDir, outName);
    await optimizeImage(inputPath, outputPath, PRODUCT_CARD_WIDTH, PRODUCT_CARD_QUALITY);
  }

  // ─── Favicon ──────────────────────────────────────────────────────────────
  const faviconIn = path.join(root, 'public/favicon.png');
  const faviconOut = path.join(root, 'public/favicon-32.png');
  if (fs.existsSync(faviconIn)) {
    await sharp(faviconIn).resize(32, 32).png({ compressionLevel: 9 }).toFile(faviconOut);
    const s = fs.statSync(faviconOut).size;
    console.log(`✅ favicon-32.png: ${(s/1024).toFixed(1)}KB`);
  }

  // ─── Summary ──────────────────────────────────────────────────────────────
  console.log('\n📊 Optimization complete!');
  let totalOut = 0;
  if (fs.existsSync(outDir)) {
    fs.readdirSync(outDir).forEach(f => {
      totalOut += fs.statSync(path.join(outDir, f)).size;
    });
  }
  console.log(`📦 Product images total: ${(totalOut/1024/1024).toFixed(2)}MB`);
}

main().catch(console.error);
