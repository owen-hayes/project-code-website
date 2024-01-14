import { extendTheme } from "@mui/joy";
import "@fontsource-variable/source-sans-3"; // Supports weights 200-900

const theme = extendTheme({
  fontFamily: {
    display: '"Source Sans 3 Variable", sans-serif',
    body: '"Source Sans 3 Variable", sans-serif',
  },

  // Change primary color to #fc4d47. Rest of palette generated from https://m2.material.io/design/color/the-color-system.html#tools-for-picking-colors.
  colorSchemes: {
    light: {
      palette: {
        primary: {
          "50": "#ffebee",
          "100": "#ffcdd1",
          "200": "#f89996",
          "300": "#f1706d",
          "400": "#fc4d47",
          "500": "#ff3a28",
          "600": "#f32e29",
          "700": "#e12123",
          "800": "#d4171b",
          "900": "#c4020d",
        },
      },
    },

    // Primary color is same in light and dark modes
    dark: {
      palette: {
        primary: {
          "50": "#ffebee",
          "100": "#ffcdd1",
          "200": "#f89996",
          "300": "#f1706d",
          "400": "#fc4d47",
          "500": "#ff3a28",
          "600": "#f32e29",
          "700": "#e12123",
          "800": "#d4171b",
          "900": "#c4020d",
        },
      },
    },
  },
});

export default theme;
