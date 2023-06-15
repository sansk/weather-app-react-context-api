
import { SearchForm } from "./components/SearchForm.component";
import { Location } from "./components/Location.component";
import { Temperature } from "./components/Temperature.component";
import { OtherInfo } from "./components/OtherInfo.component";

function App() {

  return (
    <>
      <main className="container mx-auto my-10 p-12  font-alegreya">
        <SearchForm />
        <Location />
        <Temperature />
        <OtherInfo />
      </main>
    </>
  );
}

export default App;
