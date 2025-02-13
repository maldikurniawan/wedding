import React, { useState, useEffect } from "react";
import { FaInstagram } from "react-icons/fa";
import { Time } from "@/components";

const Welcome = ({ setIsPlayingMusic, setShowSakura }) => {
  const [guestName, setGuestName] = useState("Bapak/Ibu/Saudara/i");
  const [isCountdownOver, setIsCountdownOver] = useState(false);

  const handleCountdownComplete = () => {
    console.log("Countdown is complete!"); // Debugging: check if onComplete is called
    setIsCountdownOver(true);
  };

  useEffect(() => {
    // Disable scrolling when the component mounts
    document.body.style.overflow = "hidden";

    // Extract the 'to' query parameter from the URL
    const params = new URLSearchParams(window.location.search);
    const name = params.get("to");
    if (name) {
      setGuestName(name);
    }

    return () => {
      // Clean up and enable scrolling when the component unmounts
      document.body.style.overflow = "auto";
    };
  }, []);

  // Function to handle invitation click and delayed scroll
  const openInvitation = () => {
    setShowSakura(true);
    setTimeout(() => {
      // Trigger smooth scroll to the "Opening" section
      document.getElementById("Opening")?.scrollIntoView({ behavior: "smooth" });
      document.body.style.overflow = "auto";
      setIsPlayingMusic(true);
    }, 500);
  };

  return (
    <div id="Beranda" className="relative h-screen flex justify-center items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/couple.jpeg')" }}
      ></div>
      {/* Black overlay with opacity */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative text-center text-white p-4">
        {/* Wedding Header */}
        <div className="flex justify-center mb-4">
          <img src="assets/images/ring.png" className="w-20" alt="Wedding Ring" />
        </div>
        <h2 className="text-2xl md:text-3xl mb-2 font-cookie">The Wedding of</h2>

        {/* Couple's Names */}
        <h1 className="font-cookie text-6xl md:text-8xl mb-4">
          Putra &amp; Putri
        </h1>

        <div className="text-center">
          {!isCountdownOver ? (
            <div className="text-lg font-medium">
              {/* Countdown Timer */}
              <div className="text-3xl font-bold">
                <Time
                  endTime="2025-12-04T11:11:59"
                  onComplete={handleCountdownComplete}
                />
              </div>
            </div>
          ) : (
            <>
              {/* Event Status */}
              <div className="text-lg mb-4 tracking-wider font-medium">ACARA SUDAH BERLANGSUNG!</div>
              <div className="text-sm mb-8">
                Hadir secara virtual melalui siaran langsung Instagram:
              </div>

              {/* Instagram Button */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 hover:bg-pink-600 gap-2 text-white animate-bounce font-medium py-2 px-4 rounded-full inline-flex items-center"
              >
                <FaInstagram className="w-8 h-8" />
                @putraperkasa
              </a>
            </>
          )}
        </div>

        {/* Guest Name */}
        <div className="mt-4 text-lg italic">
          <div>Kepada Yth.</div>
          <div className="font-bold mb-4">{guestName}</div>
          <hr />
        </div>

        {/* Scroll or Open Invitation Button */}
        <button
          onClick={openInvitation}
          className="mt-8 relative flex items-center justify-center mx-auto gap-2 px-6 py-3 bg-white text-black rounded-full shadow-lg text-sm font-semibold hover:bg-gray-200 transition-all duration-300"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-white opacity-50 mx-10"></span>
          <span className="relative">Klik untuk Melihat Detail Acara</span>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
