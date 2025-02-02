import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        destacable: "#fbb914"
      },
      animation: {
        wiggle: "wiggle 2s ease-in-out infinite"
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(-10deg) scale(1.15)' },
          '50%': { transform: 'rotate(10deg) scale(0.8)' },
          '100%': { transform: 'rotate(-10deg) scale(1.15)' }
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
