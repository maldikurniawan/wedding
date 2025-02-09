import React, { useState, useEffect } from "react";

const Time = ({ endTime, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Function to calculate the time left
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = new Date(endTime).getTime() - now.getTime();

    if (difference <= 0) {
      if (onComplete) {
        onComplete(); // Trigger the onComplete callback when the countdown reaches zero
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [endTime]);

  return (
    <div className="flex flex-col items-center text-white p-6 rounded-lg">
      {/* Countdown Numbers */}
      <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 justify-center">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div
            key={unit}
            className="flex flex-col items-center bg-pink-500 text-white rounded-full w-16 h-16 justify-center font-bold text-lg sm:w-20 sm:h-20"
          >
            <span>{value}</span>
            <span className="text-xs sm:text-sm font-medium capitalize">{unit}</span>
          </div>
        ))}
      </div>

      {/* Add to Calendar Button */}
      <button className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-full font-medium text-sm mt-2">
        Add to Calendar
      </button>
    </div>
  );
};

export default Time;
