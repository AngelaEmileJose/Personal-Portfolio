"use client"
import { useEffect } from "react"
import { motion } from "framer-motion"

export default function Header() {
  useEffect(() => {
    const smoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          })
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => link.addEventListener("click", smoothScroll))

    return () => {
      links.forEach((link) => link.removeEventListener("click", smoothScroll))
    }
  }, [])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-[#AEEBDC]/95 backdrop-blur-md text-[#163832] border-b border-[#FCEF91]/80 shadow-sm"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="container mx-auto px-3 py-3 md:px-6 md:py-4">
        <ul className="flex flex-wrap justify-center items-center gap-1.5 md:gap-6 text-xs md:text-base font-medium">
          <li>
            <a href="#hero" className="px-3 py-1.5 rounded-full text-[#163832] hover:bg-[#FCEF91]/70 transition-all whitespace-nowrap">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="px-3 py-1.5 rounded-full text-[#163832] hover:bg-[#FCEF91]/70 transition-all whitespace-nowrap">
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className="px-3 py-1.5 rounded-full text-[#163832] hover:bg-[#FCEF91]/70 transition-all whitespace-nowrap">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="px-3 py-1.5 rounded-full text-[#163832] hover:bg-[#FCEF91]/70 transition-all whitespace-nowrap">
              Experience
            </a>
          </li>
          <li>
            <a href="#hobbies" className="px-3 py-1.5 rounded-full text-[#163832] hover:bg-[#FCEF91]/70 transition-all whitespace-nowrap">
              Hobbies
            </a>
          </li>
          <li>
            <a href="#contact" className="px-3 py-1.5 rounded-full text-[#163832] hover:bg-[#FCEF91]/70 transition-all whitespace-nowrap">
              Contact
            </a>
          </li>
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Angela_Emile_Jose_Resume.pdf"
              className="px-3.5 py-1.5 md:px-4 md:py-2 bg-[#FCEF91] text-[#163832] rounded-full hover:bg-white transition-colors font-bold shadow-sm border border-[#163832]/10 whitespace-nowrap text-xs md:text-sm"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </motion.header>
  )
}
