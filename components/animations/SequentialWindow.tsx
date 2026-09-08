"use client"

import React, { useRef, useState } from "react"
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
import { Eye, Lock, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"

export interface SequentialWindowProps {
  children: React.ReactNode
  title?: string
  subtitle?: string
  badge?: string
  className?: string
  stepped?: boolean
}

/**
 * SequentialWindow
 * Implements Robby Leonardi's Sequential Window Opening Animation:
 * Split panels (windowLeftOpening & windowRightOpening) that slide open horizontally
 * in stages as the user scrolls into view, dramatically unveiling the featured showcase underneath.
 */
export function SequentialWindow({
  children,
  title = "Spotlight Showcase",
  subtitle = "Scroll down to open the aperture",
  badge = "Featured Innovation",
  className = "",
  stepped = false,
}: SequentialWindowProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isOpenManual, setIsOpenManual] = useState<boolean | null>(null)
  const [currentStep, setCurrentStep] = useState(1)

  // Track scroll through this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  })

  // Stepped or smooth transform
  // Scroll stages: 0% (closed), 0.2, 0.35, 0.5, 0.65, 0.8, 1.0 (fully open)
  const scrollLeftShift = useTransform(
    scrollYProgress,
    [0, 0.2, 0.35, 0.5, 0.65, 0.8, 1],
    ["0%", "0%", "-20%", "-40%", "-65%", "-85%", "-102%"]
  )

  const scrollRightShift = useTransform(
    scrollYProgress,
    [0, 0.2, 0.35, 0.5, 0.65, 0.8, 1],
    ["0%", "0%", "20%", "40%", "65%", "85%", "102%"]
  )

  const shutterOpacity = useTransform(scrollYProgress, [0.75, 0.95], [1, 0.15])
  const interiorScale = useTransform(scrollYProgress, [0.2, 0.9], [0.95, 1])

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Calculate 1..7 slide step corresponding to Leonardi's tutorial
    const step = Math.min(7, Math.max(1, Math.ceil(latest * 7)))
    setCurrentStep(step)
  })

  // Allow manual toggle override if clicked
  const leftX = isOpenManual === true ? "-102%" : isOpenManual === false ? "0%" : scrollLeftShift
  const rightX = isOpenManual === true ? "102%" : isOpenManual === false ? "0%" : scrollRightShift

  return (
    <div ref={containerRef} className={`relative my-12 ${className}`}>
      {/* Step Indicator / Leonardi Shutter Stage Status */}
      <div className="flex items-center justify-between mb-3 px-2 text-xs font-mono text-secondary">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-tertiary/20 text-primary font-semibold">
            <Sparkles className="w-3 h-3" />
            {badge}
          </span>
          <span className="hidden sm:inline text-gray-500">
            Stage {currentStep}/7 {currentStep === 7 ? "· Fully Unlocked" : "· Opening..."}
          </span>
        </div>
        <button
          onClick={() => setIsOpenManual((prev) => (prev === true ? false : true))}
          className="hover:text-primary transition-colors flex items-center gap-1 text-[11px] underline underline-offset-2"
        >
          {isOpenManual === true ? "Close Shutter" : "Toggle Full View"}
        </button>
      </div>

      {/* Main Window Frame Container */}
      <div className="relative rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl bg-slate-900 min-h-[460px]">
        {/* Interior Reveal Content */}
        <motion.div
          style={{ scale: interiorScale }}
          className="relative z-0 w-full h-full p-4 sm:p-8 flex flex-col justify-center"
        >
          {children}
        </motion.div>

        {/* LEFT SHUTTER PANEL (windowLeftOpening) */}
        <motion.div
          style={{ x: leftX, opacity: shutterOpacity }}
          className="absolute inset-y-0 left-0 w-1/2 z-20 pointer-events-none bg-gradient-to-br from-[#4B5945] via-[#55664f] to-[#3a4535] border-r border-white/20 shadow-2xl flex items-center justify-end pr-4 sm:pr-8"
        >
          {/* Architectural Shutter Louvers / Lines */}
          <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(0deg,#fff,#fff_2px,transparent_2px,transparent_18px)]" />

          {/* Left Door Handle / Badge */}
          <div className="relative z-10 flex flex-col items-center gap-2 text-quaternary/90">
            <ChevronLeft className="w-6 h-6 animate-pulse" />
            <div className="hidden sm:flex flex-col items-center">
              <span className="text-[10px] tracking-widest font-mono uppercase">Panel L</span>
              <div className="w-1 h-12 rounded-full bg-quaternary/30 mt-1" />
            </div>
          </div>
        </motion.div>

        {/* RIGHT SHUTTER PANEL (windowRightOpening) */}
        <motion.div
          style={{ x: rightX, opacity: shutterOpacity }}
          className="absolute inset-y-0 right-0 w-1/2 z-20 pointer-events-none bg-gradient-to-bl from-[#4B5945] via-[#55664f] to-[#3a4535] border-l border-white/20 shadow-2xl flex items-center justify-start pl-4 sm:pl-8"
        >
          {/* Architectural Shutter Louvers / Lines */}
          <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(0deg,#fff,#fff_2px,transparent_2px,transparent_18px)]" />

          {/* Right Door Handle / Badge */}
          <div className="relative z-10 flex flex-col items-center gap-2 text-quaternary/90">
            <ChevronRight className="w-6 h-6 animate-pulse" />
            <div className="hidden sm:flex flex-col items-center">
              <span className="text-[10px] tracking-widest font-mono uppercase">Panel R</span>
              <div className="w-1 h-12 rounded-full bg-quaternary/30 mt-1" />
            </div>
          </div>
        </motion.div>

        {/* Center Seal / Lock Indicator when nearly closed */}
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.25], [1, 0]),
            scale: useTransform(scrollYProgress, [0, 0.25], [1, 0.8]),
          }}
          className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none text-white px-4 text-center"
        >
          <div className="p-4 rounded-full bg-black/40 backdrop-blur-md border border-white/20 shadow-lg mb-3">
            <Lock className="w-6 h-6 text-quaternary" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-1">{title}</h3>
          <p className="text-xs sm:text-sm text-quaternary/80 max-w-sm">{subtitle}</p>
        </motion.div>
      </div>
    </div>
  )
}
