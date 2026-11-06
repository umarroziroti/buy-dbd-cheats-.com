/**
 * Generates src/data/blog/posts.ts for buy-eft-cheats.net
 */
import fs from 'node:fs';
import path from 'node:path';

const DOMAIN = 'buy-eft-cheats.net';
const PRODUCT = '/products/eft-cheats/';
const CHECKOUT = '/go/eft/';

const FOOTER = [
  {
    type: 'p',
    text: `EFT Cheats at ${DOMAIN} sells Escape from Tarkov cheat tools for Windows PC — PMC ESP, Scav filters, loot ESP, soft aim, radar, and raid-aware overlays. Check the live status banner before you queue a raid after a Battlestate or BattlEye update.`,
  },
  {
    type: 'p',
    text: 'Ban risk is real in Tarkov: read status, reload the loader after patches, and use conservative presets. Humanized soft-aim smoothness and limited ESP range reduce report volume compared to max automation on day one.',
  },
];

const IMAGES = {
  customs: '/images/gameplay/eft-customs.png',
  raid: '/images/gameplay/eft-raid.png',
  labs: '/images/gameplay/eft-labs.png',
  factory: '/images/gameplay/eft-factory.png',
  woods: '/images/gameplay/eft-woods.png',
  interchange: '/images/gameplay/eft-interchange.png',
  streets: '/images/gameplay/eft-streets.png',
};

const DATES = [
  'Oct 29, 2025',
  'Oct 22, 2025',
  'Oct 15, 2025',
  'Oct 8, 2025',
  'Oct 1, 2025',
  'Sep 24, 2025',
  'Sep 17, 2025',
  'Sep 10, 2025',
  'Sep 3, 2025',
  'Aug 27, 2025',
  'Aug 20, 2025',
  'Aug 13, 2025',
  'Aug 6, 2025',
  'Jul 30, 2025',
  'Jul 23, 2025',
  'Jul 16, 2025',
  'Jul 9, 2025',
  'Jul 2, 2025',
  'Jun 25, 2025',
  'Jun 18, 2025',
  'Jun 11, 2025',
  'Jun 4, 2025',
  'May 28, 2025',
  'May 21, 2025',
  'May 14, 2025',
  'May 7, 2025',
  'Apr 30, 2025',
  'Apr 23, 2025',
  'Nov 2, 2026',
  'Nov 3, 2026',
];

function productsBlock() {
  return [
    { type: 'h3', text: 'Products and checkout paths' },
    {
      type: 'p',
      text: `The main [EFT Cheats](${PRODUCT}) suite — Monthly $35 or Lifetime $150 — covers PMC ESP, Scav ESP, loot ESP, radar, soft aim, recoil helpers, thermal filters, and stream-proof tooling via ${CHECKOUT} [Elite](${PRODUCT}elite/) lists the same modules with priority support notes. Hardware recovery uses [HWID Spoofer](${PRODUCT}hwid-spoofer/) at the same monthly or lifetime pricing through /go/hwid-spoofer/. [Game Accounts](${PRODUCT}ugc/) is a one-time $50 checkout at /go/ugc/, and [skin changer](${PRODUCT}skin-changer/) cosmetics run Monthly $35 or Lifetime $150 at /go/skin-changer/.`,
    },
  ];
}

function sessionBlock(mapName = 'Customs') {
  return [
    { type: 'h2', text: `Session checklist on ${DOMAIN}` },
    {
      type: 'p',
      text: `Before every raid on ${mapName}, confirm the status banner on ${DOMAIN}, reload the operator portal build after Tarkov patches, and keep a conservative preset for the first ten minutes. Player reports and BattlEye enforcement can still hit accounts using ESP or soft aim — treat every module as optional, tunable, and revocable mid-raid.`,
    },
    ...productsBlock(),
    { type: 'h3', text: 'Patch-day discipline' },
    {
      type: 'p',
      text: 'When Battlestate ships a build update, pause aggressive presets even if the launcher still opens. Re-import portal configs instead of sharing old Discord sliders, and walk through [setup](/blog/eft-cheat-setup-guide/) plus [troubleshooting](/blog/eft-cheat-troubleshooting-guide/) before you re-enable loot ESP, thermal filters, or soft aim on Interchange. No vendor can promise undetected play or perfect safety — honest ban risk is part of PC Escape from Tarkov.',
    },
  ];
}

