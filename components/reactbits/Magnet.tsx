"use client"

import React, { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"

interface MagnetProps {
  children: React.ReactNode
  className?: string
  strength?: number // Magnet pull distance
}

export default function Magnet({ children, className = "", strength = 28 }: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isReduced, setIsReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setIsReduced(mq.matches)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isReduced || !ref.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    setPosition({ x: middleX * 0.25, y: middleY * 0.25 })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", damping: 15, stiffness: 150, mass: 0.1 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  )
}
