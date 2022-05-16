import { Route, Routes } from "react-router-dom";
import { UserOnboarding, WelcomeUser } from "./pages";
import { WallpaperProvider } from "./context/wallpaper-context";
import { QuoteProvider, UserProvider } from "./context";
import "./App.css";
function App() {
  return (
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
  );
}

export default App;