function cta(title = 'Get EFT Cheats') {
  return {
    type: 'cta',
    title,
    text: `ESP, soft aim, radar, and more — Monthly $35 or Lifetime $150 at ${DOMAIN}.`,
    href: CHECKOUT,
  };
}

function faqSection(items) {
  const blocks = [{ type: 'h2', text: 'FAQ' }];
  for (const { q, a } of items) {
    blocks.push({ type: 'h3', text: q }, { type: 'p', text: a });
  }
  return blocks;
}

const POSTS = [
  {
    slug: 'eft-cheats-explained',
    tag: 'Guides',
    title: 'EFT cheats explained: external tools vs offline mods',
    desc: `What Escape from Tarkov cheats mean on PC — raid risk, BattlEye, and the external suite sold at ${DOMAIN}.`,
    image: IMAGES.customs,
    featured: true,
    readTime: '14 min read',
    intro: [
      'Search results mix offline trainers, radar apps, and third-party EFT cheats. On Windows PC, live raids share servers with other PMCs and Scavs, so wallhack-style ESP and aim assistance create both technical and social risk. This article explains what buy-eft-cheats.net sells and how it differs from single-player tweaks.',
      'Escape from Tarkov runs BattlEye with Battlestate-side checks. External tools must stay updated after every wipe-adjacent patch. Private EFT cheats run through an external loader with overlay modules — not in-game script hooks that break every hotfix.',
    ],
    sections: [
      { h2: 'What the main product includes', p: `One [EFT Cheats](${PRODUCT}) license — Monthly $35 or Lifetime $150 — covers ESP for PMCs (USEC/BEAR), Scavs, loot containers, quest items, extracts, plus radar, map awareness, soft aim with visible checks, recoil control, thermal visual filters, and stream-proof options.` },
      { h2: 'Companion utilities', ul: [`[HWID Spoofer](${PRODUCT}hwid-spoofer/) — Monthly $35 or Lifetime $150 for hardware-ID rotation after enforcement (not a magic unban).`, `[Game Accounts](${PRODUCT}ugc/) — one-time $50 for account restriction workflows.`, `[Skin changer](${PRODUCT}skin-changer/) — Monthly $35 or Lifetime $150 for cosmetic previews client-side.`] },
      { h2: 'Risk and status workflow', p: 'Read the homepage status banner before every session. After Tarkov patches, wait for an updated build rather than forcing old configs. Pair this overview with [best EFT cheat features](/blog/best-eft-cheat-features/) and the [FAQ article](/blog/eft-cheats-faq/).' },
    ],
    related: ['eft-cheats-explained', 'best-eft-cheat-features', 'eft-esp-explained', 'eft-cheats-faq'],
    faq: [
      { q: 'Are EFT cheats the same as offline trainers?', a: 'Offline tweaks do not touch live raid servers. Online play on PC needs external overlays with live updates — that is what EFT Cheats provides.' },
      { q: 'Does one purchase cover ESP and soft aim?', a: 'Yes. Monthly $35 or Lifetime $150 on the main product includes player ESP, Scav ESP, loot ESP, radar, soft aim, and related modules. Utilities are separate SKUs.' },
      { q: 'Can I use cheats in Tarkov safely?', a: 'No honest vendor promises zero risk. BattlEye and player reports exist. Use conservative settings, check status, and accept that bans can happen.' },
      { q: 'Where do I start after checkout?', a: `Secure checkout at ${CHECKOUT} unlocks the operator portal. Follow the [setup guide](/blog/eft-cheat-setup-guide/) before your first raid.` },
    ],
    map: 'Customs',
  },
  {
    slug: 'best-eft-cheat-features',
    tag: 'Features',
    title: 'Best EFT cheat features for raids and loot runs',
    desc: 'Ranked modules — PMC ESP, loot ESP, soft aim, radar, thermal filters, and stream-proof overlays for Escape from Tarkov on PC.',
    image: IMAGES.raid,
    readTime: '12 min read',
    intro: [
      'Not every slider in the EFT cheat menu deserves to be maxed on day one. The best features depend on whether you rat on Labs, fight on Streets, or quest on Customs. buy-eft-cheats.net ships one main product with grouped modules; this guide prioritizes them for readable overlays and lower report noise.',
    ],
    sections: [
      { h2: 'Awareness stack', p: 'Start with [EFT ESP explained](/blog/eft-esp-explained/) basics, then enable PMC ESP, Scav tags, and a 120–180m distance cap. Add [radar](/blog/eft-radar-system-guide/) for minimap-style dots when Factory fights get chaotic.' },
      { h2: 'Combat stack', p: 'Soft aim with bone selection and visible-only checks pairs with [combat mode hide](/blog/eft-combat-mode-hide-world-esp/) so loot ESP drops during CQB. Interchange mall fights benefit from moderate FOV and chest-first bones — head snaps stand out in kill replays.' },
      { h2: 'Economy stack', p: 'Loot container ESP and [quest objective ESP](/blog/eft-quest-objective-esp/) shorten progression loops. [Extract markers](/blog/eft-extract-markers-explained/) prevent late-raid timer deaths on Woods.' },
      {
        h2: 'Feature priority table',
        table: {
          headers: ['Module', 'Best for', 'Conservative tip'],
          rows: [
            ['PMC ESP', 'Online raids', 'Cap distance; mute distant dots'],
            ['Scav ESP', 'Mixed raids', 'Color-code AI vs player Scavs'],
            ['Soft aim', 'CQB', 'High smoothness, visible check on'],
            ['Radar overlay', 'Rotations', 'Small radius, no loot clutter'],
            ['Stream-proof', 'Creators', 'Test OBS before going live'],
          ],
        },
      },
    ],
    related: ['best-eft-cheat-features', 'eft-cheat-feature-comparison', 'eft-esp-explained', 'eft-cheats-faq'],
    faq: [
      { q: 'Which feature helps new PMCs most?', a: 'PMC and Scav ESP with distance caps gives situational awareness without staring at walls. Add radar second once box colors feel natural.' },
      { q: 'Is soft aim better than full lock?', a: 'Soft aim with high smoothness and visible checks looks closer to manual aim. See [soft aim guide](/blog/eft-soft-aim-aim-assist-guide/).' },
      { q: 'Do I need every ESP category enabled?', a: 'No. Loot rats enable container ESP; PvP-focused players trim to PMC, Scav, and extract filters.' },
      { q: 'Where is the full module list?', a: 'The [feature comparison](/blog/eft-cheat-feature-comparison/) table matches portal toggles to use cases.' },
    ],
    map: 'Interchange',
  },
];

