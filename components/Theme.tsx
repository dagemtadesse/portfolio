"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { ReactNode } from "react";

export const Theme: React.FC<{ children: ReactNode }> = ({ children }) => {
  const theme = createTheme({
    typography: {
      fontFamily: '"DM Sans", sans-serif',
    },
    palette: {
      mode: "dark",
      background: { default: "#000", paper: "#000" },
      primary: {
        main: "#f94144",
      },
      divider: 'rgba(255,255,255,0.35)',
      secondary: {
        main: "#fff",
      },
      text: {
        primary: "#fff",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: { textTransform: "capitalize", borderRadius: 1000 },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
