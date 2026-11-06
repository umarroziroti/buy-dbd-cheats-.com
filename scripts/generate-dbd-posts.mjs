/**
 * Generates src/data/blog/posts.ts for buydbdcheats.com (Dead by Daylight).
 */
import fs from 'node:fs';
import path from 'node:path';

const DOMAIN = 'buydbdcheats.com';
const PRODUCT = '/products/dbd-cheats/';
const CHECKOUT = '/go/dbd/';

const FOOTER = [
  {
    type: 'p',
    text: `DBD Cheats at ${DOMAIN} sells Dead by Daylight tools for Windows PC — Survivor ESP, objects ESP, aimbot options, skill-check helpers, battle mode, and status-aware overlays. Check the live status banner before you queue a trial after a Behaviour Interactive or Easy Anti-Cheat update.`,
  },
  {
    type: 'p',
    text: 'Ban risk is real in Dead by Daylight: read status, reload the loader after patches, and use conservative presets. Smooth aimbot FOV and limited ESP range reduce report volume compared to max automation on day one. No vendor can promise undetected play.',
  },
];

const IMAGES = {
  generators: '/images/gameplay/dbd-trial-generators.png',
  chase: '/images/gameplay/dbd-trial-chase.png',
  hook: '/images/gameplay/dbd-trial-hook.png',
  pallet: '/images/gameplay/dbd-trial-pallet.png',
  escape: '/images/gameplay/dbd-trial-escape.png',
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
      text: `The main [DBD Cheats](${PRODUCT}) suite — Monthly $35 or Lifetime $150 — covers aimbot options, Survivor ESP, objects ESP, skill-check helpers, battle mode, FOV changer, and config tools via ${CHECKOUT}. [Elite](${PRODUCT}elite/) lists the same modules with priority support notes. Hardware recovery uses [HWID Spoofer](${PRODUCT}hwid-spoofer/) at the same monthly or lifetime pricing through /go/hwid-spoofer/. [Game Accounts](${PRODUCT}ugc/) is a one-time $50 checkout at /go/ugc/, and [skin changer](${PRODUCT}skin-changer/) cosmetics run Monthly $35 or Lifetime $150 at /go/skin-changer/.`,
    },
  ];
}

function sessionBlock(mapName = 'MacMillan Estate') {
  return [
    { type: 'h2', text: `Session checklist on ${DOMAIN}` },
    {
      type: 'p',
      text: `Before every trial on ${mapName}, confirm the status banner on ${DOMAIN}, reload the operator portal build after Dead by Daylight patches, and keep a conservative preset for the first few matches. Player reports and Easy Anti-Cheat enforcement can still hit accounts using ESP or aimbot — treat every module as optional, tunable, and revocable mid-trial.`,
    },
    ...productsBlock(),
    { type: 'h3', text: 'Patch-day discipline' },
    {
      type: 'p',
      text: 'When Behaviour Interactive ships a chapter or hotfix, pause aggressive presets even if the launcher still opens. Re-import portal configs instead of sharing old Discord sliders, and walk through [setup](/blog/dbd-cheat-setup-guide/) plus [troubleshooting](/blog/dbd-cheat-troubleshooting-guide/) before you re-enable objects ESP, skill-check helpers, or aimbot. No vendor can promise undetected play or perfect safety — honest ban risk is part of PC Dead by Daylight.',
    },
  ];
}

