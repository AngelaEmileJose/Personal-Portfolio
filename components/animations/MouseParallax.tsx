"use client"

import React, { createContext, useContext, useRef, useEffect } from "react"
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion"

interface ParallaxContextType {
  springX: MotionValue<number>
  springY: MotionValue<number>
}

const ParallaxContext = createContext<ParallaxContextType | null>(null)

export interface ParallaxContainerProps {
  children: React.ReactNode
  className?: string
  stiffness?: number
  damping?: number
}

/**
 * ParallaxContainer
 * Implements Robby Leonardi's core mouse parallax engine:
 * objectArray[i][3] * (0.5 * windowWidth - tempX)
 * Tracks cursor distance from the center and applies smoothed spring values.
 */
export function ParallaxContainer({
  children,
  className = "",
  stiffness = 140,
  damping = 18,
}: ParallaxContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const springX = useSpring(rawX, { stiffness, damping })
  const springY = useSpring(rawY, { stiffness, damping })

  useEffect(() => {
    if (typeof window === "undefined") return

    const handleMouseMove = (e: MouseEvent) => {
      let diffX = 0
      let diffY = 0

      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        diffX = centerX - e.clientX
        diffY = centerY - e.clientY
      } else {
        diffX = window.innerWidth / 2 - e.clientX
        diffY = window.innerHeight / 2 - e.clientY
      }

      rawX.set(diffX)
      rawY.set(diffY)
    }

    const handleMouseLeave = () => {
      rawX.set(0)
      rawY.set(0)
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [rawX, rawY])

  return (
    <ParallaxContext.Provider value={{ springX, springY }}>
      <div ref={containerRef} className={className}>
        {children}
      </div>
    </ParallaxContext.Provider>
  )
}

export interface ParallaxLayerProps {
  factor?: number
  factorY?: number
  rotateFactor?: number
  className?: string
  children: React.ReactNode
}

/**
 * ParallaxLayer
 * Represents an individual depth object (like Robby Leonardi's birdFactor, bush1Factor, snake, squid).
 * Higher factor (0.08 - 0.15) = foreground, moving significantly with the cursor.
 * Lower factor (0.01 - 0.04) = distant background, subtle shift.
 */
export function ParallaxLayer({
  factor = 0.05,
  factorY,
  rotateFactor = 0,
  className = "",
  children,
}: ParallaxLayerProps) {
  const context = useContext(ParallaxContext)
  const fy = factorY !== undefined ? factorY : factor

  const x = context ? useTransform(context.springX, (val) => val * factor) : 0
  const y = context ? useTransform(context.springY, (val) => val * fy) : 0
  const rotate = context && rotateFactor ? useTransform(context.springX, (val) => val * rotateFactor) : 0

  return (
    <motion.div style={{ x, y, rotate }} className={className}>
      {children}
    </motion.div>
  )
}
