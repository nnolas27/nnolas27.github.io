import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          500: '#06b6d4',
          900: '#164e63',
        },
        blue: {
          900: '#0f172a',
        },
        gray: {
          800: '#1f2937',
          900: '#111827',
        }
      },
    },
  },
  plugins: [],
} satisfies Config;