"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  FileText,
  Mail,
  X,
} from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12v3.15c0 .3.21.67.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}
import { LampContainer } from "@/components/ui/lamp";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { flagships, links, projects, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs text-slate-300">
      {children}
    </span>
  );
}

function MetricBars({ project }: { project: Project }) {
  return (
    <div className="space-y-4">
      {project.metrics.map((metric, i) => (
        <div key={metric.label}>
          <div className="flex items-baseline justify-between gap-4">
            <span className="text-sm text-slate-400">{metric.label}</span>
            <span className="text-sm font-medium text-cyan-300">
              {metric.display}
            </span>
          </div>
          <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-slate-800">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${metric.pct}%` }}
              transition={{ delay: 0.2 + i * 0.12, duration: 0.7, ease: "easeOut" }}
              className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-300"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function ActionLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30"
      >
        <GithubIcon className="h-4 w-4" /> View on GitHub
      </a>
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-cyan-500/50 px-5 py-2 text-sm font-medium text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-500/10"
        >
          <ExternalLink className="h-4 w-4" /> Open live
        </a>
      )}
      {project.paperUrl && (
        <a
          href={project.paperUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-5 py-2 text-sm font-medium text-slate-200 transition hover:border-slate-400 hover:bg-slate-500/10"
        >
          <FileText className="h-4 w-4" /> Read the paper
        </a>
      )}
    </div>
  );
}

function ProjectCard({
  project,
  large = false,
  onOpen,
}: {
  project: Project;
  large?: boolean;
  onOpen: (project: Project) => void;
}) {
  const Icon = project.icon;
  return (
    <motion.button
      {...fadeUp}
      layoutId={`card-${project.id}`}
      onClick={() => onOpen(project)}
      aria-label={`Open ${project.title} details`}
      className={cn(
        "group relative block w-full cursor-pointer overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-6 text-left backdrop-blur transition-all duration-300",
        "hover:-translate-y-1.5 hover:border-slate-600 hover:shadow-2xl hover:shadow-cyan-500/10",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400",
        large && "md:p-8"
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute -top-24 right-0 h-48 w-48 rounded-full bg-gradient-to-b to-transparent blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          project.accent
        )}
      />
      <div className="flex items-start justify-between gap-4">
        <div className="rounded-xl border border-slate-700 bg-slate-950 p-2.5">
          <Icon className="h-5 w-5 text-cyan-400" />
        </div>
        {project.status && (
          <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300 ring-1 ring-cyan-500/30">
            {project.status}
          </span>
        )}
      </div>
      <h3
        className={cn(
          "mt-4 font-semibold text-slate-100",
          large ? "text-2xl" : "text-lg"
        )}
      >
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">
        {project.description}
      </p>
      <ul className="mt-4 space-y-1.5">
        {project.points.map((point) => (
          <li key={point} className="flex gap-2 text-sm text-slate-300">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500/70" />
            {point}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400 transition group-hover:text-cyan-300">
        Explore
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </motion.button>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = project ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm md:p-8"
        >
          <motion.div
            layoutId={`card-${project.id}`}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-2xl shadow-cyan-500/10 md:p-8"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-full border border-slate-700 p-2 text-slate-400 transition hover:border-slate-500 hover:text-slate-200"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-3">
              <div className="rounded-xl border border-slate-700 bg-slate-950 p-2.5">
                <project.icon className="h-5 w-5 text-cyan-400" />
              </div>
              {project.status && (
                <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300 ring-1 ring-cyan-500/30">
                  {project.status}
                </span>
              )}
            </div>

            <h3 className="mt-4 text-2xl font-semibold text-slate-100 md:text-3xl">
              {project.title}
            </h3>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-4 leading-relaxed text-slate-300"
            >
              {project.detail}
            </motion.p>

            {project.embedUrl && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 overflow-hidden rounded-xl border border-slate-700"
              >
                <iframe
                  src={project.embedUrl}
                  title={`${project.title} - live demo`}
                  className="h-72 w-full bg-slate-950 md:h-96"
                  loading="lazy"
                  allow="autoplay"
                />
                <div className="border-t border-slate-800 bg-slate-950/80 px-4 py-2 text-xs text-slate-400">
                  Live demo running inside the card - interact with it, or open
                  it full screen below.
                </div>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mt-8 rounded-xl border border-slate-800 bg-slate-950/60 p-5"
            >
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
                By the numbers
              </h4>
              <MetricBars project={project} />
            </motion.div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-8"
            >
              <ActionLinks project={project} />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <motion.div {...fadeUp} className="text-center">
      <div className="bg-gradient-to-br from-cyan-300 to-slate-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
        {value}
      </div>
      <div className="mt-1 text-sm text-slate-400">{label}</div>
    </motion.div>
  );
}

export function Portfolio() {
  const [selected, setSelected] = React.useState<Project | null>(null);

  return (
    <div className="bg-slate-950 text-slate-200">
      {/* Nav */}
      <nav className="fixed inset-x-0 top-0 z-[100] border-b border-slate-800/60 bg-slate-950/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a
            href="#top"
            className="text-sm font-semibold tracking-wide text-slate-100 transition hover:text-cyan-300"
          >
            Akash A. Giridhar
          </a>
          <div className="flex items-center gap-3 text-sm sm:gap-5">
            <a href="#flagships" className="hidden text-slate-300 transition hover:text-cyan-300 sm:inline">
              Flagships
            </a>
            <a href="#projects" className="hidden text-slate-300 transition hover:text-cyan-300 sm:inline">
              Projects
            </a>
            <a href="#contact" className="hidden text-slate-300 transition hover:text-cyan-300 sm:inline">
              Contact
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="rounded-full border border-slate-700 p-2 transition hover:border-cyan-500 hover:text-cyan-300"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </nav>

      {/* Lamp hero */}
      <section id="top">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className="mt-8 bg-gradient-to-br from-slate-200 to-slate-500 bg-clip-text py-4 text-center text-4xl font-semibold tracking-tight text-transparent md:text-7xl"
          >
            Solutions Engineer. <br /> Builder at heart.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
            className="mt-4 max-w-xl text-center text-base text-slate-400 md:text-lg"
          >
            Akash Anipakalu Giridhar. Pure, passionate presales - backed by a
            live SaaS product, an open source ML library on PyPI, and research
            papers on the future of the SE role itself.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeInOut" }}
            className="mt-6 flex flex-wrap items-center justify-center gap-3"
          >
            <LiquidButton
              size="xl"
              className="text-cyan-200"
              onClick={() =>
                document
                  .getElementById("flagships")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              See the work
            </LiquidButton>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-600 px-6 py-2.5 text-sm font-medium text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
            >
              GitHub
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-600 px-6 py-2.5 text-sm font-medium text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
            >
              LinkedIn
            </a>
          </motion.div>
        </LampContainer>
      </section>

      {/* Stats strip */}
      <section className="relative z-10 -mt-24 pb-8 md:-mt-40">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
          <Stat value="1" label="Live SaaS product" />
          <Stat value="15+" label="PyPI releases shipped" />
          <Stat value="2" label="Research papers" />
          <Stat value="100+" label="Tests in CI" />
        </div>
      </section>

      {/* Flagships */}
      <section id="flagships" className="scroll-mt-20 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.h2 {...fadeUp} className="text-3xl font-semibold text-slate-100">
            Flagships
          </motion.h2>
          <motion.p {...fadeUp} className="mt-2 max-w-2xl text-slate-400">
            Two things I am proudest of: a product people use, and a library
            developers install. Click any card to explore.
          </motion.p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {flagships.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                large
                onOpen={setSelected}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-20 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <motion.h2 {...fadeUp} className="text-3xl font-semibold text-slate-100">
            Selected projects
          </motion.h2>
          <motion.p {...fadeUp} className="mt-2 max-w-2xl text-slate-400">
            Every card expands with the full story, real metrics, and links to
            the code, paper, or live demo.
          </motion.p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={setSelected} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.h2 {...fadeUp} className="text-3xl font-semibold text-slate-100">
            Let&apos;s build something
          </motion.h2>
          <motion.p {...fadeUp} className="mt-3 text-slate-400">
            Open to solutions engineering and presales conversations - demos,
            PoCs, and the technical storytelling in between.
          </motion.p>
          <motion.div
            {...fadeUp}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30"
            >
              <LinkedinIcon className="h-4 w-4" /> Connect on LinkedIn
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-6 py-2.5 text-sm font-medium text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
            >
              <GithubIcon className="h-4 w-4" /> github.com/venomez-viper
            </a>
            <a
              href="mailto:akashagakash@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-6 py-2.5 text-sm font-medium text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-slate-800/60 py-8 text-center text-sm text-slate-500">
        <p>© 2026 Akash Anipakalu Giridhar. Built with Next.js, Tailwind, and a lamp.</p>
      </footer>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
