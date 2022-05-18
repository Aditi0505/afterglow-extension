import { useTime, useWeather } from "../../context";

const Weather = () => {
  const { currentTime } = useTime();
  const { weatherDetailsState } = useWeather();
  const { icon, currentTemp, city } = weatherDetailsState;
  return (
    <>
      <div className="flex items-center justify-end flex-wrap text-4xl font-Montserrat">
        <span>{`${(currentTemp - 273.15).toFixed(0)} °C`}</span>
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="weather-icon"
        />
      </div>
      <div>
        <span className="fixed right-20 text-4xl font-Montserrat">{city}</span>
        <h1 className="text-6xl font-Montserrat font-bold">{currentTime}</h1>
      </div>
    </>
  );
};

export { Weather };
