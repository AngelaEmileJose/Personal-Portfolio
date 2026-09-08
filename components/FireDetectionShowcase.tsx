"use client"

import React, { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Award, Flame, ShieldCheck, BookOpen, Cpu, Sparkles, Eye, ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react"

export function FireDetectionShowcase() {
  const [isHovered, setIsHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  const showDetails = isHovered || isExpanded

  return (
    <div className="my-14">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCEF91] text-[#163832] text-xs font-extrabold border border-[#163832]/10 shadow-sm">
            <Award className="w-3.5 h-3.5 text-[#163832]" />
            Bronze Medal · 우수논문상 (동상)
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#AEEBDC] text-[#163832] text-xs font-bold border border-[#163832]/10">
            <ShieldCheck className="w-3.5 h-3.5 text-[#163832]" />
            Software Copyright Registered
          </span>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs font-bold text-[#163832] hover:text-[#0E5C4E] flex items-center gap-1 bg-white/80 px-3 py-1 rounded-full border border-[#163832]/10 shadow-sm transition-all"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-3.5 h-3.5" /> Collapse Details
            </>
          ) : (
            <>
              <Eye className="w-3.5 h-3.5" /> {showDetails ? "Pinned Open" : "Click / Hover for Details"}
            </>
          )}
        </button>
      </div>

      {/* Main Interactive Card */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#AEEBDC] hover:border-[#FCEF91] transition-all duration-300 group"
      >
        {/* Top Decorative Gradient Accent Bar */}
        <div className="h-2 w-full bg-gradient-to-r from-[#AEEBDC] via-[#FCEF91] to-[#AEEBDC]" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8">
          {/* Left Column: Image & Quick Stats */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden shadow-md border border-gray-100 bg-slate-900 group-hover:shadow-lg transition-all">
              <Image
                src="/fire-detection-dashboard.jpg"
                alt="Multimodal Fire Detection Dashboard (YOLO11 + CLIP)"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-mono">
                <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/20">
                  F2-Score: 0.833 (Optimal)
                </span>
                <span className="bg-[#FCEF91] text-[#163832] font-bold px-2 py-0.5 rounded shadow">
                  YOLO11 + CLIP ViT-B/32
                </span>
              </div>
            </div>

            {/* Award Banner Under Image */}
            <div className="mt-4 p-3.5 rounded-xl bg-gradient-to-r from-[#FCEF91]/40 via-[#AEEBDC]/30 to-[#FCEF91]/40 border border-[#FCEF91] flex items-start gap-3">
              <div className="p-2 rounded-lg bg-[#FCEF91] text-[#163832] shadow-sm flex-shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-xs text-[#163832]">
                <div className="font-extrabold text-sm text-[#163832]">
                  Bronze / Excellent Paper Award (동상)
                </div>
                <div className="text-[#25534A] font-medium mt-0.5">
                  2026 Korean Institute of Information Technology (KIIT) Conference · 제 26-178 호
                </div>
                <div className="text-[#163832]/80 font-mono mt-1 text-[11px]">
                  Registered Software Copyright: 제 C-2026-025665 호
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content & Dynamic Hover Expansion */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#25534A] mb-2 font-semibold">
                <span>Capstone Research</span>
                <span>•</span>
                <span className="text-[#163832] bg-[#AEEBDC]/50 px-2 py-0.5 rounded-md font-bold">2026</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#163832] tracking-tight mb-3">
                Hybrid Fire Detection System (YOLO11 + CLIP)
              </h3>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                This project introduces a hybrid fire detection system that integrates YOLO11 for visual object detection with the CLIP multimodal model to understand scene context and minimize false alarms. By effectively reducing critical false negatives and achieving an optimal F2-score, the system's development led to an award-winning conference paper and a registered software copyright.
              </p>

              {/* Tag Badges */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {["YOLO11", "CLIP ViT-B/32", "InternVL 2.5-4B", "Gemini 3 Flash", "Multimodal VQA", "F2-Score: 0.833", "Computer Vision"].map(
                  (tag, i) => (
                    <span
                      key={i}
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-md border ${
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

            {/* Hover Indicator Hint */}
            <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs font-bold text-[#25534A] flex items-center gap-1.5 animate-pulse">
                <Sparkles className="w-3.5 h-3.5 text-[#163832]" />
                {showDetails ? "Full Technical Breakdown Active" : "Hover or tap to reveal full technical breakdown ↓"}
              </span>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-xs font-bold text-[#163832] underline hover:text-[#0E5C4E]"
              >
                {showDetails ? "Hide" : "Expand"}
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* HOVER / EXPANDED DETAIL BREAKDOWN                                         */}
        {/* Shows detailed technical breakdown requested by user                      */}
        {/* ========================================================================= */}
        <AnimatePresence>
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-gradient-to-b from-[#fbfdfc] to-[#f4faf8] border-t-2 border-[#AEEBDC] px-6 sm:px-8 py-6"
            >
              <div className="max-w-4xl mx-auto space-y-6">
                {/* 1. Brief Overview */}
                <div className="p-4 rounded-xl bg-white shadow-sm border border-[#AEEBDC]/60">
                  <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#163832] mb-1.5 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#163832]" />
                    Brief Overview
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    A multimodal AI system developed for my capstone project that integrates real-time object detection (YOLO11) with visual-language models (CLIP, VQA) to significantly improve fire detection accuracy by understanding scene context. By successfully reducing critical false negatives, the project resulted in a published paper, an Excellent Paper Award at the 2026 KIT conference, and an official software copyright.
                  </p>
                </div>

                {/* 2. Detailed Project Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* The Challenge */}
                  <div className="p-4 rounded-xl bg-white shadow-sm border border-[#FCEF91]">
                    <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#163832] mb-1.5 flex items-center gap-2">
                      <Flame className="w-4 h-4 text-[#163832]" />
                      The Challenge
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      Traditional vision-based fire detection models often suffer from false positives when encountering visual patterns that look like fire, and environmental sensors can be easily impacted by external conditions. A more intelligent system was needed to distinguish between a dangerous fire and a safe, fire-like scenario.
                    </p>
                  </div>

                  {/* Evaluation & Results */}
                  <div className="p-4 rounded-xl bg-white shadow-sm border border-[#AEEBDC]">
                    <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#163832] mb-1.5 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#163832]" />
                      Evaluation & Results
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      We conducted a comprehensive ablation study comparing our hybrid YOLO-CLIP model against isolated YOLO and isolated CLIP baselines. Because missing a real fire (a false negative) is the most critical failure in safety systems, we prioritized the F2-score, which heavily penalizes false negatives. Our integrated model achieved an <strong>optimal F2-score of 0.833</strong>, demonstrating superior and balanced performance over the single-model baselines.
                    </p>
                  </div>
                </div>

                {/* 3. Technical Implementation & Architecture */}
                <div className="p-4 rounded-xl bg-white shadow-sm border border-[#AEEBDC]/80">
                  <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#163832] mb-3 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-[#163832]" />
                    Technical Implementation & Architecture
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-700 mb-3">
                    To overcome the limitations of single-model approaches, we designed a hybrid, context-aware architecture:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-gray-700">
                    <div className="p-3 rounded-lg bg-[#AEEBDC]/20 border border-[#AEEBDC]">
                      <div className="font-bold text-[#163832] mb-1">1. Contextual Understanding</div>
                      <div>
                        Utilized the InternVL 2.5-4B VQA model alongside Gemini 3 Flash to generate representative descriptive captions for diverse scenes.
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-[#FCEF91]/30 border border-[#FCEF91]">
                      <div className="font-bold text-[#163832] mb-1">2. Hybrid Verification</div>
                      <div>
                        YOLO11 executes initial object detection, fed into CLIP ViT-B/32 to evaluate cosine similarity with captions as a contextual safety filter.
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-[#AEEBDC]/20 border border-[#AEEBDC]">
                      <div className="font-bold text-[#163832] mb-1">3. Dataset Construction</div>
                      <div>
                        Curated 1,600 images across 8 categories (actual fires, campfires, cooking, fireworks, and non-fire visually similar scenes).
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. Key Achievements */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-[#FCEF91]/40 to-[#AEEBDC]/40 border border-[#163832]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#163832] mb-1 flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#163832]" />
                      Key Achievements
                    </h4>
                    <ul className="text-xs text-[#163832] space-y-1">
                      <li>
                        <strong>Publication:</strong> Co-authored <em>"Integration of Vision and Contextual Information and Model Comparison for Performance Improvement of Fire Detection Systems"</em>
                      </li>
                      <li>
                        <strong>Conference Award:</strong> Won Bronze / Excellent Paper Award at the 2026 KIT Summer Comprehensive Academic Conference (제 26-178 호)
                      </li>
                      <li>
                        <strong>Official Copyright:</strong> Registered Software Copyright (제 C-2026-025665 호) with Korea Copyright Commission
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
