import React from "react";

const RotatingMessage = ({ message }) => {
  return (
    <p
      className="rotating-message"
      style={{
        transition: "all 0.5s ease-in-out",
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        
        width: "100%",
        textAlign: "center",
        marginTop: "8rem", // Increased vertical spacing
        paddingTop: "2rem", // Additional padding for better spacing
      }}
    >
      {message}
    </p>
  );
};

export default RotatingMessage;
