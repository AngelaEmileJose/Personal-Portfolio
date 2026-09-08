# Angela Emile Jose — Personal Portfolio 🌸🤖

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-latest-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

> **Computer Science Researcher & Robotics Engineer (Incoming @ WIM Corp)**  
> *Designing tangible, human-centered systems at the intersection of code, physical space, and social impact.*

---

## 🌟 Overview

Welcome to the official personal portfolio repository of **Angela Emile Jose**. 

Angela is a Computer Science graduate pursuing research and engineering across South Korea and India through an elite **2+2 Double Degree program** (Christ University, India & Kyungpook National University, South Korea, graduating August 2026). She will be joining **WIM Corp** in Daegu, South Korea, as an **Incoming Robotics Engineer**.

This web application showcases her:
- 🔬 **AI & Formal Systems Research** (Medical image registration, formal verification with LLMs, multimodal fire detection).
- 🤖 **Robotics & Vision Systems** (YOLO11, CLIP, model checking, object detection).
- ✍️ **Journalism & Publications** (KNU Times author, conference papers, copyright-registered AI algorithms).
- 🎨 **Creative Media & Community Engagement** (Culinary arts, video production awards, cross-cultural student mentorship).

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
- High-impact introduction featuring graduation portraiture.
- Dynamic mouse parallax background with glowing pastel ambient orbs and geometric matrix dots.
- Call-to-action navigation leading seamlessly into selected works.

### 2. About Me (`app/components/About.tsx`)
- Four-part personal narrative tracing Angela’s cross-cultural journey from Christ University (India) to Kyungpook National University (South Korea).
- Bridges formal computing with multi-sensory and tangible design.
- Direct links to her culinary blog ([Cook with Emile](https://cookwithemile.blogspot.com/)) and Korean campus life blog ([Naver Blog](https://m.blog.naver.com/angela_blogs?tab=1)).

### 3. Work Experience (`app/components/WorkExperience.tsx`)
Reverse-chronological timeline of industry engineering and academic research roles:
1. **Incoming Robotics Engineer** — *WIM Corp* (Daegu, South Korea · Starting Fall 2026)
   - Developing and deploying physical robotics systems and intelligent automation.
2. **Research Intern** — *Software Safety Engineering LAB* (Daegu, South Korea · May 2025 – Feb 2026)
   - LLMs for formal software verification, translating C specifications into CBMC-verifiable formal logic.
3. **Mentor** — *International Writing Center* (Daegu, South Korea · Jul 2025 – Jul 2026)
   - Coaching international university students in academic writing and presentation.
4. **Research Intern** — *MLFM LAB* (Daegu, South Korea · Nov 2025 – Dec 2025)
   - Medical image registration for lung diagnostics, achieving a 0.91 correlation coefficient (G-KNU Research Award).
5. **Research Intern** — *Computational Biology & Bioinformatics Lab (COBI)* (Daegu, South Korea · Sep 2024 – Dec 2024)
   - Omics data analysis, functional enrichment workflows, and bioinformatics pipeline optimization.
6. **Research Assistant Intern, AI Department** — *ThinkPalm Technologies Pvt. Ltd* (Kerala, India · Apr 2024 – May 2024)
   - Computer vision, object detection, and visual recognition algorithms for small-scale AI projects.

### 4. Selected Projects (`app/components/Projects.tsx`)
All projects share a unified two-column responsive grid layout:
- **Hybrid Fire Detection System (YOLO11 + CLIP)**: Bronze Medal award-winning multimodal computer vision system combining real-time spatial detection with zero-shot semantic verification. Published at KIISE KSC 2025 and officially copyright-registered.
- **GANNoiseRemover-NoiseFilter**: Generative adversarial network for real-time sensor image de-noising.
- **K-Context Translator**: Culturally-aware context translator bridging English and Korean idioms and formalities.
- **KNU Link — Anonymous Social Discovery App**: Safe, anonymous social discovery and community platform for university students.
- **NutriFlow AI**: Vision-based dietary logging and nutritional intelligence pipeline.
- **ReportRAG**: Retrieval-Augmented Generation engine for synthesizing unstructured technical documentation.

### 5. Hobbies & Life Highlights (`app/components/Hobbies.tsx`)
- **Writing & Journalism**: Feature article *"Making Friends in Korea as a Foreign Student"* in the Spring 2026 KNU Times (Issue 401). Includes in-browser PDF download and link to KNU Press Center.
- **Videos & Short Films**: 3rd Prize Award winner at KNU Video Contest for the short film *"The KNU DREAM"*.
- **Food & Travel**: Culinary experiments across Indian, Korean, Japanese, and Western cuisines.
- **Sneak Peak Gallery**: Interactive photo album capturing candid life moments with family, friends in Korea, and her pet Booboo.
- **Naver Blog**: Korean-language essays on life as an international researcher in Daegu.

### 6. Contact Section (`app/components/Contact.tsx`)
- Multi-channel contact card with dual-country availability:
  - **Email**: `angelaemilejose@gmail.com`
  - **Locations**: Daegu, South Korea & India
  - **Phone Numbers**: South Korea (`+82 010 3937 8830`) & India (`+91 9846469020`)
  - **Socials**: GitHub and LinkedIn

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
│   │   ├── About.tsx            # Personal narrative & cross-cultural biography
│   │   ├── Contact.tsx          # Dual-region contact details & social links
│   │   ├── Footer.tsx           # Signature footer with copyright
│   │   ├── Header.tsx           # Floating navigation bar with smooth scrolling
│   │   ├── Hero.tsx             # Interactive mouse parallax hero section
│   │   ├── Hobbies.tsx          # Creative galleries, awards, journalism & videos
│   │   ├── Projects.tsx         # Unified 2-column project showcase cards
│   │   └── WorkExperience.tsx   # Reverse-chronological career & research timeline
│   ├── favicon.ico              # Web favicon
│   ├── globals.css              # Global styles, variables & Tailwind directives
│   ├── layout.tsx               # Root layout & SEO metadata
│   └── page.tsx                 # Single-page portfolio entrypoint
├── components/
│   └── animations/
│       ├── MouseParallax.tsx    # Multi-layered depth parallax engine
│       ├── ScrollShiftCard.tsx  # Scroll-driven perspective shift container
│       └── SequentialWindow.tsx # Animated showcase window wrapper
├── public/                      # Static assets: project architecture diagrams,
│                                # conference paper PDFs, resume, and photos
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
