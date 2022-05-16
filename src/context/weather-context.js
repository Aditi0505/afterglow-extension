import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { weatherDetailsReducer } from "../reducer";
const WeatherContext = createContext(null);

const WeatherProvider = ({ children }) => {
  const [latitude, setLatitude] = useState(25.6102188);
  const [longitude, setLongitute] = useState(85.1641888);
  const key = process.env.REACT_APP_API_KEY;
  const [weatherDetailsState, weatherDetailsDispatch] = useReducer(
    weatherDetailsReducer,
    {
      icon: "10n",
      currentTemp: "300",
      city: "Patna",
    }
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitute(position.coords.longitude);
    });
  }, []);

  useEffect(() => {
    try {
      (async () => {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`
        );
        weatherDetailsDispatch({
          type: "ADD_WEATHER_DETAILS",
          payload: response,
        });
      })();
    } catch (e) {
      console.log(e);
    }
  }, [latitude, longitude, key]);

  return (
    <WeatherContext.Provider
      value={{ weatherDetailsState, weatherDetailsDispatch }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

const useWeather = () => useContext(WeatherContext);

export { useWeather, WeatherProvider };
