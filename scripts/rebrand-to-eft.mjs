import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

const files = [];
function walk(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.name === 'node_modules' || ent.name === 'dist' || ent.name === '_import' || ent.name === 'docs') continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p);
    else if (/\.(ts|astro|mjs|toml|txt|md|webmanifest|json)$/.test(ent.name) && !p.includes('generate-eft-posts') && !p.includes('rebrand-to-eft')) {
      files.push(p);
    }
  }
}
walk(root);

const replacements = [
  ['buy-eft-cheats.net', 'buy-eft-cheats.net'],
  ['/products/eft-cheats/', '/products/eft-cheats/'],
  ['products/eft-cheats', 'products/eft-cheats'],
  ['/go/eft/', '/go/eft/'],
  ['/go/eft', '/go/eft'],
  ['checkoutPath(\'EFT\')', "checkoutPath('eft')"],
  ['checkoutPath("eft")', 'checkoutPath("eft")'],
  ["checkoutPath('eft'", "checkoutPath('eft'"],
  ["default: 'eft'", "default: 'eft'"],
  ['eft-cheat-feature-comparison', 'eft-cheat-feature-comparison'],
  ['eft-cheats-explained', 'eft-cheats-explained'],
  ['best-eft-cheat-features', 'best-eft-cheat-features'],
  ['eft-esp-explained', 'eft-esp-explained'],
  ['eft-player-esp-guide', 'eft-player-esp-guide'],
  ['eft-enemy-esp-guide', 'eft-enemy-esp-guide'],
  ['eft-posse-lawmen-esp-guide', 'eft-scav-esp-guide'],
  ['eft-animal-resource-esp', 'eft-loot-container-esp'],
  ['eft-legendary-animal-esp', 'eft-thermal-visual-filters'],
  ['eft-horse-mount-esp', 'eft-extract-markers-explained'],
  ['eft-radar-system-guide', 'eft-radar-system-guide'],
  ['eft-map-awareness-overlay', 'eft-map-awareness-guide'],
  ['eft-soft-aim-aim-assist-guide', 'eft-soft-aim-aim-assist-guide'],
  ['eft-visible-check-bone-selection', 'eft-visible-check-bone-selection'],
  ['eft-hwid-spoofer-guide', 'eft-hwid-spoofer-guide'],
  ['eft-fix-anticheat-hardware-bans', 'eft-fix-anticheat-hardware-bans'],
  ['eft-game-accounts-recovery', 'eft-game-accounts-recovery'],
  ['eft-skin-changer-cosmetics-guide', 'eft-skin-changer-cosmetics-guide'],
  ['eft-stream-proof-overlay', 'eft-stream-proof-overlay'],
  ['eft-movement-speed-helpers', 'eft-recoil-control-guide'],
  ['eft-pve-npc-camp-esp', 'eft-quest-objective-esp'],
  ['eft-combat-mode-hide-world-esp', 'eft-combat-mode-hide-world-esp'],
  ['eft-cheats-for-pc', 'eft-cheats-for-pc'],
  ['eft-cheats-faq', 'eft-cheats-faq'],
  ['eft-cheat-setup-guide', 'eft-cheat-setup-guide'],
  ['eft-cheat-troubleshooting-guide', 'eft-cheat-troubleshooting-guide'],
  ['eft-anticheat-bypass-explained', 'eft-anticheat-bypass-explained'],
  ['eft-botting-vs-private-cheats', 'eft-botting-vs-private-cheats'],
  ['eft-role-esp-optimization', 'eft-pmc-faction-esp-optimization'],
  ['eft-safe-config-preset-sharing', 'eft-safe-config-preset-sharing'],
  ['/images/hero-eft-dark.jpg', '/images/hero-eft-dark.jpg'],
  ['/images/hero-eft.jpg', '/images/hero-eft.jpg'],
  ['/images/gameplay/eft-customs.png', '/images/gameplay/eft-customs.png'],
  ['/images/gameplay/eft-raid.png', '/images/gameplay/eft-raid.png'],
  ['/images/gameplay/eft-factory.png', '/images/gameplay/eft-factory.png'],
  ['/images/gameplay/eft-labs.png', '/images/gameplay/eft-labs.png'],
  ['/images/gameplay/eft-interchange.png', '/images/gameplay/eft-interchange.png'],
  ['/images/gameplay/eft-woods.png', '/images/gameplay/eft-woods.png'],
  ['/images/gameplay/eft-streets.png', '/images/gameplay/eft-streets.png'],
  ['buy-eft-cheats-net', 'buy-eft-cheats-net'],
  ['name = "buy-eft-cheats-net"', 'name = "buy-eft-cheats-net"'],
];

const wordReplacements = [
  [/Escape from Tarkov/g, 'Escape from Tarkov'],
  [/live Tarkov raids/g, 'live Tarkov raids'],
  [/Battlestate Games launcher/g, 'Battlestate Games launcher'],
  [/Battlestate Games launcher/g, 'Battlestate Games launcher'],
  [/Battlestate launcher/g, 'Battlestate launcher'],
  [/Battlestate/g, 'Battlestate'],
  [/EFT Cheats/g, 'EFT Cheats'],
  [/EFT Private Cheats/g, 'EFT Private Cheats'],
  [/EFT HWID/g, 'EFT HWID'],
  [/EFT Game Accounts/g, 'EFT Game Accounts'],
  [/EFT Skin Changer/g, 'EFT Skin Changer'],
  [/EFT Cheats/g, 'EFT cheats'],
  [/EFT cheat/g, 'EFT cheat'],
  [/EFT Cheats/g, 'eft cheats'],
  [/EFT cheat/g, 'eft cheat'],
  [/EFT intel/g, 'EFT intel'],
  [/EFT Guides/g, 'EFT Guides'],
  [/EFT Forum/g, 'EFT Forum'],
  [/EFT FAQ/g, 'EFT FAQ'],
  [/EFT Support/g, 'EFT Support'],
  [/EFT products/g, 'EFT products'],
  [/EFT raid gallery/g, 'EFT raid gallery'],
  [/EFT/g, 'EFT'],
  [/EFT/g, 'EFT'],
  [/posse/gi, 'squad'],
  [/lawmen/gi, 'Scav'],
  [/legendary animal/gi, 'high-tier loot'],
  [/horse overlays/gi, 'extract markers'],
  [/Animal ESP/g, 'Loot ESP'],
  [/animal ESP/g, 'loot ESP'],
];

for (const file of files) {
  if (file.endsWith('posts.ts')) continue;
  let s = fs.readFileSync(file, 'utf8');
  const orig = s;
  for (const [a, b] of replacements) s = s.split(a).join(b);
  for (const [re, b] of wordReplacements) s = s.replace(re, b);
  if (s !== orig) fs.writeFileSync(file, s);
}

console.log('Rebrand pass complete on', files.length, 'files');
