import fs from 'fs';
import path from 'path';

const productsPath = path.join(process.cwd(), 'src', 'data', 'products.js');
let content = fs.readFileSync(productsPath, 'utf8');

content = content.replace(/image: ".*?"/, 'image: "/images/01_satellite_c2.png"');
content = content.replace(/image: ".*?"/, 'image: "/images/02_orbital_dynamics.png"');
content = content.replace(/image: ".*?"/, 'image: "/images/03_telemetry_analysis.png"');
content = content.replace(/image: ".*?"/, 'image: "/images/04_astro_data.png"');

fs.writeFileSync(productsPath, content, 'utf8');
console.log('Successfully updated 4 AI product images!');
