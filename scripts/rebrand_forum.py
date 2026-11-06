#!/usr/bin/env python3
from pathlib import Path
import re

p = Path(__file__).resolve().parent.parent / "src/data/forum.ts"
s = p.read_text()
repl = [
    ("eft-posse-lawmen-esp-guide", "eft-scav-esp-guide"),
    ("EFT posse and lawmen ESP guide", "EFT Scav ESP guide"),
    ("EFT lawmen & posse ESP distance caps", "EFT Scav ESP distance caps"),
    ("what-distance-caps-for-lawmen-esp", "what-distance-caps-for-scav-esp"),
    ("lawmen and posse filters", "Scav and PMC filters"),
    ("lawmen and hostile NPC tags", "Scav and boss tags"),
    ("player and posse ESP", "PMC and Scav ESP"),
    ("lawmen, posse tags", "Scav, PMC tags"),
    ("animal resource markers", "loot container markers"),
    ("legendary animal ESP", "high-tier loot ESP"),
    ("animal and legendary ESP", "loot and quest ESP"),
    ("movement helpers", "recoil control helpers"),
    ("freeroam", "low-pop raids"),
    ("posse wars", "squad fights"),
    ("posse_lead", "squad_lead"),
    ("posse vs hostile players vs lawmen", "squad vs hostile PMCs vs Scavs"),
    ("lawmen paths", "Scav patrol paths"),
    ("horseback rotations", "Interchange rotations"),
    ("Ride a quiet route", "Run a quiet raid"),
    ("town loop", "Customs loop"),
    ("town fights", "Streets CQB"),
    ("Story missions or private freeroam drills", "Offline hideout drills or low-risk Scav runs"),
    ("story trainer", "offline trainer"),
    ("story trainers", "offline trainers"),
    ("story-trainer-vs-online-cheats", "offline-trainer-vs-online-cheats"),
    ("EFT story trainers vs online cheats", "EFT offline trainers vs online cheats"),
    ("practice-esp-angles-in-freeroam", "practice-esp-angles-in-raids"),
    ("I test ESP in story first", "I test ESP in offline practice first"),
    ("Running setup once in story mode", "Running setup once in offline practice"),
    ("play story only", "run Scav only"),
    ("duel in story", "drill in offline mode"),
    ("150–200 m for online freeroam", "120–180 m for online PMC raids"),
    ("witness lines", "report risk"),
    ("showdowns", "CQB fights"),
]
for a, b in repl:
    s = s.replace(a, b)
# fix double replacements
s = s.replace("low-pop raids lobby", "low-pop raid lobbies")
s = s.replace("low-pop raids test", "low-pop raid test")
p.write_text(s)
print("forum.ts rebranded")
