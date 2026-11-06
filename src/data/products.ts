import { t } from '../i18n';
import { checkoutForSlug, checkoutPath } from '../config/checkout';
import type { IconName } from '../components/icons/types';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
}

/** Guides paired with each product detail page */
export const productRelatedBlogSlugs: Record<string, string[]> = {
  elite: [
    'dbd-cheats-explained',
    'best-dbd-cheat-features',
    'dbd-esp-explained',
    'dbd-aimbot-options-guide',
    'dbd-cheat-setup-guide',
    'dbd-cheats-for-pc',
    'dbd-cheats-faq',
  ],
  lite: ['dbd-survivor-esp-guide', 'dbd-cheats-explained', 'dbd-out-of-screen-arrows-guide'],
  pro: ['best-dbd-cheat-features', 'dbd-aimbot-options-guide', 'dbd-cheat-feature-comparison'],
  'hwid-spoofer': [
    'dbd-hwid-spoofer-guide',
    'dbd-fix-eac-hardware-bans',
    'dbd-anticheat-bypass-explained',
    'dbd-cheat-troubleshooting-guide',
  ],
  ugc: ['dbd-game-accounts-recovery', 'dbd-fix-eac-hardware-bans', 'dbd-cheats-faq'],
  'skin-changer': [
    'dbd-skin-changer-cosmetics-guide',
    'dbd-safe-config-preset-sharing',
    'dbd-cheats-for-pc',
  ],
  'unlock-all': ['best-dbd-cheat-features', 'dbd-cheat-feature-comparison', 'dbd-stream-proof-overlay'],
};

const productBase = '/products/dbd-cheats/';

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Review current status',
    desc: 'Check the live banner on buydbdcheats.com and Discord #status before purchase—especially after a Dead by Daylight or Behaviour Interactive update.',
  },
  {
    num: '02',
    title: 'Choose monthly or lifetime',
    desc: 'Select Monthly ($35) or Lifetime ($150) access. Review the feature list, then continue via our secure checkout.',
  },
  {
    num: '03',
    title: 'Contact the team',
    desc: 'Open Discord and confirm availability, Steam or Epic launcher platform, and payment details with your order email ready.',
  },
  {
    num: '04',
    title: 'Follow guided setup',
    desc: 'Use only the operator portal, patch loader, and setup guide. Test in a private or low-pressure trial, load a Survivor or Killer preset, then join a match.',
  },
];

function acquisitionFor(productName: string): ProductAcquisition {
  return {
    title: `How to get ${productName}`,
    steps: defaultAcquisitionSteps,
  };
}

const sharedGoodToKnow =
  'Dead by Daylight receives frequent updates from Behaviour Interactive, and Easy Anti-Cheat (EAC) changes can affect loader compatibility. Confirm module availability on the live status panel at buydbdcheats.com before you purchase or queue a trial. Reload portal presets after every game patch—stale configs often look like broken ESP when the build is simply outdated.';

const sharedLimitations =
  'Third-party software in Dead by Daylight can violate Behaviour Interactive Terms of Service and trigger Easy Anti-Cheat enforcement or account action. You use this software at your own risk. Compatibility and availability can change after game, EAC, or Windows updates without notice.';

const dbdSystemRequirements: SystemRequirement[] = [
  { icon: 'reqShieldGuide', text: 'HVCI ON, Core Isolation ON, TPM ON, Secure Boot ON.' },
  {
    icon: 'reqWindows',
    text: 'Windows 10 (21H2, 22H2) or Windows 11 (21H2, 22H2, 23H2, 24H2, 25H2) 64-bit.',
  },
  { icon: 'reqCpu', text: 'Intel or AMD CPU; Nvidia or AMD GPU.' },
  { icon: 'reqSteam', text: 'Current Dead by Daylight client via Steam or Epic with latest patches applied.' },
  { icon: 'reqSettings', text: '8 GB RAM minimum (16 GB recommended); ~500 MB free storage for loader and configs.' },
  { icon: 'reqWifi', text: 'Stable internet connection for portal access and patch delivery.' },
];

type GalleryKey = keyof typeof galleryRaw;

const gameplay = '/images/gameplay';

