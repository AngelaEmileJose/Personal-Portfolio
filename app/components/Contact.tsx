"use client"

import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-quaternary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-quaternary">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-tertiary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-quaternary">Email</p>
                    <a href="mailto:angelaemilejose@gmail.com" className="text-accent hover:underline">
                      angelaemilejose@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Github className="w-6 h-6 text-tertiary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-quaternary">GitHub</p>
                    <a
                      href="https://github.com/AngelaEmileJose"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      github.com/AngelaEmileJose
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Linkedin className="w-6 h-6 text-tertiary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-quaternary">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/angela-emile-jose-1412b02a2/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      linkedin.com/in/angela-emile-jose
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-tertiary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-quaternary">Location</p>
                    <p className="text-quaternary/80">Daegu, South Korea</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-tertiary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-quaternary">Phone</p>
                    <a href="tel:+821039378830" className="text-accent hover:underline">
                      +82 010 3937 8830
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
