import { createContext, useEffect, useState } from "react";
import { themes } from "./themes";
import type { Theme } from "./types";

type ThemeContextType = {
  theme: Theme;
  activeTheme: string;
  setActiveTheme: (themeName: string) => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeTheme, setActiveTheme] = useState(() => {
    const savedTheme = localStorage.getItem("math-sprint-theme");

    return savedTheme && themes[savedTheme] ? savedTheme : "amber";
  });

  const theme = themes[activeTheme];

  useEffect(() => {
    const root = document.documentElement;

    Object.entries(theme.colors).forEach(([key, value]) => {
      const cssKey = key.replace(
        /[A-Z]/g,
        (letter) => `-${letter.toLowerCase()}`,
      );

      root.style.setProperty(`--color-${cssKey}`, value);
    });

    root.style.colorScheme = activeTheme === "paper" ? "light" : "dark";

    localStorage.setItem("math-sprint-theme", activeTheme);
  }, [activeTheme, theme]);

  return (
    <ThemeContext.Provider value={{ theme, activeTheme, setActiveTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
