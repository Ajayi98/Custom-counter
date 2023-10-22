import React from "react";

import { ErrorBoundary } from "react-error-boundary";
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div>
      <div className="error-page">
        <h2>Oops! an error occured... {error.message}</h2>
      </div>

      <button
        onClick={resetErrorBoundary}
        style={{
          padding: "10px",
          backgroundColor: "black",
          color: "white",
          fontSize: "16px",
          borderRadius: "5px",
          cursor: "pointer",
          position: "absolute",
          left: "40%",
          top: "75%",
        }}
      >
        Go back to counter
      </button>
    </div>
  );
}

function MyErrorBoundary({ children }) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  );
}

export default MyErrorBoundary;
