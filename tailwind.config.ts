/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
import cn from "./src/helpers/cn";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/helpers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
      },
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        cabinet: ["var(--font-cabinet)"],
        hello: ["var(--font-hello)"],
      },
      animation: {
        linkunderline: "linkunderline 300ms ease-in-out both",
      },
      keyframes: {
        linkunderline: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      margin: {
        17: 68,
      },
      colors: {
        "base-border-color": colors.black,
        text: {
          light: "#fdfdfd",
          headline: "#1D1D1D",
          DEFAULT: "#1D1D1D",
          disabled: "#c3c5c4",
        },
        primaryBg: {
          DEFAULT: "#e3e3ff",
        },
        primary: {
          DEFAULT: "#00694c",
        },
        secondary: {
          DEFAULT: "#d1f2e3",
          texture: "#a0ebc8",
        },
        terciary: {
          DEFAULT: "#eff5f6",
        },
        appointment: {
          DEFAULT: "#ff9c09",
        },
      },
      width: ({ theme }) => {
        return {
          xs: theme("maxWidth.xs"),
          sm: theme("maxWidth.sm"),
          md: theme("maxWidth.md"),
          lg: theme("maxWidth.lg"),
          xl: theme("maxWidth.xl"),
          "2xl": theme("maxWidth.2xl"),
          "3xl": theme("maxWidth.3xl"),
          "4xl": theme("maxWidth.4xl"),
          "5xl": theme("maxWidth.5xl"),
          "6xl": theme("maxWidth.6xl"),
          "7xl": theme("maxWidth.7xl"),
          "8xl": theme("maxWidth.8xl"),
        };
      },
      height: ({ theme }) => {
        return {
          xs: theme("maxWidth.xs"),
          sm: theme("maxWidth.sm"),
          md: theme("maxWidth.md"),
          lg: theme("maxWidth.lg"),
          xl: theme("maxWidth.xl"),
          "2xl": theme("maxWidth.2xl"),
          "3xl": theme("maxWidth.3xl"),
          "4xl": theme("maxWidth.4xl"),
          "5xl": theme("maxWidth.5xl"),
          "6xl": theme("maxWidth.6xl"),
          "7xl": theme("maxWidth.7xl"),
          "8xl": theme("maxWidth.8xl"),
        };
      },
      minWidth: ({ theme }) => {
        return {
          xs: theme("maxWidth.xs"),
          sm: theme("maxWidth.sm"),
          md: theme("maxWidth.md"),
          lg: theme("maxWidth.lg"),
          xl: theme("maxWidth.xl"),
          "2xl": theme("maxWidth.2xl"),
          "3xl": theme("maxWidth.3xl"),
          "4xl": theme("maxWidth.4xl"),
          "5xl": theme("maxWidth.5xl"),
          "6xl": theme("maxWidth.6xl"),
          "7xl": theme("maxWidth.7xl"),
          "8xl": theme("maxWidth.8xl"),
        };
      },
      minHeight: ({ theme }) => {
        return {
          xs: theme("maxWidth.xs"),
          sm: theme("maxWidth.sm"),
          md: theme("maxWidth.md"),
          lg: theme("maxWidth.lg"),
          xl: theme("maxWidth.xl"),
          "2xl": theme("maxWidth.2xl"),
          "3xl": theme("maxWidth.3xl"),
          "4xl": theme("maxWidth.4xl"),
          "5xl": theme("maxWidth.5xl"),
          "6xl": theme("maxWidth.6xl"),
          "7xl": theme("maxWidth.7xl"),
          "8xl": theme("maxWidth.8xl"),
        };
      },
    },
  },
  plugins: [
    "prettier-plugin-tailwindcss",
    ({ addBase }) => {
      addBase({
        ".link": {
          [`@apply ${cn(
            "text-green-800 font-bold hover:text-gray-700 hover:underline"
          )} !important`]: {},
        },
        ".link-light": {
          [`@apply ${cn(
            "text-white font-bold hover:text-white/80 hover:underline"
          )} !important`]: {},
        },
        ".link-action": {
          [`@apply ${cn(
            "relative text-green-800 font-bold transition-all duration-300 ease-out max-w-fit h-fit",
            "hover:text-gray-700 hover:after:bg-gray-700",
            "after:w-full after:h-0.5 after:bg-green-800 after:absolute after:left-0 after:-bottom-0.5"
          )} !important`]: {},
        },
        ".link-action-light": {
          [`@apply ${cn(
            "relative text-white font-bold transition-all duration-300 ease-out max-w-fit h-fit",
            "hover:text-gray-300 hover:after:bg-gray-300",
            "after:w-full after:h-0.5 after:bg-white after:absolute after:left-0 after:-bottom-0.5"
          )} !important`]: {},
        },
        ".h1": {
          [`@apply ${cn("text-5xl")} !important`]: {},
        },
        ".h2": {
          [`@apply ${cn("text-3xl font-semibold")} !important`]: {},
        },
        ".h3": {
          [`@apply ${cn("text-2xl font-semibold")} !important`]: {},
        },
        ".h4": {
          [`@apply ${cn("text-xl font-semibold")} !important`]: {},
        },
        ".h5": {
          [`@apply ${cn("text-lg font-semibold")} !important`]: {},
        },
        ".h6": {
          [`@apply ${cn("text-lg font-semibold")} !important`]: {},
        },
        ".ring-input": {
          [`@apply ${cn("ring-4 ring-primary/50")} !important`]: {},
        },
        ".container": {
          [`@apply ${cn(
            "mx-auto px-5 py-12 max-w-[96rem]",
            "md:px-12 md:py-16",
            "lg:p-16",
            "xl:p-20"
          )} !important`]: {},
        },
      });
    },
  ],
  important: true,
};
