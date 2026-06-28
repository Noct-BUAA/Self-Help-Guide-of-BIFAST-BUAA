/**
 * TextType — Typing/deleting text animation
 * Adapted from @react-bits/TextType for vanilla JS
 *
 * Usage: <span class="text-type" data-texts='["text1","text2"]'></span>
 *
 * Customize via data attributes:
 *   data-texts='["Text one", "Text two"]'  (JSON array of strings)
 *   data-typing-speed="75"                  (ms per character typing)
 *   data-deleting-speed="50"                (ms per character deleting)
 *   data-pause-duration="1500"              (ms pause after typing)
 *   data-show-cursor="true"                 (show blinking cursor)
 *   data-cursor-char="_"                    (cursor character)
 *   data-cursor-blink="0.5"                 (cursor blink duration in seconds)
 */

document.addEventListener('DOMContentLoaded', () => {
  const typeElements = document.querySelectorAll('.text-type');

  typeElements.forEach((el) => {
    const texts = JSON.parse(el.dataset.texts || '[""]');
    const typingSpeed = parseInt(el.dataset.typingSpeed || 75);
    const deletingSpeed = parseInt(el.dataset.deletingSpeed || 50);
    const pauseDuration = parseInt(el.dataset.pauseDuration || 1500);
    const showCursor = el.dataset.showCursor !== 'false';
    const cursorChar = el.dataset.cursorChar || '_';
    const cursorBlink = parseFloat(el.dataset.cursorBlink || 0.5);

    if (!texts.length) return;

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let currentText = '';

    const cursorSpan = document.createElement('span');
    cursorSpan.className = 'text-type-cursor';
    cursorSpan.textContent = cursorChar;
    cursorSpan.style.cssText = `
      animation: textTypeBlink ${cursorBlink}s step-end infinite;
      font-weight: 100;
    `;

    if (showCursor) {
      el.appendChild(cursorSpan);
    }

    // Add blink keyframes if not present
    if (!document.getElementById('text-type-style')) {
      const style = document.createElement('style');
      style.id = 'text-type-style';
      style.textContent = `
        @keyframes textTypeBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `;
      document.head.appendChild(style);
    }

    function type() {
      const fullText = texts[textIndex];

      if (!isDeleting) {
        // Typing
        charIndex++;
        currentText = fullText.substring(0, charIndex);
        el.childNodes[0] && el.childNodes[0].nodeType === 3
          ? (el.childNodes[0].textContent = currentText)
          : el.prepend(document.createTextNode(currentText));

        if (charIndex === fullText.length) {
          // Finished typing, pause then start deleting
          setTimeout(() => {
            isDeleting = true;
            type();
          }, pauseDuration);
          return;
        }
        setTimeout(type, typingSpeed);
      } else {
        // Deleting
        charIndex--;
        currentText = fullText.substring(0, charIndex);
        el.childNodes[0] && el.childNodes[0].nodeType === 3
          ? (el.childNodes[0].textContent = currentText)
          : el.prepend(document.createTextNode(currentText));

        if (charIndex === 0) {
          // Finished deleting, move to next text
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
        }
        setTimeout(type, deletingSpeed);
      }
    }

    type();
  });
});
