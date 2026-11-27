/* =========================================================
   Footer: current year
   ========================================================= */
(() => {
  const year = NX.$('#year');
  if (year) year.textContent = new Date().getFullYear();
})();
