import { createContext, useContext, useEffect, useState } from "react";
const TimeContext = createContext(null);

const TimeProvider = ({ children }) => {
  const [currentTime, setCurrentTime] = useState("");

  const getTimeFormat = () => {
    const currentTime1 = new Date();
    const hours = currentTime1.getHours();
    const mins = currentTime1.getMinutes();
    const hourFormat = hours < 10 ? `0${hours}` : hours;
    const minFormat = mins < 10 ? `0${mins}` : mins;
    const currentTimeFormat = `${hourFormat}:${minFormat}`;
    return currentTimeFormat;
  };

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(() => getTimeFormat());
    }, 1000);
  }, []);

  return (
    <TimeContext.Provider value={{ currentTime, setCurrentTime }}>
      {children}
    </TimeContext.Provider>
  );
};

const useTime = () => useContext(TimeContext);

export { useTime, TimeProvider };
