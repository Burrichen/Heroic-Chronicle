---
name: Heroic Chronicle
description: A guided backstory runner, set as a moss-grown monument whose dice tables are inscribed in stone.
colors:
  ground: "#1d211f"
  ground-2: "#222724"
  stone: "#282e2a"
  stone-2: "#2f3631"
  stone-3: "#363e38"
  line: "#3a433d"
  line-strong: "#56625a"
  text: "#e3e7dd"
  text-2: "#b4bdb0"
  text-3: "#97a294"
  moss: "#93b977"
  moss-hover: "#a6c98b"
  moss-ink: "#142010"
  moss-wash: "rgb(147 185 119 / 0.13)"
  moss-wash-strong: "rgb(147 185 119 / 0.24)"
  moss-deep: "#3f5a31"
  moss-mid: "#5d7f45"
  moss-tip: "#7d9c55"
  rust: "#d98f68"
  rust-wash: "rgb(217 143 104 / 0.13)"
  lichen: "#dcc56e"
  lichen-wash: "rgb(220 197 110 / 0.12)"
  limestone-ground: "#e4e3d9"
  limestone-ground-2: "#dadacd"
  limestone-stone: "#efeee6"
  limestone-stone-2: "#e6e5da"
  limestone-stone-3: "#dcdccf"
  limestone-line: "#c6c7b8"
  limestone-line-strong: "#9fa391"
  limestone-text: "#1f2521"
  limestone-text-2: "#465049"
  limestone-text-3: "#5f685d"
  limestone-moss: "#4c7638"
  limestone-moss-hover: "#3f6630"
  limestone-moss-ink: "#f4f7ef"
  limestone-moss-wash: "rgb(76 118 56 / 0.1)"
  limestone-moss-wash-strong: "rgb(76 118 56 / 0.2)"
  limestone-moss-deep: "#6c8d55"
  limestone-moss-mid: "#87a868"
  limestone-moss-tip: "#a5bf7e"
  limestone-rust: "#9b4b26"
  limestone-rust-wash: "rgb(155 75 38 / 0.09)"
  limestone-lichen: "#7f6408"
  limestone-lichen-wash: "rgb(160 128 20 / 0.11)"
typography:
  display:
    fontFamily: "Marcellus, 'Iowan Old Style', Georgia, serif"
    fontSize: "clamp(2.6rem, 6vw, 4.4rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "0.01em"
  headline:
    fontFamily: "Marcellus, 'Iowan Old Style', Georgia, serif"
    fontSize: "clamp(1.9rem, 3.2vw, 2.6rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "0.01em"
  numeral:
    fontFamily: "Marcellus, 'Iowan Old Style', Georgia, serif"
    fontSize: "3.1rem"
    fontWeight: 400
    lineHeight: 1
  title:
    fontFamily: "Marcellus, 'Iowan Old Style', Georgia, serif"
    fontSize: "1.7rem"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "0.01em"
  title-sm:
    fontFamily: "Marcellus, 'Iowan Old Style', Georgia, serif"
    fontSize: "1.15rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.04em"
  label-carved:
    fontFamily: "Marcellus, 'Iowan Old Style', Georgia, serif"
    fontSize: "0.95rem"
    fontWeight: 400
    letterSpacing: "0.06em"
  body-lead:
    fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "'cv11', 'ss01'"
  body:
    fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "'cv11', 'ss01'"
  body-sm:
    fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.84rem"
    fontWeight: 400
    lineHeight: 1.45
    fontFeature: "'cv11', 'ss01'"
  label:
    fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.92rem"
    fontWeight: 500
    lineHeight: 1
  caption:
    fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.78rem"
    fontWeight: 400
    lineHeight: 1.55
  badge:
    fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.72rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.02em"
rounded:
  sm: "4px"
  md: "6px"
  pill: "999px"
spacing:
  control-gap: "0.6rem"
  panel: "1.1rem 1.2rem"
  slab: "1.3rem 1.4rem"
  grid-gap: "1.2rem"
  row: "0.62rem 1rem"
  main: "2.4rem clamp(1.25rem, 4vw, 3.5rem) 4rem"
  rail-width: "300px"
  measure: "44rem"
  content-max: "62rem"
