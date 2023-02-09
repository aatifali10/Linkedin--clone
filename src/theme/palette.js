export const ThemeMode = Object.freeze({
  light: "light",
  dark: "dark",
});

export const lightPalette = {
  mode: ThemeMode.light,
  primary: {
    ligth: "#0d80f3",
    main: "#0a66c2",
    dark: "#084d92",
  },
  secondary: {
    ligth: "rgba(0,0,0,0.5)",
    main: "rgba(0,0,0,0.6)",
    dark: "rgba(0,0,0,0.7)",
  },
  background: {
    paper: "#fff",
    default: "#f5f5f5",
  },
  text: {
    primary: "rgba(0,0,0,0.9)",
    secondary: "rgba(0,0,0,0.6)",
    disabled: "rgba(30,30,30,0.9)",
  },
};

export const darkPalette = {
  mode: ThemeMode.dark,
  primary: {
    ligth: "#72b4ff",
    main: "#58a6ff",
    dark: "#1f6feb",
  },
  secondary: {
    ligth: "rgba(200,200,200,0.5)",
    main: "rgba(200,200,200,0.6)",
    dark: "rgba(200,200,255,0.7)",
  },
  background: {
    paper: "#161b22 ",
    default: "#0d1117",
  },

  text: {
    primary: "#c9d1d9",
    secondary: "#8b949e",
    disabled: "#6e7681",
  },
};
