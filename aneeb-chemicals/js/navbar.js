/* ============================================
   navbar.js — Sticky navbar, mobile menu, dropdowns
   ============================================ */

'use strict';

(function initNavbar() {
  const navbar   = qs('#navbar');
  const toggle   = qs('#navToggle');
  const menu     = qs('#navMenu');
  const dropdowns = qsa('.nav-dropdown');

  if (!navbar) return;

  /* ---- Sticky scroll class ---- */
  const onScroll = throttle(() => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, 80);

  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- Mobile hamburger ---- */
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on backdrop click (outside menu)
    document.addEventListener('click', (e) => {
      if (menu.classList.contains('open') &&
          !menu.contains(e.target) &&
          !toggle.contains(e.target)) {
        closeMenu();
      }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.classList.contains('open')) closeMenu();
    });
  }

  function closeMenu() {
    menu.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  /* ---- Mobile dropdown toggles ---- */
  dropdowns.forEach(dd => {
    const link = dd.querySelector('.nav-link');
    if (!link) return;

    link.addEventListener('click', (e) => {
      // Only intercept on mobile (menu is in fixed panel)
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dd.classList.toggle('open');
      }
    });
  });

  /* ---- Active link highlight ---- */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  qsa('.nav-link').forEach(link => {
    const href = link.getAttribute('href') || '';
    const linkFile = href.split('/').pop().split('#')[0] || 'index.html';
    if (linkFile === currentPath) {
      link.classList.add('active');
    }
  });
})();
