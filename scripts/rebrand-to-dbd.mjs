/**
 * Structural + string rebrand: EFT / Tarkov → DBD / Dead by Daylight.
 */
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

const oldProd = path.join(root, 'src/pages/products/eft-cheats');
const newProd = path.join(root, 'src/pages/products/dbd-cheats');
if (fs.existsSync(oldProd) && !fs.existsSync(newProd)) {
  fs.renameSync(oldProd, newProd);
  console.log('Renamed products/eft-cheats → products/dbd-cheats');
}

const SKIP_DIRS = new Set([
  'node_modules',
  'dist',
  '.git',
  '_import',
  '_uploads',
  '.astro',
  '.wrangler',
  '.tools',
]);

const files = [];
function walk(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(ent.name)) continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p);
    else if (/\.(ts|astro|mjs|js|toml|txt|md|webmanifest|json|css|html)$/.test(ent.name)) {
      if (/rebrand-to-eft|generate-eft|generate_eft|rebrand_to_eft|process-dbd|generate-dbd|rebrand-to-dbd/.test(ent.name))
        continue;
      files.push(p);
    }
  }
}
walk(root);

const pairs = [
  ['https://www.buyeftcheats.net', 'https://www.buydbdcheats.com'],
  ['https://buyeftcheats.net', 'https://buydbdcheats.com'],
  ['www.buyeftcheats.net', 'www.buydbdcheats.com'],
  ['buyeftcheats.net', 'buydbdcheats.com'],
  ['buy-eft-cheats-net', 'buy-dbd-cheats-com'],
  ['buyeftcheats-net', 'buydbdcheats-com'],
  ['buy-eft-cheats-.net', 'buy-dbd-cheats-.com'],
  [
    'https://zadeyo.com/go/UMAR?to=%2Fproducts%2Fescape-from-tarkov',
    'https://zadeyo.com/go/UMAR?to=%2Fproducts%2Fdbd',
  ],
  ['/products/eft-cheats/', '/products/dbd-cheats/'],
  ['products/eft-cheats', 'products/dbd-cheats'],
  ['/go/escape-from-tarkov/', '/go/dbd/'],
  ['/go/escape-from-tarkov', '/go/dbd'],
  ['/go/eft/', '/go/dbd/'],
  ['/go/eft', '/go/dbd'],
  ['eft-cheats-explained', 'dbd-cheats-explained'],
  ['best-eft-cheat-features', 'best-dbd-cheat-features'],
  ['eft-esp-explained', 'dbd-esp-explained'],
  ['eft-player-esp-guide', 'dbd-survivor-esp-guide'],
  ['eft-enemy-esp-guide', 'dbd-killer-awareness-guide'],
  ['eft-scav-esp-guide', 'dbd-survivor-vs-killer-esp'],
  ['eft-loot-container-esp', 'dbd-objects-esp-guide'],
  ['eft-extract-markers-explained', 'dbd-totem-hatch-esp'],
  ['eft-thermal-visual-filters', 'dbd-skill-check-helper-guide'],
  ['eft-radar-system-guide', 'dbd-out-of-screen-arrows-guide'],
  ['eft-map-awareness-guide', 'dbd-fov-crosshair-guide'],
  ['eft-soft-aim-aim-assist-guide', 'dbd-aimbot-options-guide'],
  ['eft-visible-check-bone-selection', 'dbd-health-prestige-esp'],
  ['eft-hwid-spoofer-guide', 'dbd-hwid-spoofer-guide'],
  ['eft-fix-anticheat-hardware-bans', 'dbd-fix-eac-hardware-bans'],
  ['eft-game-accounts-recovery', 'dbd-game-accounts-recovery'],
  ['eft-skin-changer-cosmetics-guide', 'dbd-skin-changer-cosmetics-guide'],
  ['eft-stream-proof-overlay', 'dbd-stream-proof-overlay'],
  ['eft-recoil-control-guide', 'dbd-battle-mode-misc-options'],
  ['eft-quest-objective-esp', 'dbd-generators-pallet-closet-esp'],
  ['eft-combat-mode-hide-world-esp', 'dbd-combat-mode-hide-esp'],
  ['eft-cheat-feature-comparison', 'dbd-cheat-feature-comparison'],
  ['eft-cheats-for-pc', 'dbd-cheats-for-pc'],
  ['eft-cheats-faq', 'dbd-cheats-faq'],
  ['eft-cheat-setup-guide', 'dbd-cheat-setup-guide'],
  ['eft-cheat-troubleshooting-guide', 'dbd-cheat-troubleshooting-guide'],
  ['eft-anticheat-bypass-explained', 'dbd-anticheat-bypass-explained'],
  ['eft-botting-vs-private-cheats', 'dbd-botting-vs-private-cheats'],
  ['eft-pmc-faction-esp-optimization', 'dbd-character-perk-esp-optimization'],
  ['eft-safe-config-preset-sharing', 'dbd-safe-config-preset-sharing'],
  ['/images/hero-eft-dark.jpg', '/images/hero-dbd-dark.jpg'],
  ['/images/hero-eft.jpg', '/images/hero-dbd.jpg'],
  ['/images/gameplay/eft-customs.png', '/images/gameplay/dbd-trial-generators.png'],
  ['/images/gameplay/eft-raid.png', '/images/gameplay/dbd-trial-chase.png'],
  ['/images/gameplay/eft-labs.png', '/images/gameplay/dbd-trial-hook.png'],
  ['/images/gameplay/eft-factory.png', '/images/gameplay/dbd-trial-pallet.png'],
  ['/images/gameplay/eft-interchange.png', '/images/gameplay/dbd-trial-escape.png'],
  ['/images/gameplay/eft-woods.png', '/images/gameplay/dbd-trial-generators.png'],
  ['/images/gameplay/eft-streets.png', '/images/gameplay/dbd-trial-chase.png'],
  ['hero-eft-dark', 'hero-dbd-dark'],
  ['hero-eft', 'hero-dbd'],
  ['eft-customs', 'dbd-trial-generators'],
  ['eft-raid', 'dbd-trial-chase'],
  ['eft-labs', 'dbd-trial-hook'],
  ['eft-factory', 'dbd-trial-pallet'],
  ['eft-interchange', 'dbd-trial-escape'],
  ['eft-woods', 'dbd-trial-generators'],
  ['eft-streets', 'dbd-trial-chase'],
  ["checkoutPath('eft')", "checkoutPath('dbd')"],
  ['checkoutPath("eft")', 'checkoutPath("dbd")'],
  ["product: CheckoutProduct = 'eft'", "product: CheckoutProduct = 'dbd'"],
  ["default: 'eft'", "default: 'dbd'"],
  ['  eft: ', '  dbd: '],
  ["eft: 'eft'", "dbd: 'dbd'"],
  ["'eft':", "'dbd':"],
  ['"eft":', '"dbd":'],
  ['slug: \'eft\'', "slug: 'dbd'"],
  ['"eft"', '"dbd"'],
  ["'eft'", "'dbd'"],
];

