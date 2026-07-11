/**
 * hero-scroll.js — BUAA INSA Self-Help Guide
 * Fixed hero + scroll-driven opacity crossfade
 * Adapted from ic-guide (crys-chen.github.io/ic-guide)
 */
(function () {
  var FADE = 0.25;
  var ticking = false;
  var currentHero = null;
  var onScroll = null;

  function teardown() {
    if (onScroll) {
      window.removeEventListener('scroll', onScroll, { passive: true });
      onScroll = null;
    }
    if (currentHero) {
      currentHero.style.position = '';
      currentHero.style.top = '';
      currentHero.style.left = '';
      currentHero.style.zIndex = '';
      currentHero.style.transition = '';
      currentHero.style.margin = '';
      currentHero.style.width = '';
      currentHero.style.opacity = '';
      currentHero.style.pointerEvents = '';
      currentHero.style.visibility = '';
      currentHero = null;
    }
  }

  function init() {
    teardown();

    var light = document.querySelector('.df-light');
    var dark  = document.querySelector('.df-dark');
    var hero  = null;

    if (light && getComputedStyle(light).display !== 'none') hero = light;
    else if (dark && getComputedStyle(dark).display !== 'none') hero = dark;

    var below = document.querySelector('.df-below');
    if (!below) return;

    if (!hero) {
      below.style.opacity       = '1';
      below.style.pointerEvents = '';
      return;
    }

    if (window.innerWidth < 768) {
      hero.style.opacity        = '1';
      hero.style.visibility     = '';
      below.style.opacity       = '1';
      below.style.pointerEvents = '';
      below.style.paddingTop    = '';
      return;
    }

    var header = document.querySelector('.md-header');
    var tabs   = document.querySelector('.md-tabs');
    var topOff = (header ? header.offsetHeight : 0)
               + (tabs   ? tabs.offsetHeight   : 0);

    var heroH = hero.offsetHeight || (window.innerHeight - topOff);

    Object.assign(hero.style, {
      position:   'fixed',
      top:        topOff + 'px',
      left:       '0',
      right:      'auto',
      zIndex:     '5',
      transition: 'opacity 0.15s ease',
    });
    hero.style.setProperty('margin',  '0', 'important');
    hero.style.setProperty('width',   '100vw', 'important');

    var fixLeft = hero.getBoundingClientRect().left;
    if (Math.abs(fixLeft) > 0.5) {
      hero.style.left = (-fixLeft) + 'px';
    }

    var fadeScrollDist = Math.round(heroH * FADE);
    below.style.paddingTop    = (fadeScrollDist + 32) + 'px';
    below.style.opacity       = '0';
    below.style.pointerEvents = 'none';
    below.style.transition    = 'opacity 0.15s ease';

    currentHero = hero;

    onScroll = function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var s = window.scrollY;
        var t = Math.min(1, Math.max(0, s / fadeScrollDist));
        var alpha = 1 - t;
        hero.style.opacity       = String(alpha);
        hero.style.pointerEvents = t > 0.9 ? 'none' : '';
        hero.style.visibility    = alpha < 0.01 ? 'hidden' : '';
        below.style.opacity       = String(t);
        below.style.pointerEvents = t > 0.1 ? 'auto' : 'none';
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Watch for color scheme changes (Material for MkDocs palette toggle)
  function watchScheme() {
    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (m) {
        if (m.attributeName === 'data-md-color-scheme') {
          init();
        }
      });
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['data-md-color-scheme'] });
  }

  // MkDocs Material lifecycle
  if (typeof document$ !== 'undefined') {
    document$.subscribe(function () {
      init();
      watchScheme();
    });
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      init();
      watchScheme();
    });
  }
})();
