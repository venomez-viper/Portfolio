/* Data Model */
const projects = [
    {
        id: "vibelink-ml",
        title: "VibeLink Analytics",
        summary: "ML-driven behavior analysis to reduce churn and improve match success rates.",
        category: "Machine Learning",
        tags: ["Python", "Sklearn", "Product"],
        tools: ["Python", "Pandas", "Scikit-Learn", "Tableau"],
        artifacts: {
            hasDeck: false,
            hasReport: true,
            hasCode: false,
            hasDashboard: false,
            reportUrl: "Projects/VibeLink Final Report.pdf"
        },
        outcome: "Outcome: Reduced churn by 12% via behavioral targeting",
        date: "2025-11-15",
        impactScore: 9,
        complexityScore: 8,
        visualScore: 7,
        role: "Data Science + Product Strategy",
        problem: "VibeLink faced high user churn (40% in month 1) and low match quality. Demographics alone were poor predictors of retention.",
        approach: [
            "Engineered features from behavioral signals (bio length, photo count, chat latency).",
            "Trained logistic regression models (AUC 0.74) to uphold interpretability vs black-box.",
            "Segmented users into 'High Intent' vs 'Casual' for differentiated onboarding."
        ],
        results: [
            "Identified that bio length > 40 chars correlated with 2x retention.",
            "Reduced churn by 12% in the pilot cohort.",
            "Visualized entire user funnel in Tableau to enable daily monitoring."
        ],
        recommendations: [
            "Force minimum bio length during onboarding.",
            "Deprioritize inactive profiles in the matching algorithm.",
            "Launch 'High Intent' badge for verified active users."
        ]
    },
    {
        id: "royal-caribbean",
        title: "Royal Caribbean vs NCL",
        summary: "Strategic financial valuation and competitive comparison for investment recommendation.",
        category: "Finance & Valuation",
        tags: ["Finance", "Valuation", "Strategy"],
        tools: ["Excel", "Bloomberg", "PowerPoint"],
        artifacts: {
            hasDeck: true,
            hasReport: true,
            hasCode: false,
            hasDashboard: false,
            deckUrl: "Projects/Presentation- Group E.pptx",
            reportUrl: "Projects/RCL vs NCLH - Group E-Report.pdf"
        },
        outcome: "Outcome: Clear 'Buy' recommendation supported by DCF model",
        date: "2025-09-10",
        impactScore: 8,
        complexityScore: 7,
        visualScore: 8,
        role: "Financial Analyst",
        problem: "Investors needed a comparative analysis of RCL vs NCLH post-pandemic to determine which cruise line had better liquidity and upside.",
        approach: [
            "Built discounted cash flow (DCF) models for both entities.",
            "Analyzed debt maturity profiles and liquidity runways.",
            "Benchmarked occupancy recovery rates against historical averages."
        ],
        results: [
            "RCL showed superior unit economics despite higher debt load.",
            "Identified 15% undervaluation in RCL stock price.",
            "NCLH faced higher execution risk due to smaller fleet size."
        ],
        recommendations: [
            "Buy RCL, Hold NCLH.",
            "Monitor fuel hedging strategies as a key risk factor.",
            "Focus on onboard spend revenue as the primary growth driver."
        ]
    },
    {
        id: "vagao-startup",
        title: "Vagao Startup Launch",
        summary: "Full business manual and competitor analysis for a new market entrant.",
        category: "Product Management",
        tags: ["Strategy", "Market Research", "GTM"],
        tools: ["Market Analysis", "Business Planning", "Adobe Suite"],
        artifacts: {
            hasDeck: false,
            hasReport: true,
            hasCode: false,
            hasDashboard: false,
            reportUrl: "Projects/Vagao Startup Business Manual version 0.1.pdf",
            deckUrl: "Projects/Vagao Competitor Analysis Report Version 0.1.pdf" // Using deck slot for 2nd report
        },
        outcome: "Outcome: Defined GTM strategy and operational roadmap",
        date: "2025-08-01",
        impactScore: 8,
        complexityScore: 6,
        visualScore: 8,
        role: "Product Lead",
        problem: "Launching a new brand requires a cohesive detailed business manual and deep understanding of the competitive landscape.",
        approach: [
            "Conducted deep-dive competitor analysis (SWOT, feature parity, pricing).",
            "Defined the 'Vagao' brand voice, operational standards, and customer service protocols.",
            "Mapped the complete customer journey from acquisition to retention."
        ],
        results: [
            "Delivered a comprehensive Business Manual Version 0.1.",
            "Identified key market gaps in competitor offerings.",
            "Established a scalable framework for future franchise or expansion models."
        ],
        recommendations: [
            "Focus initial marketing on the identified underserved niche.",
            "Strictly adhere to the operational quality standards defined in the manual.",
            "Iterate on the manual based on Q1 feedback."
        ]
    },
    {
        id: "airport-security",
        title: "Airport Security Optimization",
        summary: "Queueing theory application to forecast staffing needs and minimize passenger wait times.",
        category: "Optimization",
        tags: ["Operations", "Queueing Theory", "Python"],
        tools: ["Python", "SimPy", "Excel"],
        artifacts: {
            hasDeck: true,
            hasReport: false,
            hasCode: false,
            hasDashboard: false,
            deckUrl: "Projects/Casestudy 2 FINAL.pptx"
        },
        outcome: "Outcome: Kept 95% of wait times under 5 minutes",
        date: "2025-06-20",
        impactScore: 8,
        complexityScore: 9,
        visualScore: 5,
        role: "Operations Researcher",
        problem: "Peak hour security lines were causing missed flights. Staffing was static regardless of flight volume.",
        approach: [
            "Modeled arrival rates using Poisson distributions extracted from flight schedules.",
            "Simulated M/M/s queues to test varied TSA agent staffing levels.",
            "Balanced cost of idle agents vs cost of passenger delay."
        ],
        results: [
            "Dynamic roster reduced peak wait times from 25 min to <5 min.",
            "Saved 15% in labor costs by reducing staff during lulls.",
            "Simulation accuracy validated within 5% of real-world observations."
        ],
        recommendations: [
            "Implement dynamic shift scheduling aligned with flight blocks.",
            "Open distinct express lanes for single-bag travelers.",
            "Install real-time queue monitors to redirect flow."
        ]
    },
    {
        id: "walsh-juice",
        title: "Walsh’s Juice Supply Chain",
        summary: "Linear programming model to minimize transportation and processing costs across the manufacturing network.",
        category: "Optimization",
        tags: ["Supply Chain", "Linear Programming", "Gurobi"],
        tools: ["Python", "Gurobi", "Excel Solvers"],
        artifacts: {
            hasDeck: true,
            hasReport: false,
            hasCode: false,
            hasDashboard: false,
            deckUrl: "Projects/Group 4 Case study 1.pptx"
        },
        outcome: "Outcome: Optimized network cost to $10.6M",
        date: "2025-04-12",
        impactScore: 9,
        complexityScore: 10,
        visualScore: 4,
        role: "Supply Chain Analyst",
        problem: "Walsh's Juice needed to determine optimal flow from groves to plants to warehouses to minimize total landed cost.",
        approach: [
            "Formulated a transshipment LP model with capacity constraints.",
            "Incorporated variable processing costs and fixed lane/route costs.",
            "Ran sensitivity analysis on fuel price volatility."
        ],
        results: [
            "Identified optimal lowest-cost flow totaling $10.6M.",
            "Determined that the Florida plant should run at 100% capacity.",
            "Found that closing the Texas warehouse would save $200k annually."
        ],
        recommendations: [
            "Renegotiate carrier contracts on the key FL-to-NY lane.",
            "Expand storage capacity at the main processing hub.",
            "Shift 10% of volume to rail for long-haul routes."
        ]
    },
    {
        id: "pom-singapore",
        title: "POM+ Singapore Pilot",
        summary: "Full project management plan including NPV, EVM, risk matrix, and scheduling for a new market launch.",
        category: "Project Management",
        tags: ["PMP", "EVM", "Risk Analysis"],
        tools: ["MS Project", "Excel", "Visio"],
        artifacts: {
            hasDeck: true,
            hasReport: false,
            hasCode: false,
            hasDashboard: false,
            deckUrl: "Projects/MGT 598 FINAL PRESENTATION UPDATE.pptx"
        },
        outcome: "Outcome: Identified schedule slippage early (SPI < 1)",
        date: "2025-02-28",
        impactScore: 7,
        complexityScore: 8,
        visualScore: 6,
        role: "Project Manager",
        problem: "Launching the POM+ product in Singapore required coordination across regulatory, marketing, and logistics teams with tight deadlines.",
        approach: [
            "Developed a Work Breakdown Structure (WBS) and Critical Path Method (CPM) schedule.",
            "Calculated Net Present Value (NPV) to justify the $2M investment.",
            "Tracked Earned Value metrics (CPI, SPI) weekly."
        ],
        results: [
            "Project flagged as behind schedule (SPI 0.85) in week 4, enabling corrective action.",
            "Cost Performance Index (CPI) remained healthy at 1.05.",
            "Risk matrix highlighted regulatory delay as the top threat."
        ],
        recommendations: [
            "Fast-track the regulatory approval phase by parallel processing.",
            "Allocate contingency budget to expedite shipping if needed.",
            "Hold daily standups during the launch week."
        ]
    },
    {
        id: "tableau-dashboard",
        title: "Sales Performance Dashboard",
        summary: "Interactive comparative dashboard for USA vs EU sales regions, focusing on margin analysis.",
        category: "Dashboards",
        tags: ["Tableau", "Data Viz", "SQL"],
        tools: ["Tableau", "SQL", "Figma"],
        artifacts: {
            hasDeck: false,
            hasReport: false,
            hasCode: false,
            hasDashboard: true,
            dashboardUrl: "Projects/MGT 586 - USA VS EU--Final.twbx"
        },
        outcome: "Outcome: Adopted by VP of Sales for weekly reviews",
        date: "2025-08-15",
        impactScore: 6,
        complexityScore: 5,
        visualScore: 10,
        role: "BI Developer",
        problem: "Sales executives struggled to compare regional performance due to fragmented Excel reports.",
        approach: [
            "Designed a clean, single-page view with region switchers.",
            "Implemented calculated fields for YoY growth and margin attainment.",
            "Used parameter actions for dynamic drill-downs."
        ],
        results: [
            "Reduced reporting time from 4 hours/week to zero (automated).",
            "Highlighted a 5% margin drag in the Southern Europe region.",
            "Improved data adoption across the sales team."
        ],
        recommendations: [
            "Integrate CRM data for pipeline visibility.",
            "Add mobile-responsive layout for field reps.",
            "Set up data alerts for margin drops < 15%."
        ]
    },
    {
        id: "demo-deck",
        title: "SaaS Demo Storytelling",
        summary: "A master narrative deck for complex B2B software, focusing on value selling over feature dumping.",
        category: "Presentations",
        tags: ["Storytelling", "Pre-Sales", "Design"],
        tools: ["PowerPoint", "Illustrator"],
        artifacts: {
            hasDeck: true,
            hasReport: false,
            hasCode: false,
            hasDashboard: false,
            deckUrl: "Projects/Final Presentation (2).pptx"
        },
        outcome: "Outcome: Increased demo-to-close rate by 15%",
        date: "2025-01-10",
        impactScore: 9,
        complexityScore: 4,
        visualScore: 9,
        role: "Solutions Engineer",
        problem: "Standard product demos were too technical and failed to connect with executive buyers.",
        approach: [
            "Structured the deck using the 'Hero's Journey' framework.",
            "Created custom visuals to simplify the architecture diagram.",
            "Focused on 'Before vs After' state rather than UI screenshots."
        ],
        results: [
            "Sales team reported higher engagement during calls.",
            "15% improvement in conversion from demo to proposal.",
            "Standardized the messaging across all 20 reps."
        ],
        recommendations: [
            "Train the team on the narrative delivery, not just the slides.",
            "Create industry-specific variations (Healthcare, FinTech).",
            "Keep the deck under 10 slides."
        ]
    }
];

