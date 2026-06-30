import "./index.css";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import useWeather from "./hooks/useWeather";
import WeatherCard from "./components/WeatherCard";
import LoadingState from "./components/LoadingState";
import ErrorState from "./components/ErrorState";

function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { loadingState, weather, error, fetchData } = useWeather();

  return (
    <div className="App">
      <h1>WEATHER</h1>
      <h2 id="city">{searchQuery}</h2>

      {loadingState === "loading" && <LoadingState />}
      {loadingState === "error" && error && <ErrorState error={error} />}
      {loadingState === "successful" && (
        <WeatherCard
          weather={weather}
          loadingState={loadingState}
          fetchData={fetchData}
          searchQuery={searchQuery}
        />
      )}

      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        onSearch={fetchData}
      />
    </div>
  );
}

export default App;
