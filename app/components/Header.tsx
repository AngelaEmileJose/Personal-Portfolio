"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, FileText } from "lucide-react"

export default function Header() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: "Work", href: isHome ? "#work" : "/#work" },
    { label: "Research Statement", href: "/research-statement" },
    { label: "Thinking", href: "/thinking" },
    { label: "About", href: isHome ? "#about" : "/#about" },
    { label: "Experience", href: isHome ? "#experience" : "/#experience" },
    { label: "Contact", href: isHome ? "#contact" : "/#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-border/80 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand/Monogram */}
        <Link
          href="/"
          className="group flex items-center gap-2 text-foreground font-serif text-lg tracking-tight hover:text-[#D6427D] transition-colors focus:outline-none focus:ring-2 focus:ring-accent/40 rounded-md px-1"
        >
          <span className="font-bold">Angela Emile Jose</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? "text-accent bg-accent/10 font-semibold"
                    : "text-foreground/80 hover:text-foreground hover:bg-muted/60"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
          <div className="h-4 w-px bg-border/80 mx-2" aria-hidden="true" />
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Angela_Emile_Jose_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-accent text-white rounded-full hover:bg-accent/90 transition-all font-mono text-xs font-semibold shadow-sm hover:shadow"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Résumé</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Angela_Emile_Jose_Resume.pdf"
            className="inline-flex items-center gap-1 px-3 py-1 bg-accent/10 text-accent border border-accent/20 rounded-full font-mono text-xs font-semibold"
          >
            <span>CV</span>
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-accent/40"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-b border-border bg-card/95 backdrop-blur-xl px-4 py-4 space-y-1 shadow-xl"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-muted/80 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-border/60">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Angela_Emile_Jose_Resume.pdf"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-accent text-white rounded-xl font-mono text-xs font-semibold shadow-sm"
              >
                <FileText className="w-4 h-4" />
                <span>Download Résumé (PDF)</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
