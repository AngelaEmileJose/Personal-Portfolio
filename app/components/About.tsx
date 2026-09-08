"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#AEEBDC]/25 text-[#163832]">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold mb-12 text-center text-[#163832] tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <div className="md:flex md:items-center gap-10">
          <motion.div
            className="md:w-1/3 mb-8 md:mb-0 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-[#FCEF91] via-white to-[#AEEBDC] shadow-2xl border border-white/60">
              <Image
                src="/about-photo.jpg"
                alt="Angela Emile Jose"
                width={380}
                height={380}
                className="rounded-xl object-cover shadow-inner"
              />
            </div>
          </motion.div>
          <motion.div
            className="md:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 font-serif italic text-lg leading-relaxed text-[#163832]/90">
              I am Angela Emile Jose, a Computer Science graduate bridging formal engineering with human-centered design.
              Through a 2+2 Double Degree program, I’ve grounded my foundation at Christ University, India, and elevated
              my senior research at Kyungpook National University, South Korea (graduating August 2026).
            </p>
            <p className="mb-4 font-serif italic text-lg leading-relaxed text-[#163832]/90">
              Moving across borders has taught me that technology, much like language, is fundamentally a medium for
              connection. Whether engineering AI pipelines across software verification, computational biology, medical
              imaging, and industrial vision, or helping international peers articulate their ideas at the International
              Writing Center, my mission remains constant: to democratize the complex and design systems that promote
              societal equity.
            </p>
            <p className="mb-4 font-serif italic text-lg leading-relaxed text-[#163832]/90">
              While my discipline is rooted in code, my creative impulse lives at the intersection of tangible media and
              sensory design. A lifelong enthusiast of the culinary arts, my journey from blogging at{" "}
              <a
                href="https://cookwithemile.blogspot.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#163832] underline decoration-[#FCEF91] decoration-4 hover:bg-[#FCEF91] px-1 rounded transition-all"
              >
                Cook with Emile
              </a>{" "}
              to exploring cuisines in Korea has shaped how I think about physical, interactive spaces.
            </p>
            <p className="font-serif italic text-lg leading-relaxed text-[#163832]/90">
              My vision is to bridge these dimensions—merging system-level computing with multi-sensory, everyday human
              experiences to build technologies that bring connection, warmth, and accessibility to public life. Until
              then, I am documenting my cross-cultural journey in Daegu on{" "}
              <a
                href="https://m.blog.naver.com/angela_blogs?tab=1"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#163832] underline decoration-[#FCEF91] decoration-4 hover:bg-[#FCEF91] px-1 rounded transition-all"
              >
                Naver Blog
              </a>{" "}
              and exploring how smart design can elevate human potential.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
