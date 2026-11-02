/* atlas-bridge.js — lets the Atlas viewer drive an animation inside its iframe.
   Each animation keeps its own controls (click / → / ←). This file only:
   - turns viewer messages ('next' | 'back' | 'restart') into the same key presses
   - reports progress {cur,total} back to the viewer, read from window.ATLAS
   Works over file:// because it uses postMessage only. */
(function () {
  if (window.parent === window) return; // opened on its own: nothing to bridge
  const press = key => window.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true }));
  const report = () => {
    const A = window.ATLAS;
    if (!A) return;
    window.parent.postMessage({ atlas: 'progress', cur: A.cur(), total: A.total() }, '*');
  };
  window.addEventListener('message', e => {
    const cmd = e.data && e.data.atlasCmd;
    if (cmd === 'next') press('ArrowRight');
    else if (cmd === 'back') press('ArrowLeft');
    else if (cmd === 'restart') { location.reload(); return; }
    else if (cmd === 'focus') window.focus();
    setTimeout(report, 30);
  });
  // the viewer's arrow keys only reach us when the iframe has focus; report those too
  window.addEventListener('keydown', () => setTimeout(report, 30));
  window.addEventListener('click', () => setTimeout(report, 30));
  window.addEventListener('load', () => setTimeout(report, 60));
})();
