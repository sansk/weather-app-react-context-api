import { useWeatherContext } from "../context/WeatherContext";
import {
  UilTemperature,
  UilTemperatureEmpty,
  UilTemperatureQuarter,
  UilSun,
  UilSunset,
  UilSnowFlake,
  UilRaindrops,
  UilDesert,
} from "@iconscout/react-unicons";

export const Temperature = () => {
  const { wData } = useWeatherContext();

  return (
    <>
      <section className="card-display flex-center-all flex-col">
        {wData ? (
          <>
            <div className="text-3xl font-semibold p-2">
              <h3>
                {wData.generalInfo.description
                  ? wData.generalInfo.description
                  : wData.generalInfo.info}
              </h3>
            </div>
            <div className="w-full flex justify-evenly items-center flex-col lg:flex-row">
              <div className="block-item">
                <img
                  src={wData.generalInfo.image}
                  alt={wData.generalInfo.info}
                />
                <p className="text-2xl">
                  {wData.temperature.currentTemp.toFixed()}{" "}
                  {wData.units.tempUnit}
                  <br />
                  <span>{wData.generalInfo.info}</span>
                </p>
              </div>
              <div className=" block-item block-item-lg">
                <div className="info-row-sm">
                  <UilTemperature className="icons-display" />{" "}
                  <span>Max: </span>{" "}
                  <span>
                    {wData.temperature.maxTemp} {wData.units.tempUnit}
                  </span>
                </div>
                <div className="info-row-sm">
                  <UilTemperatureQuarter className="icons-display" />{" "}
                  <span>Min: </span>
                  <span>
                    {wData.temperature.minTemp} {wData.units.tempUnit}
                  </span>
                </div>
                <div className="info-row-sm">
                  <UilDesert className="icons-display" />{" "}
                  <span>Humidity: </span>
                  <span>{wData.humidity}%</span>
                </div>
              </div>
              <div className="block-item block-item-lg">
                <div className="info-row-sm flex-wrap mr-8">
                  <UilTemperatureEmpty className="icons-display" />{" "}
                  <span className="mr-2 flex-auto">Feels like: </span>{" "}
                  {wData.temperature.feelsLike} {wData.units.tempUnit}
                </div>
                <div className="info-row-sm flex-wrap">
                  <UilSun className="icons-display" />{" "}
                  <span className="mr-2 flex-auto">Sunrise: </span>{" "}
                  {wData.sunrise}
                </div>
                <div className="info-row-sm flex-wrap">
                  <UilSunset className="icons-display" />{" "}
                  <span className="mr-2 flex-auto">Sunset: </span>{" "}
                  {wData.sunset}
                </div>
              </div>
            </div>
            <div className="block-item">
              {wData.snow ? (
                <>
                  <div className="info-card-sm">
                    <span>Snow</span>
                    <UilSnowFlake className="icons-display" />
                    <div>
                      <p>1h: {wData.snow.one} mm</p>
                      {wData.snow.three ? (
                        <p>3h: {wData.snow.three} mm</p>
                      ) : null}
                    </div>
                  </div>
                </>
              ) : null}
              {wData.rain ? (
                <>
                  <div className="info-card-sm">
                    <span>Rain</span>
                    <UilRaindrops className="icons-display" />
                    <div>
                      <p>1h: {wData.rain.one} mm</p>
                      {wData.rain.three ? (
                        <p>3h: {wData.rain.three} mm</p>
                      ) : null}
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          </>
        ) : null}
      </section>
    </>
  );
};
