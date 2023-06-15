import { useRef } from "react";
import { MdMyLocation } from "react-icons/md";

import { useWeatherContext } from "../context/WeatherContext";

export const SearchForm = () => {
  const { addLocation, addUnits } = useWeatherContext();

  const locationRef = useRef();

  const handleClick = (event) => {
    event.preventDefault();
    addLocation(locationRef.current.value);
  };

  return (
    <>
      <section className="card-display flex-center-all ">
        <form className="w-9/12 flex-auto flex items-center justify-center">
          <input
            className="w-7/12 p-4 rounded-l-lg tracking-wider border-white border-2 focus:outline-0 focus:border-blue-500 focus:border-2 text-xl"
            type="search"
            name="search"
            id="search"
            placeholder="Search..."
            ref={locationRef}
          />
          <button
            className="bg-blue-500 p-4 rounded-r-lg  text-3xl hover:bg-blue-200 text-gray-100 hover:text-slate-600"
            type="submit"
            onClick={(event) => handleClick(event)}>
            <MdMyLocation />
          </button>
        </form>
        <div className="flex-auto text-3xl">
          <span
            className="p-2 cursor-pointer"
            onClick={() => addUnits("metric")}>
            °C
          </span>
          <span>|</span>
          <span
            className="p-2 cursor-pointer"
            onClick={() => addUnits("imperial")}>
            °F
          </span>
        </div>
      </section>
    </>
  );
};
