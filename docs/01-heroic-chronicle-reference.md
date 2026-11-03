# Heroic Chronicle — Reference

A working reference for the Heroic Chronicle backstory system from *Explorer's Guide to Wildemount* (EGW, Chapter 4). It's written in our own words and condensed so we can use it while redesigning the system. **Roll ranges and mechanical effects are accurate to the source. Flavour text is summarised.** For the original wording, use the book.

> **Abbreviations:** **PH** = *Player's Handbook* · **DMG** = *Dungeon Master's Guide* · **MM** = *Monster Manual* · **EGW** = *Explorer's Guide to Wildemount* · **CR** = challenge rating

---

## Contents

1. [What the system is](#1-what-the-system-is)
2. [The full process at a glance](#2-the-full-process-at-a-glance)
3. [Step 1 — Homeland](#step-1--homeland)
4. [Step 2 — Background](#step-2--background)
5. [Step 3 — Social Status (allies & rivals from background)](#step-3--social-status)
6. [Step 4 — Home Settlement](#step-4--home-settlement)
7. [Step 5 — Race](#step-5--race)
8. [Step 6 — Family](#step-6--family)
9. [Step 7 — Powerful Family Relationships](#step-7--powerful-family-relationships)
10. [Step 8 — Acquired Allies & Rivals](#step-8--acquired-allies--rivals)
11. [Step 9 — Fateful Moments](#step-9--fateful-moments)
12. [Step 10 — Favourite Food](#step-10--favourite-food)
13. [Step 11 — Mysterious Secret](#step-11--mysterious-secret)
14. [Step 12 — Prophecy](#step-12--prophecy)
15. [Quick-reference cheat sheet](#quick-reference-cheat-sheet)

---

## 1. What the system is

The Heroic Chronicle is a **collaborative, mostly random backstory generator**. The player and the DM use it together. It has two halves:

| Half | What it does |
|---|---|
| **Backstory** | Places the character in Wildemount: region, settlement, family, allies, rivals, formative events, a favourite food and a lingering secret. Some results give **real mechanical benefits** (proficiencies, feats, spells, magic items, companions). |
| **Prophecy** | The player writes **three goals** for the character: immediate, long-term, and end-of-campaign. Completing each one earns a small mechanical reward. |

**Core design principles stated by the book:**

- It assumes you start from a blank slate (no race, class or background chosen), but **choosing instead of rolling is explicitly allowed**. Players can ignore results that don't fit their concept.
- It's meant to *inspire* the concept, not lock it down. Changing your concept because of a roll is encouraged.
- DMs can also use it to build **villains** with grounded histories.
- Eiselcross (the frozen north) is **excluded** from the homeland tables.

---

## 2. The full process at a glance

```
 HOMELAND (d100) ──► BACKGROUND (d20) ──► SOCIAL STATUS
        │                                     │  gives 0–2 "acquired" allies/rivals
        ▼                                     │  based on background × nation
 HOME SETTLEMENT (d100, per region)           │
        │                                     │
        ▼                                     │
 RACE (settlement demographics)               │
        │                                     │
        ▼                                     │
 FAMILY SIZE (d100: parents + siblings)       │
        │                                     │
        ▼                                     │
 FAMILY RELATIONSHIPS (d3 of them, d100 each) │
   each = +1 ally or +1 rival                 │
                                              ▼
                        ACQUIRED ALLIES & RIVALS
                          • relationship (d100)
                          • identity / stat block (d100)
                                    │
                    powerful identity? ──► +1 FATEFUL MOMENT (d20)
                                                 │
                                    proficiencies, feats, items, etc.
        ▼
 FAVOURITE FOOD (d8, per region)
        ▼
 MYSTERIOUS SECRET (d20)
        ▼
 PROPHECY: 3 player-written goals (+ optional d20 inspiration table)
```

> **Key dependency:** Fateful moments, which carry most of the mechanical benefits, come **only** from rolling a "powerful" identity for an *acquired* ally or rival. Family relationships never roll on the identity table, so they never trigger fateful moments.

---

## Step 1 — Homeland

Roll **d100** for the region you were born in. If you were born in one region and raised in another, roll twice.

| d100 | Region | Government (choose where offered) |
|---|---|---|
| 01–21 | **Menagerie Coast** | Clovis Concord *or* Revelry pirates |
| 22–40 | **Marrow Valley** (Western Wynandir) | Dwendalian Empire |
| 41–72 | **Zemni Fields** (Western Wynandir) | Dwendalian Empire |
| 73–77 | **Greying Wildlands** | Tribes of Shadycreek Run *or* Uthodurn |
| 78–00 | **Xhorhas** (Eastern Wynandir) | Kryn Dynasty *or* Xarzith Kitril |

**Odds by region:** Zemni Fields 32% · Xhorhas 23% · Menagerie Coast 21% · Marrow Valley 19% · Greying Wildlands 5%.

---

## Step 2 — Background

Roll **d20** or choose. The table mixes PH backgrounds with EGW's new and adapted ones.

| d20 | Background | Source |
|---|---|---|
| 1 | Acolyte | PH |
| 2 | Luxonborn (Acolyte variant) | EGW |
| 3 | Charlatan | PH |
| 4 | Criminal, Spy variant | PH |
| 5 | Myriad Operative (Criminal variant) | EGW |
| 6 | Entertainer | PH |
| 7 | Folk Hero | PH |
| 8 | Grinner | EGW |
| 9 | Guild Artisan, Guild Merchant variant | PH |
| 10 | Hermit | PH |
| 11 | Noble | PH |
| 12 | Outlander | PH |
| 13 | Sage | PH |
| 14 | Cobalt Scholar (Sage variant) | EGW |
| 15 | Sailor | PH |
| 16 | Revelry Pirate (Sailor variant) | EGW |
| 17 | Soldier | PH |
| 18 | Augen Trust (Spy variant) | EGW |
| 19 | Urchin | PH |
| 20 | Volstrucker Agent | EGW |

---

## Step 3 — Social Status

Your background doesn't change, but **how your nation views your background** determines your standing, and with it how many allies and rivals you start with. The book frames social status as something an adventurer can rebel against and change over time.

### How each nation views people (summary)

| Nation / Region | Values | Who's respected | Notes |
|---|---|---|---|
| **Clovis Concord** (Menagerie Coast) | Personal freedom | Folk heroes, entertainers, celebrities, iconoclasts; the working sailor symbolises the Concord's strength | Sailors hate the Revelry pirates; notable sailors may have a Revelry rival |
| **Revelry pirates** | Freedom taken to a violent extreme | — | No column of its own on the table (see Gaps below) |
| **Dwendalian Empire** (Western Wynandir) | King and country over personal freedom | Rural folk are seen as honest and pious; nobles as benevolent or tyrannical | Laws bend for the rich. Joining the Righteous Brand and following state religion law are the most patriotic acts |
| **Shadycreek Run** (Greying Wildlands) | Strength; crime is a virtue, mercy a vice | The strong | Agents of the Empire are despised |
| **Uthodurn** (Greying Wildlands) | Order and art | — | **Rule:** swap every ally from the table for a rival, and every rival for an ally |
| **Kryn Dynasty** (Eastern Wynandir) | Knowledge and spiritual enlightenment (the Luxon) | Creators (artists, artisans, entertainers) *and*, in wartime, destroyers | Experience (especially *consecution*) matters more than background |

### Social Status Relationships table

Look up your background against your nation. The result is the number of **acquired** allies and rivals you'll detail in Step 8. "—" means none.

| Background | Clovis Concord | Dwendalian Empire | Greying Wildlands | Kryn Dynasty |
|---|---|---|---|---|
| Acolyte | 1 ally | 1 ally (legal faith) / 1 rival (illegal faith) | 1 rival | 1 ally |
| Luxonborn | — | 1 rival | — | 1 ally |
| Charlatan | 1 ally | 1 rival | 1 ally | 1 rival |
| Criminal (Spy) | 1 rival | 1 rival | 1 ally | 1 rival |
| Myriad Operative | 1 rival | 1 ally | 1 rival | — |
| Entertainer | 1 ally | 1 ally | 1 rival | 1 ally |
| Folk Hero | 1 ally | 1 rival | 1 rival | 1 ally |
| Grinner | 1 ally | 1 rival | — | — |
| Guild Merchant | 1 rival | 1 ally | — | 1 ally |
| Hermit | — | 1 rival | 1 ally | 1 ally |
| Noble | 1 ally | 1 ally + 1 rival | 1 rival | 1 ally + 1 rival |
| Outlander | — | — | 1 ally | — |
| Sage | 1 rival | 1 rival | — | 1 ally |
| Cobalt Scholar | 1 ally | 1 ally + 1 rival | 1 ally | 1 rival |
| Sailor | 1 ally + 1 rival | — | 1 rival | 1 ally |
| Revelry Pirate | 1 ally + 1 rival | — | 1 ally | — |
| Soldier | 1 ally | 1 ally + 1 rival | 1 rival | 1 ally + 1 rival |
| Augen Trust (Spy) | — | 1 ally | — | 1 rival |
| Urchin | 1 ally | 1 rival | 1 rival | 1 rival |
| Volstrucker Agent | — | 1 ally | — | 1 rival |

**Range:** 0 to 2 acquired relationships. Noble, Soldier and Cobalt Scholar get the most (2 in some nations). Outlander gets the fewest (only in the Greying Wildlands).

---

## Step 4 — Home Settlement

Roll **d100** on your region's table. **Travellers** (military brats, nomads, touring performers) may roll up to **three** settlements they have connections in. If the result clashes with your social status, reroll or justify it (e.g. a noble raised in a village to hide them from enemies).

<details>
<summary><strong>Menagerie Coast</strong></summary>

| d100 | Settlement | Type |
|---|---|---|
| 01 | Brokenbank | Town |
| 02 | Darktow | Town |
| 03–09 | Feolinn | City |
| 10–19 | Gwardan | City |
| 20–36 | Nicodranas | City |
| 37–40 | Othe | City |
| 41 | Palma Flora | Town |
| 42–84 | Port Damali | City |
| 85–93 | Port Zoon | City |
| 94–00 | Tussoa | City |

</details>

<details>
<summary><strong>Marrow Valley</strong></summary>

| d100 | Settlement | Type |
|---|---|---|
| 01–02 | Alfield | Town |
| 03–05 | Ashguard Garrison | Military outpost |
| 06–07 | Berleben | Town |
| 08–12 | Bladegarden | City |
| 13–18 | Deastok | City |
| 19–22 | Felderwin | City |
| 23–32 | Grimgolir | City |
| 33–40 | Hupperdook | City |
| 41–44 | Kamordah | City |
| 45 | Talonstadt | Town |
| 46–50 | Trostenwald | City |
| 51–52 | Vol'antim | Town |
| 53–00 | Zadash | City |

</details>

<details>
<summary><strong>Zemni Fields</strong></summary>

| d100 | Settlement | Type |
|---|---|---|
| 01 | Blumenthal | Town |
| 02–07 | Bysaes Tyl | City |
| 08–11 | Druvenlode | City |
| 12–13 | Icehaven | Town |
| 14–18 | Nogvurot | City |
| 19–20 | Odessloe | City |
| 21–26 | Pride's Call | City |
| 27–96 | Rexxentrum | City |
| 97–98 | Rockguard Garrison | Military outpost |
| 99 | Velvin Thicket | Nomadic diaspora |
| 00 | Yrrosa | Town |

</details>

<details>
<summary><strong>Greying Wildlands</strong></summary>

| d100 | Settlement | Type |
|---|---|---|
| 01–03 | Boroftkrah | Town |
| 04–06 | Palebank Village | Village |
| 07–30 | Shadycreek Run | City |
| 31–00 | Uthodurn | City |

</details>

<details>
<summary><strong>Xhorhas (Eastern Wynandir)</strong></summary>

| d100 | Settlement | Type |
|---|---|---|
| 01–20 | Asarius | City |
| 21 | Bazzoxan | Town |
| 22 | Charis | Village |
| 23–30 | Igrathad | Seven villages |
| 31–36 | Jigow | City |
| 37 | New Haxon | Military outpost |
| 38–89 | Rosohna (Ghor Dranas) | City |
| 90–93 | Rotthold | City |
| 94–96 | Urzin | Town |
| 97–00 | Xarzith Kitril | City |

</details>

**Capital concentration (fully random):** Rexxentrum ≈ 22% of all characters · Rosohna ≈ 12% · Zadash ≈ 9% · Port Damali ≈ 9%.

---

## Step 5 — Race

Each settlement's gazetteer entry (EGW Chapter 3) lists its racial demographics as percentages. **Roll d100 against that list or just choose.** An "other races" result lets you pick any race not already listed for that settlement.

---

## Step 6 — Family

Roll **d100 twice** on the table for your settlement size: once for the number of living parents, once for living siblings. (The book gives only *Village* and *City* tables. Towns and outposts aren't specified, so pick the closer one.)

| Village d100 | City d100 | Living parents | Living siblings |
|---|---|---|---|
| 01–10 | 01–05 | 3 or more | 2d4 + 2 |
| 11–50 | 06–60 | 2 | 2d4 |
| 51–89 | 61–80 | 1 | 1d4 |
| 90–00 | 81–00 | 0 | 0 |

**Notes from the text:**
- Village families tend to be larger because farms need labour. City families are smaller because of cost.
- In families with 3+ children, one (usually the eldest) carries on the family trade and the rest are pushed outward: apprenticeships, scholarship, or the Soltryce Academy for wealthy imperial families.
- "Parents" can include polyamorous households, multiple spouses or communal upbringing. "Siblings" can include half-siblings, cousins or sworn kin.
- **Family member traits:** choose each member's gender and age. There's no table for this.

---

## Step 7 — Powerful Family Relationships

Roll **d3**. That's how many family members you have a *powerful* relationship with. Roll **d100** for each.

| d100 | Relationship (summary) | Result |
|---|---|---|
| 01–10 | You believe you killed them (accident or not). They're alive and want revenge. | **Rival** |
| 11–20 | You insulted them so badly they cut you off. If they return, it's to settle the score. | **Rival** |
| 21–30 | You always outshone them at something. They left out of jealousy, planning to come back and beat you. | **Rival** |
| 31–40 | You learned a secret of theirs. Now they're digging for yours. | **Rival** |
| 41–50 | A friendly rivalry: you meet now and then to test each other's skills. | **Rival** |
| 51–60 | They owe you and resent it. They'll help, but only to clear the debt. | **Ally** |
| 61–70 | They love you but aren't close. They'll help, but not at risk of injury or death. | **Ally** |
| 71–80 | They caused you a terrible accident as a child and are desperate to make amends. | **Ally** |
| 81–90 | They left long ago for unexplained reasons, promising to return in your hour of greatest need. | **Ally** |
| 91–00 | They love you completely and would do anything for you. | **Ally** |

**Split:** exactly 50% rival, 50% ally.

---

## Step 8 — Acquired Allies & Rivals

These are the allies and rivals from **Step 3 (Social Status)**. For each one:

1. Roll on **Ally Relationships** or **Rival Relationships** (or invent one with the DM).
2. Roll on **Ally and Rival Identities** to give them a stat block.
3. If the identity is marked ★, gain **one fateful moment** (Step 9).

### Ally Relationships (d100)

| d100 | Relationship (summary) |
|---|---|
| 01–10 | **A loyal pet.** Skip the identity roll and choose any beast of **CR 1/8 or lower**. |
| 11–20 | They lost a bet to you and still can't pay, so they're trying to repay you in favours. |
| 21–30 | A former beggar you gave a large sum to. Their life turned around and they want to repay you. |
| 31–40 | Your favourite drinking partner. Their home is open to you and your friends. |
| 41–50 | Your old mentor. You left mid-training and can return to finish when ready. |
| 51–60 | Bonded through shared trauma (battle, robbery). Will come if you say you're in danger. |
| 61–70 | You share a terrible secret and both swore to keep it. They'll help protect it. |
| 71–80 | They fell in love with you. Whether or not you returned it, they're your closest supporter. |
| 81–90 | **Magical bond:** you share **telepathy within 1 mile** of each other. |
| 91–00 | They owe you their life and will protect you however they can. |

### Rival Relationships (d100)

| d100 | Relationship (summary) |
|---|---|
| 01–10 | They believe you murdered their sibling, guilty or not, and want your blood. |
| 11–20 | You beat them in a fight. They think you cheated and want to prove they're better. |
| 21–30 | You broke a promise that hurt them badly. They're plotting to make someone break a promise to you. |
| 31–40 | You broke their heart. They want you to feel the same pain. |
| 41–50 | They were ordered to arrest you and hunt you relentlessly. |
| 51–60 | They believe you've been replaced or possessed and are fighting you to "rescue" the real you. |
| 61–70 | You fled home under mysterious circumstances. They're obsessed with learning why. |
| 71–80 | A power you both tried to harness disfigured them. They've since mastered it and want to use it on you. |
| 81–90 | You helped them once. Now they come to you every time they're in trouble. |
| 91–00 | They want to be your friend, but their "help" always makes things worse. |

*Note: results 81–00 are nuisance rivals rather than enemies.*

### Secret identities

The DM may make some identity rolls in secret so an ally or rival's true nature stays hidden from the character.

### Ally and Rival Identities (d100)

★ = gain one fateful moment.

| d100 | Stat block | | d100 | Stat block |
|---|---|---|---|---|
| 01–05 | Commoner (MM) | | 56–60 | Priest (MM) |
| 06–10 | Acolyte (MM) | | 61–65 | Scout (MM) |
| 11–15 | Bandit (MM) | | 66–70 | Spy (MM) |
| 16–20 | Bandit captain (MM) | | 71–75 | Tribal warrior (MM) |
| 21–25 | Berserker (MM) | | 76–80 | Veteran (MM) |
| 26–30 | Cultist (MM) | | 81–84 | ★ Mage (MM) |
| 31–35 | ★ Cult fanatic (MM) | | 85–88 | ★ Noble (MM) |
| 36–40 | Druid (MM) | | 89–92 | ★ Assassin (MM) |
| 41–45 | ★ Gladiator (MM) | | 93–94 | ★ Blood hunter (EGW) |
| 46–50 | Guard (MM) | | 95–96 | ★ Good/neutral werebear or weretiger (MM) |
| 51–55 | Knight (MM) | | 97–98 | ★ Evil wereboar, wererat or werewolf (MM) |
| | | | 99 | ★ Archmage (MM) |
| | | | 00 | ★ Adult gold *or* adult red dragon (MM) |

**Chance of a fateful moment per identity roll: 30%.**

---

## Step 9 — Fateful Moments

Roll **d20** once per fateful moment earned in Step 8. Or skip rolling and design moments with the DM.

**Rules:**
- A duplicate proficiency becomes any other proficiency **of the same type** (armour, skill, language, tool or weapon).
- If a result doesn't fit (e.g. it involves siblings you don't have), reroll or adapt it with the DM.

| d20 | Event (summary) | Mechanical benefit |
|---|---|---|
| 1 | Parents murdered in front of you (roll Identities for the killer). | Proficiency: **Stealth** and **Survival** |
| 2 | Found a dying dark elf wearing a talisman of their child, inscribed "Il'viranya". | **Amulet of proof against detection and location** |
| 3 | A stranger's gift saved you when you were lost in the wild (roll Identities for the stranger). | **1 item from DMG Magic Item Table B** (reroll consumables) |
| 4 | Survived a terrible storm; now receive dream visions from an unknown god. | Proficiency: **Arcana** *or* **Religion** |
| 5 | Trained by a famous warrior in a signature weapon. | **Martial weapon** proficiency + one such weapon (with DMG special features) + **Martial Adept** feat |
| 6 | Sole survivor of a monster raid on your home. | **Stealth** *or* **martial weapons** proficiency |
| 7 | Tutored by a famous mage. | A **spellbook** + **Magic Initiate** feat |
| 8 | Spent a year with a travelling circus. | **Acrobatics** *or* **Performance** + **disguise kit** |
| 9 | Spent a year magically turned into a bear until a druid saved you. | Cast ***speak with animals*** **at will** |
| 10 | Press-ganged into the army; shaken by war. | **Medium armour, shields, martial weapons** + a random **indefinite madness** (DMG) |
| 11 | Kidnapped by bandits; escaped with an old thief's help. | **Thieves' tools** + **Stealth** |
| 12 | Visited by a demon lord in a dream. | ***Find familiar*** as a ritual (familiar is always a **quasit**) + random **indefinite madness** |
| 13 | Attacked by evil lycanthropes. | **Cursed:** wereboar, wererat or werewolf (DM's choice; MM rules for PC lycanthropes) |
| 14 | Saved by a werebear or weretiger who saw your destiny. | **Lycanthropy (good)**, granted with your consent |
| 15 | Saved a pseudodragon from a giant spider. | **Pseudodragon companion** (DM-controlled, obeys you if treated well) |
| 16 | Nearly died of disease (cackle fever, sewer plague or sight rot); a Cobalt Soul agent helped. | **Periapt of health**, which suppresses the still-present disease |
| 17 | Exiled or imprisoned for a crime, guilty or not. | **Intimidation** + **Thieves' Cant** |
| 18 | Saved a riderless, fully-tacked horse from wolves. | **Riding horse + saddle** + **Animal Handling** |
| 19 | Found a treasure map in a parent's mysterious book. | **Treasure map** to a place the DM chooses |
| 20 | Letter reveals you're the secret child of a noble family in Rexxentrum. | **100 gp** + **signet ring** of your true family |

---

## Step 10 — Favourite Food

Roll **d8** for your home region, or choose or invent one. This is purely flavour.

### Regional cuisine in brief

| Region | Character of the cuisine | Signature drinks |
|---|---|---|
| **Menagerie Coast** | Boldly spiced seafood, fruity salads; local food fused with Marquesian and Tal'Dorei cooking | *Silvertooth* (sweet palm-lily brandy, Concord); rum (pirates) |
| **Western Wynandir** | Hearty roots and red meat, few spices, butter and herbs, lots of fermented and pickled veg. The poor eat offal, nobles the prime cuts | Root-vegetable spirits (rural), imported wine (wealthy) |
| **Greying Wildlands** | Game, foraged roots and berries; Myriad-smuggled luxuries for the well-connected | Berry ferments. Drinking was once ritual-only, but heavy drinking is now a status symbol |
| **Eastern Wynandir** | Tubers, grasses, rice and cranberries from the bogs; communal mammoth hunts. The Kryn court favours Underdark mushrooms and rare meats | Fiery plum spirits; earthy mushroom beer (working-class drow) |

### Favourite food tables

| d8 | Menagerie Coast | Western Wynandir | Greying Wildlands | Eastern Wynandir |
|---|---|---|---|---|
| 1 | **Paella**: rice, white beans, seafood | **Dumplings**: steamed potato bread | **Imperial pickled plums**, smuggled | **Rzukaal**: rice noodles, mushrooms, giant spider legs |
| 2 | **Plantain cups**: fried plantain filled with meat and rice | **Sauerbraten**: pickled horse meat with cabbage | **Charred venison** with roast potatoes | **Yuyandl**: grilled spiced *yuyo* with rice |
| 3 | **Gazpacho**: chilled vegetable and fruit soup | **Brawn**: head-cheese meat jelly | **Raw venison**, still bloody | **Mastodon kor'rundl**: grilled mastodon, *kor'run* squash, rice |
| 4 | **Honeyflame bread**: fried, honey-soaked, spiced | **Schweinshaxe**: marinated roast pork knuckle | **Elf-mash**: creamy overripe cloudberries | **Kinespaji spaaldl**: mushroom soup with horizonback turtle spit |
| 5 | **Fusaka fish**: spiced fried seafood cutlets | **Dampfnudel**: steamed roll, sweet or savoury | **Dwarven rootbake**: root casserole wrapped in seaweed | **Umarindaly**: rice pudding with gooseberry jam |
| 6 | **Snakelocks noodles**: battered fried sea-anemone tendrils | **Spanferkel**: roast suckling pig (luxury) | **Jam porridge**: rice with salmonberry jam | **Keltaly**: frozen blackcurrant cream |
| 7 | **Queen's water**: guava and tamarind soft drink | **Trost**: sweet dark ale from Trostenwald | **Blazing tea**: fireroot and scalding spices | **Erzfaalyu**: fermented rice spirit |
| 8 | **Blacksand coffee**: tiny sand-brewed shot | **Radler**: beer with imported lemonade (pricey) | **Sbiten**: hot honey-spice drink | **Yunfaalyu**: ice-cold plum liquor with currants |

---

## Step 11 — Mysterious Secret

Something odd you witnessed or received, which has stayed with you all your life. Roll **d20** or write one with the DM. These are **plot seeds for the DM** and pair naturally with Prophecy goals.

| d20 | Secret (summary) |
|---|---|
| 1 | A best friend handed you a key glowing icy blue one night, then vanished for good. |
| 2 | You alone witnessed a murder. The killer took a ruby-centred gold coin from the body. |
| 3 | In a dream, an old stranger screamed "Scourger!" at you and burst into flame. |
| 4 | You found a cliff riddled with caves big enough for people to hide in. |
| 5 | You followed a strangely purposeful cat that watched an elder's house for an hour, then bolted as if released from a spell. |
| 6 | A parent left armed in a midnight storm and returned a week later with a shattered shield. They never spoke of it. |
| 7 | A farmer friend's crops doubled weekly until pumpkins grew house-sized. Then the friend vanished and the fields were burned. |
| 8 | You saw a colossal figure striding through storm clouds. It looked at you and walked on. |
| 9 | A sibling sat on your chest at night, said "The time is soon," giggled and fled, and later remembered nothing. |
| 10 | A giant bird flew overhead crying what sounded like your name. |
| 11 | Spat-out fruit seeds spelled a magic word. Years later the same word appeared in a slice of bread. |
| 12 | A dead warrior friend keeps appearing at the edge of your vision in their old armour. |
| 13 | A seer's touch showed you a flaming bird chained and writhing beneath a mountain. |
| 14 | At sea, a rumbling voice surrounded you and golden eyes stared up from the water. |
| 15 | A potato burst into worms and you saw a vision of a vast worm devouring the world. |
| 16 | A tall, red-skinned horned figure walked a meadow and flowers grew taller in its wake. You fled. |
| 17 | A blindfolded, scarred stranger glowing silver, perhaps with black wings, saved you from wolves. |
| 18 | Burned by a blade you were forging, you had a vision of mighty weapons calling to you. |
| 19 | A fleeing stranger said they'd escaped "an evil place", then dropped dead. The body was gone when you returned. |
| 20 | You caught a falling star. It smiled and told you to find it the day fire erupts from the earth. |

---

## Step 12 — Prophecy

### How it works

1. The player writes **three goals**. Each has two parts:
   - **The goal**: what the character wants to achieve.
   - **The complication**: what happens once it's achieved, good or bad.
2. The three goals are timed differently:

| Goal | Timescale |
|---|---|
| **Immediate** | Early in the campaign |
| **Long-term** | Mid-campaign |
| **Arc-ending** | Concludes the character's story at the campaign's end |

3. Only the immediate goal is needed at the start. The others can wait until the player has a feel for the campaign.
4. Linking a goal to your **Mysterious Secret** is recommended. Goals can also be co-written with the DM to tie into the DM's planned story.
5. Each time a goal is completed it "takes on a prophetic tone", and the character earns a **reward**.

### Prophecy Inspirations (d20, optional)

| d20 | Goal → Complication (summary) |
|---|---|
| 1 | Kill the creature that killed my parents → and lose my sense of purpose |
| 2 | Learn why the Cerberus Assembly took my sibling → sets uncontrollable political events in motion |
| 3 | Save my village from a year of gnoll raids → inspires me to greater heroism |
| 4 | Uncover the Kryn's secrets of consecution → reveals a terrifying truth |
| 5 | Join a blood hunter order → power at a steep price |
| 6 | Steal a fortune from a Revelry pirate → wealth attracts unsavoury people |
| 7 | Become a hero of the Empire–Kryn war → haunted by atrocities |
| 8 | Cleanse the Savalirwood's corruption → by taking it into myself |
| 9 | Infiltrate the Myriad → forced into evil acts |
| 10 | Find an Eiselcross relic and become famous → the relic exacts a terrible cost |
| 11 | Speak with a dragon and survive → earn its eternal wrath |
| 12 | Steal a holy Kryn relic → everyone who wants its power hunts me |
| 13 | I will hesitate at a crucial moment → someone else will suffer for it |
| 14 | Stumble into the Golden Grin → reject them, but be drawn back |
| 15 | Befriend and ride a flying beast → others envy the bond |
| 16 | Kneel before the Bright Queen without knowing who she is → leads to danger |
| 17 | Hold the Empire's fate briefly before Princess Suria Dwendal → realise the stakes too late |
| 18 | Cause a Clovis Concord marquis's death → know the killer, but no one believes me |
| 19 | Anger one of the Tribes of Shadycreek Run → others suffer as they hunt me |
| 20 | Meet my birth parents → learn a world-changing secret about my birth |

### DM pacing guidance

> **Sessions per goal ≈ expected campaign length in sessions ÷ total prophecy goals across all players**
>
> *Example: 60 sessions, 5 players × 3 goals = 15 goals → about one goal completed every 4 sessions.*

If goals are being completed faster than that, the book says this is usually fine. Players would rather see their own story come up often than wade through plot that isn't about them.

### Prophecy rewards (DM chooses one, or something comparable)

| Reward | Duration |
|---|---|
| Gain **inspiration** whenever you finish a long rest | 1d10 days |
| **Advantage** on saves against being **frightened** | 1d10 days |
| Weapon attacks deal **+1d6 damage** of the weapon's type | 1d4 days |

---

## Quick-reference cheat sheet

| Step | Dice | Output | Mechanical? |
|---|---|---|---|
| Homeland | d100 | Region + government | No |
| Background | d20 | Background | Yes (normal background) |
| Social Status | Lookup | 0–2 acquired allies/rivals | Indirectly |
| Home Settlement | d100 | Settlement (×3 for travellers) | No |
| Race | d100 (demographics) | Race | Yes (normal race) |
| Family Size | 2 × d100 | Parents and siblings | No |
| Family Relationships | d3, then d100 each | 1–3 family allies/rivals | No |
| Acquired Relationships | d100 each | Relationship hook (pet / telepathy possible) | Occasionally |
| Identities | d100 each | Stat block; ★ = fateful moment (30%) | Yes |
| Fateful Moments | d20 each | Proficiencies / feats / items / companions | **Yes, the main source** |
| Favourite Food | d8 | Dish or drink | No |
| Mysterious Secret | d20 | Plot hook | No |
| Prophecy | Player-written (or d20) | 3 goals + temporary rewards | Yes (minor) |

### Known gaps in the original (for our rework)

- **No class step**, even though the intro says you start without a race, class or background.
- **No Revelry or Xarzith Kitril column** on the Social Status table. Only Uthodurn gets a special rule (swap allies and rivals).
- **Eiselcross is excluded** entirely.
- **Family Size covers only villages and cities.** Towns, outposts and nomadic groups aren't covered.
- **A d3 family relationship roll can exceed your family size** (e.g. 0 parents and 0 siblings). There's no rule for this.
- **Fateful Moment 1 and 3** tell you to roll on the Identities table, but don't say whether a ★ result there grants *another* fateful moment.
- **The Social Status table header says "d20"** but it's a lookup keyed by background, not a roll.
