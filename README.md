# Skill Nexus

IMPORTANT — PRE-EXECUTION SKILL ANALYSIS

Before designing, coding, generating, or implementing any part of this portfolio, you MUST first analyze and follow the available UX/UI Design skill, design-system instructions, and project-specific guidelines.

Required workflow

Follow this exact sequence:

STEP 1 — Analyze the UX/UI Skill

Review the entire available UX/UI design skill before creating the interface.

Identify and understand:

Design principles

UX principles

UI design rules

Design-system requirements

Color guidelines

Typography guidelines

Spacing rules

Component guidelines

Responsive-design requirements

Accessibility requirements

Interaction patterns

Animation guidelines

Glassmorphism/neumorphism rules if defined

Figma/design-system conventions

Any restrictions or required processes

Do not skip or partially analyze the skill.

STEP 2 — Determine Applicable Guidelines

After analyzing the skill, determine which guidelines are relevant to this portfolio.

Prioritize:

UX/UI skill requirements

Accessibility and usability

Responsive design

Design-system consistency

User requirements in this prompt

Visual styling preferences

If the portfolio requirements conflict with the UX/UI skill, identify the conflict and resolve it using the most appropriate UX/UI solution rather than blindly implementing both.

STEP 3 — Analyze Before Designing

Before generating the actual UI, analyze:

Portfolio information architecture

Navigation structure

User flow

Content hierarchy

Desktop layout

Tablet layout

Mobile layout

Sidebar behavior

Project presentation

Interaction patterns

CTA placement

Component structure

Responsive behavior

Do not immediately generate the final design.

STEP 4 — Ask for Clarification When Necessary

If an important design decision is missing or ambiguous and it would materially affect the implementation, ask the user before proceeding.

Examples:

Missing portfolio content

Missing project images

Unclear branding

Unclear primary CTA

Unclear navigation behavior

Conflicting design requirements

Do not ask unnecessary questions when the available information is sufficient.

STEP 5 — Create the Design

Only after completing the analysis should you proceed with the portfolio implementation.

The final design must demonstrate that the UX/UI skill was actually applied rather than simply mentioned.

Use the analyzed skill to guide:

Layout

Components

Visual hierarchy

Interactions

Responsive behavior

Accessibility

Design tokens

Animations

Overall user experience

Important Rule

Never directly jump from the user's request to implementation.

Always follow:

Analyze Skill → Identify Requirements → Analyze UX/UI → Resolve Conflicts → Ask Necessary Questions → Design → Implement → Validate

Before considering the portfolio complete, perform a final UX/UI review against the analyzed skill and verify that the implementation follows the required design-system and responsive-design principles. ## Portfolio Website Design Prompt

Create a **modern personal portfolio website** for a **UX/UI Designer, Frontend Developer, System Analyst, and IT Support Specialist**. The website should feel like a **premium CRM/dashboard application**, combining a professional SaaS interface with a personal portfolio.

### 1. Overall Design Direction

Use a **modern Glassmorphism + CRM Dashboard aesthetic**.

The design should be:

* Modern
* Minimal
* Professional
* Premium
* Clean
* Technology-focused
* Highly interactive
* Responsive
* Easy to navigate

Use **glassmorphism** throughout the interface:

* Frosted glass cards
* Semi-transparent backgrounds
* `backdrop-filter: blur()`
* Subtle borders
* Soft shadows
* Layered UI panels
* Slight gradients
* Rounded corners
* Subtle glow effects
* Smooth hover and transition animations

Avoid excessive decoration. The interface should look like a **real professional CRM/productivity platform**, not a generic portfolio template.

---

## 2. Main Layout

Use a **CRM-style application layout**.

### Desktop

Create a fixed **left sidebar navigation** and a main content area.

