import { PaletteMode } from "@mui/material";
import { Theme, createTheme } from "@mui/material/styles";
import { Plus_Jakarta_Sans } from "next/font/google";
import { createContext, useEffect, useMemo, useState } from "react";

export const plus = Plus_Jakarta_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const tokens = (mode: string) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        primary: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#1F2A40",
          500: "#141b2d",
          600: "#101624",
          700: "#0c101b",
          800: "#080b12",
          900: "#040509",
        },
        greenAccent: {
          100: "#dbf5ee",
          200: "#b7ebde",
          300: "#94e2cd",
          400: "#70d8bd",
          500: "#4cceac",
          600: "#3da58a",
          700: "#2e7c67",
          800: "#1e5245",
          900: "#0f2922",
        },
        redAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
        },
        blueAccent: {
          100: "#e1e2fe",
          200: "#c3c6fd",
          300: "#a4a9fc",
          400: "#868dfb",
          500: "#6870fa",
          600: "#535ac8",
          700: "#3e4396",
          800: "#2a2d64",
          900: "#151632",
        },
      }
    : {
        grey: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
        primary: {
          100: "#040509",
          200: "#080b12",
          300: "#0c101b",
          400: "#f2f0f0",
          500: "#141b2d",
          600: "#1F2A40",
          700: "#727681",
          800: "#a1a4ab",
          900: "#d0d1d5",
        },
        greenAccent: {
          100: "#0f2922",
          200: "#1e5245",
          300: "#2e7c67",
          400: "#3da58a",
          500: "#4cceac",
          600: "#70d8bd",
          700: "#94e2cd",
          800: "#b7ebde",
          900: "#dbf5ee",
        },
        redAccent: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#af3f3b",
          500: "#db4f4a",
          600: "#e2726e",
          700: "#e99592",
          800: "#f1b9b7",
          900: "#f8dcdb",
        },
        blueAccent: {
          100: "#151632",
          200: "#2a2d64",
          300: "#3e4396",
          400: "#535ac8",
          500: "#6870fa",
          600: "#868dfb",
          700: "#a4a9fc",
          800: "#c3c6fd",
          900: "#e1e2fe",
        },
      }),
});

export const themeSettings = (mode: PaletteMode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    color: {
      headerBgColor: "#151e2d",
    },
    display: {
      flex: "flex",
      block: "block",
      inline: "inline",
      inlineBlock: "inline-block",
      table: "table",
      tableCell: "table-cell",
      tableRow: "table-row",
    },
    typography: {
      fontFamily: plus.style.fontFamily,
      h1: {
        fontWeight: 600,
        fontSize: "2.25rem",
        lineHeight: "2.75rem",
        fontFamily: plus.style.fontFamily,
      },
      h2: {
        fontWeight: 600,
        fontSize: "1.875rem",
        lineHeight: "2.25rem",
        fontFamily: plus.style.fontFamily,
      },
      h3: {
        fontWeight: 600,
        fontSize: "1.5rem",
        lineHeight: "1.75rem",
        fontFamily: plus.style.fontFamily,
      },
      h4: {
        fontWeight: 600,
        fontSize: "1.3125rem",
        lineHeight: "1.6rem",
      },
      h5: {
        fontWeight: 600,
        fontSize: "1.125rem",
        lineHeight: "1.6rem",
      },
      h6: {
        fontWeight: 600,
        fontSize: "1rem",
        lineHeight: "1.2rem",
      },
      button: {
        fontWeight: 400,
      },
      body1: {
        fontSize: "0.875rem",
        fontWeight: 400,
        lineHeight: "1.334rem",
      },
      body2: {
        fontSize: "0.75rem",
        letterSpacing: "0rem",
        fontWeight: 400,
        lineHeight: "1rem",
      },
      subtitle1: {
        fontSize: "0.875rem",
        fontWeight: 400,
      },
      subtitle2: {
        fontSize: "0.875rem",
        fontWeight: 400,
      },
    },
    transitions: {
      easing: {
        easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
        easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
        easeIn: "cubic-bezier(0.4, 0, 1, 1)",
        sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          ".MuiPaper-elevation9, .MuiPopover-root .MuiPaper-elevation": {
            boxShadow:
              "rgb(145 158 171 / 30%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px !important",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: "7px",
          },
        },
      },
    },
  };
};

const getInitialMode = () => {
  const storedMode = localStorage.getItem("colorMode");
  return storedMode ? (storedMode === "dark" ? "dark" : "light") : "light";
};

export const ColorModeContext = createContext<{ toggleColorMode: () => void }>({
  toggleColorMode: () => {},
});

export const useMode = (): [Theme, { toggleColorMode: () => void }] => {
  const [mode, setMode] = useState<PaletteMode>(getInitialMode);

  useEffect(() => {
    localStorage.setItem("colorMode", mode);
  }, [mode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const baselightTheme = useMemo(
    () => createTheme(themeSettings(mode)),
    [mode]
  );
  return [baselightTheme, colorMode];
};
