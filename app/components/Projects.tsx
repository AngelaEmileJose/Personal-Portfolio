"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, Github, FileText, Award } from "lucide-react"

const projects = [
  {
    title: "GANNoiseRemover-NoiseFilter",
    date: "Sep 2025 - Dec 2025",
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
      github: "https://github.com/AngelaEmileJose/knu-link",
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
    <section id="projects" className="py-20 bg-quaternary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-64 bg-gray-200">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{project.date}</div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                {project.award && (
                  <div className="mb-4 p-3 bg-tertiary/20 rounded-lg border-l-4 border-primary">
                    <p className="text-sm font-medium text-primary flex items-start gap-2">
                      <Award className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{project.award}</span>
                    </p>
                  </div>
                )}
                {project.links && (
                  <div className="flex flex-wrap gap-3 mb-4">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.links.paper && (
                      <a
                        href={project.links.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
                      >
                        <FileText className="w-4 h-4" />
                        <span>Research Paper</span>
                      </a>
                    )}
                    {project.links.certificate && (
                      <a
                        href={project.links.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
                      >
                        <Award className="w-4 h-4" />
                        <span>Certificate</span>
                      </a>
                    )}
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-tertiary text-primary px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
