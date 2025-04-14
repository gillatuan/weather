import React from 'react';

const ErrorFallback: React.FC = () => {
  return (
    <div role="alert" className="error-fallback">
      <h2>Something went wrong</h2>
    </div>
  );
};

export default ErrorFallback;
