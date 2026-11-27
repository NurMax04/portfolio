/* =========================================================
   NURMAX.ASIA — core helpers shared by all modules
   Must be loaded first. Exposes window.NX.
   ========================================================= */
window.NX = (() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(pointer: fine)').matches;

  /* One rAF-throttled scroll listener shared by every module */
  const scrollHandlers = [];
  let ticking = false;
  function runScroll() {
    const y = scrollY;
    scrollHandlers.forEach(fn => fn(y));
    ticking = false;
  }
  addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(runScroll); ticking = true; }
  }, { passive: true });

  /** Register a scroll handler; it also runs once right away. */
  function onScroll(fn) {
    scrollHandlers.push(fn);
    fn(scrollY);
  }

  return { $, $$, clamp, reduce, fine, body: document.body, onScroll };
})();
