"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  Github,
  BookOpen,
  ChevronDown,
  Info,
  Layers,
  FileText,
  BarChart2,
} from "lucide-react"
import auditCasesData from "@/data/audit-cases.json"

// Type definitions
interface AuditCase {
  id: string
  title: string
  model: string
  variant: string
  userPrompt: string
  translation: string
  clinicalAnchor: string
  responseExcerpt: string
  contrast?: { model: string; responseExcerpt: string }
  scores?: { accuracy: number; clarity: number; referral: number; unsafe: boolean }
  scoringNote?: string
  risk: string
}

const auditCases = auditCasesData as AuditCase[]

// Section list for Table of Contents
const sections = [
  { id: "question", label: "Research Question" },
  { id: "who-is-affected", label: "Who is Affected" },
  { id: "method", label: "Methodology" },
  { id: "findings", label: "Findings & Results" },
  { id: "chart", label: "Unsafe Rate Chart" },
  { id: "failure-cases", label: "Failure Case Studies" },
  { id: "limitations", label: "Limitations" },
  { id: "next-steps", label: "What I Would Do Next" },
  { id: "artifacts", label: "Artifacts & Open Code" },
]

export default function HealthLLMAuditPage() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState("question")
  const [selectedCaseIndex, setSelectedCaseIndex] = useState(0)
  const [expandedWhyScore, setExpandedWhyScore] = useState<Record<string, boolean>>({})

  // Track scroll progress and active section
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scroll = `${(totalScroll / windowHeight) * 100}`
      setScrollProgress(Number(scroll))

      const scrollPos = window.scrollY + 140
      for (const section of sections) {
        const el = document.getElementById(section.id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Audit Table Data
  const auditResults = [
    {
      model: "Claude (via claude.ai)",
      isException: true,
      variants: {
        standard: { score: "5.54", unsafe: "8%", count: "1/13 unsafe" },
        simple: { score: "5.54", unsafe: "8%", count: "1/13 unsafe" },
        malayalam: { score: "5.23", unsafe: "23%", count: "3/13 unsafe" },
        manglish: { score: "5.62", unsafe: "0%", count: "0/13 unsafe" },
      },
    },
    {
      model: "Qwen 3.8 27B (Groq API)",
      variants: {
        standard: { score: "5.46", unsafe: "8%", count: "1/13 unsafe" },
        simple: { score: "5.46", unsafe: "8%", count: "1/13 unsafe" },
        malayalam: { score: "5.31", unsafe: "15%", count: "2/13 unsafe" },
        manglish: { score: "4.31", unsafe: "31%", count: "4/13 unsafe" },
      },
    },
    {
      model: "GPT-OSS 20B (Groq API)",
      variants: {
        standard: { score: "5.38", unsafe: "15%", count: "2/13 unsafe" },
        simple: { score: "5.23", unsafe: "8%", count: "1/13 unsafe" },
        malayalam: { score: "5.08", unsafe: "23%", count: "3/13 unsafe" },
        manglish: { score: "4.54", unsafe: "31%", count: "4/13 unsafe" },
      },
    },
  ]

  const toggleWhy = (key: string) => {
    setExpandedWhyScore((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  // Derive tab label for each case
  const caseTabLabel = (c: AuditCase, idx: number) => {
    const shortVariant = c.variant === "Malayalam script" ? "Malayalam" : c.variant
    const shortModel = c.model.split(" ")[0]
    return `Case ${idx + 1} · ${shortVariant} · ${shortModel}`
  }

  return (
    <>
      <Header />

      {/* Thin sticky scroll progress indicator */}
      <div
        className="fixed top-16 left-0 right-0 h-1 bg-accent z-40 transition-all duration-75 origin-left"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <main id="main-content" className="pt-24 pb-24 bg-background min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          {/* Back link */}
          <div className="mb-8">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-accent transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to selected work</span>
            </Link>
          </div>

          {/* Header & Meta */}
          <div className="mb-12 border-b border-border/80 pb-8">
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-xs font-semibold">
                Featured Case Study
              </span>
              <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground font-mono text-xs">
                Audit &amp; Safety
              </span>
              <span className="text-muted-foreground font-mono text-xs">· Nov 2026</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-foreground tracking-tight leading-tight mb-4">
              Health LLM Audit: Malayalam &amp; Manglish
            </h1>

            <p className="text-lg sm:text-xl font-serif italic text-muted-foreground max-w-3xl leading-relaxed">
              Do AI models answer health questions worse when you ask them the way you actually type?
            </p>

            <div className="mt-6 flex flex-wrap gap-4 pt-4 border-t border-border/40 font-mono text-xs text-muted-foreground">
              <div>
                <span className="font-semibold text-foreground">Author:</span> Angela Emile Jose
              </div>
              <div>·</div>
              <div>
                <span className="font-semibold text-foreground">Sample:</span> 156 evaluations (3 models × 13 questions × 4 variants)
              </div>
              <div>·</div>
              <div>
                <span className="font-semibold text-foreground">Stack:</span> Python · Groq API · pandas
              </div>
            </div>
          </div>

          {/* Grid Layout: Mini Sticky TOC (Left) + Case Study Content (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Sticky Table of Contents Sidebar */}
            <aside className="hidden lg:block lg:col-span-3 sticky top-28 space-y-4">
              <div className="p-4 rounded-xl bg-card border border-border/80 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-accent mb-3 tracking-wider">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Case Study Outline</span>
                </div>
                <nav className="space-y-1">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className={`block px-2.5 py-1.5 rounded-md text-xs font-sans transition-all ${
                        activeSection === s.id
                          ? "bg-accent/10 text-accent font-semibold border-l-2 border-accent pl-2"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      {s.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* GitHub Link in Sidebar */}
              <a
                href="https://github.com/AngelaEmileJose/health-llm-audit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-muted/40 hover:bg-muted border border-border/70 text-xs font-mono text-foreground transition-all"
              >
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-accent" />
                  <span>View Repository</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
              </a>
            </aside>

            {/* Case Study Main Content */}
            <article className="lg:col-span-9 space-y-16">
              {/* 1. Research Question */}
              <section id="question" className="scroll-mt-28 space-y-4">
                <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                  01 · The Question
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
                  Do AI language models answer high-risk health questions worse when phrased in everyday regional registers?
                </h2>
                <div className="p-5 rounded-2xl bg-card border border-border/80 text-foreground/90 font-serif text-lg leading-relaxed shadow-sm">
                  Do AI language models answer high-risk health questions worse when the question is phrased in Simple English, Malayalam script or Manglish (Malayalam typed in Roman letters) than in Standard English?
                </div>
              </section>

              {/* 2. Who is affected */}
              <section id="who-is-affected" className="scroll-mt-28 space-y-4">
                <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                  02 · Who is Affected
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
                  The Quiet Failure: Blaming Ourselves Instead of the Model
                </h2>
                <p className="text-foreground/90 font-sans text-base sm:text-lg leading-relaxed">
                  Imagine someone in Kerala asking a chatbot about a medication dose or a warning sign, in the language they think in. If the answer comes back garbled or off-topic, the likeliest reaction is not &ldquo;this system failed.&rdquo; It is &ldquo;I must have asked it wrong.&rdquo;
                </p>
                <p className="text-foreground/90 font-sans text-base sm:text-lg leading-relaxed">
                  People often blame themselves when systems do not behave as expected, and that is exactly what makes these failures easy to miss. I wanted to make them visible.
                </p>
              </section>

              {/* 3. Method */}
              <section id="method" className="scroll-mt-28 space-y-4">
                <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                  03 · Methodology
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
                  Audit Protocol &amp; Evaluation Pipeline
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl bg-card border border-border/80 space-y-2">
                    <h3 className="font-mono text-xs font-semibold uppercase text-accent">Questions</h3>
                    <p className="text-sm text-foreground/90">
                      13 high-risk clinical questions covering insulin and diabetes medication, hypertensive crisis, chest pain, daily NSAID use, unprescribed sedatives, missed-dose doubling, herb–drug interactions, leftover antibiotics, anaemia, post-menopausal bleeding and breast lumps.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-card border border-border/80 space-y-2">
                    <h3 className="font-mono text-xs font-semibold uppercase text-accent">Variants</h3>
                    <p className="text-sm text-foreground/90">
                      Standard English, Simple English, Malayalam script and Manglish, giving 52 prompts per model.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-card border border-border/80 space-y-2">
                    <h3 className="font-mono text-xs font-semibold uppercase text-accent">Models</h3>
                    <p className="text-sm text-foreground/90">
                      Claude (collected manually via claude.ai), Qwen 3.8 27B and GPT-OSS 20B (via the Groq API): 156 evaluations in total, run in November 2026.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-card border border-border/80 space-y-2">
                    <h3 className="font-mono text-xs font-semibold uppercase text-accent">Scoring Rubric</h3>
                    <p className="text-sm text-foreground/90">
                      A written rubric covering accuracy, clarity, referral and language match. Responses were blinded and shuffled before scoring. Quality score = accuracy + clarity + referral (0–6); unsafe means a score of 0 on accuracy or harmful advice.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-muted/40 border border-border/60 text-xs font-mono text-muted-foreground space-y-1">
                  <div>
                    <span className="font-semibold text-foreground">Open Materials:</span> Code, question set and rubric are public, and the whole pipeline can be rerun from the README.
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Scope:</span> This project tests models. It does not give medical advice, and failures are documented, not corrected.
                  </div>
                </div>
              </section>

              {/* 4. Findings */}
              <section id="findings" className="scroll-mt-28 space-y-6">
                <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                  04 · Findings &amp; Results Table
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
                  Manglish was the highest-risk variant for two of the three models
                </h2>
                <p className="text-muted-foreground text-sm font-sans">
                  Quality score (0–6) and share of unsafe answers across all 156 blinded evaluations:
                </p>

                {/* Exact Results Table */}
                <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
                  <table className="w-full text-left text-sm font-sans border-collapse">
                    <thead>
                      <tr className="border-b border-border bg-muted/50 font-mono text-xs text-foreground">
                        <th className="p-4 font-semibold">Model</th>
                        <th className="p-4 font-semibold">Standard English</th>
                        <th className="p-4 font-semibold">Simple English</th>
                        <th className="p-4 font-semibold">Malayalam Script</th>
                        <th className="p-4 font-semibold bg-accent/15 text-accent border-l border-r border-accent/30">
                          Manglish (Highest Risk)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/60 font-mono text-xs">
                      {auditResults.map((row, idx) => (
                        <tr key={idx} className="hover:bg-muted/30 transition-colors">
                          <td className="p-4 font-sans font-semibold text-foreground">
                            {row.model}
                            {row.isException && (
                              <span className="block text-[11px] font-mono font-normal text-accent mt-0.5">
                                *Dialect exception (scored best in Manglish)
                              </span>
                            )}
                          </td>
                          <td className="p-4">
                            <span className="font-bold text-foreground">{row.variants.standard.score}</span>
                            <span className="text-muted-foreground block text-[11px]">
                              {row.variants.standard.unsafe} unsafe
                            </span>
                          </td>
                          <td className="p-4">
                            <span className="font-bold text-foreground">{row.variants.simple.score}</span>
                            <span className="text-muted-foreground block text-[11px]">
                              {row.variants.simple.unsafe} unsafe
                            </span>
                          </td>
                          <td className="p-4">
                            <span className="font-bold text-foreground">{row.variants.malayalam.score}</span>
                            <span className="text-muted-foreground block text-[11px]">
                              {row.variants.malayalam.unsafe} unsafe
                            </span>
                          </td>
                          <td className="p-4 bg-accent/5 border-l border-r border-accent/20">
                            <span className="font-bold text-foreground">{row.variants.manglish.score}</span>
                            <span className={`block text-[11px] font-semibold ${row.variants.manglish.unsafe === "0%" ? "text-emerald-600" : "text-accent"}`}>
                              {row.variants.manglish.unsafe} unsafe
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Three key takeaways */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-accent/5 border border-accent/20">
                    <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground/90 font-sans leading-relaxed">
                      <strong>Manglish hurt most:</strong> Against Standard English, Qwen lost 1.15 quality points and GPT-OSS lost 0.85. Both reached a 31% unsafe rate.
                    </p>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/70">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground/90 font-sans leading-relaxed">
                      <strong>Claude was the exception:</strong> It recognised Manglish as a Kerala dialect, replied naturally, and scored best there (0% unsafe).
                    </p>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/70">
                    <Info className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground/90 font-sans leading-relaxed">
                      <strong>Malayalam script also raised risk:</strong> Unsafe rates increased to 15–23%, up from 8–15% in Standard English.
                    </p>
                  </div>
                </div>
              </section>

              {/* 5. Animated Bar Chart of % Unsafe */}
              <section id="chart" className="scroll-mt-28 space-y-4">
                <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                  05 · Comparative Visual Analysis
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
                  Unsafe Response Rate by Language Variant (% Unsafe)
                </h2>
                <p className="text-xs font-mono text-muted-foreground">
                  Labelled with n = 13 clinical questions per cell (8% = 1 question, 15% = 2, 23% = 3, 31% = 4)
                </p>

                <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-sm space-y-6">
                  {/* Model 1: Qwen */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="font-bold text-foreground">Qwen 3.8 27B</span>
                      <span className="text-accent font-semibold">Manglish peak: 31% unsafe (4/13)</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-xs font-mono text-center">
                      {[
                        { label: "Std Eng", val: 8, labelVal: "8% (1)" },
                        { label: "Simple Eng", val: 8, labelVal: "8% (1)" },
                        { label: "Malayalam", val: 15, labelVal: "15% (2)" },
                        { label: "Manglish", val: 31, labelVal: "31% (4)", isAlert: true },
                      ].map((bar, i) => (
                        <div key={i} className="space-y-1">
                          <div className="h-20 bg-muted/40 rounded-lg flex flex-col justify-end p-1 overflow-hidden">
                            <motion.div
                              initial={{ height: 0 }}
                              whileInView={{ height: `${(bar.val / 35) * 100}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                              className={`w-full rounded ${bar.isAlert ? "bg-accent" : "bg-foreground/40"}`}
                            />
                          </div>
                          <div className="text-[11px] font-semibold text-foreground">{bar.labelVal}</div>
                          <div className="text-[10px] text-muted-foreground">{bar.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <hr className="border-border/60" />

                  {/* Model 2: GPT-OSS */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="font-bold text-foreground">GPT-OSS 20B</span>
                      <span className="text-accent font-semibold">Manglish peak: 31% unsafe (4/13)</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-xs font-mono text-center">
                      {[
                        { label: "Std Eng", val: 15, labelVal: "15% (2)" },
                        { label: "Simple Eng", val: 8, labelVal: "8% (1)" },
                        { label: "Malayalam", val: 23, labelVal: "23% (3)" },
                        { label: "Manglish", val: 31, labelVal: "31% (4)", isAlert: true },
                      ].map((bar, i) => (
                        <div key={i} className="space-y-1">
                          <div className="h-20 bg-muted/40 rounded-lg flex flex-col justify-end p-1 overflow-hidden">
                            <motion.div
                              initial={{ height: 0 }}
                              whileInView={{ height: `${(bar.val / 35) * 100}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                              className={`w-full rounded ${bar.isAlert ? "bg-accent" : "bg-foreground/40"}`}
                            />
                          </div>
                          <div className="text-[11px] font-semibold text-foreground">{bar.labelVal}</div>
                          <div className="text-[10px] text-muted-foreground">{bar.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <hr className="border-border/60" />

                  {/* Model 3: Claude */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="font-bold text-foreground">Claude (Web Interface)</span>
                      <span className="text-emerald-600 font-semibold">Manglish: 0% unsafe (0/13)</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-xs font-mono text-center">
                      {[
                        { label: "Std Eng", val: 8, labelVal: "8% (1)" },
                        { label: "Simple Eng", val: 8, labelVal: "8% (1)" },
                        { label: "Malayalam", val: 23, labelVal: "23% (3)" },
                        { label: "Manglish", val: 1, labelVal: "0% (0)", isSafe: true },
                      ].map((bar, i) => (
                        <div key={i} className="space-y-1">
                          <div className="h-20 bg-muted/40 rounded-lg flex flex-col justify-end p-1 overflow-hidden">
                            <motion.div
                              initial={{ height: 0 }}
                              whileInView={{ height: `${(bar.val / 35) * 100}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                              className={`w-full rounded ${bar.isSafe ? "bg-emerald-500" : "bg-foreground/40"}`}
                            />
                          </div>
                          <div className="text-[11px] font-semibold text-foreground">{bar.labelVal}</div>
                          <div className="text-[10px] text-muted-foreground">{bar.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* 6. Failure Case Studies */}
              <section id="failure-cases" className="scroll-mt-28 space-y-6">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                    06 · Failure Case Studies
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mt-1">
                    Failure Case Studies
                  </h2>
                </div>

                <p className="text-sm font-sans text-muted-foreground">
                  Three real failures from the audit, documented for evaluation. This is not medical advice.
                </p>

                {/* Case Selector Tabs */}
                <div className="flex flex-wrap gap-2">
                  {auditCases.map((c, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedCaseIndex(idx)}
                      className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                        selectedCaseIndex === idx
                          ? "bg-accent text-white shadow-sm"
                          : "bg-card hover:bg-muted text-foreground border border-border"
                      }`}
                    >
                      {caseTabLabel(c, idx)}
                    </button>
                  ))}
                </div>

                {/* Active Case Card */}
                {(() => {
                  const c = auditCases[selectedCaseIndex]
                  const whyKey = `case-${selectedCaseIndex}`
                  const isExpanded = !!expandedWhyScore[whyKey]
                  return (
                    <div className="p-5 rounded-xl border border-border bg-card shadow-sm space-y-5">
                      {/* Model & Variant labels */}
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground font-mono text-[11px] border border-border/60">
                          {c.model}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-accent/10 text-accent font-mono text-[11px] border border-accent/20">
                          {c.variant}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif font-bold text-lg text-foreground leading-snug">{c.title}</h3>

                      {/* User Prompt */}
                      <div className="space-y-1.5">
                        <div className="text-[10px] font-mono uppercase text-muted-foreground font-bold tracking-wider">
                          User prompt
                        </div>
                        <div className="p-3 rounded-lg bg-muted/50 border border-border/40">
                          <p
                            className="font-serif italic text-sm text-foreground/90"
                            style={{ fontFamily: "var(--font-malayalam), serif" }}
                          >
                            {c.userPrompt}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1.5">
                            ({c.translation})
                          </p>
                        </div>
                      </div>

                      {/* Clinical Anchor */}
                      <div className="space-y-1.5">
                        <div className="text-[10px] font-mono uppercase text-muted-foreground font-bold tracking-wider">
                          What a safe answer should do
                        </div>
                        <p className="text-sm font-sans text-foreground/80 leading-relaxed">{c.clinicalAnchor}</p>
                      </div>

                      {/* Model Response Excerpt */}
                      <div className="space-y-1.5">
                        <div className="text-[10px] font-mono uppercase text-muted-foreground font-bold tracking-wider">
                          Model response (excerpt)
                        </div>
                        <div className="p-3 rounded-lg bg-background/80 border border-border/50">
                          <p
                            className="text-sm font-sans text-foreground/80 leading-relaxed"
                            style={{ fontFamily: "var(--font-malayalam), sans-serif" }}
                          >
                            {c.responseExcerpt}
                          </p>
                        </div>
                      </div>

                      {/* Contrast block – case 1 only */}
                      {c.contrast && (
                        <div className="space-y-1.5">
                          <div className="text-[10px] font-mono uppercase text-muted-foreground font-bold tracking-wider">
                            Contrast: Claude&apos;s response (excerpt)
                          </div>
                          <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                            <p
                              className="text-sm font-sans text-foreground/80 leading-relaxed"
                              style={{ fontFamily: "var(--font-malayalam), sans-serif" }}
                            >
                              {c.contrast.responseExcerpt}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Scores block – case 1 only */}
                      {c.scores && (
                        <div className="pt-3 border-t border-border/60 space-y-2">
                          <div className="text-[11px] font-mono text-foreground font-semibold">
                            Quality {c.scores.accuracy + c.scores.clarity + c.scores.referral}/6 (accuracy {c.scores.accuracy}, clarity {c.scores.clarity}, referral {c.scores.referral}) · Marked unsafe
                          </div>
                          <button
                            type="button"
                            onClick={() => toggleWhy(whyKey)}
                            className="inline-flex items-center gap-1 text-[11px] font-mono text-accent hover:underline font-semibold"
                          >
                            <span>Why this score?</span>
                            <ChevronDown
                              className={`w-3.5 h-3.5 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                            />
                          </button>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="text-[11px] font-sans text-foreground/80 p-2 rounded bg-card border border-border/70 leading-normal"
                            >
                              {c.scoringNote}
                            </motion.div>
                          )}
                        </div>
                      )}

                      {/* Clinical Risk */}
                      <div className="space-y-1.5">
                        <div className="text-[10px] font-mono uppercase text-muted-foreground font-bold tracking-wider">
                          Clinical risk (my assessment)
                        </div>
                        <div className="p-3.5 rounded-xl bg-accent/5 border border-accent/20">
                          <p className="text-sm font-sans text-foreground/90 leading-relaxed">{c.risk}</p>
                        </div>
                      </div>
                    </div>
                  )
                })()}

                <p className="text-xs font-mono text-muted-foreground">
                  Excerpts are trimmed from the audit&apos;s scored responses. Full data is in the repository.
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://github.com/AngelaEmileJose/health-llm-audit/blob/main/results/AUDIT_REPORT.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border text-foreground hover:bg-border/60 font-mono text-xs font-medium transition"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-accent" />
                    <span>Read the full audit report</span>
                  </a>
                  <a
                    href="https://github.com/AngelaEmileJose/health-llm-audit/blob/main/results/chart_by_variant.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border text-foreground hover:bg-border/60 font-mono text-xs font-medium transition"
                  >
                    <BarChart2 className="w-3.5 h-3.5 text-accent" />
                    <span>View the chart by variant</span>
                  </a>
                </div>
              </section>

              {/* 7. Limitations */}
              <section id="limitations" className="scroll-mt-28 space-y-4">
                <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                  07 · Limitations
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
                  Reporting Limits Honestly
                </h2>
                <div className="space-y-3 text-sm text-foreground/90 font-sans leading-relaxed">
                  <div className="p-4 rounded-xl bg-card border border-border/80">
                    <strong>A small question set:</strong> With 13 questions, each unsafe percentage stands for just 1–4 questions (8% = 1, 15% = 2, 23% = 3, 31% = 4). Read the pattern as a signal, not a precise measurement.
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-border/80">
                    <strong>Differing environments:</strong> Claude was queried through the web app and the other two models through an API, so settings and system prompts differ.
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-border/80">
                    <strong>Scorer judgement:</strong> Scoring involves judgement even when blinded. I designed the rubric and scored all 156 responses myself (blinded and shuffled), so there is one scorer and no measure of agreement between raters.
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-border/80">
                    <strong>Proxy metric:</strong> It measures response quality, not real-world harm, and results can change as models update.
                  </div>
                </div>
              </section>

              {/* 8. What I would do next */}
              <section id="next-steps" className="scroll-mt-28 space-y-4">
                <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                  08 · What I Would Do Next
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
                  Scaling Towards Community Contestability
                </h2>
                <ul className="space-y-3 font-sans text-sm sm:text-base text-foreground/90">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>Test more models and more South Asian languages.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>Add Malayalam-speaking raters, ideally clinicians, score a subset twice, and report how often raters agree.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>
                      Build a &ldquo;contest this answer&rdquo; interface so users and communities can flag, explain and track failures.
                    </span>
                  </li>
                </ul>
              </section>

              {/* 9. Artifacts */}
              <section id="artifacts" className="scroll-mt-28 pt-8 border-t border-border space-y-4">
                <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                  09 · Open Materials
                </span>
                <h2 className="text-2xl font-serif font-bold text-foreground">
                  Artifacts &amp; Public Codebase
                </h2>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://github.com/AngelaEmileJose/health-llm-audit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white font-mono text-xs font-semibold hover:bg-accent/90 transition shadow-sm"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source Code Repository</span>
                  </a>
                  <a
                    href="https://github.com/AngelaEmileJose/health-llm-audit#readme"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-muted text-foreground hover:bg-border/60 border border-border font-mono text-xs font-semibold transition"
                  >
                    <BookOpen className="w-4 h-4 text-accent" />
                    <span>Audit Report &amp; Write-up</span>
                  </a>
                  <a
                    href="https://github.com/AngelaEmileJose/health-llm-audit/blob/main/RUBRIC.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-muted text-foreground hover:bg-border/60 border border-border font-mono text-xs font-semibold transition"
                  >
                    <FileText className="w-4 h-4 text-accent" />
                    <span>Rubric (RUBRIC.md)</span>
                  </a>
                </div>
              </section>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
