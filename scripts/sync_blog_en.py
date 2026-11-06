#!/usr/bin/env python3
import re
from pathlib import Path

root = Path(__file__).resolve().parent.parent
posts_ts = (root / "src/data/blog/posts.ts").read_text()
en_path = root / "src/i18n/en.ts"
en = en_path.read_text()

entry_re = re.compile(
    r'\{\s*tag: "(?P<tag>[^"]+)",\s*'
    r'title: "(?P<title>[^"]+)",\s*'
    r'slug: "(?P<slug>[^"]+)",\s*'
    r'image: "(?P<image>[^"]+)",\s*'
    r'desc: "(?P<desc>[^"]+)",\s*'
    r'date: "(?P<date>[^"]+)",\s*'
    r'readTime: "(?P<readTime>[^"]+)"',
    re.MULTILINE,
)

items = [m.groupdict() for m in entry_re.finditer(posts_ts)]
if len(items) != 30:
    raise SystemExit(f"Expected 30 posts, found {len(items)}")

def q(s):
    return s.replace("\\", "\\\\").replace("'", "\\'")

lines = ["    items: ["]
for it in items:
    lines.append("      {")
    lines.append(f"        tag: '{q(it['tag'])}',")
    lines.append(f"        title: '{q(it['title'])}',")
    lines.append(f"        slug: '{q(it['slug'])}',")
    lines.append(f"        image: '{q(it['image'])}',")
    lines.append(f"        desc: '{q(it['desc'])}',")
    lines.append(f"        date: '{q(it['date'])}',")
    lines.append(f"        readTime: '{q(it['readTime'])}',")
    lines.append("      },")
lines.append("    ],")

new_block = "\n".join(lines)
en_new, n = re.subn(r"    items: \[[\s\S]*?\n    \],\n  \},\n  toolkit:", new_block + "\n  },\n  toolkit:", en, count=1)
if n != 1:
    raise SystemExit("Failed to replace blog items block")
en_path.write_text(en_new)
print("Synced", len(items), "blog items to en.ts")