// Generate remaining 28 posts from template metadata
const MORE = [
  ['eft-esp-explained', 'Guides', 'EFT ESP explained: boxes, bones, and filters', 'How Escape from Tarkov ESP overlays work on PC — entity types, distance tags, and filters in the loader.', IMAGES.factory, '11 min read', 'ESP draws PMCs, Scavs, loot, and extracts as labeled overlays your monitor shows — other players do not see your wallhack unless you stream carelessly. Entity categories prevent rainbow clutter in Labs or Streets.', 'Enable PMC boxes first, then Scav filters, then loot tiers. Pair with [player ESP guide](/blog/eft-player-esp-guide/) and [loot container ESP](/blog/eft-loot-container-esp/).'],
  ['eft-player-esp-guide', 'Setup', 'EFT player ESP setup for PMC raids', 'Configure PMC ESP — distance, boxes, USEC/BEAR colors, and combat toggles — for Escape from Tarkov on PC.', IMAGES.streets, '10 min read', 'PMC ESP is the backbone of raid awareness. Tune box style, skeleton, health, nameplate, and distance before you enable loot clutter.', 'Ignore teammates when duos share a preset. Use [PMC faction optimization](/blog/eft-pmc-faction-esp-optimization/) for USEC vs BEAR color rules.'],
  ['eft-enemy-esp-guide', 'Setup', 'EFT enemy ESP: hostile PMC filters and duel reads', 'Focus player ESP on hostile PMCs — colors, priority tags, and range caps for Tarkov PvP.', IMAGES.customs, '9 min read', 'Enemy ESP is player ESP with stricter filters: distance caps, visible-only tags, and priority bones during fights.', 'Combine with [visible check guide](/blog/eft-visible-check-bone-selection/) and [combat mode](/blog/eft-combat-mode-hide-world-esp/).'],
  ['eft-scav-esp-guide', 'Guides', 'EFT Scav ESP guide: AI vs player Scavs', 'Tell AI Scavs, player Scavs, and bosses apart with ESP color rules and distance tuning for Tarkov raids.', IMAGES.woods, '10 min read', 'Scav ESP prevents wasted ammo on AI while still flagging player Scavs rotating toward your extract.', 'On Factory, lower distance to reduce noise. Link [enemy ESP](/blog/eft-enemy-esp-guide/) for PMC-only presets.'],
  ['eft-loot-container-esp', 'Features', 'EFT loot and container ESP for rats and questers', 'Highlight weapons, meds, keys, and containers with ESP distance tuning for Tarkov loot loops.', IMAGES.interchange, '11 min read', 'Loot ESP is the highest clutter module. Filter by rarity, container type, and minimum value before enabling on Interchange.', 'Quest runners pair this with [quest objective ESP](/blog/eft-quest-objective-esp/).'],
  ['eft-extract-markers-explained', 'Guides', 'EFT extract markers explained for every map', 'Show PMC extracts, Scav extracts, and conditional exits with ESP markers on Customs, Woods, Labs, and more.', IMAGES.woods, '10 min read', 'Extract ESP saves kits when the raid timer turns red. Mark shared extracts differently from single-use gates.', 'Read [map awareness](/blog/eft-map-awareness-guide/) for rotation planning alongside extract dots.'],
  ['eft-thermal-visual-filters', 'Features', 'EFT thermal and visual filters in cheat overlays', 'Tune thermal-style highlights, night-vision helpers, and contrast filters without claiming impossible vision.', IMAGES.labs, '10 min read', 'Visual filters enhance readability — they do not replace legitimate optics. Use conservative presets on Labs night raids.', 'Test filters with [stream-proof overlay](/blog/eft-stream-proof-overlay/) before broadcasting.'],
  ['eft-radar-system-guide', 'Guides', 'EFT radar system guide: minimap dots and scale', 'Configure cheat radar size, opacity, and entity filters for Tarkov gunfights and loot routes.', IMAGES.factory, '10 min read', '2D radar complements ESP when corridors block line-of-sight on Factory and Labs.', 'Keep radar radius smaller than ESP max distance to avoid duplicate noise.'],
  ['eft-map-awareness-guide', 'Features', 'EFT map awareness for Customs, Interchange, and Labs', 'Use top-down map strips, zone markers, and extract timing alongside ESP for long rotations.', IMAGES.customs, '9 min read', 'Map awareness ties ESP dots to named zones — Dorms, Techlight, raider labs — so callouts match squad comms.', 'Bookmark [extract markers](/blog/eft-extract-markers-explained/) when learning new wipes.'],
  ['eft-soft-aim-aim-assist-guide', 'Setup', 'EFT soft aim and aim assist configuration', 'Tune soft aim FOV, smoothness, and target priority for CQB on Streets and Factory.', IMAGES.streets, '12 min read', 'Soft aim assists tracking while you still move crosshair — critical for full-auto recoil fights.', 'Pair with [recoil control guide](/blog/eft-recoil-control-guide/) and [visible check](/blog/eft-visible-check-bone-selection/).'],
  ['eft-visible-check-bone-selection', 'Setup', 'EFT visible check and bone selection for soft aim', 'Enable visible-only targeting and chest/head bone rules to reduce impossible shots in Tarkov PvP.', IMAGES.raid, '10 min read', 'Visible checks stop tracking through thick cover — a major report trigger when disabled.', 'Use chest-first bones in long-range Woods fights; head bones only in controlled CQB.'],
  ['eft-hwid-spoofer-guide', 'Security', 'EFT HWID spoofer guide for PC hardware bans', 'When to use the Tarkov HWID spoofer, what it changes, and honest limits after BattlEye enforcement.', IMAGES.labs, '13 min read', 'HWID spoofer targets machine flags when new accounts die on one PC but work on another. It does not fix account-only bans.', 'BattlEye is Tarkov primary anti-cheat; Easy Anti-Cheat may appear in generic HWID docs for the spoofer SKU only.'],
  ['eft-fix-anticheat-hardware-bans', 'Security', 'Fix EFT HWID and anti-cheat hardware bans on PC', 'Diagnose BattlEye hardware enforcement, spoofer steps, and clean reinstall paths for Escape from Tarkov.', IMAGES.customs, '14 min read', 'Hardware bans often show as instant disconnects on fresh accounts. Document identifiers before and after spoof workflows.', 'See [HWID spoofer guide](/blog/eft-hwid-spoofer-guide/) and [Game Accounts](/blog/eft-game-accounts-recovery/).'],
  ['eft-game-accounts-recovery', 'Guides', 'EFT game accounts recovery after bans', 'Account resets, new profiles, and when HWID tools apply after Tarkov enforcement.', IMAGES.raid, '11 min read', 'Account-only restrictions differ from HWID flags. Game Accounts tools organize detection — they do not guarantee every ban lifts.', 'Pair hardware fixes with conservative cheat presets before raiding again.'],
  ['eft-skin-changer-cosmetics-guide', 'Features', 'EFT skin changer cosmetics guide (client-side)', 'Preview outfits, weapon skins, and gear with the skin changer — pricing and ban risk on PC.', IMAGES.interchange, '10 min read', 'Skin changer modules are cosmetic and client-side where described on the product page — still carry update risk.', 'Confirm compatibility after Tarkov patches; keep restore presets.'],
  ['eft-stream-proof-overlay', 'Setup', 'EFT stream-proof overlay for OBS and capture cards', 'Hide ESP, radar, and menu overlays from streams while playing Escape from Tarkov on PC.', IMAGES.factory, '9 min read', 'Stream-proof mode keeps local visibility while OBS and Game Bar capture clean gameplay.', 'Re-test after GPU driver updates — capture APIs change often.'],
  ['eft-recoil-control-guide', 'Features', 'EFT recoil control guide: tuning and risk', 'Understand recoil assistance modules, full-auto control, and report risk in Tarkov firefights.', IMAGES.customs, '10 min read', 'Recoil helpers complement soft aim — they do not replace ammo and armor knowledge on Labs.', 'Use lower strength on DMRs; avoid obvious no-recoil macros.'],
  ['eft-quest-objective-esp', 'Guides', 'EFT quest objective ESP for progression', 'Highlight quest items, markers, and objective zones with ESP filters tuned for quest chains.', IMAGES.streets, '10 min read', 'Quest ESP speeds wipe tasks without enabling every loot dot on the map.', 'Disable during pure PvP nights via [combat mode](/blog/eft-combat-mode-hide-world-esp/).'],
  ['eft-combat-mode-hide-world-esp', 'Setup', 'EFT combat mode: hide world ESP during fights', 'Hotkey profiles that drop loot and quest ESP when PMC contact starts.', IMAGES.factory, '9 min read', 'Combat mode keeps PMC and Scav ESP while hiding loot clutter — clearer reticle focus in CQB.', 'Bind panic and combat keys separately; test in offline practice if available.'],
  ['eft-cheat-feature-comparison', 'Features', 'EFT cheats feature comparison table', `Compare ESP, soft aim, radar, utilities, and pricing across ${DOMAIN} products.`, IMAGES.customs, '11 min read', 'One table maps portal modules to SKUs: main suite, HWID, Game Accounts, Skin Changer.', 'Main suite Monthly $35 / Lifetime $150; Accounts $50 one-time.'],
  ['eft-cheats-for-pc', 'Guides', 'EFT cheats for PC: platform and launcher notes', 'Windows requirements, Battlestate launcher, and why console cheats do not apply to PC Tarkov tools.', IMAGES.raid, '10 min read', 'Tarkov PC builds require 64-bit Windows 10/11 and current BattlEye-compatible clients.', 'Check [setup guide](/blog/eft-cheat-setup-guide/) before first inject.'],
  ['eft-cheats-faq', 'Guides', 'EFT cheats FAQ: pricing, bans, and support', `Answers on Monthly $35, Lifetime $150, Accounts $50, ban risk, and support channels at ${DOMAIN}.`, IMAGES.woods, '13 min read', 'Central FAQ for buyers — status, plans, utilities, and honest BattlEye risk.', 'Discord #status mirrors the homepage banner after patches.'],
  ['eft-cheat-setup-guide', 'Setup', 'EFT cheats setup guide from checkout to first raid', 'Install loader, portal login, presets, and first-launch checklist for EFT cheats on PC.', IMAGES.customs, '14 min read', 'Step-by-step from /go/eft/ checkout through portal download, preset import, and offline test.', 'Never raid while status shows offline after a patch.'],
  ['eft-cheat-troubleshooting-guide', 'Troubleshooting', 'EFT cheats troubleshooting: loader, overlay, and crashes', 'Fix inject failures, black screens, and overlay conflicts for Escape from Tarkov cheats.', IMAGES.labs, '12 min read', 'Common fixes: run as admin, disable conflicting overlays, verify BattlEye launch order, reinstall VC++ runtimes.', 'Include order email and article slug in Discord tickets.'],
  ['eft-anticheat-bypass-explained', 'Security', 'EFT anti-cheat bypass explained (honest overview)', 'What bypass means for BattlEye on Tarkov — no undetected promises, update cadence, and status.', IMAGES.woods, '11 min read', 'Bypass is maintenance, not a permanent state. Battlestate and BattlEye updates can break modules without warning.', 'Read status before every session; no vendor can promise 100% undetected play.'],
  ['eft-botting-vs-private-cheats', 'Guides', 'EFT botting vs private cheats: risk and control', 'Why automated bots draw more flags than tuned ESP and soft aim in Escape from Tarkov.', IMAGES.streets, '10 min read', 'Bots automate movement and loot — high visibility to behavioral detection. Private cheats keep you in control with manual raids.', 'Prefer conservative ESP over unattended farming scripts.'],
  ['eft-pmc-faction-esp-optimization', 'Guides', 'EFT PMC faction ESP optimization for USEC and BEAR', 'Swap ESP presets when you faction swap or duo with mixed USEC/BEAR without reloading the entire loader.', IMAGES.interchange, '10 min read', 'Color USEC and BEAR differently; ignore squad mates via teammate filters when configured.', 'Export presets via [safe config sharing](/blog/eft-safe-config-preset-sharing/).'],
  ['eft-safe-config-preset-sharing', 'Setup', 'EFT safe config preset sharing for duos and squads', 'Export and import conservative cheat presets across squad members without leaking portal credentials.', IMAGES.raid, '9 min read', 'Share JSON presets, not portal logins. Strip hardware IDs from exports when posting publicly.', 'Test shared presets in a low-risk Scav run before PMC kits.'],
];

