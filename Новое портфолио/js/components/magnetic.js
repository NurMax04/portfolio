/* =========================================================
   Magnetic hover for .magnetic elements
   ========================================================= */
(() => {
  const { $$, fine, reduce } = NX;
  if (!fine || reduce) return;

  $$('.magnetic').forEach(el => {
    const inner = el.firstElementChild;
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${x * 0.3}px, ${y * 0.35}px)`;
      if (inner) inner.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transition = 'transform .6s cubic-bezier(.16,1,.3,1)';
      el.style.transform = '';
      if (inner) inner.style.transform = '';
      setTimeout(() => (el.style.transition = ''), 600);
    });
  });
})();
