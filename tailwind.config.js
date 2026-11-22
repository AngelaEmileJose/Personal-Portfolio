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
        sans: ["var(--font-roboto)", "system-ui", "sans-serif"],
        serif: ["var(--font-roboto-slab)", "Georgia", "serif"],
        slab: ["var(--font-roboto-slab)", "Georgia", "serif"],
        mono: ["var(--font-roboto-condensed)", "monospace"],
        condensed: ["var(--font-roboto-condensed)", "sans-serif"],
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
        // Three Core Palette Colors
        cream: {
          DEFAULT: "#F2F0EA", // Primary Background
          100: "#FAF9F6",
          200: "#F2F0EA",
          300: "#E5E2D8",
          400: "#D6D1C4",
        },
        pink: {
          DEFAULT: "#FF78AC", // Primary Accent: highlights, buttons, active states, key tags
          soft: "#FFEBF3",
          light: "#FFA3C5",
          hover: "#F2639B",
          dark: "#D6427D",
        },
        teal: {
          DEFAULT: "#A8D5E3", // Secondary Accent / Surface: cards, borders, secondary highlights
          soft: "#EDF7FA",
          light: "#C5E5EE",
          border: "#8EC5D6",
          dark: "#2A687A",
        },
        ink: {
          DEFAULT: "#1E2328",
          muted: "#4A525D",
          deep: "#111417",
        },
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
