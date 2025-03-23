import React from "react";

const ImageSection = ({ onViewMessage }) => {
  return (
    <div className="w-full max-w-md mx-auto fixed bottom-0 left-1/2 -translate-x-1/2 image-fade-in">
      <div
        className="w-full max-w-lg mx-auto overflow-hidden rounded-t-lg"
        style={{
          height: "70vh",
          margin: "0 auto",
          width: "90%",
        }}
      >
        <img
          src="/images/Image1.png"
          alt="Love Memory"
          className="w-full h-full object-cover"
          style={{ objectPosition: "50% 30%" }}
          loading="eager"
        />
      </div>
    </div>
  );
};

export default ImageSection;
