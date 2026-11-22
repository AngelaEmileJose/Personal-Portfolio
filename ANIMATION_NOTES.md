# Animation & Motion Architecture Notes

This portfolio upgrade integrates a purposeful, research-grounded motion design stack that embodies the theme: **"Make the invisible visible"**.

Animations are strictly restrained, purposeful, and calibrated for academic, research, and civic tech audiences. No gimmicks, no bouncing cursors, and zero performance regression.

---

## 1. Stack & Dependencies

| Tool / Component | Version / Source | License | Where Used | Why Selected |
| :--- | :--- | :--- | :--- | :--- |
| **Lenis** | `^1.3.27` | MIT | Site-wide root layout | Silky, cinematic momentum scrolling that unifies anchor links, respects reduced motion, and avoids trackpad stutter. |
| **GSAP & ScrollTrigger** | `^3.15.1` | Standard GreenSock License | Hero text, section reveals, case-study TOC & table sweep | Industry-standard timeline sequencing with strict context cleanup and unmount disposal. |
| **Three.js** | `0.134.0` (Pinned) | MIT | Vanta.js background host | Pinned to the official supported version for Vanta.js geometry and WebGL rendering. |
| **Vanta.js (NET)** | `^0.5.24` | MIT | Hero section background atmosphere (single instance) | Symbolizes the faint "network of hidden algorithmic connections". Configured in saffron-coral accent and warm off-white at low density. Pauses off-screen; disabled on mobile (<768px), low-power (<=4 cores), and reduced motion. |
| **React Bits: Magnet** | `reactbits.dev` (TS + Tailwind) | MIT | Hero CTAs ("Read the audit", "Research statement") | Subtle magnetic pull on cursor approach, signaling interactive intent without sensory clutter. |
| **React Bits: SpotlightCard** | `reactbits.dev` (TS + Tailwind) | MIT | Project cards & At-a-glance cards | Soft radial saffron accent highlight tracing mouse coordinate, emphasizing card boundaries. |
| **React Bits: CountUp** | `reactbits.dev` (TS + Tailwind) | MIT | "At a glance" metrics strip | Cubic ease-out counter for the 5 real numbers (156, 30, 271/334, 1,600, 90). |
| **React Bits: BlurText** | `reactbits.dev` (TS + Tailwind) | MIT | Sub-headlines & section intros | Refined blur-to-sharp typographic transition that reveals meaning as the user reads. |
| **React Bits: ScrollVelocity** | `reactbits.dev` (TS + Tailwind) | MIT | Proof chips / recognition strip | Slow, dignified horizontal drift that gives equal visual weight to awards, distinction, and conference honors. |

---

## 2. Accessibility & Reduced Motion Protocol
1. **`prefers-reduced-motion` Enforcement**:
   - Lenis instance is aborted; native instant scroll is used.
   - Vanta.js WebGL canvas is disabled; a pure CSS static mesh/gradient is rendered.
   - GSAP/Framer animations jump to finished state (`opacity: 1`, `transform: none`).
2. **GPU Optimization & Lighthouse Safeguards**:
   - Vanta.js canvas is observed with an `IntersectionObserver`. When scrolled out of the viewport, rendering is paused immediately to eliminate background GPU drain.
   - Next.js dynamic client loading ensures Three.js and Vanta never block first paint or Largest Contentful Paint (LCP).
   - Touch devices and mobile screens (<768px) bypass WebGL calculations entirely.
