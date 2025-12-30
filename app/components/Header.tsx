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
      className="fixed top-0 left-0 right-0 z-50 bg-primary bg-opacity-90 text-quaternary"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="container mx-auto px-3 py-3 md:px-6 md:py-4">
        <ul className="flex flex-wrap justify-center items-center gap-2 md:gap-8 text-xs md:text-base">
          <li>
            <a href="#hero" className="hover:text-tertiary transition-colors whitespace-nowrap">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-tertiary transition-colors whitespace-nowrap">
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-tertiary transition-colors whitespace-nowrap">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-tertiary transition-colors whitespace-nowrap">
              Experience
            </a>
          </li>
          <li>
            <a href="#hobbies" className="hover:text-tertiary transition-colors whitespace-nowrap">
              Hobbies
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-tertiary transition-colors whitespace-nowrap">
              Contact
            </a>
          </li>
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Angela_Emile_Jose_Resume.pdf"
              className="px-3 py-1 md:px-4 md:py-2 bg-tertiary text-primary rounded-lg hover:bg-quaternary transition-colors font-semibold whitespace-nowrap text-xs md:text-base"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </motion.header>
  )
}
