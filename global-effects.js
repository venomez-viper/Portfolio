/**
 * Global Effects: Cursor Tracking, Security & Utils
 */

document.addEventListener('DOMContentLoaded', () => {
    initSpotlight();
    initSecurity();
    initEmailProtection();
    initEventTracking();
});

/**
 * Security: Link Protection & CSP Enforcement
 */
function initSecurity() {
    // Audit all links for security
    document.querySelectorAll('a').forEach(link => {
        const href = (link.getAttribute('href') || '').toLowerCase();
        const isExternal = href.startsWith('http') && !href.includes(window.location.hostname);
        const isResume = href.includes('resume');

        // External Link Protection (Prevents Tabnabbing)
        if (isExternal || isResume) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });

    // Simple Anti-Iframe protection (prevent clickjacking if not on specific host)
    if (window.self !== window.top) {
        window.top.location = window.self.location;
    }
}

/**
 * Email Obfuscation: Prevents bot scraping
 */
function initEmailProtection() {
    const emailLinks = document.querySelectorAll('[data-email-protect]');
    const emailDisplay = document.getElementById('emailDisplay');

    // Parts of the email to be assembled (security through obscurity)
    const user = "akashagakash";
    const domain = "gmail.com";

    emailLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const fullEmail = `${user}@${domain}`;

            if (emailDisplay) {
                emailDisplay.textContent = fullEmail;
                emailDisplay.style.display = 'block';
                emailDisplay.style.opacity = '0';
                setTimeout(() => {
                    emailDisplay.style.transition = 'opacity 0.5s ease';
                    emailDisplay.style.opacity = '1';
                }, 10);
            }

            // Optional: copy to clipboard or open mailto
            // window.location.href = `mailto:${fullEmail}`;
        });
    });
}

/**
 * Event Tracking: Captures high-intent recruiter actions
 */
function initEventTracking() {
    document.querySelectorAll('a').forEach(link => {
        const href = (link.getAttribute('href') || '').toLowerCase();

        // Track Resume Downloads
        if (href.includes('resume.pdf')) {
            link.addEventListener('click', () => {
                if (typeof gtag === 'function') {
                    gtag('event', 'resume_download', {
                        'event_category': 'engagement',
                        'event_label': 'Resume PDF',
                        'transport_type': 'beacon'
                    });
                }
            });
        }

        // Track LinkedIn Clicks
        if (href.includes('linkedin.com')) {
            link.addEventListener('click', () => {
                if (typeof gtag === 'function') {
                    gtag('event', 'social_click', {
                        'event_category': 'engagement',
                        'event_label': 'LinkedIn',
                        'transport_type': 'beacon'
                    });
                }
            });
        }

        // Track GitHub Clicks
        if (href.includes('github.com')) {
            link.addEventListener('click', () => {
                if (typeof gtag === 'function') {
                    gtag('event', 'social_click', {
                        'event_category': 'engagement',
                        'event_label': 'GitHub',
                        'transport_type': 'beacon'
                    });
                }
            });
        }
    });
}

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
