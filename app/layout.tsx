import "./globals.css"
import type React from "react" // Import React

export const metadata = {
  title: "Angela Emile Jose - Computer Science Student & Researcher",
  description:
    "Portfolio of Angela Emile Jose, a Computer Science student at Kyungpook National University specializing in software engineering, AI research, and web development.",
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
