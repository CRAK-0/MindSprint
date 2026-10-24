import { createContext, useEffect, useState } from "react";
import { themes } from "./themes"
import type { Theme } from "./types";

type ThemeContextType = {
    theme: Theme;
    activeTheme: string;
    setActiveTheme: (themeName: string) => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [activeTheme, setActiveTheme] = useState(() => {
    // read something from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme && themes[savedTheme]) {
    // return savedTheme
    return savedTheme;
  }

// otherwise 
    return "midnight";
});
    const theme = themes[activeTheme];

  useEffect(() => {
    // save activeTheme
    localStorage.setItem("theme",activeTheme)
}, [activeTheme]);
    
  return (
    <ThemeContext.Provider value={{ theme, activeTheme, setActiveTheme }}>
    {children}
</ThemeContext.Provider>
  )
}
