/* ============================================
   hero-slider.js — Crossfade slider + hex canvas
   ============================================ */

'use strict';

(function initHeroSlider() {
  const slides   = qsa('.hero__slide');
  const dotsWrap = qs('#sliderDots');
  const bgCanvas = qs('#heroBg');

  if (!slides.length) return;

  let current  = 0;
  let timer    = null;
  let rafId    = null;
  const INTERVAL = 5500;

  /* Build dots */
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Slide ${i + 1}`);
    dot.addEventListener('click', () => { goTo(i); resetTimer(); });
    if (dotsWrap) dotsWrap.appendChild(dot);
  });

  function getDots() {
    return dotsWrap ? qsa('.dot', dotsWrap) : [];
  }

  function goTo(index) {
    slides[current].classList.remove('active');
    getDots()[current]?.classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    getDots()[current]?.classList.add('active');
  }

  function startTimer() {
    timer = setInterval(() => goTo(current + 1), INTERVAL);
  }

  function resetTimer() {
    clearInterval(timer);
    startTimer();
  }

  startTimer();

  const heroEl = qs('.hero');
  if (heroEl) {
    heroEl.addEventListener('mouseenter', () => clearInterval(timer));
    heroEl.addEventListener('mouseleave', startTimer);
  }

  /* Pause when page hidden (battery saving) */
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      clearInterval(timer);
      if (rafId) cancelAnimationFrame(rafId);
    } else {
      startTimer();
      if (bgCanvas) rafId = requestAnimationFrame(draw);
    }
  });

  /* Hex grid canvas */
  if (!bgCanvas) return;

  const canvas = document.createElement('canvas');
  bgCanvas.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  let hexes = [];

  function resize() {
    canvas.width  = bgCanvas.offsetWidth;
    canvas.height = bgCanvas.offsetHeight;
    buildHexes();
  }

  function buildHexes() {
    hexes = [];
    const size = 38;
    const w    = size * 2;
    const h    = Math.sqrt(3) * size;
    const cols = Math.ceil(canvas.width  / (w * 0.75)) + 2;
    const rows = Math.ceil(canvas.height / h) + 2;
    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        hexes.push({
          x: c * w * 0.75 - size,
          y: r * h + (c % 2 === 0 ? 0 : h / 2) - h,
          size,
          alpha: Math.random() * 0.25 + 0.04,
          speed: Math.random() * 0.003 + 0.001,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }
  }

  function hexPath(x, y, r) {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const a = (Math.PI / 3) * i - Math.PI / 6;
      const px = x + r * Math.cos(a);
      const py = y + r * Math.sin(a);
      i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    }
    ctx.closePath();
  }

  function draw(ts) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hexes.forEach(h => {
      const a = h.alpha * (0.5 + 0.5 * Math.sin(ts * h.speed + h.phase));
      ctx.strokeStyle = `rgba(143,188,143,${a})`;
      ctx.lineWidth = 0.8;
      hexPath(h.x, h.y, h.size);
      ctx.stroke();
    });
    rafId = requestAnimationFrame(draw);
  }

  window.addEventListener('resize', debounce(resize, 250));
  resize();
  rafId = requestAnimationFrame(draw);
})();
