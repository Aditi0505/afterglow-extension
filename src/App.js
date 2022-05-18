import { Route, Routes } from "react-router-dom";
import { Todo, UserOnboarding, WelcomeUser } from "./pages";
import { WallpaperProvider } from "./context/wallpaper-context";
import {
  FilterProvider,
  QuoteProvider,
  TodoProvider,
  UserProvider,
  WeatherProvider,
  TimeProvider
} from "./context";

import "./App.css";
function App() {
  return (
    <FilterProvider>
      <TodoProvider>
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
      </TodoProvider>
    </FilterProvider>
  );
}

export default App;
