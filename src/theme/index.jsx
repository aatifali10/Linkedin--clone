import { useMemo, useContext, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { ThemeMode, darkPalette, lightPalette } from "./palette";
import { ColorModeContext } from "./ThemeContext";

const ThemeCustomization = ({ children }) => {
  const { mode } = useContext(ColorModeContext);
  useEffect(() => {
    // console.log("ThemeCustomization", mode);
  }, [mode]);
  const theme = useMemo(
    () =>
      createTheme({
        palette: mode === ThemeMode.light ? lightPalette : darkPalette,
        typography: {
          fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(","),
          h1: {
            fontSize: "2rem",
            fontWeight: "600",
          },
          h2: {
            fontSize: "1.5rem",
            fontWeight: "600",
          },
          h3: {
            fontSize: "1.3rem",
            fontWeight: "600",
          },
          subtitle1: {
            fontSize: "0.95rem",
            fontWeight: "600",
          },
          subtitle2: {
            fontSize: "0.9rem",
            fontWeight: "600",
          },
          body1: {
            fontSize: "0.95rem",
            fontWeight: "normal",
          },
          body2: {
            fontSize: "0.9rem",
            fontWeight: "normal",
          },
        },

        components: {
          MuiButton: {
            styleOverrides: {
              outlined: {
                textTransform: "capitalize",
                fontWeight: "bold",
                borderWidth: 2,
                ":hover": {
                  borderWidth: 2,
                },
                lineHeight: 1,
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
export default ThemeCustomization;