for (const row of MORE) {
  const [slug, tag, title, desc, image, readTime, ...paras] = row;
  POSTS.push({
    slug,
    tag,
    title,
    desc,
    image,
    readTime,
    intro: paras.filter(Boolean),
    sections: [
      { h2: 'How this module fits your raids', p: paras[1] || paras[0] },
      { h2: 'Recommended workflow', p: paras[2] || 'Start with half the sliders enabled, verify FPS, then expand distance and loot tiers after a clean raid.' },
    ],
    related: ['eft-cheats-explained', 'best-eft-cheat-features', 'eft-esp-explained', 'eft-cheats-faq'],
    faq: [
      { q: 'Does the main suite include this module?', a: 'Most awareness and combat modules ship in Monthly $35 / Lifetime $150 EFT Cheats. Utilities are separate SKUs on the store hub.' },
      { q: 'Will this work after the next Tarkov patch?', a: 'Check the live status banner. Modules can go offline until the loader updates for BattlEye or game builds.' },
      { q: 'Can I stream with ESP enabled?', a: 'Use stream-proof mode and follow [stream-proof guide](/blog/eft-stream-proof-overlay/). Test capture before going live.' },
      { q: 'Where do I buy?', a: `Continue at ${CHECKOUT} or browse [EFT Cheats](${PRODUCT}).` },
    ],
    map: 'Customs',
  });
}

