import type { ThemeOptions } from "@mui/material";
import { useMemo } from "react";
import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material";

import palette from "./palette";
import shadows from "./shadows";
import typography from "./typography";
import GlobalStyles from "./globalStyles";
import customShadows from "./customShadows";
import componentsOverride from "./overrides";

interface ThemeProviderProps {
  children: JSX.Element | JSX.Element[];
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const themeOptions = useMemo<ThemeOptions>(
    () => ({
      palette,
      shape: { borderRadius: 6 },
      typography,
      shadows: shadows(),
      customShadows: customShadows(),
    }),
    []
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
