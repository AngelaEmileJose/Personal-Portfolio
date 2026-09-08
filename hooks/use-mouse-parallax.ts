"use client"

import { useEffect } from "react"
import { useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion"

interface MouseParallaxOptions {
  stiffness?: number
  damping?: number
}

export function useMouseParallax(options: MouseParallaxOptions = {}) {
  const { stiffness = 120, damping = 18 } = options

  // Raw distance from center: (center - mouse)
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  // Silky smooth spring interpolation
  const springX = useSpring(rawX, { stiffness, damping })
  const springY = useSpring(rawY, { stiffness, damping })

  useEffect(() => {
    if (typeof window === "undefined") return

    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2

      // Recreating Robby Leonardi's core equation:
      // (0.5 * windowWidth - tempX)
      const diffX = centerX - e.clientX
      const diffY = centerY - e.clientY

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

  return {
    springX,
    springY,
    rawX,
    rawY,
  }
}
