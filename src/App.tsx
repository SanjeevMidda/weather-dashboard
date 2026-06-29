import "./index.css";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  console.log(searchQuery);

  return (
    <div className="App">
      <h1>WEATHER</h1>
      <h2 id="city">LONDON</h2>

      <div className="cityWeatherDetails">
        <h4>Temperature: 20 degrees </h4>
        <h4>Wind Speed: 30mph </h4>
        <h4>Relative Humidity: 10 degrees </h4>
        <h4>Weather Code: 341 </h4>
      </div>

      <SearchBar value={searchQuery} onChange={setSearchQuery} />
    </div>
  );
}

export default App;
