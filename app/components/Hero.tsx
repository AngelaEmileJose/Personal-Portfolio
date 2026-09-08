"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { ParallaxContainer, ParallaxLayer } from "@/components/animations/MouseParallax"

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#AEEBDC]/50 via-[#f4fcfa] to-[#FCEF91]/40 text-[#163832] pt-16 overflow-hidden">
      <ParallaxContainer className="w-full h-full min-h-screen flex items-center justify-center relative">
        {/* ========================================================================= */}
        {/* ANIMATION 1: ROBBY LEONARDI MOUSE PARALLAX ENGINE                         */}
        {/* Multi-layered depth with varying factors (background -> foreground)       */}
        {/* ========================================================================= */}

        {/* 1. Deep Background Layer (factor 0.02) */}
        <ParallaxLayer factor={0.02} factorY={0.02} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-10 w-80 h-80 rounded-full bg-[#AEEBDC]/40 blur-3xl" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-[#FCEF91]/50 blur-3xl" />
          {/* Geometric grid dots in Baby Turquoise */}
          <div className="absolute inset-0 bg-[radial-gradient(#AEEBDC_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-40" />
        </ParallaxLayer>



        {/* Main Content Container */}
        <div className="container mx-auto px-6 py-12 md:flex md:items-center relative z-10">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FCEF91] text-xs font-bold text-[#163832] mb-4 border border-[#163832]/10 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Portfolio</span>
            </div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-[#163832]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Angela Emile Jose
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl mb-6 text-[#25534A] font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              4th Year Computer Science Student
            </motion.h2>

            <motion.p
              className="text-lg mb-8 leading-relaxed text-[#163832]/85 max-w-xl"
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
                  className="inline-block bg-[#FCEF91] text-[#163832] px-8 py-3.5 rounded-full font-bold hover:bg-[#AEEBDC] transition-all shadow-md hover:shadow-lg border border-[#163832]/15 transform hover:-translate-y-0.5 active:translate-y-0"
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
              <div className="relative p-2.5 rounded-2xl bg-gradient-to-tr from-[#AEEBDC] via-white to-[#FCEF91] shadow-2xl border border-white/60">
                <Image
                  src="/hero-photo.jpg"
                  alt="Angela Emile Jose"
                  width={360}
                  height={480}
                  className="rounded-xl object-cover shadow-inner w-auto max-h-[460px] sm:max-h-[500px]"
                  priority
                />
              </div>
            </ParallaxLayer>


          </motion.div>
        </div>
      </ParallaxContainer>
    </section>
  )
}
