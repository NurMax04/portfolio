/* =========================================================
   In-page anchor links (#about, #contact ...)
   Sections use `content-visibility: auto` (see css/base/sections.css), so
   off-screen sections only have an estimated height. Before jumping we let
   the browser measure every section once, so the scroll lands exactly.
   ========================================================= */
(() => {
  const { $$, reduce } = NX;
  const root = document.documentElement;
  // On the first jump, switch every section to normal rendering for good:
  // real heights are known, so the target position is exact and stays exact.
  // (The fast initial load is already done by then.)
  function measureSections() {
    if (root.classList.contains('cv-measure')) return;
    root.classList.add('cv-measure');
    void root.offsetHeight; // force a real layout before computing the target
  }

  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      const target = id.length > 1 ? document.querySelector(id) : null;
      if (!target && id !== '#home') return;
      e.preventDefault();
      measureSections();
      const el = target || document.body;
      el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      history.replaceState(null, '', id);
    });
  });
})();
