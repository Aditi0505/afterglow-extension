import { Route, Routes } from "react-router-dom";
import { UserOnboarding, WelcomeUser } from "./pages";
import "./App.css";
import { WallpaperProvider } from "./context/wallpaper-context";
import { UserProvider } from "./context";
function App() {
  return (
    <UserProvider>
      <WallpaperProvider>
        <Routes>
          <Route path="/" exact element={<UserOnboarding />} />
          <Route path="/welcome" exact element={<WelcomeUser />} />
        </Routes>
      </WallpaperProvider>
    </UserProvider>
  );
}

export default App;
