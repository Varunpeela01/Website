import React from "react";

const NameAnimation = ({ letters, currentIndex }) => {
  return (
    <div className="letters-wrapper" style={{ marginBottom: "2rem" }}>
      {letters.map((letter, index) => (
        <div
          key={index}
          className={`letter font-lilita text-love-pink ${
            index === currentIndex ? "letter-active" : ""
          }`}
          style={{
            fontSize: "clamp(4rem, 20vw, 15rem)",
            opacity: index === currentIndex ? 1 : 0.3,
            transition: "all 0.3s ease-in-out",
            textShadow:
              index === currentIndex
                ? "0 0 10px rgba(255, 207, 231, 0.3)"
                : "none",
          }}
        >
          {letter}
        </div>
      ))}
    </div>
  );
};

export default NameAnimation;
