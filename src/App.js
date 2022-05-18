import { Route, Routes } from "react-router-dom";
import { UserOnboarding, WelcomeUser } from "./pages";
import {
  QuoteProvider,
  UserProvider,
  WeatherProvider,
  WallpaperProvider,
} from "./context";
import "./App.css";
import { TimeProvider } from "./context/time-context";
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
              </Routes>
            </WallpaperProvider>
          </UserProvider>
        </QuoteProvider>
      </WeatherProvider>
    </TimeProvider>
  );
}

export default App;
