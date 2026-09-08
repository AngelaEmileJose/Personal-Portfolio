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
 * Split panels (windowLeftOpening in Baby Turquoise & windowRightOpening in Baby Yellow)
 * that slide open horizontally in stages as the user scrolls into view.
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
    const step = Math.min(7, Math.max(1, Math.ceil(latest * 7)))
    setCurrentStep(step)
  })

  // Allow manual toggle override if clicked
  const leftX = isOpenManual === true ? "-102%" : isOpenManual === false ? "0%" : scrollLeftShift
  const rightX = isOpenManual === true ? "102%" : isOpenManual === false ? "0%" : scrollRightShift

  return (
    <div ref={containerRef} className={`relative my-12 ${className}`}>
      {/* Step Indicator / Leonardi Shutter Stage Status */}
      <div className="flex items-center justify-between mb-3 px-2 text-xs font-mono text-[#163832]">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCEF91] text-[#163832] font-bold border border-[#163832]/10 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#163832]" />
            {badge}
          </span>
          <span className="hidden sm:inline text-[#25534A] font-semibold">
            Stage {currentStep}/7 {currentStep === 7 ? "· Fully Unlocked" : "· Opening..."}
          </span>
        </div>
        <button
          onClick={() => setIsOpenManual((prev) => (prev === true ? false : true))}
          className="hover:text-black font-bold transition-colors flex items-center gap-1 text-xs underline underline-offset-2 text-[#163832]"
        >
          {isOpenManual === true ? "Close Shutter" : "Toggle Full View"}
        </button>
      </div>

      {/* Main Window Frame Container */}
      <div className="relative rounded-2xl overflow-hidden border-2 border-[#AEEBDC] shadow-2xl bg-[#163832] min-h-[460px]">
        {/* Interior Reveal Content */}
        <motion.div
          style={{ scale: interiorScale }}
          className="relative z-0 w-full h-full p-4 sm:p-8 flex flex-col justify-center"
        >
          {children}
        </motion.div>

        {/* LEFT SHUTTER PANEL (windowLeftOpening: Baby Turquoise) */}
        <motion.div
          style={{ x: leftX, opacity: shutterOpacity }}
          className="absolute inset-y-0 left-0 w-1/2 z-20 pointer-events-none bg-gradient-to-br from-[#AEEBDC] via-[#94e3d1] to-[#78d4c0] border-r-2 border-[#FCEF91] shadow-2xl flex items-center justify-end pr-4 sm:pr-8"
        >
          {/* Architectural Shutter Louvers */}
          <div className="absolute inset-0 opacity-15 bg-[repeating-linear-gradient(0deg,#163832,#163832_2px,transparent_2px,transparent_18px)]" />

          {/* Left Door Handle / Badge */}
          <div className="relative z-10 flex flex-col items-center gap-2 text-[#163832]">
            <ChevronLeft className="w-6 h-6 animate-pulse" />
            <div className="hidden sm:flex flex-col items-center">
              <span className="text-[10px] tracking-widest font-mono uppercase font-bold text-[#163832]">Aperture L</span>
              <div className="w-1.5 h-12 rounded-full bg-[#163832]/25 mt-1" />
            </div>
          </div>
        </motion.div>

        {/* RIGHT SHUTTER PANEL (windowRightOpening: Baby Yellow) */}
        <motion.div
          style={{ x: rightX, opacity: shutterOpacity }}
          className="absolute inset-y-0 right-0 w-1/2 z-20 pointer-events-none bg-gradient-to-bl from-[#FCEF91] via-[#f7e87b] to-[#ebd758] border-l-2 border-[#AEEBDC] shadow-2xl flex items-center justify-start pl-4 sm:pl-8"
        >
          {/* Architectural Shutter Louvers */}
          <div className="absolute inset-0 opacity-15 bg-[repeating-linear-gradient(0deg,#163832,#163832_2px,transparent_2px,transparent_18px)]" />

          {/* Right Door Handle / Badge */}
          <div className="relative z-10 flex flex-col items-center gap-2 text-[#163832]">
            <ChevronRight className="w-6 h-6 animate-pulse" />
            <div className="hidden sm:flex flex-col items-center">
              <span className="text-[10px] tracking-widest font-mono uppercase font-bold text-[#163832]">Aperture R</span>
              <div className="w-1.5 h-12 rounded-full bg-[#163832]/25 mt-1" />
            </div>
          </div>
        </motion.div>

        {/* Center Seal / Lock Indicator when nearly closed */}
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.25], [1, 0]),
            scale: useTransform(scrollYProgress, [0, 0.25], [1, 0.8]),
          }}
          className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none text-[#163832] px-4 text-center"
        >
          <div className="p-4 rounded-full bg-white/95 backdrop-blur-md border-2 border-[#163832]/15 shadow-xl mb-3">
            <Lock className="w-6 h-6 text-[#163832]" />
          </div>
          <h3 className="text-xl sm:text-2xl font-black tracking-tight text-[#163832] mb-1 drop-shadow-sm">{title}</h3>
          <p className="text-xs sm:text-sm font-medium text-[#163832]/90 max-w-sm">{subtitle}</p>
        </motion.div>
      </div>
    </div>
  )
}
