import "./globals.css"
import type React from "react" // Import React

export const metadata = {
  title: "Angela Emile Jose - Computer Science Researcher & Robotics Engineer (Incoming @ WIM Corp)",
  description:
    "Portfolio of Angela Emile Jose. Designing tangible, human-centered systems at the intersection of code, physical space, and social impact.",
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
