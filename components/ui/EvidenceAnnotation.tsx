"use client"

import React, { useState, useRef, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Info } from "lucide-react"

interface EvidenceAnnotationProps {
  children: React.ReactNode
  claim?: string
  method: string
  n?: string
  limitation: string
  className?: string
}

export default function EvidenceAnnotation({
  children,
  claim,
  method,
  n,
  limitation,
  className = "",
}: EvidenceAnnotationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleKeyDown)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen])

  return (
    <span
      ref={containerRef}
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        className="evidence-underline inline font-medium text-foreground hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent/40 rounded transition-colors text-left"
        aria-label={`Evidence notes for: ${claim || children?.toString()}`}
        aria-expanded={isOpen}
      >
        {children}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.96 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2.5 z-50 w-72 sm:w-84 p-3.5 bg-card/95 backdrop-blur-md rounded-xl shadow-2xl border border-accent/30 text-xs font-mono text-foreground text-left pointer-events-auto"
            role="tooltip"
          >
            <div className="flex items-center gap-1.5 text-accent font-semibold mb-1.5 pb-1 border-b border-border/60">
              <Info className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="uppercase tracking-wider text-[10px]">Evidence Note</span>
            </div>
            {claim && (
              <div className="mb-1 text-foreground font-semibold font-sans text-xs">
                {claim}
              </div>
            )}
            <div className="space-y-1 text-muted-foreground leading-relaxed">
              <div>
                <span className="text-foreground/90 font-medium">Method:</span> {method}
              </div>
              {n && (
                <div>
                  <span className="text-foreground/90 font-medium">Sample size (n):</span> {n}
                </div>
              )}
              <div className="pt-1 text-[11px] text-accent/90 border-t border-border/40 mt-1">
                <span className="font-medium text-foreground">Limitation:</span> {limitation}
              </div>
            </div>
            {/* Popover arrow */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-6 border-x-transparent border-t-6 border-t-card/95" />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  )
}
