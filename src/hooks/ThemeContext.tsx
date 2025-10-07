// ThemeContext.tsx
import React, { createContext, useContext } from "react";
import { useTheme as useThemeHook } from "./UseTheme";

type ThemeContextType = ReturnType<typeof useThemeHook>;
const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const value = useThemeHook(); // ONE real state here
    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};

export const useThemeContext = () => {
    const ctx = useContext(ThemeContext);
    if (!ctx)
        throw new Error("useThemeContext must be used inside ThemeProvider");
    return ctx;
};
