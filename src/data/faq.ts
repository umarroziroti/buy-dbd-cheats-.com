import type { IconName } from '../components/icons/types';
import { normalizeInternalPath, productPath, ROUTES } from '../utils/path';

export type FaqTopic =
  | 'all'
  | 'plans'
  | 'esp'
  | 'scripts'
  | 'safety'
  | 'products'
  | 'blog'
  | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function a(text: string): string {
  return text;
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

/** Rotate anchor text so FAQ answers do not repeat the same phrase to one URL. */
function uniqueLinkFactory(base: string, href: string, variants: string[]) {
  let i = 0;
  const labels = [base, ...variants];
  return () => link(labels[i++ % labels.length]!, href);
}

const elite = uniqueLinkFactory('elite private suite', productPath('elite'), [
  'DBD elite product',
  'private cheats plan',
  'elite suite listing',
  'buy elite suite',
  'elite product page',
  'open elite suite',
  'elite checkout card',
  'Monthly or Lifetime suite',
  'main private suite',
]);
const hwid = uniqueLinkFactory('HWID spoofer product', productPath('hwid-spoofer'), [
  'HWID recovery product',
  'hardware spoofer page',
  'HWID tool listing',
]);
const accounts = uniqueLinkFactory('game accounts product', productPath('ugc'), [
  'accounts recovery product',
  'Game Accounts listing',
  'accounts tool page',
]);
const skins = uniqueLinkFactory('skin changer product', productPath('skin-changer'), [
  'cosmetics changer page',
  'skin changer listing',
]);
const productsHub = uniqueLinkFactory('DBD store hub', ROUTES.products, [
  'products catalog',
  'store hub page',
]);
const faqPage = uniqueLinkFactory('full FAQ page', ROUTES.faq, ['complete FAQ list']);
const blog = uniqueLinkFactory('blog guides hub', ROUTES.blog, ['guides archive']);

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Where do I check if DBD Cheats are online?',
    a: a('The live status banner is on buydbdcheats.com and in the Discord #status channel. Always check after a Dead by Daylight update.'),
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'What happens after I buy?',
    a: a('Your portal unlocks the loader, setup guide and config library via our secure checkout. Follow the guide before launching Dead by Daylight.'),
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Can I get banned using third-party DBD Cheats?',
    a: a('Yes—any modification carries risk. Anti-cheat and report systems evolve. Read current status and accept the risk before use.'),
  },
  {
    id: 'hwid-ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'What if my PC hardware is flagged but the account looks fine?',
    a: `Hardware flags are different from account-only bans. ${hwid()} can help when Easy Anti-Cheat or related hardware checks target the machine (Easy Anti-Cheat may apply on other games the spoofer supports). It does not fix account-only cases—see ${accounts()} for restriction tooling. We never promise undetectable software.`,
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Which platforms are supported?',
    a: a('Dead by Daylight via Steam / Epic / Microsoft Store on Windows 10/11 64-bit only. Consoles are not supported.'),
  },
  {
    id: 'license-move',
    topic: 'setup',
    icon: 'faqLicenseMove',
    q: 'Can I move my license to a new PC?',
    a: a('Yes—use the license reset in your portal or open a Discord ticket. Limits depend on your plan.'),
  },
  {
    id: 'products-page',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Where are products listed?',
    a: `${productsHub()} lists DBD Cheats, HWID Spoofer, Game Accounts and Skin Changer with feature lists and checkout. Private Cheats plans are Monthly ($35) or Lifetime ($150).`,
  },
  {
    id: 'what-is-esp',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What is DBD ESP / wallhack?',
    a: `Survivor ESP shows Survivor and Killer players through walls. Killer ESP separates Survivors (and limited Killer ESP notes). Objects ESP marks containers, keys, and quest items. Escape door / hatch markers show trial exits. ${elite()} includes the full overlay suite.`,
    scopes: ['elite', 'lite', 'pro'],
  },
  {
    id: 'esp-vs-scripts',
    topic: 'esp',
    icon: 'faqEspVsScripts',
    q: 'What is the difference between ESP and aimbot?',
    a: `ESP overlays show positions—they do not move your aim. Aimbot options helps tracking when you hold the aim key. Both ship on ${elite()}.`,
  },
  {
    id: 'which-tier-esp',
    topic: 'plans',
    icon: 'faqWhichTierEsp',
    q: 'Do I need a special tier for ESP only?',
    a: `There is one DBD Cheats product. Toggle modules in the portal—run ESP alone or add aimbot and radar as needed. See ${elite()}.`,
    scopes: ['elite', 'lite'],
  },
  {
    id: 'which-tier-scripts',
    topic: 'scripts',
    icon: 'faqWhichTierScripts',
    q: 'Which plan includes Aimbot?',
    a: `Aimbot options is included on ${elite()} for both Monthly ($35) and Lifetime ($150). Tune FOV and smoothness in the portal before queuing.`,
    scopes: ['elite', 'pro'],
  },
  {
    id: 'rank-lite-vs-pro',
    topic: 'plans',
    icon: 'faqRankTiers',
    q: 'Monthly vs lifetime — which should I buy?',
    a: `Same modules either way. Monthly is $35 / month; Lifetime is $150 one-time. Compare on ${elite()} or the ${faqPage()}.`,
  },
  {
    id: 'compare-plans',
    topic: 'plans',
    icon: 'faqRankTiers',
    q: 'Is the feature list identical on Monthly and Lifetime?',
    a: `Yes. Billing differs; modules do not. Start Monthly if you want to evaluate, then upgrade in the portal when ready.`,
  },
  {
    id: 'undetected',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Are DBD Cheats undetected?',
    a: a('No honest shop can promise permanent undetected status. Treat every session as risk-bearing. Check the live status banner and stop if modules show offline or updating.'),
  },
  {
    id: 'eac-update',
    topic: 'safety',
    icon: 'faqStatus',
    q: 'What should I do after an anti-cheat or game update?',
    a: a('Check buydbdcheats.com status and Discord #status. Do not launch until the banner shows online. Load conservative presets after any patch.'),
  },
  {
    id: 'hwid-product',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'When do I need the HWID Spoofer?',
    a: `Use ${hwid()} when hardware is flagged but the account still works elsewhere. It does not fix account-only bans.`,
    scopes: ['hwid-spoofer'],
  },
  {
    id: 'ugc-product',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'What do Game Accounts tools do?',
    a: `${accounts()} helps detect restriction types, run supported remediation where authorized, and verify live status. Results are never guaranteed.`,
    scopes: ['ugc'],
  },
  {
    id: 'skin-product',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'What does Skin Changer include?',
    a: `${skins()} covers skin libraries, live preview, one-click apply, custom imports, loadouts and preset sharing for DBD cosmetics.`,
    scopes: ['skin-changer'],
  },
  {
    id: 'stream-proof',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'Can overlays stay off my stream?',
    a: `Yes. Stream-proof overlay mode on ${elite()} hides ESP and aim visuals from OBS and similar capture tools while you still see them locally.`,
    scopes: ['elite'],
  },
  {
    id: 'blog-vs-product',
    topic: 'blog',
    icon: 'faqMore',
    q: 'Are blog guides the same as private cheats?',
    a: `No. Blog articles about menus or workflows are not the same as private DBD Cheats—see ${elite()}.`,
  },
  {
    id: 'combat-mode',
    topic: 'esp',
    icon: 'faqEspVsScripts',
    q: 'What is Combat Mode?',
    a: `Combat Mode hides world ESP (loot, quests, containers) while keeping Survivor and Killer overlays—useful when screens get noisy in fights. Available on ${elite()}.`,
    scopes: ['elite', 'lite'],
  },
  {
    id: 'private-cheats',
    topic: 'safety',
    icon: 'faqPrivateCheats',
    q: 'What are private DBD Cheats?',
    a: a('Private means per-user keys and maintained builds—not public zip packs. DBD Cheats ships portal delivery for ESP, aimbot and radar.'),
  },
  {
    id: 'faq-more',
    topic: 'all',
    icon: 'faqMore',
    q: 'Where is the full FAQ?',
    a: `This site includes landing FAQs and per-page sections. See the ${faqPage()} for all product and blog answers—or read ${blog()} for deep guides.`,
  },
];

