"use client"

import React, { useEffect, useRef, useState } from "react"

export default function VantaHeroBackground() {
  const vantaRef = useRef<HTMLDivElement>(null)
  const effectRef = useRef<any>(null)
  const [shouldRunVanta, setShouldRunVanta] = useState(false)

  useEffect(() => {
    // 1. Guard against prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    // 2. Guard against mobile or low-concurrency devices
    const isMobile = window.innerWidth < 768
    const isLowPower = typeof navigator !== "undefined" && (navigator.hardwareConcurrency || 4) <= 4

    if (isMobile || isLowPower) {
      // Keep static CSS fallback
      return
    }

    setShouldRunVanta(true)
  }, [])

  useEffect(() => {
    if (!shouldRunVanta || !vantaRef.current) return

    let isMounted = true

    // Dynamically load Three and Vanta NET to avoid SSR and keep bundle lightweight
    Promise.all([
      import("three"),
      // @ts-ignore
      import("vanta/dist/vanta.net.min"),
    ]).then(([THREE, NET]) => {
      if (!isMounted || !vantaRef.current) return

      try {
        const NetEffect = NET.default || NET

        // Saffron coral accent + warm off-white / near-black ink
        effectRef.current = NetEffect({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: false,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xd9532f, // Saffron / Coral accent
          backgroundColor: 0xfbf9f5, // Warm off-white
          points: 7.0, // Low density so text is effortlessly readable
          maxDistance: 22.0,
          spacing: 19.0,
          showDots: true,
        })
      } catch (err) {
        console.warn("Vanta initialization fallback to static atmosphere:", err)
      }
    })

    // 3. Pause/resume when the hero section leaves the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!effectRef.current) return
          if (entry.isIntersecting) {
            // Visible
            if (typeof effectRef.current.resume === "function") {
              effectRef.current.resume()
            }
          } else {
            // Not visible: pause rendering to free GPU
            if (typeof effectRef.current.pause === "function") {
              effectRef.current.pause()
            }
          }
        })
      },
      { threshold: 0.05 }
    )

    if (vantaRef.current) {
      observer.observe(vantaRef.current)
    }

    return () => {
      isMounted = false
      observer.disconnect()
      if (effectRef.current && typeof effectRef.current.destroy === "function") {
        effectRef.current.destroy()
        effectRef.current = null
      }
    }
  }, [shouldRunVanta])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Dynamic Vanta canvas target */}
      <div ref={vantaRef} className="absolute inset-0 w-full h-full opacity-40 dark:opacity-20" />

      {/* Static refined atmospheric fallback mesh & gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-background/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,83,47,0.12),rgba(255,255,255,0))]" />
      <div className="absolute top-1/4 left-10 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
    </div>
  )
}
