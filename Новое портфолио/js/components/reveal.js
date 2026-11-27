/* =========================================================
   Reveal on scroll ([data-reveal] -> .in) + number counters ([data-count])
   ========================================================= */
(() => {
  const { $$, clamp } = NX;

  function countUp(el) {
    const target = +el.dataset.count;
    const dur = 2000, start = performance.now();
    (function step(now) {
      const p = clamp((now - start) / dur, 0, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 4)));
      if (p < 1) requestAnimationFrame(step);
    })(start);
  }

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      $$('[data-count]', e.target).forEach(countUp);
      io.unobserve(e.target);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

  $$('[data-reveal]').forEach(el => io.observe(el));
})();
