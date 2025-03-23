import React from "react";

const FooterMessage = () => {
  return (
    <div
      className="footer-message fixed text-center w-full"
      style={{
        top: "14vh",
        width: "100%",
        maxWidth: "100vw",
        padding: "clamp(8px, 2vh, 16px)",
        zIndex: 15,
        fontSize: "clamp(0.875rem, 2vw, 1.125rem)",
        color: "#ff69b4",
        fontWeight: "500",
      }}
    >
      <p className="px-4 inline-block">Made with love, just for you my girl!</p>
    </div>
  );
};

export default FooterMessage;
