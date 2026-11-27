/* =========================================================
   Section: Hero
   - split title into chars for the intro animation
   - rotating word with scramble effect
   - interactive particle network (canvas)
   - 3D parallax of the logo
   ========================================================= */
(() => {
  const { $, $$, reduce, fine } = NX;
  const hero = $('.hero');
  if (!hero) return;

  /* ---------- Split title into chars ---------- */
  let ci = 0;
  $$('[data-split]', hero).forEach(el => {
    const words = el.textContent.trim().split(/\s+/);
    el.textContent = '';
    words.forEach((w, wi) => {
      const ws = document.createElement('span');
      ws.className = 'word';
      [...w].forEach(ch => {
        const c = document.createElement('span');
        c.className = 'char';
        c.textContent = ch;
        c.style.setProperty('--i', ci++);
        ws.appendChild(c);
      });
      el.appendChild(ws);
      if (wi < words.length - 1) el.appendChild(document.createTextNode(' '));
    });
  });

  /* ---------- Rotating word with scramble ---------- */
  const rotator = $('#rotator');
  const rotWords = ['продают', 'впечатляют', 'работают', 'запоминаются'];
  const glyphs = 'абвгдежзиклмнопрстуфхцчшэюя#%&*/<>{}';
  let rotIndex = 0;

  function scramble(to) {
    const from = rotator.textContent;
    const len = Math.max(from.length, to.length);
    const queue = [];
    for (let i = 0; i < len; i++) {
      const start = Math.floor(Math.random() * 10);
      queue.push({ from: from[i] || '', to: to[i] || '', start, end: start + 10 + Math.floor(Math.random() * 14) });
    }
    let frame = 0;
    (function update() {
      let out = '', done = 0;
      for (const q of queue) {
        if (frame >= q.end) { done++; out += q.to; }
        else if (frame >= q.start) out += `<span class="scr">${glyphs[Math.floor(Math.random() * glyphs.length)]}</span>`;
        else out += q.from;
      }
      rotator.innerHTML = out;
      if (done < queue.length) { frame++; requestAnimationFrame(update); }
    })();
  }

  if (rotator && !reduce) {
    document.addEventListener('nx:loaded', () => {
      setTimeout(() => {
        setInterval(() => {
          rotIndex = (rotIndex + 1) % rotWords.length;
          scramble(rotWords[rotIndex]);
        }, 3000);
      }, 2850);
    }, { once: true });
  }

  /* ---------- Particle network ---------- */
  const canvas = $('#bg-canvas');
  if (canvas && !reduce) {
    const ctx = canvas.getContext('2d');
    const DPR = Math.min(devicePixelRatio || 1, 2);
    const mouse = { x: -9999, y: -9999 };
    const LINK = 120, MOUSE_R = 170;
    let W = 0, H = 0, pts = [], visible = true;

    function resize() {
      W = hero.offsetWidth; H = hero.offsetHeight;
      canvas.width = W * DPR; canvas.height = H * DPR;
      canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      const n = Math.min(120, Math.floor((W * H) / 13000));
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.5 + 0.4
      }));
    }
    resize();
    let rt;
    addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(resize, 150); });

    hero.addEventListener('mousemove', e => {
      const r = hero.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    });
    hero.addEventListener('mouseleave', () => { mouse.x = mouse.y = -9999; });
    new IntersectionObserver(([e]) => (visible = e.isIntersecting)).observe(hero);

    (function draw() {
      requestAnimationFrame(draw);
      if (!visible) return;
      ctx.clearRect(0, 0, W, H);

      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
        if (d < MOUSE_R && d > 0) {
          const f = (1 - d / MOUSE_R) * 1.2;
          p.x += (dx / d) * f; p.y += (dy / d) * f;
        }
      }

      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          if (Math.abs(dx) > LINK || Math.abs(dy) > LINK) continue;
          const d = Math.hypot(dx, dy);
          if (d < LINK) {
            ctx.strokeStyle = `rgba(0, 214, 143, ${(1 - d / LINK) * 0.18})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        const md = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (md < MOUSE_R + 40) {
          ctx.strokeStyle = `rgba(43, 255, 180, ${(1 - md / (MOUSE_R + 40)) * 0.5})`;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        }
        ctx.fillStyle = md < MOUSE_R ? 'rgba(43, 255, 180, .95)' : 'rgba(241, 243, 241, .45)';
        ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill();
      }
    })();
  }

  /* ---------- Logo 3D parallax ---------- */
  const stage = $('#logo-stage');
  if (stage && fine && !reduce) {
    let tx = 0, ty = 0, cx = 0, cy = 0;
    hero.addEventListener('mousemove', e => {
      tx = (e.clientX / innerWidth - 0.5) * 2;
      ty = (e.clientY / innerHeight - 0.5) * 2;
    });
    hero.addEventListener('mouseleave', () => { tx = ty = 0; });
    (function loop() {
      cx += (tx - cx) * 0.06; cy += (ty - cy) * 0.06;
      stage.style.transform = `rotateY(${cx * 18}deg) rotateX(${-cy * 18}deg)`;
      requestAnimationFrame(loop);
    })();
  }
})();
