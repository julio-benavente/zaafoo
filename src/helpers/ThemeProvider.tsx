"use client";

import { createTheme, PaletteColorOptions, Theme } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";

declare module "@mui/material/styles" {
  interface CustomPalette {
    default: PaletteColorOptions;
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

const ThemeProvider = ({ children }: { children: any }) => {
  const { palette } = createTheme();
  const { augmentColor } = palette;
  const createColor = (mainColor: any) =>
    augmentColor({ color: { main: mainColor } });
  const theme: Theme = createTheme({
    palette: {
      default: createColor("#000"),
    },
  });

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
