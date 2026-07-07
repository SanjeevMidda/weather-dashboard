import { Weather } from "../types/weather";
import { LoadingState } from "../types/loadingState";

type WeatherCardProps = {
  weather: Weather;
  loadingState: LoadingState;
  searchQuery: string;
  fetchWeather: (city: string) => Promise<void>;
};

const WeatherCard = ({
  weather,
  loadingState,
  searchQuery,
  fetchWeather,
}: WeatherCardProps) => {
  return (
    <>
      <section
        aria-label="Current weather information"
        className="cityWeatherDetails"
      >
        <h4>Temperature: {weather.temperature} °C</h4>
        <h4>Wind Speed: {weather.windSpeed} km/h</h4>
        <h4>Relative Humidity: {weather.relativeHumidity}ß%</h4>
        <h4>Weather Code: {weather.weatherCode} </h4>
      </section>
      {loadingState === "successful" && (
        <button onClick={() => fetchWeather(searchQuery)}>Refresh</button>
      )}
    </>
  );
};

export default WeatherCard;
