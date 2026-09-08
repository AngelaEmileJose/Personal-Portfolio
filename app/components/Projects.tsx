"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, Github, FileText, Award, Layers } from "lucide-react"
import { SequentialWindow } from "@/components/animations/SequentialWindow"
import { ScrollShiftCard } from "@/components/animations/ScrollShiftCard"
import { FireDetectionShowcase } from "@/components/FireDetectionShowcase"

const featuredProject = {
  title: "GANNoiseRemover-NoiseFilter",
  date: "Sep 2025 - Dec 2025",
  badge: "Grand Prize Research",
  description:
    "Developed an affordable, low-power smart hearing aid system by integrating a custom-designed analog circuit with a deep learning-based noise cancellation model using TasNet-GAN framework. Achieved 31% improvement in PESQ and 14% improvement in STOI, with 96% model size reduction.",
  image: "/gan-spectrogram.png",
  tags: ["Python", "PyTorch", "GAN", "Conv-TasNet", "Signal Processing", "Hardware Design"],
  award: "Grand Prize (대상) at 2025 KICS Fall Comprehensive Academic Conference · Nov 2025",
  links: {
    github: "https://github.com/GANNoiseRemover/NoiseFilter",
    paper: "/gan-noise-remover-research-paper.pdf",
    certificate: "/kics-grand-prize-certificate.pdf",
  },
}

