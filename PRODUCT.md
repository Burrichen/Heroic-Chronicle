# Product

<!-- impeccable:product-schema 1 -->

## Platform

web (packaged as a desktop app)

## Stack

React 18 + TypeScript + Vite, in `app/` (proposed by the developer, confirmed by the owner). Packaged as a desktop application with **Tauri**, wrapping the web build.

## Purpose

A guided runner for the Heroic Chronicle backstory system: a sequence of dice tables that builds a character's homeland, family, allies and rivals, formative events, secrets and prophecy goals. The app removes the page-flipping and bookkeeping (which table comes next, which column applies, how many allies, whether a fateful moment was earned) so the table can focus on the story.

## Users and situation

- **Primary:** a DM and their players together, at a session zero, usually around one shared desktop screen. Several people read the screen at once, often from a distance.
- Each step is a group moment: someone rolls, the table reacts, the result is discussed.

## Core jobs

1. Step through the chronicle one decision at a time, either rolling a virtual die, choosing a result from the table, or typing a physical die's number.
2. Run the whole chronicle automatically when the group wants a fast random character.
3. Review the finished chronicle in the app, name the character, and save it as a Markdown (`.md`) file. Viewing in the app and saving as `.md` are the only export paths for now.

## Constraints and product truths

- **Ease of use comes first** (owner's instruction).
- Content must stay faithful to the source tables: roll ranges and mechanical effects are not altered in the original chronicle.
- The original Heroic Chronicle (Wildemount) is the first chronicle. A reworked version will follow and must plug into the same app without a rewrite.
- Default to dark mode; a light mode is also offered.
- No visible attribution to AI tools in the product or repository.

## Devices

Mostly desktop. Smaller windows and phones should still work.

## Open decisions

None recorded.
