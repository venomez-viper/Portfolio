/**
 * Skills Word Cloud Particle System
 * Creates a drifting background of skills that highlight and react to the cursor.
 */

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.createElement('canvas');
    canvas.id = 'skills-particle-canvas';
    Object.assign(canvas.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: '0'
    });

    // Insert right after the fixed background
    const bg = document.querySelector('.fixed-background');
    if (bg && bg.nextSibling) {
        bg.parentNode.insertBefore(canvas, bg.nextSibling);
    } else {
        document.body.prepend(canvas);
    }

    const ctx = canvas.getContext('2d');
    let width, height;

    const skills = [
        "Solutions Engineering", "Solution Architecture", "Technical Discovery",
        "Requirements Gathering", "Proof of Concept", "Technical Demos",
        "API Integration", "REST APIs", "System Design", "Enterprise Architecture",
        "SaaS Platforms", "Cloud Architecture", "AWS", "Infrastructure as Code",
        "Terraform", "CI/CD", "Git", "Automation", "Security Architecture",
        "IAM", "SOC 2", "Data Modeling", "SQL", "Python", "ETL", "Data Integration",
        "Business Intelligence", "Dashboarding", "KPI Strategy", "Data Storytelling",
        "Predictive Analytics", "Process Optimization", "Consultative Selling",
        "Value Selling", "Stakeholder Management", "Executive Presentations",
        "ROI Modeling", "Competitive Analysis", "RFP Responses", "Sales Enablement",
        "Cross-Functional Collaboration", "Customer Workshops", "Technical Documentation",
        "Troubleshooting", "Scalability Planning", "Performance Optimization",
        "Digital Transformation", "Strategic Thinking", "Customer Success Alignment", "Revenue Impact"
    ];

    const particles = [];
    const colors = [
        '#64B5F6', // Light Blue
        '#4DD0E1', // Cyan
        '#BA68C8', // Purple
        '#FFB74D', // Orange
        '#81C784', // Green
        '#F06292'  // Pink
    ];

    let mouse = { x: -1000, y: -1000, radius: 120 }; // Tighter radius
    let isHoveringCard = false;

    window.addEventListener('mousemove', (e) => {
        // Prevent particles from showing up behind the main content cards
        if (e.target.closest('.timeline-content') ||
            e.target.closest('.hero-glass-panel') ||
            e.target.closest('.beyond-card') ||
            e.target.closest('.contact-glass')) {
            isHoveringCard = true;
            mouse.x = -1000;
            mouse.y = -1000;
        } else {
            isHoveringCard = false;
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        }
    });

    window.addEventListener('mouseout', () => {
        mouse.x = -1000;
        mouse.y = -1000;
        isHoveringCard = false;
    });

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor(text) {
            this.text = text;
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.baseSize = Math.random() * 10 + 12; // 12 to 22
            this.size = this.baseSize;
            this.baseColor = 'rgba(255, 255, 255, 0)';
            this.highlightColor = colors[Math.floor(Math.random() * colors.length)];
            this.alpha = 0;
            this.targetAlpha = 0;
            this.currentColor = this.baseColor;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Wrap around edges
            if (this.x < -100) this.x = width + 100;
            if (this.x > width + 100) this.x = -100;
            if (this.y < -50) this.y = height + 50;
            if (this.y > height + 50) this.y = -50;

            // Mouse interaction
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Particles are hidden by default, and only visible when mouse is close
            if (distance < mouse.radius) {
                const force = (mouse.radius - distance) / mouse.radius;
                this.size = this.baseSize + force * 15;
                // Fade in based on how close the mouse is
                this.targetAlpha = force * 0.95;

                // Slight repel
                this.x -= dx * force * 0.02;
                this.y -= dy * force * 0.02;
            } else {
                this.size = this.baseSize;
                this.targetAlpha = 0;
            }

            // Smooth alpha transition
            this.alpha += (this.targetAlpha - this.alpha) * 0.1;
        }

        draw() {
            if (this.alpha < 0.01) return; // Don't draw if practically invisible

            ctx.font = `600 ${this.size}px Outfit, -apple-system, system-ui, sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            if (this.alpha > 0.2) {
                // Highlighted state
                ctx.fillStyle = this.hexToRgba(this.highlightColor, this.alpha);
                ctx.shadowBlur = 15;
                ctx.shadowColor = this.highlightColor;
            } else {
                // Base state
                ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
                ctx.shadowBlur = 0;
            }

            ctx.fillText(this.text, this.x, this.y);
            ctx.shadowBlur = 0; // Reset
        }

        hexToRgba(hex, alpha) {
            const r = parseInt(hex.slice(1, 3), 16);
            const g = parseInt(hex.slice(3, 5), 16);
            const b = parseInt(hex.slice(5, 7), 16);
            return `rgba(${r}, ${g}, ${b}, ${alpha})`;
        }
    }

    function init() {
        particles.length = 0;
        // Create more particles by duplicating the array to fill the screen better
        const allSkills = [...skills, ...skills, ...skills];
        allSkills.forEach(skill => {
            particles.push(new Particle(skill));
        });
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        requestAnimationFrame(animate);
    }

    init();
    animate();
});
