export const ThemeMode = Object.freeze({
  light: "light",
  dark: "dark",
});

export const lightPalette = {
  mode: ThemeMode.light,
  primary: {
    ligth: "#0ac2c2",
    main: "#0a0ac2",
    dark: "#0a66c2",
  },
  background: {
    paper: "#fff",
    default: "#f5f5f5",
  },
  text: {
    primary: "#000",
    secondary: "#333",
    disabled: "#555",
  },
};

export const darkPalette = {
  mode: ThemeMode.dark,
  primary: {
    ligth: "#0ac2c2",
    main: "#0a0ac2",
    dark: "#0a66c2",
  },
  background: {
    paper: "#333",
    default: "#000",
  },
  text: {
    primary: "#fff",
    secondary: "#eee",
    disabled: "#ddd",
  },
};
