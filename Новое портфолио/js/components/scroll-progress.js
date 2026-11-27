/* =========================================================
   Thin progress bar at the top of the page
   ========================================================= */
(() => {
  const { $, onScroll } = NX;
  const bar = $('#scroll-progress');
  if (!bar) return;

  onScroll(y => {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
  });
})();
