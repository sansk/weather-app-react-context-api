import { useWeatherContext } from "../context/WeatherContext";

export const OtherInfo = () => {
  const { wData } = useWeatherContext();
  return (
    <>
      <section className="block-item">
        {wData ? (
          <>
            <div className="info-card-sm">
              <p>Visibility</p>
              <span>{wData.visibility / 1000} Km</span>
            </div>
            <div className="info-card-sm">
              <p>Cloudiness</p>
              <span>{wData.cloudiness} %</span>
            </div>
            <div className="info-card-sm">
              <p>Wind</p>
              <span>
                {wData.wind.speed} {wData.units.windUnit} {wData.wind.direction}
              </span>
            </div>
            <div className="info-card-sm">
              <p>Pressure</p>
              <span>{wData.pressure} hPa</span>
            </div>
          </>
        ) : null}
      </section>
    </>
  );
};
