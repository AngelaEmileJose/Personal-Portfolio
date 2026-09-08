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
              I am Angela Emile Jose, a Computer Science student currently navigating a unique academic journey. Through
              a 2+2 Double Degree program, I've bridged my foundations at Christ University, India, with my senior-year
              research at Kyungpook National University, South Korea.
            </p>
            <p className="mb-4 font-serif italic text-lg leading-relaxed text-[#163832]/90">
              Moving across borders has taught me that technology, much like language, is a tool for connection. Whether
              I'm translating complex C-specifications into formal logic at the SSE Lab or helping international
              students find their voice at the International Writing Center, my goal is always the same: to make the
              complex accessible.
            </p>
            <p className="mb-4 font-serif italic text-lg leading-relaxed text-[#163832]/90">
              While my days are spent in code, my soul is often found in the kitchen. I've been a lifelong
              enthusiast of the culinary arts—from my early days of blogging at{" "}
              <a
                href="https://cookwithemile.blogspot.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#163832] underline decoration-[#FCEF91] decoration-4 hover:bg-[#FCEF91] px-1 rounded transition-all"
              >
                Cook with Emile
              </a>{" "}
              to experimenting with non-Indian cuisines here in Korea.
            </p>
            <p className="font-serif italic text-lg leading-relaxed text-[#163832]/90">
              One day, I dream of blending these two worlds: owning a cafe where technology meets the warmth of a
              perfectly baked cake. Until then, you can find me exploring Daegu and documenting my life as a foreign
              student on{" "}
              <a
                href="https://m.blog.naver.com/angela_blogs"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#163832] underline decoration-[#FCEF91] decoration-4 hover:bg-[#FCEF91] px-1 rounded transition-all"
              >
                Naver Blog
              </a>
              .
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
