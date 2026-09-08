"use client"

import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#AEEBDC]/35 via-white to-[#FCEF91]/35 text-[#163832]">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center mb-12 text-[#163832] tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information Card */}
          <motion.div
            className="bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-xl border-2 border-[#AEEBDC] space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-[#163832] border-b border-gray-100 pb-3">
              Contact Information
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-[#FCEF91] text-[#163832] shadow-sm flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#25534A]">Email</p>
                  <a href="mailto:angelaemilejose@gmail.com" className="text-sm sm:text-base font-semibold text-[#163832] hover:text-[#0b6b57] hover:underline">
                    angelaemilejose@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-[#AEEBDC] text-[#163832] shadow-sm flex-shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#25534A]">GitHub</p>
                  <a
                    href="https://github.com/AngelaEmileJose"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-semibold text-[#163832] hover:text-[#0b6b57] hover:underline"
                  >
                    github.com/AngelaEmileJose
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-[#FCEF91] text-[#163832] shadow-sm flex-shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#25534A]">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/angela-emile-jose-1412b02a2/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-semibold text-[#163832] hover:text-[#0b6b57] hover:underline"
                  >
                    linkedin.com/in/angela-emile-jose
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-[#AEEBDC] text-[#163832] shadow-sm flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#25534A]">Location</p>
                  <div className="space-y-0.5">
                    <p className="text-sm sm:text-base font-semibold text-[#163832]">Daegu, South Korea</p>
                    <p className="text-sm sm:text-base font-semibold text-[#163832]">India</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-[#FCEF91] text-[#163832] shadow-sm flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#25534A]">Phone</p>
                  <div className="flex flex-col space-y-0.5">
                    <a href="tel:+821039378830" className="text-sm sm:text-base font-semibold text-[#163832] hover:text-[#0b6b57] hover:underline">
                      +82 010 3937 8830
                    </a>
                    <a href="tel:+919846469020" className="text-sm sm:text-base font-semibold text-[#163832] hover:text-[#0b6b57] hover:underline">
                      +91 9846469020
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
