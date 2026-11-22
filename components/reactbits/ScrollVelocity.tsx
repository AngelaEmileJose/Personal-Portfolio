"use client"

import React, { useRef } from "react"
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from "framer-motion"

interface ScrollVelocityProps {
  children: React.ReactNode
  baseVelocity?: number
  className?: string
}

export default function ScrollVelocity({
  children,
  baseVelocity = 1.2,
  className = "",
}: ScrollVelocityProps) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], {
    clamp: false,
  })

  const x = useTransform(baseX, (v) => `${(v % 50) - 50}%`)
  const directionFactor = useRef<number>(1)

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()
    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className={`overflow-hidden whitespace-nowrap flex flex-nowrap ${className}`}>
      <motion.div className="flex flex-nowrap shrink-0 gap-6 items-center" style={{ x }}>
        <div className="flex gap-6 items-center shrink-0">{children}</div>
        <div className="flex gap-6 items-center shrink-0" aria-hidden="true">{children}</div>
        <div className="flex gap-6 items-center shrink-0" aria-hidden="true">{children}</div>
        <div className="flex gap-6 items-center shrink-0" aria-hidden="true">{children}</div>
      </motion.div>
    </div>
  )
}
