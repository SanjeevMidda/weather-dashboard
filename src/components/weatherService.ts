export const getWeather = async (city: string) => {
  const query = city.trim();

  const geoRes = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
      query
    )}&count=1`
  );

  if (!geoRes.ok) {
    throw new Error("Unable to search for city.");
  }

  const geoData = await geoRes.json();

  if (!geoData.results?.length) {
    throw new Error("Unable to find city. Please try again.");
  }

  const { latitude, longitude } = geoData.results[0];

  const weatherRes = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`
  );

  if (!weatherRes.ok) {
    throw new Error("Unable to fetch weather data.");
  }

  const weatherData = await weatherRes.json();

  return {
    temperature: weatherData.current.temperature_2m,
    windSpeed: weatherData.current.wind_speed_10m,
    relativeHumidity: weatherData.current.relative_humidity_2m,
    weatherCode: weatherData.current.weather_code,
  };
};
