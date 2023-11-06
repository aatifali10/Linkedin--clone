import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import ThemeCustomization from "./theme";
import ThemeContextProvider from "./theme/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ThemeCustomization>
        <App />
      </ThemeCustomization>
    </ThemeContextProvider>
  </React.StrictMode>
);
reportWebVitals();
