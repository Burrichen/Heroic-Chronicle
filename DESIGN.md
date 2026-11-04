---
name: Heroic Chronicle
description: A guided backstory runner, set as a clean heraldic codex where every roll is blazoned on a gold-rimmed shield.
colors:
  ground: "#1b1e1d"
  ground-2: "#1f2322"
  panel: "#242927"
  panel-2: "#2b312e"
  line: "#3a413d"
  line-strong: "#4f5853"
  text: "#ebece5"
  text-2: "#bcc1b7"
  text-3: "#969c92"
  vert: "#2f7a4f"
  vert-hover: "#378b5b"
  vert-ink: "#f3f5ef"
  vert-text: "#79c393"
  vert-wash: "rgb(121 195 147 / 0.1)"
  vert-wash-strong: "rgb(121 195 147 / 0.2)"
  or: "#d1ad60"
  or-line: "rgb(209 173 96 / 0.45)"
  or-faint: "rgb(209 173 96 / 0.22)"
  or-wash: "rgb(209 173 96 / 0.12)"
  gules: "#e8846f"
  gules-wash: "rgb(232 132 111 / 0.13)"
  argent-ground: "#e6e8eb"
  argent-ground-2: "#dcdfe3"
  argent-panel: "#f4f5f7"
  argent-panel-2: "#eaecef"
  argent-line: "#c7cbd1"
  argent-line-strong: "#a0a6ae"
  argent-text: "#1b201d"
  argent-text-2: "#434a45"
  argent-text-3: "#5d655e"
  argent-vert: "#2c6e47"
  argent-vert-hover: "#245c3b"
  argent-vert-ink: "#f6f8f3"
  argent-vert-text: "#2a6a44"
  argent-vert-wash: "rgb(44 110 71 / 0.08)"
  argent-vert-wash-strong: "rgb(44 110 71 / 0.17)"
  argent-or: "#8a6a1c"
  argent-or-line: "rgb(138 106 28 / 0.45)"
  argent-or-faint: "rgb(138 106 28 / 0.22)"
  argent-or-wash: "rgb(160 124 30 / 0.1)"
  argent-gules: "#a23a2f"
  argent-gules-wash: "rgb(162 58 47 / 0.08)"
typography:
  display:
    fontFamily: "Alegreya, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(2.8rem, 6vw, 4.6rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  hero-name:
    fontFamily: "Alegreya, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(2.4rem, 4.8vw, 3.7rem)"
    fontWeight: 500
    lineHeight: 1.1
  headline:
    fontFamily: "Alegreya, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(2rem, 3.3vw, 2.7rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.005em"
  shield-figure:
    fontFamily: "Alegreya, Iowan Old Style, Georgia, serif"
    fontSize: "2.35rem"
    fontWeight: 600
    lineHeight: 1
    fontFeature: "tnum, lnum"
  title:
    fontFamily: "Alegreya, Iowan Old Style, Georgia, serif"
    fontSize: "1.85rem"
    fontWeight: 500
    lineHeight: 1.12
  title-sm:
    fontFamily: "Alegreya, Iowan Old Style, Georgia, serif"
    fontSize: "1.3rem"
    fontWeight: 500
    lineHeight: 1.1
  label-caption:
    fontFamily: "Alegreya SC, Alegreya, Georgia, serif"
    fontSize: "1.02rem"
    fontWeight: 500
    letterSpacing: "0.04em"
  label-sm:
    fontFamily: "Alegreya SC, Alegreya, Georgia, serif"
    fontSize: "0.88rem"
    fontWeight: 500
    letterSpacing: "0.03em"
  body-lead:
    fontFamily: "Alegreya Sans, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Alegreya Sans, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: "Alegreya Sans, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 400
    lineHeight: 1.45
  button:
    fontFamily: "Alegreya Sans, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.01em"
  caption:
    fontFamily: "Alegreya Sans, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 400
  badge:
    fontFamily: "Alegreya Sans, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.74rem"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "0.02em"
rounded:
  frame: "4px"
  inner: "2px"
  pill: "999px"
