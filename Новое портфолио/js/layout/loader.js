/* =========================================================
   Preloader: counter + bar, then opens the page.
   Fires the `nx:loaded` event on document when the page is revealed.
   ========================================================= */
(() => {
  const { $, clamp, reduce, body } = NX;
  const loader = $('#loader');
  if (!loader) return;

  const count = $('#loader-count');
  const bar = $('#loader-bar');
  const DURATION = reduce ? 300 : 2200;
  const t0 = performance.now();

  let fontsDone = false;
  (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => (fontsDone = true));
  setTimeout(() => (fontsDone = true), 4000); // safety net

  function tick(now) {
    let p = clamp((now - t0) / DURATION, 0, 1);
    if (!fontsDone) p = Math.min(p, 0.9);
    const eased = 1 - Math.pow(1 - p, 3);
    count.textContent = Math.round(eased * 100);
    bar.style.transform = `scaleX(${eased})`;
    if (p < 1) requestAnimationFrame(tick);
    else setTimeout(finish, 250);
  }
  requestAnimationFrame(tick);

  function finish() {
    loader.classList.add('done');
    body.classList.remove('loading');
    setTimeout(() => {
      body.classList.add('loaded');
      document.dispatchEvent(new Event('nx:loaded'));
    }, 350);
    setTimeout(() => loader.classList.add('gone'), 1600);
  }
})();
