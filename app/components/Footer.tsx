"use client"

import React from "react"
import Link from "next/link"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-card text-foreground py-14 border-t border-border/80">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border/60 text-center md:text-left">
          <div className="space-y-1">
            <h3 className="font-serif font-bold text-xl text-foreground">
              Angela Emile Jose
            </h3>
            {/* Footer line verbatim from CONTENT.md Section 8 */}
            <p className="text-sm font-sans text-muted-foreground max-w-xl">
              Open to research collaboration in algorithmic accountability, community-centered AI and health equity.{" "}
              <a
                href="mailto:angelaemilejose@gmail.com"
                className="text-accent hover:underline font-mono text-xs font-semibold"
              >
                angelaemilejose@gmail.com
              </a>
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 p-3 rounded-full bg-muted hover:bg-border/60 text-foreground transition-all border border-border text-xs font-mono"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4 text-accent" />
            <span className="hidden sm:inline">Top</span>
          </button>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Angela Emile Jose. MIT Media Lab Applicant Portfolio.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="https://github.com/AngelaEmileJose"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors flex items-center gap-1.5"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/angela-emile-jose-1412b02a2/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://cookwithemile.blogspot.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Cook with Emile
            </a>
            <a
              href="https://m.blog.naver.com/angela_blogs?tab=1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Naver Blog
            </a>
            <a
              href="#hobbies"
              className="hover:text-accent transition-colors"
            >
              Hobbies & Life
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
