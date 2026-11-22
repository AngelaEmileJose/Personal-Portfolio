"use client"

import React from "react"
import { Mail, MapPin, Phone, Github, Linkedin, MessageSquare } from "lucide-react"
import SpotlightCard from "@/components/reactbits/SpotlightCard"

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background border-b border-border/70 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-xs font-semibold">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Research Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground tracking-tight">
            Let’s talk
          </h2>
          <p className="font-sans text-base sm:text-lg text-muted-foreground leading-relaxed">
            I am interested in research on algorithmic accountability, community-centered AI and health equity. If you are working on something similar, I would love to hear from you.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <SpotlightCard className="p-8 bg-card space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-accent/10 text-accent border border-accent/20 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                    Email
                  </p>
                  <a
                    href="mailto:angelaemilejose@gmail.com"
                    className="text-sm font-semibold text-foreground hover:text-accent hover:underline transition-colors"
                  >
                    angelaemilejose@gmail.com
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-accent/10 text-accent border border-accent/20 flex-shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                    GitHub
                  </p>
                  <a
                    href="https://github.com/AngelaEmileJose"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-foreground hover:text-accent hover:underline transition-colors"
                  >
                    github.com/AngelaEmileJose
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-accent/10 text-accent border border-accent/20 flex-shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                    LinkedIn
                  </p>
                  <a
                    href="https://www.linkedin.com/in/angela-emile-jose-1412b02a2/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-foreground hover:text-accent hover:underline transition-colors"
                  >
                    linkedin.com/in/angela-emile-jose
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-accent/10 text-accent border border-accent/20 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                    Location
                  </p>
                  <div className="space-y-0.5 text-sm font-semibold text-foreground">
                    <p>Kochi, Kerala, India</p>
                    <p className="text-xs font-normal text-muted-foreground">Daegu, South Korea</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 sm:col-span-2">
                <div className="p-2.5 rounded-xl bg-accent/10 text-accent border border-accent/20 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                    Phone Numbers
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm font-semibold text-foreground mt-0.5">
                    <a href="tel:+919846469020" className="hover:text-accent hover:underline">
                      India: +91 9846 469 020
                    </a>
                    <span className="text-border">·</span>
                    <a href="tel:+821039378830" className="hover:text-accent hover:underline">
                      Korea: +82 010 3937 8830
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  )
}
