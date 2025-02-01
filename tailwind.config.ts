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
                    DEFAULT: '#2E9896',
                },
                secondary: {
                    DEFAULT: '#177675',
                },
                third: {
                    DEFAULT: "#005353"
                },
                accent: {
                    DEFAULT: '#272727',
                },
                success: {
                    DEFAULT: '#2E7D32',
                },
                warning: {
                    DEFAULT: '#F57C00',
                },
                error: {
                    DEFAULT: '#D32F2F',
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
                }
            }
        ]
    }
} satisfies Config;
