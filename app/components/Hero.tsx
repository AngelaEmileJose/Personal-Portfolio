"use client"

import React, { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, FileCheck, Award, GraduationCap, CheckCircle2 } from "lucide-react"
import VantaHeroBackground from "@/components/animations/VantaHeroBackground"
import Magnet from "@/components/reactbits/Magnet"
import ScrollVelocity from "@/components/reactbits/ScrollVelocity"
import { gsap } from "gsap"
import { SplitText } from "gsap/SplitText"

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText)
}

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const sublineRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Check reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion || !headlineRef.current) return

    let split: any = null
    const ctx = gsap.context(() => {
      try {
        split = new SplitText(headlineRef.current, { type: "words,lines", linesClass: "overflow-hidden" })
        
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
        
        // SplitText reveal (lines/words rising from overflow mask)
        tl.from(split.words, {
          y: 45,
          opacity: 0,
          duration: 0.85,
          stagger: 0.035,
        })
        .from(
          sublineRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          ctaRef.current,
          {
            opacity: 0,
            y: 15,
            duration: 0.45,
          },
          "-=0.3"
        )
      } catch (e) {
        // Fallback gracefully if SplitText throws
        gsap.to(headlineRef.current, { opacity: 1, duration: 0.5 })
      }
    })

    return () => {
      ctx.revert()
      if (split && typeof split.revert === "function") {
        split.revert()
      }
    }
  }, [])

  const proofChips = [
    { text: "1st Prize, She Leads Women’s Conclave 2026 (500 participants)", icon: Award },
    { text: "1st place among 90 teams, KICS Conference", icon: CheckCircle2 },
    { text: "CGPA 9.55/10, First Class with Distinction", icon: GraduationCap },
    { text: "IELTS Band 8", icon: FileCheck },
  ]

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-between pt-24 pb-10 overflow-hidden bg-background border-b border-border/60"
    >
      {/* Vanta.js interactive subtle background atmosphere */}
      <VantaHeroBackground />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Typographic Column */}
          <div className="lg:col-span-8 space-y-6 max-w-3xl">
            {/* Small mono eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF78AC]/15 border border-[#FF78AC]/30 text-foreground font-mono text-xs font-semibold tracking-wide">
              <span>Computer Science (AI/ML) · Christ University × Kyungpook National University</span>
            </div>

            {/* Main Headline */}
            <h1
              ref={headlineRef}
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-foreground tracking-tight leading-[1.12]"
            >
              I like making technology that people can trust.
            </h1>

            {/* Sub-headline */}
            <p
              ref={sublineRef}
              className="text-lg sm:text-xl text-foreground/80 leading-relaxed font-sans max-w-2xl"
            >
              Across hearing aids, fire safety, health chatbots and community programmes, I work on one question: does this actually help the person using it?
            </p>

            {/* Hero CTAs with React Bits Magnet */}
            <div ref={ctaRef} className="pt-2 flex flex-wrap gap-4 items-center">
              <Magnet strength={22}>
                <Link
                  href="/work/health-llm-audit"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-accent text-foreground font-semibold rounded-full font-sans hover:bg-[#F2639B] transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent border border-[#D6427D]/30"
                >
                  <span>Read the audit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Magnet>

              <Magnet strength={22}>
                <Link
                  href="/research-statement"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#A8D5E3]/35 text-foreground hover:bg-[#A8D5E3]/60 border border-[#A8D5E3] rounded-full font-sans font-semibold transition-all shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-accent/40"
                >
                  <span>Research statement</span>
                  <ArrowRight className="w-4 h-4 text-foreground/70" />
                </Link>
              </Magnet>
            </div>
          </div>

          {/* Profile Photo Column: Preserved & Tastefully Styled */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
              className="relative group"
            >
              {/* Refined editorial frame */}
              <div className="relative p-2 rounded-2xl bg-card border border-border/80 shadow-2xl transition-transform duration-500 group-hover:-translate-y-1">
                <div className="relative overflow-hidden rounded-xl w-[260px] sm:w-[300px] h-[360px] sm:h-[400px]">
                  <Image
                    src="/hero-photo.jpg"
                    alt="Angela Emile Jose"
                    fill
                    sizes="(max-width: 768px) 260px, 300px"
                    className="object-cover transition-all duration-700 filter group-hover:contrast-105"
                    priority
                  />
                  {/* Subtle duotone gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>
              {/* Mono caption badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-background/95 backdrop-blur-md px-3 py-1 rounded-full border border-border shadow-md font-mono text-[11px] text-muted-foreground">
                Kochi · Daegu
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Proof Chips Strip with Tasteful React Bits ScrollVelocity / Marquee */}
      <div className="mt-12 pt-6 border-t border-border/40 w-full relative z-10">
        <div className="container mx-auto px-4 mb-2">
          <span className="text-[11px] uppercase tracking-wider font-mono text-muted-foreground font-semibold">
            Recognitions & Honors
          </span>
        </div>
        <ScrollVelocity baseVelocity={0.6} className="py-2">
          {proofChips.map((chip, idx) => {
            const Icon = chip.icon
            return (
              <div
                key={idx}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card/80 backdrop-blur-sm border border-border/70 text-xs font-mono text-foreground/90 shadow-sm hover:border-accent/50 transition-colors"
              >
                <Icon className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                <span>{chip.text}</span>
              </div>
            )
          })}
        </ScrollVelocity>
      </div>
    </section>
  )
}
