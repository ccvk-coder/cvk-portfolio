import { useEffect, useState } from "react";
import {
  Home,
  User,
  Sparkles,
  Briefcase,
  Settings2,
  Mail,
  Menu,
  X,
  Github,
  Linkedin,
} from "lucide-react";
import { navItems } from "@/data/portfolio";
import { StatusDot } from "./GlassCard";
import { cn } from "@/lib/utils";
import profile from "@/assets/profile.jpg";

const icons = { Home, User, Sparkles, Briefcase, Settings2, Mail } as const;

function useActiveSection() {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return active;
}

function NavLinks({
  active,
  onNavigate,
  compact = false,
}: {
  active: string;
  onNavigate?: () => void;
  compact?: boolean;
}) {
  return (
    <ul className="flex flex-col gap-1">
      {navItems.map((item) => {
        const Icon = icons[item.icon];
        const isActive = active === item.id;
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={onNavigate}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "flex min-h-11 items-center gap-3 rounded-xl border border-transparent px-3 text-sm font-medium text-muted-foreground transition-all duration-300",
                "hover:border-border hover:bg-surface hover:text-foreground",
                isActive &&
                  "border-primary/40 bg-surface-strong text-foreground shadow-[0_0_24px_-8px_var(--primary)]",
                compact && "justify-center px-0",
              )}
            >
              <Icon className="h-4.5 w-4.5 shrink-0" aria-hidden="true" />
              <span className={cn(compact && "sr-only")}>{item.label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

function ProfileBlock() {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <img
        src={profile}
        alt="Portrait of Christ Vein Cabalida"
        width={816}
        height={816}
        className="h-12 w-12 shrink-0 rounded-2xl border border-border object-cover"
      />
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold">Christ Vein Cabalida</p>
        <p className="truncate text-xs text-muted-foreground">UX/UI Designer</p>
      </div>
    </div>
  );
}

export function Sidebar() {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Desktop / tablet sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-20 flex-col gap-6 p-3 md:flex lg:w-70 lg:p-4">
        <nav
          aria-label="Main navigation"
          className="glass flex h-full flex-col gap-6 p-3 lg:p-5"
        >
          <div className="hidden lg:block">
            <ProfileBlock />
            <div className="inner-panel mt-4 flex items-center gap-2 px-3 py-2">
              <StatusDot />
              <span className="text-xs text-muted-foreground">Available for projects</span>
            </div>
          </div>
          <img
            src={profile}
            alt=""
            width={816}
            height={816}
            className="mx-auto h-11 w-11 rounded-xl border border-border object-cover lg:hidden"
          />

          <div className="flex-1">
            <p className="label-meta mb-2 hidden px-3 lg:block">Navigation</p>
            <NavLinks active={active} />
            <div className="lg:hidden">
              <span className="sr-only">Compact navigation</span>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="inner-panel space-y-2 p-3">
              <p className="label-meta">Last updated</p>
              <p className="text-sm">September 2026</p>
            </div>
            <div className="mt-3 flex gap-2">
              <a
                href="https://www.linkedin.com/in/christ-vein-cabalida-258562291/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="inner-panel grid h-11 w-11 place-items-center text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="mailto:cv@asuratechsolutions.com"
                aria-label="Send an email"
                className="inner-panel grid h-11 w-11 place-items-center text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#work"
                aria-label="Jump to work"
                className="inner-panel grid h-11 w-11 place-items-center text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </nav>
      </aside>

      {/* Mobile top bar */}
      <header className="glass fixed inset-x-3 top-3 z-40 flex items-center justify-between gap-3 px-4 py-3 md:hidden">
        <ProfileBlock />
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={open}
          className="inner-panel grid h-11 w-11 shrink-0 place-items-center text-foreground"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </header>

      {/* Mobile drawer */}
      {open ? (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-background/70 backdrop-blur-sm"
          />
          <nav
            aria-label="Mobile navigation"
            className="glass animate-in slide-in-from-right absolute inset-y-3 right-3 flex w-[min(20rem,85vw)] flex-col gap-5 p-5 duration-300"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="label-meta">Navigation</p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
                className="inner-panel grid h-11 w-11 place-items-center"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <NavLinks active={active} onNavigate={() => setOpen(false)} />
            <div className="inner-panel mt-auto flex items-center gap-2 px-3 py-2">
              <StatusDot />
              <span className="text-xs text-muted-foreground">Available for projects</span>
            </div>
          </nav>
        </div>
      ) : null}

      {/* Mobile bottom navigation */}
      <nav
        aria-label="Quick navigation"
        className="glass fixed inset-x-3 bottom-3 z-40 grid grid-cols-5 gap-1 p-2 md:hidden"
      >
        {navItems.slice(0, 5).map((item) => {
          const Icon = icons[item.icon];
          const isActive = active === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "flex min-h-11 flex-col items-center justify-center gap-1 rounded-xl px-1 py-1.5 text-[0.625rem] font-medium text-muted-foreground transition-colors",
                isActive && "bg-surface-strong text-foreground",
              )}
            >
              <Icon className="h-4.5 w-4.5" aria-hidden="true" />
              <span className="truncate">{item.label === "Contact Me" ? "Contact" : item.label}</span>
            </a>
          );
        })}
      </nav>
    </>
  );
}
