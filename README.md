# Angela Emile Jose — Personal Portfolio 🌸🤖

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-latest-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

---

## 🌟 Overview

Welcome to the official personal portfolio repository of **Angela Emile Jose**.

Angela is a Computer Science & AI/ML graduate (**9.55/10 CGPA**) who combines formal and empirical AI audits, low-cost health prototyping, and community fieldwork to make technology more reliable and accessible for overlooked groups.

- 🎓 **B.Tech in Computer Science and Engineering (AI/ML Specialisation)** — Christ (Deemed to be University), Bangalore, India · Aug 2022 – Jul 2026 · First Class with Distinction
- 🎓 **B.Eng. in Computer Science** — Kyungpook National University (KNU), Daegu, South Korea · Sep 2024 – Aug 2026 · **2+2 Double Degree (1 of 5 selected)**, awarded Aug 2026

This web application showcases her:
- 🔍 **AI Audits & Safety** (Malayalam & Manglish health-LLM audit, LLM-assisted formal verification with CBMC).
- 🩺 **Community & Health Design** (Nadakkaam peer-led walking circles, Behaviour Change Wheel, WHO-5 / PHQ-9 / UCLA-3 evaluation).
- 🛠️ **Engineering & Prototyping** (Conv-TasNet-GAN hearing aid, YOLO11 + CLIP fire detection, copyright-registered software).
- 🔬 **Research Experience** (LLM pipelines, formal verification, medical image registration, computational biology).

---

## 🎨 Design Philosophy & Aesthetics

The portfolio combines clean academic rigor with an approachable, modern pastel aesthetic:

- **Color Palette**:
  - **Baby Turquoise (`#AEEBDC`)**: Fresh, forward-looking tech accent.
  - **Baby Yellow (`#FCEF91`)**: Warm, optimistic secondary accent.
  - **Deep Slate / Forest Green (`#163832` & `#25534A`)**: High-contrast, accessible text hierarchy.
- **Robby Leonardi-Inspired Motion Engine**:
  - **Interactive Mouse Parallax (`MouseParallax.tsx`)**: Fluid multi-layered depth across the hero section reacting to cursor coordinates.
  - **Scroll-Driven Spatial Shifting (`ScrollShiftCard.tsx`)**: Subtle 3D perspective shifts on project cards as the user scrolls.
  - **Staggered Viewport Reveals**: Smooth entry transitions powered by Framer Motion.
- **Unified Card Anatomy**: Every project card and experience item shares strict typographical harmony, interactive hover physics, and curated metadata tags.

---

## 🧭 Portfolio Structure & Sections

### 1. Hero Section (`app/components/Hero.tsx`)
- High-impact introduction summarising Angela's work on reliable, accessible AI.
- Dynamic mouse parallax background with glowing pastel ambient orbs and geometric matrix dots.
- Call-to-action navigation leading seamlessly into selected works.

### 2. About Me (`app/components/About.tsx`)
- Narrative tracing Angela's journey from Christ University (India) to Kyungpook National University (South Korea).
- Education summary: B.Tech CSE (AI/ML) with a 9.55/10 CGPA, plus the KNU 2+2 Double Degree.
- Languages: English (IELTS Band 8.0), Malayalam (Native), Korean (A2), German (A1).

### 3. Research & Engineering Experience (`app/components/WorkExperience.tsx`)
Reverse-chronological timeline of academic research and engineering roles:
1. **Research Assistant** — *Software and Safety Engineering Lab, Kyungpook National University* (Daegu, South Korea · May 2025 – Feb 2026)
   - Independently validated 271 of 334 LLM-generated specifications (81%) across 27 C programs by building a CBMC model-checking pipeline that treats LLM outputs as untrusted until formally verified, catching hallucinations and logic errors.
2. **Research Intern** — *Machine Learning and Fluid Mechanics Lab, Kyungpook National University* (Daegu, South Korea · Nov 2025 – Dec 2025)
   - Achieved a 0.91 alignment correlation on multi-modal lung medical images by implementing B-spline and SyN deformable registration workflows using elastix and SimpleITK.
3. **Research Assistant Intern** — *Computational Biology & Bioinformatics Lab, Kyungpook National University* (Daegu, South Korea · Sep 2024 – Nov 2024)
   - Automated omics data filtering and functional enrichment across three datasets using Python and R.
4. **Research Assistant Intern (AI)** — *ThinkPalm Technologies* (India · Apr 2024 – May 2024)
   - Built computer vision object detection and classification models for logistics automation.

