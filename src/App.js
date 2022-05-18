import { Route, Routes } from "react-router-dom";
import { Todo, UserOnboarding, WelcomeUser } from "./pages";
import { WallpaperProvider } from "./context/wallpaper-context";
import { QuoteProvider, UserProvider, WeatherProvider } from "./context";
import { TimeProvider } from "./context/time-context";
import "./App.css";
function App() {
  return (
    <TimeProvider>
      <WeatherProvider>
        <QuoteProvider>
          <UserProvider>
            <WallpaperProvider>
              <Routes>
                <Route path="/" exact element={<UserOnboarding />} />
                <Route path="/welcome" exact element={<WelcomeUser />} />
                <Route path="/todo" exact element={<Todo />} />
              </Routes>
            </WallpaperProvider>
          </UserProvider>
        </QuoteProvider>
      </WeatherProvider>
    </TimeProvider>
  );
}

export default App;
