/* ============================================
   animations.js — IntersectionObserver scroll reveals
   ============================================ */

'use strict';

(function initReveal() {
  const revealEls = qsa('.reveal-up, .reveal-left, .reveal-right, .reveal-fade');

  if (!revealEls.length) return;

  // Respect prefers-reduced-motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    revealEls.forEach(el => el.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target); // Only reveal once
        }
      });
    },
    {
      root: null,
      rootMargin: '0px 0px -60px 0px', // Trigger 60px before element enters viewport
      threshold: 0.12,
    }
  );

  revealEls.forEach(el => observer.observe(el));
})();
