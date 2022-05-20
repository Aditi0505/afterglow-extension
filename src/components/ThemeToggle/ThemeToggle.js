import { useTheme } from "../../context";
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return theme === "light" ? (
    <i
      className="fas fa-sun cursor-pointer mr-10 fixed right-0 top-4 text-4xl"
      onClick={() => toggleTheme("dark")}
    ></i>
  ) : (
    <i
      className="fas fa-moon cursor-pointer mr-10 fixed right-0 top-4 text-4xl"
      onClick={() => toggleTheme("light")}
    ></i>
  );
};

export { ThemeToggle };