const galleryRaw = {
  generators: {
    src: `${gameplay}/dbd-trial-generators.png`,
    alt: 'DBD cheats generator and objects ESP during a Dead by Daylight trial',
    caption: 'Generator trial',
    captionDesc: 'Generator repair state, distance, and trial objective awareness.',
  },
  chase: {
    src: `${gameplay}/dbd-trial-chase.png`,
    alt: 'DBD cheats Survivor chase with aimbot and ESP on Windows PC',
    caption: 'Chase trial',
    captionDesc: 'Killer pressure reads with Survivor ESP and out-of-screen arrows.',
  },
  hook: {
    src: `${gameplay}/dbd-trial-hook.png`,
    alt: 'DBD cheats hook and meat hook ESP on Dead by Daylight PC',
    caption: 'Hook trial',
    captionDesc: 'Meat hook state and rescue timing with objects ESP.',
  },
  pallet: {
    src: `${gameplay}/dbd-trial-pallet.png`,
    alt: 'DBD cheats pallet and window ESP in a Dead by Daylight trial',
    caption: 'Pallet trial',
    captionDesc: 'Pallet, window, and closet markers for loop planning.',
  },
  escape: {
    src: `${gameplay}/dbd-trial-escape.png`,
    alt: 'DBD cheats hatch and escape door ESP on Dead by Daylight PC',
    caption: 'Escape trial',
    captionDesc: 'Hatch, escape door, and endgame exit awareness.',
  },
};

function slide(...keys: GalleryKey[]): ProductSlide[] {
  return keys.map((k) => {
    const item = galleryRaw[k];
    return {
      src: item.src,
      alt: item.alt,
      caption: item.caption,
      captionDesc: item.captionDesc,
    };
  });
}

