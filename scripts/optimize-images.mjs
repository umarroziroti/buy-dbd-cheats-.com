import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const widths = [320, 400, 512, 640, 960];
const dirs = ['public/images/gameplay', 'public/images/blog', 'public/images'];

const RASTER = /\.(png|jpe?g)$/i;

async function writeVariants(input, baseName, outDir) {
  for (const width of widths) {
    const output = path.join(outDir, `${baseName}-${width}.webp`);
    await sharp(input)
      .resize({ width, withoutEnlargement: true, kernel: sharp.kernel.lanczos3 })
      .webp({ quality: 90, effort: 5, smartSubsample: true })
      .toFile(output);
    console.log(`Wrote ${path.relative(root, output)}`);
  }

  // Full-size WebP companion for OG / social when source is JPG/PNG.
  const fullWebp = path.join(outDir, `${baseName}.webp`);
  await sharp(input)
    .resize({ width: 1600, withoutEnlargement: true, kernel: sharp.kernel.lanczos3 })
    .webp({ quality: 90, effort: 5, smartSubsample: true })
    .toFile(fullWebp);
  console.log(`Wrote ${path.relative(root, fullWebp)}`);
}

async function optimizeDir(relativeDir) {
  const dir = path.join(root, relativeDir);
  if (!fs.existsSync(dir)) return;

  const files = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && RASTER.test(entry.name) && !/-\d+\.webp$/i.test(entry.name))
    .map((entry) => entry.name);

  for (const file of files) {
    const input = path.join(dir, file);
    const base = file.replace(RASTER, '');
    await writeVariants(input, base, dir);
  }
}

async function optimizeBrandLogos() {
  const logos = ['public/logo.png', 'public/logo-nav.png', 'public/logo-mark.png'];
  for (const relative of logos) {
    const input = path.join(root, relative);
    if (!fs.existsSync(input)) continue;
    const output = input.replace(/\.png$/i, '.webp');
    await sharp(input).webp({ quality: 92, effort: 5 }).toFile(output);
    console.log(`Wrote ${path.relative(root, output)}`);
  }
}

for (const dir of dirs) {
  await optimizeDir(dir);
}
await optimizeBrandLogos();

console.log('Image optimization complete.');
