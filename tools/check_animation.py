"""Step through one Atlas animation headless: report JS errors, step count, text overflow,
and save a contact sheet (every step, small) to the given output PNG.
Usage: python3 tools/check_animation.py mechanics/<file>.html out.png"""
import sys, pathlib, math
from playwright.sync_api import sync_playwright
from PIL import Image
src, out = pathlib.Path(sys.argv[1]).resolve(), sys.argv[2]
errs, shots = [], []
with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={'width': 1280, 'height': 720})
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.on('console', lambda m: m.type == 'error' and errs.append(m.text))
    pg.goto(src.as_uri()); pg.wait_for_timeout(800)
    total = pg.evaluate('window.ATLAS ? ATLAS.total() : -1')
    for i in range(max(total, 1)):
        pg.wait_for_timeout(2600)
        f = f'{out}.step{i}.png'; pg.screenshot(path=f); shots.append(f)
        # elements whose text spills outside their box
        ov = pg.evaluate("""[...document.querySelectorAll('#stage *')].filter(e=>{const s=getComputedStyle(e);
          return s.opacity!=='0' && s.visibility!=='hidden' && e.offsetParent && e.children.length===0 && e.textContent.trim()
          && (e.scrollWidth>e.clientWidth+2 || e.scrollHeight>e.clientHeight+2) && s.overflow!=='visible'}).map(e=>e.textContent.trim().slice(0,40))""")
        if ov: errs.append(f'step {i}: clipped text {ov[:3]}')
        if i < total - 1: pg.keyboard.press('ArrowRight')
    cur = pg.evaluate('ATLAS.cur()') if total > 0 else -1
    pg.keyboard.press('ArrowLeft'); pg.wait_for_timeout(300)
    back = pg.evaluate('ATLAS.cur()') if total > 0 else -1
    b.close()
cols = 4; rows = math.ceil(len(shots) / cols); W, H = 480, 270
sheet = Image.new('RGB', (cols * W, rows * H), 'white')
for i, f in enumerate(shots):
    sheet.paste(Image.open(f).resize((W, H)), ((i % cols) * W, (i // cols) * H)); pathlib.Path(f).unlink()
sheet.save(out)
print(f'steps={total} reached={cur} back->{back}')
print('errors:', errs or 'none')
print('contact sheet:', out)
