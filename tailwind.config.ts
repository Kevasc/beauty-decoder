import type { Config } from "tailwindcss";

const config: Config = {
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
        purple: {
          main: "#b970a5",
        },
      },
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif", "mono"],
      },
    },
  },
  plugins: [],
};
export default config;
