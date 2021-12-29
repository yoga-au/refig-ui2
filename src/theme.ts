import { globalCss, createStitches } from "@stitches/core";

// const globalStyle = globalCss({
//   "@import":
//     "url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');",
//   "*": { boxSizing: "border-box", margin: 0, padding: 0 },
//   body: { position: "relative", fontFamily: "Inter, sans-serif" },
// });

const { theme } = createStitches({
  theme: {
    colors: {
      blue: "#18a0fb",
      purple: "#7b61ff",
      hotPink: "#ff00ff",
      green: "#1bc47d",
      red: "#f24822",
      yellow: "#ffeb00",

      black8: "rgba(0, 0, 0, 0.8)",
      black8Opaque: "#333333",
      black3: "rgba(0, 0, 0, .3)",
      black3Opaque: "#B3B3B3",
      white8: "rgba(255, 255, 255, .8)",
      white4: "rgba(255, 255, 255, .4)",

      grey: "#f0f0f0",
      silver: "#e5e5e5",
      hud: "#222222",
      toolbar: "#2c2c2c",

      black1: "rgba(0, 0, 0, .1)",
      blue3: "rgba(24, 145, 251, .3)",
      purple4: "rgba(123, 97, 255, .4)",
      hoverFill: "rgba(0, 0, 0, .06)",
      selectionA: "#daebf7",
      selectionB: "#edf5fa",
      white2: "rgba(255, 255, 255, .2)",
    },
    fonts: {
      inter: "Inter, sans-serif",
    },
    fontSizes: {
      11: "0.6875rem",
      12: "0.75rem",
      13: "0.8125rem",
      14: "0.875rem",
    },
    fontWeights: {
      normal: 400,
      medium: 500,
      bold: 600,
    },
    lineHeights: {
      normal: "16px",
      large: "24px",
    },
    letterSpacings: {
      posSm: "0.005em",
      negSm: "0.01em",
      posMd: "0",
      negMd: "0.005em",
      posLg: "-0.0025em",
      negLg: "0.0025em",
      posXl: "-.001em",
      negXl: "-.001em",
    },
    radii: {
      sm: 2,
      md: 5,
      lg: 6,
    },
    shadows: {
      hud: "0 5px 17px rgba(0, 0, 0, .2), 0 2px 7px rgba(0, 0, 0, .15)",
      window: "0 2px 14px rgba(0, 0, 0, .15)",
    },
    space: {
      xxxsm: 4,
      xxsm: 8,
      xs: 16,
      sm: 24,
      md: 32,
      lg: 40,
      xl: 48,
      xxl: 64,
      xxxl: 80,
    },
  },
});

export { theme };
