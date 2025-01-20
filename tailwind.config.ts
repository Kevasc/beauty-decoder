import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "58": "58px",
        "button-height": "var(--button-default-height)",
        "button-padding": "var(--button-horizontal-padding)",
      },
      fontSize: {
        "18": "18px",
      },
      borderRadius: {
        "11": "11px",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        button: "var(--button-default-border-radius)",
      },
      colors: {
        background: "#F3E8FF",
        foreground: "hsl(var(--foreground))",
        purple: {
          main: "#b970a5",
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
          DEFAULT: "#E1BEE7",
          foreground: "hsl(var(--primary-foreground))",
          dark: "var(--button-primary-color-dark)",
          light: "var(--button-primary-color-light)",
          hover: "var(--button-primary-color-hover)",
          active: "var(--button-primary-color-active)",
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
          DEFAULT: "#B069DB",
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
        "button-primary": "#b970a5",
        "button-primary-light": "#F3E8FF",
        "button-primary-text": "#ffffff",
        "button-primary-hover": "#701a75",
        "button-primary-active": "#B069DB",
      },
      boxShadow: {
        "custom-glow-large": "0px 0px 30px 5px rgba(171,46,255,0.3)",
      },
      transitionDuration: {
        "transform-speed": "250ms",
        transform: "var(--transform-speed)",
      },
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif", "mono"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
