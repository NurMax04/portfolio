/* =========================================================
   Spotlight: passes cursor position to CSS (--x / --y)
   Used by service cards and contact cards ([data-spotlight])
   ========================================================= */
(() => {
  const { $$ } = NX;

  $$('[data-spotlight]').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--x', `${e.clientX - r.left}px`);
      card.style.setProperty('--y', `${e.clientY - r.top}px`);
    });
  });
})();
