import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./screens/App";
import { ThemeProvider } from "./hooks/ThemeContext";

createRoot(document.getElementById("app") as HTMLElement).render(
    <StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </StrictMode>
);