function buildBody(post) {
  const body = [];
  for (const p of post.intro) body.push({ type: 'p', text: p });
  for (const sec of post.sections) {
    if (sec.h2) body.push({ type: 'h2', text: sec.h2 });
    if (sec.p) body.push({ type: 'p', text: sec.p });
    if (sec.ul) body.push({ type: 'ul', items: sec.ul });
    if (sec.table) body.push({ type: 'table', headers: sec.table.headers, rows: sec.table.rows });
  }
  body.push(...sessionBlock(post.map));
  body.push({
    type: 'h3',
    text: 'Related intel to bookmark',
  });
  body.push({
    type: 'ul',
    items: post.related.map((s) => `[${s.replace(/-/g, ' ')}](/blog/${s}/)`),
  });
  body.push({
    type: 'p',
    text: 'Customs, Factory, Labs, Interchange, Woods, and Streets all stress different modules — keep separate presets instead of one maxed profile. Loot rats benefit from [loot ESP](/blog/eft-loot-container-esp/) and [extract markers](/blog/eft-extract-markers-explained/); PvP players lean on [enemy ESP](/blog/eft-enemy-esp-guide/) and [recoil control](/blog/eft-recoil-control-guide/). If you stream, run a capture test every driver update. When in doubt, raid once with half your sliders disabled, then enable modules one at a time while watching FPS and report risk.',
  });
  body.push({
    type: 'h2',
    text: 'Support and honest expectations',
  });
  body.push({
    type: 'p',
    text: `Discord support on ${DOMAIN} expects your order email, Windows version, and article slug when loader or overlay issues appear. We do not sell guaranteed unbans — pair main cheats with [HWID recovery guides](/blog/eft-hwid-spoofer-guide/) only when enforcement is hardware-linked. Compare [botting vs private cheats](/blog/eft-botting-vs-private-cheats/) if you are choosing between automation and manual ESP workflows.`,
  });
  body.push(cta());
  body.push(...faqSection(post.faq));
  body.push(...FOOTER);
  return body;
}

