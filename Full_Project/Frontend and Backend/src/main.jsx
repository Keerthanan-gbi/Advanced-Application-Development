import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <App/>
  </React.StrictMode>,
  );
 