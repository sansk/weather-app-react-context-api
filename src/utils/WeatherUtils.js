import axios from "axios";
import { getLocalDateAndTime } from "./TimeUtils";
import { getDirection } from './DirectionUtils';

const BASE_URL = "https://api.openweathermap.org/data/2.5/";

/*-----------------------------------------------
  Construct the URL for openweathermap.org API 
------------------------------------------------*/
const getUrl = (type, searchParams) => {
  const url = new URL(BASE_URL + type);
  url.search = new URLSearchParams({
    ...searchParams,
    appid: import.meta.env.VITE_APPID
  });

  return url.href;
};
/*-----------------------------------------------
   Get data from openweathermap.org API 
------------------------------------------------*/
const getWeatherData = async (url) => {
  return await axios.get(url).then((response) => response);
}

/*------------------------------------------------------- 
  Format the data received
--------------------------------------------------------*/
const formatWeatherData = (data, units) => {
  let unitsRep = {
    tempUnit: "°C",
    windUnit: "m/s"
  }

  if (units === "imperial") {
    unitsRep = {
      tempUnit: "°F",
      windUnit: "mph"
    }
  }

  const formattedData = {
    units: unitsRep,
    id: data.id,
    location: data.name,
    country: data.sys.country,
    dateAndTime: getLocalDateAndTime(data.dt, data.timezone / 60),
    temperature: {
      currentTemp: data.main.temp,
      feelsLike: data.main.feels_like,
      maxTemp: data.main.temp_max,
      minTemp: data.main.temp_min,
    },
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    visibility: data.visibility,
    wind: {
      direction: getDirection(data.wind.deg),
      speed: data.wind.speed,
      gust: data.wind.gust ? data.wind.gust : ''
    },
    cloudiness: data.clouds.all,
    rain: data.rain ? {
      one: data.rain["1h"] ? data.rain["1h"] : '',
      three: data.rain["3h"] ? data.rain["3h"] : ''
    } : '',
    snow: data.snow ? {
      one: data.snow["1h"] ? data.snow["1h"] : '',
      three: data.snow["3h"] ? data.snow["3h"] : ''
    } : '',
    sunrise: getLocalDateAndTime(data.sys.sunrise, data.timezone / 60, 'hh:mm:ss a'),
    sunset: getLocalDateAndTime(data.sys.sunset, data.timezone / 60, 'hh:mm:ss a'),
    generalInfo: {
      info: data.weather[0].main,
      image: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      description: data.weather[0].description
    }
  };

  return { ...formattedData };
}

/*------------------------------------------------------- 
  Get data and format it before passing to the component
--------------------------------------------------------*/
export const getFormattedData = async (searchParams) => {
  const url = getUrl('weather', searchParams);

  const returnData = await getWeatherData(url).then((response) => formatWeatherData(response.data, searchParams.units));

  return { ...returnData };
}