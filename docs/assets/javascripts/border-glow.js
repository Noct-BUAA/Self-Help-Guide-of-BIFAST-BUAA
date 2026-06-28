/**
 * BorderGlow — Mouse-tracking border glow effect
 * Adapted from @react-bits/BorderGlow-JS-CSS for vanilla JS
 *
 * Usage: Add class "border-glow" to any container and it gets a
 * mouse-tracking glow border effect.
 *
 * Customize via CSS variables on the element:
 *   --glow-color: 40 80 80;        (RGB values for glow)
 *   --glow-bg: #120F17;            (background color)
 *   --glow-radius: 28px;           (border radius)
 *   --glow-size: 40px;             (glow radius)
 *   --glow-intensity: 1;           (opacity multiplier)
 *   --glow-spread: 25;             (cone spread in degrees)
 */

document.addEventListener('DOMContentLoaded', () => {
  const glowContainers = document.querySelectorAll('.border-glow');

  glowContainers.forEach((container) => {
    // Read config from CSS variables or data attributes
    const getVar = (name, fallback) => {
      const val = getComputedStyle(container).getPropertyValue(name).trim();
      return val || fallback;
    };

    const glowColor = getVar('--glow-color', '40 80 80');
    const glowBg = getVar('--glow-bg', '#120F17');
    const glowRadius = getVar('--glow-radius', '28px');
    const glowSize = parseFloat(getVar('--glow-size', '40'));
    const glowIntensity = parseFloat(getVar('--glow-intensity', '1'));
    const glowSpread = parseFloat(getVar('--glow-spread', '25'));

    // Apply base styles
    container.style.position = 'relative';
    container.style.borderRadius = glowRadius;
    container.style.overflow = 'hidden';
    container.style.backgroundColor = glowBg;

    // Create glow overlay
    const overlay = document.createElement('div');
    overlay.className = 'border-glow-overlay';
    overlay.style.cssText = `
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 1;
      border-radius: inherit;
      opacity: 0;
      transition: opacity 0.2s ease;
    `;
    container.appendChild(overlay);

    // Track mouse
    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate distance to each edge
      const distTop = y;
      const distBottom = rect.height - y;
      const distLeft = x;
      const distRight = rect.width - x;

      // Find the closest edges
      const edgeSensitivity = Math.min(rect.width, rect.height) * 0.25;
      const nearTop = distTop < edgeSensitivity;
      const nearBottom = distBottom < edgeSensitivity;
      const nearLeft = distLeft < edgeSensitivity;
      const nearRight = distRight < edgeSensitivity;

      if (nearTop || nearBottom || nearLeft || nearRight) {
        overlay.style.opacity = glowIntensity;

        // Position the glow at the closest point on the edge
        let glowX = x, glowY = y;
        if (nearTop) glowY = 0;
        if (nearBottom) glowY = rect.height;
        if (nearLeft) glowX = 0;
        if (nearRight) glowX = rect.width;

        // If near corner, glow at corner
        if (nearTop && nearLeft) { glowX = 0; glowY = 0; }
        if (nearTop && nearRight) { glowX = rect.width; glowY = 0; }
        if (nearBottom && nearLeft) { glowX = 0; glowY = rect.height; }
        if (nearBottom && nearRight) { glowX = rect.width; glowY = rect.height; }

        overlay.style.background = `
          radial-gradient(
            circle ${glowSize}px at ${glowX}px ${glowY}px,
            rgb(${glowColor} / ${0.6 * glowIntensity}) 0%,
            rgb(${glowColor} / ${0.2 * glowIntensity}) ${glowSpread}%,
            transparent 70%
          )
        `;
      } else {
        overlay.style.opacity = '0';
      }
    });

    container.addEventListener('mouseleave', () => {
      overlay.style.opacity = '0';
    });
  });
});
