import React from "react";

function NotFound() {
  return (
    <div>
      <h1
        style={{
          position: "absolute",
          left: "30%",
          top: "30%",
          fontSize: "50px",
        }}
      >
        404-Page Not Found
      </h1>
      <div className="notfound-btn">
        <button
          onClick={() => (window.location.href = "/")}
          style={{
            padding: "10px",
            backgroundColor: "black",
            color: "white",
            fontSize: "16px",
            borderRadius: "5px",
            cursor: "pointer",
            position: "absolute",
            left: "30%",
            top: "75%",
          }}
        >
          Go to counter
        </button>
      </div>
    </div>
  );
}
export default NotFound;
