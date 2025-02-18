import type { Config } from "tailwindcss";

const config: Config = {
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
      },
    },
  },
  plugins: [],
};
export default config;
