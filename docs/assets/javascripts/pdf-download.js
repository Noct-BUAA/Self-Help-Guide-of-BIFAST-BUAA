/**
 * pdf-download.js — jsDelivr CDN PDF download handler
 * All PDF links with class="pdf-download" will trigger a direct browser download
 * via jsDelivr CDN (China-optimized).
 *
 * Usage in Markdown (raw HTML):
 *   <a class="pdf-download" data-file="01-logic-sets.pdf">📥 下载讲义 PDF（1.0 MB）</a>
 */
(function () {
  'use strict';

  var CDN_BASE = 'https://cdn.jsdelivr.net/gh/Noct-BUAA/Self-Help-Guide-of-BIFAST-BUAA@assets/';

  function downloadBlob(url, filename) {
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 1000);
  }

  function handleClick(e) {
    e.preventDefault();
    var link = e.currentTarget;
    var filename = link.getAttribute('data-file');
    if (!filename) return;

    var cdnUrl = CDN_BASE + filename;
    var originalText = link.textContent;

    // Show loading state
    link.textContent = '⏳ 下载中...';
    link.style.pointerEvents = 'none';
    link.style.opacity = '0.7';

    fetch(cdnUrl)
      .then(function (response) {
        if (!response.ok) throw new Error('HTTP ' + response.status);
        return response.blob();
      })
      .then(function (blob) {
        var blobUrl = URL.createObjectURL(blob);
        downloadBlob(blobUrl, filename);
        link.textContent = '✅ 下载完成';
      })
      .catch(function () {
        // Fallback: open in new tab
        window.open(cdnUrl, '_blank');
        link.textContent = originalText;
      })
      .finally(function () {
        setTimeout(function () {
          link.textContent = originalText;
          link.style.pointerEvents = '';
          link.style.opacity = '';
        }, 2000);
      });
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
