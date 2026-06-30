type LoadingStateProps = {
  loading: boolean;
};

const LoadingState = ({ loading }: LoadingStateProps) => {
  if (!loading) return null;

  return <h3>Loading...</h3>;
};

export default LoadingState;
