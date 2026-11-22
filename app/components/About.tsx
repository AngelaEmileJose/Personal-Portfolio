"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, BookOpen, GraduationCap, Globe } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-24 bg-background border-b border-border/70 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
            Background & Mission
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground tracking-tight mt-1">
            About me
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Photo Column: Preserved Asset with refined styling */}
          <div className="md:col-span-4 flex flex-col items-center sm:items-start">
            <div className="relative p-2 rounded-2xl bg-card border border-border/80 shadow-xl overflow-hidden group">
              <div className="relative w-64 sm:w-72 h-80 rounded-xl overflow-hidden">
                <Image
                  src="/about-photo.jpg"
                  alt="Angela Emile Jose"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 256px, 288px"
                />
              </div>
            </div>

            {/* Side Links */}
            <div className="mt-6 w-full space-y-2">
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground block font-semibold">
                Writing & Life
              </span>
              <a
                href="https://cookwithemile.blogspot.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-card border border-border text-xs font-mono text-foreground hover:border-accent transition-colors"
              >
                <span>Cook with Emile blog</span>
                <ExternalLink className="w-3.5 h-3.5 text-accent" />
              </a>
              <a
                href="https://m.blog.naver.com/angela_blogs?tab=1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-card border border-border text-xs font-mono text-foreground hover:border-accent transition-colors"
              >
                <span>Naver blog (life in Daegu)</span>
                <ExternalLink className="w-3.5 h-3.5 text-accent" />
              </a>
            </div>
          </div>

          {/* Copy Column: Verbatim from CONTENT.md Section 13 */}
          <div className="md:col-span-8 space-y-5 font-sans text-base sm:text-lg text-foreground/90 leading-relaxed">
            <p>
              I am a Computer Science and Engineering (AI/ML) graduate from Christ University, Bangalore (CGPA 9.55/10, First Class with Distinction), and a B.Eng. in Computer Science graduate from Kyungpook National University in South Korea, through a 2+2 double degree for which I was one of five engineering students selected.
            </p>
            <p>
              Moving between Kerala, Bangalore and Daegu taught me that technology works like language: it only helps when it speaks to people in the way they actually live. That is why I am drawn to the places where AI quietly fails people: a health answer in the wrong register, a detector that cannot tell a candle from a fire, a programme designed for women but never with them.
            </p>
            <p>
              My work follows one habit: ask how we would know a system is wrong, then build the evidence. I audit language models, verify what they produce, and design with the communities affected. I also like making things people can taste and share, which is why I co-founded a small food venture with my mother and still write about food and life in Korea.
            </p>
            <div className="p-4 rounded-xl bg-card border border-border/80 font-mono text-xs text-muted-foreground">
              <strong className="text-foreground">Languages:</strong> I speak English (IELTS Band 8) and Malayalam (native).
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
