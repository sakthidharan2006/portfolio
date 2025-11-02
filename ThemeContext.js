import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light"); // default theme

    useEffect(() => {
        // Load theme from localStorage if exists
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) setTheme(savedTheme);
        document.documentElement.className = savedTheme || "light"; // add class to html
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.className = newTheme;
        localStorage.setItem("theme", newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