components:
  button-primary:
    backgroundColor: "{colors.moss}"
    textColor: "{colors.moss-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "0.55rem 1.05rem"
    height: "2.6rem"
  button-primary-hover:
    backgroundColor: "{colors.moss-hover}"
    textColor: "{colors.moss-ink}"
  button-primary-lg:
    backgroundColor: "{colors.moss}"
    textColor: "{colors.moss-ink}"
    rounded: "{rounded.md}"
    padding: "0.8rem 1.4rem"
    height: "3.2rem"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "0.55rem 1.05rem"
    height: "2.6rem"
  button-secondary-hover:
    backgroundColor: "{colors.stone-2}"
    textColor: "{colors.text}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text-2}"
    rounded: "{rounded.md}"
    padding: "0.55rem 1.05rem"
  button-ghost-hover:
    backgroundColor: "{colors.stone-2}"
    textColor: "{colors.text}"
  button-danger:
    backgroundColor: "transparent"
    textColor: "{colors.rust}"
    rounded: "{rounded.md}"
    padding: "0.55rem 1.05rem"
  field:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "0.55rem 0.8rem"
    height: "2.6rem"
  roll-bar:
    backgroundColor: "{colors.stone}"
    rounded: "{rounded.md}"
    padding: "{spacing.panel}"
  result-slab:
    backgroundColor: "{colors.stone}"
    rounded: "{rounded.md}"
    padding: "{spacing.slab}"
  slab-roll:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.moss}"
    typography: "{typography.numeral}"
    rounded: "{rounded.md}"
    size: "6.2rem"
  table-row:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    padding: "{spacing.row}"
  table-row-hover:
    backgroundColor: "{colors.stone-2}"
  table-row-lit:
    backgroundColor: "{colors.moss-wash-strong}"
  table-row-chosen:
    backgroundColor: "{colors.moss-wash}"
    textColor: "{colors.moss}"
  badge:
    backgroundColor: "{colors.moss-wash}"
    textColor: "{colors.moss}"
    typography: "{typography.badge}"
    rounded: "{rounded.pill}"
    padding: "0.15rem 0.5rem"
  badge-star:
    backgroundColor: "{colors.lichen-wash}"
    textColor: "{colors.lichen}"
  badge-rival:
    backgroundColor: "{colors.rust-wash}"
    textColor: "{colors.rust}"
  summary-section:
    backgroundColor: "{colors.stone}"
    rounded: "{rounded.md}"
  rail:
    backgroundColor: "{colors.ground-2}"
    textColor: "{colors.text-2}"
    width: "{spacing.rail-width}"
---

# Design System: Heroic Chronicle

## Overview

**Creative North Star: "The Moss-Grown Monument"**

The chronicle is a forgotten standing stone: a charcoal slab tinted green by damp, its tables cut into the face, moss creeping in from the edges. Every surface is a piece of that stone. The ground is the darkest layer, working surfaces are slightly raised and lighter, and headings are carved in Marcellus capitals while the reading text stays in plain, very legible Inter. Light mode is the same monument in weathered limestone, not a different world.

The system is built for a group reading one screen from across a table. That sets the scale (an 18px root on desktop), the generous row heights, the tabular figures, and the restraint: one accent family carries all action, and only two other growths (rust and lichen) are allowed to speak, each with one meaning. Texture is generated, never shipped: a soft-light fractal grain covers the whole ground, and turbulence-filtered moss grows from the bottom of the start screen, the foot of the rail and the top-right corner of the main column, thinning to nothing before it reaches the content.

The signature move is the roll. A moss light sweeps down the actual table rows, slowing as it goes, settles on the result, and the result is carved into a raised slab above the table: a big Marcellus numeral on a sunken ground plate, then the outcome as a title.

**Key Characteristics:**
- Moss-tinted charcoal stone (dark, default) and weathered limestone (light), both from one token set.
- Carved Marcellus for headings, captions and numerals; Inter for everything read at length.
- Moss for action, allies and "now"; rust for rivals and danger; lichen for star results and boons.
- Hairline stone borders and tonal layers; a soft shadow only on the surface being worked.
- Generated grain and moss growth at the edges; nothing ornamental inside the content.
- The table is always visible: rolling, choosing and typing a number all land on the same row.

## Colors

A low-chroma green-grey stone ramp with one moss accent family and two single-purpose growths. All values are CSS custom properties on the root, switched by `data-theme`; the `limestone-` tokens are the light-mode values of the same roles.

