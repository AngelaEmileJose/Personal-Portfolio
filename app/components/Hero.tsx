"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-primary text-quaternary pt-20">
      <div className="container mx-auto px-6 py-24 md:flex md:items-center">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Angela Emile Jose
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-3xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            4th Year Computer Science Student
          </motion.h2>
          <motion.p
            className="text-lg mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Bridging technology and human connection through research, innovation, and a passion for making complex
            systems accessible.
          </motion.p>
          <motion.a
            href="#projects"
            className="inline-block bg-tertiary text-primary px-6 py-3 rounded-full font-semibold hover:bg-secondary transition-colors"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
        </motion.div>
        <motion.div
          className="md:w-1/2 mt-12 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <Image
            src="/hero-photo.jpg"
            alt="Angela Emile Jose"
            width={400}
            height={400}
            className="rounded-lg mx-auto object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}
