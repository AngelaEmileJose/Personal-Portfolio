import "./globals.css"
import type React from "react"
import type { Metadata } from "next"
import { Newsreader, Inter, JetBrains_Mono, Noto_Sans_Malayalam } from "next/font/google"
import SmoothScroll from "@/components/animations/SmoothScroll"

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

const notoSansMalayalam = Noto_Sans_Malayalam({
  subsets: ["malayalam"],
  variable: "--font-malayalam",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://angelaemilejose.vercel.app"),
  title: "Angela Emile Jose | Auditing and designing AI for the people it quietly fails",
  description:
    "CS (AI/ML) graduate who audits language models in Malayalam, builds verification pipelines that catch hallucinations, and co-designs community health programmes. Kochi, India · Daegu, South Korea.",
  openGraph: {
    title: "Angela Emile Jose | Auditing and designing AI for the people it quietly fails",
    description:
      "CS (AI/ML) graduate who audits language models in Malayalam, builds verification pipelines that catch hallucinations, and co-designs community health programmes.",
    type: "website",
    url: "https://angelaemilejose.vercel.app",
    images: [
      {
        url: "/hero-photo.jpg",
        width: 1200,
        height: 630,
        alt: "Angela Emile Jose",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Angela Emile Jose | Auditing and designing AI for the people it quietly fails",
    description:
      "CS (AI/ML) graduate who audits language models in Malayalam, builds verification pipelines that catch hallucinations, and co-designs community health programmes.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${inter.variable} ${jetbrainsMono.variable} ${notoSansMalayalam.variable} scroll-smooth`}
    >
      <body className="bg-background text-foreground font-sans min-h-screen selection:bg-accent/20 selection:text-accent flex flex-col">
        {/* Accessible skip-to-content link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Skip to content
        </a>
        <SmoothScroll>
          <div className="flex-1 flex flex-col">{children}</div>
        </SmoothScroll>
      </body>
    </html>
  )
}
