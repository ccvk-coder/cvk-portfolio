import { useState } from "react";
import { Send, Mail, Linkedin, MapPin, CircleDot } from "lucide-react";
import { toast } from "sonner";
import { GlassCard, SectionHeading } from "./GlassCard";
import { Reveal } from "./Reveal";

const projectTypes = [
  "UX/UI Design",
  "Web Development",
  "Mobile Application",
  "System Development",
  "IT Support",
  "Other",
];

const details = [
  {
    icon: Mail,
    label: "Email",
    value: "cv@asuratechsolutions.com",
    href: "mailto:cv@asuratechsolutions.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "christ-vein-cabalida",
    href: "https://www.linkedin.com/in/christ-vein-cabalida-258562291/",
  },
  { icon: MapPin, label: "Location", value: "Philippines" },
  { icon: CircleDot, label: "Availability", value: "Open for selected projects" },
];

const fieldClass =
  "inner-panel min-h-11 w-full px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus-visible:border-primary/60";

export function ContactForm() {
  const [sending, setSending] = useState(false);

  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-24">
      <SectionHeading
        id="contact-title"
        eyebrow="Contact"
        title="Let's Build Something Great."
        description="Have a project, system, or digital product in mind? Let's discuss how I can help."
      />

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <Reveal>
          <GlassCard className="h-full">
            <form
              className="grid gap-4"
              onSubmit={(event) => {
                event.preventDefault();
                setSending(true);
                const form = event.currentTarget;
                window.setTimeout(() => {
                  setSending(false);
                  form.reset();
                  toast.success("Message ready to send", {
                    description: "Thanks! I'll get back to you at the email you provided.",
                  });
                }, 700);
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-1.5">
                  <label htmlFor="contact-name" className="label-meta">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Your full name"
                    className={fieldClass}
                  />
                </div>
                <div className="grid gap-1.5">
                  <label htmlFor="contact-email" className="label-meta">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div className="grid gap-1.5">
                <label htmlFor="contact-type" className="label-meta">
                  Project type
                </label>
                <select id="contact-type" name="projectType" defaultValue="" className={fieldClass}>
                  <option value="" disabled>
                    Select a project type
                  </option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type} className="bg-popover">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid gap-1.5">
                <label htmlFor="contact-message" className="label-meta">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project, timeline, and goals."
                  className={`${fieldClass} resize-y`}
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-10px_var(--primary)] disabled:opacity-60 sm:w-fit"
              >
                {sending ? "Sending…" : "Send Message"}
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </GlassCard>
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="grid h-full content-start gap-4">
            {details.map((detail) => (
              <GlassCard as="li" key={detail.label} interactive className="list-none">
                <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
                  <span className="inner-panel grid h-10 w-10 shrink-0 place-items-center">
                    <detail.icon className="h-4.5 w-4.5 text-accent" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="label-meta">{detail.label}</p>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        target={detail.href.startsWith("http") ? "_blank" : undefined}
                        rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="block truncate text-sm font-medium underline-offset-4 hover:underline"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="truncate text-sm font-medium">{detail.value}</p>
                    )}
                  </div>
                </div>
              </GlassCard>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
