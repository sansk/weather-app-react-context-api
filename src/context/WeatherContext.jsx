import { createContext, useState, useContext, useEffect } from "react";
import { getFormattedData } from "../utils/WeatherUtils";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [location, setLocation] = useState("mumbai");
  const [units, setUnits] = useState("metric");
  const [wData, setWData] = useState(null);

  const addLocation = (location) => {
    setLocation(location);
  };

  const addUnits = (units) => {
    setUnits(units);
  };

  const fetchWeather = async () => {
    const data = await getFormattedData({
      q: location,
      units: units,
    });
    setWData({ ...data });
  };

  useEffect(() => {
    fetchWeather();
  }, [location, units]);

  return (
    <WeatherContext.Provider value={{ addLocation, addUnits, wData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => {
  return useContext(WeatherContext);
};
