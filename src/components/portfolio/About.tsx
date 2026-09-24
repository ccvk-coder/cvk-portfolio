import { CheckCircle2 } from "lucide-react";
import { profileFacts } from "@/data/portfolio";
import { GlassCard, SectionHeading, StatusDot } from "./GlassCard";
import { Reveal } from "./Reveal";
import profile from "@/assets/profile.jpg";

const disciplines = ["UX/UI Design", "Frontend Development", "System Analysis", "IT Support"];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-24">
      <SectionHeading
        id="about-title"
        eyebrow="Profile"
        title="About Me"
        description="A multidisciplinary technology professional working across design, development, and systems."
      />

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <Reveal>
          <GlassCard className="h-full">
            <div className="grid gap-5 sm:grid-cols-[auto_minmax(0,1fr)]">
              <img
                src={profile}
                alt="Portrait of Christ Vein Cabalida"
                loading="lazy"
                width={816}
                height={816}
                className="h-32 w-32 shrink-0 rounded-2xl border border-border object-cover sm:h-40 sm:w-40"
              />
              <div className="min-w-0 space-y-3">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  I design and build digital products that people actually enjoy using. My work sits
                  where design meets systems: I map how a business really operates, shape the
                  experience around it, then carry the design through to working interfaces.
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Coming from both design and IT support, I care as much about maintainability and
                  clarity as I do about how a screen looks. That mix lets me move comfortably between
                  stakeholder interviews, Figma, and code.
                </p>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {disciplines.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                      <span className="truncate">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </GlassCard>
        </Reveal>

        <Reveal delay={0.08}>
          <GlassCard className="h-full">
            <div className="flex items-center justify-between gap-3">
              <p className="label-meta">Profile information</p>
              <div className="inner-panel flex items-center gap-2 px-2.5 py-1">
                <StatusDot />
                <span className="text-xs text-muted-foreground">Available</span>
              </div>
            </div>
            <dl className="mt-4 divide-y divide-border">
              {profileFacts.map((fact) => (
                <div key={fact.label} className="grid gap-1 py-3 first:pt-0 last:pb-0">
                  <dt className="label-meta">{fact.label}</dt>
                  <dd className="text-sm font-medium">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
