import { defineConfig } from "@pandacss/dev";
import Settings from "./src/config/settings";

export default defineConfig({
  jsxFramework: "qwik",

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  globalCss: {
    "*": {
      boxSizing: "border-box",
    },
  },

  // Useful for theme customization
  theme: {
    tokens: {
      colors: {},
      fonts: {
        ja: { value: `${Settings.font.family.ja}` },
        en1: { value: `${Settings.font.family.en1}` },
        en2: { value: `${Settings.font.family.en2}` },
      },
    },
    breakpoints: {
      sp: "0px",
      pc: `${Settings.breakpoint.lv1 + 1}px`,
    },
    extend: {},
  },

  // The output directory for your css system
  outdir: "styled-system",
});
