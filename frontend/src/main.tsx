import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./src/App.tsx";
import { DataProvider } from "./src/contexts/DataContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </StrictMode>
);
