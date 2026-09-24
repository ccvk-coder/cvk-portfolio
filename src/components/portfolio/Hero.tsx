import { useEffect, useState } from "react";
import { ArrowRight, MapPin, Layers, Wrench, Award } from "lucide-react";
import { GlassCard, StatusDot } from "./GlassCard";
import { Reveal } from "./Reveal";

const stats = [
  { index: "01", label: "Experience", value: "UX/UI Design", icon: Award, meta: "1+ year" },
  { index: "02", label: "Focus", value: "Digital Products", icon: Layers, meta: "Enterprise systems" },
  { index: "03", label: "Tools", value: "Figma • React • Flutter", icon: Wrench, meta: "Design & build" },
  { index: "04", label: "Location", value: "Philippines", icon: MapPin, meta: "Remote friendly" },
];

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setValue(target);
      return;
    }
    let frame = 0;
    const total = 40;
    const id = window.setInterval(() => {
      frame += 1;
      setValue(Math.round((target * frame) / total));
      if (frame >= total) window.clearInterval(id);
    }, 20);
    return () => window.clearInterval(id);
  }, [target]);

  return (
    <span>
      {value}
      {suffix}
    </span>
  );
}

export function Hero({ onOpenWork }: { onOpenWork: () => void }) {
  return (
    <section id="home" aria-labelledby="hero-title" className="scroll-mt-24">
      <Reveal>
        <GlassCard className="relative overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="inner-panel mb-6 inline-flex items-center gap-2 px-3 py-1.5">
            <StatusDot />
            <span className="text-xs font-medium text-muted-foreground">
              Available for Projects
            </span>
          </div>

          <p className="text-sm text-muted-foreground sm:text-base">Hello, I&apos;m Kyle.</p>
          <h1
            id="hero-title"
            className="mt-2 max-w-3xl text-3xl leading-tight font-extrabold sm:text-4xl lg:text-5xl"
          >
            <span className="text-gradient">UX/UI Designer</span> &amp; Digital Product Builder
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Designing intuitive digital experiences and building practical systems that connect
            people, technology, and business.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onOpenWork}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-10px_var(--primary)]"
            >
              View My Work
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <a
              href="#contact"
              className="inner-panel inline-flex min-h-11 items-center px-5 text-sm font-semibold transition-colors hover:bg-surface-strong"
            >
              Contact Me
            </a>
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-3 border-t border-border pt-6 sm:grid-cols-4">
            <div>
              <dt className="label-meta">Projects</dt>
              <dd className="mt-1 text-xl font-bold">
                <Counter target={4} suffix="+" />
              </dd>
            </div>
            <div>
              <dt className="label-meta">Systems shipped</dt>
              <dd className="mt-1 text-xl font-bold">
                <Counter target={6} />
              </dd>
            </div>
            <div>
              <dt className="label-meta">Design tool</dt>
              <dd className="mt-1 text-xl font-bold">Figma</dd>
            </div>
            <div>
              <dt className="label-meta">Last updated</dt>
              <dd className="mt-1 text-xl font-bold">Sep 2026</dd>
            </div>
          </dl>
        </GlassCard>
      </Reveal>

      <ul className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.index} delay={i * 0.06}>
            <GlassCard as="li" interactive className="h-full list-none">
              <div className="flex items-start justify-between gap-3">
                <span className="label-meta">{stat.index}</span>
                <stat.icon className="h-4.5 w-4.5 text-accent" aria-hidden="true" />
              </div>
              <p className="mt-4 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                {stat.label}
              </p>
              <p className="mt-1 text-base font-semibold">{stat.value}</p>
              <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-surface-strong">
                <div className="h-full w-2/3 rounded-full bg-primary" />
              </div>
              <p className="mt-2 text-xs text-muted-foreground">{stat.meta}</p>
            </GlassCard>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
