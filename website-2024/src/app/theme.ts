import { extendTheme } from "@mui/joy";
import "@fontsource-variable/source-sans-3";

declare module '@mui/joy/styles' {
  interface Palette {
    pageLink: {
      primary: string;
    };
  }
}

const theme = extendTheme({
  typography: {},
  fontFamily: {
    display: '"Source Sans 3 Variable"',
    body: '"Source Sans 3 Variable"',
  },
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
        pageLink: {primary: "var(--joy-palette-primary-400)"},
        
      },
    },
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
        pageLink: {primary: "white"},
      },
    },
  },
});
export default theme;
