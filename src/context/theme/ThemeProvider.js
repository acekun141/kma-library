import React, { useState, useEffect } from "react";
import { initialThemeState, ThemeContext } from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("themecolor") || initialThemeState.theme);
  useEffect(() => {
    localStorage.setItem("themecolor", theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme theme--${theme}`}>
        {children}
      </div>
    </ThemeContext.Provider> 
  );
}

export default ThemeProvider;