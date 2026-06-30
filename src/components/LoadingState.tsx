type loadingStateProps = {
  loading: boolean;
};

const LoadingState = ({ loading }: loadingStateProps) => {
  if (!loading) return null;

  return <h3>Loading...</h3>;
};

export default LoadingState;