### Primary
- **Living Moss** (moss): the one action colour. Filled primary buttons, the focus ring, the input caret, the current-step pip, completed-section dots, the chosen table row, the slab numeral, the start mark and its choice icons, ally labels in the summary. In light mode it deepens to Shaded Moss (limestone-moss) so it holds contrast on pale stone.
- **New Growth** (moss-hover): hover state of filled moss buttons only.
- **Moss Ink** (moss-ink): text on filled moss. Near-black in dark mode, near-white in light mode.
- **Moss Washes** (moss-wash, moss-wash-strong): translucent moss for the chosen row (light wash), the sweeping highlight, focus halos, the current-step ring and text selection (strong wash).
- **Moss Growth Layers** (moss-deep, moss-mid, moss-tip): the three flood colours of the generated moss SVG, darkest to brightest. Decorative growth only; never used on controls or text.

### Secondary
- **Iron Stain** (rust): rivals, the "Nuisance" badge, roll errors and the destructive Start Over button. Each use means opposition or loss.

### Tertiary
- **Yellow Lichen** (lichen): star results ("Powerful" badges, rendered with a filled star icon) and the Mechanical Benefits section, whose border is mixed 40% lichen into the line colour.

### Neutral
- **Deep Ground** (ground): the page, the slab numeral plate and input wells. Inputs sit lower than the stone around them.
- **Rail Ground** (ground-2): the chronicle rail, one step up from the page.
- **Worked Stone** (stone): every raised surface: roll bar, result slab, info card, goal cards, summary sections, start choices, rail confirm.
- **Lit Stone** (stone-2): hover fill for rows, buttons, rail entries and start choices.
- **Stone 3** (stone-3): reserved third layer; defined in both themes, rarely used.
- **Hairline** (line): default borders and row dividers.
- **Cut Line** (line-strong): borders that must read as edges: outline buttons, inputs, the result slab, start choices, kbd caps, scrollbar hover.
- **Bone** (text), **Lichen Grey** (text-2), **Weathered Grey** (text-3): primary text, secondary text and details, captions, ranges and hints. Text-3 is the floor; nothing quieter is used for text.

### Named Rules
**The Three Growths Rule.** Moss means act, ally, or "this one". Rust means rival or loss. Lichen means a star result or a boon. No colour outside these three carries meaning, and none of them is used for decoration on controls or text.

**The One Filled Stone Rule.** Each working surface has at most one filled moss button (Roll, Continue, Save as .md). Everything else is an outline, ghost or danger button.

**The Same Stone Rule.** Light mode swaps values, never roles. Any new token is defined in both theme blocks.

## Typography

**Display Font:** Marcellus 400 (with 'Iowan Old Style', Georgia, serif), self-hosted
**Body Font:** Inter 400/500/600 (with system-ui, -apple-system, 'Segoe UI', sans-serif), self-hosted, with `cv11` and `ss01` on

**Character:** Marcellus is the inscription: flared, chiselled capitals that read as cut stone without turning into fantasy lettering. Inter does the reading, sized up for a screen several people share.

### Hierarchy
- **Display** (Marcellus 400, clamp 2.6–4.4rem, 1.02): the chronicle name on the start screen only.
- **Hero name** (Marcellus 400, clamp 2.2–3.6rem, 1.1): the summary's name field, an underlined input set in the display face.
- **Headline** (Marcellus 400, clamp 1.9–2.6rem, 1.1): the step question ("Where were you born?").
- **Numeral** (Marcellus 400, 3.1rem, 1; 2.4rem under 820px): the carved roll in the result slab. Word results drop to 1rem uppercase with 0.08em tracking.
- **Title** (Marcellus 400, 1.7rem, 1.15): the result title in the slab. Goal cards use 1.25rem, start choices 1.45rem, rail title 1.35rem.
- **Title small** (Marcellus 400, 1.15rem, 0.04em): summary section headings, in sentence case.
- **Carved label** (Marcellus 400, 0.95rem, 0.06em, uppercase): rail section names and table captions. These name the content they head; they are the only uppercase in the system besides the word-result numeral.
- **Body lead** (Inter 400, 1.05rem; 1.1rem on the start lede): step intro and start lede, capped at 44rem and 34rem.
- **Body** (Inter 400, 1rem on an 18px root, 1.55): row labels (500), summary values, info lines, capped near 46rem.
- **Body small** (Inter 400, 0.84rem, 1.45): row details and summary details.
- **Label** (Inter 500, 0.92rem, 1; 600 on filled buttons): buttons.
- **Caption** (Inter 400, 0.78–0.85rem): hints, keyboard help, rail subtitle, notes, table ranges.
- **Badge** (Inter 600, 0.72rem, 0.02em): inline result badges.

