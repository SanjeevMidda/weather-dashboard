// Weather code converter
const getWeatherDescription = (code: number): string => {
  switch (code) {
    case 0:
      return "Sunny - get those sunglasses!";
    case 1:
      return "Mainly clear - remember to waer sunscreen";
    case 2:
      return "Partly cloudly - take a light jacket";
    case 3:
      return "Overcast - wrap up warm";
    default:
      return "Unknown";
  }
};

// temperature formatter
const formatTemperature = (temp: number): string => {
  return `${temp}°C`;
};
