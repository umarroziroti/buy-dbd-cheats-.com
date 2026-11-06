# DBD Cheats (buydbdcheats.com) — Final QA Report

**Project path:** `/Users/umarrashid/Documents/GitHub/buy-dbd-cheats-.com`  
**Remote:** `https://github.com/umarroziroti/buy-dbd-cheats-.com` (no agent commit/push unless you ask)  
**Template source (read-only):** `rdr-2-cheats-.net` / working base `buy-eft-cheats-.net` — not modified/pushed  
**Domain used:** `buydbdcheats.com` (www canonical; brief’s `getaion2cheats.net` / RDR2 keyword paste treated as copy-paste errors)  
**Game:** Dead by Daylight (DBD) — brief’s “escape from trakov” / Aion zone topics ignored  

**Build:** `astro build` OK — 68 pages; sitemap finalized at **64** indexable URLs.

---

## 1. Files changed (high level)

| Area | Paths |
|------|--------|
| Config | `site.ts`, `checkout.ts`, `checkout-redirects.mjs`, `seo.ts`, `pageSeo.ts`, `astro.config.mjs`, `wrangler.toml`, `workers/host-redirect.js` |
| i18n | `src/i18n/en.ts` (full DBD EN) |
| Data | `products.ts`, `faq.ts`, `forum.ts`, `blog/posts.ts` (30), `sectionIcons.ts` |
| Pages | `src/pages/products/dbd-cheats/*`, blog/forum routes, FAQ |
| Public | `_redirects`, `robots.txt`, `site.webmanifest`, logo/favicon, `images/gameplay/dbd-trial-*.png` + webp, `hero-dbd*` |
| Docs | `seo-competitor-backlink-research.md`, `backlink-follow-up.txt`, `search-console.md`, this QA report |
| README | Domain + Cloudflare repo name |
| Scripts | `rebrand-to-dbd.mjs`, `generate-dbd-posts.mjs`, `process-dbd-assets.mjs`, `redirects.mjs` |

---

## 2. Pages created / canonical routes

| Path | Role |
|------|------|
| `/` | Homepage (Hero → Features → Products → Why us → Workflow → Blog → Explore → FAQ) |
| `/products/dbd-cheats/` | Store hub (4 products) |
| `/products/dbd-cheats/elite/` | Private Cheats main suite |
| `/products/dbd-cheats/hwid-spoofer/` | HWID Spoofer |
| `/products/dbd-cheats/ugc/` | Game Accounts |
| `/products/dbd-cheats/skin-changer/` | Skin Changer |
| `/products/dbd-cheats/utilities/` | Utilities index |
| `/blog/` + 30 posts | Guides cluster |
| `/forum/` + seed threads | DiscussionForumPosting seeds |
| `/faq/`, `/support/`, `/about/`, `/terms/`, `/privacy/` | Trust / legal |
| Legacy aliases | lite/pro/unlock-all + 301s from payday/dota/eft paths |

---

## 3. Blogs (30)

All under `/blog/{slug}/` with FAQ blocks + CTAs:

1. dbd-cheats-explained  
2. best-dbd-cheat-features  
3. dbd-esp-explained  
4. dbd-survivor-esp-guide  
5. dbd-killer-awareness-guide  
6. dbd-survivor-vs-killer-esp  
7. dbd-objects-esp-guide  
8. dbd-totem-hatch-esp  
9. dbd-skill-check-helper-guide  
10. dbd-out-of-screen-arrows-guide  
11. dbd-fov-crosshair-guide  
12. dbd-aimbot-options-guide  
13. dbd-health-prestige-esp  
14. dbd-hwid-spoofer-guide  
15. dbd-fix-eac-hardware-bans  
16. dbd-game-accounts-recovery  
17. dbd-skin-changer-cosmetics-guide  
18. dbd-stream-proof-overlay  
19. dbd-battle-mode-misc-options  
20. dbd-generators-pallet-closet-esp  
21. dbd-combat-mode-hide-esp  
22. dbd-cheat-feature-comparison  
23. dbd-cheats-for-pc  
24. dbd-cheats-faq  
25. dbd-cheat-setup-guide  
26. dbd-cheat-troubleshooting-guide  
27. dbd-anticheat-bypass-explained  
28. dbd-botting-vs-private-cheats  
29. dbd-character-perk-esp-optimization  
30. dbd-safe-config-preset-sharing  

*Playbook note: long-form voice can still be refined via your GPT/Grok paste workflow; Composer wired structure, schema, images, and internal links.*

---

## 4. Keywords (clusters)

