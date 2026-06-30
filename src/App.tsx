import "./index.css";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import useWeather from "./hooks/useWeather";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { loadingState, weather, error, fetchData } = useWeather();

  return (
    <div className="App">
      <h1>WEATHER</h1>
      <h2 id="city">{searchQuery}</h2>

      <WeatherCard weather={weather} />
      <div className="cityWeatherDetails">
        <h4>Temperature: {weather?.temperature} </h4>
        <h4>Wind Speed: {weather?.windSpeed} </h4>
        <h4>Relative Humidity: {weather?.relativeHumidity}</h4>
        <h4>Weather Code: {weather?.weatherCode} </h4>
      </div>

      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        onSearch={fetchData}
      />
    </div>
  );
}

export default App;
