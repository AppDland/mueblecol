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
        primary: {
          light: '#3AACA9',
          DEFAULT: '#2E9896',
          dark: '#1B5B5A'
        },
        secondary: {
          light: '#006666',
          DEFAULT: '#005353',
          dark: '#003333'
        },
        third: {
          DEFAULT: "#2A8C8B"
        },
        accent: {
          light: '#1D8E8C',
          DEFAULT: '#177675',
          dark: '#0F4847'
        },
        success: {
          light: '#4CAF50',
          DEFAULT: '#2E7D32',
          dark: '#1B5E20'
        },
        warning: {
          light: '#FFB74D',
          DEFAULT: '#F57C00',
          dark: '#E65100'
        },
        error: {
          light: '#EF5350',
          DEFAULT: '#D32F2F',
          dark: '#C62828'
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#272727'
        }
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#2E9896",
          "primary-focus": "#1B5B5A",
          "primary-content": "#ffffff",

          "secondary": "#005353",
          "secondary-focus": "#003333",
          "secondary-content": "#ffffff",

          "accent": "#177675",
          "accent-focus": "#0F4847",
          "accent-content": "#ffffff",

          "neutral": "#272727",
          "neutral-focus": "#262626",
          "neutral-content": "#ffffff",

          "base-100": "#ffffff",
          "base-200": "#f8f9fa",
          "base-300": "#e9ecef",
          "base-content": "#171717",

          "success": "#2E7D32",
          "warning": "#F57C00",
          "error": "#D32F2F",

          "info": "#0288D1"
        },
        dark: {
          "primary": "#3AACA9",
          "primary-focus": "#2E9896",
          "primary-content": "#ffffff",

          "secondary": "#006666",
          "secondary-focus": "#005353",
          "secondary-content": "#ffffff",

          "accent": "#272727",
          "accent-focus": "#177675",
          "accent-content": "#ffffff",

          "neutral": "#525252",
          "neutral-focus": "#404040",
          "neutral-content": "#ffffff",

          "base-100": "#171717",
          "base-200": "#262626",
          "base-300": "#404040",
          "base-content": "#fafafa",

          "success": "#4CAF50",
          "warning": "#FFB74D",
          "error": "#EF5350",

          "info": "#29B6F6"
        }
      }
    ]
  }
} satisfies Config;