const wordPairs = [
  [/Escape from Tarkov/g, 'Dead by Daylight'],
  [/escape from tarkov/g, 'dead by daylight'],
  [/escape-from-tarkov/g, 'dbd'],
  [/Battlestate Games launcher/g, 'Steam / Epic / Microsoft Store'],
  [/Battlestate launcher/g, 'Steam or Epic launcher'],
  [/Battlestate/g, 'Behaviour Interactive'],
  [/BattlEye/g, 'Easy Anti-Cheat'],
  [/EFT Private Cheats/g, 'DBD Private Cheats'],
  [/EFT HWID/g, 'DBD HWID'],
  [/EFT Game Accounts/g, 'DBD Game Accounts'],
  [/EFT Skin Changer/g, 'DBD Skin Changer'],
  [/EFT Cheats/g, 'DBD Cheats'],
  [/EFT cheats/g, 'DBD cheats'],
  [/EFT cheat/g, 'DBD cheat'],
  [/eft cheats/g, 'dbd cheats'],
  [/eft cheat/g, 'dbd cheat'],
  [/EFT Guides/g, 'DBD Guides'],
  [/EFT Forum/g, 'DBD Forum'],
  [/EFT FAQ/g, 'DBD FAQ'],
  [/EFT Support/g, 'DBD Support'],
  [/EFT products/g, 'DBD products'],
  [/EFT raid gallery/g, 'DBD trial gallery'],
  [/EFT intel/g, 'DBD intel'],
  [/\bEFT\b/g, 'DBD'],
  [/\beft\b/g, 'dbd'],
  [/Tarkov/g, 'Dead by Daylight'],
  [/tarkov/g, 'dead by daylight'],
  [/\bPMCs\b/g, 'Survivors'],
  [/\bPMC\b/g, 'Survivor'],
  [/\bScavs\b/g, 'Killers'],
  [/\bScav\b/g, 'Killer'],
  [/USEC\/BEAR/g, 'Survivor / Killer'],
  [/USEC and BEAR/g, 'Survivor and Killer'],
  [/\bUSEC\b/g, 'Survivor'],
  [/\bBEAR\b/g, 'Killer'],
  [/\bFortnite\b/gi, 'other titles'],
];

let changed = 0;
for (const file of files) {
  let s = fs.readFileSync(file, 'utf8');
  const orig = s;
  for (const [a, b] of pairs) s = s.split(a).join(b);
  for (const [re, b] of wordPairs) s = s.replace(re, b);
  if (s !== orig) {
    fs.writeFileSync(file, s);
    changed++;
  }
}

console.log(`Rebrand touched ${changed} / ${files.length} files`);
