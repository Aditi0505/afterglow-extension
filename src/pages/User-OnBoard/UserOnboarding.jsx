import { useEffect, useState } from "react";
import { ThemeToggle } from "../../components";
import { useUser, useWallpaper } from "../../context";
import { WelcomeUser } from "./WelcomeUser";
const UserOnboarding = () => {
  const { wallpaper } = useWallpaper();
  const { userState, userDispatch } = useUser();
  const [navigate, setNavigate] = useState(false);
  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      setNavigate(true);
    }
  };

  useEffect(() => {
    localStorage.getItem("user") !== "" && setNavigate(true);
  }, []);

  return (
    <>
      {!navigate ? (
        <div
          className="flex flex-col justify-center items-center text-6xl text-white h-screen w-full bg-cover bg-no-repeat bg-clip-border bg-fixed bg-center"
          style={wallpaper}
        >
          <ThemeToggle />
          <div className="w-50 text-center font-Montserrat font-bold">
            <header className="dark:text-slate-900 dark:bg-[#F7D8BA] dark:rounded-full">
              <h1>Hello! What's your name?</h1>
            </header>
            <main>
              <input
                className="text-center font-Quattrocento font-extrabold w-11/12 py-4 px-0 border-0 border-b-4 outline-0 bg-transparent dark:text-[#F7D8BA]"
                onChange={(e) =>
                  userDispatch({
                    type: "ADD_USER",
                    payload: e.target.value,
                  })
                }
                value={userState.useName}
                onKeyDown={handleEnterKey}
              />
            </main>
          </div>
        </div>
      ) : (
        <WelcomeUser />
      )}
    </>
  );
};

export { UserOnboarding };
