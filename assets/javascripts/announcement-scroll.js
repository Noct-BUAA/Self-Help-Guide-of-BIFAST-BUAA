// ============================================================
// 首页公告栏 — 滚动状态与底部虚化
// ============================================================
(function () {
  'use strict';

  function update(el) {
    var max = el.scrollHeight - el.clientHeight;
    var atTop = el.scrollTop <= 2;
    var atBottom = max <= 0 || el.scrollTop >= max - 2;

    el.classList.toggle('is-at-top', atTop);
    el.classList.toggle('is-scrolled', !atTop);
    el.classList.toggle('is-at-bottom', atBottom);
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
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
