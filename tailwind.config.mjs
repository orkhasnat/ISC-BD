/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Nature/Paper/NGO inspired palette
        primary: {
          DEFAULT: "#2c5f2d", // Forest Green
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#975a16", // Earthy Clay
          foreground: "#ffffff",
        },
        background: "#Fdfbf7", // Warm Paper
        foreground: "#1c1917", // Warm Black (Stone 900)
        muted: {
          DEFAULT: "#e6e2dd", // Recycled paper look
          foreground: "#57534e", // Stone 600
        },
        accent: {
          DEFAULT: "#f0fdf4", // Green 50
          foreground: "#166534", // Green 700
        },
        border: "#d6d3d1", // Stone 300
        input: "#d6d3d1",
        ring: "#2c5f2d",
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
      fontFamily: {
        heading: ['"Merriweather"', 'serif'],
        body: ['"Lato"', 'sans-serif'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
            from: { opacity: "0", transform: "translateY(10px)" },
            to: { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}