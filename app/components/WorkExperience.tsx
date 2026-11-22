"use client"

import React from "react"
import {
  Calendar,
  MapPin,
  Award,
  Users,
  GraduationCap,
  Wrench,
  BookOpen,
  ExternalLink,
  Download,
  Languages,
} from "lucide-react"
import SpotlightCard from "@/components/reactbits/SpotlightCard"
import EvidenceAnnotation from "@/components/ui/EvidenceAnnotation"

export default function WorkExperience() {
  // Experience verbatim from CONTENT.md Section 11
  const experiences = [
    {
      title: "Research Intern",
      lab: "Machine Learning and Fluid Mechanics Lab",
      institution: "Kyungpook National University, South Korea",
      period: "May 2026 – Jun 2026", // Flagged in Step 5: May-Jun 2026
      bullets: [
        "Achieved a 0.91 correlation in multi-modal lung image alignment by building deformable B-spline and SyN registration models with elastix and SimpleITK, plus data fusion and preprocessing.",
      ],
      certificate: "/g-knu-research-certificate.pdf",
      certificateLabel: "G-KNU Glocal Research Stepping-Stone Program Certificate (PDF)",
    },
    {
      title: "Research Assistant",
      lab: "Software and Safety Engineering Lab",
      institution: "Kyungpook National University, South Korea",
      period: "May 2025 – Feb 2026",
      bullets: [
        "Automated formal verification of 27 Stateflow-derived C programs with a pipeline that translates specifications into formal logic checked by CBMC; 271 of 334 LLM-generated specifications (81%) passed across 24 programs (9 at 100%).",
        "Caught incorrect and hallucinated specifications by treating model output as untrusted until independently validated.",
      ],
    },
    {
      title: "Research Assistant Intern",
      lab: "Computational Biology and Bioinformatics Lab",
      institution: "Kyungpook National University, South Korea",
      period: "Sept 2024 – Nov 2024",
      bullets: [
        "Streamlined omics (genomics/transcriptomics) analysis across 3 datasets with Python and R scripts that automated filtering, functional enrichment and dataset organisation.",
      ],
    },
    {
      title: "Research Assistant Intern, AI Department",
      lab: "ThinkPalm Technologies",
      institution: "Kerala, India",
      period: "Apr 2024 – May 2024",
      bullets: [
        "Delivered object detection and image classification models for logistics automation by preprocessing datasets and training and optimising models.",
      ],
    },
  ]

  // Leadership, Outreach & Presentations verbatim from CONTENT.md Section 12
  const leadershipItems = [
    {
      role: "Peer Educator",
      org: "Christ University (2024)",
      desc: "Selected and trained through the Centre for Counselling and Health Services (lectures, role plays, weekly mentoring) to educate and support fellow students on wellbeing.",
    },
    {
      role: "Global Student Ambassador",
      org: "KNU (2024)",
      desc: "1 of 4 selected from the international student body; first point of contact for about 250 global students; helped host International Day and cross-cultural events.",
    },
    {
      role: "English Mentor",
      org: "International Writing Center, KNU (Jul 2025 – 2026)",
      desc: "1 of 7 mentors, selected for consecutive terms; ran small-group debates and writing exercises with feedback from over 70 students per semester. Video Contest Winner, KNU-OIA.",
    },
    {
      role: "Student Council Member",
      org: "Christ University (2022 batch)",
      desc: "1 of 15 students selected across all departments of the Kengeri campus; relayed student feedback to administration and faculty and supported council events.",
    },
    {
      role: "Self-Funded Scholar",
      org: "Dual Degree in Korea",
      desc: "Self-funded my studies in Korea through lab research and international-student mentoring while completing a dual degree.",
    },
  ]

  // Presentations from Section 12
  const presentations = [
    "KICS Fall Conference (Grand Prize, 1st of 90 teams)",
    "KIIT Summer Conference 2026 (Bronze Prize)",
    "She Leads Conclave pitch (1st Prize among 500 participants)",
  ]

  // Skills verbatim from CONTENT.md Section 16
  const skillCategories = [
    {
      title: "Programming & ML",
      content:
        "Python (NumPy, Pandas, scikit-learn, TensorFlow/Keras, PyTorch), C, R, TypeScript, SQL; LLM pipelines, RAG, NLP, YOLO11, CLIP, SimpleITK, elastix",
    },
    {
      title: "Product & Research",
      content:
        "User research, survey and experiment design, ablation studies, metrics selection, Behaviour Change Wheel, WHO-5/PHQ-9, budgeting, pricing, social media marketing, stakeholder partnerships",
    },
    {
      title: "Tools & Infrastructure",
      content: "Git, Docker, FastAPI, Next.js, CBMC, Linux",
    },
    {
      title: "Languages",
      content: "English (IELTS Band 8, Nov 2026), Malayalam (native)",
    },
  ]

  // Education verbatim from CONTENT.md Section 18
  const education = [
    {
      school: "Christ University, Bangalore, India",
      degree: "B.Tech in Computer Science and Engineering, AI/ML Specialisation",
      period: "Aug 2022 – Jul 2026",
      grade: "CGPA 9.55/10, First Class with Distinction",
    },
    {
      school: "Kyungpook National University (KNU), South Korea",
      degree: "B.Eng. in Computer Science, 2+2 Double Degree",
      period: "Sept 2024 – Aug 2026",
      grade: "1 of 5 engineering students selected university-wide",
    },
  ]

  return (
    <section id="experience" className="py-24 bg-background border-b border-border/70 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl space-y-20">
        {/* 1. RESEARCH & INDUSTRY EXPERIENCE */}
        <div className="space-y-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
              Appointments & Labs
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground tracking-tight mt-1">
              Experience
            </h2>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <SpotlightCard key={idx} className="p-6 bg-card">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <h3 className="font-serif font-bold text-xl text-foreground">
                    {exp.title}
                  </h3>
                  <span className="font-mono text-xs text-accent font-semibold">
                    {exp.period}
                  </span>
                </div>

                <div className="text-sm font-mono text-muted-foreground mb-4">
                  <span className="text-foreground font-medium">{exp.lab}</span> · {exp.institution}
                </div>

                <ul className="space-y-2 font-sans text-sm text-foreground/85 leading-relaxed">
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {exp.certificate && (
                  <div className="mt-4 pt-3 border-t border-border/60">
                    <a
                      href={exp.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted text-foreground hover:border-accent border border-border text-xs font-mono font-medium transition"
                    >
                      <Award className="w-3.5 h-3.5 text-accent" />
                      <span>{exp.certificateLabel}</span>
                    </a>
                  </div>
                )}
              </SpotlightCard>
            ))}
          </div>
        </div>

        {/* 2. LEADERSHIP, OUTREACH & PRESENTATIONS */}
        <div className="space-y-8 pt-8 border-t border-border/60">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
              Community & Engagement
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground tracking-tight mt-1">
              People first
            </h2>
            <p className="text-base font-sans text-muted-foreground mt-2">
              Technology only works if people can use it, trust it and speak up about it. These are the roles where I practised that.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {leadershipItems.map((item, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-card border border-border/80 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-foreground">{item.role}</span>
                  <span className="text-accent">{item.org}</span>
                </div>
                <p className="text-xs font-sans text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

            {/* Journalism Card: Preserved Links */}
            <div className="p-5 rounded-xl bg-card border border-border/80 space-y-3 md:col-span-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-foreground">Writing & Journalism</span>
                <span className="text-accent">Spring 2026 KNU Times (Issue 401)</span>
              </div>
              <p className="text-xs font-sans text-muted-foreground leading-relaxed">
                One of two international student contributors to the Spring 2026 KNU Times; my article, “Making Friends in Korea as a Foreign Student,” is about building community across cultural barriers.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href="https://www.knupresscenter.com/news/articleView.html?idxno=31898"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:underline font-semibold"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Read online at KNU Press Center →</span>
                </a>
                <a
                  href="/knu-times-making-friends-in-korea.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="KNU_Times_Making_Friends_In_Korea.pdf"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-foreground hover:text-accent font-medium"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Article PDF ↓</span>
                </a>
              </div>
            </div>
          </div>

          {/* Conference Presentations */}
          <div className="p-5 rounded-xl bg-muted/30 border border-border/70 space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-foreground font-semibold block">
              Conference Presentations & Pitches:
            </span>
            <div className="flex flex-wrap gap-2 pt-1">
              {presentations.map((p, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-card border border-border text-xs font-mono text-foreground/90"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 3. SKILLS */}
        <div className="space-y-6 pt-8 border-t border-border/60">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
              Capabilities
            </span>
            <h2 className="text-3xl font-serif font-bold text-foreground mt-1">
              Skills
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-card border border-border/80 space-y-1.5">
                <h3 className="font-mono text-xs font-bold uppercase text-accent">
                  {cat.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-foreground/90 leading-relaxed">
                  {cat.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. EDUCATION */}
        <div className="space-y-6 pt-8 border-t border-border/60">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
              Academic Degrees
            </span>
            <h2 className="text-3xl font-serif font-bold text-foreground mt-1">
              Education
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {education.map((edu, idx) => (
              <SpotlightCard key={idx} className="p-5 bg-card space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <span className="text-accent font-bold">2+2 Double Degree</span>
                  <span>{edu.period}</span>
                </div>
                <h3 className="font-serif font-bold text-lg text-foreground">
                  {edu.school}
                </h3>
                <p className="font-sans text-xs text-foreground/90">
                  {edu.degree}
                </p>
                <div className="pt-2 text-xs font-mono font-semibold text-accent">
                  {edu.grade}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
