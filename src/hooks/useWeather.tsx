import { useState } from "react";
import { Weather } from "../types/weather";

type LoadingState = "initial" | "loading" | "error" | "successful";

const useWeather = () => {
  const [loadingState, setLoadingState] = useState<LoadingState>("initial");
  const [weather, setWeather] = useState<Weather | null>(null);

  const [error, setError] = useState<null | string>(null);

  const fetchWeather = async (city: string) => {
    const query = city.trim();

    if (!query) return;

    setError(null);
    setWeather(null);
    setLoadingState("loading");

    try {
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          query
        )}&count=1`
      );

      if (!geoRes.ok) throw new Error("Unable to search for city.");

      const geoData = await geoRes.json();

      if (!geoData?.results?.length) {
        throw new Error("Unable to find city. Please try again.");
      }

      const { latitude, longitude } = geoData.results[0];

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`
      );

      if (!weatherRes.ok) throw new Error("Unable to fetch weather data.");

      const weatherData = await weatherRes.json();

      setWeather({
        temperature: weatherData.current.temperature_2m,
        windSpeed: weatherData.current.wind_speed_10m,
        relativeHumidity: weatherData.current.relative_humidity_2m,
        weatherCode: weatherData.current.weather_code,
      });

      setLoadingState("successful");
    } catch (error) {
      setLoadingState("error");

      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  return { loadingState, error, weather, fetchWeather };
};

export default useWeather;