function cta(title = 'Get DBD Cheats') {
  return {
    type: 'cta',
    title,
    text: `Aimbot, Survivor ESP, objects ESP, and skill-check helpers — Monthly $35 or Lifetime $150 at ${DOMAIN}.`,
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
    slug: 'dbd-cheats-explained',
    tag: 'Guides',
    title: 'DBD cheats explained: external tools vs offline mods',
    desc: `What Dead by Daylight cheats mean on PC — trial risk, Easy Anti-Cheat, and the external suite sold at ${DOMAIN}.`,
    image: IMAGES.generators,
    featured: true,
    readTime: '14 min read',
    intro: [
      'Search results mix trainers, free public cheats, and private DBD cheats. On Windows PC, live Trials share matches with Survivors and Killers, so wallhack-style ESP and aim assistance create both technical and social risk. This article explains what buydbdcheats.com sells and how it differs from single-player tweaks.',
      'Dead by Daylight on PC runs Easy Anti-Cheat with Behaviour Interactive report review. External tools must stay updated after every chapter patch. Private DBD cheats run through an external loader with overlay modules — not in-game script hooks that break every hotfix.',
    ],
    sections: [
      {
        h2: 'What the main product includes',
        p: `One [DBD Cheats](${PRODUCT}) license — Monthly $35 or Lifetime $150 — covers aimbot options (aim key, smoothness, FOV, draw FOV), Survivor ESP, objects ESP (generators, pallets, totems, hatch, hooks, escape doors), skill-check helpers, battle mode, out-of-screen arrows, FOV changer, menu/config tools, and Discord support.`,
      },
      {
        h2: 'Companion utilities',
        ul: [
          `[HWID Spoofer](${PRODUCT}hwid-spoofer/) — Monthly $35 or Lifetime $150 for hardware-ID rotation after enforcement (not a magic unban).`,
          `[Game Accounts](${PRODUCT}ugc/) — one-time $50 for account restriction workflows.`,
          `[Skin changer](${PRODUCT}skin-changer/) — Monthly $35 or Lifetime $150 for cosmetic previews client-side.`,
        ],
      },
      {
        h2: 'Risk and status workflow',
        p: 'Read the homepage status banner before every session. After Dead by Daylight patches, wait for an updated build rather than forcing old configs. Pair this overview with [best DBD cheat features](/blog/best-dbd-cheat-features/) and the [FAQ article](/blog/dbd-cheats-faq/).',
      },
    ],
    related: ['dbd-cheats-explained', 'best-dbd-cheat-features', 'dbd-esp-explained', 'dbd-cheats-faq'],
    faq: [
      {
        q: 'Are DBD cheats the same as offline trainers?',
        a: 'Offline tweaks do not touch live matchmaking. Online Trials on PC need external overlays with live updates — that is what DBD Cheats provides.',
      },
      {
        q: 'Does one purchase cover ESP and aimbot?',
        a: 'Yes. Monthly $35 or Lifetime $150 on the main product includes aimbot options, Survivor ESP, objects ESP, skill-check helpers, and related modules. Utilities are separate SKUs.',
      },
      {
        q: 'Can I use cheats in Dead by Daylight safely?',
        a: 'No honest vendor promises zero risk. Easy Anti-Cheat and player reports exist. Use conservative settings, check status, and accept that bans can happen.',
      },
      {
        q: 'Where do I start after checkout?',
        a: `Secure checkout at ${CHECKOUT} unlocks the operator portal. Follow the [setup guide](/blog/dbd-cheat-setup-guide/) before your first trial.`,
      },
    ],
    map: 'MacMillan Estate',
  },
  {
    slug: 'best-dbd-cheat-features',
    tag: 'Features',
    title: 'Best DBD cheat features for Survivors and Killers',
    desc: 'Ranked modules — Survivor ESP, objects ESP, aimbot, skill-check helpers, battle mode, and FOV tools for Dead by Daylight on PC.',
    image: IMAGES.chase,
    readTime: '12 min read',
    intro: [
      'Not every slider in the DBD cheat menu deserves to be maxed on day one. The best features depend on whether you loop as Survivor, pressure gens as Killer, or need skill-check help under stress. buydbdcheats.com ships one main product with grouped modules; this guide prioritizes them for readable overlays and lower report noise.',
    ],
    sections: [
      {
        h2: 'Awareness stack',
        p: 'Start with [DBD ESP explained](/blog/dbd-esp-explained/) basics, then enable Survivor boxes, health state, and distance caps. Add [out-of-screen arrows](/blog/dbd-out-of-screen-arrows-guide/) when chases leave your FOV.',
      },
      {
        h2: 'Objective stack',
        p: 'Objects ESP for generators, pallets, totems, hatch, and escape doors shortens decision time. Pair with [generators & pallet ESP](/blog/dbd-generators-pallet-closet-esp/) and [totem/hatch ESP](/blog/dbd-totem-hatch-esp/).',
      },
      {
        h2: 'Assist stack',
        p: 'Aimbot options (smoothness + FOV) for ranged Killer powers, plus [skill-check helper](/blog/dbd-skill-check-helper-guide/) for repairs and healing. Use [battle mode](/blog/dbd-battle-mode-misc-options/) to declutter mid-chase.',
      },
      {
        h2: 'Feature priority table',
        table: {
          headers: ['Module', 'Best for', 'Conservative tip'],
          rows: [
            ['Survivor ESP', 'Killer pressure', 'Cap distance; mute distant boxes'],
            ['Objects ESP', 'Gen defense / loops', 'Toggle gens + pallets only at first'],
            ['Aimbot options', 'Ranged Killers', 'High smoothness, modest FOV'],
            ['Skill-check helper', 'Survivor repairs', 'Good chance before Perfect'],
            ['Battle mode', 'Chase focus', 'Bind a hotkey; test FOV'],
          ],
        },
      },
    ],
    related: ['best-dbd-cheat-features', 'dbd-cheat-feature-comparison', 'dbd-esp-explained', 'dbd-cheats-faq'],
    faq: [
      {
        q: 'Which feature helps new Killers most?',
        a: 'Survivor ESP with health and distance tags, plus generator state ESP. Add aimbot only if you play a ranged Killer.',
      },
      {
        q: 'Is Perfect skill-check always better?',
        a: 'Not always. Perfect automation can look unnatural. Start with Good chance — see the [skill-check guide](/blog/dbd-skill-check-helper-guide/).',
      },
      {
        q: 'Do I need every ESP category enabled?',
        a: 'No. Killer mains lean Survivor + gen ESP; Survivor mains lean Killer awareness via objects and out-of-screen arrows.',
      },
      {
        q: 'Where is the full module list?',
        a: 'The [feature comparison](/blog/dbd-cheat-feature-comparison/) table matches portal toggles to use cases.',
      },
    ],
    map: 'Autohaven Wreckers',
  },
];

