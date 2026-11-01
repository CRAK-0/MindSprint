import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { themes } from "./themes";

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return {
    ...context,
    themes,
  };
};
