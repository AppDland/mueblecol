import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2E9896',
        secondary: '#005353',
        accent: '#177675',
        neutral: '#272727',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#2E9896",
          "secondary": "#005353",
          "accent": "#177675",
          "neutral": "#272727",
          "base-100": "#ffffff",
        },
      },
    ],
  },
} satisfies Config;
