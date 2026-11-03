# Heroic Chronicle Rework — Action Items

Concrete fixes for the problems found in the [gameplay analysis](02-heroic-chronicle-analysis.md). Each item links to the problem it solves, proposes a specific change, and notes what it costs. Rules for the original system are in the [reference doc](01-heroic-chronicle-reference.md).

These are proposals to playtest, not final rules. Items that change balance include a draft we can test straight away.

---

## Contents

1. [Summary](#1-summary)
2. [How to read an item](#2-how-to-read-an-item)
3. [Core fairness](#3-core-fairness) — AI-01 to AI-03
4. [Story links](#4-story-links) — AI-04 to AI-07
5. [Prophecy](#5-prophecy) — AI-08
6. [Structural gaps](#6-structural-gaps) — AI-09 to AI-10
7. [Polish](#7-polish) — AI-11 to AI-13
8. [Suggested order](#8-suggested-order)
9. [Decisions we need to make first](#9-decisions-we-need-to-make-first)

---

## 1. Summary

| ID | Fix | Solves | Priority | Effort |
|---|---|---|---|---|
| [AI-01](#ai-01--every-character-gets-exactly-one-boon) | Every character gets exactly one boon | [§4.1](02-heroic-chronicle-analysis.md#41-the-fateful-moment-trigger-is-arbitrary), [§4.2](02-heroic-chronicle-analysis.md#42-most-characters-get-nothing-so-parties-end-up-uneven) | **P1** | S |
| [AI-02](#ai-02--rebalance-every-boon-to-one-budget) | Rebalance every boon to one budget | [§4.3](02-heroic-chronicle-analysis.md#43-the-fateful-moments-themselves-are-badly-unbalanced) | **P1** | M |
| [AI-03](#ai-03--no-empty-cells-in-social-status) | No empty cells in Social Status | [§4.1](02-heroic-chronicle-analysis.md#41-the-fateful-moment-trigger-is-arbitrary) | **P1** | S |
| [AI-04](#ai-04--the-boon-comes-from-your-story) | The boon comes from your story | [§4.1](02-heroic-chronicle-analysis.md#41-the-fateful-moment-trigger-is-arbitrary), [§4.4](02-heroic-chronicle-analysis.md#44-fateful-moments-contradict-the-rest-of-the-chronicle) | P2 | M |
| [AI-05](#ai-05--split-identities-into-role-want-and-power) | Split identities into role, want and power | [§4.5](02-heroic-chronicle-analysis.md#45-identities-are-stat-blocks-not-people) | P2 | M |
| [AI-06](#ai-06--add-a-calling-step-for-class) | Add a "Calling" step for class | [§4.7](02-heroic-chronicle-analysis.md#47-gaps-and-edge-cases) | P2 | S |
| [AI-07](#ai-07--conflict-checks-on-every-entry) | Conflict checks on every entry | [§4.4](02-heroic-chronicle-analysis.md#44-fateful-moments-contradict-the-rest-of-the-chronicle) | P2 | M |
| [AI-08](#ai-08--a-prophecy-reward-ladder) | A Prophecy reward ladder | [§4.6](02-heroic-chronicle-analysis.md#46-prophecy-rewards-dont-match-the-goals) | **P1** | M |
| [AI-09](#ai-09--fill-the-missing-tables-and-columns) | Fill the missing tables and columns | [§4.7](02-heroic-chronicle-analysis.md#47-gaps-and-edge-cases) | P2 | S |
| [AI-10](#ai-10--close-the-rules-edge-cases) | Close the rules edge cases | [§4.7](02-heroic-chronicle-analysis.md#47-gaps-and-edge-cases) | P2 | S |
| [AI-11](#ai-11--soften-the-family-rival-skew) | Soften the family rival skew | [§4.8](02-heroic-chronicle-analysis.md#48-concentration-and-sameness) | P3 | S |
| [AI-12](#ai-12--spread-out-home-settlements) | Spread out home settlements | [§4.8](02-heroic-chronicle-analysis.md#48-concentration-and-sameness) | P3 | S |
| [AI-13](#ai-13--a-quick-chronicle-mode) | A Quick Chronicle mode | [§4.9](02-heroic-chronicle-analysis.md#49-time-cost) | P3 | S |

**Priority:** P1 = fixes a fairness problem every table hits · P2 = fixes coherence or completeness · P3 = quality of life.
**Effort:** S = a rule change or one table · M = several tables rewritten or a playtest needed.

---

## 2. How to read an item

Each item has the same parts:

- **Problem:** what's wrong, with a link to the analysis.
- **Fix:** the proposed rule change.
- **Effect:** what changes at the table, with numbers where we have them.
- **Trade-off:** what we give up or need to watch.

---

## 3. Core fairness

These three items fix the problem the analysis ranked worst: the system **hands out power by lottery** ([§1](02-heroic-chronicle-analysis.md#1-the-short-version)).

### AI-01 — Every character gets exactly one boon

**Problem.** About 75% of rolled characters get no fateful moment. In a party of five, 77% of the time some players get one and others don't ([§4.2](02-heroic-chronicle-analysis.md#42-most-characters-get-nothing-so-parties-end-up-uneven)). The trigger, a ★ identity on an acquired relationship, has nothing to do with the moment itself ([§4.1](02-heroic-chronicle-analysis.md#41-the-fateful-moment-trigger-is-arbitrary)).

**Fix.**
1. Every character gains **exactly one** fateful moment, which we'll call a **boon**. Roll it after relationships are done.
2. A ★ identity no longer grants a fateful moment. Instead, that NPC becomes a **Fated Tie**: the DM marks them as important to the campaign, and the player may **choose** their boon instead of rolling it.
3. No character can have more than one boon from the chronicle. Further boons come only from Prophecy ([AI-08](#ai-08--a-prophecy-reward-ladder)).

**Effect.**

| | Original | With AI-01 |
|---|---|---|
| Characters with a boon | ≈ 25% | **100%** |
| Party of 5, mixed outcome | 77% | **0%** |
| Average boons per character | 0.27 | 1.00 |

★ results still matter, but as story weight and player choice instead of raw power.

**Trade-off.** Average starting power goes up, from 0.27 boons per character to 1. That's only acceptable if the boons are brought down to one budget first, so **AI-01 must ship with [AI-02](#ai-02--rebalance-every-boon-to-one-budget).**

---

### AI-02 — Rebalance every boon to one budget

**Problem.** The 20 fateful moments range from one skill proficiency to lycanthropy with weapon immunity. Only three carry a drawback ([§4.3](02-heroic-chronicle-analysis.md#43-the-fateful-moments-themselves-are-badly-unbalanced)).

**Fix.** Set one budget: **each boon is worth about one origin feat.** The yardstick is the *Skilled* feat, three proficiencies of your choice. Then:

- Bring every entry up or down to that budget.
- **Drawbacks become roleplay flaws.** The indefinite madness results become a personality flaw or fear the player roleplays, with no mechanical penalty. Then no entry is "cheaper" than another.
- Keep the original story beat for every entry. Only the reward changes.

**Draft table** (original rewards are in the [reference doc, Step 9](01-heroic-chronicle-reference.md#step-9--fateful-moments)):

| d20 | Original reward | Proposed reward | Change |
|---|---|---|---|
| 1 | Stealth, Survival | Stealth, Survival, **Perception** | ⬆ +1 proficiency |
| 2 | Amulet of proof against detection and location | Unchanged | — |
| 3 | 1 item from DMG Table B | 1 item from a **curated list** of non-combat uncommon items (no armour or weapons) | ⬇ narrower list |
| 4 | Arcana *or* Religion | Arcana *or* Religion + **one cantrip** (*guidance* or *thaumaturgy*) | ⬆ |
| 5 | Martial weapon + weapon + **Martial Adept** | Martial weapon + quality weapon + **an origin feat** (e.g. *Savage Attacker*) | ⬇ feat swapped for an origin feat |
| 6 | Stealth *or* martial weapons | Stealth + Survival + **one martial weapon** | ⬆ |
| 7 | Spellbook + Magic Initiate | Unchanged (already on budget) | — |
| 8 | Acrobatics *or* Performance + disguise kit | Acrobatics **and** Performance + disguise kit | ⬆ |
| 9 | *Speak with animals* at will | Unchanged | — |
| 10 | Medium armour, shields, martial weapons + madness | **Choose one:** medium armour and shields, *or* martial weapons. Plus Athletics *or* Intimidation. Madness becomes a flaw. | ⬇ no longer class-dependent |
| 11 | Thieves' tools, Stealth | + **Sleight of Hand** | ⬆ |
| 12 | *Find familiar* ritual (quasit) + madness | *Find familiar* ritual. The familiar *looks* fiendish but uses normal familiar forms. Madness becomes a flaw. | ⬇ no quasit |
| 13 | Cursed lycanthropy (immunities) | **Beast-scarred:** darkvision 60 ft and advantage on Perception checks that rely on smell. Full lycanthropy is a **story threat** the DM can bring in later. | ⬇⬇ |
| 14 | Blessed lycanthropy (immunities) | **Beast-blessed:** the *Tough* feat, plus advantage on Perception checks that rely on smell | ⬇⬇ |
| 15 | Pseudodragon companion | Unchanged, but it **never attacks**. It can take the Help action and use its senses and telepathy. | ⬇ slightly |
| 16 | Periapt of health | Unchanged | — |
| 17 | Intimidation, Thieves' Cant | + one **gaming set or tool** | ⬆ |
| 18 | Riding horse, saddle, Animal Handling | + **land vehicles** proficiency | ⬆ |
| 19 | Treasure map | Map + **cartographer's tools** + Investigation | ⬆ no longer depends on the DM alone |
| 20 | 100 gp + signet ring | + History and Persuasion | ⬆ |

**Effect.** All 20 results land within a narrow band. Lycanthropy, the one result that breaks the game ([§4.3](02-heroic-chronicle-analysis.md#43-the-fateful-moments-themselves-are-badly-unbalanced)), becomes a story hook instead of a stat block.

**Trade-off.** We lose the "jackpot" moments. That's the point, but some players enjoy them. If playtesters miss them, an option is a **Fated Tie** ([AI-01](#ai-01--every-character-gets-exactly-one-boon)) that lets the DM give a bigger boon *later*, through the story.

**Open:** the curated item list for #3 and the exact wording of the flaws for #10 and #12.

---

### AI-03 — No empty cells in Social Status

**Problem.** 19% of rolled characters have no acquired relationships. An Outlander gets none 95% of the time ([§4.1](02-heroic-chronicle-analysis.md#41-the-fateful-moment-trigger-is-arbitrary), [§6](02-heroic-chronicle-analysis.md#6-the-numbers)).

**Fix.** Replace every "—" in the [Social Status table](01-heroic-chronicle-reference.md#step-3--social-status) with **"1 ally or rival (your choice)"**. The table still sets your *standing*. It just never leaves you without anyone.

**Effect.** Characters with zero acquired relationships drop from **19% to 0%**. Average acquired relationships rise from 0.93 to about 1.12. The DM's NPC web ([§3.2](02-heroic-chronicle-analysis.md#32-it-builds-an-npc-web-for-the-dm)) grows by about one NPC per party.

**Trade-off.** With [AI-01](#ai-01--every-character-gets-exactly-one-boon) in place this no longer affects power. It's purely about giving every character at least one tie to the world. "Your choice" also lets an Outlander pick a rival, which suits being an outsider.

---

## 4. Story links

These items make the parts of a chronicle fit together, so results read as **one believable life** ([§2](02-heroic-chronicle-analysis.md#2-how-we-judged-it), "Coherence").

### AI-04 — The boon comes from your story

**Problem.** The boon is triggered by an unrelated stat-block roll, and family can never trigger one ([§4.1](02-heroic-chronicle-analysis.md#41-the-fateful-moment-trigger-is-arbitrary)). The event often contradicts earlier results ([§4.4](02-heroic-chronicle-analysis.md#44-fateful-moments-contradict-the-rest-of-the-chronicle)).

**Fix.** After rolling the boon from [AI-01](#ai-01--every-character-gets-exactly-one-boon), the player **names its source**: one of their existing relationships (family **or** acquired), or their Mysterious Secret. Each boon gets a **source tag** that suggests good fits:

| Tag | Fits | Example boons |
|---|---|---|
| **Mentor** | An ally who taught you; a family member | #5 trained by a warrior, #7 tutored by a mage |
| **Scar** | A rival; a family member who hurt you | #1 parents murdered, #13 beast-scarred, #17 exiled |
| **Rescue** | An ally who saved you, or whom you saved | #3 stranger's gift, #14 beast-blessed, #16 healed |
| **Wild** | Any; often the Secret | #9 turned into a bear, #15 pseudodragon, #18 horse |
| **Revelation** | The Secret; a family member | #4 dream visions, #19 treasure map, #20 secret parentage |

**Example.** A player rolls #5 (trained by a famous warrior). They already have a family rival from roll 41–50, *"a friendly rivalry, testing each other's skills"*. They decide it's their older sister, who trained them and still spars with them every year. One roll now explains two parts of the chronicle.

**Effect.** Family relationships finally carry mechanical weight. Every boon is attached to someone or something the DM can bring into play.

**Trade-off.** It adds one decision per character. If the player can't find a fit, they create a new ally or rival as the source.

---

### AI-05 — Split identities into role, want and power

**Problem.** Identities only give a stat block. An ally can be a Cultist, a nuisance rival can be an adult red dragon, and allies and rivals use the same table ([§4.5](02-heroic-chronicle-analysis.md#45-identities-are-stat-blocks-not-people)).

**Fix.** Replace the single identity roll with three short rolls:

**Role (d12):** what they do.

| d12 | Role | d12 | Role |
|---|---|---|---|
| 1 | Farmer or labourer | 7 | Soldier or guard |
| 2 | Artisan or smith | 8 | Sailor or traveller |
| 3 | Merchant | 9 | Noble or official |
| 4 | Priest or acolyte | 10 | Thief or smuggler |
| 5 | Scholar or mage | 11 | Hunter or guide |
| 6 | Entertainer | 12 | Outlaw or cultist |

**Want (d8):** what they're after right now.

| d8 | Want |
|---|---|
| 1 | Money or security |
| 2 | Revenge |
| 3 | Respect or status |
| 4 | Protecting someone |
| 5 | A secret or knowledge |
| 6 | Escape from something |
| 7 | Love or approval |
| 8 | Power over others |

**Power (d6):** how dangerous they are. Allies and rivals use different columns.

| d6 (ally) | d6 (rival) | Tier | Example stat blocks |
|---|---|---|---|
| 1–3 | 1–2 | **Ordinary** | Commoner, acolyte, guard, bandit, scout |
| 4–5 | 3–4 | **Skilled** | Priest, spy, veteran, knight, druid, berserker |
| 6 | 5–6 | **Notable** | Mage, gladiator, assassin, bandit captain, cult fanatic |

**Legendary** NPCs (archmage, dragon, lycanthrope) are never rolled. The DM introduces them on purpose.

**Effect.** Every NPC gets a job and a motive the DM can use. Rivals skew more dangerous than allies, so a level-1 party doesn't get an archmage on call.

**Trade-off.** Two extra rolls per NPC. The "Notable" tier replaces the ★ marker for [Fated Ties](#ai-01--every-character-gets-exactly-one-boon).

---

### AI-06 — Add a "Calling" step for class

**Problem.** The system says you start from a blank slate, but never addresses class, the biggest choice a player makes ([§4.7](02-heroic-chronicle-analysis.md#47-gaps-and-edge-cases)).

**Fix.** Add a **Calling** step after Background. Choose your class (or roll on any class list), then roll **d8** for how you came to it:

| d8 | Calling | What it adds |
|---|---|---|
| 1 | **Apprenticed** to a master | +1 ally (your teacher) |
| 2 | **Born with it**: it showed itself early | Link to your Mysterious Secret |
| 3 | **Necessity**: you learned to survive | +1 rival (who or what you survived) |
| 4 | **Inherited** from family | One family relationship becomes your teacher |
| 5 | **Formal training** at an institution | +1 ally *or* rival (a classmate) |
| 6 | **A bargain or blessing** | A patron, god or power with expectations; useful as a Prophecy complication |
| 7 | **Self-taught** in secret | Someone found out, and you choose whether they're an ally or a rival |
| 8 | **Accident** or catastrophe | Ties directly to your boon's source ([AI-04](#ai-04--the-boon-comes-from-your-story)) |

**Effect.** Class becomes part of the backstory instead of sitting outside it. Results feed the relationship web and the boon source.

**Trade-off.** One more step. It's optional for players who arrive with a class already in mind; they can just choose a Calling.

---

### AI-07 — Conflict checks on every entry

**Problem.** Fateful moments contradict earlier results: murdered parents for a character with two living, loving parents, or a mysterious parent's book for an orphan ([§4.4](02-heroic-chronicle-analysis.md#44-fateful-moments-contradict-the-rest-of-the-chronicle)).

**Fix.** Give every entry that depends on an earlier result a **Requires** tag and a built-in fallback:

| Entry | Requires | If not, use… |
|---|---|---|
| Boon #1 (parents murdered) | Living parents at the start of the event | A guardian or mentor was murdered instead |
| Boon #19 (parent's book) | A parent | The book belonged to a guardian, or was found |
| Boon #20 (secret noble child) | — | Fits anyone. Name the family, ideally from your own region |
| Family relationships | Enough family members | See [AI-10](#ai-10--close-the-rules-edge-cases) |

Also **move the boon roll to after Family**, so conflicts are visible when it's rolled.

**Effect.** "Reroll or adapt it with the DM" becomes the exception instead of the norm.

**Trade-off.** Adds a line to some table entries. That's worth it for clarity.

---

## 5. Prophecy

The analysis rated Prophecy the strongest part of the chapter ([§3.4](02-heroic-chronicle-analysis.md#34-prophecy-turns-backstory-into-forward-momentum)), held back by its rewards. This is the highest-value fix after fairness.

### AI-08 — A Prophecy reward ladder

**Problem.** Rewards are tiny, measured in in-game days, and the same for an immediate goal as for an arc-ending one. A lucky d20 roll gives a permanent feat, while finishing a goal you spent half the campaign on gives a few days of buff ([§4.6](02-heroic-chronicle-analysis.md#46-prophecy-rewards-dont-match-the-goals)).

**Fix.** Rewards scale with the goal, and durations are measured in **sessions**, not days:

| Goal | Reward (DM chooses one, or something comparable) | Lasts |
|---|---|---|
| **Immediate** | Heroic inspiration at the start of each session · advantage on one type of save · reroll one failed check per session | **Next 3 sessions** |
| **Long-term** | A new proficiency or language · an origin feat · a minor permanent magic effect (e.g. a cantrip) | **Permanent** |
| **Arc-ending** | A general feat · a signature item tied to the goal · a title, holding or following in the world | **Permanent** |

**Define "prophetic tone."** When a goal is completed, the DM also gives one **world reaction**: a rumour spreads, an NPC's attitude changes, a door opens or closes. The player writes one line in the character's chronicle describing what they achieved.

**Effect.** Prophecy becomes the main route to power. That rewards what players *do* in the campaign, not the dice at character creation. Combined with [AI-01](#ai-01--every-character-gets-exactly-one-boon), every character's power comes from one fair boon plus their own achievements.

**Trade-off.** Arc-ending rewards come late, so their power matters less to balance. Long-term rewards need a playtest: with five players they mean five extra origin feats spread across the campaign's middle.

---

## 6. Structural gaps

### AI-09 — Fill the missing tables and columns

**Problem.** Several tables are incomplete ([§4.7](02-heroic-chronicle-analysis.md#47-gaps-and-edge-cases), and the [reference doc's gap list](01-heroic-chronicle-reference.md#known-gaps-in-the-original-for-our-rework)).

**Fix.**

**a. Missing Social Status columns.**

| Government | Rule |
|---|---|
| **Revelry pirates** | Use the **Greying Wildlands** column. Both are outlaw societies that respect strength. |
| **Xarzith Kitril** | Use the **Kryn Dynasty** column, then **swap allies and rivals**, as Uthodurn does. |

**b. Family size for every settlement type.** Add a **Town** column between Village and City, and map the others:

| Village d100 | **Town d100** | City d100 | Living parents | Living siblings |
|---|---|---|---|---|
| 01–10 | **01–07** | 01–05 | 3 or more | 2d4 + 2 |
| 11–50 | **08–55** | 06–60 | 2 | 2d4 |
| 51–89 | **56–85** | 61–80 | 1 | 1d4 |
| 90–00 | **86–00** | 81–00 | 0 | 0 |

Military outposts use **City**. Nomadic groups and "seven villages" use **Village**.

**c. Fix the label.** Remove "d20" from the Social Status table header. It's a lookup, not a roll.

**Effect.** Every result the homeland and settlement tables can produce has a rule.

---

### AI-10 — Close the rules edge cases

**Problem.** The d3 family relationships can exceed your family size, and fateful moments that roll on Identities may chain ([§4.7](02-heroic-chronicle-analysis.md#47-gaps-and-edge-cases)).

**Fix.**
- **Not enough family:** each extra relationship is with **extended or found family**: a guardian, foster parent, cousin, sworn sibling or the household that raised you.
- **No chaining:** identity rolls made *inside* a boon (killers, strangers) never grant anything. With [AI-01](#ai-01--every-character-gets-exactly-one-boon) this is automatic, but we'll state it anyway.

---

## 7. Polish

### AI-11 — Soften the family rival skew

**Problem.** Family relationships are 50/50 rival or ally, so about **71%** of characters have at least one family rival. Across a party that gets repetitive ([§4.8](02-heroic-chronicle-analysis.md#48-concentration-and-sameness)).

**Fix.** Re-band the [family table](01-heroic-chronicle-reference.md#step-7--powerful-family-relationships) into three outcomes:

| d100 | Outcome |
|---|---|
| 01–40 | Rival (keep four of the five original entries) |
| 41–60 | **Complicated:** counts as both. They help you *and* work against you. Uses the "friendly rivalry" and "owes you and resents it" entries. |
| 61–00 | Ally (keep the remaining entries) |

**Effect.** At least one pure family rival drops from about 71% to about **61%**, and the "complicated" band adds a kind of relationship the original doesn't have.

---

### AI-12 — Spread out home settlements

**Problem.** About 22% of rolled characters come from one capital ([§4.8](02-heroic-chronicle-analysis.md#48-concentration-and-sameness)).

**Fix.** Add an optional **"Adventurer's origins"** rule: roll the settlement d100 **twice and take the lower result** (the less populous place). Adventurers are rarely the most typical people.

**Trade-off.** It's realistic that most people come from cities, so this stays optional.

---

### AI-13 — A Quick Chronicle mode

**Problem.** A full chronicle takes 13–20 rolls across 12+ tables, which is too long for a mid-campaign replacement character ([§4.9](02-heroic-chronicle-analysis.md#49-time-cost)).

**Fix.** A five-roll version:

1. **Origin:** choose homeland and settlement, or roll once each.
2. **One family relationship** (d100).
3. **One acquired relationship** (d100, plus a Role from [AI-05](#ai-05--split-identities-into-role-want-and-power)).
4. **One boon** (d20), sourced from roll 2 or 3 ([AI-04](#ai-04--the-boon-comes-from-your-story)).
5. **One Mysterious Secret** (d20), then write the **immediate** Prophecy goal.

**Effect.** About 10 minutes, and the character still gets a boon, two NPCs, a hook and a goal. That's the same mechanical budget as a full chronicle, so a quick-mode character isn't weaker.

---

## 8. Suggested order

| Phase | Items | Why this order |
|---|---|---|
| **1. Fairness** | AI-01 + AI-02 together, then AI-03 | AI-01 can't ship without AI-02. These fix the biggest problem. |
| **2. Prophecy** | AI-08 | Highest value, and it depends on AI-01 being settled (power comes from boon + Prophecy). |
| **3. Story links** | AI-05, then AI-04, AI-06, AI-07 | AI-05 changes the "Fated Tie" trigger. AI-04 and AI-06 both feed the boon source. |
| **4. Gaps and polish** | AI-09, AI-10, AI-11, AI-12, AI-13 | Independent; do them in any order. AI-13 is best written last, once the full process is settled. |

**Playtest checkpoint** after phase 2: create a full party with the new rules and check that the boons feel equal and that the Prophecy ladder doesn't snowball.

---

## 9. Decisions we need to make first

These come from the analysis's [open questions](02-heroic-chronicle-analysis.md#7-what-this-means-for-the-rework). Several items depend on them.

| Decision | Affects | Notes |
|---|---|---|
| **2014 or 2024 rules?** | AI-02, AI-08 | "Origin feat" is a 2024 concept. For 2014, use *Skilled* as the yardstick and replace "origin feat" with a short list of approved feats. |
| **Tied to one setting, or setting-neutral?** | AI-09, AI-11, AI-12 | The setting-neutral version is a [separate document](04-setting-agnostic-chronicle.md) with the *original* mechanics. If we go neutral, these fixes get applied to that version instead. |
| **How much power should come from backstory?** | AI-01, AI-02, AI-08 | This plan gives one fixed boon at creation and puts the rest in Prophecy. The alternative is no boon at all, with all power coming from Prophecy. |
