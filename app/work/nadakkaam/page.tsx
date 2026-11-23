"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import {
  ArrowLeft,
  Download,
  Award,
  Users,
  Heart,
  ShieldCheck,
  Calendar,
  Layers,
  CheckCircle2,
  AlertCircle,
} from "lucide-react"

const sections = [
  { id: "overview", label: "Program Overview" },
  { id: "problem", label: "The Problem" },
  { id: "origin", label: "Idea Origin" },
  { id: "design", label: "Program Design" },
  { id: "partners", label: "Partners & Stakeholders" },
  { id: "targets", label: "Targets & Success Metrics" },
  { id: "agency", label: "Community Agency" },
  { id: "limits", label: "Limits & Safeguarding" },
  { id: "status", label: "Status & Next Steps" },
]

export default function NadakkaamPage() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState("overview")

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
              <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-xs font-semibold flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                <span>1st Prize · She Leads Women’s Conclave 2026 (500 participants)</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground font-mono text-xs">
                Community & Health
              </span>
              <span className="text-muted-foreground font-mono text-xs">· Oct 2026</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-foreground tracking-tight leading-tight mb-4">
              Nadakkaam: Peer-Led Walking Circles for Homemaker Mothers
            </h1>

            <p className="text-lg sm:text-xl font-serif italic text-muted-foreground max-w-3xl leading-relaxed">
              A nine-month pilot that gets homemaker mothers walking together.
            </p>

            {/* Strict Funding Status Banner */}
            <div className="mt-6 p-4 rounded-xl bg-accent/5 border border-accent/25 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div className="text-xs font-mono leading-relaxed text-foreground/90">
                <strong className="text-accent font-semibold">Project Status:</strong> In funding stages. The pilot has not yet run, so all figures below represent target evaluation benchmarks, not observed clinical results.
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 pt-4 border-t border-border/40 font-mono text-xs text-muted-foreground">
              <div>
                <span className="font-semibold text-foreground">Role:</span> Project Lead and Designer
              </div>
              <div>·</div>
              <div>
                <span className="font-semibold text-foreground">Cohort:</span> 100 women aged 40–75 across 5 Kochi clusters
              </div>
              <div>·</div>
              <div>
                <span className="font-semibold text-foreground">Framework:</span> Behaviour Change Wheel
              </div>
            </div>
          </div>

          {/* Grid Layout: Mini Sticky TOC (Left) + Content (Right) */}
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

              {/* Proposal PDF Download */}
              <a
                href="/nadakkaam-project-proposal.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-accent text-white hover:bg-accent/90 shadow-sm text-xs font-mono font-semibold transition-all"
              >
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  <span>Project Proposal (PDF)</span>
                </div>
              </a>
            </aside>

            {/* Case Study Content */}
            <article className="lg:col-span-9 space-y-16">
              {/* Image Hero: Preserved Asset */}
              <div id="overview" className="scroll-mt-28 relative rounded-2xl overflow-hidden border border-border/80 shadow-lg h-72 sm:h-96">
                <Image
                  src="/nadakkaam-walking-circles.jpg"
                  alt="Nadakkaam Walking Circles"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="font-mono text-xs uppercase tracking-wider text-accent-soft block mb-1">
                      Kochi, Kerala, India
                    </span>
                    <h3 className="font-serif text-2xl font-bold">
                      Nadakkaam (“നടക്കാം” — Let’s Walk in Malayalam)
                    </h3>
                  </div>
                </div>
              </div>

              {/* 1. The problem, in women's own words */}
              <section id="problem" className="scroll-mt-28 space-y-4">
                <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                  01 · Formative User Research
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
                  The Problem, in Women’s Own Words
                </h2>
                <div className="p-6 rounded-2xl bg-card border border-border/80 space-y-3 font-sans text-foreground/90 leading-relaxed shadow-sm">
                  <p className="text-base sm:text-lg">
                    I ran user research with 30 women aged 40–75 from my family and neighbourhoods in Kerala. Twenty-seven reported no regular activity beyond housework, and 19 were unhappy about being unable to go out with friends.
                  </p>
                  <p className="text-xs font-mono text-muted-foreground pt-2 border-t border-border/40">
                    *This was an informal sample, used to shape the design and not to make claims about the wider population.
                  </p>
                </div>
              </section>

              {/* 2. Where the idea came from */}
              <section id="origin" className="scroll-mt-28 space-y-4">
                <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                  02 · Cultural Translation
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
                  Where the Idea Came From
                </h2>
                <p className="font-sans text-base sm:text-lg text-foreground/90 leading-relaxed">
                  On a trip to South Korea and Japan, I saw older people walking together in neighbourhood parks and using outdoor exercise equipment every day, as an ordinary habit. It made me ask why our mothers do not have the same.
                </p>
                <p className="font-sans text-base sm:text-lg text-foreground/90 leading-relaxed">
                  Nadakkaam adapts that idea to Kerala’s language, climate and social setting rather than copying it.
                </p>
              </section>

              {/* 3. The design */}
              <section id="design" className="scroll-mt-28 space-y-4">
                <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                  03 · Program Architecture
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
                  The Design: Behaviour Change Wheel in Practice
                </h2>
                <p className="font-sans text-base sm:text-lg text-foreground/90 leading-relaxed">
                  Nadakkaam is a nine-month pilot for 100 women aged 40–75 across five Kochi neighbourhood clusters, grounded in the Behaviour Change Wheel.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-5 rounded-xl bg-card border border-border/80 space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center font-mono font-bold text-xs">
                      01
                    </div>
                    <h3 className="font-serif font-bold text-foreground">Walking Circles</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Peer-led walking circles, three to five times a week, paced to the slowest walker.
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-card border border-border/80 space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center font-mono font-bold text-xs">
                      02
                    </div>
                    <h3 className="font-serif font-bold text-foreground">Wellness Circles</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Monthly conversations on stress, sleep and health, with linkages to professional support.
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-card border border-border/80 space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center font-mono font-bold text-xs">
                      03
                    </div>
                    <h3 className="font-serif font-bold text-foreground">Earned Sneakers</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Habit formation built in: a pair of walking sneakers is an earned reward after 21 days of brisk walking with the circle, not a giveaway. Aim: 70% complete 21 days by Month 5.
                    </p>
                  </div>
                </div>
              </section>

              {/* 4. Partners */}
              <section id="partners" className="scroll-mt-28 space-y-4">
                <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                  04 · Coalition & Delivery
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
                  Stakeholders & Community Partners
                </h2>
                <div className="p-5 rounded-xl bg-card border border-border/80 leading-relaxed font-sans text-foreground/90">
                  Delivery is planned with Kudumbashree groups, ward offices, clinics and a clinical psychologist, so that community, clinical and local-government stakeholders are aligned around one programme.
                </div>
              </section>

              {/* 5. Success defined up front */}
              <section id="targets" className="scroll-mt-28 space-y-4">
                <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                  05 · Targets Defined Up Front
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
                  Targets & Non-Causal Evaluation Protocol
                </h2>
                <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-sm">
                  <table className="w-full text-left text-sm font-sans border-collapse">
                    <thead>
                      <tr className="border-b border-border bg-muted/50 font-mono text-xs text-foreground">
                        <th className="p-4 font-semibold">Target Metric</th>
                        <th className="p-4 font-semibold">Target Benchmark Value</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/60 font-mono text-xs">
                      <tr>
                        <td className="p-4 font-sans font-medium text-foreground">Retention</td>
                        <td className="p-4 font-bold text-accent">70%</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-sans font-medium text-foreground">Women gaining 10+ points on WHO-5</td>
                        <td className="p-4 font-bold text-accent">50%</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-sans font-medium text-foreground">Physical activity</td>
                        <td className="p-4 font-bold text-accent">150 min/week</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-sans font-medium text-foreground">Budget</td>
                        <td className="p-4 font-bold text-accent">INR 3,74,000 (about INR 3,740 per woman)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs font-mono text-muted-foreground pt-1">
                  Evaluation uses WHO-5, PHQ-9 and UCLA-3, with ethics and safeguarding protocols in place. Claims are kept non-causal: the pilot is designed to learn what changes, not to prove why.
                </p>
              </section>

              {/* 6. What the community decides */}
              <section id="agency" className="scroll-mt-28 space-y-4">
                <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                  06 · Participatory Governance
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
                  What the Community Decides
                </h2>
                <div className="p-6 rounded-2xl bg-card border border-border/80 space-y-4 text-foreground/90 font-sans leading-relaxed shadow-sm">
                  <p>
                    Nadakkaam lets the women set the pace. Each circle walks at the speed of its slowest walker, with no targets, rankings or competitions, and sessions are timed around household work.
                  </p>
                  <p>
                    A woman can leave at any time without penalty and keeps any sneakers she has earned. The monthly wellness conversations are led by peer walk leaders, women from the participants or neighbourhood, who take the circles over after funding ends, and a mid-point review in Month 5 uses participant feedback to adjust the programme.
                  </p>
                  <div className="p-3.5 rounded-xl bg-muted/50 border border-border/60 text-xs font-mono text-muted-foreground">
                    <strong className="text-foreground">Where the women do not yet decide:</strong> Leaders are chosen by the project team, and routes and conversation topics are set by the team in advance.
                  </div>
                </div>
              </section>

              {/* 7. Limits and safeguarding */}
              <section id="limits" className="scroll-mt-28 space-y-6">
                <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                  07 · Limitations & Ethical Safeguards
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
                  Limits Stated Up Front & Safety Protocols
                </h2>

                {/* Limits */}
                <div className="space-y-3">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    Limits, stated up front:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-sans text-foreground/90">
                    <div className="p-4 rounded-xl bg-card border border-border/80">
                      The preliminary survey was a convenience sample of 30 women from my own network, with no validated tools. It shaped the design but is not population-level evidence.
                    </div>
                    <div className="p-4 rounded-xl bg-card border border-border/80">
                      A small pilot with no control group cannot show that Nadakkaam caused any change. Results would be promising evidence for a larger controlled study.
                    </div>
                    <div className="p-4 rounded-xl bg-card border border-border/80">
                      Data are self-reported, so social desirability may affect them, and five Kochi clusters may not generalise to other regions.
                    </div>
                    <div className="p-4 rounded-xl bg-card border border-border/80">
                      Earning sneakers after 21 days reduces, but does not remove, the risk that women stop once they have them. Habits usually take longer to form, so attendance after the milestone will be tracked and reported honestly.
                    </div>
                  </div>
                  <p className="text-xs font-mono text-accent italic">
                    Nadakkaam is supportive and preventive. It does not replace professional care.
                  </p>
                </div>

                {/* Safeguarding */}
                <div className="space-y-3 pt-4 border-t border-border/60">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Safeguarding Protocols:</span>
                  </h3>
                  <div className="space-y-2.5 text-xs font-sans text-foreground/90">
                    <div className="p-3.5 rounded-xl bg-card border border-border/80">
                      <strong>Ethics & Consent:</strong> Ethics approval before anyone is recruited. Consent is explained aloud in Malayalam and recorded in writing, a woman can leave at any time, and data are stored under participant codes.
                    </div>
                    <div className="p-3.5 rounded-xl bg-card border border-border/80">
                      <strong>Health Clearance & Route Checks:</strong> A short health screening for every woman, with medical clearance where needed. Walks are in groups, in daylight or well-lit areas, on routes checked in advance.
                    </div>
                    <div className="p-3.5 rounded-xl bg-card border border-border/80">
                      <strong>Mental Health Escalation:</strong> Walk leaders are not therapists. A woman who scores above the agreed PHQ-9 threshold, or answers positively to the self-harm item, is contacted by the mental health professional the same day. Referral routes include TeleMANAS (14416).
                    </div>
                    <div className="p-3.5 rounded-xl bg-card border border-border/80">
                      <strong>Crisis & Violence Disclosure:</strong> Women who disclose violence are listened to without judgement and referred to services such as the Women Helpline (181).
                    </div>
                  </div>
                </div>
              </section>

              {/* 8. Status and next steps */}
              <section id="status" className="scroll-mt-28 space-y-4">
                <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                  08 · Roadmap
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
                  Status and Next Steps
                </h2>
                <div className="p-6 rounded-2xl bg-card border border-border/80 space-y-4 text-foreground/90 font-sans leading-relaxed shadow-sm">
                  <p>
                    In funding stages. Once funded, the first two months cover ethics approval, partnerships with Kudumbashree groups, ward offices, a clinic and a mental health professional, and training 10 peer walk leaders; the nine-month pilot then runs across five Kochi clusters.
                  </p>
                  <div className="pt-2">
                    <a
                      href="/nadakkaam-project-proposal.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white font-mono text-xs font-semibold hover:bg-accent/90 transition shadow-sm"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download Full Project Proposal (PDF)</span>
                    </a>
                  </div>
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