export function getLandingFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) =>
    ['status', 'after-buy', 'ban-risk', 'hwid-ban-risk', 'platforms', 'license-move', 'products-page'].includes(f.id),
  );
}

export function getAllFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) => f.topic !== 'all');
}

export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'All topics',
  title: 'DBD Cheats FAQ',
  subtitle: 'Filter by plans ($35 monthly / $150 lifetime), ESP, aimbot, products, setup and guides.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = [
  'all',
  'plans',
  'esp',
  'scripts',
  'safety',
  'products',
  'blog',
  'setup',
];

export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'Cheat FAQ',
  title: 'DBD Cheats questions',
  subtitle: 'Straight answers on aimbot, ESP, bans and setup — see the full FAQ for every topic.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export function getProductFaqs(slug: string, kind: 'tier' | 'utility'): SiteFaqItem[] {
  const general = siteFaqs.filter(
    (f) =>
      !f.scopes &&
      ['setup', 'safety', 'plans', 'esp', 'scripts'].includes(f.topic),
  );
  const scoped = siteFaqs.filter((f) => f.scopes?.includes(slug));
  const tierCompare = siteFaqs.filter((f) =>
    ['rank-lite-vs-pro', 'compare-plans', 'undetected', 'eac-update', 'hwid-ban-risk'].includes(f.id),
  );

  const combined =
    kind === 'tier'
      ? [...scoped, ...tierCompare, ...general.slice(0, 8)]
      : [...scoped, ...general.slice(0, 6)];

  const seen = new Set<string>();
  return combined.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

