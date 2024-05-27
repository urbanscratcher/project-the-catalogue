import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Inconsolata"', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
