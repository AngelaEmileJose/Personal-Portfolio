"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, Github, FileText, Award, Layers } from "lucide-react"
import { ScrollShiftCard } from "@/components/animations/ScrollShiftCard"

interface Project {
  title: string
  date: string
  description: string
  image: string
  tags: string[]
  award?: string
  links?: {
    github?: string
    demo?: string
    paper?: string
    certificate?: string
  }
}

const projects: Project[] = [
  {
    title: "GANNoiseRemover-NoiseFilter",
    date: "Sep 2025 - Dec 2025",
    description:
      "Developed an affordable, low-power smart hearing aid system by integrating a custom-designed analog circuit with a deep learning-based noise cancellation model using TasNet-GAN framework. Achieved 31% improvement in PESQ and 14% improvement in STOI, with 96% model size reduction.",
    image: "/gan-spectrogram.png",
    tags: ["Python", "PyTorch", "GAN", "Conv-TasNet", "Signal Processing", "Hardware Design"],
    award: "Grand Prize (대상) · 2025 KICS Fall Comprehensive Academic Conference",
    links: {
      github: "https://github.com/GANNoiseRemover/NoiseFilter",
      paper: "/gan-noise-remover-research-paper.pdf",
      certificate: "/kics-grand-prize-certificate.pdf",
    },
  },
  {
    title: "Hybrid Fire Detection System (YOLO11 + CLIP)",
    date: "2026",
    description:
      "This project introduces a hybrid fire detection system that integrates YOLO11 for visual object detection with the CLIP multimodal model to understand scene context and minimize false alarms. By effectively reducing critical false negatives and achieving an optimal F2-score, the system's development led to an award-winning conference paper and a registered software copyright.",
    image: "/fire-detection-dashboard.jpg",
    tags: ["YOLO11", "CLIP ViT-B/32", "InternVL 2.5-4B", "Gemini 3 Flash", "Multimodal VQA", "F2-Score: 0.833"],
    award: "Bronze / Excellent Paper Award (동상) · 2026 KIT Summer Comprehensive Academic Conference (제 26-178 호)",
    links: {
      paper: "/fire-detection-paper.pdf",
      certificate: "/fire-detection-award-certificate.pdf",
    },
  },
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
      "A social networking platform that helps university students connect through shared activities using a Tinder-style swipe interface. Built to create a low-pressure environment for introverts and newcomers to find like-minded peers through genuine shared interests rather than appearance or social status.",
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
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#AEEBDC] text-[#163832] text-xs font-bold mb-3 border border-[#163832]/10 shadow-sm">
            <Layers className="w-3.5 h-3.5" />
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#163832]">
            My Projects & Research
          </h2>
          <p className="text-sm font-medium text-[#25534A] mt-2">
            Explore my selected works, research publications, and software systems.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* UNIFIED PROJECTS GRID: ALL PROJECTS IN THE SAME FORMAT AND STYLE          */}
        {/* Every card shares identical dimensions, typography, tags, and animations  */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollShiftCard
              key={index}
              index={index}
              direction="alternate"
              shiftAmount={90}
            >
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-[#AEEBDC] hover:border-[#FCEF91] flex flex-col h-full group">
                {/* Decorative Top Accent Bar */}
                <div
                  className={`h-2 w-full ${
                    index % 2 === 0
                      ? "bg-gradient-to-r from-[#AEEBDC] via-[#FCEF91] to-[#AEEBDC]"
                      : "bg-gradient-to-r from-[#FCEF91] via-[#AEEBDC] to-[#FCEF91]"
                  }`}
                />

                {/* Project Image */}
                <div className="relative h-60 sm:h-64 bg-slate-900 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-mono">
                    <span className="bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/20">
                      {project.date}
                    </span>
                    {project.award && (
                      <span className="bg-[#FCEF91] text-[#163832] font-bold px-2.5 py-1 rounded-md shadow flex items-center gap-1 text-[11px]">
                        <Award className="w-3 h-3" />
                        Award Winner
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#163832] mb-2 group-hover:text-[#0E5C4E] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Award / Recognition Banner (if applicable) */}
                    {project.award && (
                      <div className="mb-4 p-3 rounded-xl bg-gradient-to-r from-[#FCEF91]/40 via-[#AEEBDC]/30 to-[#FCEF91]/40 border border-[#FCEF91] text-xs text-[#163832] flex items-center gap-2.5">
                        <Award className="w-4 h-4 flex-shrink-0 text-[#163832]" />
                        <span className="font-bold">{project.award}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    {/* Action Links */}
                    {project.links && (
                      <div className="flex flex-wrap gap-3 mb-4 pt-3 border-t border-gray-100">
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#163832] hover:text-[#0E5C4E] transition-colors"
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
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#163832] hover:text-[#0E5C4E] transition-colors"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Live Application</span>
                          </a>
                        )}
                        {project.links.paper && project.links.paper !== "#" && (
                          <a
                            href={project.links.paper}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#163832] hover:text-[#0E5C4E] transition-colors"
                          >
                            <FileText className="w-3.5 h-3.5" />
                            <span>Research Paper</span>
                          </a>
                        )}
                        {project.links.certificate && (
                          <a
                            href={project.links.certificate}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#163832] hover:text-[#0E5C4E] transition-colors"
                          >
                            <Award className="w-3.5 h-3.5" />
                            <span>Certificate</span>
                          </a>
                        )}
                      </div>
                    )}

                    {/* Tags */}
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
    </section>
  )
}
