#!/usr/bin/env python3
import os
import re

root = os.path.join(os.path.dirname(__file__), "..")

skip_dirs = {"node_modules", "dist", "_import", "docs", ".git"}

replacements = [
    ("rdr2cheats.net", "buy-eft-cheats.net"),
    ("/products/rdr-2-cheats/", "/products/eft-cheats/"),
    ("products/rdr-2-cheats", "products/eft-cheats"),
    ("/go/rdr-2/", "/go/eft/"),
    ("/go/rdr-2", "/go/eft"),
    ("checkoutPath('rdr2')", "checkoutPath('eft')"),
    ('checkoutPath("rdr2")', 'checkoutPath("eft")'),
    ("default: 'rdr2'", "default: 'eft'"),
    ("rdr-2-cheat-feature-comparison", "eft-cheat-feature-comparison"),
    ("/images/hero-rdr-2-dark.webp", "/images/hero-eft-dark.jpg"),
    ("/images/hero-rdr-2.webp", "/images/hero-eft.jpg"),
    ("/images/gameplay/rdr-2-open-world.png", "/images/gameplay/eft-customs.png"),
    ("/images/gameplay/rdr-2-gunfight.png", "/images/gameplay/eft-raid.png"),
    ("/images/gameplay/rdr-2-horseback.png", "/images/gameplay/eft-factory.png"),
    ("/images/gameplay/rdr-2-camp.png", "/images/gameplay/eft-labs.png"),
    ("/images/gameplay/rdr-2-town.png", "/images/gameplay/eft-interchange.png"),
    ("/images/gameplay/rdr-2-wilderness.png", "/images/gameplay/eft-woods.png"),
    ("/images/gameplay/rdr-2-duel.png", "/images/gameplay/eft-streets.png"),
    ('name = "rdr-2-cheats-net"', 'name = "buy-eft-cheats-net"'),
    ("rdr-2-cheats-net", "buy-eft-cheats-net"),
    ("CHECKOUT_URLS.rdr2", "CHECKOUT_URLS.eft"),
    ("  rdr2:", "  eft:"),
    ("'rdr2'", "'eft'"),
    ("rdr-2", "eft"),
    ("red-dead-redemption", "escape-from-tarkov"),
]

word_replacements = [
    (re.compile(r"Red Dead Redemption 2", re.I), "Escape from Tarkov"),
    (re.compile(r"Red Dead Online", re.I), "live Tarkov raids"),
    (re.compile(r"Rockstar Games Launcher or Steam", re.I), "Battlestate Games launcher"),
    (re.compile(r"Rockstar Games Launcher", re.I), "Battlestate Games launcher"),
    (re.compile(r"Rockstar Launcher", re.I), "Battlestate launcher"),
    (re.compile(r"Rockstar", re.I), "Battlestate"),
    (re.compile(r"RDR 2 Cheats", re.I), "EFT Cheats"),
    (re.compile(r"RDR 2 Private Cheats", re.I), "EFT Private Cheats"),
    (re.compile(r"RDR 2 HWID", re.I), "EFT HWID"),
    (re.compile(r"RDR 2 Game Accounts", re.I), "EFT Game Accounts"),
    (re.compile(r"RDR 2 Skin Changer", re.I), "EFT Skin Changer"),
    (re.compile(r"rdr 2 cheats", re.I), "eft cheats"),
    (re.compile(r"RDR 2 cheats", re.I), "EFT cheats"),
    (re.compile(r"RDR 2 cheat", re.I), "EFT cheat"),
    (re.compile(r"RDR 2 intel", re.I), "EFT intel"),
    (re.compile(r"RDR 2 Guides", re.I), "EFT Guides"),
    (re.compile(r"RDR 2 Forum", re.I), "EFT Forum"),
    (re.compile(r"RDR 2 FAQ", re.I), "EFT FAQ"),
    (re.compile(r"RDR 2 Support", re.I), "EFT Support"),
    (re.compile(r"RDR 2 products", re.I), "EFT products"),
    (re.compile(r"RDR 2 frontier gallery", re.I), "EFT raid gallery"),
    (re.compile(r"\bRDR 2\b", re.I), "EFT"),
    (re.compile(r"\bRDR2\b", re.I), "EFT"),
]

exts = {".ts", ".astro", ".mjs", ".toml", ".txt", ".md", ".webmanifest"}

for dirpath, dirnames, filenames in os.walk(root):
    dirnames[:] = [d for d in dirnames if d not in skip_dirs]
    for fn in filenames:
        if os.path.splitext(fn)[1] not in exts:
            continue
        path = os.path.join(dirpath, fn)
        if "generate_eft_posts" in path or "rebrand_to_eft" in path or "generate-eft-posts" in path:
            continue
        if path.endswith("posts.ts"):
            continue
        with open(path, "r", encoding="utf-8") as f:
            s = f.read()
        orig = s
        for a, b in replacements:
            s = s.replace(a, b)
        for pat, rep in word_replacements:
            s = pat.sub(rep, s)
        if s != orig:
            with open(path, "w", encoding="utf-8") as f:
                f.write(s)

print("Rebrand complete")
