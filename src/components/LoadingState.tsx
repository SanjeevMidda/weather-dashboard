import useWeather from "../hooks/useWeather";

const LoadingState = () => {
  const { loadingState } = useWeather();

  return <>{loadingState === "loading" ? <h3>Loading...</h3> : null}</>;
};

export default LoadingState;
