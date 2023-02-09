import { createContext, useCallback, useEffect, useState } from "react";
import { ThemeMode } from "./palette";

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
  mode: ThemeMode.light,
});

const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState(ThemeMode.light);

  const toggleColorMode = useCallback(() => {
    console.log("ColorModeContext", "toggleColorMode");
    setMode((prevMode) =>
      prevMode === ThemeMode.light ? ThemeMode.dark : ThemeMode.light
    );
  }, []);

  useEffect(() => {
    console.log("ColorModeContext", mode);
  }, [mode]);

  return (
    <ColorModeContext.Provider value={{ toggleColorMode, mode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

export default ThemeContextProvider;
