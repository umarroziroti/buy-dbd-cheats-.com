# buydbdcheats.com

DBD Cheats — Dead by Daylight Windows PC aimbot, Survivor ESP, objects ESP, and skill-check helpers. Monthly $35 / lifetime $150.

## Stack

- Astro 7 (static output)
- Tailwind CSS 4
- Cloudflare Workers (static assets)

## Local development

```bash
npm ci
npm run dev
```

```bash
npm run build
npm run preview
```

## Deploy on Cloudflare Workers

Build command: `npm run build`  
Deploy command: `npx wrangler deploy`  
Attach `buydbdcheats.com` and `www.buydbdcheats.com` (apex → www via Worker).

Checkout hops (`/go/*`) are handled by `public/_redirects` (Zadeyo affiliate destinations — do not change without new URLs from the owner).
