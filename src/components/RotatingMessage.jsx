import React from "react";

const RotatingMessage = ({ message }) => {
  return (
    <p
      className="rotating-message"
      style={{
        transition: "all 0.5s ease-in-out",
        position: "fixed",
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        textAlign: "center",
        top: "15vh",
        zIndex: 20,
      }}
    >
      {message}
    </p>
  );
};

export default RotatingMessage;
