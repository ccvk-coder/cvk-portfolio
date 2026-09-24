import { PenTool, Code2, Smartphone, Workflow, ServerCog, Palette } from "lucide-react";
import { expertise } from "@/data/portfolio";
import { GlassCard, SectionHeading, Tag } from "./GlassCard";
import { Reveal } from "./Reveal";

const icons = { PenTool, Code2, Smartphone, Workflow, ServerCog, Palette } as const;

export function Expertise() {
  return (
    <section id="expertise" aria-labelledby="expertise-title" className="scroll-mt-24">
      <SectionHeading
        eyebrow="Capabilities"
        title="Expertise"
        description="Six areas I work in daily, from product design through to support and documentation."
      />
      <span id="expertise-title" className="sr-only">
        Expertise
      </span>

      <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {expertise.map((item, i) => {
          const Icon = icons[item.icon];
          return (
            <Reveal key={item.title} delay={i * 0.05}>
              <GlassCard as="li" interactive className="group h-full list-none">
                <div className="inner-panel grid h-11 w-11 place-items-center">
                  <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Proficiency</span>
                    <span>{item.level}%</span>
                  </div>
                  <div
                    role="progressbar"
                    aria-label={`${item.title} proficiency`}
                    aria-valuenow={item.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-surface-strong"
                  >
                    <div
                      className="h-full rounded-full bg-primary transition-[width] duration-700"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 opacity-80 transition-opacity duration-300 group-hover:opacity-100">
                  {item.tools.map((tool) => (
                    <Tag key={tool}>{tool}</Tag>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