```text
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌──────────────┐  ┌────────────────────────────────────┐  │
│  │              │  │                                    │  │
│  │   PROFILE    │  │         MAIN CONTENT                │  │
│  │              │  │                                    │  │
│  │   Home       │  │                                    │  │
│  │   About      │  │                                    │  │
│  │   Expertise  │  │                                    │  │
│  │   Work       │  │                                    │  │
│  │   Process    │  │                                    │  │
│  │   Contact Me │  │                                    │  │
│  │              │  │                                    │  │
│  └──────────────┘  └────────────────────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Sidebar Navigation

The sidebar should contain:

**Profile**

* Profile photo/avatar
* Name
* Professional title
* Small availability/status indicator

**Navigation**

* Home
* About
* Expertise
* Work
* Process
* Contact Me

Use clear minimalist icons beside each navigation item.

Example:

* 🏠 Home
* 👤 About
* ✦ Expertise
* 💼 Work
* ⚙ Process
* ✉ Contact Me

Do not use emojis in the final UI. Replace them with a consistent professional icon library such as **Lucide Icons**.

The active navigation item should have:

* Glass background
* Subtle blue/purple glow
* Accent border
* Clear text contrast
* Smooth transition

---

# 3. Visual Style

### Color Palette

Use a sophisticated dark interface:

* Background: deep navy / near-black
* Primary: electric blue
* Secondary: violet / purple
* Accent: cyan
* Text: white
* Secondary text: cool gray
* Glass panels: translucent white/blue
* Borders: subtle white transparency

Suggested colors:

```text
Background: #070B14
Surface: rgba(255,255,255,0.06)
Border: rgba(255,255,255,0.10)
Primary: #2563EB
Secondary: #7C3AED
Accent: #22D3EE
Text: #FFFFFF
Muted Text: #94A3B8
```

Add subtle blue and purple ambient gradients behind the glass panels.

---

# 4. HOME / DASHBOARD

The Home page should look like a **personal professional dashboard**.

Create a hero section containing:

**Greeting**

"Hello, I'm Kyle."

**Main headline**

"UX/UI Designer & Digital Product Builder"

Supporting text:

"Designing intuitive digital experiences and building practical systems that connect people, technology, and business."

Add CTA buttons:

**View My Work**
**Contact Me**

Also include a small status badge:

**● Available for Projects**

### Dashboard-style cards

Create small glass cards showing:

**01 — Experience**
UX/UI Design

**02 — Focus**
Digital Products

**03 — Tools**
Figma • React • Flutter

**04 — Location**
Philippines

Include subtle animated counters or visual indicators.

---

# 5. ABOUT SECTION

Create an **About Me dashboard panel**.

Include:

### About Me

Introduce me as a multidisciplinary technology professional specializing in:

* UX/UI Design
* Frontend Development
* System Analysis
* IT Support

Write the section in a professional but approachable tone.

Include a profile image inside a glassmorphism card.

Add a small professional information panel:

```text
ROLE
UX/UI Designer

SPECIALIZATION
Digital Product Design

EXPERIENCE
1+ Year

LOCATION
Philippines

CURRENT FOCUS
Enterprise Systems & Applications
```

Make this look like a CRM **profile information card**.

---

# 6. EXPERTISE SECTION

Create an **Expertise Dashboard** using glass cards.

Each expertise should have:

* Icon
* Title
* Description
* Skill indicators
* Relevant tools

### UX/UI Design

Figma, Wireframing, Prototyping, Design Systems, User Flows

### Frontend Development

HTML, CSS, JavaScript, React, Tailwind CSS

### Mobile Application Design

Mobile UX, Responsive Design, Flutter UI

### System Analysis

Requirements Analysis, User Flows, System Documentation

### IT Support

Hardware, Networking, Troubleshooting, System Setup

### Graphic & Visual Design

Branding, Social Media Graphics, Marketing Materials

Use interactive hover effects where cards slightly elevate and reveal additional information.

---

# 7. WORK / PROJECTS

Create a professional **Project Management / CRM-style portfolio section**.

Display projects as large glass cards.

Each project should contain:

* Project image
* Project name
* Project category
* Short description
* Technologies/tools
* Role
* View Project button

Example projects:

### EmpireOne Unified System

**Category:** Enterprise System / UX/UI

A unified employee and applicant platform designed to streamline HR, employee engagement, recruitment, and internal company workflows.

### GymAsura

**Category:** Gym Management System

A customizable gym management platform for memberships, attendance, trainers, POS, inventory, and business management.

### HR Management System

**Category:** Enterprise HR / UX/UI

A modern HR platform designed to manage employee information, schedules, HR workflows, and administrative processes.

### Custom Business Systems

**Category:** Web Development / System Development

Custom digital solutions designed around specific business requirements.

Add filters:

**All | UX/UI | Web | Mobile | Systems**

Project cards should have smooth filtering animations.

---

# 8. PROJECT DETAIL EXPERIENCE

When clicking a project, open a **glassmorphism project detail panel or modal**.

Display:

```text
PROJECT
EmpireOne Unified System , Empireone Health , Careers.empireone, Caleho Host, Gym Asura , Time Sync Asura

ROLE
UX/UI Designer / System Analyst

TOOLS
Figma • Webflow • Framer • React • Next Js • Tailwind • VS Code 

OVERVIEW
...

CHALLENGE
...

SOLUTION
...

MY CONTRIBUTION
...

