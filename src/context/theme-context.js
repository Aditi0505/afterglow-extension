import { createContext, useContext, useEffect, useReducer } from "react";
import { themeReducer } from "../reducer";

const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [themeState, themeDispatch] = useReducer(themeReducer, {
    theme: localStorage.getItem("theme") || "light",
  });

  useEffect(
    () => localStorage.setItem("theme", themeState.theme),
    [themeState.theme]
  );

  return (
    <ThemeContext.Provider value={{ themeState, themeDispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
