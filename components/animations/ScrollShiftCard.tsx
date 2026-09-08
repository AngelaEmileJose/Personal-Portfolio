"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export interface ScrollShiftCardProps {
  children: React.ReactNode
  direction?: "left" | "right" | "alternate"
  index?: number
  shiftAmount?: number
  className?: string
}

/**
 * ScrollShiftCard
 * Implements Robby Leonardi's Thumbnail Shifting Animation:
 * thumbnailPaperContainerArray[i].style.left = initialX + shiftAmount
 * Cards slide horizontally as the user scrolls, locking into place when centered in view.
 */
export function ScrollShiftCard({
  children,
  direction = "alternate",
  index = 0,
  shiftAmount = 120,
  className = "",
}: ScrollShiftCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  })

  // Alternate entry side if requested
  const isLeft = direction === "alternate" ? index % 2 === 0 : direction === "left"
  const startX = isLeft ? -shiftAmount : shiftAmount

  // Translates from offset towards center (0px), clamping at 0 when reached
  const x = useTransform(scrollYProgress, [0, 1], [startX, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.35, 0.85, 1])
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1])

  return (
    <div ref={ref} className="relative will-change-transform">
      <motion.div
        style={{ x, opacity, scale }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  )
}
