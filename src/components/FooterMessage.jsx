import React from "react";

const FooterMessage = () => {
  return (
    <div
      className="footer-message fixed text-center w-full"
      style={{
        top: "18vh",
        transform: "translateY(-130%)",
        zIndex: 15,
        fontSize: "clamp(0.875rem, 2vw, 1.125rem)",
      }}
    >
      <p className="px-4">Made with love, just for you</p>
    </div>
  );
};

export default FooterMessage;
