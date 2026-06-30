type ErrorStateProps = {
  error: string;
};

const ErrorState = ({ error }: ErrorStateProps) => {
  if (!error) return null;

  return <h3>{error}</h3>;
};

export default ErrorState;
