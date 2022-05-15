import { Route, Routes } from "react-router-dom";
import { UserOnboarding } from "./pages";
import "./App.css";
import { WallpaperProvider } from "./context/wallpaper-context";
function App() {
  return (
    <WallpaperProvider>
      <Routes>
        <Route path="/" exact element={<UserOnboarding />} />
      </Routes>
    </WallpaperProvider>
  );
}

export default App;
