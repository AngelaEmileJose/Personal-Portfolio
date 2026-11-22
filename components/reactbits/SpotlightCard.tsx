"use client"

import React, { useRef, useState, useEffect } from "react"

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  spotlightColor?: string
}

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(217, 83, 47, 0.12)", // subtle saffron accent spotlight
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleMouseEnter = () => setOpacity(1)
  const handleMouseLeave = () => setOpacity(0)

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl border border-border/80 bg-card transition-all duration-300 hover:border-accent/40 hover:shadow-lg ${className}`}
      {...props}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 z-10"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 70%)`,
        }}
        aria-hidden="true"
      />
      <div className="relative z-20 h-full">{children}</div>
    </div>
  )
}
