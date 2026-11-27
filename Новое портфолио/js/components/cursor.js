/* =========================================================
   Custom cursor: dot + trailing ring, label on [data-cursor]
   ========================================================= */
(() => {
  const { $, $$, fine, reduce, body } = NX;
  if (!fine || reduce) return;

  body.classList.add('has-cursor');
  const dot = $('.cursor-dot');
  const ring = $('.cursor-ring');
  const label = $('.cursor-label');
  let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;

  addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px, ${my}px)`;
  });

  (function follow() {
    rx += (mx - rx) * 0.16;
    ry += (my - ry) * 0.16;
    ring.style.transform = `translate(${rx}px, ${ry}px)`;
    requestAnimationFrame(follow);
  })();

  $$('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
      if (el.dataset.cursor) { label.textContent = el.dataset.cursor; body.classList.add('cursor-label-on'); }
      else body.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => body.classList.remove('cursor-hover', 'cursor-label-on'));
  });

  document.addEventListener('mouseleave', () => { dot.style.opacity = 0; ring.style.opacity = 0; });
  document.addEventListener('mouseenter', () => { dot.style.opacity = 1; ring.style.opacity = 1; });
})();
