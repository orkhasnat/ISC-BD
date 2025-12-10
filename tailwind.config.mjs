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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme("colors.foreground"),
            fontFamily: theme("fontFamily.body"),
            p: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
              lineHeight: '1.75',
              fontSize: '1.125rem', // lg
            },
            'h1, h2, h3, h4': {
              color: theme("colors.primary.DEFAULT"),
              fontFamily: theme("fontFamily.heading"),
              fontWeight: '700',
            },
            a: {
              color: theme("colors.primary.DEFAULT"),
              '&:hover': {
                color: theme("colors.primary.foreground"),
                backgroundColor: theme("colors.primary.DEFAULT"),
                textDecoration: 'none',
              },
              borderRadius: '0.25rem',
              padding: '0 0.25rem',
              transition: 'all 0.2s',
            },
            'ul > li::marker': {
              color: theme("colors.secondary.DEFAULT"),
            },
            'ol > li::marker': {
              color: theme("colors.secondary.DEFAULT"),
              fontWeight: '600',
            },
            blockquote: {
              borderLeftColor: theme("colors.secondary.DEFAULT"),
              color: theme("colors.muted.foreground"),
              fontStyle: 'italic',
            },
            code: {
              color: theme("colors.secondary.DEFAULT"),
              backgroundColor: theme("colors.muted.DEFAULT"),
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '600',
            },
            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            }
          },
        },
      }),
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
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}