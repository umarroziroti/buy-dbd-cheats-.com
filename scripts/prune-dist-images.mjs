import fs from 'node:fs';
import path from 'node:path';

/** Drop source PNG/JPG from dist — pages serve WebP variants only. */
const distImages = path.resolve('dist/images');
let removed = 0;
let bytes = 0;

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }
    if (!/\.(png|jpe?g)$/i.test(entry.name)) continue;
    const stat = fs.statSync(full);
    // Keep tiny assets; drop gameplay/blog/hero sources.
    if (stat.size < 40_000) continue;
    bytes += stat.size;
    fs.unlinkSync(full);
    removed += 1;
  }
}

walk(distImages);
console.log(
  `Pruned ${removed} source raster(s) from dist/images (${(bytes / 1024 / 1024).toFixed(1)} MB).`,
);
