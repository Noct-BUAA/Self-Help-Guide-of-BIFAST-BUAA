/**
 * pdf-download.js — jsDelivr CDN PDF download handler
 * Triggers browser-native download dialog via cross-origin <a download>,
 * no file-size limit (works with 30MB+ PDFs).
 *
 * Usage:
 *   <a class="pdf-download" data-file="01-logic-sets.pdf">📥 下载 PDF</a>
 */
(function () {
  'use strict';

  var CDN_BASE = 'https://cdn.jsdelivr.net/gh/Noct-BUAA/Self-Help-Guide-of-BIFAST-BUAA@e968cd5/';

  function handleClick(e) {
    e.preventDefault();
    var link = e.currentTarget;
    var filename = link.getAttribute('data-file');
    if (!filename) return;

    var originalText = link.textContent;
    link.textContent = '⏳ 下载中...';
    link.style.pointerEvents = 'none';
    link.style.opacity = '0.7';

    var cdnUrl = CDN_BASE + filename;

    // Try cross-origin download attribute first
    var a = document.createElement('a');
    a.href = cdnUrl;
    a.download = filename;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();

    setTimeout(function () {
      document.body.removeChild(a);
      link.textContent = originalText;
      link.style.pointerEvents = '';
      link.style.opacity = '';
    }, 1500);
  }

  function init() {
    var links = document.querySelectorAll('.pdf-download');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', handleClick);
    }
  }

  if (typeof document$ !== 'undefined') {
    document$.subscribe(init);
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }
})();
