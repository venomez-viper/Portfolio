/**
 * Global Effects: Cursor Tracking & Utils
 */

document.addEventListener('DOMContentLoaded', () => {
    initSpotlight();
    fixEmailTypo();
    ensureSafeResumeLinks();
});

/**
 * Subtle Mouse Spotlight Tracker
 * Site-wide effect with easing
 */
function initSpotlight() {
    const tracker = document.createElement('div');
    tracker.className = 'spotlight-tracker';
    document.body.appendChild(tracker);

    // Support for reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Smooth easing loop
    function update() {
        const ease = 0.15;
        currentX += (mouseX - currentX) * ease;
        currentY += (mouseY - currentY) * ease;

        document.documentElement.style.setProperty('--mouse-x', `${currentX}px`);
        document.documentElement.style.setProperty('--mouse-y', `${currentY}px`);

        requestAnimationFrame(update);
    }
    update();
}

/**
 * Fixes the common email typo site-wide
 */
function fixEmailTypo() {
    const target = "akashagakash@gamil.com";
    const correct = "akashagakash@gmail.com";

    // Find all text nodes or specific IDs
    const emailDisplay = document.getElementById('emailDisplay');
    if (emailDisplay && emailDisplay.textContent.includes(target)) {
        emailDisplay.textContent = emailDisplay.textContent.replace(target, correct);
    }

    // Also scan all links just in case
    document.querySelectorAll('a').forEach(link => {
        if (link.href.includes(target)) {
            link.href = link.href.replace(target, correct);
        }
    });
}

/**
 * Ensures all Resume links are safe and open in new tab
 */
function ensureSafeResumeLinks() {
    document.querySelectorAll('a').forEach(link => {
        if (link.href.toLowerCase().includes('resume.pdf')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
}
