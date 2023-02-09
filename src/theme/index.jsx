import { useMemo, useContext, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { ThemeMode, darkPalette, lightPalette } from "./palette";
import { ColorModeContext } from "./ThemeContext";

const ThemeCustomization = ({ children }) => {
  const { mode } = useContext(ColorModeContext);
  useEffect(() => {
    console.log("ThemeCustomization", mode);
  }, [mode]);
  const theme = useMemo(
    () =>
      createTheme({
        palette: mode === ThemeMode.light ? lightPalette : darkPalette,
        typography: {
          h1: {
            fontSize: "2rem",
            fontWeight: "bold",
          },
          h2: {
            fontSize: "1.5rem",
            fontWeight: "bold",
          },
          h3: {
            fontSize: "1.3rem",
            fontWeight: "bold",
          },
          subtitle1: {
            fontSize: "0.95rem",
            fontWeight: "bold",
          },
          subtitle2: {
            fontSize: "0.9rem",
            fontWeight: "bold",
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