/* State Logic */
let currentFilter = 'All';
let currentSort = 'recent';
let currentView = 'carousel'; // 'carousel' or 'grid'
let searchQuery = '';

// DOM Elements
const carouselTrack = document.getElementById('carouselTrack');
const projectGrid = document.getElementById('projectGrid');
const filterContainer = document.getElementById('filterContainer');
const sortSelect = document.getElementById('sortSelect');
const searchInput = document.getElementById('searchInput');
const clearFiltersBtn = document.getElementById('clearFilters');
const viewCarouselBtn = document.getElementById('viewCarousel');
const viewGridBtn = document.getElementById('viewGrid');
const carouselSection = document.getElementById('carouselSection');
const gridSection = document.getElementById('gridSection');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.getElementById('progressBar');
const drawerOverlay = document.getElementById('drawerOverlay');
const drawerPanel = document.getElementById('drawerPanel');
const drawerContent = document.getElementById('drawerContent');
const drawerClose = document.getElementById('drawerClose');

/* INIT */
function init() {
    renderProjects();
    setupEventListeners();
}

/* Rendering */
function getFilteredAndSortedProjects() {
    let filtered = projects.filter(p => {
        // Filter match
        const catMatch = currentFilter === 'All' || p.category === currentFilter;
        // Search match
        const q = searchQuery.toLowerCase();
        const searchMatch = !q ||
            p.title.toLowerCase().includes(q) ||
            p.summary.toLowerCase().includes(q) ||
            p.tags.some(t => t.toLowerCase().includes(q)) ||
            p.tools.some(t => t.toLowerCase().includes(q));

        return catMatch && searchMatch;
    });

    // Sorting
    return filtered.sort((a, b) => {
        if (currentSort === 'recent') return new Date(b.date) - new Date(a.date);
        if (currentSort === 'impact') return b.impactScore - a.impactScore;
        if (currentSort === 'technical') return b.complexityScore - a.complexityScore;
        if (currentSort === 'visual') return b.visualScore - a.visualScore;
        return 0;
    });
}

