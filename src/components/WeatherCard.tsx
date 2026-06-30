import { Weather } from "../types/weather";

type WeatherCardProps = {
  weather: Weather | null;
};

const WeatherCard = ({ weather }: WeatherCardProps) => {
  if (!weather) return null;

  return (
    <div className="cityWeatherDetails">
      <h4>Temperature: {weather.temperature} </h4>
      <h4>Wind Speed: {weather.windSpeed} </h4>
      <h4>Relative Humidity: {weather.relativeHumidity}</h4>
      <h4>Weather Code: {weather.weatherCode} </h4>
    </div>
  );
};

export default WeatherCard;
