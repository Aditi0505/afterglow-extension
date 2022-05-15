import { useWallpaper } from "../../context";

const UserOnboarding = () => {
  const { wallpaper } = useWallpaper();

  return (
    <div
      className="flex flex-col justify-center items-center text-6xl text-white h-screen w-full bg-cover bg-no-repeat bg-clip-border bg-fixed bg-center"
      style={wallpaper}
    >
      <div className="w-full text-center">
        <header>
          <h1>Hello! What's your name?</h1>
        </header>
        <main>
          <input className="text-center font-extrabold text-7xl w-11/12 py-4 px-0 border-0 border-b-4 outline-0 bg-transparent" />
        </main>
      </div>
    </div>
  );
};

export { UserOnboarding };
