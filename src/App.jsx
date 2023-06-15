import { SearchForm } from "./components/SearchForm.component";
import { Location } from "./components/Location.component";
import { Temperature } from "./components/Temperature.component";
import { OtherInfo } from "./components/OtherInfo.component";
import { BsGithub } from "react-icons/bs";

function App() {
  return (
    <>
      <main className="container mx-auto my-10 p-12  font-alegreya">
        <SearchForm />
        <Location />
        <Temperature />
        <OtherInfo />
        <section className="flex justify-evenly items-center bg-slate-700/25 backdrop-saturate-50rounded-lg backdrop-opacity-90 backdrop-blur-md backdrop-saturate-100 container mx-auto p-2 sticky bottom-0 text-xl text-slate-200">
          <p>
            Made with{" "}
            <span className="animate-pulse text-red-700 text-2xl px-2">❤</span>
            <a href="https://github.com/sansk" className="">
              SK
            </a>
          </p>
          <p className="flex-center-all">
            Source Code:{" "}
            <a
              target="_blank"
              href="https://github.com/sansk/weather-app-react-context-api"
              className="mx-2">
              <BsGithub />
            </a>
          </p>
          <p className="flex-center-all">
            Another Version:{" "}
            <a
              target="_blank"
              href="https://github.com/sansk/weather-channel-react"
              className="mx-2">
              <BsGithub />
            </a>
          </p>
        </section>
      </main>
    </>
  );
}

export default App;
