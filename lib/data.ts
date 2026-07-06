import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Bird,
  BrainCircuit,
  Compass,
  FileText,
  Leaf,
  Mail,
  ShieldCheck,
  Wind,
} from "lucide-react";

export type Metric = {
  label: string;
  /** 0-100, drives the animated bar width */
  pct: number;
  /** what the viewer reads, e.g. "0.809 ROC-AUC" */
  display: string;
};

export type Project = {
  id: string;
  title: string;
  status?: string;
  description: string;
  points: string[];
  tags: string[];
  href: string; // primary click target
  liveUrl?: string;
  paperUrl?: string;
  icon: LucideIcon;
  accent: string; // tailwind gradient stops for the card glow
  /** expanded view */
  detail: string;
  metrics: Metric[];
  /** optional live iframe embed shown in the expanded card */
  embedUrl?: string;
};

export const flagships: Project[] = [
  {
    id: "pathwise",
    title: "PathWise",
    status: "Live product",
    description:
      "Full-stack career guidance platform: assessment engine, personalized roadmaps, skill gap analysis, streaks, and focus mode. Shipped to production.",
    points: [
      "83 questions, 6 dimensions, 30 archetypes mapped to 91 careers",
      "4-layer expert scoring: experience tiers, gap patterns, stage modifiers, persona rules",
      "6 Encore.dev microservices, each with its own PostgreSQL",
      "OAuth with PKCE, GDPR export and deletion, admin dashboard",
    ],
    tags: ["React 19", "TypeScript", "Encore.dev", "PostgreSQL", "Vercel"],
    href: "https://pathwise.fit",
    liveUrl: "https://pathwise.fit",
    icon: Compass,
    accent: "from-emerald-400/20",
    detail:
      "PathWise is a production SaaS I designed, built, and shipped end to end. The career brain grounds recommendations in RIASEC and Big Five psychology, then a 4-layer expert system (experience tiers, gap pattern matching, career stage modifiers, and a persona rules engine) turns raw assessment answers into transparent match scores with synergy bonuses and anti-pattern penalties. The backend runs as six independent Encore.dev microservices, each owning its own PostgreSQL database, deployed on Encore Cloud with the React 19 frontend on Vercel.",
    metrics: [
      { label: "Assessment questions", pct: 83, display: "83 across 6 dimensions" },
      { label: "Career profiles mapped", pct: 91, display: "91 careers, 30 archetypes" },
      { label: "Backend microservices", pct: 60, display: "6 services, 6 databases" },
      { label: "Compliance", pct: 100, display: "GDPR export + deletion" },
    ],
  },
  {
    id: "breezeml",
    title: "BreezeML",
    status: "Open source, PyPI",
    description:
      "A beginner-friendly, production-aware ML workflow layer. Train, compare, explain, export, and deploy sklearn models without the boilerplate.",
    points: [
      "AutoML, time-series forecasting, PSI drift monitoring, one-line FastAPI deploy",
      "CI-enforced 4-dependency contract - a test fails the build on a fifth",
      "Zero lock-in: export() writes standalone sklearn code",
      "Built-in MCP server so AI agents can train models safely",
    ],
    tags: ["Python", "scikit-learn", "AutoML", "MCP", "PyPI"],
    href: "https://github.com/venomez-viper/breezeml",
    liveUrl: "https://pypi.org/project/breezeml/",
    icon: Wind,
    accent: "from-cyan-400/20",
    detail:
      "BreezeML is my answer to the false choice between dependency-hell AutoML suites and toy leaderboards. The library is layered like a garden path: a 3-line first model, then leaderboards and tuning, then AutoML, deployment, and drift monitoring - each layer optional. A CI test enforces that the core never needs more than 4 dependencies, and export() writes standalone sklearn code so leaving is always easy. It is also the first low-code ML library with a built-in MCP server, so AI agents get stratified splits and honest metrics instead of hand-rolled sklearn.",
    metrics: [
      { label: "Cold import speed vs PyCaret", pct: 100, display: "3.1s vs 6.9s (2.2x faster)" },
      { label: "Models built in", pct: 80, display: "18 classifiers, 16 regressors, 6 clusterers" },
      { label: "Core dependencies", pct: 8, display: "4. Always. CI-enforced" },
      { label: "Tests in CI", pct: 90, display: "100+ across 5 Python versions" },
    ],
  },
];

