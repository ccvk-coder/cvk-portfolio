import { process } from "@/data/portfolio";
import { GlassCard, SectionHeading } from "./GlassCard";
import { Reveal } from "./Reveal";

export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="scroll-mt-24">
      <SectionHeading
        id="process-title"
        eyebrow="How I work"
        title="Process"
        description="A repeatable six-step workflow from first conversation to developer handoff."
      />

      <ol className="relative grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 bottom-0 left-5 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent md:hidden"
        />
        {process.map((step, i) => (
          <Reveal key={step.step} delay={i * 0.05}>
            <GlassCard as="li" interactive className="h-full list-none">
              <div className="flex items-center gap-3">
                <span className="inner-panel grid h-10 w-10 shrink-0 place-items-center text-sm font-bold text-accent">
                  {step.step}
                </span>
                <h3 className="truncate text-base font-semibold">{step.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
              <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-surface-strong">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                  style={{ width: `${((i + 1) / process.length) * 100}%` }}
                />
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
