/**
 * extra.js — GSAP-powered animations for BIFAST Self-Help Guide
 * Purposeful motion: card reveals, table fade-in, scroll-to-top.
 * Respects prefers-reduced-motion.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // Register ScrollTrigger plugin if available
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  // ============================================================
  // 1. CARD GRID — Scroll-triggered reveal
  // ============================================================
  // 每个 .card-grid 单独绑定 ScrollTrigger；页面存在多个卡片网格时
  // 只触发第一个会导致后续网格的卡片永远停留在 opacity: 0。
  document.querySelectorAll('.card-grid').forEach((grid) => {
    const cards = grid.querySelectorAll('.card');
    if (!cards.length) return;

    // 只做位移动画，不改变 opacity：即使 ScrollTrigger 未触发，
    // 卡片内容也始终可见（打印、无 JS、截图与锚点直达时尤为重要）。
    gsap.from(cards, {
      y: 24,
      duration: 0.55,
      stagger: 0.06,
      ease: 'power2.out',
      immediateRender: false,
      scrollTrigger: {
        trigger: grid,
        start: 'top 90%',
        once: true,
      },
    });
  });

  // ============================================================
  // 2. TABLES — Per-table scroll reveal
  // Tables stay visible by default; the reveal only runs when the
  // table actually enters the viewport. This avoids leaving tables
  // at opacity 0 when the page is opened via an anchor or when
  // ScrollTrigger is unavailable.
  // ============================================================
  const tables = document.querySelectorAll('.md-typeset table:not([class])');
  if (tables.length && typeof ScrollTrigger !== 'undefined') {
    tables.forEach((table) => {
      ScrollTrigger.create({
        trigger: table,
        start: 'top 100%',
        once: true,
        onEnter: () => {
          gsap.from(table, {
            opacity: 0,
            y: 16,
            duration: 0.5,
            ease: 'power2.out',
          });
        },
      });
    });
  }

  // ============================================================
  // 3. SCROLL-TO-TOP BUTTON — Elastic entrance on first appearance
  // ============================================================
  const topButton = document.querySelector('.md-top');
  let topButtonShown = false;
  if (topButton) {
    const observer = new MutationObserver(() => {
      if (!topButton.hasAttribute('hidden') && !topButtonShown) {
        topButtonShown = true;
        gsap.fromTo(
          topButton,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.7)' }
        );
      }
    });
    observer.observe(topButton, { attributes: true, attributeFilter: ['hidden'] });
  }
});