const blogTopicFaqs: Record<string, SiteFaqItem[]> = {
  Guides: [
    {
      id: 'blog-guide-start',
      topic: 'blog',
      icon: 'faqBlogGuideStart',
      q: 'Are console-style cheat codes the same as private cheats?',
      a: a('No. Single-player cheat codes and trainer menus are not the same as private DBD overlays maintained for Online risk. Use product pages for the private suite.'),
    },
    {
      id: 'blog-guide-tier',
      topic: 'blog',
      icon: 'faqBlogGuideTier',
      q: 'Which product matches this guide?',
      a: `ESP, aimbot and radar modules → ${elite()}. Plans are Monthly ($35) or Lifetime ($150).`,
    },
    {
      id: 'blog-guide-status',
      topic: 'blog',
      icon: 'faqBlogGuideStatus',
      q: 'Is this guide still valid after a patch?',
      a: a('Check the article date and the live status banner. Patch-day articles note when modules change—Discord #status has the latest build notes.'),
    },
  ],
  Setup: [
    {
      id: 'blog-setup-loader',
      topic: 'blog',
      icon: 'faqBlogSetupLoader',
      q: 'Where do I download the loader?',
      a: a('Only from your operator portal after checkout—not from third-party links in comments or DMs.'),
    },
    {
      id: 'blog-setup-lobby',
      topic: 'blog',
      icon: 'faqBlogSetupLobby',
      q: 'Should I test before queuing?',
      a: a('Yes. Load conservative presets offline or in a quiet session before live Dead by Daylight raids. Tune soft-aim smoothness and ESP distance caps over several sessions.'),
    },
  ],
  Security: [
    {
      id: 'blog-sec-eac',
      topic: 'blog',
      icon: 'faqBlogSecEac',
      q: 'Does this article guarantee undetected status?',
      a: a('No article replaces the live status banner. Undetected is never a permanent promise—stop if status shows updating or detected.'),
    },
  ],
};

