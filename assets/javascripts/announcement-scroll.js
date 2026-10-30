// ============================================================
// 首页公告栏 — 滚动状态与底部虚化
// ============================================================
(function () {
  'use strict';

  // 让虚化从最后一条完整条目的分隔线开始，而不是横切条目正文
  function alignFade(el, atBottom) {
    var box = el.getBoundingClientRect();

    // 仅桌面右栏（单列列表）按分隔线对齐；小屏横向多列沿用固定虚化
    if (atBottom || !box.height || !window.matchMedia('(min-width: 1200px)').matches) {
      el.style.removeProperty('--announce-fade-bottom');
      return;
    }

    var items = el.querySelectorAll('.df-announce__item');
    var edge = box.bottom;
    var divider = null;

    // 取最后一条完整可见条目的上边界（即它上方的分隔线），虚化从这条线开始
    for (var i = 0; i < items.length; i++) {
      var rect = items[i].getBoundingClientRect();
      if (rect.top >= box.top - 0.5 && rect.bottom <= edge + 0.5) {
        divider = rect.top;
      }
    }

    if (divider === null) {
      el.style.removeProperty('--announce-fade-bottom');
      return;
    }

    el.style.setProperty('--announce-fade-bottom', (edge - divider).toFixed(1) + 'px');
  }

  function update(el) {
    var max = el.scrollHeight - el.clientHeight;
    var atTop = el.scrollTop <= 2;
    var atBottom = max <= 0 || el.scrollTop >= max - 2;

    el.classList.toggle('is-at-top', atTop);
    el.classList.toggle('is-scrolled', !atTop);
    el.classList.toggle('is-at-bottom', atBottom);

    alignFade(el, atBottom);
  }

  function updateAll() {
    var panels = document.querySelectorAll('.df-announce__scroll');
    Array.prototype.forEach.call(panels, update);
  }

  // 日/夜主题切换会显示另一块公告栏，重新对齐其虚化位置
  function watchTheme() {
    if (!('MutationObserver' in window)) return;

    var observer = new MutationObserver(updateAll);
    var options = { attributes: true, attributeFilter: ['data-md-color-scheme'] };

    observer.observe(document.documentElement, options);
    if (document.body) observer.observe(document.body, options);
  }

  function init() {
    var panels = document.querySelectorAll('.df-announce__scroll');

    Array.prototype.forEach.call(panels, function (el) {
      update(el);
      el.addEventListener('scroll', function () { update(el); }, { passive: true });
      window.addEventListener('resize', function () { update(el); });

      if ('ResizeObserver' in window) {
        var observer = new ResizeObserver(function () { update(el); });
        observer.observe(el);

        var inner = el.querySelector('.df-announce__items');
        if (inner) {
          observer.observe(inner);
        }
      }
    });

    watchTheme();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
