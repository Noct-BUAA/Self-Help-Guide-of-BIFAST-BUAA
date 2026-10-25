/**
 * party-quiz.js — 党校选择题乱序自测
 * 渐进增强：把页面里现有的 .quiz-list 变成逐题随机自测，原始列表保持不变。
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
    var list = scope && document.querySelector('.quiz-list');
    if (!list || list.dataset.partyQuizEnhanced === '1') return;

    var items = Array.prototype.slice.call(list.querySelectorAll(':scope > .quiz-item'));
    if (items.length < 2) return;
    list.dataset.partyQuizEnhanced = '1';

    // 在“一、选择题”标题后插入入口
    var heading = list.previousElementSibling;
    while (heading && heading.tagName !== 'H3') heading = heading.previousElementSibling;

    var tools = document.createElement('div');
    tools.className = 'party-quiz-tools';
    tools.innerHTML =
      '<button type="button" class="party-quiz-start" data-party-quiz-start>' +
        '<span class="party-quiz-start__icon" aria-hidden="true">🎲</span>' +
        '<span>乱序自测</span>' +
        '<span class="party-quiz-start__count" data-party-quiz-count></span>' +
      '</button>' +
      '<p class="party-quiz-tools__hint">随机顺序逐题作答 · 选完即时判分 · 成绩仅在本次统计</p>';
    tools.querySelector('[data-party-quiz-count]').textContent = items.length + ' 题';
    if (heading) {
      heading.insertAdjacentElement('afterend', tools);
    } else {
      list.parentNode.insertBefore(tools, list);
    }

    var dialog = document.createElement('dialog');
    dialog.className = 'party-quiz-dialog';
    dialog.setAttribute('aria-labelledby', 'party-quiz-dialog-title');
    dialog.innerHTML =
      '<div class="party-quiz-dialog__inner">' +
        '<div class="party-quiz-dialog__head">' +
          '<div>' +
            '<p class="party-quiz-dialog__kicker">党校选择题 · 乱序自测</p>' +
            '<p class="party-quiz-dialog__title" id="party-quiz-dialog-title">第 <strong data-party-quiz-index>1</strong> / <strong data-party-quiz-total></strong> 题</p>' +
          '</div>' +
          '<button type="button" class="party-quiz-close" data-party-quiz-close aria-label="退出自测">×</button>' +
        '</div>' +
        '<div class="party-quiz-progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" aria-label="答题进度">' +
          '<span class="party-quiz-progress__bar" data-party-quiz-bar></span>' +
        '</div>' +
        '<div class="party-quiz-status">' +
          '<span>正确 <strong data-party-quiz-correct>0</strong></span>' +
          '<span>已答 <strong data-party-quiz-answered>0</strong></span>' +
          '<span>正确率 <strong data-party-quiz-rate>—</strong></span>' +
        '</div>' +
        '<div class="party-quiz-body" data-party-quiz-body></div>' +
        '<div class="party-quiz-dialog__foot" data-party-quiz-foot>' +
          '<button type="button" class="party-quiz-exit" data-party-quiz-exit>退出</button>' +
          '<button type="button" class="party-quiz-next" data-party-quiz-next disabled>下一题</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(dialog);

    var startButton = tools.querySelector('[data-party-quiz-start]');
    var body = dialog.querySelector('[data-party-quiz-body]');
    var nextButton = dialog.querySelector('[data-party-quiz-next]');
    var foot = dialog.querySelector('[data-party-quiz-foot]');
    var progress = dialog.querySelector('[role="progressbar"]');
    var bar = dialog.querySelector('[data-party-quiz-bar]');

    var queue = [];
    var index = 0;
    var answered = 0;
    var correct = 0;
    var locked = true;
    var current = null;

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

    function answerKeyOf(item) {
      var answer = item.querySelector('.quiz-answer');
      var match = (answer ? textOf(answer) : '').toUpperCase().match(/[A-D]/);
      return match ? match[0] : '';
    }

    function setText(selector, value) {
      var el = dialog.querySelector(selector);
      if (el) el.textContent = value;
    }

    function updateStats() {
      var total = queue.length || items.length;
      setText('[data-party-quiz-correct]', correct);
      setText('[data-party-quiz-answered]', answered);
      setText('[data-party-quiz-rate]', answered ? Math.round((correct / answered) * 100) + '%' : '—');
      setText('[data-party-quiz-index]', Math.min(index + 1, total));
      setText('[data-party-quiz-total]', total);
      progress.setAttribute('aria-valuemax', String(total));
      progress.setAttribute('aria-valuenow', String(answered));
      bar.style.width = (answered / total) * 100 + '%';
    }

    function makeOption(li, fallbackKey) {
      var keyEl = li.querySelector('.opt-key');
      var key = keyEl ? textOf(keyEl).replace(/[^A-Za-z]/g, '').charAt(0).toUpperCase() : '';
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'party-quiz-option';
      btn.dataset.key = key || fallbackKey;
      btn.innerHTML = li.innerHTML;
      btn.addEventListener('click', function () {
        choose(btn);
      });
      return btn;
    }

    function renderQuestion() {
      locked = false;
      current = queue[index];

      var number = textOf(current.querySelector('.quiz-num')) || String(index + 1);
      var sourceQuestion = current.querySelector('.quiz-q');
      var questionClone = sourceQuestion ? sourceQuestion.cloneNode(true) : document.createElement('p');
      var badge = questionClone.querySelector('.quiz-num');
      if (badge) badge.remove();

      body.innerHTML = '';

      var question = document.createElement('div');
      question.className = 'party-quiz-question';

      var meta = document.createElement('p');
      meta.className = 'party-quiz-question__meta';
      meta.textContent = '题库第 ' + number + ' 题';
      question.appendChild(meta);

      var questionText = document.createElement('div');
      questionText.className = 'party-quiz-question__text';
      questionText.appendChild(questionClone);
      question.appendChild(questionText);

      var options = document.createElement('div');
      options.className = 'party-quiz-options';
      options.setAttribute('role', 'group');
      options.setAttribute('aria-label', '选项');
      var lis = current.querySelectorAll('.quiz-options li');
      Array.prototype.forEach.call(lis, function (li, i) {
        options.appendChild(makeOption(li, String.fromCharCode(65 + i)));
      });
      question.appendChild(options);

      var feedback = document.createElement('p');
      feedback.className = 'party-quiz-feedback';
      feedback.setAttribute('aria-live', 'polite');
      question.appendChild(feedback);

      body.appendChild(question);
      body.scrollTop = 0;
      nextButton.disabled = true;
      nextButton.textContent = index === queue.length - 1 ? '查看结果' : '下一题';
      dialog.classList.remove('is-result');
      foot.hidden = false;
      updateStats();

      var first = options.querySelector('.party-quiz-option');
      if (first) first.focus();
    }

    function choose(button) {
      if (locked) return;
      locked = true;

      var answerKey = current ? answerKeyOf(current) : '';
      var feedback = body.querySelector('.party-quiz-feedback');
      var options = body.querySelectorAll('.party-quiz-option');

      Array.prototype.forEach.call(options, function (btn) {
        btn.disabled = true;
        if (answerKey && btn.dataset.key === answerKey) btn.classList.add('is-correct');
      });

      if (answerKey && button.dataset.key === answerKey) {
        button.classList.add('is-correct');
        correct += 1;
        feedback.className = 'party-quiz-feedback is-correct';
        feedback.textContent = '回答正确';
      } else {
        button.classList.add('is-wrong');
        feedback.className = 'party-quiz-feedback is-wrong';
        feedback.textContent = answerKey ? '回答错误，正确答案是 ' + answerKey : '本题答案暂缺';
      }

      answered += 1;
      updateStats();
      nextButton.disabled = false;
      nextButton.focus();
    }

    function showResult() {
      locked = true;
      dialog.classList.add('is-result');
      foot.hidden = true;

      var total = queue.length;
      var rate = total ? Math.round((correct / total) * 100) : 0;

      body.innerHTML = '';
      var result = document.createElement('div');
      result.className = 'party-quiz-result';
      result.setAttribute('role', 'status');
      result.innerHTML =
        '<p class="party-quiz-result__kicker">本轮完成</p>' +
        '<p class="party-quiz-result__score"><strong>' + correct + '</strong><span>/ ' + total + '</span></p>' +
        '<p class="party-quiz-result__rate">正确率 ' + rate + '%</p>' +
        '<div class="party-quiz-result__actions">' +
          '<button type="button" class="party-quiz-next" data-party-quiz-restart>再来一轮（重新乱序）</button>' +
          '<button type="button" class="party-quiz-exit" data-party-quiz-result-exit>关闭</button>' +
        '</div>';
      body.appendChild(result);
      body.scrollTop = 0;

      var restart = result.querySelector('[data-party-quiz-restart]');
      var close = result.querySelector('[data-party-quiz-result-exit]');
      if (restart) restart.addEventListener('click', startRound);
      if (close) {
        close.addEventListener('click', function () {
          dialog.close();
        });
      }
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
      answered = 0;
      correct = 0;
      locked = true;
      renderQuestion();

      document.body.classList.add('party-quiz-open');
      if (typeof dialog.showModal === 'function') {
        if (!dialog.open) dialog.showModal();
      } else {
        dialog.setAttribute('open', '');
      }

      var first = dialog.querySelector('.party-quiz-option');
      if (first) first.focus();
    }

    function resetDialogState() {
      document.body.classList.remove('party-quiz-open');
      dialog.classList.remove('is-result');
      foot.hidden = false;
    }

    function closeDialog() {
      if (typeof dialog.close === 'function' && dialog.open) {
        dialog.close();
      } else {
        dialog.removeAttribute('open');
      }
      resetDialogState();
    }

    startButton.addEventListener('click', startRound);
    nextButton.addEventListener('click', nextQuestion);
    dialog.querySelector('[data-party-quiz-close]').addEventListener('click', closeDialog);
    dialog.querySelector('[data-party-quiz-exit]').addEventListener('click', closeDialog);

    dialog.addEventListener('click', function (e) {
      if (e.target === dialog) closeDialog();
    });

    dialog.addEventListener('close', function () {
      resetDialogState();
      startButton.focus();
    });

    dialog.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') return;
      if (!locked && /^[a-dA-D]$/.test(e.key)) {
        var byKey = dialog.querySelector('.party-quiz-option[data-key="' + e.key.toUpperCase() + '"]');
        if (byKey) {
          e.preventDefault();
          byKey.click();
        }
      } else if (!locked && /^[1-4]$/.test(e.key)) {
        var byIndex = dialog.querySelectorAll('.party-quiz-option')[parseInt(e.key, 10) - 1];
        if (byIndex) {
          e.preventDefault();
          byIndex.click();
        }
      }
    });
  });
})();
