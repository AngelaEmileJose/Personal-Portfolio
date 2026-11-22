"use client"

import React, { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface CountUpProps {
  to: number
  from?: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}

export default function CountUp({
  to,
  from = 0,
  duration = 1.8,
  prefix = "",
  suffix = "",
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" })
  const [count, setCount] = useState(from)

  useEffect(() => {
    if (!isInView) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      setCount(to)
      return
    }

    let startTime: number | null = null
    let animationFrameId: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(from + (to - from) * easeProgress)
      setCount(current)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step)
      } else {
        setCount(to)
      }
    }

    animationFrameId = requestAnimationFrame(step)

    return () => cancelAnimationFrame(animationFrameId)
  }, [isInView, from, to, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}
