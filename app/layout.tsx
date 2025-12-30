import "./globals.css"
import type React from "react" // Import React

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
      <body className="font-serif italic bg-quaternary text-primary">{children}</body>
    </html>
  )
}
