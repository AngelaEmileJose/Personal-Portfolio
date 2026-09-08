"use client"

import React from "react"
import Image from "next/image"
import { Award, ShieldCheck, FileText } from "lucide-react"

export function FireDetectionShowcase() {
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
        <div className="text-xs font-bold text-[#25534A]">
          2026 Capstone Research
        </div>
      </div>

      {/* Main Project Card (Clean & Focused) */}
      <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#AEEBDC] hover:border-[#FCEF91] transition-all duration-300">
        {/* Top Decorative Gradient Accent Bar */}
        <div className="h-2 w-full bg-gradient-to-r from-[#AEEBDC] via-[#FCEF91] to-[#AEEBDC]" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 items-center">
          {/* Left Column: Dashboard Preview & Award Banner */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div className="relative h-52 sm:h-64 rounded-xl overflow-hidden shadow-md border border-gray-100 bg-slate-900">
              <Image
                src="/fire-detection-dashboard.jpg"
                alt="Multimodal Fire Detection Dashboard"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white text-[10px] sm:text-xs font-mono">
                <span className="bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded border border-white/20">
                  F2-Score: 0.833 (Optimal)
                </span>
                <span className="bg-[#FCEF91] text-[#163832] font-bold px-2 py-0.5 rounded">
                  YOLO11 + CLIP
                </span>
              </div>
            </div>

            {/* Award Banner Under Image */}
            <div className="mt-3.5 p-3.5 rounded-xl bg-gradient-to-r from-[#FCEF91]/40 via-[#AEEBDC]/30 to-[#FCEF91]/40 border border-[#FCEF91] flex items-start gap-3">
              <div className="p-2 rounded-lg bg-[#FCEF91] text-[#163832] shadow-sm flex-shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div className="text-xs text-[#163832] leading-tight">
                <div className="font-extrabold text-[12px] text-[#163832]">
                  Bronze / Excellent Paper Award (동상)
                </div>
                <div className="text-[#25534A] text-[11px] mt-0.5">
                  2026 Korean Institute of Information Technology (KIT) Conference · 제 26-178 호
                </div>
                <div className="text-[10px] font-mono text-[#163832]/80 mt-0.5">
                  Registered Software Copyright: 제 C-2026-025665 호
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Title, Short Description, Tags & Highlights */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#25534A] mb-2 font-semibold">
                <span>Capstone Project</span>
                <span>•</span>
                <span className="text-[#163832] bg-[#AEEBDC]/50 px-2 py-0.5 rounded-md font-bold">2026</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#163832] tracking-tight mb-3">
                Hybrid Fire Detection System (YOLO11 + CLIP)
              </h3>

              {/* Front Description */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                This project introduces a hybrid fire detection system that integrates YOLO11 for visual object detection with the CLIP multimodal model to understand scene context and minimize false alarms. By effectively reducing critical false negatives and achieving an optimal F2-score, the system's development led to an award-winning conference paper and a registered software copyright.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {["YOLO11", "CLIP ViT-B/32", "InternVL 2.5-4B", "Gemini 3 Flash", "Multimodal VQA", "F2-Score: 0.833", "Computer Vision"].map(
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

            {/* Key Achievements Bullet Box */}
            <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200">
              <div className="text-xs font-bold text-[#163832] mb-1.5 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#163832]" />
                <span>Publication & Registration</span>
              </div>
              <div className="text-[11px] sm:text-xs text-gray-600 leading-relaxed space-y-1">
                <p>
                  <strong>Paper:</strong> <em>"Integration of Vision and Contextual Information and Model Comparison for Performance Improvement of Fire Detection Systems"</em>
                </p>
                <p>
                  <strong>Registered Software:</strong> <em>App for Fire Detection with YOLO11 and CLIP</em> (한국저작권위원회)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
