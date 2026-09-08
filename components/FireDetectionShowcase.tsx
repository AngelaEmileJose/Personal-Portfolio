"use client"

import React, { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  Award,
  Flame,
  ShieldCheck,
  BookOpen,
  Cpu,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  X,
  CheckCircle2,
  Sliders,
  ExternalLink
} from "lucide-react"

export function FireDetectionShowcase() {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // Show detailed view if either hovered or clicked open
  const activeOpen = isOpen || isHovered

  return (
    <div className="my-14">
      {/* Top Header / Badge Bar */}
      <div className="flex items-center justify-between mb-3 px-1 text-xs font-mono text-[#163832]">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCEF91] text-[#163832] font-extrabold border border-[#163832]/10 shadow-sm">
            <Award className="w-3.5 h-3.5 text-[#163832]" />
            Bronze Medal · 우수논문상 (동상)
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#AEEBDC] text-[#163832] font-bold border border-[#163832]/10">
            <ShieldCheck className="w-3.5 h-3.5 text-[#163832]" />
            Software Copyright Registered
          </span>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-xs font-bold text-[#163832] hover:text-black flex items-center gap-1.5 bg-white/90 px-3 py-1 rounded-full border border-[#163832]/15 shadow-sm transition-all"
        >
          <Sliders className="w-3.5 h-3.5 text-[#163832]" />
          <span>{activeOpen ? "Close Window" : "Slide Open Details"}</span>
        </button>
      </div>

      {/* FIXED SIZE PROJECT BOX CONTAINER (Never takes up extra page height) */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full h-[580px] sm:h-[520px] rounded-2xl overflow-hidden border-2 border-[#AEEBDC] shadow-xl bg-white select-none"
      >
        {/* Top Decorative Gradient Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-2 z-40 bg-gradient-to-r from-[#AEEBDC] via-[#FCEF91] to-[#AEEBDC]" />

        {/* ========================================================================= */}
        {/* 1. FRONT FACE: SHORT DESCRIPTION VIEW (Shown First)                       */}
        {/* ========================================================================= */}
        <div className="absolute inset-0 pt-2 p-6 sm:p-8 flex flex-col justify-between z-10 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full items-center">
            {/* Left Column: Dashboard Preview & Badges */}
            <div className="md:col-span-5 flex flex-col h-full justify-between">
              <div className="relative h-48 sm:h-64 rounded-xl overflow-hidden shadow-md border border-gray-100 bg-slate-900">
                <Image
                  src="/fire-detection-dashboard.jpg"
                  alt="Multimodal Fire Detection Dashboard"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white text-[10px] sm:text-xs font-mono">
                  <span className="bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded border border-white/20">
                    F2-Score: 0.833
                  </span>
                  <span className="bg-[#FCEF91] text-[#163832] font-bold px-2 py-0.5 rounded">
                    YOLO11 + CLIP
                  </span>
                </div>
              </div>

              {/* Award Callout Box */}
              <div className="mt-3 p-3 rounded-xl bg-gradient-to-r from-[#FCEF91]/40 via-[#AEEBDC]/30 to-[#FCEF91]/40 border border-[#FCEF91] flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#FCEF91] text-[#163832] shadow-sm flex-shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div className="text-xs text-[#163832] leading-tight">
                  <div className="font-extrabold text-[12px]">Bronze / Excellent Paper Award (동상)</div>
                  <div className="text-[#25534A] text-[11px] mt-0.5">2026 KIT Conference · 제 26-178 호</div>
                  <div className="text-[10px] font-mono text-[#163832]/80 mt-0.5">Copyright: 제 C-2026-025665 호</div>
                </div>
              </div>
            </div>

            {/* Right Column: Title, Short Description, Tags & Slide Prompt */}
            <div className="md:col-span-7 flex flex-col h-full justify-between pt-1">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#25534A] mb-1.5 font-semibold">
                  <span>Capstone Project</span>
                  <span>•</span>
                  <span className="text-[#163832] bg-[#AEEBDC]/50 px-2 py-0.5 rounded-md font-bold">2026</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#163832] tracking-tight mb-3">
                  Hybrid Fire Detection System (YOLO11 + CLIP)
                </h3>

                {/* Short Description (Always displayed first) */}
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                  This project introduces a hybrid fire detection system that integrates YOLO11 for visual object detection with the CLIP multimodal model to understand scene context and minimize false alarms. By effectively reducing critical false negatives and achieving an optimal F2-score, the system's development led to an award-winning conference paper and a registered software copyright.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {["YOLO11", "CLIP ViT-B/32", "InternVL 2.5-4B", "Gemini 3 Flash", "F2-Score: 0.833", "Multimodal VQA"].map(
                    (tag, i) => (
                      <span
                        key={i}
                        className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md border ${
                          i % 2 === 0
                            ? "bg-[#AEEBDC]/40 text-[#163832] border-[#AEEBDC]"
                            : "bg-[#FCEF91]/50 text-[#163832] border-[#FCEF91]"
                        }`}
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Interactive Sliding Window Call-To-Action */}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <button
                  onClick={() => setIsOpen(true)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#FCEF91] to-[#AEEBDC] text-[#163832] font-extrabold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  <Sparkles className="w-4 h-4 text-[#163832]" />
                  <span>Slide Open Window for Detailed Breakdown →</span>
                </button>
                <span className="hidden lg:inline text-xs text-[#25534A] font-semibold">
                  (Or hover over box)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. SLIDING SHUTTER PANELS (Slide Apart on Hover or Toggle)                 */}
        {/* Left Panel in Baby Turquoise & Right Panel in Baby Yellow                 */}
        {/* ========================================================================= */}

        {/* LEFT SHUTTER (Slides Left) */}
        <motion.div
          animate={{ x: activeOpen ? "-102%" : "0%" }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="absolute inset-y-0 left-0 w-1/2 z-25 pointer-events-none bg-gradient-to-br from-[#AEEBDC] via-[#91ded0] to-[#71cebc] border-r-2 border-[#FCEF91] shadow-2xl flex items-center justify-end pr-4 sm:pr-8"
        >
          <div className="absolute inset-0 opacity-15 bg-[repeating-linear-gradient(0deg,#163832,#163832_2px,transparent_2px,transparent_18px)]" />
          <div className="relative z-10 flex flex-col items-center gap-2 text-[#163832]">
            <ChevronLeft className="w-6 h-6 animate-pulse" />
            <span className="text-[10px] tracking-widest font-mono uppercase font-bold text-[#163832]">
              Shutter L
            </span>
          </div>
        </motion.div>

        {/* RIGHT SHUTTER (Slides Right) */}
        <motion.div
          animate={{ x: activeOpen ? "102%" : "0%" }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="absolute inset-y-0 right-0 w-1/2 z-25 pointer-events-none bg-gradient-to-bl from-[#FCEF91] via-[#f9e97c] to-[#ebd44e] border-l-2 border-[#AEEBDC] shadow-2xl flex items-center justify-start pl-4 sm:pl-8"
        >
          <div className="absolute inset-0 opacity-15 bg-[repeating-linear-gradient(0deg,#163832,#163832_2px,transparent_2px,transparent_18px)]" />
          <div className="relative z-10 flex flex-col items-center gap-2 text-[#163832]">
            <ChevronRight className="w-6 h-6 animate-pulse" />
            <span className="text-[10px] tracking-widest font-mono uppercase font-bold text-[#163832]">
              Shutter R
            </span>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* 3. REVEALED DETAILED DESCRIPTION (Hiding Behind Window, Inside Same Box)  */}
        {/* Stays within exact fixed box dimensions; never takes up extra page height */}
        {/* ========================================================================= */}
        <motion.div
          initial={false}
          animate={{
            opacity: activeOpen ? 1 : 0,
            pointerEvents: activeOpen ? "auto" : "none",
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 z-30 bg-[#163832] text-white pt-3 flex flex-col"
        >
          {/* Detailed Window Top Navigation Bar */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-white/15 bg-black/20 flex-shrink-0">
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-[#AEEBDC] font-extrabold tracking-wide uppercase">
                Detailed Project Breakdown
              </span>
              <span className="text-white/40">•</span>
              <span className="text-[#FCEF91] font-semibold">
                YOLO11 + CLIP Multimodal Verification
              </span>
            </div>
            <button
              onClick={() => {
                setIsOpen(false)
                setIsHovered(false)
              }}
              className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-[#FCEF91] hover:text-[#163832] text-xs font-bold text-white transition-all flex items-center gap-1 border border-white/20"
            >
              <X className="w-3.5 h-3.5" />
              <span>Slide Shut</span>
            </button>
          </div>

          {/* Internal Scrollable Content (Scrolls cleanly inside the same box without changing page height) */}
          <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-5 space-y-4 text-xs sm:text-sm text-gray-200">
            {/* Brief Overview */}
            <div className="p-4 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#FCEF91] mb-1.5 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#FCEF91]" />
                Brief Overview
              </h4>
              <p className="leading-relaxed text-gray-200">
                A multimodal AI system developed for my capstone project that integrates real-time object detection (YOLO11) with visual-language models (CLIP, VQA) to significantly improve fire detection accuracy by understanding scene context. By successfully reducing critical false negatives, the project resulted in a published paper, an Excellent Paper Award at the 2026 KIT conference, and an official software copyright.
              </p>
            </div>

            {/* Grid: The Challenge & Evaluation Results */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* The Challenge */}
              <div className="p-4 rounded-xl bg-white/10 border border-white/15">
                <h4 className="text-xs font-black uppercase tracking-wider text-[#AEEBDC] mb-1.5 flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#AEEBDC]" />
                  The Challenge
                </h4>
                <p className="leading-relaxed text-gray-300 text-xs">
                  Traditional vision-based fire detection models often suffer from false positives when encountering visual patterns that look like fire, and environmental sensors can be easily impacted by external conditions. A more intelligent system was needed to distinguish between a dangerous fire and a safe, fire-like scenario.
                </p>
              </div>

              {/* Evaluation & Results */}
              <div className="p-4 rounded-xl bg-white/10 border border-white/15">
                <h4 className="text-xs font-black uppercase tracking-wider text-[#FCEF91] mb-1.5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FCEF91]" />
                  Evaluation & Results
                </h4>
                <p className="leading-relaxed text-gray-300 text-xs">
                  We conducted a comprehensive ablation study comparing our hybrid YOLO-CLIP model against isolated YOLO and isolated CLIP baselines. Because missing a real fire (a false negative) is the most critical failure in safety systems, we prioritized the F2-score, which heavily penalizes false negatives. Our integrated model achieved an <strong className="text-white">optimal F2-score of 0.833</strong>, demonstrating superior and balanced performance over the single-model baselines.
                </p>
              </div>
            </div>

            {/* Technical Implementation & Architecture */}
            <div className="p-4 rounded-xl bg-white/10 border border-white/15">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#AEEBDC] mb-2 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#AEEBDC]" />
                Technical Implementation & Architecture
              </h4>
              <p className="text-xs text-gray-300 mb-3">
                To overcome the limitations of single-model approaches, we designed a hybrid, context-aware architecture:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-black/30 border border-white/10">
                  <div className="font-bold text-[#AEEBDC] mb-1">Contextual Understanding</div>
                  <div className="text-gray-300 leading-relaxed text-[11px]">
                    We utilized the InternVL 2.5-4B VQA model alongside Gemini 3 Flash to generate representative descriptive captions for various scenes.
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-black/30 border border-white/10">
                  <div className="font-bold text-[#FCEF91] mb-1">Hybrid Verification</div>
                  <div className="text-gray-300 leading-relaxed text-[11px]">
                    YOLO11 was deployed for initial visual detection, and its output was fed into a CLIP ViT-B/32 model alongside the generated captions. CLIP evaluated the cosine similarity between the image and the text, acting as a contextual filter to verify if the detected pattern was genuinely a fire emergency.
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-black/30 border border-white/10">
                  <div className="font-bold text-[#AEEBDC] mb-1">Dataset Construction</div>
                  <div className="text-gray-300 leading-relaxed text-[11px]">
                    We curated a highly specific dataset of 1,600 images spread across 8 distinct categories—including actual fires, campfires, cooking scenes, fireworks, and visually similar non-fire scenes—to rigorously test the system.
                  </div>
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/60 to-slate-900/80 border border-[#FCEF91]/40">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#FCEF91] mb-2 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#FCEF91]" />
                Key Achievements
              </h4>
              <ul className="space-y-1.5 text-xs text-gray-200">
                <li className="flex items-start gap-2">
                  <span className="text-[#AEEBDC] font-bold">•</span>
                  <span>
                    <strong className="text-white">Publication:</strong> Co-authored <em>"Integration of Vision and Contextual Information and Model Comparison for Performance Improvement of Fire Detection Systems"</em>.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FCEF91] font-bold">•</span>
                  <span>
                    <strong className="text-white">Award:</strong> Won the Bronze / Excellent Paper Award at the 2026 Korean Institute of Information Technology (KIT) Summer Comprehensive Academic Conference (제 26-178 호).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#AEEBDC] font-bold">•</span>
                  <span>
                    <strong className="text-white">Software Copyright:</strong> Official Software Copyright Registration (제 C-2026-025665 호) with the Korea Copyright Commission.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