function slugFromHref(href: string): string {
  const segment = href.replace(productBase, '').replace(/^\//, '').replace(/\/$/, '');
  return segment || 'dbd-cheats';
}

const eliteFullFeatures = [
  'Aimbot: Aim Key, customizable aim smoothness, customizable FOV, Draw FOV',
  'Survivor ESP: Bounding Box (Box/Corner), Skeleton (Thickness), Health State, Prestige Level, Distance, Line to Enemy, Fill Box (Static/Gradient), Nickname, Character Level, Character Name, View Line',
  'Killer ESP: included — detailed per-option toggles are not listed in the current module sheet; expect a slimmer Killer ESP panel than Survivor ESP',
  'Objects ESP: Show State, Generators, Pallet, Closet, Totem, Hatch, Show Distance, Meat Hook, Window, Chest, Trap, Escape Door',
  'Skill Check Helper: Enable, Good Chance, Perfect Chance, Auto Wiggle',
  'Misc: Battle Mode, Out of Screen Arrows, Crosshair, FOV Changer',
  'Menu: Customizable Menu Key, Language (EN/RU/CH), DPI Scale, Toggle Watermark, Customizable Menu Theme, Unload Key, VSync',
  'Config: Create, Load, Share, and Save Config',
  '24/7 Discord support',
];

const eliteAbout: ProductPage['about'] = [
  {
    type: 'p',
    text: 'DBD Private Cheats is the main PC suite for Dead by Daylight—aimbot, Survivor ESP, objects ESP (generators, pallets, hooks, hatch), skill check helper, battle mode, menu theming, and shared configs with Discord support.',
  },
  { type: 'h2', text: 'Survivor and Killer trials' },
  {
    type: 'p',
    text: 'Portal presets cover Survivor and Killer profiles. Start conservative after any Behaviour Interactive or Easy Anti-Cheat patch, test in a low-pressure trial, then scale FOV and ESP distance. Staff help tune before your first serious match.',
  },
];

const eliteBody: ProductPage['body'] = [
  { type: 'h2', text: 'Included modules' },
  {
    type: 'p',
    text: 'Aimbot with aim key, smoothness, and draw FOV; full Survivor ESP with health, prestige, and view lines; Killer ESP with limited listed options; objects ESP for generators, pallets, totems, hatch, and escape door; skill check helper with auto wiggle; battle mode, arrows, crosshair, and FOV changer; menu language and theme controls; create/load/share configs.',
  },
  { type: 'h2', text: 'Plans' },
  {
    type: 'p',
    text: 'Access is Monthly at $35 or Lifetime at $150—same feature set either way. Check the status banner on buydbdcheats.com before checkout via our secure partner.',
  },
];

const eliteContent: Pick<
  ProductPage,
  'overview' | 'images' | 'fullFeatures' | 'goodToKnow' | 'limitations' | 'systemRequirements'
> = {
  images: slide('generators', 'chase', 'hook', 'pallet', 'escape'),
  goodToKnow: sharedGoodToKnow,
  limitations: sharedLimitations,
  systemRequirements: dbdSystemRequirements,
  fullFeatures: eliteFullFeatures,
  overview: {
    title: 'DBD Cheats: aimbot, Survivor ESP and objects ESP',
    paragraphs: [
      'One private suite for Dead by Daylight on Windows PC: aimbot, Survivor ESP, objects ESP (generators, pallets, hooks, hatch), skill check helper, battle mode, and config share/load.',
      'Plans are Monthly ($35) or Lifetime ($150). Confirm status on buydbdcheats.com, then checkout and follow the portal setup guide.',
    ],
  },
};

function aliasToElite(
  slug: string,
  overrides: Partial<Pick<ProductPage, 'kind' | 'badge' | 'category' | 'tier' | 'name' | 'title' | 'subtitle' | 'desc' | 'features' | 'more' | 'variant'>>,
): ProductPage {
  return {
    slug,
    kind: overrides.kind ?? 'tier',
    badge: overrides.badge ?? 'See DBD Cheats',
    category: overrides.category,
    tier: overrides.tier,
    name: overrides.name ?? 'DBD',
    title: overrides.title ?? 'DBD Cheats',
    subtitle: overrides.subtitle ?? eliteContent.overview.paragraphs[0],
    desc: overrides.desc ?? 'Same DBD Private Cheats product — monthly $35 or lifetime $150. This page aliases the main Elite listing.',
    features: overrides.features ?? ['Aimbot', 'Survivor ESP', 'Objects ESP', 'Skill Check', 'Battle Mode'],
    more: overrides.more ?? 14,
    variant: overrides.variant,
    buyUrl: checkoutPath('dbd'),
    images: eliteContent.images,
    overview: {
      title: overrides.title ?? 'DBD Cheats',
      paragraphs: [
        'This listing points to the same DBD Private Cheats product used on the Elite page. Choose Monthly ($35) or Lifetime ($150) at checkout.',
        eliteContent.overview.paragraphs[0],
      ],
    },
    acquisition: acquisitionFor('DBD Private Cheats'),
    goodToKnow: eliteContent.goodToKnow,
    limitations: eliteContent.limitations,
    fullFeatures: eliteContent.fullFeatures,
    systemRequirements: eliteContent.systemRequirements,
    about: eliteAbout,
    body: [
      {
        type: 'p',
        text: 'Lite, Pro and unlock-all URLs redirect conceptually to the single DBD Private Cheats product. Use the Elite page or store hub for the canonical feature list and checkout.',
      },
      ...eliteBody,
    ],
    relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? productRelatedBlogSlugs.elite,
  };
}

function buildElitePage(): ProductPage {
  const cheat = t.cheats.items[0];
  const slug = cheat ? slugFromHref(cheat.href) : 'elite';
  return {
    slug: slug === 'elite' || !slug ? 'elite' : slug,
    kind: 'tier',
    badge: cheat?.badge ?? 'Available',
    tier: cheat?.tier ?? 'Private',
    name: cheat?.name ?? 'DBD',
    title: cheat?.title ?? 'DBD Cheats',
    subtitle: cheat?.desc ?? eliteContent.overview.paragraphs[0],
    desc:
      cheat?.desc ??
      'Buy DBD Cheats with aimbot, Survivor ESP, objects ESP, skill check helper, battle mode, and 24/7 Discord support.',
    features: cheat?.features ?? ['Aimbot', 'Survivor ESP', 'Objects ESP', 'Skill Check', 'Battle Mode', 'Config share'],
    more: cheat?.more ?? 14,
    variant: cheat?.variant ?? 'limited',
    buyUrl: checkoutForSlug('elite'),
    images: eliteContent.images,
    overview: eliteContent.overview,
    acquisition: acquisitionFor('DBD Cheats'),
    goodToKnow: eliteContent.goodToKnow,
    limitations: eliteContent.limitations,
    fullFeatures: eliteContent.fullFeatures,
    systemRequirements: eliteContent.systemRequirements,
    about: eliteAbout,
    body: eliteBody,
    relatedBlogSlugs: productRelatedBlogSlugs.elite,
  };
}

const hwidContent: Pick<
  ProductPage,
  'overview' | 'images' | 'fullFeatures' | 'goodToKnow' | 'limitations' | 'systemRequirements'
> = {
  images: slide('hook', 'generators', 'pallet'),
  goodToKnow:
    'Run the portal compatibility scan before spoofing. Create a Windows restore point first. Verify identifiers changed after a cold reboot before launching Dead by Daylight.',
  limitations:
    'Spoofing does not help account-only bans. Never stack two spoof tools. Shared or work PCs may not be suitable. You accept all risk from driver-level changes.',
  systemRequirements: [
    { icon: 'reqWindows', text: 'Windows 10 or 11 64-bit with administrator access.' },
    { icon: 'reqRestorePoint', text: 'Ability to create a system restore point before running.' },
    { icon: 'reqShieldGuide', text: 'Follow the portal setup guide before launching DBD after spoofing.' },
    { icon: 'reqWifi', text: 'Stable connection for portal verification tools.' },
  ],
  fullFeatures: [
    'Disk serial profile tools',
    'MAC address rotation',
    'Restore point checklist',
    'Compatibility scan',
    'Driver conflict detection',
    'Post-spoof verification',
    'Identifier diff report',
    'Cold reboot guide',
    'Portal step-by-step workflow',
    'Discord recovery support',
  ],
  overview: {
    title: 'HWID Spoofer for DBD PC bans',
    paragraphs: [
      'Use the HWID Spoofer when Easy Anti-Cheat or hardware checks flag your PC but the game account is still fine. Includes disk and MAC tools, a restore-point checklist, a compatibility scan and post-spoof checks.',
      'Use it when new accounts die on one PC but work on another. It does not fix account-only bans. After spoofing, load a safer DBD cheat profile before Online.',
    ],
  },
};

const ugcContent: Pick<
  ProductPage,
  'overview' | 'images' | 'fullFeatures' | 'goodToKnow' | 'limitations' | 'systemRequirements'
> = {
  images: slide('escape', 'chase', 'hook'),
  goodToKnow:
    'Gather order email, account details and restriction screenshots before opening a ticket. Game Accounts tools structure remediation—they do not bypass Behaviour Interactive review where unauthorized.',
  limitations:
    'Results vary by restriction type. Permanent bans may require a new account path instead of recovery. You must have authorized access to any account you work on.',
  systemRequirements: [
    { icon: 'reqMailOrder', text: 'Order email used at checkout on buydbdcheats.com.' },
    { icon: 'reqShieldAccount', text: 'Account details and ban or restriction notification if available.' },
    { icon: 'reqWifiPortal', text: 'Internet access for Discord support and case dashboard.' },
  ],
  fullFeatures: [
    'Multi-Game Support',
    'Automatic Ban Detection',
    'Account Ban Removal (where authorized)',
    'Permanent Ban Support indicators',
    'Temporary Ban Handling',
    'One-Click Operation',
    'Live Status Verification',
    'Detailed Error Reporting',
    'Automatic Game Detection',
    'Secure Operation (no unnecessary password collection)',
  ],
  overview: {
    title: 'Game Accounts tools for DBD',
    paragraphs: [
      'Game Accounts helps detect restriction types, organize remediation for supported cases, and verify live status. It does not guarantee every ban can be lifted.',
      'Use automatic detection, detailed error reporting and Discord support when authorized recovery is available.',
    ],
  },
};

const skinContent: Pick<
  ProductPage,
  'overview' | 'images' | 'fullFeatures' | 'goodToKnow' | 'limitations' | 'systemRequirements'
> = {
  images: slide('chase', 'pallet', 'escape'),
  goodToKnow:
    'Confirm skin profiles after every Dead by Daylight update. Keep a restore/reset preset so you can return to default cosmetics quickly.',
  limitations:
    'Cosmetic tools can still conflict with game updates. Custom imports must be compatible assets. You accept all risk from third-party cosmetic changes.',
  systemRequirements: dbdSystemRequirements,
  fullFeatures: [
    'Multi-Game Support with compatibility profiles',
    'Skin Library (characters, weapons, outfits, cosmetics)',
    'Live Skin Preview',
    'One-Click Skin Apply',
    'Custom Skin Import',
    'Loadout Manager',
    'Skin Restore & Reset',
    'Automatic Game Detection',
    'Game Update Compatibility checks',
    'Profile & Preset Sharing',
  ],
  overview: {
    title: 'Skin Changer & Cosmetics for DBD',
    paragraphs: [
      'Skin Changer centralizes outfits, weapon skins and cosmetic presets for Dead by Daylight with live preview, one-click apply and restore/reset.',
      'Import compatible custom assets, save loadouts per session style, and share presets when you want a consistent look across PCs.',
    ],
  },
};

function buildHwidPage(): ProductPage {
  const item = t.products.items.find((p) => p.href.includes('hwid-spoofer'));
  return {
    slug: 'hwid-spoofer',
    kind: 'utility',
    badge: item?.badge ?? 'Available',
    category: item?.category ?? 'System utility',
    name: item?.title ?? 'DBD HWID Spoofer',
    title: item?.title ?? 'DBD HWID Spoofer',
    subtitle: item?.subtitle ?? 'Clean slate for your PC',
    desc:
      item?.desc ??
      'Buy an DBD HWID spoofer for disk serials, MAC addresses and related IDs—run the portal guide before launching cheats again.',
    features: item?.features ?? ['Spoofer & cleanup tools', 'Serial profile rotation', 'Compatibility scan', 'Post-spoof verification'],
    more: item?.more ?? 9,
    buyUrl: checkoutForSlug('hwid-spoofer'),
    images: hwidContent.images,
    overview: hwidContent.overview,
    acquisition: acquisitionFor('DBD HWID Spoofer'),
    goodToKnow: hwidContent.goodToKnow,
    limitations: hwidContent.limitations,
    fullFeatures: hwidContent.fullFeatures,
    systemRequirements: hwidContent.systemRequirements,
    body: [
      { type: 'h2', text: 'When you need it' },
      {
        type: 'p',
        text: 'Use when fresh accounts fail instantly on one PC but work elsewhere—classic HWID enforcement after a hardware flag. Do not use for account-only cases; see [Game Accounts](/products/dbd-cheats/ugc/) instead.',
      },
      { type: 'h2', text: 'Full workflow' },
      {
        type: 'p',
        text: 'Restore point, driver cleanup, spoof application, cold reboot, identifier verification, then a conservative DBD cheat profile before Online. Full checklist ships in the portal.',
      },
    ],
    relatedBlogSlugs: productRelatedBlogSlugs['hwid-spoofer'],
  };
}

function buildUgcPage(): ProductPage {
  const item = t.products.items.find((p) => p.href.includes('/ugc/'));
  return {
    slug: 'ugc',
    kind: 'utility',
    badge: item?.badge ?? 'Available',
    category: item?.category ?? 'Account recovery',
    name: item?.title ?? 'DBD Game Accounts',
    title: item?.title ?? 'DBD Game Accounts',
    subtitle: item?.subtitle ?? 'Restriction detection & recovery tools',
    desc:
      item?.desc ??
      'Buy DBD Game Accounts tools for ban detection, temporary and permanent restriction handling, and live status verification.',
    features: item?.features ?? ['Ban detection', 'One-click operation', 'Live verification', 'Secure operation'],
    more: item?.more ?? 6,
    buyUrl: checkoutForSlug('ugc'),
    images: ugcContent.images,
    overview: ugcContent.overview,
    acquisition: {
      title: 'How to get DBD Game Accounts',
      steps: [
        {
          num: '01',
          title: 'Review current status',
          desc: 'Confirm the product is listed as available on buydbdcheats.com before checkout.',
        },
        {
          num: '02',
          title: 'Purchase one-time access',
          desc: 'Game Accounts is $50 one-time. Continue via secure checkout with your order email ready.',
        },
        {
          num: '03',
          title: 'Open a support ticket',
          desc: 'Share restriction screenshots and authorized account details with Discord support.',
        },
        {
          num: '04',
          title: 'Run detection and verify',
          desc: 'Follow the portal workflow, then use live status verification before you return to DBD.',
        },
      ],
    },
    goodToKnow: ugcContent.goodToKnow,
    limitations: ugcContent.limitations,
    fullFeatures: ugcContent.fullFeatures,
    systemRequirements: ugcContent.systemRequirements,
    body: [
      { type: 'h2', text: 'What Game Accounts covers' },
      {
        type: 'p',
        text: 'Automatic ban detection, temporary vs permanent indicators, one-click remediation where authorized, and live verification—not a guaranteed unban for every Behaviour Interactive case.',
      },
      { type: 'h2', text: 'Realistic expectations' },
      {
        type: 'p',
        text: 'Some permanent bans cannot be reversed. Pair with [HWID Spoofer](/products/dbd-cheats/hwid-spoofer/) when hardware is flagged, or a new account when reputation is burned.',
      },
    ],
    relatedBlogSlugs: productRelatedBlogSlugs.ugc,
  };
}

function buildSkinPage(): ProductPage {
  const item = t.products.items.find((p) => p.href.includes('skin-changer'));
  return {
    slug: 'skin-changer',
    kind: 'utility',
    badge: item?.badge ?? 'Available',
    category: item?.category ?? 'Cosmetic',
    name: item?.title ?? 'DBD Skin Changer',
    title: item?.title ?? 'DBD Skin Changer & Cosmetics',
    subtitle: item?.subtitle ?? 'Outfits, weapons and cosmetic presets',
    desc:
      item?.desc ??
      'Buy the DBD Skin Changer for outfit libraries, live preview, one-click apply, custom imports and loadout sharing.',
    features: item?.features ?? ['Skin library', 'Live preview', 'One-click apply', 'Loadout manager'],
    more: item?.more ?? 6,
    variant: 'popular',
    buyUrl: checkoutForSlug('skin-changer'),
    images: skinContent.images,
    overview: skinContent.overview,
    acquisition: acquisitionFor('DBD Skin Changer'),
    goodToKnow: skinContent.goodToKnow,
    limitations: skinContent.limitations,
    fullFeatures: skinContent.fullFeatures,
    systemRequirements: skinContent.systemRequirements,
    body: [
      { type: 'h2', text: 'Cosmetic workflow' },
      {
        type: 'p',
        text: 'Browse the skin library, preview combinations, apply with one click, and save loadouts. Use restore & reset when you need the default look back.',
      },
      { type: 'h2', text: 'Updates and sharing' },
      {
        type: 'p',
        text: 'Compatibility checks flag outdated configs after patches. Export and share presets when you want the same cosmetics on another PC—see the [skin changer guide](/blog/dbd-skin-changer-cosmetics-guide/).',
      },
    ],
    relatedBlogSlugs: productRelatedBlogSlugs['skin-changer'],
  };
}

const elitePage = buildElitePage();
const hwidPage = buildHwidPage();
const ugcPage = buildUgcPage();
const skinPage = buildSkinPage();

const legacyAliasPages: ProductPage[] = [
  aliasToElite('lite', {
    kind: 'tier',
    badge: 'Alias',
    tier: 'Alias',
    name: 'Lite',
    title: 'DBD Cheats (Lite alias)',
    desc: 'Former Lite tier — use DBD Private Cheats (monthly $35 / lifetime $150) for full aimbot and ESP.',
    features: ['Aimbot', 'Survivor ESP', 'See Elite for full suite'],
    more: 10,
    variant: 'essential',
  }),
  aliasToElite('pro', {
    kind: 'tier',
    badge: 'Alias',
    tier: 'Alias',
    name: 'Pro',
    title: 'DBD Cheats (Pro alias)',
    desc: 'Former Pro tier — aimbot and ESP ship in the single DBD Private Cheats product.',
    features: ['Aimbot', 'Survivor ESP', 'See Elite for full suite'],
    more: 12,
    variant: 'popular',
  }),
  aliasToElite('unlock-all', {
    kind: 'utility',
    badge: 'See main product',
    category: 'Core product',
    name: 'Full DBD suite',
    title: 'DBD Cheats — full private suite',
    desc: 'Buy DBD Cheats for aimbot, Survivor ESP, objects ESP, skill check helper, battle mode, and config share.',
    features: ['Full private suite', 'Monthly $35 or lifetime $150', 'Main product checkout'],
    more: 2,
  }),
];

/** Featured catalog for homepage / store UI — Private Cheats, HWID, Accounts, Skin Changer. */
export const productPages: ProductPage[] = [elitePage, hwidPage, ugcPage, skinPage];

/** All pages including legacy aliases for getStaticPaths / getProductPage. */
export const allProductPages: ProductPage[] = [...productPages, ...legacyAliasPages];

export const cheatPages = productPages.filter((p) => p.kind === 'tier');

export function getProductPage(slug: string) {
  return allProductPages.find((p) => p.slug === slug);
}

export function getCheatPage(slug: string) {
  return cheatPages.find((p) => p.slug === slug) ?? (slug === 'elite' ? elitePage : undefined);
}

export function getAllProductSlugs() {
  return allProductPages.map((p) => p.slug);
}

export function getAllCheatSlugs() {
  return cheatPages.map((p) => p.slug);
}

export const heroSlides = slide('generators', 'chase', 'hook', 'pallet', 'escape');

export const productHub = {
  path: productBase,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description:
    'DBD Cheats, HWID spoofer, game accounts and skin changer for Windows PC — aimbot, Survivor ESP, objects ESP, and cosmetics. Monthly $35 or lifetime $150 for the main cheat.',
  buyUrl: checkoutPath('dbd'),
};
