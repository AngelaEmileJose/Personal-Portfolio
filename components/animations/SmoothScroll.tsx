"use client"

import React, { createContext, useContext, useEffect, useRef, useState } from "react"
import Lenis from "lenis"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface LenisContextType {
  lenis: Lenis | null
  scrollTo: (target: string | HTMLElement | number, options?: Record<string, any>) => void
}

const LenisContext = createContext<LenisContextType>({
  lenis: null,
  scrollTo: () => {},
})

export const useLenis = () => useContext(LenisContext)

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null)
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      return
    }

    // Touch device detection to preserve native kinetic scrolling if needed
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: isTouch ? 1.5 : 2,
      wheelMultiplier: 0.9,
      infinite: false,
    })

    lenisRef.current = lenis
    setLenisInstance(lenis)

    // Synchronize Lenis scroll position with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update)

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(tickerCallback)
    gsap.ticker.lagSmoothing(0)

    // Global anchor interceptor for seamless smooth scrolling via lenis.scrollTo
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a")
      if (!target) return

      const href = target.getAttribute("href")
      if (href && href.startsWith("#") && href.length > 1) {
        const el = document.querySelector(href)
        if (el) {
          e.preventDefault()
          lenis.scrollTo(el as HTMLElement, { offset: -70 })
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)

    return () => {
      document.removeEventListener("click", handleAnchorClick)
      gsap.ticker.remove(tickerCallback)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  const scrollTo = (target: string | HTMLElement | number, options?: Record<string, any>) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, options)
    } else if (typeof target === "string" && target.startsWith("#")) {
      const el = document.querySelector(target)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <LenisContext.Provider value={{ lenis: lenisInstance, scrollTo }}>
      {children}
    </LenisContext.Provider>
  )
}