components:
  button-primary:
    backgroundColor: "{colors.vert}"
    textColor: "{colors.vert-ink}"
    rounded: "{rounded.frame}"
    padding: "0.55rem 1.05rem"
    height: "2.6rem"
  button-primary-hover:
    backgroundColor: "{colors.vert-hover}"
  button-primary-lg:
    backgroundColor: "{colors.vert}"
    textColor: "{colors.vert-ink}"
    rounded: "{rounded.frame}"
    padding: "0.8rem 1.4rem"
    height: "3.1rem"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.frame}"
    padding: "0.55rem 1.05rem"
    height: "2.6rem"
  button-secondary-hover:
    backgroundColor: "{colors.panel-2}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text-2}"
    rounded: "{rounded.frame}"
    padding: "0.55rem 1.05rem"
  button-danger:
    backgroundColor: "transparent"
    textColor: "{colors.gules}"
    rounded: "{rounded.frame}"
    padding: "0.55rem 1.05rem"
  field:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.text}"
    rounded: "{rounded.frame}"
    padding: "0.55rem 0.8rem"
    height: "2.6rem"
  roll-bar:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.frame}"
    padding: "1rem 1.15rem"
  result-slab:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.text}"
    rounded: "{rounded.frame}"
    padding: "1.5rem 1.6rem 1.4rem"
  shield:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.text}"
    width: "5.4rem"
    height: "5.94rem"
  table-caption:
    backgroundColor: "{colors.panel-2}"
    textColor: "{colors.text}"
    typography: "{typography.label-caption}"
    padding: "0.7rem 1rem"
  table-row:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    padding: "0.62rem 1rem"
  table-row-lit:
    backgroundColor: "{colors.vert-wash-strong}"
  table-row-chosen:
    backgroundColor: "{colors.vert-wash}"
    textColor: "{colors.vert-text}"
  table-row-rival-lit:
    backgroundColor: "{colors.gules-wash}"
  badge:
    backgroundColor: "{colors.vert-wash}"
    textColor: "{colors.vert-text}"
    typography: "{typography.badge}"
    rounded: "{rounded.pill}"
    padding: "0.1rem 0.5rem"
  badge-star:
    backgroundColor: "{colors.or-wash}"
    textColor: "{colors.or}"
  badge-rival:
    backgroundColor: "{colors.gules-wash}"
    textColor: "{colors.gules}"
  rail:
    backgroundColor: "{colors.ground-2}"
    textColor: "{colors.text-2}"
    width: "300px"
  progress-track:
    backgroundColor: "{colors.ground}"
    rounded: "{rounded.pill}"
    height: "0.5rem"
  progress-fill:
    backgroundColor: "{colors.vert}"
  summary-section:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.frame}"
  name-field:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    typography: "{typography.hero-name}"
    padding: "0.1rem 0 0.4rem"
---

# Design System: Heroic Chronicle

## Overview

**Creative North Star: "The Clean Heraldic Codex"**

The chronicle is a book of arms kept by a careful herald: a charcoal field, a few tinctures that each mean one thing, gold used as the metal that frames what matters, and a shield on which every roll is blazoned. The fantasy lives in the tinctures, the frames and the shield. It does not live in texture or ornament spread across every surface. Everything that is read at length stays in a plain, highly legible humanist sans; the serif is kept for the questions, the results and the names.

The system is built for a group reading one desktop screen from across a table, in evening light. That sets the 18px root (16px on narrow windows), the generous row heights, the tabular figures in ranges and counts, and the restraint: green (vert) carries action, allies and progress; gold (or) frames, rims and marks boons and "now"; red (gules) marks rivals and loss; argent is the text. Light mode is the same codex on cool silver-stone, never cream.

The signature move is the landing. A light hops across the actual table rows, slowing as it goes, and settles; the result then stamps into a gold-rimmed shield inside a framed slab, the rim drawing itself in as the shield settles. The rest of the interface stays flat and quiet so that moment reads.

