"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Award, Sparkles, Code2, Brain } from "lucide-react"
import { ParallaxContainer, ParallaxLayer } from "@/components/animations/MouseParallax"

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-primary text-quaternary pt-16 overflow-hidden">
      <ParallaxContainer className="w-full h-full min-h-screen flex items-center justify-center relative">
        {/* ========================================================================= */}
        {/* ANIMATION 1: ROBBY LEONARDI MOUSE PARALLAX ENGINE                         */}
        {/* Multi-layered depth with varying factors (background -> foreground)       */}
        {/* ========================================================================= */}

        {/* 1. Deep Background Layer (factor 0.02) */}
        <ParallaxLayer factor={0.02} factorY={0.02} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-tertiary/10 blur-3xl" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" />
          {/* Subtle geometric grid dots */}
          <div className="absolute inset-0 bg-[radial-gradient(#91AC8F_1px,transparent_1px)] [background-size:32px_32px] opacity-15" />
        </ParallaxLayer>

        {/* 2. Floating Ambient Elements (factor 0.04 - 0.06) */}
        <ParallaxLayer factor={0.04} factorY={0.03} className="absolute top-28 left-8 md:left-24 pointer-events-none hidden sm:block">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 backdrop-blur-md border border-quaternary/20 text-xs text-quaternary shadow-lg">
            <Brain className="w-3.5 h-3.5 text-quaternary" />
            <span>AI & Deep Learning</span>
          </div>
        </ParallaxLayer>

        <ParallaxLayer factor={-0.05} factorY={-0.04} className="absolute bottom-28 left-12 md:left-32 pointer-events-none hidden md:block">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 backdrop-blur-md border border-quaternary/20 text-xs text-quaternary shadow-lg">
            <Code2 className="w-3.5 h-3.5 text-quaternary" />
            <span>Accessible Systems</span>
          </div>
        </ParallaxLayer>

        {/* Main Content Container */}
        <div className="container mx-auto px-6 py-12 md:flex md:items-center relative z-10">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/20 text-xs font-semibold text-quaternary mb-4 border border-quaternary/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Portfolio</span>
            </div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Angela Emile Jose
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl mb-6 text-quaternary/90 font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              4th Year Computer Science Student
            </motion.h2>

            <motion.p
              className="text-lg mb-8 leading-relaxed text-quaternary/80 max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Bridging technology and human connection through research, innovation, and a passion for making complex
              systems accessible.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            >
              <ParallaxLayer factor={0.07} factorY={0.06} className="inline-block">
                <a
                  href="#projects"
                  className="inline-block bg-tertiary text-primary px-8 py-3.5 rounded-full font-semibold hover:bg-quaternary transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  Explore My Work
                </a>
              </ParallaxLayer>
            </motion.div>
          </motion.div>

          {/* Foreground Hero Image with Mouse Parallax Depth */}
          <motion.div
            className="md:w-1/2 mt-12 md:mt-0 relative flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            {/* Subject Image Layer (factor 0.05) */}
            <ParallaxLayer factor={0.05} factorY={0.05} rotateFactor={0.005} className="relative z-10">
              <div className="relative p-2 rounded-2xl bg-gradient-to-tr from-secondary/80 to-tertiary/40 backdrop-blur-md border border-quaternary/20 shadow-2xl">
                <Image
                  src="/hero-photo.jpg"
                  alt="Angela Emile Jose"
                  width={380}
                  height={380}
                  className="rounded-xl object-cover"
                  priority
                />
              </div>
            </ParallaxLayer>

            {/* Foreground Floating Floating Badge (factor 0.11 - highest parallax response) */}
            <ParallaxLayer
              factor={0.11}
              factorY={0.09}
              className="absolute -bottom-6 -left-4 sm:bottom-4 sm:-left-8 z-20"
            >
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/95 backdrop-blur-md text-primary shadow-2xl border border-primary/10">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-secondary">Award Winner</div>
                  <div className="text-xs font-bold text-primary">Grand Prize (대상) · KICS 2025</div>
                </div>
              </div>
            </ParallaxLayer>
          </motion.div>
        </div>
      </ParallaxContainer>
    </section>
  )
}
