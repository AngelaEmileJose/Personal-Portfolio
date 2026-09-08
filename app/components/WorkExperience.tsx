"use client"

import { Calendar, MapPin, Award } from "lucide-react"
import { motion } from "framer-motion"

export default function WorkExperience() {
  const experiences = [
    {
      title: "Research Intern",
      company: "Software Safety Engineering LAB",
      location: "Daegu, South Korea",
      period: "May 2025 - Feb 2026",
      duration: "10 mos",
      type: "Internship",
      description: [
        "Conducting research on Large Language Models (LLMs) for formal verification of software",
        "Developing an automated pipeline to translate C program specifications into formal language specifications for verification using the CBMC model checker",
      ],
    },
    {
      title: "Mentor",
      company: "International Writing Center",
      location: "Daegu, South Korea",
      period: "Jul 2025 - Jul 2026",
      duration: "1 yr",
      type: "On-site",
      description: [
        "Mentored a diverse group of students at KNU, providing tailored coaching in English writing and speaking to build their confidence in international academic settings",
        "Monitored and evaluated student growth through meticulous data tracking, ensuring that every tutorial was data-informed and centered on the learner's evolving needs",
        "Contributed to the vibrant community at the International Writing Center (IWC) by collaborating on peer-led initiatives that made language learning more accessible and engaging",
      ],
      certificateNote: "Certificate pending",
    },
    {
      title: "Intern",
      company: "MLFM LAB",
      location: "Daegu, South Korea",
      period: "Nov 2025 - Dec 2025",
      duration: "2 mos",
      type: "On-site",
      description: [
        "Conducted experiments on Medical Image Registration for Lungs, using machine learning to align clinical data with high precision",
        "After rigorous testing, the experiments on clinical data yielded a 0.91 correlation, showing high reliability in the registration process",
      ],
      certificate: "/g-knu-research-certificate.pdf",
      certificateName: "G-KNU Glocal Research Stepping-Stone Program",
    },
    {
      title: "Research Intern",
      company: "Computational Biology & Bioinformatics Lab (COBI)",
      location: "Daegu, South Korea",
      period: "Sep 2024 - Dec 2024",
      duration: "4 mos",
      type: "Part-time",
      description: [
        "Worked on analyzing biological data using advanced computational techniques",
        "Filtered and organized large-scale omics datasets, performing functional enrichment analysis",
        "Developed scripts to streamline data processing workflows",
        "Identified key patterns in omics data and implemented efficient computational methods to support research objectives",
      ],
    },
    {
      title: "Research Assistant Intern, AI Department",
      company: "ThinkPalm Technologies Pvt. Ltd",
      location: "Kerala, India",
      period: "Apr 2024 - May 2024",
      duration: "2 mos",
      type: "Internship",
      description: [
        "Built automated visual recognition capabilities by implementing object detection and image classification algorithms across small-scale AI projects.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-[#AEEBDC]/25 via-white to-[#FCEF91]/25 text-[#163832]">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold mb-12 text-center text-[#163832] tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Work Experience
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-all border-l-4 border-[#AEEBDC] border-t border-r border-b border-[#FCEF91]/60"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#163832] mb-1">{exp.title}</h3>
                  <p className="text-lg font-semibold text-[#25534A]">{exp.company}</p>
                </div>
                <div className="text-xs font-semibold text-[#163832]/80 md:text-right flex flex-col gap-1.5">
                  <div className="inline-flex items-center gap-2 bg-[#FCEF91]/50 px-3 py-1 rounded-full border border-[#FCEF91]">
                    <Calendar className="w-3.5 h-3.5 text-[#163832]" />
                    <span>{exp.period}</span>
                    <span>· {exp.duration}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-[#AEEBDC]/40 px-3 py-1 rounded-full border border-[#AEEBDC]">
                    <MapPin className="w-3.5 h-3.5 text-[#163832]" />
                    <span>{exp.location}</span>
                    <span>· {exp.type}</span>
                  </div>
                </div>
              </div>
              <ul className="space-y-2 mt-4">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[#163832]/85 text-sm sm:text-base">
                    <span className="w-2 h-2 rounded-full bg-[#AEEBDC] border border-[#163832]/20 mt-2 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              {(exp.certificate || exp.certificateNote) && (
                <div className="mt-5 pt-4 border-t border-gray-100">
                  {exp.certificate && (
                    <a
                      href={exp.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold px-3.5 py-1.5 rounded-lg bg-[#AEEBDC]/50 text-[#163832] hover:bg-[#FCEF91] transition-all border border-[#AEEBDC]"
                    >
                      <Award className="w-4 h-4 text-[#163832]" />
                      <span>View Certificate: {exp.certificateName}</span>
                    </a>
                  )}
                  {exp.certificateNote && (
                    <p className="text-xs font-semibold text-[#163832]/70 italic flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#163832]" />
                      {exp.certificateNote}
                    </p>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
