export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  age: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  sourceTitle?: string;
  sourcePath?: string;
}

export const forumCategories = [
  { name: 'General', tone: 'purple', icon: 'users' },
  { name: 'Guides & Builds', tone: 'blue', icon: 'navBlog' },
  { name: 'Patch Talk', tone: 'orange', icon: 'refresh' },
  { name: 'Community', tone: 'green', icon: 'messageCircle' },
] as const;

function guideDiscussion(input: {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryTone: ForumPost['categoryTone'];
  sourceTitle: string;
  sourcePath: string;
  upvotes: number;
  answer: string;
  detail: string;
  tip: string;
  comments?: ForumComment[];
}): ForumPost {
  const { answer, detail, tip, comments, ...post } = input;
  const thread =
    comments ??
    ([
      {
        author: 'guide_team',
        age: 'From the guide',
        score: 0,
        body: tip,
      },
    ] satisfies ForumComment[]);
  return {
    ...post,
    author: 'guide_team',
    age: '2 days ago',
    commentsCount: thread.length,
    flair: 'Guide Q&A',
    body: [answer, detail],
    comments: thread,
  };
}

const additionalGuidePosts: ForumPost[] = [
  guideDiscussion({
    slug: 'what-does-dbd-map-awareness-include',
    title: 'DBD map awareness: what the guide includes',
    upvotes: 73,
    excerpt: 'Survivor ESP, objects ESP, arrows, and hatch markers — what players mean by “map awareness” in trials.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'DBD map awareness guide',
    sourcePath: '/blog/dbd-fov-crosshair-guide/',
    answer:
      'On buydbdcheats.com, “map awareness” means Survivor ESP with health and prestige tags, objects ESP for generators and pallets, hatch and escape door markers, and out-of-screen arrows during chases. It is not a free offline mod and it is not silent aim. Community clips often flag players who rotate to totems or cross the map with no information — that usually comes from reading entity positions too early. Our guide explains each overlay so you can enable Survivor boxes only, objects ESP only, or a quiet hybrid instead of dumping every filter on day one.',
    detail:
      'Most third-party tools in Dead by Daylight look like perfect information, not flying godmode. Start in quieter trial lobbies with Survivor boxes only, then add distance caps, then generators-only objects ESP. Keep hatch markers for endgame without enabling every trap and chest during a chase. After every Behaviour Interactive or Easy Anti-Cheat patch, re-import the portal preset — stale distances after an update feel like “broken ESP” when the build is simply outdated.',
    tip: 'Enable Survivor boxes first, then objects ESP, then arrows — one layer per few trials so you learn what each filter changes.',
    comments: [
      {
        author: 'customs_rat',
        age: '1 day ago',
        score: 19,
        body: 'Same advice as long DBD threads: information cheats look “smart,” not flashy. Cap distance or you will pre-aim tiles like the clips people report.',
      },
      {
        author: 'guide_team',
        age: 'From the guide',
        score: 6,
        body: 'If your peeks start looking like you already know the floor, lower ESP range before someone clips you. Stream-proof does not hide gameplay tells.',
      },
    ],
  }),
  guideDiscussion({
    slug: 'how-to-set-up-dbd-player-esp',
    title: 'How to set up DBD player ESP for the first time',
    upvotes: 58,
    excerpt: 'Color Survivors vs Killers, cap distance, and avoid the “knows every floor” look Reddit clips call out.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'DBD player ESP guide',
    sourcePath: '/blog/dbd-survivor-esp-guide/',
    answer:
      'First-time ESP setup on Dead by Daylight should mirror what experienced players say when they review suspicious VODs: readable contrast, different colors for Survivors vs Killers, and a hard max distance so you are not tracking people across half of urban trials. Turn on boxes + health, leave skeleton optional, and keep nameplates short. Test offline or in a practice trial before a perk-heavy Survivor trial. Reddit discussions repeatedly note that “perfect floor picks with no audio” is what gets people accused — your overlay should reduce surprise, not script every clear.',
    detail:
      'Use the portal Survivor ESP tab: cap distance before you add arrows, and save an indoor-trial preset with shorter range than your open-map preset. After Behaviour Interactive patches, re-check colors — UI scaling changes can make tags unreadable and push people to crank opacity until the screen screams “ESP.”',
    tip: 'If the HUD feels crowded, lower distance before font size. Crowded tags cause panic peeks that look worse on a death cam than a clean 120 m box.',
    comments: [
      {
        author: 'factory_main',
        age: '18 hours ago',
        score: 14,
        body: 'indoor trials preset at ~80–100 m changed everything. Wide large-map trials distances on indoor trials made me prefire like the peak matchmaking clips people post.',
      },
      {
        author: 'guide_team',
        age: 'From the guide',
        score: 4,
        body: 'Save separate Survivor and Killer ESP profiles. Mixing AI practice noise with Survivor tags is how you lose the information that actually matters.',
      },
    ],
  }),
  guideDiscussion({
    slug: 'what-distance-caps-for-practice-esp',
    title: 'DBD Killer ESP distance caps',
    upvotes: 44,
    excerpt: 'AI vs player Killers, totem tags, and why huge ranges look like ESP reads on Reddit.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'DBD Killer ESP guide',
    sourcePath: '/blog/dbd-survivor-vs-killer-esp/',
    answer:
      'There is no universal Killer ESP range. On dense trials (indoor maps, peak matchmaking) reports often describe Killers reacting to Survivors they could not hear — that is usually uncapped Survivor ESP on the Killer side. For Survivor ESP, cap distance so you are not tracking everyone across the map. Totem and generator markers can sit farther. Cap objects ESP separately if hatch and hook markers clutter the overlay during chases.',
    detail:
      'Keep a “generator grind” preset with wider objects ESP and a “chase” preset that hides most world markers during Killer contact. Community threads stress that obvious rage hacks get reported fast; information overload is what creates unnatural rotates. Pair battle mode so objects ESP drops when a Survivor tag enters your FOV.',
    tip: 'Change one distance slider per session and run the same trial loop twice before locking the preset.',
    comments: [
      {
        author: 'woods_hiker',
        age: '22 hours ago',
        score: 11,
        body: 'Totem markers at long range on open trials are fine. Survivor dots at max range on urban trials made my overlay look like a Christmas tree.',
      },
    ],
  }),
  guideDiscussion({
    slug: 'how-aimbot-smoothness-works',
    title: 'How do smoothness settings affect DBD aimbot?',
    upvotes: 32,
    excerpt: 'Why snappy locks get clipped on Twitch — and how Reddit aim-assist debates describe “wobble” tells.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'DBD aimbot and aim assist guide',
    sourcePath: '/blog/dbd-aimbot-options-guide/',
    answer:
      'Smoothness is how fast the assist eases onto the selected bone. Low smoothness looks like the classic aimbot “stick” people pause on livestreams: crosshair settles on a head through foliage, then micro-wobbles. High smoothness with visible-check and chest-first bones reads closer to human tracking. FOV should stay modest; huge FOV plus low smooth is what death cams highlight. Aimbot is not the same as silent aim or magic bullets discussed in older cheat forums — if your shots connect without a visible track, you are past what we document as soft assist.',
    detail:
      'Bind aim to a hold key, not always-on. Practice offline against AI opponents with the same smoothness you will use online. After you die, watch whether your view snapped before you had line of sight — that is the tell Reddit clip reviews hammer. Stream-proof hides the menu, not the aim pattern.',
    tip: 'Log each preset name and smoothness value. When a trial feels “sticky,” raise smoothness before you raise FOV.',
    comments: [
      {
        author: 'clip_reviewer',
        age: '2 days ago',
        score: 21,
        body: 'Exactly what the LSF / Dead by Daylight clip debates say: the settle + micro correction is louder than raw accuracy. High smooth saved my VOD reviews.',
      },
      {
        author: 'guide_team',
        age: 'From the guide',
        score: 5,
        body: 'Visible-only + chest bone + hold key. Head priority is how people get highlight-reeled.',
      },
    ],
  }),
  guideDiscussion({
    slug: 'how-to-practice-aimbot-safely',
    title: 'How to practice DBD aimbot offline',
    upvotes: 29,
    excerpt: 'Offline practice drills first — Reddit veterans say automation habits transfer into reportable peeks.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'DBD visible check and bone selection',
    sourcePath: '/blog/dbd-health-prestige-esp/',
    answer:
      'Practice in a custom or low-stakes trial with one Survivor or Killer role and the exact smoothness/FOV you plan to use online. Disable objects ESP so you are not multitasking. Repeat the same loop until tracking feels boring. Players who over-rely on ESP often say it taught bad habits — treat aimbot the same way: if you cannot take the chase with assist off, your settings are carrying the engagement.',
    detail:
      'Keep visible check on during practice so you do not learn to shoot silhouettes through walls. When you move online, halve FOV for the first ten Survivor trials. Pair with stream-proof only after a local OBS recording proves the overlay is gone — chat overlays and zoom widgets are a separate topic; those are for viewers, not for aiming.',
    tip: 'Practice skill checks with helper off first, then enable aimbot only for chases you can already track manually.',
    comments: [
      {
        author: 'offline_grinder',
        age: '1 day ago',
        score: 9,
        body: 'Doing the same indoor trials stairwell ten times offline > random large-map trials deaths. Muscle memory transfers.',
      },
    ],
  }),
  guideDiscussion({
    slug: 'what-is-in-dbd-cheats-product',
    title: 'What does the DBD Cheats product include?',
    upvotes: 67,
    excerpt: 'One suite — Monthly $35 or Lifetime $150 — aimbot, Survivor ESP, objects ESP, skill check helper, battle mode.',
    category: 'General',
    categoryTone: 'purple',
    sourceTitle: 'DBD Cheats explained',
    sourcePath: '/blog/dbd-cheats-explained/',
    answer:
      'The main DBD Cheats SKU on buydbdcheats.com is a private external suite for Windows PC: aimbot, full Survivor ESP, limited-option Killer ESP, objects ESP, skill check helper, battle mode, out-of-screen arrows, menu theming, and config share/load. HWID Spoofer, Game Accounts, and Skin Changer are separate products with their own checkout links. We do not sell “undetected forever” guarantees — Easy Anti-Cheat enforcement is a regular community topic for a reason.',
    detail:
      'Monthly ($35) and Lifetime ($150) unlock the same modules; only billing differs. Delivery is portal + Discord. Always read the live status banner after a Behaviour Interactive or EAC patch before you queue a perk-heavy Survivor trial.',
    tip: 'Read best DBD cheat features if you are unsure whether you need objects ESP or just Survivor ESP and arrows.',
    comments: [
      {
        author: 'patch_prep',
        age: '3 days ago',
        score: 16,
        body: 'People on Reddit conflate ESP sellers, DMA, and full rage kits. This page listing modules separately is what I needed before paying.',
      },
    ],
  }),
  guideDiscussion({
    slug: 'monthly-vs-lifetime-dbd',
    title: 'DBD Cheats: Monthly vs Lifetime plans',
    upvotes: 53,
    excerpt: 'Same modules; pick billing around patch length and how often you actually trial.',
    category: 'General',
    categoryTone: 'purple',
    sourceTitle: 'DBD cheat feature comparison',
    sourcePath: '/blog/dbd-cheat-feature-comparison/',
    answer:
      'Both plans include the full private suite. Monthly is $35 if you want a short window across a patch. Lifetime is $150 one-time with ongoing portal updates while the product stays listed. If you only play the first two weeks of a patch, Monthly is usually enough. If you play every patch cycle, Lifetime is the clearer math. Neither plan changes ban risk — that depends on settings, patches, and reports, which Reddit ban diaries discuss constantly.',
    detail:
      'Check status before either checkout. Lifetime does not mean “immune to Easy Anti-Cheat.” After hardware flags, see the HWID Spoofer product; account-only bans are a different path (Game Accounts / new edition).',
    tip: 'If a major patch dropped this week and status is yellow, wait — do not burn a Monthly day on a red build.',
    comments: [
      {
        author: 'math_trialer',
        age: '2 days ago',
        score: 12,
        body: 'Four months of Monthly ≈ Lifetime. I play every patch so Lifetime was obvious.',
      },
    ],
  }),
  guideDiscussion({
    slug: 'what-to-know-about-skin-changer',
    title: 'What to know about the DBD Skin Changer',
    upvotes: 38,
    excerpt: 'Client-side cosmetics only — not ESP, not a bypass for Bloodweb or inventory bans.',
    category: 'General',
    categoryTone: 'purple',
    sourceTitle: 'DBD Skin Changer cosmetics guide',
    sourcePath: '/blog/dbd-skin-changer-cosmetics-guide/',
    answer:
      'Skin Changer is a separate SKU for previewing and applying supported cosmetic changes through the portal. It does not include Survivor ESP, aimbot, or objects ESP. It will not remove an Easy Anti-Cheat ban or restore a Behaviour Interactive account restriction. After game updates, re-check compatibility — cosmetic profiles break on patches the same way ESP loaders do.',
    detail:
      'Pricing matches the template: Monthly $35 or Lifetime $150 via /go/skin-changer/. Keep a restore/reset preset. If you stream, capture a local clip after applying skins so you are not shocked by leftover menus.',
    tip: 'Do not stack random “skin packs” from Discord DMs with the portal changer — that is how people brick installs.',
    comments: [
      {
        author: 'fit_check',
        age: '4 days ago',
        score: 7,
        body: 'Wish I read this before assuming skins came with the main cheat license.',
      },
    ],
  }),
  guideDiscussion({
    slug: 'what-to-do-if-game-wont-launch-after-patch',
    title: 'DBD Cheats: game won’t launch after a patch',
    upvotes: 24,
    excerpt: 'Verify files first — Reddit ban threads show people confuse launcher errors with HWID bans.',
    category: 'Patch Talk',
    categoryTone: 'orange',
    sourceTitle: 'DBD cheat troubleshooting guide',
    sourcePath: '/blog/dbd-cheat-troubleshooting-guide/',
    answer:
      'A post-patch “Error downloading data” or launcher refuse is not automatically a hardware ban. Reddit HWID threads usually mention a clear banned state on the account page. First: fully exit Behaviour Interactive/Steam, verify Dead by Daylight files, reboot, and launch with overlays closed. Only then check buydbdcheats.com status and download a matching loader. Running yesterday’s build on a new client is the #1 self-inflicted crash we see.',
    detail:
      'If the account truly shows banned, stop launching tools. Account-only vs Easy Anti-Cheat HWID matters: spoofers do not fix pure account bans, and stacking spoofers while appealing is repeatedly called out as a bad idea in community advice. Email support with order email, Windows version, and exact launcher text.',
    tip: 'When status is yellow, play clean or wait. Forcing an old loader after a Easy Anti-Cheat component update is how “it worked yesterday” tickets start.',
    comments: [
      {
        author: 'patch_survivor',
        age: '9 hours ago',
        score: 15,
        body: 'Verified files fixed me. I was sure it was a ban because Reddit fear. Always verify first.',
      },
      {
        author: 'guide_team',
        age: 'From the guide',
        score: 3,
        body: 'Screenshot the launcher line. “Banned” vs “connection” vs “integrity” need different playbooks.',
      },
    ],
  }),
  guideDiscussion({
    slug: 'how-does-an-external-loader-work',
    title: 'What does “external loader” mean for DBD?',
    upvotes: 46,
    excerpt: 'Overlay outside the game process — why update cadence matters after Easy Anti-Cheat component bumps.',
    category: 'General',
    categoryTone: 'purple',
    sourceTitle: 'DBD anti-cheat bypass explained',
    sourcePath: '/blog/dbd-anticheat-bypass-explained/',
    answer:
      'External means the tool runs beside Dead by Daylight and draws ESP/menus as an overlay instead of living as a random public inject DLL from a forum zip. Private portal builds still need updates when Behaviour Interactive ships anti-cheat or client changes — Behaviour Interactive’s own ban diaries (widely discussed on Reddit and gaming sites) show waves weeks after detections. External is not “safe”; it is a delivery and update model. We document honest risk, not undetected marketing.',
    detail:
      'After patches: wait for status green, download the new loader, re-import configs, test practice. Do not hot-swap three community “fixes.” Kernel/DMA chatter on Reddit is a different product class entirely and is not what this storefront ships.',
    tip: 'Treat every patch like a new install: fresh loader, conservative preset, then scale modules.',
    comments: [
      {
        author: 'update_wait',
        age: '1 day ago',
        score: 10,
        body: 'People chasing free injectors in Discord get burned. Portal cadence is the whole point.',
      },
    ],
  }),
  guideDiscussion({
    slug: 'how-to-check-stream-proof-capture',
    title: 'DBD stream-proof overlay: test OBS capture',
    upvotes: 21,
    excerpt: 'Record a file — Reddit streamers get roasted when ESP leaks into the VOD.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'DBD stream-proof overlay guide',
    sourcePath: '/blog/dbd-stream-proof-overlay/',
    answer:
      'Stream-proof only helps if you verify it. Record a local 60-second clip with the exact OBS game-capture or display-capture scene you stream, then scrub for boxes, skeletons, arrows, and menu text. Live preview lies. Multi-monitor and GPU capture paths differ. Community drama around Dead by Daylight streams shows that viewers will freeze-frame a single ESP corner — assume they will.',
    detail:
      'Test after GPU driver updates and after every loader update. Chat overlays and zoom widgets for viewers are unrelated; those sit in OBS. Aimbot tells still appear in gameplay even when the overlay is hidden. If you are not streaming, leave stream-proof on anyway so Discord screenshares do not leak menus.',
    tip: 'Save the test file. Do not rely on the OBS preview thumbnail.',
    comments: [
      {
        author: 'vod_scarred',
        age: '5 days ago',
        score: 18,
        body: 'Got clipped because I trusted preview. File scrub is mandatory.',
      },
    ],
  }),
  guideDiscussion({
    slug: 'what-to-do-after-hwid-change',
    title: 'After an DBD HWID change: what to check',
    upvotes: 33,
    excerpt: 'Account ban vs Easy Anti-Cheat hardware flag — what long Reddit HWID threads actually separate.',
    category: 'General',
    categoryTone: 'purple',
    sourceTitle: 'DBD HWID spoofer guide',
    sourcePath: '/blog/dbd-hwid-spoofer-guide/',
    answer:
      'Dead by Daylight players on Reddit routinely distinguish Behaviour Interactive account bans from Easy Anti-Cheat hardware enforcement. A spoofer only helps when the PC identifiers are part of the block and the account path still allows a new or clean login flow. It does not magically unban an account-only restriction. Community posts also warn that stacking random spoof tools, driver experiments, and “unban services” while appealing can make things worse. Use the portal HWID Spoofer workflow: restore point, compatibility scan, apply, cold reboot, verify identifiers, then a conservative cheat profile — or no cheat at all until status is understood.',
    detail:
      'Confirm which message the launcher shows. Gather order email and screenshots before Discord/email support. If you believe the ban is mistaken, appeal through Easy Anti-Cheat/Behaviour Interactive channels first; do not spoof mid-appeal. New accounts dying only on one PC while working elsewhere is the classic hardware-flag pattern the spoofer SKU targets.',
    tip: 'One tool, one reboot, one verification report. Changing disk + MAC + SMBIOS randomly in one night is how support tickets turn into brick stories.',
    comments: [
      {
        author: 'hwid_vet',
        age: '2 days ago',
        score: 22,
        body: 'This matches every serious Reddit HWID thread: know account vs hardware, don’t stack spoofers, verify after cold boot.',
      },
      {
        author: 'guide_team',
        age: 'From the guide',
        score: 4,
        body: 'If the account is dead and hardware is clean, buy path / Game Accounts tooling — not another spoofer pass.',
      },
    ],
  }),
  guideDiscussion({
    slug: 'what-to-check-before-installing-tools',
    title: 'What should I review before installing DBD Cheats?',
    upvotes: 18,
    excerpt: 'Status, Windows build, AV exclusions, and honest ban risk — before the first Survivor.',
    category: 'Community',
    categoryTone: 'green',
    sourceTitle: 'Best DBD cheat features',
    sourcePath: '/blog/best-dbd-cheat-features/',
    answer:
      'Before install: read the homepage status banner, confirm Windows 10/11 64-bit, close other overlays (Discord game overlay, GeForce Instant Replay if it conflicts), and decide your first preset (player ESP only). Accept that Behaviour Interactive publishes ban statistics and Reddit will always argue about rates — we will not claim undetected. Create a Windows restore point if you also plan to use HWID tools later.',
    detail:
      'Download only from the operator portal after checkout. Skip “free Dead by Daylight ESP” DMs. Skim the forum threads on setup and HWID so you are not repeating answered questions in email.',
    tip: 'First trial after install should be a practice trial with objects ESP off. Confirm stability before a perk-heavy Survivor.',
    comments: [
      {
        author: 'new_patch',
        age: '6 hours ago',
        score: 8,
        body: 'Status banner + practice trial. Ignored that once, crashed mid-trial, never again.',
      },
    ],
  }),
  guideDiscussion({
    slug: 'how-to-choose-dbd-product-plan',
    title: 'How do I choose Monthly vs Lifetime for DBD Cheats?',
    upvotes: 48,
    excerpt: 'Confirm modules, check status, then /go/dbd/ — forum first if you still have questions.',
    category: 'Community',
    categoryTone: 'green',
    sourceTitle: 'DBD Cheats FAQ',
    sourcePath: '/blog/dbd-cheats-faq/',
    answer:
      'Confirm the module list on the product page, pick Monthly ($35) or Lifetime ($150), and checkout via /go/dbd/. If you are unsure about HWID vs main suite vs skins, read the matching forum threads first — we have already covered most plan and risk questions there. Do not post order IDs in public comments.',
    detail:
      'Portal steps are identical for both plans. Lifetime buyers still watch status after patches. Spoofer and accounts are separate checkouts on purpose.',
    tip: 'Use email support only after searching the forum for your exact error string.',
    comments: [
      {
        author: 'buyer_bot',
        age: '12 hours ago',
        score: 6,
        body: 'Forum search would have saved me an email. Aimbot is on both plans — that was my only confusion.',
      },
    ],
  }),
];