### 4. Research & Prototypes (`app/components/Projects.tsx`)
All projects share a unified two-column responsive grid layout:
- **Health LLM Audit: Malayalam & Manglish** *(Nov 2026)*: Blind-scored 156 outputs across 13 community-sourced health questions against a structured rubric. Manglish (Malayalam in Latin script) was the riskiest of four language variants for two of three LLMs (31% unsafe responses vs. 8–15% in standard English). *Python, Groq API, pandas; rubric and dataset on GitHub.*
- **Nadakkaam ("Let's Walk"): Peer-Led Walking Circles for Homemaker Women** *(Oct 2026)*: **1st Prize among 500 participants** at She Leads Women's Conclave 2026 (V-Guard Industries CSR), advancing to funding. A 9-month peer-led walking pilot for 100 women (ages 40–75), grounded in surveys with 30 women (27 with no regular activity beyond housework) and the Behaviour Change Wheel. Targets were set up front (70% retention, 50% gaining ≥10 WHO-5 points, INR 3,740/woman); evaluation uses WHO-5, PHQ-9 and UCLA-3 with safeguarding, with claims kept non-causal.
- **Low-Cost Hearing Aid Prototype (Conv-TasNet-GAN)** *(Sep 2025 – Dec 2025)*: **1st Place of 90 Teams, KICS**, with an industry collaboration with WIM Corp. Improved perceptual speech quality (PESQ) by 31% and intelligibility (STOI) by 14% on held-out audio, delivering a working prototype with a 5-person team under hardware and cost constraints.
- **Context-Aware Fire Detection (YOLO11 + CLIP)** *(Mar 2026 – May 2026)*: **Excellent Paper Award, KIIT 2026**, and a registered software copyright (JINMYUNG I&C). Raised F2 from 0.510 to 0.826 by adding CLIP scene context; the full YOLO11 + CLIP hybrid reached 0.833 across 1,600 images and 8 scene categories. F2 was chosen to prioritize recall, since a missed fire costs more than a false alarm.

### 5. Teaching, Community & Leadership (`app/components/Hobbies.tsx`)
- **English Mentor, International Writing Center, KNU** *(2025–2026)*: Selected as 1 of 7 mentors; coached 70+ students per semester in academic writing, speaking, and structured debate.
- **Global Student Ambassador, KNU** *(2024)*: Selected as 1 of 4 ambassadors; supported ~250 international students with orientation and cross-cultural transition.
- **Peer Educator & Student Council Member, Christ University** *(2022–2024)*: Trained in peer well-being support via Counselling & Health Services; selected as 1 of 15 council representatives in the 2022 cohort.

### 6. Contact Section (`app/components/Contact.tsx`)
- Contact card with direct links:
  - **Email**: `angelaemilejose@gmail.com`
  - **Phone**: India (`+91 9846469020`)
  - **Socials**: LinkedIn, GitHub, and Portfolio

---

## 💻 Tech Stack

| Domain | Technology |
|---|---|
| **Framework** | [Next.js 15.5](https://nextjs.org/) (App Router, Server Components) |
| **UI Library** | [React 19.2](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS 3.4](https://tailwindcss.com/) + PostCSS |
| **Motion** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Analytics** | [@vercel/analytics](https://vercel.com/analytics) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 📁 Repository Directory Structure

```text
Personal-Portfolio/
├── app/
│   ├── components/
│   │   ├── About.tsx            # Personal narrative & education
│   │   ├── AtAGlance.tsx        # High-level verified metrics & evidence strip
│   │   ├── Contact.tsx          # Contact details & social links
│   │   ├── Footer.tsx           # Signature footer with copyright
│   │   ├── Header.tsx           # Floating navigation bar with smooth scrolling
│   │   ├── Hero.tsx             # Interactive mouse parallax hero section
│   │   ├── Hobbies.tsx          # Teaching, community & leadership
│   │   ├── Projects.tsx         # Unified 2-column project showcase cards
│   │   └── WorkExperience.tsx   # Reverse-chronological research timeline
│   ├── research-statement/      # Dedicated research statement page
│   ├── thinking/                # Research notes on audits & formal verification
│   ├── work/
│   │   ├── health-llm-audit/    # Malayalam/Manglish health LLM audit case study
│   │   └── nadakkaam/           # Community health walking circles case study
│   ├── globals.css              # Global styles, variables & Tailwind directives
│   ├── layout.tsx               # Root layout & SEO metadata
│   └── page.tsx                 # Single-page portfolio entrypoint
├── components/
│   ├── animations/              # Parallax, scroll shifts, Vanta & Lenis smooth scroll
│   ├── reactbits/               # Interactive UI components (SpotlightCard, Magnet, etc.)
│   ├── ui/                      # Accessible UI primitives and evidence annotations
│   └── theme-provider.tsx       # Next-themes client provider
├── data/
│   └── audit-cases.json         # Structured failure cases for the health LLM audit
├── public/                      # Static assets: project diagrams, conference PDFs,
│                                # degree certificates, resume (/resume.pdf), and photos
├── styles/                      # Supplementary design stylesheets
├── tailwind.config.js           # Custom Tailwind theme tokens & color definitions
├── tsconfig.json                # TypeScript compiler configuration
├── package.json                 # Project dependencies and script commands
└── README.md                    # Project documentation
```

---

## 🚀 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.17.0 or higher recommended)
- `npm`, `pnpm`, or `yarn`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AngelaEmileJose/Personal-Portfolio.git
   cd Personal-Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the site.

---

## 🛠️ Build & Deployment

To create an optimized production build:

```bash
npm run build
npm run start
```

This repository is configured for automatic continuous deployment via **Vercel**. Every commit pushed to `origin/master` automatically triggers an optimized production build.

---

## 📄 License & Credits

- Designed and curated by **Angela Emile Jose**.
- Codebase built with Next.js, Tailwind CSS, and Framer Motion.
- All rights reserved © 2026 Angela Emile Jose.
