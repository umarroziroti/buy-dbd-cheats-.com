/**
 * Central titles/descriptions for high-traffic routes.
 * After Search Console shows impressions, edit the matching path here and redeploy.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'DBD Cheats | Aimbot, ESP and Skill Check',
    description:
      'Buy Dead by Daylight cheats on Windows PC. Aimbot, Survivor ESP, objects ESP, skill check helper, and battle mode with live status. Monthly $35 or lifetime $150.',
  },
  '/products/dbd-cheats/': {
    title: 'DBD Store | DBD Cheats',
    description:
      'DBD store — private cheats (monthly $35 / lifetime $150), HWID spoofer, game accounts, and skin changer with aimbot, Survivor ESP, and objects ESP.',
  },
  '/products/dbd-cheats/elite/': {
    title: 'DBD Cheats | Aimbot & ESP',
    description:
      'Dead by Daylight private cheats — aimbot, Survivor ESP, objects ESP, skill check helper, battle mode, menu theming, and configs on Windows PC.',
  },
  '/products/dbd-cheats/hwid-spoofer/': {
    title: 'DBD HWID Spoofer | PC Ban Reset',
    description:
      'Buy an DBD HWID spoofer for Windows PC — disk serial, MAC tools with restore-point checklist and post-spoof verification.',
  },
  '/products/dbd-cheats/ugc/': {
    title: 'DBD Game Accounts | Ban Detection Tools',
    description:
      'DBD Game Accounts tools for ban detection, temporary and permanent restriction handling, and live status verification.',
  },
  '/products/dbd-cheats/skin-changer/': {
    title: 'DBD Skin Changer | Cosmetics & Outfits',
    description:
      'DBD Skin Changer for outfit libraries, live preview, one-click apply, custom imports, loadouts, and preset sharing.',
  },
  '/products/dbd-cheats/utilities/': {
    title: 'DBD cheat Utilities | HWID, Accounts, Skins',
    description:
      'Compare DBD cheat utilities — HWID Spoofer, Game Accounts, and Skin Changer — and pick the right tool beside the main DBD Cheats suite.',
  },
  '/blog/': {
    title: 'DBD Guides | DBD Cheats',
    description:
      'DBD Guides hub — aimbot, Survivor ESP, objects ESP, skill check helper, HWID, skins, Windows setup, and EAC status before you buy.',
  },
  '/forum/': {
    title: 'DBD Forum | Buyer Discussion',
    description:
      'Read DBD cheats discussion covering aimbot, Survivor ESP, objects ESP, skill check helper, and Easy Anti-Cheat status notes before you pick a plan.',
  },
  '/faq/': {
    title: 'DBD FAQ | DBD Cheats',
    description:
      'FAQ for DBD Cheats on Windows PC — $35 monthly and $150 lifetime, aimbot and ESP features, status, setup, and Discord support.',
  },
  '/terms/': {
    title: 'Terms for DBD Cheats | License & Refunds',
    description:
      'Terms for buying DBD Cheats on buydbdcheats.com — license use, delivery, refunds and account risk.',
  },
  '/privacy/': {
    title: 'Privacy Policy | DBD Cheats Shop',
    description:
      'How the DBD Cheats shop at buydbdcheats.com uses analytics, cookies and contact data.',
  },
  '/about/': {
    title: 'About DBD Cheats | Aimbot & ESP Store',
    description:
      'Learn how DBD Cheats sells aimbot, Survivor ESP, objects ESP, HWID, accounts, and skins for Dead by Daylight on Windows PC.',
  },
  '/support/': {
    title: 'DBD Support | DBD Cheats',
    description:
      'Get support for DBD Cheats on Discord — loader setup, delivery, menu config, and status help after you purchase.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
