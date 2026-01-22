// ===== UTILITY: Check for reduced motion preference =====
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ===== NATURAL NATIVE SCROLLING (DEPRECATED CUSTOM SMOOTH SCROLL) =====
// Removed custom smooth scroll class that added motion blur and lag.
// Browser's native momentum is preferred for a "natural" feel.


// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, index * 100);
            }
        });
    },
    {
        threshold: 0.1,
        rootMargin: '0px 0px -20px 0px'
    }
);

// Observe all reveal elements
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal-element, .project-card, .about-panel, .contact-content');
    revealElements.forEach(el => revealObserver.observe(el));
});

// ===== LIQUID GLASS BUTTON MOUSE TRACKING =====
const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');

buttons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
        if (prefersReducedMotion) return;

        const rect = button.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        button.style.setProperty('--mouse-x', `${x}%`);
        button.style.setProperty('--mouse-y', `${y}%`);
    });

    button.addEventListener('mouseleave', () => {
        button.style.setProperty('--mouse-x', '50%');
        button.style.setProperty('--mouse-y', '50%');
    });
});

// ===== APPLE-STYLE SCROLL HANDOFF =====
const heroPanel = document.getElementById('heroPanel');
const projectsSection = document.getElementById('projects');

function clamp01(n) { return Math.max(0, Math.min(1, n)); }

function smoothstep(edge0, edge1, x) {
    const t = clamp01((x - edge0) / (edge1 - edge0));
    return t * t * (3 - 2 * t);
}

let handoffTarget = 0;
let handoffCur = 0;
let ticking = false;

function computeScrollVars() {
    if (!heroPanel || !projectsSection) return;

    const vh = window.innerHeight || 1;
    const projTop = projectsSection.getBoundingClientRect().top;

    // When projTop is far below, handoff ~0. As it approaches top, handoff →1
    const hand = 1 - (projTop / (vh * 0.9));
    handoffTarget = clamp01(hand);
    handoffTarget = smoothstep(0.05, 0.95, handoffTarget);

    ticking = false;
}

function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(computeScrollVars);
}

window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onScroll);

function animateScrollVars() {
    if (!prefersReducedMotion) {
        // Snapier approach (gives that natural Apple feel)
        handoffCur += (handoffTarget - handoffCur) * 0.18;

        // Snap tiny floats to zero
        if (Math.abs(handoffCur - handoffTarget) < 0.0005) handoffCur = handoffTarget;

        document.documentElement.style.setProperty('--handoff', handoffCur.toFixed(4));
    }
    requestAnimationFrame(animateScrollVars);
}

// Initialize
onScroll();
animateScrollVars();

// ===== PROJECT CARD HOVER HOTSPOT =====
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    const cardGlass = card.querySelector('.card-glass');
    const hotspot = card.querySelector('.card-hotspot');

    if (!cardGlass || !hotspot) return;

    cardGlass.addEventListener('mousemove', (e) => {
        if (prefersReducedMotion) return;

        const rect = cardGlass.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        hotspot.style.left = `${x}px`;
        hotspot.style.top = `${y}px`;
    });

    cardGlass.addEventListener('mouseleave', () => {
        hotspot.style.opacity = '0';
    });
});

// ===== COPY EMAIL FUNCTIONALITY =====
const copyBtn = document.getElementById('copyBtn');
const emailAddress = document.getElementById('emailAddress');

if (copyBtn && emailAddress) {
    copyBtn.addEventListener('click', async () => {
        const email = emailAddress.textContent;

        try {
            await navigator.clipboard.writeText(email);
            copyBtn.classList.add('copied');

            setTimeout(() => {
                copyBtn.classList.remove('copied');
            }, 2000);
        } catch (err) {
            console.error('Failed to copy email:', err);

            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = email;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            document.body.appendChild(textArea);
            textArea.select();

            try {
                document.execCommand('copy');
                copyBtn.classList.add('copied');
                setTimeout(() => {
                    copyBtn.classList.remove('copied');
                }, 2000);
            } catch (err2) {
                console.error('Fallback copy failed:', err2);
            }

            document.body.removeChild(textArea);
        }
    });
}

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const navHeight = document.querySelector('.nav-glass').offsetHeight;
            const targetPosition = target.offsetTop - navHeight - 40;

            window.scrollTo({
                top: targetPosition,
                behavior: prefersReducedMotion ? 'auto' : 'smooth'
            });
        }
    });
});

// ===== PERFORMANCE: Debounce resize events =====
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Recalculate any layout-dependent values if needed
    }, 150);
});

// ===== ACCESSIBILITY: Focus visible =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// Add focus styles for keyboard navigation
const style = document.createElement('style');
style.textContent = `
    body.keyboard-nav *:focus {
        outline: 2px solid var(--accent-blue);
        outline-offset: 4px;
    }
`;
// ===== SIGNATURE LOCK BAR ANIMATION =====
const sigAnchor = document.getElementById('sigAnchor');
const sigSticky = document.getElementById('sigSticky');
const sigSheet = document.querySelector('.sig-sheet');

// Smooth value for signature progress
let sigProgressTarget = 0;
let sigProgressCur = 0;

function computeSigVars() {
    if (!sigAnchor || !sigSheet) return;

    const vh = window.innerHeight || 1;
    const sigRect = sigAnchor.getBoundingClientRect();
    const sigTop = sigRect.top;

    // Calculate progress based on anchor position relative to viewport
    // Window: from top of viewport (0) to about 40% down
    // When anchor is lower, progress is 0. As it scrolls up/past, progress -> 1

    // Start transition when anchor top is at 45% of viewport
    // End transition when anchor top is at 15% of viewport
    const startOffset = vh * 0.45;
    const endOffset = vh * 0.15;

    const rawProgress = 1 - ((sigTop - endOffset) / (startOffset - endOffset));

    sigProgressTarget = clamp01(rawProgress);
}

function animateSig() {
    if (!sigSheet) return;

    if (!prefersReducedMotion) {
        // Smooth lerp for buttery Apple feel
        sigProgressCur += (sigProgressTarget - sigProgressCur) * 0.08;

        // Snap to target if close
        if (Math.abs(sigProgressCur - sigProgressTarget) < 0.001) {
            sigProgressCur = sigProgressTarget;
        }

        // Apply transforms
        // sheet slides up from 28px -> 0px
        // opacity goes from 0.25 -> 1

        const y = 28 * (1 - sigProgressCur);
        const opacity = 0.25 + (sigProgressCur * 0.75);

        sigSheet.style.transform = `translateY(${y}px)`;
        sigSheet.style.opacity = opacity;
    }
}

// Hook into existing loops
// ===== INIT SIGNATURE LOGIC =====
// Run once to set initial state
computeSigVars();

// Update on scroll
window.addEventListener('scroll', () => {
    requestAnimationFrame(computeSigVars);
}, { passive: true });

window.addEventListener('resize', () => {
    computeSigVars();
});

// Start animation loop
function animateSigLoop() {
    animateSig();
    requestAnimationFrame(animateSigLoop);
}
animateSigLoop();

console.log('🌊 Liquid glass portfolio initialized');
