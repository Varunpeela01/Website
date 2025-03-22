import React from "react";

const ImageSection = ({ onViewMessage }) => {
  return (
    <div className="relative w-full max-w-md mx-auto z-10">
      <div
        className="h-[900px] md:h-[700px] sm:h-[500px] w-full max-w-lg mx-auto overflow-hidden rounded-lg"
        style={{
          transform: "translateY(45%)",
          maxHeight: "70vh",
          margin: "0 auto",
          width: "90%",
        }}
      >
        <img
          src="./Image1.png"
          alt="Love Memory"
          className="w-full h-full object-cover"
          style={{ objectPosition: "50% 20%" }}
          loading="eager"
        />
      </div>
      <div
        className="fixed top-4 right-4 sm:top-8 sm:right-8"
        style={{
          zIndex: "30",
        }}
      >
        <button
          className="heart-button transform hover:scale-110 transition-all duration-300"
          onClick={onViewMessage}
          aria-label="Open love message"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "10px",
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-pulse"
            style={{
              filter: "drop-shadow(0 4px 6px rgba(255, 105, 180, 0.4))",
            }}
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="#FF69B4"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ImageSection;
