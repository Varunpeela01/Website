"use client";
import React, { useState, useEffect } from "react";
import NameAnimation from "../components/NameAnimation";
import RotatingMessage from "../components/RotatingMessage";
import ImageSection from "../components/ImageSection";
import LoveModal from "../components/LoveModal";
import FooterMessage from "../components/FooterMessage";

const LoveMessage = () => {
  const letters = ["S", "H", "A", "B", "E", "E", "N", "A"];
  const messages = [
    "My sunshine ☀️",
    "My everything 💫",
    "My world 🌎",
    "My love ❤️",
    "My Princess 👑",
    "My Bangaram ✨",
    "My Darling 💋",
    "My Babygirl 👼🏻",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % letters.length);
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="love-message-container min-h-screen">
      <div className="blur-circle-top" />
      <div className="blur-circle-bottom" />
      <div className="blur-circle-middle" />

      <div className="message-content relative">
        <div
          className="absolute inset-0 flex justify-center"
          style={{ zIndex: 1 }}
        >
          <div
            className="letters-container"
            style={{
              width: "100%",
              maxWidth: "100vw",
              padding: "0 1rem",
              position: "fixed",
              top: "20vh",
            }}
          >
            <NameAnimation letters={letters} currentIndex={currentIndex} />
            <RotatingMessage message={messages[messageIndex]} />
          </div>
        </div>

        <ImageSection onViewMessage={() => setShowModal(true)} />
        <LoveModal isOpen={showModal} onClose={() => setShowModal(false)} />
      </div>

      <FooterMessage />
    </div>
  );
};

export default LoveMessage;
