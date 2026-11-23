"use client"

import React from "react"
import SpotlightCard from "@/components/reactbits/SpotlightCard"
import CountUp from "@/components/reactbits/CountUp"
import EvidenceAnnotation from "@/components/ui/EvidenceAnnotation"

export default function AtAGlance() {
  const metrics = [
    {
      value: 156,
      display: "156",
      isCountable: true,
      label: "evaluations in my health LLM audit (3 models × 13 questions × 4 variants)",
      method: "3 models × 13 questions × 4 language variants, blinded rubric scoring (quality 0–6; unsafe = 0 on accuracy or harmful advice)",
      n: "156 evaluations (52 per model)",
      limitation: "Each unsafe percentage is only 1–4 questions; one written rubric involving human judgement",
    },
    {
      value: 30,
      display: "30",
      isCountable: true,
      label: "women surveyed to shape Nadakkaam",
      method: "User research interviews with homemaker mothers aged 40–75 in Kerala across neighbourhood networks",
      n: "30 women",
      limitation: "Convenience sample from personal network; not representative of the wider population, used to shape design rather than make population claims",
    },
    {
      value: 271,
      display: "271 / 334",
      isCountable: false, // Ratio format
      label: "LLM-generated specifications that passed formal verification",
      method: "CBMC bounded model checker on 27 Stateflow-derived C programs verifying LLM translated logic",
      n: "334 formal specs across 27 C programs",
      limitation: "Tested on Stateflow-derived C programs only; unproven on general C codebases",
    },
    {
      value: 1600,
      display: "1,600",
      isCountable: true,
      label: "images in my fire-detection ablation",
      method: "Ablation study on 1,600 hand-curated images across 8 scene types (fire, bonfire, candle, cooking, fireplace, fireworks, cigarette, look-alikes)",
      n: "1,600 images",
      limitation: "The hybrid gain (0.833) over CLIP alone (0.826) was not statistically proven beyond run-to-run variance",
    },
    {
      value: 90,
      display: "90",
      isCountable: true,
      label: "teams beaten at KICS (Grand Prize 대상)",
      method: "KICS Fall Comprehensive Academic Conference smart hearing aid system presentation",
      n: "90 collegiate engineering teams",
      limitation: "Evaluated in academic competition setting and lab conditions",
    },
  ]

  return (
    <section className="py-14 bg-background border-b border-border/70 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="mb-6">
          <span className="font-mono text-xs uppercase tracking-wider text-[#D6427D] font-semibold">
            Evidence at a glance
          </span>
          <h2 className="text-2xl font-serif font-bold text-foreground mt-1">
            Real numbers, no approximations
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {metrics.map((m, index) => (
            <SpotlightCard
              key={index}
              className="p-5 flex flex-col justify-between h-full bg-card/60 hover:bg-card transition-all"
            >
              <div>
                <div className="text-3xl lg:text-4xl font-serif font-bold text-foreground tracking-tight">
                  <EvidenceAnnotation
                    claim={m.label}
                    method={m.method}
                    n={m.n}
                    limitation={m.limitation}
                  >
                    {m.isCountable ? (
                      <CountUp to={m.value} duration={1.6} />
                    ) : (
                      <span>{m.display}</span>
                    )}
                  </EvidenceAnnotation>
                </div>
                <p className="mt-3 text-xs font-sans text-muted-foreground leading-relaxed">
                  {m.label}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                <span className="text-accent/90 font-medium">Verified metric</span>
                <span>0{index + 1}</span>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  )
}
