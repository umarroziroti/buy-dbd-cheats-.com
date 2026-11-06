import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const key = process.env.INDEXNOW_KEY?.trim();
const host = process.env.INDEXNOW_HOST?.trim() || 'www.buydbdcheats.com';

if (!key) {
  console.log('IndexNow: skipped (INDEXNOW_KEY not set).');
  process.exit(0);
}

const sitemapPath = [
  path.join(dist, 'sitemap-all.xml'),
  path.join(dist, 'sitemap-0.xml'),
  path.join(dist, 'sitemap.xml'),
].find((candidate) => fs.existsSync(candidate));

if (!sitemapPath) {
  console.warn('IndexNow: sitemap missing — skipping ping.');
  process.exit(0);
}

const sitemap = fs.readFileSync(sitemapPath, 'utf8');
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map((match) => match[1])
  .filter((loc) => loc.includes('buydbdcheats.com/') && !loc.endsWith('sitemap.xml') && !loc.includes('sitemap-'))
  .slice(0, 10000);

if (urlList.length === 0) {
  console.warn('IndexNow: no URLs found in sitemap.');
  process.exit(0);
}

const keyFile = path.join(dist, `${key}.txt`);
fs.writeFileSync(keyFile, key, 'utf8');

const payload = {
  host,
  key,
  keyLocation: `https://${host}/${key}.txt`,
  urlList,
};

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(payload),
});

if (response.ok) {
  console.log(`IndexNow: submitted ${urlList.length} URL(s) (HTTP ${response.status}).`);
} else {
  const body = await response.text();
  console.warn(`IndexNow: ping failed HTTP ${response.status}: ${body.slice(0, 200)}`);
}
