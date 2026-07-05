/* ============================================
   utils.js — Shared utility functions
   ============================================ */

'use strict';

/**
 * Throttle a function to run at most once per `delay` ms
 */
function throttle(fn, delay = 100) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

/**
 * Debounce a function — only fires after `delay` ms of silence
 */
function debounce(fn, delay = 200) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

/**
 * Query single element (throws if not found optionally)
 */
function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

/**
 * Query all elements → Array
 */
function qsa(selector, parent = document) {
  return Array.from(parent.querySelectorAll(selector));
}

/**
 * Add multiple event listeners with one call
 * Usage: on(el, 'click mouseenter', handler)
 */
function on(el, events, handler, options) {
  if (!el) return;
  events.split(' ').forEach(ev => el.addEventListener(ev, handler, options));
}