**Key Characteristics:**
- Charcoal field (dark, default) and cool argent silver-stone (light) from one set of role tokens.
- Tinctures with fixed roles: vert = action, allies, progress; or = frames, the shield, boons, "now"; gules = rivals and danger; argent = text.
- Alegreya for questions, results and names; Alegreya SC for labels and captions; Alegreya Sans for everything read as a sentence.
- Hairline panels on a flat field; only three framed panels carry the gold inner rule, depth and corner ornaments.
- The roll lands in a gold-rimmed heater shield; the crest is the same shield bearing a die.
- The table is always visible: rolling, choosing and typing a number all land on the same row.

## Colors

A charcoal field with three heraldic tinctures, each holding one meaning, and argent for reading.

### Primary
- **Vert** (`vert`; light `argent-vert`): the one filled action per surface (Roll, Continue, Save as .md, Redo from here), the progress fill, and the crest's field. Text on it is **Vert Ink** (`vert-ink`).
- **Vert Text** (`vert-text`; light `argent-vert-text`): readable green for chosen row range and label, finished-chapter lozenges in the rail, ally captions and ally labels in the summary, saved status, and the hover tint on start-choice titles.
- **Vert Washes** (`vert-wash`, `vert-wash-strong`): the chosen row fill and the swept (lit) row fill respectively; also text selection.

### Secondary
- **Or, the Metal** (`or`; light `argent-or`): the shield rim, crest chevron and rim, corner ornaments, divider lozenge, the chosen-row bar, the current-chapter lozenge and "In progress" pip in the rail, the progress percentage, the hero-name underline, the focus ring and input caret, star badges and the boons section.
- **Or Line / Or Faint / Or Wash** (`or-line`, `or-faint`, `or-wash`): the divider hairlines and boons border; the inner frame rule and shield inner line; star-badge fill and field focus halo.

### Tertiary
- **Gules** (`gules`; light `argent-gules`): rivals and danger only. Rival table captions and their underline, the rival chosen-row bar, rival summary labels, Nuisance badges, roll errors, and the danger button.
- **Gules Wash** (`gules-wash`): rival badge fill and the lit row in a rival table.

