import { createContext, useContext, useEffect, useState } from "react";
import { wallpapers } from "../data/wallpaper";

const WallpaperContext = createContext(null);

const WallpaperProvider = ({ children }) => {
  const [wallpaper, setWallpaper] = useState(wallpapers[0]);

  useEffect(() => {
    const wallpaperLength = wallpapers.length;
    const randomWallpaper = Math.floor(Math.random() * wallpaperLength);
    localStorage.setItem("imageNumber", randomWallpaper);
    const wallpaperUrl = wallpapers.find(
      (wallpaper) =>
        wallpaper.id === Number(localStorage.getItem("imageNumber"))
    );
    setWallpaper({
      backgroundImage: `url(${wallpaperUrl.title})`,
      altVal: wallpaperUrl.alt,
    });
  }, []);

  return (
    <WallpaperContext.Provider value={{ wallpaper, setWallpaper }}>
      {children}
    </WallpaperContext.Provider>
  );
};

const useWallpaper = () => useContext(WallpaperContext);

export { useWallpaper, WallpaperProvider };
