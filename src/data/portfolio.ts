import empireone from "@/assets/project-empireone.jpg";
import gymasura from "@/assets/project-gymasura.jpg";
import hrms from "@/assets/project-hrms.jpg";

export type Project = {
  id: string;
  name: string;
  category: string;
  filters: string[];
  image: string;
  summary: string;
  role: string;
  tools: string[];
  overview: string;
  challenge: string;
  solution: string;
  contribution: string;
  result: string;
};

export const projects: Project[] = [
  {
    id: "empireone",
    name: "EmpireOne Unified System",
    category: "Enterprise System / UX-UI",
    filters: ["ux", "systems", "web"],
    image: empireone,
    summary:
      "A unified employee and applicant platform that streamlines HR, employee engagement, recruitment, and internal company workflows.",
    role: "UX/UI Designer / System Analyst",
    tools: ["Figma", "React", "Next.js", "Tailwind", "VS Code"],
    overview:
      "EmpireOne needed one place for employees, applicants, and HR teams instead of scattered tools and spreadsheets. The platform brings hiring, onboarding, engagement, and day-to-day requests into a single workspace.",
    challenge:
      "Several departments owned separate processes with overlapping data, so the same employee record was maintained in multiple places and requests were easy to lose.",
    solution:
      "I mapped every workflow end to end, defined a shared information architecture, then designed a role-based dashboard system with consistent components for tables, requests, approvals, and profiles.",
    contribution:
      "Requirements gathering, user flows, wireframes, high-fidelity UI, design system and component library, plus documentation and developer handoff.",
    result:
      "A consistent multi-role experience that cut duplicate data entry and gave HR a single view of employees, applicants, and pending approvals.",
  },
  {
    id: "gymasura",
    name: "GymAsura",
    category: "Gym Management System",
    filters: ["systems", "web", "mobile"],
    image: gymasura,
    summary:
      "A customizable gym management platform covering memberships, attendance, trainers, POS, inventory, and business reporting.",
    role: "UX/UI Designer / Frontend Developer",
    tools: ["Figma", "React", "Tailwind", "Flutter UI"],
    overview:
      "GymAsura gives gym owners one operational dashboard for members, check-ins, class schedules, retail sales, and revenue insight.",
    challenge:
      "Front-desk staff work fast and under pressure, so check-in, payment, and membership renewal had to be reachable in as few taps as possible on both desktop and tablet.",
    solution:
      "I designed a task-first dashboard with a persistent quick-actions rail, a compact POS panel, and clear membership status badges so staff can act without leaving the screen they are on.",
    contribution:
      "Product flows, dashboard and POS UI, responsive layouts, component states, and a reusable design system for future modules.",
    result:
      "Faster front-desk operations and a modular layout that lets each gym enable only the modules it needs.",
  },
  {
    id: "hrms",
    name: "HR Management System",
    category: "Enterprise HR / UX-UI",
    filters: ["ux", "systems"],
    image: hrms,
    summary:
      "A modern HR platform for employee information, schedules, HR workflows, and administrative processes.",
    role: "UX/UI Designer",
    tools: ["Figma", "Webflow", "Framer", "Tailwind"],
    overview:
      "A structured HR workspace where records, leave, payroll summaries, and schedules are readable at a glance for both HR staff and managers.",
    challenge:
      "Dense HR data usually turns into unreadable tables. The design needed high information density without overwhelming the person scanning it.",
    solution:
      "A clear hierarchy of summary metrics, primary tables, and side panels, with consistent status language and generous spacing around data-heavy areas.",
    contribution:
      "Information architecture, dashboard and directory design, table and filter patterns, accessibility review of contrast and focus states.",
    result:
      "HR teams review requests and employee records in noticeably fewer steps, with one shared visual language across modules.",
  },
  {
    id: "custom",
    name: "Custom Business Systems",
    category: "Web Development / System Development",
    filters: ["web", "systems", "ux"],
    image: empireone,
    summary:
      "Custom digital solutions — internal tools, company sites, and booking or tracking systems — designed around specific business requirements.",
    role: "UX/UI Designer / Frontend Developer / System Analyst",
    tools: ["Figma", "React", "Next.js", "Webflow", "Tailwind"],
    overview:
      "Engagements where the business process comes first: I analyse how a team actually works, then design and build the system around it.",
    challenge:
      "Off-the-shelf products rarely match how small and mid-sized teams operate, which leads to manual workarounds.",
    solution:
      "Short discovery sessions, documented flows, then a focused build covering only the screens that carry real work.",
    contribution:
      "Requirements analysis, system documentation, UI design, frontend implementation, and ongoing support.",
    result:
      "Practical systems that teams adopt quickly because they follow existing workflows instead of replacing them.",
  },
];

