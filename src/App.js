import { UserOnboarding } from "./pages";
import { WallpaperProvider } from "./context/wallpaper-context";
import {
  FilterProvider,
  QuoteProvider,
  TodoProvider,
  UserProvider,
  WeatherProvider,
  TimeProvider,
  useTheme,
} from "./context";
import "./App.css";

function App() {
  const { themeState } = useTheme();
  return (
    <div className={themeState.theme === "dark" ? "dark" : ""}>
      <FilterProvider>
        <TodoProvider>
          <TimeProvider>
            <WeatherProvider>
              <QuoteProvider>
                <UserProvider>
                  <WallpaperProvider>
                    <UserOnboarding />
                  </WallpaperProvider>
                </UserProvider>
              </QuoteProvider>
            </WeatherProvider>
          </TimeProvider>
        </TodoProvider>
      </FilterProvider>
    </div>
  );
}

export default App;
