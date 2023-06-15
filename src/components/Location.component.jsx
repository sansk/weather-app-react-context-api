import { MdLocationPin } from "react-icons/md";
import { useWeatherContext } from "../context/WeatherContext";

export const Location = () => {
  const { wData } = useWeatherContext();

  return (
    <>
      <section className="card-display flex-center-all flex-col lg:flex-row text-2xl">
        {wData ? (
          <>
            <div className="p-2 lg:flex-auto lg:w-12 flex justify-center items-center font-bold">
              <MdLocationPin />
              <span className="px-2">
                {wData.location}, {wData.country}
              </span>
            </div>
            <div className="lg:flex-auto lg:w-24 font-semibold">
              {wData.dateAndTime}
            </div>
          </>
        ) : (
          <div className="animate-spin h-20 w-20 rounded-full border-4 border-teal-300 border-t-teal-800"></div>
        )}
      </section>
    </>
  );
};
