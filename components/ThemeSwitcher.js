import { useState, useEffect } from "react";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { Switch, Card } from "antd";

const ThemeSwitcher = () => {
  const { switcher, currentTheme, status, themes } = useThemeSwitcher();
  const [isDarkMode, setIsDarkMode] = React.useState(currentTheme === "dark");

  const toggleTheme = (isChecked) => {
    setIsDarkMode(isChecked);
    const theme = isChecked ? themes.dark : themes.light;
    switcher({ theme });
    window.localStorage.setItem("theme", theme);
  };

  if (status === "loading") {
    return null;
  }

  return <Switch checked={isDarkMode} onChange={toggleTheme} />;
};

export default ThemeSwitcher;