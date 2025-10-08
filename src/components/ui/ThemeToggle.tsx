import React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "./Button";
import { useTheme } from "../../context/UseTheme";
import { useThemeContext } from "../../context/ThemeContext";

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useThemeContext();

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="relative overflow-hidden group border-2 border-primary/20 hover:border-primary/40 transition-all duration-300"
        >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            {/* <span className="sr-only">Toggle theme</span> */}
            <span className="sr-only">
                Switch to {theme === "dark" ? "light" : "dark"} mode
            </span>
            {/* Shine effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
        </Button>
    );
};
