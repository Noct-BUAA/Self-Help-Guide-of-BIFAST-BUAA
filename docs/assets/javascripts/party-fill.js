/**
 * party-fill.js — 党校填空题乱序默背
 * 渐进增强：把页面里现有的 .fill-list 变成逐题随机默背。
 * 答案默认隐藏，点击下划线空处逐条揭示，原始列表保持不变。
 */
(function () {
  'use strict';

  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  ready(function () {
    var scope = document.querySelector('.party-handout');
    var list = scope && document.querySelector('.fill-list');
    if (!list || list.dataset.partyFillEnhanced === '1') return;

    var items = Array.prototype.slice.call(list.querySelectorAll(':scope > .fill-item'))
      .filter(function (item) {
        return item.querySelector('.fill-q u');
      });
    if (!items.length) return;
    list.dataset.partyFillEnhanced = '1';

    // 在“二、填空题”标题后插入入口
    var heading = list.previousElementSibling;
    while (heading && heading.tagName !== 'H3') heading = heading.previousElementSibling;

    var tools = document.createElement('div');
    tools.className = 'party-quiz-tools party-fill-tools';
    tools.innerHTML =
      '<button type="button" class="party-quiz-start" data-party-fill-start>' +
        '<span class="party-quiz-start__icon" aria-hidden="true">✍️</span>' +
        '<span>乱序默背</span>' +
        '<span class="party-quiz-start__count" data-party-fill-count></span>' +
      '</button>' +
      '<p class="party-quiz-tools__hint">随机顺序逐题默背 · 答案默认隐藏 · 点击下划线显示答案 · 再点「下一题」继续</p>';
    tools.querySelector('[data-party-fill-count]').textContent = items.length + ' 题';
    if (heading) {
      heading.insertAdjacentElement('afterend', tools);
    } else {
      list.parentNode.insertBefore(tools, list);
    }

    var dialog = document.createElement('dialog');
    dialog.className = 'party-quiz-dialog party-fill-dialog';
    dialog.setAttribute('aria-labelledby', 'party-fill-dialog-title');
    dialog.innerHTML =
      '<div class="party-quiz-dialog__inner">' +
        '<div class="party-quiz-dialog__head">' +
          '<div>' +
            '<p class="party-quiz-dialog__kicker">党校填空题 · 乱序默背</p>' +
            '<p class="party-quiz-dialog__title" id="party-fill-dialog-title">第 <strong data-party-fill-index>1</strong> / <strong data-party-fill-total></strong> 题</p>' +
          '</div>' +
          '<button type="button" class="party-quiz-close" data-party-fill-close aria-label="退出默背">×</button>' +
        '</div>' +
        '<div class="party-quiz-progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" aria-label="默背进度">' +
          '<span class="party-quiz-progress__bar" data-party-fill-bar></span>' +
        '</div>' +
        '<div class="party-quiz-status">' +
          '<span>本篇 <strong data-party-fill-blank-count>0</strong> 空</span>' +
          '<span>已显示 <strong data-party-fill-revealed>0</strong> 空</span>' +
          '<span>点击空处显示答案</span>' +
        '</div>' +
        '<div class="party-quiz-body" data-party-fill-body></div>' +
        '<div class="party-quiz-dialog__foot" data-party-fill-foot>' +
          '<div class="party-fill-foot__actions">' +
            '<button type="button" class="party-quiz-exit" data-party-fill-exit>退出</button>' +
            '<button type="button" class="party-quiz-exit party-fill-reveal-all" data-party-fill-reveal-all>显示全部</button>' +
          '</div>' +
          '<button type="button" class="party-quiz-next" data-party-fill-next>下一题</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(dialog);

    var startButton = tools.querySelector('[data-party-fill-start]');
    var body = dialog.querySelector('[data-party-fill-body]');
    var nextButton = dialog.querySelector('[data-party-fill-next]');
    var foot = dialog.querySelector('[data-party-fill-foot]');
    var revealAllButton = dialog.querySelector('[data-party-fill-reveal-all]');
    var progress = dialog.querySelector('[role="progressbar"]');
    var bar = dialog.querySelector('[data-party-fill-bar]');

    var queue = [];
    var index = 0;
    var totalBlanks = 0;
    var revealed = 0;

    function shuffle(source) {
      var a = source.slice();
      for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var t = a[i];
        a[i] = a[j];
        a[j] = t;
      }
      return a;
    }

    function textOf(el) {
      return el ? (el.textContent || '').trim() : '';
    }

    function setText(selector, value) {
      var el = dialog.querySelector(selector);
      if (el) el.textContent = value;
    }

    function updateStats() {
      var total = queue.length || items.length;
      var allRevealed = totalBlanks > 0 && revealed >= totalBlanks;
      setText('[data-party-fill-index]', Math.min(index + 1, total));
      setText('[data-party-fill-total]', total);
      setText('[data-party-fill-blank-count]', totalBlanks);
      setText('[data-party-fill-revealed]', revealed);
      progress.setAttribute('aria-valuemax', String(total));
      progress.setAttribute('aria-valuenow', String(Math.min(index + 1, total)));
      bar.style.width = ((index + 1) / total) * 100 + '%';
      revealAllButton.textContent = allRevealed ? '重新隐藏' : '显示全部';
      revealAllButton.setAttribute('aria-label', allRevealed ? '重新隐藏本题答案' : '显示本题全部答案');
    }

    function refreshBlankState() {
      totalBlanks = body.querySelectorAll('.party-fill-blank').length;
      revealed = body.querySelectorAll('.party-fill-blank.is-revealed').length;
      updateStats();
    }

    function revealBlank(blank) {
      if (!blank || blank.classList.contains('is-revealed')) return;
      blank.classList.add('is-revealed');
      blank.setAttribute('aria-label', '第 ' + blank.dataset.blankIndex + ' 空：' + textOf(blank));
      refreshBlankState();
    }

    function toggleAllBlanks() {
      var blanks = body.querySelectorAll('.party-fill-blank');
      var allRevealed = totalBlanks > 0 && revealed >= totalBlanks;
      Array.prototype.forEach.call(blanks, function (blank) {
        if (allRevealed) {
          blank.classList.remove('is-revealed');
          blank.setAttribute('aria-label', '第 ' + blank.dataset.blankIndex + ' 空，点击显示答案');
        } else {
          blank.classList.add('is-revealed');
          blank.setAttribute('aria-label', '第 ' + blank.dataset.blankIndex + ' 空：' + textOf(blank));
        }
      });
      refreshBlankState();
    }

    function renderQuestion() {
      var current = queue[index];
      var number = textOf(current.querySelector('.fill-num')) || String(index + 1);
      var sourceQuestion = current.querySelector('.fill-q');
      var questionClone = sourceQuestion ? sourceQuestion.cloneNode(true) : document.createElement('p');
      var badge = questionClone.querySelector('.fill-num');
      if (badge) badge.remove();

      var blanks = questionClone.querySelectorAll('u');
      Array.prototype.forEach.call(blanks, function (u, i) {
        var blank = document.createElement('button');
        blank.type = 'button';
        blank.className = 'party-fill-blank';
        blank.dataset.blankIndex = String(i + 1);
        blank.setAttribute('aria-label', '第 ' + (i + 1) + ' 空，点击显示答案');

        var answer = document.createElement('span');
        answer.className = 'party-fill-blank__text';
        while (u.firstChild) answer.appendChild(u.firstChild);
        blank.appendChild(answer);

        blank.addEventListener('click', function () {
          revealBlank(blank);
        });
        u.parentNode.replaceChild(blank, u);
      });

      body.innerHTML = '';

      var question = document.createElement('div');
      question.className = 'party-fill-question';

      var meta = document.createElement('p');
      meta.className = 'party-quiz-question__meta';
      meta.textContent = '题库第 ' + number + ' 题 · 共 ' + blanks.length + ' 空 · 点击下划线显示答案';
      question.appendChild(meta);

      var questionText = document.createElement('div');
      questionText.className = 'party-quiz-question__text';
      questionText.appendChild(questionClone);
      question.appendChild(questionText);

      body.appendChild(question);
      body.scrollTop = 0;

      totalBlanks = blanks.length;
      revealed = 0;
      nextButton.textContent = index === queue.length - 1 ? '查看结果' : '下一题';
      dialog.classList.remove('is-result');
      foot.hidden = false;
      updateStats();
    }

    function showResult() {
      dialog.classList.add('is-result');
      foot.hidden = true;
      progress.setAttribute('aria-valuenow', String(queue.length));
      bar.style.width = '100%';

      var total = queue.length;
      body.innerHTML = '';
      var result = document.createElement('div');
      result.className = 'party-quiz-result';
      result.setAttribute('role', 'status');
      result.innerHTML =
        '<p class="party-quiz-result__kicker">本轮完成</p>' +
        '<p class="party-quiz-result__score"><strong>' + total + '</strong><span>/ ' + total + ' 题</span></p>' +
        '<p class="party-quiz-result__rate">全部题目已默背一遍</p>' +
        '<div class="party-quiz-result__actions">' +
          '<button type="button" class="party-quiz-next" data-party-fill-restart>再来一轮（重新乱序）</button>' +
          '<button type="button" class="party-quiz-exit" data-party-fill-result-exit>关闭</button>' +
        '</div>';
      body.appendChild(result);
      body.scrollTop = 0;

      var restart = result.querySelector('[data-party-fill-restart]');
      var close = result.querySelector('[data-party-fill-result-exit]');
      if (restart) restart.addEventListener('click', startRound);
      if (close) close.addEventListener('click', closeDialog);
      if (restart) restart.focus();
    }

    function nextQuestion() {
      if (index >= queue.length - 1) {
        showResult();
        return;
      }
      index += 1;
      renderQuestion();
    }

    function startRound() {
      queue = shuffle(items);
      index = 0;
      totalBlanks = 0;
      revealed = 0;
      renderQuestion();

      document.body.classList.add('party-fill-open');
      if (typeof dialog.showModal === 'function') {
        if (!dialog.open) dialog.showModal();
      } else {
        dialog.setAttribute('open', '');
      }

      var first = dialog.querySelector('.party-fill-blank');
      if (first) first.focus();
    }

    function resetDialogState() {
      document.body.classList.remove('party-fill-open');
      dialog.classList.remove('is-result');
      foot.hidden = false;
    }

    function closeDialog() {
      if (typeof dialog.close === 'function' && dialog.open) {
        dialog.close();
      } else {
        dialog.removeAttribute('open');
        resetDialogState();
        startButton.focus();
      }
    }

    startButton.addEventListener('click', startRound);
    nextButton.addEventListener('click', nextQuestion);
    revealAllButton.addEventListener('click', toggleAllBlanks);
    dialog.querySelector('[data-party-fill-close]').addEventListener('click', closeDialog);
    dialog.querySelector('[data-party-fill-exit]').addEventListener('click', closeDialog);

    dialog.addEventListener('click', function (e) {
      if (e.target === dialog) closeDialog();
    });

    dialog.addEventListener('close', function () {
      resetDialogState();
      startButton.focus();
    });
  });
})();