function createCardHTML(project) {
    const tagsHTML = project.tags.slice(0, 3).map(t => `<span class="tag">${t}</span>`).join('');

    let artifactLabel = '';
    if (project.artifacts.hasDeck) artifactLabel = 'Deck';
    else if (project.artifacts.hasDashboard) artifactLabel = 'Dashboard';
    else if (project.artifacts.hasCode) artifactLabel = 'Code';
    else artifactLabel = 'Case Study';

    return `
        <article class="project-card" data-id="${project.id}">
            <div class="card-glass">
                <div class="card-hotspot"></div>
                
                <div class="card-content-top">
                    <div class="card-header">
                        <span class="artifact-label">${artifactLabel}</span>
                        <span class="card-date">${project.date}</span>
                    </div>
                    
                    <h3 class="card-title">${project.title}</h3>
                    <p class="card-description">${project.summary}</p>
                    
                    <div class="card-tags">${tagsHTML}</div>
                </div>

                <div class="card-content-bottom">
                     <p class="card-outcome"><strong>Outcome:</strong> ${project.outcome.replace('Outcome:', '')}</p>
                     <button class="btn-primary-small">Open Project</button>
                </div>
            </div>
        </article>
    `;
}

function renderProjects() {
    const data = getFilteredAndSortedProjects();

    // Clear containers
    if (carouselTrack) carouselTrack.innerHTML = '';
    if (projectGrid) projectGrid.innerHTML = '';

    // Render
    data.forEach(p => {
        const html = createCardHTML(p);
        if (carouselTrack) carouselTrack.insertAdjacentHTML('beforeend', html);
        if (projectGrid) projectGrid.insertAdjacentHTML('beforeend', html);
    });

    // Handle "No Projects" state
    if (data.length === 0) {
        const emptyMsg = '<p style="text-align:center; color:rgba(255,255,255,0.5); width:100%; padding:2rem;">No projects match your filter.</p>';
        if (carouselTrack) carouselTrack.innerHTML = emptyMsg;
        if (projectGrid) projectGrid.innerHTML = emptyMsg;
    }

    // Apply reveal animations
    setTimeout(() => {
        const cards = document.querySelectorAll('.project-card');
        cards.forEach((card, i) => {
            setTimeout(() => card.classList.add('revealed'), i * 50);
        });
    }, 100);

    // Re-bind mouse tracking for hotspots
    bindCardHotspots();
    updateProgressBar();
}

