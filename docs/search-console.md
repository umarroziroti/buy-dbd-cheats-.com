# Google Search Console — buydbdcheats.com

## Canonical host
- Primary: `https://www.buydbdcheats.com/`
- Apex `buydbdcheats.com` 301 → `www` via Cloudflare Worker (`workers/host-redirect.js`)

## Property setup
1. Add URL-prefix or domain property for `buydbdcheats.com`.
2. Verify via DNS TXT or HTML file.
3. Submit sitemaps:
   - `https://www.buydbdcheats.com/sitemap.xml`
   - `https://www.buydbdcheats.com/sitemap-pages.xml`
   - `https://www.buydbdcheats.com/sitemap-products.xml`
   - `https://www.buydbdcheats.com/sitemap-blog.xml`
   - `https://www.buydbdcheats.com/sitemap-forum.xml`

## Indexing notes
- `/go/*` is Disallow in robots + 302 edge redirects — not for indexing.
- `/status/` (if present) may be noindex.
- Legacy `/products/eft-cheats/*` and `/go/eft/` 301 to DBD paths.

## After deploy
- Request indexing on `/`, `/products/dbd-cheats/elite/`, and one blog post.
- Rich Results Test: product URL + FAQ + one BlogPosting + one forum thread.
