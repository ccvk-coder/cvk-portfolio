import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import type { Project } from "@/data/portfolio";
import { Tag } from "./GlassCard";

function Block({ label, children }: { label: string; children: string }) {
  return (
    <div>
      <p className="label-meta">{label}</p>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6">
      <button
        type="button"
        aria-label="Close project details"
        onClick={onClose}
        className="absolute inset-0 bg-background/75 backdrop-blur-sm"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="glass animate-in fade-in zoom-in-95 relative max-h-[92dvh] w-full max-w-4xl overflow-y-auto p-0 duration-300 sm:max-h-[88dvh]"
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-border bg-background/70 px-5 py-4 backdrop-blur-xl sm:px-6">
          <div className="min-w-0">
            <p className="label-meta">Project</p>
            <h3 id="project-modal-title" className="truncate text-lg font-bold sm:text-xl">
              {project.name}
            </h3>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="inner-panel grid h-11 w-11 shrink-0 place-items-center text-muted-foreground transition-colors hover:text-foreground"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="space-y-6 p-5 sm:p-6">
          <img
            src={project.image}
            alt={`${project.name} interface preview`}
            loading="lazy"
            width={1280}
            height={800}
            className="w-full rounded-xl border border-border object-cover"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="inner-panel p-4">
              <p className="label-meta">Role</p>
              <p className="mt-1 text-sm">{project.role}</p>
            </div>
            <div className="inner-panel p-4">
              <p className="label-meta">Category</p>
              <p className="mt-1 text-sm">{project.category}</p>
            </div>
          </div>

          <div>
            <p className="label-meta mb-2">Tools</p>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <Tag key={tool}>{tool}</Tag>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Block label="Overview">{project.overview}</Block>
            <Block label="Challenge">{project.challenge}</Block>
            <Block label="Solution">{project.solution}</Block>
            <Block label="My contribution">{project.contribution}</Block>
          </div>

          <div className="inner-panel p-4">
            <p className="label-meta">Result</p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{project.result}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