function bindCardHotspots() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const cardGlass = card.querySelector('.card-glass');
        const hotspot = card.querySelector('.card-hotspot');

        if (!cardGlass || !hotspot) return;

        cardGlass.addEventListener('mousemove', (e) => {
            const rect = cardGlass.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            hotspot.style.opacity = '1';
            hotspot.style.left = `${x}px`;
            hotspot.style.top = `${y}px`;
        });

        cardGlass.addEventListener('mouseleave', () => {
            hotspot.style.opacity = '0';
        });
    });
}

/* Event Listeners */
function setupEventListeners() {
    // Filter Chips
    filterContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('chip')) {
            // Update UI
            document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
            e.target.classList.add('active');

            // Set Filter
            currentFilter = e.target.getAttribute('data-filter');
            toggleClearBtn();
            renderProjects();
        }
    });

    // Search
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        toggleClearBtn();
        renderProjects();
    });

    // Sort
    sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderProjects();
    });

    // Clear Filters
    clearFiltersBtn.addEventListener('click', () => {
        currentFilter = 'All';
        searchQuery = '';
        searchInput.value = '';
        document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        document.querySelector('.chip[data-filter="All"]').classList.add('active');
        toggleClearBtn();
        renderProjects();
    });

    // View Toggle
    viewCarouselBtn.addEventListener('click', () => setView('carousel'));
    viewGridBtn.addEventListener('click', () => setView('grid'));

    // Carousel Scroll (Arrows)
    prevBtn.addEventListener('click', () => scrollCarousel(-1));
    nextBtn.addEventListener('click', () => scrollCarousel(1));

    // Carousel Scroll (Native for progress bar)
    carouselTrack.addEventListener('scroll', updateProgressBar);

    // Card Clicks (Delegation)
    const handleCardClick = (e) => {
        const card = e.target.closest('.project-card');
        if (card && !e.target.closest('a')) { // Don't trigger if clicking an actual link
            openDrawer(card.getAttribute('data-id'));
        }
    };
    carouselTrack.addEventListener('click', handleCardClick);
    projectGrid.addEventListener('click', handleCardClick);

    // Browse Scroll
    const browseBtn = document.getElementById('browseBtn');
    if (browseBtn) {
        browseBtn.addEventListener('click', () => {
            const controls = document.getElementById('libraryControls');
            if (controls) controls.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Drawer
    if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
    if (drawerOverlay) {
        drawerOverlay.addEventListener('click', (e) => {
            if (e.target === drawerOverlay) closeDrawer();
        });
    }

    // Glass Panel Mouse Tracking (Hero & Controls)
    const glassPanels = document.querySelectorAll('.hero-glass-panel, .glass-panel');
    glassPanels.forEach(panel => {
        panel.addEventListener('mousemove', (e) => {
            const rect = panel.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            panel.style.setProperty('--mouse-x', `${x}%`);
            panel.style.setProperty('--mouse-y', `${y}%`);
        });
    });

    // ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeDrawer();
    });
}

