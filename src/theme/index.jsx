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
