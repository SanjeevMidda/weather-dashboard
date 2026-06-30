import "./index.css";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import useWeather from "./hooks/useWeather";

function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { loadingState, weather, error, fetchData } = useWeather();
  // const fetchData = async (city: string) => {
  //   if (!city.trim()) return;
  //   setWeather(null);

  //   try {
  //     const geoRes = await fetch(
  //       `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
  //     );

  //     if (!geoRes.ok) throw new Error("Geocoding failed");

  //     const geoData = await geoRes.json();

  //     if (!geoData?.results?.length) {
  //       console.log("No city found");
  //       return;
  //     }

  //     const { latitude, longitude } = geoData.results[0];

  //     const weatherRes = await fetch(
  //       `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`
  //     );

  //     if (!weatherRes.ok) throw new Error("Weather fetch failed");

  //     const weatherData = await weatherRes.json();

  //     setWeather({
  //       temperature: weatherData.current.temperature_2m,
  //       windSpeed: weatherData.current.wind_speed_10m,
  //       relativeHumidity: weatherData.current.relative_humidity_2m,
  //       weatherCode: weatherData.current.weather_code,
  //     });
  //   } catch (error) {
  //     console.log("Error fetching data", error);
  //   }
  // };

  return (
    <div className="App">
      <h1>WEATHER</h1>
      <h2 id="city">{searchQuery}</h2>

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