function toggleClearBtn() {
    if (currentFilter !== 'All' || searchQuery !== '') {
        clearFiltersBtn.classList.remove('hidden');
    } else {
        clearFiltersBtn.classList.add('hidden');
    }
}

function setView(view) {
    currentView = view;
    if (view === 'carousel') {
        carouselSection.classList.remove('hidden');
        gridSection.classList.add('hidden');
        viewCarouselBtn.classList.add('active');
        viewGridBtn.classList.remove('active');
    } else {
        carouselSection.classList.add('hidden');
        gridSection.classList.remove('hidden');
        viewCarouselBtn.classList.remove('active');
        viewGridBtn.classList.add('active');
    }
}

function scrollCarousel(dir) {
    const cardWidth = 450 + 32; // card + gap roughly
    carouselTrack.scrollBy({ left: dir * cardWidth, behavior: 'smooth' });
}

function updateProgressBar() {
    const maxScroll = carouselTrack.scrollWidth - carouselTrack.clientWidth;
    const current = carouselTrack.scrollLeft;
    const pct = maxScroll > 0 ? (current / maxScroll) : 0;
    progressBar.style.width = `${pct * 100}%`;
}

function handleCardKey(e, id) {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openDrawer(id);
    }
}

/* Drawer Logic */
window.openDrawer = function (id) {
    const project = projects.find(p => p.id === id);
    if (!project) return;

    // Populate Content
    const tagsHTML = project.tags.map(t => `<span class="badge">${t}</span>`).join('');
    const toolsHTML = project.tools.map(t => `<span class="chip" style="font-size:0.8rem; padding:0.25rem 0.75rem;">${t}</span>`).join('');

    // Buttons
    let btnsHTML = '';
    if (project.artifacts.hasDeck && project.artifacts.deckUrl) btnsHTML += `<a href="${project.artifacts.deckUrl}" target="_blank" class="artifact-btn">📄 View Deck</a>`;
    if (project.artifacts.hasReport && project.artifacts.reportUrl) btnsHTML += `<a href="${project.artifacts.reportUrl}" target="_blank" class="artifact-btn">📑 Read Report</a>`;
    if (project.artifacts.hasDashboard && project.artifacts.dashboardUrl) btnsHTML += `<a href="${project.artifacts.dashboardUrl}" target="_blank" class="artifact-btn">📊 View Dashboard</a>`;
    if (project.artifacts.hasCode && project.artifacts.codeUrl) btnsHTML += `<a href="${project.artifacts.codeUrl}" target="_blank" class="artifact-btn">💻 GitHub Repo</a>`;

    // Fallback for demo placeholders if needed
    if (project.artifacts.hasDeck && !project.artifacts.deckUrl) btnsHTML += `<a href="#" class="artifact-btn">📄 View Deck</a>`;

    // Sections
    const approachList = project.approach.map(i => `<li>${i}</li>`).join('');
    const resultsList = project.results.map(i => `<li>${i}</li>`).join('');
    const recsList = project.recommendations.map(i => `<li>${i}</li>`).join('');

    drawerContent.innerHTML = `
        <div class="drawer-header">
            <div class="drawer-meta-row" style="margin-bottom:0.5rem;">
                <span style="color:var(--accent-color); font-weight:600; font-size:0.9rem;">${project.category}</span>
                <span style="color:rgba(255,255,255,0.4); font-size:0.9rem;">• ${project.date}</span>
                <span style="color:rgba(255,255,255,0.4); font-size:0.9rem;">• Role: ${project.role}</span>
            </div>
            <h2 class="drawer-title">${project.title}</h2>
            <p class="drawer-subtitle">${project.summary}</p>
            <div class="drawer-meta-row">${tagsHTML}</div>
            <div class="drawer-meta-row">${toolsHTML}</div>
        </div>

        <div class="drawer-section">
            <h4>Outcome</h4>
            <p style="color:var(--glass-text-primary); font-size:1.1rem; border-left: 2px solid var(--accent-color); padding-left:1rem;">${project.outcome}</p>
        </div>

        <div class="drawer-section">
            <h4>The Problem</h4>
            <p>${project.problem}</p>
        </div>

        <div class="drawer-section">
            <h4>Approach</h4>
            <ul>${approachList}</ul>
        </div>
        
        <div class="drawer-section">
            <h4>Results</h4>
            <ul>${resultsList}</ul>
        </div>
        
        <div class="drawer-section">
            <h4>Recommendations</h4>
            <ul>${recsList}</ul>
        </div>

        <div class="drawer-section">
            <h4>Artifacts</h4>
            <div class="drawer-actions">${btnsHTML}</div>
        </div>
    `;

    // Open
    drawerOverlay.classList.add('open');
    drawerPanel.focus();
    document.body.style.overflow = 'hidden'; // Lock background scroll
}

function closeDrawer() {
    drawerOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

// Start
init();