export const projectFilters = [
  { id: "all", label: "All" },
  { id: "ux", label: "UX/UI" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "systems", label: "Systems" },
] as const;

export const expertise = [
  {
    icon: "PenTool",
    title: "UX/UI Design",
    description:
      "End-to-end product design from research and flows to polished, systemised interfaces.",
    level: 92,
    tools: ["Figma", "Wireframing", "Prototyping", "Design Systems", "User Flows"],
  },
  {
    icon: "Code2",
    title: "Frontend Development",
    description: "Turning designs into responsive, accessible, component-based interfaces.",
    level: 85,
    tools: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    icon: "Smartphone",
    title: "Mobile Application Design",
    description: "Mobile-first layouts and interaction patterns built for thumbs, not cursors.",
    level: 80,
    tools: ["Mobile UX", "Responsive Design", "Flutter UI"],
  },
  {
    icon: "Workflow",
    title: "System Analysis",
    description: "Translating business processes into clear requirements and system structure.",
    level: 84,
    tools: ["Requirements Analysis", "User Flows", "System Documentation"],
  },
  {
    icon: "ServerCog",
    title: "IT Support",
    description: "Hands-on hardware, network, and workstation support that keeps teams running.",
    level: 88,
    tools: ["Hardware", "Networking", "Troubleshooting", "System Setup"],
  },
  {
    icon: "Palette",
    title: "Graphic & Visual Design",
    description: "Brand and marketing visuals that stay consistent across every channel.",
    level: 78,
    tools: ["Branding", "Social Media Graphics", "Marketing Materials"],
  },
] as const;

export const process = [
  {
    step: "01",
    title: "Discover",
    description: "Understand the business, users, requirements, and the real problems to solve.",
  },
  {
    step: "02",
    title: "Research",
    description: "Analyse users, workflows, competitors, and the systems already in place.",
  },
  {
    step: "03",
    title: "Define",
    description: "Set requirements, user flows, information architecture, and project direction.",
  },
  {
    step: "04",
    title: "Design",
    description: "Build wireframes, UI designs, components, and prototypes in Figma.",
  },
  {
    step: "05",
    title: "Validate",
    description: "Review designs, test workflows, gather feedback, and refine the experience.",
  },
  {
    step: "06",
    title: "Handoff",
    description: "Prepare specifications and collaborate with developers through implementation.",
  },
] as const;

export const profileFacts = [
  { label: "Role", value: "UX/UI Designer" },
  { label: "Specialization", value: "Digital Product Design" },
  { label: "Experience", value: "1+ Year" },
  { label: "Location", value: "Philippines" },
  { label: "Current Focus", value: "Enterprise Systems & Applications" },
] as const;

export const navItems = [
  { id: "home", label: "Home", icon: "Home" },
  { id: "about", label: "About", icon: "User" },
  { id: "expertise", label: "Expertise", icon: "Sparkles" },
  { id: "work", label: "Work", icon: "Briefcase" },
  { id: "process", label: "Process", icon: "Settings2" },
  { id: "contact", label: "Contact Me", icon: "Mail" },
] as const;