RESULT
...
```

Include project screenshots in a responsive gallery.

Use a polished CRM-like detail view instead of navigating to a completely different-looking page.

---

# 9. PROCESS SECTION

Create a **visual workflow/timeline** showing how I approach projects.

### 01 — Discover

Understand the business, users, requirements, and problems.

### 02 — Research

Analyze users, workflows, competitors, and existing systems.

### 03 — Define

Create requirements, user flows, information architecture, and project direction.

### 04 — Design

Create wireframes, UI designs, components, and prototypes in Figma.

### 05 — Validate

Review designs, test workflows, gather feedback, and refine the experience.

### 06 — Handoff

Prepare design specifications and collaborate with developers for implementation.

Display the process as connected glass cards with a subtle progress line.

---

# 10. CONTACT ME

Create a **CRM-style contact workspace**.

Heading:

"Let's Build Something Great."

Supporting text:

"Have a project, system, or digital product in mind? Let's discuss how I can help."

Create a glassmorphism contact form:

```text
Name
Email
Project Type
Message

[ Send Message ]
```

Project Type dropdown:

* UX/UI Design
* Web Development
* Mobile Application
* System Development
* IT Support
* Other

Also display contact information cards:

**Email**
[cv@asuratechsolutions.com](mailto:cv@asuratechsolutions.com)

**LinkedIn**
[**linkedin.com/in/christ-vein-cabalida-258562291**](https://www.linkedin.com/in/christ-vein-cabalida-258562291/)

**Location**
Philippines

**Availability**
Open for selected projects

---

# 11. RESPONSIVE MOBILE DESIGN

The website must be **fully responsive**.

### Desktop

Use:

* Fixed sidebar
* Large dashboard workspace
* Multi-column cards
* Wide project previews

### Tablet

Transform the sidebar into a narrower navigation panel.

### Mobile

Replace the desktop sidebar with a **mobile navigation system**.

Use either:

**Option A — Bottom Navigation**

```text
┌──────────────────────────────┐
│                              │
│        MAIN CONTENT          │
│                              │
│                              │
├──────────────────────────────┤
│ Home About Work Process More │
└──────────────────────────────┘
```

or a compact top navigation with a hamburger menu.

Cards should automatically become single-column layouts.

Ensure:

* No horizontal scrolling
* Touch-friendly buttons
* Readable typography
* Proper spacing
* Responsive images
* Responsive project cards
* Responsive forms
* Mobile-friendly animations

---

# 12. ANIMATIONS

Use subtle professional animations.

Include:

* Sidebar hover transitions
* Glass card hover effects
* Fade-in sections
* Smooth page transitions
* Button micro-interactions
* Project filtering animation
* Modal transitions
* Subtle background gradient movement
* Scroll reveal animations

Do not overuse animations.

The website should remain professional and fast.

---

# 13. TYPOGRAPHY

Use a modern sans-serif font such as:

**Inter**

or

**Manrope**

Use a strong hierarchy:

```text
Large Hero Heading
Section Heading
Card Heading
Body Text
Metadata
Labels
```

Keep typography clean and highly readable.

---

# 14. UI COMPONENTS

Create a consistent design system containing:

* Sidebar
* Navigation items
* Glass cards
* Buttons
* Badges
* Status indicators
* Progress bars
* Skill cards
* Project cards
* Modal
* Contact form
* Inputs
* Dropdowns
* Tooltips
* Timeline
* Tags
* Profile cards

All components must share the same visual language.

---

# 15. PROFESSIONAL DETAILS

Add subtle CRM/product UI details such as:

**Status**
`● Available`

**Current Focus**
`Enterprise Digital Systems`

**Last Updated**
`September 2026`

**Projects**
`04+`

**Design Tool**
`Figma`

These details should make the portfolio feel like a **real professional product dashboard**.

---

# 16. TECHNICAL REQUIREMENTS

Build the interface with:

* Responsive design
* Component-based architecture
* Clean reusable components
* Semantic HTML
* Accessible navigation
* Keyboard-friendly interactions
* Responsive typography
* Optimized images
* Smooth transitions
* Mobile-first considerations

If using React:

* React
* Tailwind CSS
* Lucide React
* Framer Motion

Create reusable components for:

`Sidebar`
`Navbar`
`GlassCard`
`ProjectCard`
`SkillCard`
`Timeline`
`ContactForm`
`ProjectModal`

---

# 17. FINAL DESIGN GOAL

The final website should feel like:

**"A premium CRM dashboard transformed into a personal portfolio."**

It should communicate:

**UX/UI Designer + Frontend Developer + System Analyst + IT Support**

The interface should be visually impressive while remaining practical, readable, responsive, and professional.

Avoid:

* Generic portfolio templates
* Excessive gradients
* Excessive glowing effects
* Cluttered layouts
* Huge unnecessary animations
* Too many colors
* Overly decorative elements

Prioritize **clarity, usability, visual hierarchy, professional presentation, and modern glassmorphism.**

The final result should look like a **high-end SaaS product dashboard that happens to be a personal portfolio.**

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/da4c8d42-0565-4b2f-add4-015be548845b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
