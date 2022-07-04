import { useTime, useWeather } from "../../context";
import { Alert } from "../index";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";

const Weather = () => {
  const { currentTime } = useTime();
  const { weatherDetailsState } = useWeather();
  const { icon, currentTemp, city } = weatherDetailsState;

  return (
    <>
      {weatherDetailsState === null ? (
        <Alert message="Oops! Cannot show weather details right now" />
      ) : (
        ""
      )}
      <div className="flex items-center justify-end gap-1 flex-wrap text-4xl font-Montserrat w-60">
        <span>{`${(currentTemp - 273.15).toFixed(0)} °C`}</span>
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="weather-icon"
        />
      </div>
      <a
        href="https://addons.mozilla.org/addon/a-focus-dashboard/"
        className="fixed right-10 text-xl font-Montserrat underline"
        target="_blank"
        rel="noreferrer"
      >
        Add to Firefox
      </a>
      <ThemeToggle />
      <div className="flex flex-col justify-center items-center">
        <span className="fixed left-10 text-4xl font-Montserrat">{city}</span>
        <h1 className="text-6xl font-Montserrat font-bold">{currentTime}</h1>
      </div>
    </>
  );
};

export { Weather };
