/* =========================================================
   Section 04: Process — timeline fills while scrolling
   ========================================================= */
(() => {
  const { $, $$, clamp, onScroll } = NX;
  const timeline = $('#timeline');
  if (!timeline) return;

  const fill = $('#timeline-fill');
  const steps = $$('.step', timeline);

  onScroll(() => {
    const r = timeline.getBoundingClientRect();
    const p = clamp((innerHeight * 0.6 - r.top) / r.height, 0, 1);
    fill.style.transform = `scaleY(${p})`;
    steps.forEach(s => s.classList.toggle('active', s.getBoundingClientRect().top < innerHeight * 0.6));
  });
})();
