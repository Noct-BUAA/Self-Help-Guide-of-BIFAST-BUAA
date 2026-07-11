/**
 * extra.js — GSAP-powered animations for BIFAST Self-Help Guide
 * Purposeful motion: hero entrance, card reveals, table fade-in, scroll-to-top.
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
  // 1. HERO TEXT ENTRANCE
  // ============================================================
  const hero = document.querySelector('.hero-section');
  if (hero) {
    const heroChildren = hero.querySelectorAll('.hero-subtitle, .hero-description');
    gsap.fromTo(
      heroChildren,
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.1,
      }
    );
  }

  // ============================================================
  // 2. CARD GRID — Scroll-triggered reveal
  // ============================================================
  const cardGrids = document.querySelectorAll('.card-grid .card');
  if (cardGrids.length) {
    gsap.fromTo(
      cardGrids,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.card-grid',
          start: 'top 85%',
          once: true,
        },
      }
    );
  }

  // ============================================================
  // 3. TABLES — Single batch scroll reveal per page
  // ============================================================
  const tables = document.querySelectorAll('.md-typeset table:not([class])');
  if (tables.length) {
    gsap.fromTo(
      tables,
      { opacity: 0, y: 16 },
      {
        opacity: 1, y: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: tables[0],
          start: 'top 90%',
          once: true,
        },
      }
    );
  }

  // ============================================================
  // 4. SCROLL-TO-TOP BUTTON — Elastic entrance on first appearance
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

  // ============================================================
  // 5. MERMAID DIAGRAMS — Reveal on scroll
  // ============================================================
  const mermaids = document.querySelectorAll('.mermaid');
  mermaids.forEach((m, i) => {
    gsap.fromTo(
      m,
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0,
        duration: 0.5,
        delay: i * 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: m,
          start: 'top 90%',
          once: true,
        },
      }
    );
  });
});
