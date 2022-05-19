import { useTheme } from "../../context";
const ThemeToggle = () => {
  const { themeState, themeDispatch } = useTheme();
  return themeState.theme === "light" ? (
    <i
      className="fas fa-sun cursor-pointer mr-10 fixed right-0 top-4 text-4xl"
      onClick={() =>
        themeDispatch({
          type: "LIGHT",
        })
      }
    ></i>
  ) : (
    <i
      className="fas fa-moon cursor-pointer mr-10 fixed right-0 top-4 text-4xl"
      onClick={() =>
        themeDispatch({
          type: "DARK",
        })
      }
    ></i>
  );
};

export { ThemeToggle };
