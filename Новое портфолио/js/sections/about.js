/* =========================================================
   Section 01: About — words light up while scrolling
   ========================================================= */
(() => {
  const { $, $$, clamp, onScroll } = NX;
  const text = $('#about-text');
  if (!text) return;

  // Words painted green when lit
  const highlight = ['работающими', 'бизнес.', 'Чистый', 'код,', 'детали'];

  const words = text.textContent.trim().split(/\s+/);
  text.innerHTML = words
    .map(w => `<span class="w${highlight.includes(w) ? ' hl' : ''}">${w}</span>`)
    .join(' ');
  const spans = $$('.w', text);

  onScroll(() => {
    const r = text.getBoundingClientRect();
    const p = clamp((innerHeight * 0.85 - r.top) / (r.height + innerHeight * 0.3), 0, 1);
    const lit = Math.floor(p * spans.length * 1.05);
    spans.forEach((w, i) => w.classList.toggle('lit', i < lit));
  });
})();
