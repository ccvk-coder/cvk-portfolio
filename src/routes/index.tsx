import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { Sidebar } from "@/components/portfolio/Sidebar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Expertise } from "@/components/portfolio/Expertise";
import { Work } from "@/components/portfolio/Work";
import { Process } from "@/components/portfolio/Process";
import { ContactForm } from "@/components/portfolio/ContactForm";
import { ProjectModal } from "@/components/portfolio/ProjectModal";
import type { Project } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Christ Vein Cabalida — UX/UI Designer & Digital Product Builder" },
      {
        name: "description",
        content:
          "Portfolio of Christ Vein Cabalida: UX/UI designer, frontend developer, system analyst, and IT support specialist building enterprise systems and digital products.",
      },
      { property: "og:title", content: "Christ Vein Cabalida — UX/UI Designer & Product Builder" },
      {
        property: "og:description",
        content:
          "Designing intuitive digital experiences and building practical systems that connect people, technology, and business.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <div className="min-h-dvh">
      <div className="ambient-bg ambient-drift" aria-hidden="true" />
      <a
        href="#home"
        className="glass sr-only px-4 py-2 text-sm focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-60"
      >
        Skip to content
      </a>

      <Sidebar />

      <main className="mx-auto w-full max-w-7xl space-y-12 px-3 pt-24 pb-28 sm:px-5 sm:space-y-16 md:pt-6 md:pb-10 md:pl-24 lg:pl-76">
        <Hero
          onOpenWork={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
        />
        <About />
        <Expertise />
        <Work onSelect={setSelected} />
        <Process />
        <ContactForm />

        <footer className="border-t border-border pt-6 text-xs text-muted-foreground">
          <div className="grid gap-2 sm:flex sm:items-center sm:justify-between">
            <p>© 2026 Christ Vein Cabalida. Built with React, Tailwind CSS and Figma.</p>
            <p>Current focus: Enterprise Digital Systems • Last updated September 2026</p>
          </div>
        </footer>
      </main>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
      <Toaster />
    </div>
  );
}
