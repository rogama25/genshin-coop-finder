import { scrollbarColor, scrollbarGutter, scrollbarWidth } from "tailwind-scrollbar-utilities";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "floating-card": "0 0 50px 5px rgba(0, 0, 0, 1)",
      },
      fontFamily: {
        "gotu": ["Gotu, sans-serif"]
      },
    },
  },
  plugins: [
    scrollbarGutter(),
    scrollbarWidth(),
    scrollbarColor()
  ],
};
export default config;
