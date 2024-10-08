import type { Config } from "tailwindcss";

const { fontFamily } = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', ...fontFamily.sans],
        play:["Playfair Display", "system-ui"],
        dm:["DM Sans", "sans-serif"],
        lato:["Lato", "sans-serif"],
        roboto:["Roboto", "sans-serif"],
        mont:["Montserrat", "sans-serif"],
        bebas:["Bebas Neue", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
