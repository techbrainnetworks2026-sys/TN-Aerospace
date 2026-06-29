import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const svgPath = path.join(root, 'public', 'favicon.svg');
const png512Path = path.join(root, 'public', 'favicon.png');
const png32Path = path.join(root, 'public', 'favicon-32.png');

async function main() {
  console.log('🔄 Converting favicon.svg to PNGs...');
  
  // Render SVG to 512x512 PNG
  await sharp(svgPath)
    .resize(512, 512)
    .png({ compressionLevel: 9 })
    .toFile(png512Path);
  console.log('✅ Generated public/favicon.png (512x512)');

  // Render SVG to 32x32 PNG
  await sharp(svgPath)
    .resize(32, 32)
    .png({ compressionLevel: 9 })
    .toFile(png32Path);
  console.log('✅ Generated public/favicon-32.png (32x32)');
}

main().catch(console.error);
