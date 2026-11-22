"use client"

import React from "react"
import Link from "next/link"
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import { ArrowLeft, Clock } from "lucide-react"

export default function ThinkingPage() {
  // Notes shown on the live page — only 01 and 03.
  // Notes 02 and 04 are preserved below in comments for easy restoration.
  const posts = [
    {
      number: "01",
      tag: "Audits & Evaluation Design",
      title: "What I learned scoring 156 model responses myself",
      body: (
        <>
          <p className="font-sans text-sm text-foreground/80 leading-relaxed">
            I designed the rubric, blinded the responses and scored all 156 myself. That is the
            audit&apos;s biggest limitation, and also what taught me the most. Shuffling the
            responses before scoring stopped me from favouring a model or a language variant, but it
            could not stop me from applying my own assumptions about what a &ldquo;safe&rdquo;
            answer looks like. With one scorer there is no way to measure agreement, so every score
            is really one person&apos;s judgement.
          </p>
          <p className="font-sans text-sm text-foreground/80 leading-relaxed mt-3">
            What I would change: add Malayalam-speaking raters, ideally clinicians, score a subset
            twice, and report how often raters agree. Until then, the results tell me where to look.
            They are not a precise measurement.
          </p>
          {/* TODO: add one real case where my rubric was unclear or I changed my mind */}
        </>
      ),
    },
    {
      number: "03",
      tag: "Verification & Evidenced Safety",
      title: "\u201cUntrusted until validated\u201d: what checking LLM-written specifications taught me",
      body: (
        <>
          <p className="font-sans text-sm text-foreground/80 leading-relaxed">
            In the Software and Safety Engineering Lab at KNU, I built a pipeline that asks an LLM
            to write specifications for Stateflow-derived C programs, converts them into assertions,
            and checks them with the CBMC model checker. Each specification passes two gates before
            anyone believes it: a strict format check with up to two automatic repair attempts, and
            then CBMC, which searches for an input that breaks it. Of 334 specifications, 271 (81%)
            passed, across 24 programs, with 9 programs at 100%.
          </p>
          <p className="font-sans text-sm text-foreground/80 leading-relaxed mt-3">
            The failures are the point. A specification can read as sensible and still be wrong
            about the code, and reading it is not enough to tell. An independent checker could.
          </p>
          <p className="font-sans text-sm text-foreground/80 leading-relaxed mt-3">
            Two cautions I try to keep honest. First, a pass is bounded: each program is checked up
            to a fixed loop-unwinding limit (from 10 to 530 depending on the program), so a pass
            means no counterexample was found within that bound, not a proof for every possible run.
            Second, a specification can pass and still be weak, true but not very meaningful.
          </p>
          <p className="font-sans text-sm text-foreground/80 leading-relaxed mt-3">
            The lesson I take from it is simple: do not trust model output, including your own,
            until something independent has checked it.
          </p>
          {/* TODO: add one real failed specification and why it was wrong */}
        </>
      ),
    },
  ]

  /*
   * POSTS REMOVED FROM LIVE PAGE — preserved here for easy restoration.
   *
   * {
   *   number: "02",
   *   tag: "Participatory Design & Community Health",
   *   title: "Thirty women, one clipboard: lessons from a small community survey",
   *   summary:
   *     "Field notes from surveying homemaker mothers aged 45–75 in Kerala. Why convenience samples
   *     must be stated with strict limits, how conversational trust reveals unaddressed isolation,
   *     and the line between shaping a program and claiming population truth.",
   * },
   * {
   *   number: "04",
   *   tag: "Critical Algorithmic Literature",
   *   title: "Reading list note: one paper on algorithmic accountability, and where I disagree",
   *   summary:
   *     "A close critique of contemporary algorithmic accountability literature, interrogating
   *     whether Western procedural fairness metrics hold up when applied to informal community
   *     infrastructures in the Global South.",
   * },
   */

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
              <span>Notes</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground tracking-tight leading-tight mb-4">
              Thinking
            </h1>

            <p className="text-base sm:text-lg font-serif italic text-muted-foreground leading-relaxed">
              Short notes on what I am learning from audits and verification. Written to think, not
              to impress.
            </p>
          </div>

          {/* Notes list */}
          <div className="space-y-6">
            {posts.map((post) => (
              <article
                key={post.number}
                className="p-6 rounded-2xl bg-card border border-border/80 shadow-sm space-y-4 hover:border-accent/40 transition-colors"
              >
                <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                  <span className="text-accent font-bold">NOTE {post.number}</span>
                  <span>·</span>
                  <span>{post.tag}</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-serif font-bold text-foreground leading-snug">
                  {post.title}
                </h2>

                <div className="space-y-0">{post.body}</div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
