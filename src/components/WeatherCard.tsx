const WeatherCard = ({ weather }: any) => {
  return (
    <div className="cityWeatherDetails">
      <h4>Temperature: {weather?.temperature} </h4>
      <h4>Wind Speed: {weather?.windSpeed} </h4>
      <h4>Relative Humidity: {weather?.relativeHumidity}</h4>
      <h4>Weather Code: {weather?.weatherCode} </h4>
    </div>
  );
};

export default WeatherCard;