const defaultBlogFaqs: SiteFaqItem[] = [
  {
    id: 'blog-default-1',
    topic: 'blog',
    icon: 'faqBlogDefault1',
    q: 'Are blog guides official product documentation?',
    a: `Articles explain workflows and link to ${elite()} and ${productsHub()}. Feature lists on product pages are authoritative for checkout.`,
  },
  {
    id: 'blog-default-2',
    topic: 'blog',
    icon: 'faqBlogDefault2',
    q: 'Need help applying this guide?',
    a: a('Open Discord with your order email and the article slug. Staff reference the same portal presets mentioned in guides.'),
  },
  {
    id: 'blog-default-3',
    topic: 'blog',
    icon: 'faqBlogDefault3',
    q: 'Will settings in this article work next patch?',
    a: a('Re-check status after every Dead by Daylight update. Portal presets update with patch notes—reload configs instead of copying old sliders.'),
  },
];

export function getBlogFaqs(tag: string, slug: string): SiteFaqItem[] {
  const topicFaqs = blogTopicFaqs[tag] ?? [];
  const slugHints: SiteFaqItem[] = [];

  if (slug.includes('esp') || slug.includes('radar') || slug.includes('loot') || slug.includes('scav')) {
    slugHints.push({
      id: 'blog-slug-esp',
      topic: 'esp',
      icon: 'faqBlogSlugEsp',
      q: 'Which product covers ESP from this article?',
      a: `${elite()} includes Survivor ESP, Killer ESP, objects ESP, escape door / hatch markers, and radar.`,
    });
  }
  if (slug.includes('aim') || slug.includes('soft-aim') || slug.includes('bone')) {
    slugHints.push({
      id: 'blog-slug-scripts',
      topic: 'scripts',
      icon: 'faqBlogSlugScripts',
      q: 'Which product includes the aimbot in this article?',
      a: `${elite()} ships Aimbot options with FOV, smoothness and bone selection.`,
    });
  }
  if (slug.includes('hwid') || slug.includes('ban') || slug.includes('anticheat') || slug.includes('accounts')) {
    slugHints.push({
      id: 'blog-slug-hwid',
      topic: 'products',
      icon: 'faqBlogSlugHwid',
      q: 'Does this article replace product support?',
      a: `Recovery guides complement Discord support after you buy ${elite()}, ${hwid()} or ${accounts()}—read the product page for scope and realistic outcomes.`,
    });
  }
  if (slug.includes('skin') || slug.includes('cosmetic')) {
    slugHints.push({
      id: 'blog-slug-skin',
      topic: 'products',
      icon: 'faqProductsPage',
      q: 'Where do I buy Skin Changer?',
      a: `${skins()} is listed in the store with preview, apply and loadout tools.`,
    });
  }

  return [...slugHints, ...topicFaqs, ...defaultBlogFaqs].slice(0, 8);
}

export const compareRows = [
  { feature: 'Aimbot options', icon: 'compareSmoothAim' as const, lite: true, pro: true, elite: true },
  { feature: 'Bone selection & visible check', icon: 'compareTargetSelector' as const, lite: true, pro: true, elite: true },
  { feature: 'Player ESP (box, skeleton, health)', icon: 'comparePlayerEsp' as const, lite: true, pro: true, elite: true },
  { feature: 'Loot & container ESP', icon: 'compareWardLocator' as const, lite: true, pro: true, elite: true },
  { feature: 'Escape door / hatch markers', icon: 'compareRuneTimer' as const, lite: true, pro: true, elite: true },
  { feature: 'Camp / stranger / loot markers', icon: 'compareZoomHack' as const, lite: true, pro: true, elite: true },
  { feature: '2D Radar', icon: 'compareRadarHack' as const, lite: true, pro: true, elite: true },
  { feature: 'Stream-proof overlay', icon: 'compareStreamproof' as const, lite: true, pro: true, elite: true },
  { feature: 'Combat Mode (hide world ESP)', icon: 'compareSmokeAlert' as const, lite: true, pro: true, elite: true },
  { feature: 'Custom menu / panic keys', icon: 'compareAutoCombo' as const, lite: true, pro: true, elite: true },
  { feature: 'Config save / load', icon: 'compareCloudBackup' as const, lite: true, pro: true, elite: true },
  { feature: '24/7 Discord support', icon: 'compareDevSupport' as const, lite: true, pro: true, elite: true },
  { feature: 'Survivor / Killer presets', icon: 'comparePriorityPatch' as const, lite: true, pro: true, elite: true },
];
