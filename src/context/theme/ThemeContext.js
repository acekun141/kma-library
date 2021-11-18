import { createContext } from "react";

export const initialThemeState = {
  theme: "light",
  setTheme: () => null
}

export const ThemeContext = createContext(initialThemeState);