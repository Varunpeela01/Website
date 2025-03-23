"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const NameAnimation = dynamic(() => import("../components/NameAnimation"));
const RotatingMessage = dynamic(() => import("../components/RotatingMessage"));
const ImageSection = dynamic(() => import("../components/ImageSection"));
const LoveModal = dynamic(() => import("../components/LoveModal"));
const FooterMessage = dynamic(() => import("../components/FooterMessage"));
const HeartButton = dynamic(() => import("../components/HeartButton"));

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
    <div className="love-message-container min-h-screen hero-container">
      <div className="blur-circle-top" />
      <div className="blur-circle-bottom" />
      <div className="blur-circle-middle" />
      <div className="hero-background">
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg id="33:11" width="1280" height="832" viewBox="0 0 1280 832" fill="none" xmlns="http://www.w3.org/2000/svg" class="background-svg" style="width: 100%; height: 100%; position: absolute; top: 0; left: 0"> <g clip-path="url(#clip0_33_11)"> <g filter="url(#filter0_f_33_11)"> <circle cx="87" cy="648" r="130" fill="#FF69B4" fill-opacity="0.64"></circle> </g> <g filter="url(#filter1_f_33_11)"> <circle cx="649.5" cy="389.5" r="76.5" fill="#D580AA" fill-opacity="0.64"></circle> </g> <g filter="url(#filter2_f_33_11)"> <circle cx="989.5" cy="33.5" r="104.5" fill="#FF69B4" fill-opacity="0.64"></circle> </g> <g filter="url(#filter3_f_33_11)"> <circle cx="1233.5" cy="797.5" r="76.5" fill="#FF69B4" fill-opacity="0.64"></circle> </g> <g filter="url(#filter4_f_33_11)"> <circle cx="198.5" cy="33.5" r="331.5" fill="#FFD3B8" fill-opacity="0.64"></circle> </g> <g filter="url(#filter5_f_33_11)"> <circle cx="560" cy="778" r="150" fill="#FBB6FF" fill-opacity="0.64"></circle> </g> <g filter="url(#filter6_f_33_11)"> <circle cx="1049" cy="464" r="164" fill="#FBB6FF" fill-opacity="0.64"></circle> </g> </g> <defs> <filter id="filter0_f_33_11" x="-143" y="418" width="460" height="460" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend> <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_33_11"></feGaussianBlur> </filter> <filter id="filter1_f_33_11" x="473" y="213" width="353" height="353" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend> <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_33_11"></feGaussianBlur> </filter> <filter id="filter2_f_33_11" x="785" y="-171" width="409" height="409" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend> <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_33_11"></feGaussianBlur> </filter> <filter id="filter3_f_33_11" x="1057" y="621" width="353" height="353" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend> <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_33_11"></feGaussianBlur> </filter> <filter id="filter4_f_33_11" x="-233" y="-398" width="863" height="863" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend> <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_33_11"></feGaussianBlur> </filter> <filter id="filter5_f_33_11" x="310" y="528" width="500" height="500" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend> <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_33_11"></feGaussianBlur> </filter> <filter id="filter6_f_33_11" x="785" y="200" width="528" height="528" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend> <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_33_11"></feGaussianBlur> </filter> <clipPath id="clip0_33_11"> <rect width="1280" height="832" fill="white"></rect> </clipPath> </defs> </svg>',
          }}
        />
      </div>

      <HeartButton onClick={() => setShowModal(true)} />
      <FooterMessage />

      <div
        className="letters-container"
        style={{
          width: "100%",
          maxWidth: "100vw",
          padding: "0 1rem",
          position: "fixed",
          top: "22vh",
          zIndex: 1,
        }}
      >
        <NameAnimation letters={letters} currentIndex={currentIndex} />
      </div>

      <div style={{ position: "relative", zIndex: 2 }}>
        <ImageSection />
      </div>
      <LoveModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default LoveMessage;
