import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "focus-visible:ring-2",
    "focus-visible:ring-flesh-400",
    "has-[:focus-visible]:ring-2",
    "has-[:focus-visible]:ring-flesh-400",
    "transition",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "checkbox-unchecked": "url('/images/icons/checked-false.svg')",
        "checkbox-checked": "url('/images/icons/checked-true.svg')",
        "chevron-down-dark": "url('/images/icons/chevron-down-dark.svg')",
        "chevron-down-light": "url('/images/icons/chevron-down-light.svg')",
        "close-btn": "url('/images/icons/close-btn.svg')",
        "close-btn-hover": "url('/images/icons/close-btn-hover.svg')",
        "close-btn-active": "url('/images/icons/close-btn-active.svg')",
        "radio-false": "url('/images/icons/radio-false.svg')",
        "radio-true": "url('/images/icons/radio-true.svg')",
        "filter-icon": "url('/images/icons/filter-chevron-down.svg')",
        "star-icon": "url('/images/icons/star-icon.svg')",
        "drag-and-drop": "url('/images/icons/drag-and-drop.svg')",
        "chevron-up-dark": "url('/images/icons/chevron-up-dark.svg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        flesh: {
          "50": "#fff4ed",
          "100": "#ffe6d5",
          "200": "#ffbe98",
          "300": "#ffa272",
          "400": "#fd713a",
          "500": "#fc4c13",
          "600": "#ed3109",
          "700": "#c4210a",
          "800": "#9c1c10",
          "900": "#7d1a11",
          "950": "#440a06",
        },
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
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            p: {
              marginTop: "0.25rem",
              marginBottom: "0.25rem",
            },
            ul: {
              marginTop: "0.25rem",
              marginBottom: "0.25rem",
              marginLeft: "0.5rem",
            },
            ol: {
              marginTop: "0.25rem",
              marginBottom: "0.25rem",
              marginLeft: "0.5rem",
            },
            li: {
              marginTop: "0.25rem",
              marginBottom: "0.25rem",
              marginLeft: "0.5rem",
            },
            "h1, h2, h3, h4, blockquote": {
              marginTop: "0.75rem",
              marginBottom: "0.75rem",
            },
            blockquote: {
              marginLeft: "0.5rem",
            },
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [typography, require("tailwindcss-animate")],
};
export default config;
