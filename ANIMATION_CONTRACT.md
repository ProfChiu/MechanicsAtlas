# Mechanics Atlas: animation contract

Every file in `mechanics/` is a self-contained, **watch-and-learn** HTML animation.
The viewer (`watch.html`) shows it in an iframe next to the designer's notes from
`mechanics.js`. No interactive features: the viewer only steps forward and back.

## Must have
- One HTML file, no build step, **nothing loaded from the internet** (the Atlas must run offline).
  Fonts: `<link rel="stylesheet" href="../fonts/fonts.css">` gives Fredoka, Nunito, Cinzel and IM Fell English.
  To add a font, download its woff2 into `fonts/` and add an `@font-face` to `fonts.css`.
- A fixed stage `#stage`, **1280×720**, scaled to fit the window (letterboxed, centred), `overflow:hidden` on body.
- A `steps` array of functions. `steps[i](instant)` applies beat *i* on top of beats 0..i-1.
  `goTo(n)` resets and replays 0..n instantly (add class `instant` to kill transitions), so Back works.
- Controls, all on `window`: click / Space / → / Enter / PageDown = next; ← / Backspace / PageUp = back; R = restart.
  Next on the last step does nothing.
- Progress dots for the steps.
- Just before `</script>`: `window.ATLAS={cur:()=>cur,total:()=>steps.length};`
- Just before `</body>`: `<script src="../atlas-bridge.js"></script>`
- A header line on every beat (title + one-sentence caption) that says what is happening and why.
- 10–16 beats. Arc: title → setup (the components) → a short worked example played out
  beat by beat → the key insight made visible (a number, a curve, a comparison) →
  a final recap card "What designers take from this" with 3 points.
- Readable from the back of a classroom: body text ≥ 20px at stage scale, captions ≥ 18px.

## Content rules
- Original example content: generic tokens, invented card names and themes.
  You may name real games only in a closing "You'll see this in: …" line.
- Plain, direct English (instructor voice, Register C): short sentences, no hype, no em-dash chains.
- Each mechanic keeps its own visual theme, but must look polished: CSS transitions/keyframes,
  layered shadows, a coherent palette defined in `:root`.

## Reference
`mechanics/dice-probability.html` is the pattern: see its `<style>` head, and the last ~40 lines
of its script (`steps`, `goTo`, `next`, `back`, key handling, `fit`).

## Cloud builds (parallel sessions)
Several sessions may build mechanics at the same time, each on its own branch.
- **Only add your own file** `mechanics/<id>.html`. Do **not** edit `mechanics.js`, `index.html`,
  `watch.html` or any other shared file: parallel edits there conflict.
- Put the notes for `mechanics.js` in the pull request description instead, as one fenced ```js block
  holding the full entry (keep the existing `hook`, `watchFor`, `brief`; add `file`, `w: 1280`, `h: 720`,
  `minutes`, `anatomy` (3–4 of Fullerton's formal elements), `feel` (3 words), `feelText`, and `examples`
  with a one-line `note` each). The maintainer merges all entries in one pass.
- Verify with `tools/check_animation.py` (needs `pip install playwright pillow` and
  `python -m playwright install chromium`). Open the contact sheet and fix layout problems before the PR.
- Branch name `mechanic/<id>`; PR title `Add <Title> animation`. Paste the checker output into the PR.
