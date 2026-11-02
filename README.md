# Mechanics Atlas

Short, watch-and-learn animated explainers of the mechanics tabletop games are built from.
Made for GAME 121 · Introduction to Game Development (SCAD, Prof. Wan Chiu).

**Open `index.html`** — or visit the live site (GitHub Pages).

- 29 mechanics in 5 families (3 more planned): Chance & Risk, Card Systems, Board & Space, Economy & Actions, Player Interaction.
- Each animation sits beside designer's notes: what to watch for, its anatomy (Fullerton's formal elements,
  *Game Design Workshop* ch. 3), what it feels like, and games that use it.
- Step with click / Space / →, back with ←, or press **Auto-play**. "Watch them all in order" plays the full tour.
- Works fully offline: no build step, no internet needed. Copy the folder and open `index.html`.

## Files
| Path | What it is |
|---|---|
| `index.html` | Hub: all mechanics by family |
| `watch.html` | Player: animation + designer's notes (`?id=<mechanic>`) |
| `mechanics.js` | All mechanic data and notes (edit text here) |
| `mechanics/*.html` | One self-contained animation per mechanic |
| `atlas-bridge.js`, `atlas.css` | Player ↔ animation messaging; shell styles |
| `fonts/` | Local font files (SIL Open Font License) |
| `ANIMATION_CONTRACT.md` | Format every new animation must follow |
| `tools/check_animation.py` | Headless check: steps, errors, clipped text, contact sheet (needs Playwright + Pillow) |

## Adding a mechanic
Entries with `file: null` in `mechanics.js` show as "Coming soon" and carry a `brief`.
Build `mechanics/<id>.html` per `ANIMATION_CONTRACT.md`, add anatomy / feel / minutes, set `file`, then run
`python3 tools/check_animation.py mechanics/<id>.html out.png`.

Example games are named for teaching purposes only; all animation content uses original themes.
