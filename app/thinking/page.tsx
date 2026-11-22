"use client"

import React from "react"
import Link from "next/link"
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import { ArrowLeft, Clock, AlertTriangle, FileEdit } from "lucide-react"

export default function ThinkingPage() {
  const posts = [
    {
      number: "01",
      title: "What a blinded audit taught me about my own rubric",
      todo: "TODO: write after reviewing audit notes",
      topic: "Algorithmic Audits & Evaluation Design",
      summary:
        "Reflections on designing, blinding, and scoring 156 clinical responses across Malayalam and Manglish. How rubric ambiguity reveals the evaluator's own assumptions, and why human clinical consensus is harder and more vital than automated benchmarks.",
    },
    {
      number: "02",
      title: "Thirty women, one clipboard: lessons from a small community survey",
      todo: "TODO",
      topic: "Participatory Design & Community Health",
      summary:
        "Field notes from surveying homemaker mothers aged 45–75 in Kerala. Why convenience samples must be stated with strict limits, how conversational trust reveals unaddressed isolation, and the line between shaping a program and claiming population truth.",
    },
    {
      number: "03",
      title: "“Untrusted until validated”: why I do not believe model output, including my own",
      todo: "TODO",
      topic: "Formal Methods & Evidenced Safety",
      summary:
        "Insights from verifying 334 LLM-generated specifications with the CBMC model checker. The cognitive danger of plausible-looking specifications and the imperative of non-trust-based verification loops.",
    },
    {
      number: "04",
      title: "Reading list note: one paper on algorithmic accountability, and where I disagree",
      todo: "TODO: pick a paper you have read closely",
      topic: "Critical Algorithmic Literature",
      summary:
        "A close critique of contemporary algorithmic accountability literature, interrogating whether Western procedural fairness metrics hold up when applied to informal community infrastructures in the Global South.",
    },
  ]

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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-xs font-semibold mb-4">
              <Clock className="w-3.5 h-3.5" />
              <span>Essays & Research Notes</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground tracking-tight leading-tight mb-4">
              Thinking
            </h1>

            <p className="text-base sm:text-lg font-serif italic text-muted-foreground leading-relaxed">
              Working notes on algorithmic accountability, community-centered design, and evidenced safety.
            </p>
          </div>

          {/* Post Stubs List with Styled TODO Badges */}
          <div className="space-y-6">
            {posts.map((post) => (
              <article
                key={post.number}
                className="p-6 rounded-2xl bg-card border border-border/80 shadow-sm space-y-4 hover:border-accent/40 transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                    <span className="text-accent font-bold">NOTE {post.number}</span>
                    <span>·</span>
                    <span>{post.topic}</span>
                  </div>

                  {/* Clearly styled visible TODO badge */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-400 font-mono text-xs font-semibold">
                    <FileEdit className="w-3.5 h-3.5" />
                    <span>[{post.todo}]</span>
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-serif font-bold text-foreground leading-snug">
                  {post.title}
                </h2>

                <p className="font-sans text-sm text-foreground/80 leading-relaxed">
                  {post.summary}
                </p>

                <div className="pt-2 flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <span className="italic">Draft in preparation</span>
                  <span>Full essay publishing soon</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