### Neutral
- **Field** (`ground`; light `argent-ground`, cool #e6e8eb): page background, sunken wells (fields, progress track) and the shield's own field.
- **Rail Field** (`ground-2`): the rail, one step off the page; also the chapter tick colour cutting the progress track.
- **Panel / Panel Raised** (`panel`, `panel-2`): every working surface; `panel-2` is caption bands and hover fills.
- **Hairline / Cut Line** (`line`, `line-strong`): row dividers and panel edges; stronger edges for framed panels, controls and caption underlines.
- **Argent Text ramp** (`text`, `text-2`, `text-3`): primary reading, secondary detail, and the quietest permitted text (hints, ranges, placeholders).

### Named Rules
**The Fixed Tincture Rule.** Vert means act, ally or progress. Or means frame, metal, boon or "now". Gules means rival or loss. No other hue carries meaning, and none of the three is spent on decoration of text or controls outside those roles.

**The One Filled Vert Rule.** Each working surface has at most one filled vert button. Everything else is outline, ghost or danger.

**The Argent Not Cream Rule.** Light mode swaps values, never roles, and stays cool silver-stone (ground #e6e8eb). Any new token is defined in both theme blocks.

## Typography

**Display Font:** Alegreya (with Iowan Old Style, Georgia, serif)
**Label Font:** Alegreya SC (with Alegreya, Georgia, serif)
**Body Font:** Alegreya Sans (with system-ui, -apple-system, Segoe UI, sans-serif)

All three are self-hosted (Alegreya 500/600, Alegreya SC 500, Alegreya Sans 400/500/700). Only those weights exist; do not request others.

**Character:** A calligraphic book serif for what would be lettered into a codex, its own small capitals for rubric-like labels, and the matching humanist sans so long reading never fights the ornament.

### Hierarchy
- **Display** (Alegreya 500, clamp(2.8rem, 6vw, 4.6rem), 1.02): the chronicle name on the start screen only.
- **Hero Name** (Alegreya 500, clamp(2.4rem, 4.8vw, 3.7rem), 1.1): the editable hero name on the summary, set over a solid 1px or rule.
- **Headline** (Alegreya 500, clamp(2rem, 3.3vw, 2.7rem), 1.08): the step question.
- **Shield Figure** (Alegreya 600, 2.35rem, 1, tabular lining): the roll inside the shield; the only 600 in the system. Word figures (Chosen, d100) drop to Alegreya SC 500 0.82rem.
- **Title** (Alegreya 500, 1.85rem, 1.12): the result beside the shield. Start-choice titles (1.5rem) and goal and rail titles (1.3rem) sit in the same family and weight.
- **Label Caption** (Alegreya SC 500, 1rem–1.1rem, 0.04em): table captions, rail chapter names, summary section headings. Small capitals from the face, never forced uppercase.
- **Label Small** (Alegreya SC 500, 0.88rem, 0.03em): the chapter readout above the progress bar and the mobile strip label.
- **Body Lead** (Alegreya Sans 400, 1.1rem): step intro and start lede (1.15rem); max 44rem / 34rem.
- **Body** (Alegreya Sans 400, 1rem, 1.5): row labels (500, 1.04rem), summary values, info lines; reading width capped at 46rem.
- **Body Small** (Alegreya Sans 400, 0.9rem, 1.45): row and summary details, notes.
- **Button** (Alegreya Sans 500, 0.95rem, 1, 0.01em; 700 on filled vert).
- **Caption** (Alegreya Sans 400, 0.82rem–0.86rem): hints, keyboard help, rail entries, ranges.
- **Badge** (Alegreya Sans 700, 0.74rem, 0.02em).

### Named Rules
**The Lettered and Read Rule.** Alegreya and Alegreya SC are for what a herald would letter: questions, results, names, chapter names, captions. Anything read as a sentence, every button and every hint is Alegreya Sans.

**The Tabular Count Rule.** Roll ranges, the shield figure, numeric inputs, the die label and percentages use tabular lining figures so ranges align down the table.

## Layout

A two-column shell: a sticky 300px rail (full viewport height, its own scroll) and a main column with padding 2.2rem clamp(1.25rem, 4vw, 3.5rem) 4rem and content capped at 62rem, centred. The step reads top to bottom: back/auto bar, question and intro, an action zone (roll bar or result slab, 1.8rem above and 1.4rem below), then the whole table.

The start screen is a single centred column (44rem max) on a soft radial lift of `panel` into `ground`: crest (4.4rem), display title, the ornamental divider (15rem), lede, then the two start choices side by side inside one framed panel, split by a hairline.

The summary is a framed header (crest column 5rem, then the hero name, a line of context and actions) above a two-column grid of hairline sections (1.2rem gaps); some sections span both columns.

Responsive: at 980px the summary grid and two-column tables collapse to one column. At 820px the root drops to 16px, the rail stacks above the content and collapses into a strip button (chapter label, the same chaptered track, percentage, chevron) that opens the chronicle to 60vh; the slab and summary header stack, the shield shrinks to 4.4rem, start choices stack with a top hairline, and keyboard hints hide.

## Elevation & Depth

Mostly flat: depth comes from tonal steps (`ground` → `ground-2` → `panel` → `panel-2`) and 1px hairlines. Only framed panels lift, and their lift is a frame first and a shadow second.

### Shadow Vocabulary
- **Soft depth, dark** (`box-shadow: 0 1px 1px rgb(0 0 0 / 0.3), 0 10px 28px -12px rgb(0 0 0 / 0.6)`).
- **Soft depth, argent** (`box-shadow: 0 1px 1px rgb(30 40 30 / 0.06), 0 10px 26px -14px rgb(30 40 30 / 0.3)`).
- **The Frame** (`box-shadow: inset 0 0 0 4px var(--panel), inset 0 0 0 5px var(--or-faint), var(--shadow)`): a 1px gold rule set 4px inside the panel's `line-strong` edge, plus soft depth. Used on the result slab, the start choices and the summary header, and nowhere else.
- **Field focus halo** (`box-shadow: 0 0 0 3px var(--or-wash)`).

### Named Rules
**The Three Frames Rule.** Only the result slab, the start choices and the summary header are framed: gold inner rule, soft depth and four corner ornaments together. Everything else (roll bar, tables, info lines, goals, summary sections, rail confirm) is a flat panel with a hairline.

## Shapes

Gently squared corners (4px) on every panel, control and field; 2px on the start choices inside their frame; full pills only for badges and the progress track. Borders are 1px throughout; the only marks thicker than a hairline are the 2px shield rim, the 3px crest rim and the 2px kbd bottom edge.

The heater shield (viewBox 80×88, flat top, curved point) is the recurring silhouette: the result shield, the small dimmed shield in the roll bar showing the die, and the crest. Diamonds (lozenges) are the secondary form: rail chapter markers, the "In progress" pip, the divider centre, and the pip inside each corner ornament. Corner ornaments are a 14px quarter-curve with a lozenge, inset 6px, rotated per corner, in `or`.

## Components

### Buttons
Calm, squared and confident; colour is reserved for the one act-here button.
- **Shape:** gently squared (4px), 1px border, min height 2.6rem; large 3.1rem with 0.8rem 1.4rem padding and 1.05rem type.
- **Primary:** filled vert with vert-ink, 700 weight. Hover deepens to vert-hover.
- **Secondary:** transparent with a `line-strong` border; hover fills `panel-2`.
- **Ghost:** no border, `text-2`; hover lifts to `text`. Back, Roll the rest for me, theme, Start over.
- **Danger:** gules text with a 55% gules border; only for the "Discard and start over" confirmation.
- **States:** 160ms ease-out on colour, border and transform; press nudges down 1px; disabled at 45% opacity. Focus is a 2px `or` outline, 2px offset. Icons are inline SVG line icons at 1.1em.

### Badges
- **Style:** pill, 700 0.74rem. Default vert-wash with vert-text; star (powerful results) or-wash with an or-faint border and or text; rival (Nuisance) gules-wash with gules text.

### Cards / Containers
- **Corner Style:** 4px.
- **Background:** `panel`; caption bands `panel-2`.
- **Shadow Strategy:** flat, except the three framed panels (see Elevation).
- **Border:** 1px `line`; framed panels `line-strong`.
- **Internal Padding:** 1rem–1.6rem; captions 0.7rem 1rem.

### Inputs / Fields
- **Style:** sunken `ground` well, 1px `line-strong`, 4px, min height 2.6rem; the roll number field is 7rem, centred, tabular. Caret in `or`.
- **Focus:** border turns `or` with a 3px or-wash halo.
- **Hero name:** borderless, transparent, Alegreya at hero-name size over a solid 1px `or` rule; focus thickens the rule to 2px with a 1px `or` shadow below.

### Navigation (the Rail)
- **Head:** the crest (2.4rem) beside the chronicle name (Alegreya 1.3rem) and tagline (caption, `text-3`).
- **Chaptered progress bar:** a Label Small readout ("Chapter 2 of 6") with the percentage in `or`, over a 0.5rem pill track (`ground` well, `line-strong` edge). The vert fill grows over 480ms; 2px ticks in `ground-2` cut the track at each chapter boundary. Progress within a chapter is capped at 90% of that chapter's span, so the fill only crosses a tick when the chapter is complete.
- **Chapters:** Alegreya SC names with a rotated-square lozenge: hollow (`line-strong`) ahead, vert-text filled when done, or filled when current. Text steps `text-3` → `text-2` → `text`.
- **Entries:** under a hairline spine; key/value grid (5.4rem key column), caption size; hover `panel-2`. The current entry shows an or lozenge pip and "In progress". Clicking a past entry opens an inline flat confirm panel with a primary "Redo from here" and a secondary "Keep it".
- **Foot:** ghost theme toggle and Start over, hairline above.
- **Mobile:** collapses to the strip described in Layout.

### Dice Table (signature)
- **Frame:** flat panel with a `panel-2` caption band; caption name in Label Caption, die label at right in `text-3`; caption underline `line-strong`.
- **Rows:** full-width buttons on a 4.2rem range column, label 500 at 1.04rem with a detail line below; hairline dividers; hover `panel-2` over 200ms. Two-column tables split with a vertical hairline.
- **Lit (during the sweep):** vert-wash-strong, no transition, so each hop snaps.
- **Chosen:** vert-wash fill, vert-text range and label, and a 1px `or` bar at the left edge.
- **Tones:** an ally table underlines its caption in vert-text. A rival table underlines its caption in gules, sets the caption name in gules, lights rows in gules-wash and draws the chosen bar in gules.

### Shield and Result Slab (signature)
- **Shield:** heater outline filled `ground`, a 2px `or` rim and a 1px `or-faint` inner line, the figure centred slightly above the point. 5.4rem × 5.94rem in the slab; 2.9rem in the roll bar with an `or-line` rim and a word figure. Dim (figure in `text-3`) while the sweep runs.
- **Slab:** framed panel, shield beside the result title, detail and sub-line; actions below a hairline with a keyboard hint at right.
- **Landing motion:** on mount the shield stamps from scale 1.08 to 1 (320ms), its rim draws in by animating stroke-dashoffset 1 → 0 on a pathLength-1 path (460ms), and the figure rises from opacity 0.55 (320ms). All on ease-out cubic-bezier(0.16, 1, 0.3, 1).
- **Sweep:** 10 hops across candidates; the first after 22ms, each delay ×1.16; the last hop lands on the result, held 160ms before the slab appears. Consecutive hops never repeat a row. Under reduced motion the sweep is skipped and the result appears at once.

### Crest, Corners and Divider
- **Crest:** the shield in vert with an or chevron, a 3px or rim and a die drawn in vert-ink line; used at rail head, start (4.4rem) and summary (5rem; 3.2rem on mobile).
- **Corners:** only on the three framed panels.
- **Divider:** two fading or-line hairlines meeting a small or lozenge; the start screen only.

### Summary Sections
- Flat hairline panels with a `panel-2` heading band in Label Caption; definition rows on a 9rem term column (stacked on mobile) with hairlines between. Term colour follows tone: vert-text for allies, gules for rivals, or for boons. The mechanical-benefits section takes an `or-line` border and or heading when it has entries.

## Do's and Don'ts

### Do:
- **Do** define every new colour in both the dark and argent theme blocks, by role.
- **Do** keep vert, or and gules to their single meanings: action, allies and progress; frames, metal, boons and "now"; rivals and loss.
- **Do** land every result in the gold-rimmed shield inside the framed slab, with the 1.08 stamp, the 460ms rim draw and the 0.55 figure fade.
- **Do** show the whole table on every rolling step and land rolls, choices and typed numbers on the same row.
- **Do** reserve the gold frame, soft depth and corner ornaments for the result slab, the start choices and the summary header.
- **Do** set questions, results, names and captions in Alegreya or Alegreya SC, and anything read as a sentence in Alegreya Sans.
- **Do** use tabular lining figures for ranges, counts, the shield figure and number inputs.
- **Do** honour reduced motion: the sweep resolves instantly and animations and transitions collapse to 1ms.

### Don't:
- **Don't** add a fourth meaningful hue or spend vert, or or gules as decoration.
- **Don't** put more than one filled vert button on a working surface.
- **Don't** let light mode drift warm; argent is cool silver-stone, never cream.
- **Don't** add parchment, scroll, stone or moss textures; the fantasy lives in tinctures, frames and the shield.
- **Don't** frame or add corner ornaments to reference surfaces (tables, summary sections, info lines, goals).
- **Don't** force uppercase on labels; use Alegreya SC's own small capitals.
- **Don't** set text quieter than `text-3`.
- **Don't** use borders thicker than 1px on panels or rows; the chosen-row bar is 1px.