function esc(s) {
  return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function serializeBlock(b, indent) {
  const pad = indent;
  const inner = pad + '  ';
  if (b.type === 'ul') {
    return `${pad}{ type: "ul", items: [\n${b.items.map((i) => `${inner}"${esc(i)}",`).join('\n')}\n${pad}] }`;
  }
  if (b.type === 'table') {
    const rows = b.rows.map((r) => `${inner}[${r.map((c) => `"${esc(c)}"`).join(', ')}],`).join('\n');
    return `${pad}{ type: "table", headers: [${b.headers.map((h) => `"${esc(h)}"`).join(', ')}], rows: [\n${rows}\n${pad}] }`;
  }
  if (b.type === 'cta') {
    return `${pad}{ type: "cta", title: "${esc(b.title)}", text: "${esc(b.text)}", href: "${esc(b.href)}" }`;
  }
  return `${pad}{ type: "${b.type}", text: "${esc(b.text)}" }`;
}

const lines = [];
lines.push('import type { BlogPostFull } from \'./types\';');
lines.push('');
lines.push('const FOOTER = [');
for (const f of FOOTER) {
  lines.push(`  { type: '${f.type}' as const, text: "${esc(f.text)}" },`);
}
lines.push('];');
lines.push('');
lines.push('export const blogPosts: BlogPostFull[] = [');

POSTS.forEach((post, idx) => {
  const body = buildBody(post);
  lines.push('  {');
  lines.push(`    tag: "${esc(post.tag)}",`);
  lines.push(`    title: "${esc(post.title)}",`);
  lines.push(`    slug: "${esc(post.slug)}",`);
  lines.push(`    image: "${esc(post.image)}",`);
  lines.push(`    desc: "${esc(post.desc)}",`);
  lines.push(`    date: "${DATES[idx]}",`);
  lines.push(`    readTime: "${esc(post.readTime)}",`);
  if (post.featured) lines.push('    featured: true,');
  lines.push('    body: [');
  for (const b of body) {
    lines.push(serializeBlock(b, '      ') + ',');
  }
  lines.push('    ]');
  lines.push('  },');
});

lines.push('];');
lines.push('');

const out = path.join(process.cwd(), 'src/data/blog/posts.ts');
fs.writeFileSync(out, lines.join('\n'));
console.log('Wrote', out, 'posts:', POSTS.length);
