import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("afterglow-theme") || "light"
  );
  const toggleTheme = (theme) => setTheme(theme);

  useEffect(() => localStorage.setItem("afterglow-theme", theme), [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