export const forumPosts: ForumPost[] = [
  {
    slug: 'offline-trainer-vs-online-cheats',
    category: 'General',
    categoryTone: 'purple',
    title: 'DBD offline mods vs online cheats',
    excerpt: 'Single-player edits never carry into live trials — enforcement and reports only exist online.',
    author: 'guide_team',
    age: '2 hours ago',
    commentsCount: 4,
    upvotes: 128,
    flair: 'Guide Q&A',
    sourceTitle: 'DBD Cheats explained',
    sourcePath: '/blog/dbd-cheats-explained/',
    body: [
      'Offline trainers, save editors, and local Unity experiments stay on your machine. Live Dead by Daylight trials share servers with other Survivors, Easy Anti-Cheat, and a report button that Reddit players use constantly when someone pre-aims through tiles or clears floors with no audio. The DBD Cheats suite is built for that online context: external overlays, portal updates, and honest ban risk — not story-mode money glitches.',
      'Use offline or practice practice to learn ESP layout and aimbot smoothness, then move online with conservative distance and hold-to-aim. Anything that edits game files “just to rip audio” has gotten people hardware-flagged in old community posts — do not confuse curiosity tools with the portal loader.',
    ],
    comments: [
      {
        author: 'trail_rider',
        age: '1 hour ago',
        score: 24,
        body: 'Worth repeating: save editors ≠ portal loader. Live trials are a different risk universe.',
      },
      {
        author: 'valentine_local',
        age: '48 min. ago',
        score: 11,
        body: 'I test ESP offline, then halve distance before a real Survivor. Same advice as the “ESP reads” threads.',
      },
      {
        author: 'squad_lead',
        age: '35 min. ago',
        score: 8,
        body: 'Online presets should look boring. Flashy boxes are what end up in report clips.',
      },
      {
        author: 'guide_team',
        age: '20 min. ago',
        score: 5,
        body: 'If you only want cosmetics, that is the Skin Changer SKU — not an offline mod either.',
      },
    ],
  },
  {
    slug: 'how-to-start-dbd-cheat-setup',
    title: 'Where do I start after buying DBD Cheats?',
    category: 'General',
    categoryTone: 'purple',
    excerpt: 'Status → portal loader → practice trial → then Survivor. Skip random Discord “fix” zips.',
    author: 'guide_team',
    age: '4 hours ago',
    commentsCount: 3,
    upvotes: 86,
    flair: 'Guide Q&A',
    sourceTitle: 'DBD cheat setup guide',
    sourcePath: '/blog/dbd-cheat-setup-guide/',
    body: [
      'Checkout at /go/dbd/ unlocks the operator portal. Read the live status banner first. Download the current Windows loader only from the portal, grant overlay permissions, and confirm Dead by Daylight launches clean with tools closed. Then enable player ESP only for a practice trial. Aimbot and objects ESP come later.',
      'If the loader fails, follow troubleshooting before changing BIOS experiments you saw on Reddit HWID threads. Support needs order email, Windows 10/11 build, and the exact error string — search the forum for that string before emailing.',
    ],
    comments: [
      {
        author: 'pc_rider',
        age: '3 hours ago',
        score: 17,
        body: 'Killer-only first trial after install. Saved me from bricking a perk-heavy loadout on a bad overlay conflict.',
      },
      {
        author: 'discord_helper',
        age: '2 hours ago',
        score: 9,
        body: 'Status banner first. Every patch week someone skips it and opens a ticket.',
      },
      {
        author: 'forum_mod',
        age: '1 hour ago',
        score: 6,
        body: 'We have already answered most setup errors on the forum — search before contact.',
      },
    ],
  },
  {
    slug: 'practice-esp-angles-in-low-pop-trials',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    title: 'Safest way to practice DBD ESP sight lines',
    excerpt: 'Low-pop practice, then peeks with boxes off — how ESP reads habits get you clipped.',
    author: 'guide_team',
    age: '6 hours ago',
    commentsCount: 3,
    upvotes: 64,
    flair: 'Guide Q&A',
    sourceTitle: 'DBD enemy ESP guide',
    sourcePath: '/blog/dbd-killer-awareness-guide/',
    body: [
      'Run a quiet trial with Survivor ESP on long enough to learn a stairwell or dorm angle, then disable boxes and take the same fight from memory. Reddit clip reviews obsess over players who never clear alternate floors — if ESP is teaching you to skip checks, you are building a detectable habit even with stream-proof on.',
      'quieter trial lobbies are better classrooms than hotspot peak matchmaking weekends where everyone is already hunting cheaters. Repeat one loop; do not YOLO indoor trials with max objects ESP on day one.',
    ],
    comments: [
      {
        author: 'blackwater_esp',
        age: '5 hours ago',
        score: 13,
        body: 'Peek with ESP on, turn boxes off, re-clear. That drill fixed my “psychic” peeks.',
      },
      {
        author: 'map_reader',
        age: '4 hours ago',
        score: 6,
        body: 'Radar-only for large-map trials rotations feels less obvious than full skeletons.',
      },
      {
        author: 'guide_team',
        age: '3 hours ago',
        score: 4,
        body: 'Battle mode that hides objects ESP when a Survivor is close helps stop generator-tunnel vision.',
      },
    ],
  },
  {
    slug: 'what-to-check-after-dbd-patch',
    category: 'Patch Talk',
    categoryTone: 'orange',
    title: 'DBD Cheats: checks after a Behaviour Interactive patch',
    excerpt: 'Ban waves and patch notes hit on delays — wait for green status, then practice-test.',
    author: 'guide_team',
    age: '9 hours ago',
    commentsCount: 3,
    upvotes: 42,
    flair: 'Guide Q&A',
    sourceTitle: 'DBD cheat troubleshooting guide',
    sourcePath: '/blog/dbd-cheat-troubleshooting-guide/',
    body: [
      'When Behaviour Interactive ships a client or anti-cheat update, stop. Read buydbdcheats.com status. Wait for a matching loader. Re-import configs instead of forcing old DLLs. Behaviour Interactive’s public ban tallies (tens of thousands across a quarter in recent diaries covered by gaming press and argued endlessly on Reddit) are a reminder that detection can lag — playing on a stale cheat build right after a patch is asking to be in the next wave.',
      'Killer test with player ESP only. If FPS tanks or the game refuses to launch, verify game files before assuming HWID. Yellow status means reduce modules or sit out.',
    ],
    comments: [
      {
        author: 'patch_day_rider',
        age: '8 hours ago',
        score: 12,
        body: 'Quiet practice trial after every patch — non-negotiable.',
      },
      {
        author: 'support_main',
        age: '7 hours ago',
        score: 7,
        body: 'Yellow status = Killer only or offline. Not worth a report wave on a perk-heavy loadout.',
      },
      {
        author: 'patch_watcher',
        age: '6 hours ago',
        score: 5,
        body: 'People ignore lagging ban waves. Delaying a day after big AC notes is free insurance.',
      },
    ],
  },
  {
    slug: 'monthly-or-lifetime-aimbot',
    category: 'Community',
    categoryTone: 'green',
    title: 'DBD Cheats plans: which includes aimbot?',
    excerpt: 'Both plans — smoothness still decides whether you look like a LSF clip.',
    author: 'guide_team',
    age: '12 hours ago',
    commentsCount: 2,
    upvotes: 31,
    flair: 'Guide Q&A',
    sourceTitle: 'DBD cheat feature comparison',
    sourcePath: '/blog/dbd-cheat-feature-comparison/',
    body: [
      'Monthly ($35) and Lifetime ($150) both include aimbot, Survivor ESP, objects ESP, skill check helper, battle mode, and menu/config options on the main product. Billing is the only difference. Aimbot still needs sensible smoothness — plan tier will not save a sticky FOV preset from looking assist-heavy on a VOD.',
      'Pick Lifetime for multi-patch play; Monthly to evaluate. HWID Spoofer remains a separate SKU either way.',
    ],
    comments: [
      {
        author: 'one_more_ride',
        age: '10 hours ago',
        score: 10,
        body: 'Feature comparison made it obvious — same stack, different invoice.',
      },
      {
        author: 'smooth_op',
        age: '8 hours ago',
        score: 4,
        body: 'Bought Lifetime then spent a week just raising smoothness. That mattered more than the plan.',
      },
    ],
  },
  {
    slug: 'how-to-learn-weapon-aim-offline',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    title: 'Practice DBD aimbot offline before PvP',
    excerpt: 'One gun, one smoothness — bots and full auto locks draw more heat than manual ESP.',
    author: 'guide_team',
    age: '1 day ago',
    commentsCount: 3,
    upvotes: 27,
    flair: 'Guide Q&A',
    sourceTitle: 'DBD botting vs private cheats',
    sourcePath: '/blog/dbd-botting-vs-private-cheats/',
    body: [
      'Drill one Survivor or Killer preset offline until aimbot smoothness feels predictable. Full automation / botting is a different risk class — Behaviour Interactive and Easy Anti-Cheat enforcement often target bots and scripts alongside ESP users. Private cheats with humanized aimbot and limited ESP still carry ban risk, but mindless automation is how accounts die fastest.',
      'When you go online, keep the same smoothness. If you need the assist to hit stationary AI opponents, you are not ready for Survivor fights.',
    ],
    comments: [
      {
        author: 'deadeye_drill',
        age: '20 hours ago',
        score: 10,
        body: 'Same offline drill until it feels natural without max FOV.',
      },
      {
        author: 'report_shy',
        age: '18 hours ago',
        score: 5,
        body: 'Conservative online presets beat flashy practice configs every time.',
      },
      {
        author: 'guide_team',
        age: '16 hours ago',
        score: 3,
        body: 'Read the botting vs private cheats article if you are tempted by “full auto trial” sellers.',
      },
    ],
  },
  ...additionalGuidePosts,
];

export function getForumPost(slug: string): ForumPost | undefined {
  return forumPosts.find((post) => post.slug === slug);
}
