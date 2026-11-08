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
    title: 'DBD Cheats – Aimbot, ESP & Skill Check for Windows',
    description:
      'DBD cheats for Windows PC: aimbot, Survivor ESP, objects ESP, skill check helper, and battle mode. Monthly $35 or lifetime $150.',
  },
  '/products/dbd-cheats/': {
    title: 'Cheat store for DBD — suite, HWID, accounts, skins',
    description:
      'Cheat catalog for Dead by Daylight — private suite, HWID spoofer, game accounts, and skin changer for Windows PC trials.',
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
    title: 'Guides for Aimbot, ESP, Setup and EAC | DBD Cheats',
    description:
      'Guides hub — aimbot, Survivor ESP, objects ESP, skill check helper, HWID, skins, Windows setup, and EAC status before you buy.',
  },
  '/forum/': {
    title: 'Forum – Read DBD cheats discussion covering aimbot',
    description:
      'Forum: Read DBD cheats discussion covering aimbot, Survivor ESP, objects ESP, skill check helper, and EAC status before you buy.',
  },
  '/faq/': {
    title: 'FAQ — Pricing, Bans, Aimbot, ESP & Support Details',
    description:
      'FAQ for DBD Cheats on Windows PC — $35 monthly and $150 lifetime, aimbot and ESP features, status, setup, and Discord support.',
  },
  '/terms/': {
    title: 'Terms for DBD Cheats | License & Refunds',
    description:
      'Terms for buying DBD Cheats on buydbdcheats.com — license use, delivery, refunds and account risk.',
  },
  '/privacy/': {
    title: 'Privacy Policy: Cookies, Analytics, and Contact Data',
    description:
      'Privacy details for the DBD Cheats shop at buydbdcheats.com — analytics, cookies, and contact data when you browse or buy.',
  },
  '/about/': {
    title: 'Buy PC Aimbot & ESP Store | Learn About DBD Cheats',
    description:
      'Buy PC Dead by Daylight tools from DBD Cheats — aimbot, Survivor ESP, objects ESP, HWID, accounts, and skins on Windows.',
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