const MORE = [
  ['dbd-esp-explained', 'Guides', 'DBD ESP explained: boxes, skeletons, and filters', 'How Dead by Daylight ESP overlays work on PC — Survivor tags, objects, distance, and filters in the loader.', IMAGES.pallet, '11 min read', 'ESP draws Survivors, world objects, and exit routes as labeled overlays your monitor shows — other players do not see your wallhack unless you stream carelessly. Entity categories prevent rainbow clutter in crowded Trials.', 'Enable Survivor boxes first, then objects filters, then prestige and nickname tags. Pair with [Survivor ESP guide](/blog/dbd-survivor-esp-guide/) and [objects ESP](/blog/dbd-objects-esp-guide/).'],
  ['dbd-survivor-esp-guide', 'Setup', 'DBD Survivor ESP setup for Killer pressure', 'Configure Survivor ESP — boxes, skeleton, health, prestige, distance, and view lines — for Dead by Daylight on PC.', IMAGES.chase, '10 min read', 'Survivor ESP is the backbone of Killer awareness. Tune box style, skeleton thickness, health state, prestige, nickname, character name/level, fill box, and distance before enabling every object filter.', 'Ignore teammates when you play Survivor and only need Killer-facing objects. Use [character/perk ESP optimization](/blog/dbd-character-perk-esp-optimization/) for readable presets.'],
  ['dbd-killer-awareness-guide', 'Setup', 'DBD Killer awareness: reading pressure without Killer ESP options', 'Honest guide to Killer-side awareness when Killer ESP options are limited — use Survivor reads, audio, and objects ESP instead.', IMAGES.hook, '9 min read', 'This store’s Killer ESP options are not listed in the private suite feature sheet. Survivors still gain awareness from objects ESP, out-of-screen arrows, and careful play — do not invent Killer ESP modules that are not shipping.', 'Combine with [objects ESP](/blog/dbd-objects-esp-guide/) and [battle mode](/blog/dbd-battle-mode-misc-options/) for chase clarity.'],
  ['dbd-survivor-vs-killer-esp', 'Guides', 'DBD Survivor vs Killer ESP: role presets that stay readable', 'Separate Survivor-side and Killer-side presets so ESP colors and filters match your role in each Trial.', IMAGES.escape, '10 min read', 'Role presets prevent clutter: Killer profiles emphasize Survivor boxes and gen progress; Survivor profiles emphasize hooks, pallets, windows, and hatch.', 'Export both via [safe config sharing](/blog/dbd-safe-config-preset-sharing/).'],
  ['dbd-objects-esp-guide', 'Features', 'DBD objects ESP: generators, pallets, totems, and more', 'Highlight generators, pallets, closets, totems, hatch, hooks, windows, chests, traps, and escape doors with distance toggles.', IMAGES.generators, '11 min read', 'Objects ESP is the highest-value information module in Dead by Daylight. Filter by object type and show state before enabling every category at once.', 'Totem and hatch hunters pair this with [totem/hatch ESP](/blog/dbd-totem-hatch-esp/).'],
  ['dbd-totem-hatch-esp', 'Guides', 'DBD totem and hatch ESP explained', 'Find Hex/Boon totems and hatch timing with objects ESP filters for Dead by Daylight Trials.', IMAGES.escape, '10 min read', 'Totem ESP saves cleanses and Hex defense. Hatch ESP helps endgames when one Survivor remains — still subject to game rules and spawn logic.', 'Read [generators & pallet ESP](/blog/dbd-generators-pallet-closet-esp/) for early-game objective routing.'],
  ['dbd-skill-check-helper-guide', 'Features', 'DBD skill-check helper: Good, Perfect, and Auto Wiggle', 'Tune skill-check helper enable, Good chance, Perfect chance, and Auto Wiggle without looking like a bot every repair.', IMAGES.pallet, '10 min read', 'Skill-check helpers reduce miss risk under pressure. Perfect-only automation can look unnatural in kill cams — start with Good chance and raise carefully.', 'Test with [stream-proof overlay](/blog/dbd-stream-proof-overlay/) before broadcasting.'],
  ['dbd-out-of-screen-arrows-guide', 'Guides', 'DBD out-of-screen arrows and off-FOV awareness', 'Configure out-of-screen arrows so Survivor or objective pings stay readable when targets leave your FOV.', IMAGES.chase, '10 min read', 'Out-of-screen arrows complement Survivor ESP when chases leave the frame — keep opacity modest to avoid tunnel vision.', 'Keep arrow radius smaller than ESP max distance to avoid duplicate noise.'],
  ['dbd-fov-crosshair-guide', 'Features', 'DBD FOV changer and custom crosshair guide', 'Tune FOV changer and custom crosshair overlays for readability without claiming impossible vision hacks.', IMAGES.generators, '9 min read', 'FOV changer and crosshair are misc QoL tools. Extreme FOV can look suspicious in clips — use modest values and test FPS impact.', 'Bookmark [battle mode](/blog/dbd-battle-mode-misc-options/) when you want a chase-focused misc stack.'],
  ['dbd-aimbot-options-guide', 'Setup', 'DBD aimbot options: aim key, smoothness, and FOV', 'Configure aim key, aim smoothness, customizable FOV, and draw FOV for Dead by Daylight on PC.', IMAGES.chase, '12 min read', 'Aimbot options assist tracking for ranged Killer powers while you still control movement. High smoothness with modest FOV looks closer to manual aim.', 'Pair with [health/prestige ESP](/blog/dbd-health-prestige-esp/) so you prioritize injured Survivors.'],
  ['dbd-health-prestige-esp', 'Setup', 'DBD health state and prestige ESP tags', 'Enable health state, prestige level, nickname, character level/name, and view lines for clearer Survivor reads.', IMAGES.hook, '10 min read', 'Health and prestige tags help Killers decide whether to commit or rotate. Nickname and character name help callouts in SWF scenarios when you stream privately.', 'Use chest-first visual priority; avoid max rainbow tags that scream wallhack in clips.'],
  ['dbd-hwid-spoofer-guide', 'Security', 'DBD HWID spoofer guide for PC hardware bans', 'When to use the Dead by Daylight HWID spoofer, what it changes, and honest limits after Easy Anti-Cheat enforcement.', IMAGES.pallet, '13 min read', 'HWID spoofer targets machine flags when new accounts die on one PC but work on another. It does not fix account-only bans.', 'Easy Anti-Cheat is the primary PC anti-cheat for Dead by Daylight; follow the portal restore-point checklist before spoofing.'],
  ['dbd-fix-eac-hardware-bans', 'Security', 'How to fix Easy Anti-Cheat hardware bans in DBD', 'Diagnose EAC hardware enforcement, spoofer steps, and clean reinstall paths for Dead by Daylight on Windows.', IMAGES.generators, '14 min read', 'Hardware bans often show as instant disconnects on fresh accounts. Document identifiers before and after spoof workflows.', 'See [HWID spoofer guide](/blog/dbd-hwid-spoofer-guide/) and [Game Accounts](/blog/dbd-game-accounts-recovery/).'],
  ['dbd-game-accounts-recovery', 'Guides', 'DBD game accounts recovery after bans', 'Account resets, new profiles, and when HWID tools apply after Dead by Daylight enforcement.', IMAGES.chase, '11 min read', 'Account-only restrictions differ from HWID flags. Game Accounts tools organize detection — they do not guarantee every ban lifts.', 'Pair hardware fixes with conservative cheat presets before queuing again.'],
  ['dbd-skin-changer-cosmetics-guide', 'Features', 'DBD skin changer cosmetics guide (client-side)', 'Preview outfits, cosmetics, and loadouts with the skin changer — pricing and ban risk on PC.', IMAGES.escape, '10 min read', 'Skin changer modules are cosmetic and client-side where described on the product page — still carry update risk.', 'Confirm compatibility after Dead by Daylight patches; keep restore presets.'],
  ['dbd-stream-proof-overlay', 'Setup', 'DBD stream-proof overlay for OBS and capture cards', 'Hide ESP, menu, and helper overlays from streams while playing Dead by Daylight on PC.', IMAGES.pallet, '9 min read', 'Stream-proof mode keeps local visibility while OBS and Game Bar capture clean gameplay.', 'Re-test after GPU driver updates — capture APIs change often.'],
  ['dbd-battle-mode-misc-options', 'Features', 'DBD battle mode, crosshair, and misc options', 'Use battle mode, out-of-screen arrows, crosshair, and FOV changer without drowning the HUD mid-chase.', IMAGES.generators, '10 min read', 'Battle mode declutter stacks with misc FOV/crosshair tools so chases stay readable. Bind a hotkey and test in custom games when available.', 'Avoid obvious rage toggles that look unnatural in reports.'],
  ['dbd-generators-pallet-closet-esp', 'Guides', 'DBD generators, pallet, and closet ESP', 'Highlight generators with state, standing/dropped pallets, closets, windows, and chests for Trial routing.', IMAGES.generators, '10 min read', 'Generator and pallet ESP speeds defense and looping without enabling every world object at once.', 'Disable during pure chase via [combat mode hide](/blog/dbd-combat-mode-hide-esp/).'],
  ['dbd-combat-mode-hide-esp', 'Setup', 'DBD combat mode: hide world ESP during chases', 'Hotkey profiles that drop object clutter when Survivor contact starts.', IMAGES.chase, '9 min read', 'Combat mode keeps Survivor ESP while hiding generators/totems — clearer reticle focus in CQB.', 'Bind panic and combat keys separately; test before ranked-feeling queues.'],
  ['dbd-cheat-feature-comparison', 'Features', 'DBD cheats feature comparison table', `Compare ESP, aimbot, skill-check helpers, utilities, and pricing across ${DOMAIN} products.`, IMAGES.generators, '11 min read', 'One table maps portal modules to SKUs: main suite, HWID, Game Accounts, Skin Changer.', 'Main suite Monthly $35 / Lifetime $150; Accounts $50 one-time.'],
  ['dbd-cheats-for-pc', 'Guides', 'DBD cheats for PC: platform and launcher notes', 'Windows requirements, Steam/Epic/Microsoft Store clients, and why console cheats do not apply to PC DBD tools.', IMAGES.chase, '10 min read', 'DBD PC builds require 64-bit Windows 10/11 with HVCI, Core Isolation, TPM, and Secure Boot ON per the private suite sheet, plus current Easy Anti-Cheat-compatible clients.', 'Check [setup guide](/blog/dbd-cheat-setup-guide/) before first launch.'],
  ['dbd-cheats-faq', 'Guides', 'DBD cheats FAQ: pricing, bans, and support', `Answers on Monthly $35, Lifetime $150, Accounts $50, ban risk, and support channels at ${DOMAIN}.`, IMAGES.escape, '13 min read', 'Central FAQ for buyers — status, plans, utilities, and honest Easy Anti-Cheat risk.', 'Discord #status mirrors the homepage banner after patches.'],
  ['dbd-cheat-setup-guide', 'Setup', 'DBD cheats setup guide from checkout to first trial', 'Install loader, portal login, presets, and first-launch checklist for DBD cheats on PC.', IMAGES.generators, '14 min read', 'Step-by-step from /go/dbd/ checkout through portal download, preset import, and a low-stakes first session.', 'Never queue while status shows offline after a patch.'],
  ['dbd-cheat-troubleshooting-guide', 'Troubleshooting', 'DBD cheats troubleshooting: loader, overlay, and crashes', 'Fix inject failures, black screens, and overlay conflicts for Dead by Daylight cheats.', IMAGES.hook, '12 min read', 'Common fixes: run as admin, disable conflicting overlays, verify Easy Anti-Cheat launch order, reinstall VC++ runtimes, confirm Secure Boot/TPM expectations.', 'Include order email and article slug in Discord tickets.'],
  ['dbd-anticheat-bypass-explained', 'Security', 'DBD anti-cheat bypass explained (honest overview)', 'What bypass means for Easy Anti-Cheat on Dead by Daylight — no undetected promises, update cadence, and status.', IMAGES.escape, '11 min read', 'Bypass is maintenance, not a permanent state. Behaviour Interactive and Easy Anti-Cheat updates can break modules without warning.', 'Read status before every session; no vendor can promise 100% undetected play.'],
  ['dbd-botting-vs-private-cheats', 'Guides', 'DBD botting vs private cheats: risk and control', 'Why automated bots draw more flags than tuned ESP and aimbot assists in Dead by Daylight.', IMAGES.chase, '10 min read', 'Bots automate repairs and movement — high visibility to behavioral detection. Private cheats keep you in control with manual Trials.', 'Prefer conservative ESP over unattended farming scripts.'],
  ['dbd-character-perk-esp-optimization', 'Guides', 'DBD character and perk ESP optimization', 'Swap ESP presets when you swap Survivors/Killers or perk builds without reloading the entire loader.', IMAGES.pallet, '10 min read', 'Color health states clearly; keep prestige and nickname optional; export role presets for Survivor vs Killer queues.', 'Export presets via [safe config sharing](/blog/dbd-safe-config-preset-sharing/).'],
  ['dbd-safe-config-preset-sharing', 'Setup', 'DBD safe config preset sharing for SWF groups', 'Export and import conservative cheat presets across friends without leaking portal credentials.', IMAGES.chase, '9 min read', 'Share JSON presets, not portal logins. Strip hardware IDs from exports when posting publicly.', 'Test shared presets in a custom or low-stakes queue before ranked-feeling matches.'],
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
      { h2: 'How this module fits your Trials', p: paras[1] || paras[0] },
      {
        h2: 'Recommended workflow',
        p: paras[2] || 'Start with half the sliders enabled, verify FPS, then expand distance and object filters after a clean trial.',
      },
    ],
    related: ['dbd-cheats-explained', 'best-dbd-cheat-features', 'dbd-esp-explained', 'dbd-cheats-faq'],
    faq: [
      {
        q: 'Does the main suite include this module?',
        a: 'Most awareness and assist modules ship in Monthly $35 / Lifetime $150 DBD Cheats. Utilities are separate SKUs on the store hub.',
      },
      {
        q: 'Will this work after the next Dead by Daylight patch?',
        a: 'Check the live status banner. Modules can go offline until the loader updates for Easy Anti-Cheat or game builds.',
      },
      {
        q: 'Can I stream with ESP enabled?',
        a: 'Use stream-proof mode and follow [stream-proof guide](/blog/dbd-stream-proof-overlay/). Test capture before going live.',
      },
      { q: 'Where do I buy?', a: `Continue at ${CHECKOUT} or browse [DBD Cheats](${PRODUCT}).` },
    ],
    map: 'MacMillan Estate',
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
  body.push({ type: 'h3', text: 'Related intel to bookmark' });
  body.push({
    type: 'ul',
    items: post.related.map((s) => `[${s.replace(/-/g, ' ')}](/blog/${s}/)`),
  });
  body.push({
    type: 'p',
    text: 'Generator defense, pallet loops, hook rescues, and endgame hatch races all stress different modules — keep separate presets instead of one maxed profile. Objective players benefit from [objects ESP](/blog/dbd-objects-esp-guide/) and [totem/hatch ESP](/blog/dbd-totem-hatch-esp/); chase-focused players lean on [Survivor ESP](/blog/dbd-survivor-esp-guide/) and [aimbot options](/blog/dbd-aimbot-options-guide/). If you stream, run a capture test every driver update. When in doubt, queue once with half your sliders disabled, then enable modules one at a time while watching FPS and report risk.',
  });
  body.push({ type: 'h2', text: 'Support and honest expectations' });
  body.push({
    type: 'p',
    text: `Discord support on ${DOMAIN} expects your order email, Windows version, and article slug when loader or overlay issues appear. We do not sell guaranteed unbans — pair main cheats with [HWID recovery guides](/blog/dbd-hwid-spoofer-guide/) only when enforcement is hardware-linked. Compare [botting vs private cheats](/blog/dbd-botting-vs-private-cheats/) if you are choosing between automation and manual ESP workflows.`,
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
lines.push("import type { BlogPostFull } from './types';");
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
