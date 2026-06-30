import useWeather from "../hooks/useWeather";

const ErrorState = () => {
  const { error } = useWeather();

  return <h3>{error}</h3>;
};

export default ErrorState;
