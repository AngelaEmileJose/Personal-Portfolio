"use client"

import React, { useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"

interface BlurTextProps {
  text: string
  className?: string
  delay?: number
  animateBy?: "words" | "letters"
}

export default function BlurText({
  text,
  className = "",
  delay = 0.05,
  animateBy = "words",
}: BlurTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" })
  const elements = animateBy === "words" ? text.split(" ") : text.split("")

  return (
    <p ref={ref} className={`inline-flex flex-wrap gap-x-1.5 ${className}`}>
      {elements.map((element, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, filter: "blur(8px)", y: 12 }}
          animate={isInView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: index * delay,
            ease: [0.16, 1, 0.3, 1], // Expo out
          }}
          className="inline-block"
        >
          {element}
        </motion.span>
      ))}
    </p>
  )
}
