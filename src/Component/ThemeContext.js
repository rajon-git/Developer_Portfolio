import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const themes = {
    dark: {
      bg: "#1E1E1E",
      dText: "white",
      hover: "#181818",
    },
    light: {
      bg: "#ffffff",
      dText: "black",
      hover: "#C8E6C9",
    },
  };

  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || themes.light
  );

  function handleTheme(themeName) {
    setTheme(themes[themeName]);
  }

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}