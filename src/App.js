import { Route, Routes } from "react-router-dom";
import { UserOnboarding, WelcomeUser } from "./pages";
import {
  QuoteProvider,
  UserProvider,
  WeatherProvider,
  WallpaperProvider,
  TimeProvider,
} from "./context";
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
              </Routes>
            </WallpaperProvider>
          </UserProvider>
        </QuoteProvider>
      </WeatherProvider>
    </TimeProvider>
  );
}

export default App;
