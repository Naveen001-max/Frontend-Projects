/* ============================================
   main.js — Back-to-top, anchor scroll, misc UX
   ============================================ */

'use strict';

(function initMain() {

  /* ---- Back to Top ---- */
  const btn = qs('#backToTop');
  if (btn) {
    window.addEventListener('scroll', throttle(() => {
      btn.classList.toggle('visible', window.scrollY > 400);
    }, 100), { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---- Smooth anchor scroll (offset for navbar) ---- */
  qsa('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const sel = this.getAttribute('href');
      if (sel === '#') return;
      const target = qs(sel);
      if (target) {
        e.preventDefault();
        const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--navbar-h'), 10) || 64;
        const top  = target.getBoundingClientRect().top + window.scrollY - navH - 8;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ---- Lazy image error fallback ---- */
  qsa('img').forEach(img => {
    img.addEventListener('error', function () {
      this.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%230b1c2e' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' fill='%2300c8b4' font-family='sans-serif' font-size='14' text-anchor='middle' dy='.3em'%3EImage unavailable%3C/text%3E%3C/svg%3E";
      this.style.objectFit = 'contain';
      this.style.padding = '1rem';
    });
  });

  /* ---- Form success smooth reveal ---- */
  const formSuccess = qs('#formSuccess');
  if (formSuccess) {
    formSuccess.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    formSuccess.style.opacity    = '0';
    formSuccess.style.transform  = 'translateY(8px)';
  }

  /* ---- Page transition overlay ---- */
  const overlay = document.createElement('div');
  overlay.className = 'page-transition-overlay';
  document.body.appendChild(overlay);

})();
