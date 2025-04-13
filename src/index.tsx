import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { WeatherContextProvider } from "./context/WeatherContext";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <WeatherContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </WeatherContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
