/* =========================================================
   Burger button + full-screen mobile menu
   ========================================================= */
(() => {
  const { $, $$, body } = NX;
  const burger = $('#burger');
  const menu = $('#mobile-menu');
  const nav = $('#nav');
  if (!burger || !menu) return;

  function setMenu(open) {
    body.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
    menu.setAttribute('aria-hidden', !open);
    if (open && nav) nav.classList.remove('hidden');
  }

  burger.addEventListener('click', () => setMenu(!body.classList.contains('menu-open')));
  $$('a', menu).forEach(a => a.addEventListener('click', () => setMenu(false)));
  addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
  addEventListener('resize', () => { if (innerWidth > 960) setMenu(false); });
})();
