import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  jsxFramework: "qwik",

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  globalCss: {
    html: {
      fontSize: "10px",
    },
  },

  // Useful for theme customization
  theme: {
    tokens: {
      colors: {},
      fontSizes: {
        s: { value: "3rem" },
      },
    },
    breakpoints: {
      sp: "0px",
      pc: "749px",
    },
    extend: {},
  },

  // The output directory for your css system
  outdir: "styled-system",
});
