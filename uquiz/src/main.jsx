import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import RankingProvider from "./contexts/RankingContext.jsx";

if (import.meta.env.DEV) {
  console.info = (...args) => args[0]?.includes("Download the React DevTools") ? null : console.info(...args);
  console.warn = (...args) => args[0]?.includes("React Router Future Flag Warning") ? null : console.warn(...args);
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <RankingProvider>
        <App />
      </RankingProvider>
    </BrowserRouter>
  </StrictMode>
);