export const projects: Project[] = [
  {
    id: "healthcare-fraud",
    title: "Healthcare Fraud Analytics",
    description:
      "Ranks Medicare providers by fraud risk from real CMS + OIG LEIE data: 6M row provider-year panel with peer-relative features.",
    points: [
      "ROC-AUC 0.809, matching published Part B benchmarks",
      "Top 10% of the worklist captures ~56% of known fraud",
    ],
    tags: ["Python", "ML", "Public data"],
    href: "https://github.com/venomez-viper/Healthcare-Fraud-Analytics",
    icon: Activity,
    accent: "from-rose-400/20",
    detail:
      "Built with Shruti Pingle on fully public government data: CMS Medicare Part B claims (2019-2023) joined to OIG LEIE exclusions on NPI. Peer-relative features (z-scores, percentiles, payment-to-service ratios within specialty x year groups) let a gradient boosting model rank 6 million provider-years by fraud risk. Because the exclusion list only records caught fraud, the work is framed as Positive-Unlabeled learning - the honest framing most of the field skips.",
    metrics: [
      { label: "ROC-AUC", pct: 81, display: "0.809 (benchmark: 0.805-0.816)" },
      { label: "Fraud caught in top 10%", pct: 56, display: "~56% of known fraud providers" },
      { label: "Panel size", pct: 95, display: "6.0M provider-year rows" },
    ],
  },
  {
    id: "apex",
    title: "APEX-II: Dependency-Aware AI Exposure",
    description:
      "Research paper proving occupation-level AI exposure scores understate Enterprise presales exposure by 36%, with a deployable rollout policy. IEEE format, fully reproducible.",
    points: [
      "Invented the Exposure Propagation Multiplier: EPM 1.36 for Enterprise, 1.00 for SMB",
      "Augmentation Sequencing Policy preserves +1.81 points of role survival vs naive rollout",
    ],
    tags: ["Research", "LaTeX", "Python"],
    href: "https://github.com/venomez-viper/Apex",
    paperUrl:
      "https://github.com/venomez-viper/Apex/blob/main/paper/paper.pdf",
    icon: BrainCircuit,
    accent: "from-violet-400/20",
    detail:
      "Every published AI exposure index scores a job as an independent weighted sum of task exposures. APEX-II shows that assumption is wrong for presales: discovery quality drives demo relevance, demo success drives PoC scope, champion strength decides whether objections survive. Modeling that dependency graph (STAM: Segmented, Task-coupled, Adoption and Market model) yields two deployable constructs - the Exposure Propagation Multiplier, which reveals occupation-level scores understate Enterprise exposure by 36%, and the Augmentation Sequencing Policy: automate the safe leaves first (RFP response, standard objections), protect the upstream hubs last (discovery, PoC ownership). Every number reproduces from a single deterministic script across 20 seeds, and the paper reports its own negative results.",
    metrics: [
      { label: "Enterprise EPM", pct: 90, display: "1.36x vs naive scoring (+36%)" },
      { label: "Sequenced rollout benefit", pct: 75, display: "+1.81 role survival pts, 4x larger in Enterprise" },
      { label: "Reproducibility", pct: 100, display: "One script, 20 seeds, exact paper numbers" },
    ],
  },
  {
    id: "augmentation-paper",
    title: "Paper: Augmentation & Replacement in SaaS SE",
    description:
      "Research paper measuring which sales engineering tasks AI augments versus replaces, with open analysis code.",
    points: [
      "Task-level AI exposure map for the SE occupation",
      "Seeded APEX, the dependency-aware follow-up",
    ],
    tags: ["Research paper", "Future of work"],
    href: "https://github.com/venomez-viper/Augmentation-and-Replacement-in-SaaS-Sales-Engineering",
    paperUrl:
      "https://github.com/venomez-viper/Augmentation-and-Replacement-in-SaaS-Sales-Engineering/blob/main/Augmentation-and-Replacement-in-SaaS-Sales-Engineering.pdf",
    icon: FileText,
    accent: "from-amber-400/20",
    detail:
      "The paper that started the research thread: a task-level decomposition of the SaaS sales engineering role, scoring each task on AI capability overlap. The finding - augmentation dominates preparation and documentation while live trust-building resists replacement - seeded APEX, the dependency-aware follow-up. Every chart is generated from open analysis code in the repo.",
    metrics: [
      { label: "Written in", pct: 100, display: "LaTeX, publication format" },
      { label: "Analysis code", pct: 100, display: "Open, chart-for-chart reproducible" },
    ],
  },
  {
    id: "gecs",
    title: "Industry Classification at Scale",
    description:
      "Hierarchical text classifier assigning companies to Morningstar GECS codes, evaluated company-disjoint for honest scores.",
    points: [
      "75.0% Tier-1 macro F1 with leakage-proof evaluation",
      "Quantified how naive splits inflate reported accuracy",
    ],
    tags: ["NLP", "Classification", "Capstone"],
    href: "https://github.com/venomez-viper/Classification-Project",
    icon: ShieldCheck,
    accent: "from-sky-400/20",
    detail:
      "Graduate capstone with an industry sponsor: assign companies to the Morningstar GECS hierarchy from noisy text. The key contribution is evaluation honesty - company-disjoint splits so no firm leaks across train and test, which most published numbers in this space quietly violate. A cascade of classifiers follows the taxonomy (sector, group, leaf), and the locked final numbers are reported exactly as measured.",
    metrics: [
      { label: "Tier-1 macro F1", pct: 75, display: "75.0% (company-disjoint)" },
      { label: "Tier-2 macro F1", pct: 55, display: "55.44% (company-disjoint)" },
    ],
  },
  {
    id: "carbon",
    title: "Carbon-Aware AI Scheduling",
    description:
      "Simulation framework for carbon-aware scheduling policies and latency trade-offs in multi-region AI inference.",
    points: [
      "Quantified the carbon-vs-latency frontier",
      "Policy-pluggable discrete-event simulation",
    ],
    tags: ["Sustainability", "Simulation"],
    href: "https://github.com/venomez-viper/Carbon-Aware-Scheduling-for-Multi-Region-AI-Inference",
    icon: Leaf,
    accent: "from-green-400/20",
    detail:
      "A discrete-event simulation of multi-region AI inference under real grid carbon intensity profiles. Routing policies range from latency-only to carbon-first with blended strategies between, and the framework measures the full carbon-vs-latency frontier under realistic load. The result: meaningful carbon reductions are available at modest latency cost - if you blend instead of choosing binary green-or-fast.",
    metrics: [
      { label: "Routing policies compared", pct: 60, display: "Latency-only to carbon-first spectrum" },
      { label: "Framework design", pct: 100, display: "Policy-pluggable simulation" },
    ],
  },
  {
    id: "birdsong",
    title: "Bird Song in 3D",
    description:
      "What does a bird song look like? Interactive 3D visualization where every dot is a real FFT point from actual recordings.",
    points: [
      "Each species produces a distinct 3D signature",
      "Runs entirely in the browser",
    ],
    tags: ["WebGL", "Audio", "Generative art"],
    href: "https://github.com/venomez-viper/Bird-Song-Visualization-in-3D-",
    liveUrl: "https://venomez-viper.github.io/Bird-Song-Visualization-in-3D-/",
    embedUrl: "https://venomez-viper.github.io/Bird-Song-Visualization-in-3D-/",
    icon: Bird,
    accent: "from-fuchsia-400/20",
    detail:
      "A creative-technology piece: FFT analysis over real bird recordings, with every time-frequency-amplitude point mapped to a particle in interactive 3D space. Each species produces a visibly distinct sculpture. Runs entirely in the browser - no backend, no build step, just WebGL and the Web Audio API turning signal processing into something people want to walk around.",
    metrics: [
      { label: "Data source", pct: 100, display: "Real FFT points from recordings" },
      { label: "Runs in", pct: 100, display: "Browser only, zero backend" },
    ],
  },
];

export const links = {
  github: "https://github.com/venomez-viper",
  linkedin: "https://linkedin.com/in/akash-anipakalu-giridhar-1089011b1",
  pathwise: "https://pathwise.fit",
  pypi: "https://pypi.org/project/breezeml/",
  classicSite: "https://www.akashanipakalugiridhar.com/",
};

export const contactIcon = Mail;