### Named Rules
**The Carved and Written Rule.** Marcellus is only ever set at weight 400 and only for things that would be cut into the stone: titles, headings, section names, numerals, the hero's name. Anything read as a sentence is Inter.

**The Tabular Count Rule.** Roll ranges, numeric inputs and counts use tabular lining figures so columns of ranges align down the table.

## Layout

A two-column shell: a sticky, full-height rail (300px) on the left and a main column with a 62rem content cap, padded 2.4rem top, a fluid 1.25–3.5rem sides and 4rem bottom. The step reads top to bottom in one column: headline and intro (capped at 44rem), then the action zone (roll bar or result slab), then the full table. The summary uses a two-column grid of section cards with a 1.2rem gap; wide sections span both columns. The start screen is a single centred column, 44rem wide, vertically centred in the viewport.

Spacing is set in rem against the 18px root and is not a formal scale; the recurring values are 0.6rem between controls, 1.1–1.4rem panel padding, 1.2rem between cards, 1.6–1.8rem between step blocks. Table rows use a 4.2rem range column and a flexible label column; summary items a 9rem term column; rail entries a 5.4rem key column.

Responsive behaviour has two steps. At 980px and below, the summary grid and two-column tables become single columns. At 820px and below, the root drops to 16px, the rail becomes a top bar with a collapsible progress strip (section dots, current step, count, chevron), the moss growth is hidden, the slab stacks its numeral above the text, the start choices and goal fields stack, and keyboard hints are hidden. Print hides the rail, actions, grain and moss and resets the palette to black on white.

## Elevation & Depth

Depth is mostly tonal: ground, rail ground and stone are three close steps of the same green-grey, separated by 1px hairlines. One soft two-part shadow exists, and it lifts only the surface the group is acting on: the roll bar, the result slab, the info card and the start choices. Reference material (the table, summary sections, goal cards) lies flat. Input wells and the slab numeral plate go the other way and use the darker ground colour to read as cut into the stone.

### Shadow Vocabulary
- **Slab lift, dark** (`box-shadow: 0 1px 1px rgb(0 0 0 / 0.25), 0 8px 24px -8px rgb(0 0 0 / 0.5)`): the working surface in dark mode.
- **Slab lift, limestone** (`box-shadow: 0 1px 1px rgb(40 45 30 / 0.08), 0 8px 24px -10px rgb(40 45 30 / 0.25)`): the same surface in light mode, tinted to the stone.
- **Moss halo** (`box-shadow: 0 0 0 3px var(--moss-wash-strong)`): field focus, the current-section dot and the "In progress" pip. 2px on the mobile strip dots.

### Named Rules
**The Raised Slab Rule.** A shadow means "act here". Only the surface the group is currently working on is lifted; everything it refers to stays flat on the stone.

## Shapes

Gently squared stone: 6px corners on every surface, button and input, 4px on small interactive items (rail entries, kbd caps, focus outlines). Fully round only for status dots and badges. Borders are always 1px hairlines; the chosen table row gets a 1px moss bar on its left edge rather than a heavy border, and the hero name is an underline rather than a box. Keyboard caps have a 2px bottom border so they read as physical keys. Containers with dividers clip their contents to the corner radius.

## Components

### Buttons
Quiet stone with one moss voice.
- **Shape:** gently squared (6px), 1px border, minimum 2.6rem tall; large buttons 3.2rem with 1.05rem text. Icons at 1.1em sit before the label with a 0.5em gap.
- **Primary:** filled moss with moss-ink text, weight 600. Used for Roll, Continue, Save as .md and confirmations, almost always at the large size.
- **Secondary (default):** transparent with a cut-line border and full-strength text (Roll again, Use this number, rail confirm Cancel).
- **Ghost:** no border, secondary text, brightening on hover (theme toggle, Back, Roll the rest for me).
- **Danger:** rust text with a 55% rust border (Start over confirmation).
- **Hover / Active / Focus:** hover fills with lit stone (primary brightens to new growth); press nudges down 1px; focus shows a 2px moss outline at 2px offset. All transitions 160ms on the stone ease. Disabled drops to 45% opacity.

