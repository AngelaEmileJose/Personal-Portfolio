"use client"

import React from "react"
import Link from "next/link"
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import { ArrowLeft, BookOpen, Quote, Sparkles, ArrowRight } from "lucide-react"

export default function ResearchStatementPage() {
  return (
    <>
      <Header />

      <main id="main-content" className="pt-28 pb-24 bg-background min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          {/* Back link */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-accent transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to home</span>
            </Link>
          </div>

          {/* Header */}
          <div className="mb-12 border-b border-border/80 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-foreground font-mono text-xs font-semibold mb-4">
              <BookOpen className="w-3.5 h-3.5 text-[#D6427D]" />
              <span>Social Algorithms Group · Research Application</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground tracking-tight leading-tight mb-4">
              Research Statement
            </h1>

            <p className="text-base sm:text-lg font-serif italic text-muted-foreground leading-relaxed">
              Auditing algorithmic systems, evidenced safety, and community contestability in low-resource environments.
            </p>
          </div>

          {/* Statement Body (Verbatim from CONTENT.md section 14) */}
          <article className="space-y-8 font-sans text-base sm:text-lg text-foreground/90 leading-relaxed">
            {/* Opening Thesis */}
            <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border/80 shadow-sm relative overflow-hidden">
              <Quote className="w-12 h-12 text-accent/15 absolute -top-2 -left-2" />
              <p className="relative z-10 font-serif text-xl sm:text-2xl text-foreground font-medium leading-relaxed">
                People rarely see the algorithmic systems that shape their health, safety and opportunities. When those systems fail, the failure tends to be quiet, and the person on the receiving end often blames themselves. My work asks how we can make such failures visible, and how the people affected can question them.
              </p>
            </div>

            {/* Triad of Evidence */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-foreground">
                Three Grounding Investigations
              </h2>
              <p>
                Three projects shaped this question. In my audit of health answers from language models in Malayalam and Manglish, I tested three models on 13 high-risk questions in four language variants and found Manglish the riskiest: two of the three models gave unsafe answers to 31% of questions. In my formal-verification work at KNU, I learned to treat model output as untrusted until independently checked: of 334 LLM-generated specifications, 271 passed, and the rest were caught by validation and not by trust. And in Nadakkaam, I designed a health programme with the women it was meant for, starting from what 30 of them told me they could not do.
              </p>
            </div>

            {/* Core Research Question Callout */}
            <div className="p-6 rounded-2xl bg-accent/5 border-l-4 border-accent border-t border-r border-b border-accent/20">
              <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold block mb-2">
                Core Research Question
              </span>
              <p className="font-serif text-xl sm:text-2xl font-semibold text-foreground italic">
                “The common thread is that safety should be evidenced, not assumed, and that communities should be able to contest what is decided about them. My question is: how can communities in low-resource-language settings audit and contest the AI systems that serve them?”
              </p>
            </div>

            {/* Vision and Future Work */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-foreground">
                Goals & Mutual Alignment
              </h2>
              <p>
                I want to study how algorithmic systems shape access, agency and opportunity, and works with communities to build alternatives. That is the work I want to do. I already have machine learning and evaluation-design skills, experience running small community studies, and the habit of reporting limitations openly. I am looking to learn from a group that combines technical, legal, design and civic perspectives, and to contribute audits and participatory methods grounded in the languages and communities I know best.
              </p>
            </div>

            {/* Direct Project Deep Dives Links */}
            <div className="pt-8 border-t border-border/70">
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold block mb-4">
                Explore Grounding Case Studies
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href="/work/health-llm-audit"
                  className="p-5 rounded-xl bg-card border border-border/80 hover:border-accent/40 shadow-sm transition-all group flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-[11px] text-accent uppercase">Case Study 01</span>
                    <h3 className="font-serif font-bold text-lg text-foreground group-hover:text-accent transition-colors mt-1">
                      Health LLM Audit: Malayalam & Manglish
                    </h3>
                    <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
                      156 blinded evaluations testing health query failure across Malayalam dialects and Manglish.
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-1.5 font-mono text-xs text-accent font-semibold">
                    <span>Read audit protocol</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>

                <Link
                  href="/work/nadakkaam"
                  className="p-5 rounded-xl bg-card border border-border/80 hover:border-accent/40 shadow-sm transition-all group flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-[11px] text-accent uppercase">Case Study 02</span>
                    <h3 className="font-serif font-bold text-lg text-foreground group-hover:text-accent transition-colors mt-1">
                      Nadakkaam Community Health Walking Circles
                    </h3>
                    <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
                      Designed peer-led habit intervention for homemaker mothers in Kochi, India.
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-1.5 font-mono text-xs text-accent font-semibold">
                    <span>Read pilot proposal</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </>
  )
}
