type ErrorStateProps = {
  error: string;
};

const ErrorState = ({ error }: ErrorStateProps) => {
  return <h3 role="alert">{error}</h3>;
};

export default ErrorState;
