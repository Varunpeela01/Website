import React, { useState, useEffect } from "react";

const TogetherTimer = () => {
  const startDate = new Date("2023-09-01"); // Replace with your actual start date
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = now.getTime() - startDate.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeElapsed({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="together-timer fixed right-4 bottom-32 text-right z-20 opacity-0 animate-fade-in"
      style={{ animationDelay: "4s" }}
    >
      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg">
        <h3 className="text-love-pink font-lilita mb-2 text-lg">
          Time Together
        </h3>
        <div className="font-poppins text-love-pink">
          <div className="flex flex-col gap-1">
            <div className="flex justify-between">
              <span className="font-medium">Days:</span>
              <span className="ml-2">{timeElapsed.days}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Hours:</span>
              <span className="ml-2">{timeElapsed.hours}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Minutes:</span>
              <span className="ml-2">{timeElapsed.minutes}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Seconds:</span>
              <span className="ml-2">{timeElapsed.seconds}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TogetherTimer;
