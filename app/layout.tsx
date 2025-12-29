import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Nathan Sterling - Web Developer & Designer",
  description:
    "Portfolio of Nathan Sterling, a professional web developer and designer specializing in modern, responsive web solutions.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-quaternary text-primary`}>{children}</body>
    </html>
  )
}