### Inputs / Fields
- **Style:** a sunken well in deep ground with a cut-line border, 6px corners, 0.95rem text, moss caret. The number field is 7.5rem wide, centred, tabular, without spin buttons. Text areas resize vertically.
- **Focus:** border turns moss and a 3px moss halo appears; no outline.
- **Hero name:** a borderless display-size Marcellus field with only a cut-line underline that turns moss on focus.

### Table (signature)
The actual dice table, inscribed. A flat container with a hairline border and a header strip: carved uppercase table name on the left, die size on the right. Each row is a full-width button: range in caption-size tabular figures, label in Inter 500, detail beneath in body small. Hover lights the row with lit stone. During a roll the swept row takes the strong moss wash with no transition, so the light hops crisply. The chosen row keeps a light moss wash, moss range and label, and a 1px moss bar on its left edge; other rows dim to 50% when a choice is locked. Long tables split into two columns above 980px.

### Roll Bar and Result Slab (signature)
- **Roll bar:** a raised stone panel holding the primary Roll button, "or type your roll" with a number field, and keyboard hints right-aligned.
- **Result slab:** replaces the roll bar once a result is in. A raised stone panel with a cut-line border; on the left a 6.2rem square plate in deep ground with the roll carved in a moss Marcellus numeral; on the right the result title, detail and sub-note; beneath a hairline, the actions (Continue, Roll again) with keyboard hints and "Roll the rest for me" pushed right. It arrives with a 420ms rise of 6px on the stone ease, and its numeral greys while the sweep is still running.

### Badges
Small pills inline with a result title: moss wash for neutral tags, lichen wash with a filled star icon for "Powerful" results, rust wash for nuisances.

### Navigation (the chronicle rail)
The rail is the inscription growing as the chronicle is written. Title in Marcellus, subtitle as a caption, then the six sections as carved uppercase labels with a status dot: hollow (to come), moss-ringed (current, with a "In progress" moss pip), filled moss (done). Finished entries sit beneath each section on a hairline spine as key/value rows; clicking one opens an inline confirm panel before revisiting, since revisiting clears later steps. The foot holds the theme toggle and Start over on a frosted strip (82% rail ground, 6px blur). Moss grows from the bottom of the rail at 60% opacity. Under 820px the rail collapses to a tappable progress strip.

### Summary Sections
Flat stone cards with a hairline border and a sentence-case Marcellus heading on a divided header. Items are term/definition rows (9rem term column) with fading dividers; terms are coloured by tone (moss ally, rust rival, lichen boon) and default to weathered grey. The boons section takes a lichen-tinted border and heading.

### Start Choices
Two equal options joined in one raised panel, split by a hairline: a moss icon, a Marcellus title and an Inter description. Hover lights the stone and turns the title moss. Stacks under 820px.

## Do's and Don'ts

### Do:
- **Do** define every new colour in both the dark and the limestone theme blocks, by role.
- **Do** keep moss, rust and lichen to their single meanings: action and allies, rivals and loss, stars and boons.
- **Do** show the whole table on every rolling step and land rolls, choices and typed numbers on the same row.
- **Do** set titles, section names and numerals in Marcellus 400, and anything read as a sentence in Inter.
- **Do** use tabular figures for ranges, counts and number inputs.
- **Do** lift only the surface being acted on with the slab shadow; leave reference surfaces flat.
- **Do** generate texture (grain, moss) with SVG turbulence from the theme tokens, kept to the edges, hidden on small screens and in print.
- **Do** honour reduced motion: the sweep resolves instantly and transitions collapse to 1ms.

### Don't:
- **Don't** add a fourth accent or use moss, rust or lichen as decoration on controls or text.
- **Don't** let moss growth sit behind reading text; it roots at an edge and fades out before the content.
- **Don't** use more than one filled moss button on a working surface.
- **Don't** set Marcellus bold, or use it for body copy, button labels or hints.
- **Don't** use thick borders or side stripes wider than the 1px chosen-row bar.
- **Don't** set text quieter than Weathered Grey (text-3).
- **Don't** ship raster textures; the stone and moss are generated.
