"use client";
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ColorModeContext, useMode } from "./theme";
import StyledComponentsRegistry from "./styledregistry";

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [baselightTheme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <StyledComponentsRegistry>
        <ThemeProvider theme={baselightTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {children}
        </ThemeProvider>
      </StyledComponentsRegistry>
    </ColorModeContext.Provider>
  );
}
