import "./globals.css"
import type React from "react"
import type { Metadata } from "next"
import { Roboto, Roboto_Condensed, Roboto_Slab, Noto_Sans_Malayalam } from "next/font/google"
import SmoothScroll from "@/components/animations/SmoothScroll"

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
})

const robotoSlab = Roboto_Slab({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-roboto-slab",
  display: "swap",
})

const robotoCondensed = Roboto_Condensed({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
  display: "swap",
})

const notoSansMalayalam = Noto_Sans_Malayalam({
  weight: ["400", "700"],
  subsets: ["malayalam"],
  variable: "--font-malayalam",
  display: "swap",
  preload: false,
})

export const metadata: Metadata = {
  metadataBase: new URL("https://angelaemilejose.vercel.app"),
  title: "Angela Emile Jose | Making technology that people can trust",
  description:
    "I like making technology that people can trust. Across hearing aids, fire safety, health chatbots and community programmes, I work on one question: does this actually help the person using it?",
  openGraph: {
    title: "Angela Emile Jose | Making technology that people can trust",
    description:
      "I like making technology that people can trust. Across hearing aids, fire safety, health chatbots and community programmes, I work on one question: does this actually help the person using it?",
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
    title: "Angela Emile Jose | Making technology that people can trust",
    description:
      "I like making technology that people can trust. Across hearing aids, fire safety, health chatbots and community programmes, I work on one question: does this actually help the person using it?",
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
      className={`${roboto.variable} ${robotoSlab.variable} ${robotoCondensed.variable} ${notoSansMalayalam.variable} scroll-smooth`}
    >
      <body className="bg-background text-foreground font-sans min-h-screen selection:bg-accent/30 selection:text-foreground flex flex-col">
        {/* Accessible skip-to-content link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-foreground focus:font-semibold focus:rounded-lg focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-ring"
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
