import React, { useContext } from "react";
import { ThemeContext } from "../../context/theme/ThemeContext";
import { BiSun, BiMoon } from "react-icons/bi";
import "./style.scss";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const onToggle = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  };
  return (
    <div className={`theme-toggle theme-toggle--${theme}`}>
      <button className="theme-toggle__button" onClick={onToggle}>
        <div className="theme-toggle__icon">
        {theme === "light" ? <BiSun /> : <BiMoon />}
        </div>
      </button>
    </div>
  );
}

export default ThemeToggle;