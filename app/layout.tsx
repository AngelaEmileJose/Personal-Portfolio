import "./globals.css"
import type React from "react" // Import React

export const metadata = {
  title: "Angela Emile Jose - Robotics Engineer & AI Researcher",
  description:
    "Portfolio of Angela Emile Jose, Computer Science graduate and Incoming Robotics Engineer at WIM Corp, specializing in AI research, robotics systems, and human-centered design.",
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
