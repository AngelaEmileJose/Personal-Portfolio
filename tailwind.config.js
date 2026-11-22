/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-newsreader)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
        malayalam: ["var(--font-malayalam)", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          soft: "hsl(var(--accent-soft))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        // Saffron / Coral accent tokens
        saffron: {
          50: "#fff5f0",
          100: "#ffe8df",
          200: "#ffd1c0",
          300: "#ffb299",
          400: "#f78465",
          500: "#d9532f", // Core signature accent
          600: "#c84523",
          700: "#a63417",
          800: "#852a15",
          900: "#6d2615",
        },
        // Warm ink tokens
        ink: {
          50: "#f6f6f7",
          100: "#e5e6e8",
          200: "#cbced2",
          300: "#a6abb3",
          400: "#79808c",
          500: "#5b626e",
          600: "#494e59",
          700: "#3d414a",
          800: "#22252a",
          900: "#121417", // Core near-black ink
          950: "#0b0c0e",
        },
        // Preserved legacy tokens for non-breaking style continuity
        babyYellow: "#FCEF91",
        babyTurquoise: "#AEEBDC",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
