"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  ExternalLink,
  Github,
  FileText,
  Award,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Info,
} from "lucide-react"
import SpotlightCard from "@/components/reactbits/SpotlightCard"
import EvidenceAnnotation from "@/components/ui/EvidenceAnnotation"

type FilterCategory = "All" | "Audit & Safety" | "Community & Health" | "Engineering & Hardware" | "Ventures"

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All")

  const filters: FilterCategory[] = [
    "All",
    "Audit & Safety",
    "Community & Health",
    "Engineering & Hardware",
    "Ventures",
  ]

  // Main featured projects
  const mainProjects = [
    {
      id: "health-llm-audit",
      category: "Audit & Safety" as FilterCategory,
      tag: "Featured · Audit & Safety · Nov 2026",
      isFeatured: true,
      title: "Health LLM Audit: Malayalam & Manglish",
      oneLiner: "Do AI models answer health questions worse when you ask them the way you actually type?",
      summary:
        "I tested three models on 13 high-risk health questions in four variants (Standard English, Simple English, Malayalam script and Manglish): 156 evaluations in total. Manglish was the riskiest variant, with two of three models giving unsafe answers to 31% of questions. Code, questions and rubric are public.",
      image: "/k-context-translator-project.jpg", // high quality audit banner
      tech: ["Python", "Groq API", "pandas", "Clinical Rubric"],
      caseStudyUrl: "/work/health-llm-audit",
      links: {
        caseStudy: "/work/health-llm-audit",
        github: "https://github.com/AngelaEmileJose/health-llm-audit",
        writeup: "https://github.com/AngelaEmileJose/health-llm-audit#readme",
      },
    },
    {
      id: "nadakkaam",
      category: "Community & Health" as FilterCategory,
      tag: "Award winner · Community & Health · Oct 2026",
      title: "Nadakkaam: Peer-Led Walking Circles for Homemaker Mothers",
      oneLiner: "A nine-month pilot that gets homemaker mothers walking together.",
      summary:
        "Nadakkaam (“Let’s walk” in Malayalam) is a peer-led programme for 100 women aged 40–75 across five clusters in Kochi, designed to reduce isolation, improve wellbeing and build lasting activity habits. 1st Prize, She Leads Women’s Conclave 2026 (V-Guard Industries CSR), among 500 participants. Now in funding stages.",
      image: "/nadakkaam-walking-circles.jpg",
      award: "1st Prize, She Leads Women’s Conclave 2026 (500 participants)",
      status: "In funding stages (pilot targets, non-causal design)",
      tech: ["Behaviour Change Wheel", "Community Design", "WHO-5 / PHQ-9", "Kudumbashree Partnership"],
      caseStudyUrl: "/work/nadakkaam",
      links: {
        caseStudy: "/work/nadakkaam",
        paper: "/nadakkaam-project-proposal.pdf",
        paperLabel: "Project Proposal (PDF)",
      },
    },
    {
      id: "cbmc-verification",
      category: "Audit & Safety" as FilterCategory,
      isVerification: true,
      tag: "Audit & Safety · May 2025 – Feb 2026 · Software and Safety Engineering Lab, KNU",
      title: "LLM-Assisted Formal Verification (CBMC)",
      oneLiner: "Treat model output as untrusted until it has been independently checked.",
      summary:
        "I built a pipeline that uses an LLM to translate program specifications into formal logic, then checks them with the CBMC model checker on 27 Stateflow-derived C programs. Of 334 LLM-generated specifications, 271 (81%) passed across 24 programs, with 9 programs at 100%. The failures matter as much as the passes: incorrect and hallucinated specifications were caught because nothing the model produced was trusted until independently validated.",
      whyItMatters:
        "This is my clearest example of evidenced safety: a system that does not ask you to trust the model, but shows its work.",
      image: "/fire-detection-dashboard.jpg",
      tech: ["C", "CBMC", "LLM pipelines", "Python"],
      evidenceKey: "81% of specifications passed",
    },
    {
      id: "fire-detection",
      category: "Engineering & Hardware" as FilterCategory,
      isVerification: true,
      tag: "Engineering · Mar – May 2026 · Capstone Design Project 2",
      title: "Fire Detection: YOLO11 + CLIP Hybrid",
      recognition:
        "Bronze Prize, KIIT Summer Conference 2026 · Software copyright registered (Korea Copyright Commission) · Collaboration with JINMYUNG I&C",
      summary:
        "I asked whether a standalone real-time detector like YOLO11 is still the right tool for fire detection, compared with models that understand scene context. I ran an ablation on 1,600 hand-curated images across 8 scene types (fire, bonfire, candle, cooking, fireplace, fireworks, cigarette and look-alikes).",
      findingHighlight:
        "Raised the F2-score from 0.510 (YOLO11 alone) to 0.833 by pairing YOLO11 fire/smoke detection with CLIP (ViT-B/32) validation, using scene captions from the InternVL 2.5-4B VQA model.",
      honestReading:
        "Context matters a great deal (0.510 to 0.826). The hybrid’s extra gain (0.826 to 0.833) was small, and statistical analysis showed it was not proven beyond run-to-run variance.",
      whyF2:
        "A missed fire costs far more than a false alarm, so I weighted recall more heavily. The metric encodes who bears the cost of an error.",
      image: "/fire-detection-architecture.png",
      imageFit: "contain" as const,
      tech: ["YOLO11", "CLIP ViT-B/32", "InternVL 2.5-4B", "Python"],
      links: {
        paper: "/fire-detection-research-paper.pdf",
        paperLabel: "Research Paper (PDF)",
        certificate: "/fire-detection-certificate.pdf",
        certificateLabel: "KIIT Bronze Prize Certificate",
        copyrightCertificate: "/fire-detection-copyright-certificate.pdf",
        copyrightCertificateLabel: "Software Copyright Certificate",
      },
    },
    {
      id: "hearing-aid",
      category: "Engineering & Hardware" as FilterCategory,
      tag: "Award winner · Engineering & Hardware · Sept – Dec 2025 · Capstone Design 1",
      title: "Low-Cost Hearing Aid (Conv-TasNet-GAN)",
      recognition: "1st place among 90 teams, KICS Conference (Grand Prize) · Internship offer from WIM Robotics",
      summary:
        "Hearing aids are expensive, and cheap ones struggle in noise. Working with WIM Robotics (South Korea) in a team of five, I helped prototype a low-cost hearing aid that pairs a custom analog circuit with a deep-learning noise-removal model under tight cost and hardware limits. I trained a Conv-TasNet-GAN on paired clean and hearing-aid-recorded speech using SI-SDR, multi-resolution STFT and log-Mel losses. On a held-out set, it improved PESQ by 31% and STOI by 14% over the noisy input, with a 96% reduction in model size.",
      image: "/gan-spectrogram.png",
      award: "Grand Prize (대상) · 2025 KICS Fall Conference (1st of 90 teams)",
      tech: ["Python", "PyTorch", "GAN", "Conv-TasNet", "Signal processing", "Hardware design"],
      links: {
        github: "https://github.com/GANNoiseRemover/NoiseFilter",
        paper: "/gan-noise-remover-research-paper.pdf",
        paperLabel: "Research Paper (PDF)",
        certificate: "/kics-grand-prize-certificate.png",
        certificateLabel: "KICS Grand Prize Certificate",
      },
    },
    {
      id: "report-rag",
      category: "Engineering & Hardware" as FilterCategory,
      isVerification: true,
      tag: "Engineering · Dec 2025",
      title: "ReportRAG",
      summary:
        "A retrieval-augmented system that answers questions about 100+ page financial reports with cited answers. Hallucinations were reduced, measured on 100 test questions, by using multi-source retrieval with FAISS, and it ships with a ready-to-use command-line interface.",
      image: "/report-analyzer-screenshot.png",
      tech: ["Python", "FastAPI", "LangChain", "FAISS", "Llama 3-70B (Groq)"],
      links: {
        github: "https://github.com/AngelaEmileJose/rag-company-report-analyzer",
      },
    },
    {
      id: "scratch-venture",
      category: "Ventures" as FilterCategory,
      tag: "Venture · Nov 2026 – present · Early stage",
      title: "Scratch: Korean and Japanese Food for the Indian Market",
      role: "Co-founder, with my mother",
      summary:
        "After two years living in Korea, I wanted to bring the cuisine home. Scratch is an early-stage food venture offering Korean and Japanese dishes adapted for Indian customers. I have been developing recipes through 7 rounds of testing with 5 tasters, using their feedback to refine spice level, ingredients and portion size. We are launching a social media presence to test interest and learn which content resonates.",
      whyItIsHere:
        "It is the same discipline as my research, applied to something delicious: small samples, honest feedback, iterate.",
      image: "/asian-fusion-cuisine.jpg",
      tech: ["Recipe Engineering", "Sensory Testing", "Community Feedback", "Product Iteration"],
      links: {
        blog: "https://cookwithemile.blogspot.com/",
        blogLabel: "Cook with Emile Blog",
      },
    },
  ]

  // Compact project cards (kept intact)
  const compactProjects = [
    {
      title: "K-Context Translator",
      category: "Engineering & Hardware" as FilterCategory,
      date: "Dec 2025",
      description:
        "A cultural interpreter for international students and travellers in Korea, giving context-aware translations with politeness levels, safety scores and practical tips beyond literal meaning.",
      tech: ["Next.js 16", "Google Gemini 2.5", "Tailwind CSS", "PWA"],
      image: "/k-context-screenshot.png",
      links: {
        github: "https://github.com/AngelaEmileJose/Translator",
        demo: "https://koreantranslator.vercel.app/",
      },
    },
    {
      title: "KNU Link",
      category: "Community & Health" as FilterCategory,
      date: "Jan 2026",
      description:
        "A low-pressure social discovery app that helps students, especially introverts and newcomers, connect through shared activities rather than appearance or status.",
      tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
      image: "/knu-link.png",
      links: {
        github: "https://github.com/AngelaEmileJose/KNU-Link",
        demo: "https://knu-link.vercel.app/",
      },
    },
    {
      title: "NutriFlow AI",
      category: "Engineering & Hardware" as FilterCategory,
      date: "Nov–Dec 2025",
      description:
        "A multimodal nutrition tracker that recognises dishes from photos, fetches nutrition data, and runs a 12-step LangGraph workflow from image upload to saved JSON.",
      tech: ["Qwen-VL-Plus", "LangGraph", "Computer vision", "Nutrition Analysis"],
      image: "/nutriscan-screenshot.jpg",
      links: {
        github: "https://github.com/HCI-Team4/AI-Nutrition-Tracker",
      },
    },
  ]

  const filteredMainProjects =
    activeFilter === "All"
      ? mainProjects
      : mainProjects.filter((p) => p.category === activeFilter)

  const filteredCompactProjects =
    activeFilter === "All"
      ? compactProjects
      : compactProjects.filter((p) => p.category === activeFilter)

  return (
    <section id="work" className="py-24 bg-background border-b border-border/70 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Section Intro (Verbatim from CONTENT.md Section 4) */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>Research Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground tracking-tight">
            Selected work
          </h2>
          <p className="text-base sm:text-lg font-sans text-muted-foreground leading-relaxed">
            Most of my projects start from one question: how would we know if this system were wrong, and who would notice first? Some answer it with audits, some with formal verification, some by designing alongside the community the system is for.
          </p>

          {/* Filter Bar */}
          <div className="pt-4 flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all ${
                  activeFilter === filter
                    ? "bg-accent text-white shadow-sm"
                    : "bg-muted/50 hover:bg-muted text-foreground/80 border border-border"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Main Projects Grid */}
        <div className="space-y-12">
          {filteredMainProjects.map((project, index) => (
            <React.Fragment key={project.id}>
              {/* Evidence & Verification Section Heading (as specified in CONTENT.md section 4) */}
              {project.id === "cbmc-verification" && activeFilter === "All" && (
                <div className="pt-8 pb-4 border-t border-border/70">
                  <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold block mb-1">
                    Specialized Sub-Theme
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
                    Evidence & Verification: how do we know the system is right?
                  </h3>
                  <p className="text-xs font-mono text-muted-foreground mt-1">
                    Treating model output as untrusted until verified by mathematical or empirical checks.
                  </p>
                </div>
              )}

              <SpotlightCard className="p-6 sm:p-8 flex flex-col lg:flex-row gap-8 items-start">
                {/* Project Image Column */}
                <div className="w-full lg:w-5/12 flex-shrink-0">
                  <div
                    className={`relative rounded-xl overflow-hidden border border-border/80 h-64 sm:h-72 w-full ${
                      project.imageFit === "contain" ? "bg-card p-4" : "bg-muted"
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className={project.imageFit === "contain" ? "object-contain" : "object-cover"}
                      sizes="(max-width: 1024px) 100vw, 400px"
                    />
                    {project.isFeatured && (
                      <div className="absolute top-3 left-3 bg-accent text-white text-[11px] font-mono px-3 py-1 rounded-full shadow font-semibold">
                        Featured Audit
                      </div>
                    )}
                  </div>

                  {/* Tech stack pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-full bg-muted text-foreground/80 border border-border/60 text-[11px] font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Description Column */}
                <div className="w-full lg:w-7/12 space-y-4">
                  {/* Tag */}
                  <div className="text-xs font-mono text-accent font-medium">
                    {project.tag}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground tracking-tight">
                    {project.title}
                  </h3>

                  {/* One-Liner / Role */}
                  {project.oneLiner && (
                    <p className="font-serif italic text-base text-foreground/90">
                      “{project.oneLiner}”
                    </p>
                  )}
                  {project.role && (
                    <p className="font-mono text-xs text-muted-foreground">
                      <strong>Role:</strong> {project.role}
                    </p>
                  )}

                  {/* Summary */}
                  <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {project.id === "health-llm-audit" ? (
                      <>
                        I tested three models on 13 high-risk health questions in four variants (Standard English, Simple English, Malayalam script and Manglish):{" "}
                        <EvidenceAnnotation
                          claim="156 evaluations in health LLM audit"
                          method="3 models × 13 questions × 4 language variants, blinded rubric scoring"
                          n="156 evaluations"
                          limitation="Each unsafe percentage is only 1–4 questions; single written rubric involving judgement"
                        >
                          156 evaluations
                        </EvidenceAnnotation>{" "}
                        in total. Manglish was the riskiest variant, with two of three models giving unsafe answers to{" "}
                        <EvidenceAnnotation
                          claim="31% unsafe in Manglish"
                          method="blended accuracy, clarity, referral scoring where harmful advice is scored 0"
                          n="4 of 13 questions per model"
                          limitation="Small question set, proxy clinical safety"
                        >
                          31% of questions
                        </EvidenceAnnotation>
                        . Code, questions and rubric are public.
                      </>
                    ) : project.id === "cbmc-verification" ? (
                      <>
                        I built a pipeline that uses an LLM to translate program specifications into formal logic, then checks them with the CBMC model checker on 27 Stateflow-derived C programs. Of 334 LLM-generated specifications,{" "}
                        <EvidenceAnnotation
                          claim="81% of specifications passed"
                          method="271 of 334 LLM-generated specs, across 24 of 27 programs; 9 programs at 100%"
                          n="334 specs"
                          limitation="Stateflow-derived C programs only"
                        >
                          271 (81%) passed
                        </EvidenceAnnotation>{" "}
                        across 24 programs, with 9 programs at 100%. The failures matter as much as the passes: incorrect and hallucinated specifications were caught because nothing the model produced was trusted until independently validated.
                      </>
                    ) : project.id === "fire-detection" ? (
                      <>
                        I asked whether a standalone real-time detector like YOLO11 is still the right tool for fire detection, compared with models that understand scene context. I ran an ablation on{" "}
                        <EvidenceAnnotation
                          claim="1,600 images in fire-detection ablation"
                          method="8 scene types: fire, bonfire, candle, cooking, fireplace, fireworks, cigarette, look-alikes"
                          n="1,600 curated images"
                          limitation="Lab dataset ablation; real-world cameras may exhibit varying optical noise"
                        >
                          1,600 hand-curated images
                        </EvidenceAnnotation>{" "}
                        across 8 scene types.
                      </>
                    ) : (
                      project.summary
                    )}
                  </p>

                  {/* Special Context Callouts */}
                  {project.whyItMatters && (
                    <div className="p-3.5 rounded-xl bg-accent/5 border border-accent/20 text-xs font-mono text-foreground/90">
                      <strong className="text-accent">Why it matters here:</strong> {project.whyItMatters}
                    </div>
                  )}

                  {/* Fire Detection Special Findings */}
                  {project.id === "fire-detection" && (
                    <div className="space-y-3 pt-2">
                      <div className="p-3.5 rounded-xl bg-card border border-border/80 text-xs font-mono space-y-2">
                        <div className="flex items-center gap-1.5 font-bold text-accent">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Ablation Metric Highlights (F2-score):</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
                          <div className="p-2 rounded bg-muted/50">
                            <span className="text-muted-foreground block">YOLO11 alone</span>
                            <span className="text-foreground font-bold">F2: 0.510</span>
                          </div>
                          <div className="p-2 rounded bg-muted/50">
                            <span className="text-muted-foreground block">CLIP caption matching</span>
                            <span className="text-foreground font-bold">F2: 0.826</span>
                          </div>
                          <div className="p-2 rounded bg-accent/10 border border-accent/30">
                            <span className="text-accent block font-medium">YOLO11 + CLIP hybrid</span>
                            <span className="text-foreground font-bold">
                              <EvidenceAnnotation
                                claim="F2 0.833"
                                method="hybrid YOLO11 + CLIP on 1,600 images, 8 scene types"
                                n="1,600 images"
                                limitation="The gain over CLIP alone (0.826) was not proven beyond variance"
                              >
                                F2: 0.833
                              </EvidenceAnnotation>
                            </span>
                          </div>
                        </div>
                        <p className="text-[11px] text-muted-foreground font-sans pt-1">
                          <strong>Reading the result honestly:</strong> context matters a great deal (0.510 to 0.826). The hybrid’s extra gain (0.826 to 0.833) was small, and statistical analysis showed it was not proven beyond run-to-run variance.
                        </p>
                        <p className="text-[11px] text-muted-foreground font-sans">
                          <strong>Why F2, not F1:</strong> a missed fire costs far more than a false alarm, so I weighted recall more heavily. The metric encodes who bears the cost of an error.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Recognition & Awards */}
                  {project.recognition && (
                    <div className="flex items-center gap-2 p-2.5 rounded-lg bg-card border border-border text-xs font-mono text-muted-foreground">
                      <Award className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>{project.recognition}</span>
                    </div>
                  )}

                  {/* Action Links */}
                  <div className="pt-2 flex flex-wrap gap-3">
                    {project.caseStudyUrl && (
                      <Link
                        href={project.caseStudyUrl}
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-accent text-white rounded-full text-xs font-mono font-semibold hover:bg-accent/90 transition shadow-sm"
                      >
                        <span>Read the case study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}

                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-muted hover:bg-border/60 text-foreground border border-border rounded-full text-xs font-mono font-medium transition"
                      >
                        <Github className="w-3.5 h-3.5 text-accent" />
                        <span>Source code</span>
                      </a>
                    )}

                    {project.links?.paper && (
                      <a
                        href={project.links.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-muted hover:bg-border/60 text-foreground border border-border rounded-full text-xs font-mono font-medium transition"
                      >
                        <FileText className="w-3.5 h-3.5 text-accent" />
                        <span>{project.links.paperLabel || "Paper (PDF)"}</span>
                      </a>
                    )}

                    {project.links?.certificate && (
                      <a
                        href={project.links.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-muted hover:bg-border/60 text-foreground border border-border rounded-full text-xs font-mono font-medium transition"
                      >
                        <Award className="w-3.5 h-3.5 text-accent" />
                        <span>{project.links.certificateLabel || "Certificate"}</span>
                      </a>
                    )}

                    {project.links?.copyrightCertificate && (
                      <a
                        href={project.links.copyrightCertificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-muted hover:bg-border/60 text-foreground border border-border rounded-full text-xs font-mono font-medium transition"
                      >
                        <Award className="w-3.5 h-3.5 text-accent" />
                        <span>{project.links.copyrightCertificateLabel || "Copyright Registration"}</span>
                      </a>
                    )}

                    {project.links?.blog && (
                      <a
                        href={project.links.blog}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-muted hover:bg-border/60 text-foreground border border-border rounded-full text-xs font-mono font-medium transition"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-accent" />
                        <span>{project.links.blogLabel || "Cook with Emile Blog"}</span>
                      </a>
                    )}
                  </div>
                </div>
              </SpotlightCard>
            </React.Fragment>
          ))}
        </div>

        {/* Compact Cards Section (K-Context Translator, KNU Link, NutriFlow AI) */}
        {filteredCompactProjects.length > 0 && (
          <div className="mt-16 pt-12 border-t border-border/70 space-y-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                Additional Deployments
              </span>
              <h3 className="text-2xl font-serif font-bold text-foreground mt-1">
                Compact Case Studies & Interactive Apps
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredCompactProjects.map((p, idx) => (
                <SpotlightCard key={idx} className="p-5 flex flex-col justify-between h-full bg-card">
                  <div>
                    <div className="relative rounded-lg overflow-hidden h-40 mb-4 bg-muted border border-border/70">
                      <Image src={p.image} alt={p.title} fill className="object-cover" />
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground mb-1.5">
                      <span className="text-accent font-semibold">{p.category}</span>
                      <span>{p.date}</span>
                    </div>

                    <h4 className="font-serif font-bold text-lg text-foreground mb-2">
                      {p.title}
                    </h4>

                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-border/60 flex flex-wrap gap-2">
                    {p.links?.github && (
                      <a
                        href={p.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-mono text-foreground hover:text-accent font-medium"
                      >
                        <Github className="w-3 h-3" />
                        <span>Source</span>
                      </a>
                    )}
                    {p.links?.demo && (
                      <a
                        href={p.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-mono text-accent hover:underline font-semibold"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Live app</span>
                      </a>
                    )}
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
