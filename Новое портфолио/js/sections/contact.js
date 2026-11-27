/* =========================================================
   Section 05: Contact
   - live Kazakhstan time
   - giant wordmark: green fill follows the cursor
   - copy e-mail to clipboard + toast
   ========================================================= */
(() => {
  const { $, fine } = NX;

  /* ---------- Local time (Kazakhstan) ---------- */
  const timeEl = $('#local-time');
  if (timeEl) {
    const fmt = new Intl.DateTimeFormat('ru-RU', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Almaty' });
    const tick = () => (timeEl.textContent = fmt.format(new Date()));
    tick();
    setInterval(tick, 15000);
  }

  /* ---------- Giant wordmark ---------- */
  const giant = $('#giant-word');
  if (giant) {
    giant.addEventListener('mousemove', e => {
      const r = giant.getBoundingClientRect();
      giant.style.setProperty('--mx', `${e.clientX - r.left}px`);
      giant.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
    giant.addEventListener('mouseleave', () => giant.style.setProperty('--my', '150%'));

    if (!fine) { // touch devices: the highlight sweeps by itself
      let t = 0;
      (function sweep() {
        t += 0.006;
        giant.style.setProperty('--mx', `${50 + Math.sin(t) * 45}%`);
        giant.style.setProperty('--my', '55%');
        requestAnimationFrame(sweep);
      })();
    }
  }

  /* ---------- Copy e-mail ---------- */
  const mailBtn = $('#copy-mail');
  const toast = $('#toast');
  if (mailBtn) {
    mailBtn.addEventListener('click', async () => {
      const mail = mailBtn.dataset.mail;
      try { await navigator.clipboard.writeText(mail); }
      catch { location.href = 'mailto:' + mail; return; }
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2200);
    });
  }
})();
