"use client"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
          // Close mobile menu after clicking a link
          setMobileMenuOpen(false)
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
      <nav className="container mx-auto px-6 py-4">
        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-end">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-quaternary hover:text-tertiary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex justify-center space-x-8">
          <li>
            <a href="#hero" className="hover:text-tertiary transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-tertiary transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-tertiary transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-tertiary transition-colors">
              Experience
            </a>
          </li>
          <li>
            <a href="#hobbies" className="hover:text-tertiary transition-colors">
              Hobbies
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-tertiary transition-colors">
              Contact
            </a>
          </li>
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Angela_Emile_Jose_Resume.pdf"
              className="px-4 py-2 bg-tertiary text-primary rounded-lg hover:bg-quaternary transition-colors font-semibold"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden flex flex-col space-y-4 mt-4 pb-4"
            >
              <li>
                <a href="#hero" className="block hover:text-tertiary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="block hover:text-tertiary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="block hover:text-tertiary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="block hover:text-tertiary transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#hobbies" className="block hover:text-tertiary transition-colors">
                  Hobbies
                </a>
              </li>
              <li>
                <a href="#contact" className="block hover:text-tertiary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Angela_Emile_Jose_Resume.pdf"
                  className="inline-block px-4 py-2 bg-tertiary text-primary rounded-lg hover:bg-quaternary transition-colors font-semibold"
                >
                  Resume
                </a>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
