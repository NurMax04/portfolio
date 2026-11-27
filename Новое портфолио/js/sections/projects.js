/* =========================================================
   Section 03: Projects
   - 3D tilt + glare on [data-tilt] cards
   - screenshots scroll top-to-bottom on hover
   ========================================================= */
(() => {
  const { $, $$, clamp, fine, reduce } = NX;

  /* ---------- 3D tilt ---------- */
  if (fine && !reduce) {
    $$('[data-tilt]').forEach(card => {
      const media = $('.project-media', card);
      card.addEventListener('mousemove', e => {
        const r = media.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
        media.style.transform = `rotateY(${(px - 0.5) * 14}deg) rotateX(${(0.5 - py) * 14}deg)`;
        media.style.setProperty('--x', `${px * 100}%`);
        media.style.setProperty('--y', `${py * 100}%`);
      });
      card.addEventListener('mouseleave', () => { media.style.transform = ''; });
    });
  }

  /* ---------- Screenshot scroll on hover ---------- */
  $$('.project').forEach(card => {
    const shots = $$('.shot', card);
    if (!shots.length) return;

    card.addEventListener('mouseenter', () => {
      shots.forEach(shot => {
        const img = $('img', shot);
        const dist = img.offsetHeight - shot.offsetHeight;
        if (dist <= 0) return;
        img.style.transitionDuration = `${clamp(dist / 160, 2, 7)}s`;
        img.style.transitionTimingFunction = 'cubic-bezier(.45,.05,.55,.95)';
        img.style.transform = `translateY(${-dist}px)`;
      });
    });

    card.addEventListener('mouseleave', () => {
      shots.forEach(shot => {
        const img = $('img', shot);
        img.style.transitionDuration = '1.2s';
        img.style.transitionTimingFunction = '';
        img.style.transform = 'translateY(0)';
      });
    });
  });
})();
