"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, Github, FileText, Award, Layers } from "lucide-react"
import { SequentialWindow } from "@/components/animations/SequentialWindow"
import { ScrollShiftCard } from "@/components/animations/ScrollShiftCard"

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
    <section id="projects" className="py-20 bg-quaternary/40 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Interactive Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">Featured Research & Projects</h2>
          <p className="text-sm text-secondary mt-2">
            Scroll down to trigger the aperture shutters and view shifting project thumbnails.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* ANIMATION 3: SEQUENTIAL WINDOW OPENING (Aperture / Split Shutter Reveal)   */}
        {/* ========================================================================= */}
        <SequentialWindow
          title="Grand Prize Research"
          subtitle="Scroll to open the shutters and unveil the TasNet-GAN hearing aid system"
          badge="KICS 2025 Grand Prize"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center text-white">
            <div className="lg:col-span-6 relative h-64 sm:h-80 rounded-xl overflow-hidden shadow-inner border border-white/10 bg-black/40">
              <Image
                src={featuredProject.image || "/placeholder.svg"}
                alt={featuredProject.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-xs text-quaternary font-mono mb-2">
                <span>{featuredProject.date}</span>
                <span>•</span>
                <span className="text-emerald-400 font-semibold">{featuredProject.badge}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-white tracking-tight">
                {featuredProject.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                {featuredProject.description}
              </p>

              {featuredProject.award && (
                <div className="mb-5 p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-start gap-2.5">
                  <Award className="w-4 h-4 mt-0.5 flex-shrink-0 text-emerald-400" />
                  <span>{featuredProject.award}</span>
                </div>
              )}

              <div className="flex flex-wrap gap-3 mb-5">
                {featuredProject.links.github && (
                  <a
                    href={featuredProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-all border border-white/15"
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
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-all border border-white/15"
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
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-all border border-white/15"
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
                    className="bg-white/10 text-quaternary text-[11px] font-mono px-2.5 py-1 rounded-md border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </SequentialWindow>

        {/* ========================================================================= */}
        {/* ANIMATION 2: SCROLL-DRIVEN THUMBNAIL SHIFTING                             */}
        {/* Cards slide horizontally from outer margins and lock into the center grid */}
        {/* ========================================================================= */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-primary">More Selected Works</h3>
            <p className="text-xs text-secondary mt-1">Cards glide horizontally and center-lock on scroll</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <ScrollShiftCard
                key={index}
                index={index}
                direction="alternate"
                shiftAmount={110}
              >
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-primary/10 flex flex-col h-full">
                  <div className="relative h-56 bg-gray-100 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <div className="text-xs font-mono text-secondary mb-1.5">{project.date}</div>
                      <h4 className="text-lg font-bold text-primary mb-2">{project.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>
                    </div>

                    <div>
                      {project.links && (
                        <div className="flex flex-wrap gap-3 mb-4 pt-2 border-t border-gray-100">
                          {project.links.github && (
                            <a
                              href={project.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 text-xs font-medium text-primary hover:text-accent transition-colors"
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
                              className="flex items-center gap-1.5 text-xs font-medium text-primary hover:text-accent transition-colors"
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
                            className="bg-tertiary/20 text-primary px-2.5 py-0.5 rounded-full text-xs font-medium"
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
