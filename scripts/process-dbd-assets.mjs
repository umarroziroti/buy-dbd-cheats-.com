/**
 * Build logo, favicon, hero, and gameplay assets from _uploads/.
 * Nav/favicon use the neon tally mark (transparent). Wordmark saved separately.
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const uploads = path.join(root, '_uploads');
const publicDir = path.join(root, 'public');
const gameplayDir = path.join(publicDir, 'images', 'gameplay');
const imagesDir = path.join(publicDir, 'images');

fs.mkdirSync(gameplayDir, { recursive: true });

const logoWordmarkSrc = path.join(uploads, 'dead by daylight dbd ogo.jpeg');
const logoMarkSrc = path.join(uploads, 'dead-by-daylight favicon.jpg');

async function knockColorToAlpha(inputPath, { mode = 'white', threshold = 248 } = {}) {
  const { data, info } = await sharp(inputPath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (mode === 'white') {
      if (r >= threshold && g >= threshold && b >= threshold) data[i + 3] = 0;
    } else if (r <= threshold && g <= threshold && b <= threshold) {
      data[i + 3] = 0;
    }
  }
  return sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .trim({ threshold: 8 })
    .png()
    .toBuffer();
}

async function fitOnSquare(trimmedPng, size, paddingRatio = 0.1) {
  const inner = Math.round(size * (1 - paddingRatio * 2));
  const fitted = await sharp(trimmedPng)
    .resize(inner, inner, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();
  const fm = await sharp(fitted).metadata();
  const left = Math.floor((size - fm.width) / 2);
  const top = Math.floor((size - fm.height) / 2);
  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: fitted, left, top }])
    .png()
    .toBuffer();
}

async function writeIco(pathOut, pngEntries) {
  const count = pngEntries.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);
  const dir = Buffer.alloc(count * 16);
  let offset = 6 + count * 16;
  const parts = [header, dir];
  pngEntries.forEach((e, i) => {
    const o = i * 16;
    dir.writeUInt8(e.size >= 256 ? 0 : e.size, o);
    dir.writeUInt8(e.size >= 256 ? 0 : e.size, o + 1);
    dir.writeUInt8(0, o + 2);
    dir.writeUInt8(0, o + 3);
    dir.writeUInt16LE(1, o + 4);
    dir.writeUInt16LE(32, o + 6);
    dir.writeUInt32LE(e.buf.length, o + 8);
    dir.writeUInt32LE(offset, o + 12);
    parts.push(e.buf);
    offset += e.buf.length;
  });
  fs.writeFileSync(pathOut, Buffer.concat(parts));
}

// --- Brand mark (nav + favicons) ---
const trimmedMark = await knockColorToAlpha(logoMarkSrc, { mode: 'white', threshold: 248 });
const mark512 = await fitOnSquare(trimmedMark, 512, 0.1);

const brandPng = {
  'logo.png': 512,
  'logo-mark.png': 256,
  'logo-nav.png': 160,
  'favicon-512.png': 512,
  'favicon-192.png': 192,
  'favicon-48.png': 48,
  'favicon-32.png': 32,
  'favicon-16.png': 16,
  'favicon-source.png': 512,
};
for (const [name, size] of Object.entries(brandPng)) {
  await sharp(mark512).resize(size, size).png().toFile(path.join(publicDir, name));
  console.log('Wrote', name);
}

await sharp(mark512)
  .resize(180, 180)
  .flatten({ background: '#111215' })
  .png()
  .toFile(path.join(publicDir, 'apple-touch-icon.png'));
console.log('Wrote apple-touch-icon.png');

await sharp(mark512).webp({ quality: 92 }).toFile(path.join(publicDir, 'logo.webp'));
await sharp(mark512).resize(256, 256).webp({ quality: 92 }).toFile(path.join(publicDir, 'logo-mark.webp'));
await sharp(mark512).resize(160, 160).webp({ quality: 92 }).toFile(path.join(publicDir, 'logo-nav.webp'));

await writeIco(path.join(publicDir, 'favicon.ico'), [
  { size: 16, buf: await sharp(mark512).resize(16, 16).png().toBuffer() },
  { size: 32, buf: await sharp(mark512).resize(32, 32).png().toBuffer() },
  { size: 48, buf: await sharp(mark512).resize(48, 48).png().toBuffer() },
]);
console.log('Wrote favicon.ico');

const b64fav = (await sharp(mark512).resize(64, 64).png().toBuffer()).toString('base64');
fs.writeFileSync(
  path.join(publicDir, 'favicon.svg'),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="DBD Cheats"><image width="64" height="64" href="data:image/png;base64,${b64fav}"/></svg>\n`,
);
const b64logo = (await sharp(mark512).resize(128, 128).png().toBuffer()).toString('base64');
fs.writeFileSync(
  path.join(publicDir, 'logo.svg'),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" role="img" aria-label="DBD Cheats"><image width="128" height="128" href="data:image/png;base64,${b64logo}"/></svg>\n`,
);
console.log('Wrote favicon.svg and logo.svg');

// Wordmark (optional / OG) — transparent
const word = await knockColorToAlpha(logoWordmarkSrc, { mode: 'dark', threshold: 55 });
await sharp(word).resize({ width: 960, withoutEnlargement: true }).png().toFile(path.join(publicDir, 'logo-wordmark.png'));
await sharp(word).resize({ width: 960, withoutEnlargement: true }).webp({ quality: 92 }).toFile(path.join(publicDir, 'logo-wordmark.webp'));
console.log('Wrote logo-wordmark.png/.webp');

// --- Gameplay / heroes (if uploads present) ---
const gameplayMap = [
  ['dbd gameplay 1.jpeg', 'dbd-trial-generators'],
  ['dbd gameplay 2.jpeg', 'dbd-trial-chase'],
  ['dbd gameplay 3.jpeg', 'dbd-trial-hook'],
  ['dbd gameplay 4.jpeg', 'dbd-trial-pallet'],
  ['dbd gameplay 5.jpeg', 'dbd-trial-escape'],
];

for (const [srcName, base] of gameplayMap) {
  const input = path.join(uploads, srcName);
  if (!fs.existsSync(input)) continue;
  const pngOut = path.join(gameplayDir, `${base}.png`);
  await sharp(input)
    .resize({ width: 1600, withoutEnlargement: true })
    .png({ compressionLevel: 9 })
    .toFile(pngOut);
  console.log('Wrote', path.relative(root, pngOut));
}

const hero1 = path.join(uploads, 'dbd gameplay 1.jpeg');
const hero3 = path.join(uploads, 'dbd gameplay 3.jpeg');
if (fs.existsSync(hero1)) {
  await sharp(hero1)
    .resize({ width: 1600, height: 900, fit: 'cover' })
    .jpeg({ quality: 88 })
    .toFile(path.join(imagesDir, 'hero-dbd.jpg'));
  console.log('Wrote hero-dbd.jpg');
}
if (fs.existsSync(hero3)) {
  await sharp(hero3)
    .resize({ width: 1600, height: 900, fit: 'cover' })
    .modulate({ brightness: 0.72 })
    .jpeg({ quality: 88 })
    .toFile(path.join(imagesDir, 'hero-dbd-dark.jpg'));
  console.log('Wrote hero-dbd-dark.jpg');
}

console.log('Asset processing complete.');