| Intent | Examples |
|--------|----------|
| Commercial | dbd cheats, dead by daylight cheats, buy dbd cheats, dbd hacks |
| Feature | dbd esp, survivor esp, objects esp, skill check helper, aimbot, totem/hatch esp |
| Utility | dbd hwid spoofer, eac hardware ban, dbd skin changer |
| Info / FAQ | dbd cheat setup, troubleshooting, anticheat overview, bans FAQ |

RDR2 “cheat codes” and Aion flight/faction keywords from the brief were **not** stuffed.

---

## 5. Competitors researched

SkyCheats DBD landing, STERN DBD store, Ducks Services category, Elocarry EAC/bans guide, BHVR rules + support bans, Reddit anti-cheat trial UGC, YouTube demos, PC Gamer/EarlyGame brand coverage. Conversion patterns adapted (price visibility, Survivor/Killer feature tables, honest risk FAQ) without copying copyrighted text. Details: `docs/seo-competitor-backlink-research.md`.

---

## 6. Keyword gaps addressed

Commercial feature pages + 30-post cluster cover ESP, aimbot, skill-check, objects, HWID, setup, troubleshooting, comparison, and FAQ intents that generic clones leave thin. Linkable roadmap items (map hub, chapter timeline, HWID whitepaper) documented for post-launch.

---

## 7. Technical SEO

- Canonical: `https://www.buydbdcheats.com/`  
- Apex → www 301 (Worker)  
- `robots.txt` Disallow `/go/` + legacy lite/pro/unlock-all  
- Trailing slash always  
- Titles/meta via `pageSeo.ts`  
- Noindex expectations: `/go/*` (disallow + 302), 404  

---

## 8. Performance

- Static Astro build, inline stylesheets, WebP responsive images with width/height  
- Prod Lighthouse not run in this session — measure with `npm run build && npm run start` then Lighthouse on `:3000`  
- Target: close to 100 on Performance / A11y / BP / SEO after deploy CDN  

---

## 9. Sitemap

Finalized split sitemaps: pages 6, products 6, blog 31, forum 21 → **64** combined indexable URLs. Index at `/sitemap.xml`.

---

## 10. Canonicals

HTML pages emit site-relative canonicals to www host via site config. Legacy product/brand paths 301 to `/products/dbd-cheats/…`.

---

## 11. Hreflang

EN-only base locale shipped (same as template). Multi-locale: run your translate command when ready — not executed by agent.

---

## 12. Schema

Organization, WebSite, Product offers (shipping + return policy, no fake ratings), FAQPage, BlogPosting, BreadcrumbList, DiscussionForumPosting patterns retained from template.

---

## 13. Broken links

Internal `/blog/dbd-*` and `/products/dbd-cheats/*` wired. Legacy eft/dota/payday paths redirect. Spot-check recommended after deploy crawl.

---

## 14. Mobile responsiveness

Template layout retained (floating header, sheet menu, product panels). Visual QA on device recommended before launch; no redesign.

---

## 15. Affiliate CTA validation

| Product | Internal path | Partner destination (unchanged) |
|---------|---------------|----------------------------------|
| Main DBD suite | `/go/dbd/` | `https://zadeyo.com/go/UMAR?to=%2Fproducts%2Fdbd` |
| HWID Spoofer | `/go/hwid-spoofer/` | `…%2Fproducts%2Fhwid-spoofer` |
| Game Accounts | `/go/ugc/` | `…%2Fproducts%2Fugc` |
| Skin Changer | `/go/skin-changer/` | `…%2Fproducts%2Fskin-changer` |

Navbar **Try Now** → `/go/dbd/` (`PRIMARY_CHECKOUT_PATH`). Partner brand name not shown in UI.

---

## 16. Branding check

- No Fortnite in `src` / `public` / `dist` (grep clean)  
- No Zadeyo/Levo in rendered HTML  
- Logo-only navbar mark (`sr-only` site name)  
- DBD-focused copy across hero, products, blog, FAQ, schema descriptions  

---

## 17. Remaining opportunities

- GPT/Grok polish on 30 blog bodies  
- User-run `npm run translate` for locales  
- Linkable interactive map/patch trackers  
- Prod Lighthouse median + GSC verification  
- Commit + push when you ask (author **soofiyanroooziroti**)  

---

## 18. Post-launch backlink roadmap

Prospects + follow-up copy in `docs/seo-competitor-backlink-research.md` and `docs/backlink-follow-up.txt`. Prioritize Computer Tech Reviews, Tinyzone, Mopoga with educational (non-cheat) angles linking to HWID / stream-proof / objective ESP guides.