const otherProjects = [
  {
    title: "K-Context Translator",
    date: "Dec 2025",
    description:
      "A cultural interpreter designed for international students and travelers in Korea. Provides context-aware translations with politeness levels, safety scores, and practical foreigner-friendly tips beyond literal meanings.",
    image: "/k-context-screenshot.png",
    tags: ["Next.js 16", "Google Gemini 2.5", "Tailwind CSS", "PWA"],
    links: {
      github: "https://github.com/AngelaEmileJose/Translator",
      demo: "https://koreantranslator.vercel.app/",
    },
  },
  {
    title: "KNU Link – Anonymous Social Discovery App",
    date: "Jan 2026",
    description:
      "A social networking platform that helps university students connect through shared activities using a Tinder-style swipe interface. Built to create a low-pressure environment for introverts and newcomers to find like-minded peers through genuine shared interests rather than appearance or social status. Live at: https://knu-link.vercel.app/",
    image: "/knu-link.png",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
    links: {
      github: "https://github.com/AngelaEmileJose/KNU-Link",
      demo: "https://knu-link.vercel.app/",
    },
  },
  {
    title: "NutriFlow AI",
    date: "Nov 2025 - Dec 2025",
    description:
      "Intelligent multimodal nutrition analysis system that automates nutritional tracking using visual dish recognition, dynamic data fetching, and stateful agent workflow. Built with LangGraph to manage a 12-step execution chain from image upload to final JSON persistence.",
    image: "/nutriscan-screenshot.jpg",
    tags: ["Qwen-VL-Plus", "LangGraph", "Computer Vision", "Nutrition Analysis"],
    links: {
      github: "https://github.com/HCI-Team4/AI-Nutrition-Tracker",
    },
  },
  {
    title: "ReportRAG",
    date: "2025",
    description:
      "Intelligent RAG (Retrieval-Augmented Generation) system that analyzes company annual reports and financial statements. Transforms 100-page documents into actionable insights in seconds with precise, cited answers powered by Llama 3.",
    image: "/report-analyzer-screenshot.png",
    tags: ["Python", "FastAPI", "LangChain", "Groq API", "FAISS", "Llama 3-70B"],
    links: {
      github: "https://github.com/AngelaEmileJose/rag-company-report-analyzer",
    },
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#FCEF91]/20 via-white to-[#AEEBDC]/25 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#AEEBDC] text-[#163832] text-xs font-bold mb-3 border border-[#163832]/10 shadow-sm">
            <Layers className="w-3.5 h-3.5" />
            <span>Interactive Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#163832]">Featured Research & Projects</h2>
          <p className="text-sm font-medium text-[#25534A] mt-2">
            Scroll down to trigger the aperture shutters and view shifting project thumbnails.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* ANIMATION 3: SEQUENTIAL WINDOW OPENING (Aperture / Split Shutter Reveal)   */}
        {/* ========================================================================= */}
        <SequentialWindow
          title="Grand Prize Research"
          subtitle="Scroll to open the Baby Turquoise & Baby Yellow shutters"
          badge="KICS 2025 Grand Prize"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center text-white">
            <div className="lg:col-span-6 relative h-64 sm:h-80 rounded-xl overflow-hidden shadow-inner border border-white/20 bg-black/40">
              <Image
                src={featuredProject.image || "/placeholder.svg"}
                alt={featuredProject.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-xs font-mono mb-2">
                <span className="text-[#AEEBDC]">{featuredProject.date}</span>
                <span>•</span>
                <span className="text-[#FCEF91] font-bold">{featuredProject.badge}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-white tracking-tight">
                {featuredProject.title}
              </h3>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-4">
                {featuredProject.description}
              </p>

              {featuredProject.award && (
                <div className="mb-5 p-3 rounded-lg bg-emerald-950/70 border border-[#FCEF91]/40 text-[#FCEF91] text-xs sm:text-sm flex items-start gap-2.5">
                  <Award className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#FCEF91]" />
                  <span className="font-semibold">{featuredProject.award}</span>
                </div>
              )}

              <div className="flex flex-wrap gap-3 mb-5">
                {featuredProject.links.github && (
                  <a
                    href={featuredProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-[#FCEF91] hover:text-[#163832] text-xs font-bold text-white transition-all border border-white/20"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Code</span>
                  </a>
                )}
                {featuredProject.links.paper && (
                  <a
                    href={featuredProject.links.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-[#FCEF91] hover:text-[#163832] text-xs font-bold text-white transition-all border border-white/20"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Research Paper</span>
                  </a>
                )}
                {featuredProject.links.certificate && (
                  <a
                    href={featuredProject.links.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-[#FCEF91] hover:text-[#163832] text-xs font-bold text-white transition-all border border-white/20"
                  >
                    <Award className="w-4 h-4" />
                    <span>Award Certificate</span>
                  </a>
                )}
              </div>

              <div className="flex flex-wrap gap-1.5">
                {featuredProject.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-white/15 text-[#AEEBDC] text-[11px] font-mono px-2.5 py-1 rounded-md border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </SequentialWindow>

        {/* ========================================================================= */}
        {/* AWARD-WINNING CAPSTONE: BRONZE MEDAL & SOFTWARE COPYRIGHT                 */}
        {/* Multimodal AI Fire Detection System (YOLO11 + CLIP) with hover breakdown  */}
        {/* ========================================================================= */}
        <FireDetectionShowcase />

        {/* ========================================================================= */}
        {/* ANIMATION 2: SCROLL-DRIVEN THUMBNAIL SHIFTING                             */}
        {/* Cards slide horizontally from outer margins and lock into the center grid */}
        {/* ========================================================================= */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-[#163832]">More Selected Works</h3>
            <p className="text-xs font-medium text-[#25534A] mt-1">Cards glide horizontally and center-lock on scroll</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <ScrollShiftCard
                key={index}
                index={index}
                direction="alternate"
                shiftAmount={110}
              >
                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-[#AEEBDC] flex flex-col h-full">
                  {/* Decorative Color Bar */}
                  <div className={`h-2 w-full ${index % 2 === 0 ? "bg-gradient-to-r from-[#AEEBDC] to-[#FCEF91]" : "bg-gradient-to-r from-[#FCEF91] to-[#AEEBDC]"}`} />
                  <div className="relative h-56 bg-gray-50 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <div className="text-xs font-mono font-semibold text-[#25534A] mb-1.5">{project.date}</div>
                      <h4 className="text-lg font-bold text-[#163832] mb-2">{project.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>
                    </div>

                    <div>
                      {project.links && (
                        <div className="flex flex-wrap gap-3 mb-4 pt-3 border-t border-gray-100">
                          {project.links.github && (
                            <a
                              href={project.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 text-xs font-bold text-[#163832] hover:text-[#0b6b57] transition-colors"
                            >
                              <Github className="w-3.5 h-3.5" />
                              <span>Source Code</span>
                            </a>
                          )}
                          {project.links.demo && (
                            <a
                              href={project.links.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 text-xs font-bold text-[#163832] hover:text-[#0b6b57] transition-colors"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                              <span>Live Application</span>
                            </a>
                          )}
                        </div>
                      )}

                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                              tagIndex % 2 === 0
                                ? "bg-[#AEEBDC]/50 text-[#163832] border border-[#AEEBDC]"
                                : "bg-[#FCEF91]/60 text-[#163832] border border-[#FCEF91]"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollShiftCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
