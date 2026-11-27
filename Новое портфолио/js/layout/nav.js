/* =========================================================
   Header: background on scroll, hide on scroll down,
   highlight the link of the current section
   ========================================================= */
(() => {
  const { $, $$, body, onScroll } = NX;
  const nav = $('#nav');
  if (!nav) return;

  const links = $$('.nav-links a');
  const sections = links.map(a => $(a.getAttribute('href'))).filter(Boolean);
  let lastY = scrollY;

  onScroll(y => {
    nav.classList.toggle('scrolled', y > 40);
    if (!body.classList.contains('menu-open')) nav.classList.toggle('hidden', y > lastY && y > 300);
    lastY = y;

    let current = null;
    sections.forEach(sec => { if (sec.getBoundingClientRect().top < innerHeight * 0.4) current = sec.id; });
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
  });
})();
