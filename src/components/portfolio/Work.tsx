import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { projects, projectFilters, type Project } from "@/data/portfolio";
import { GlassCard, SectionHeading, Tag } from "./GlassCard";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function Work({ onSelect }: { onSelect: (project: Project) => void }) {
  const [filter, setFilter] = useState<string>("all");

  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.filters.includes(filter))),
    [filter],
  );

  return (
    <section id="work" aria-labelledby="work-title" className="scroll-mt-24">
      <SectionHeading
        id="work-title"
        eyebrow="Selected work"
        title="Work & Projects"
        description="Enterprise systems, business platforms, and product interfaces I designed and helped build."
      />

      <div
        role="tablist"
        aria-label="Filter projects by type"
        className="glass mb-4 flex flex-wrap gap-1.5 p-1.5"
      >
        {projectFilters.map((option) => (
          <button
            key={option.id}
            role="tab"
            type="button"
            aria-selected={filter === option.id}
            onClick={() => setFilter(option.id)}
            className={cn(
              "min-h-11 rounded-xl px-4 text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-foreground",
              filter === option.id &&
                "bg-primary text-primary-foreground shadow-[0_10px_28px_-12px_var(--primary)]",
            )}
          >
            {option.label}
          </button>
        ))}
      </div>

      <ul className="grid gap-4 xl:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.li
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="list-none"
            >
              <GlassCard interactive className="flex h-full flex-col p-0">
                <img
                  src={project.image}
                  alt={`${project.name} interface preview`}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="aspect-16/10 w-full rounded-t-2xl border-b border-border object-cover"
                />
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                    <div className="min-w-0">
                      <p className="label-meta">{project.category}</p>
                      <h3 className="mt-1 truncate text-lg font-semibold">{project.name}</h3>
                    </div>
                    <span className="inner-panel shrink-0 px-2.5 py-1 text-xs text-muted-foreground">
                      {project.role.split("/")[0]?.trim()}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tools.slice(0, 4).map((tool) => (
                      <Tag key={tool}>{tool}</Tag>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => onSelect(project)}
                    className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-primary/40 bg-surface-strong px-4 text-sm font-semibold transition-colors hover:bg-primary hover:text-primary-foreground sm:w-auto sm:self-start"
                  >
                    View Project
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </GlassCard>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      {visible.length === 0 ? (
        <Reveal>
          <GlassCard className="text-center text-sm text-muted-foreground">
            No projects in this category yet.
          </GlassCard>
        </Reveal>
      ) : null}
    </section>
  );
}
