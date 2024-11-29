import React, { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll"; // Importing Link from react-scroll

const Welcome = () => {
  const [guestName, setGuestName] = useState("Bapak/Ibu/Saudara/i");

  useEffect(() => {
    // Disable scrolling when the component mounts
    // document.body.style.overflow = "hidden";

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
    // Optional: Perform any action before scrolling, like showing a loading message or animation
    setTimeout(() => {
      // Trigger smooth scroll to the "Opening" section
      document.getElementById("Opening")?.scrollIntoView({ behavior: "smooth" });

      // Optional: Re-enable scrolling after the scroll is triggered
      document.body.style.overflow = "auto";
    }, 500); // Match the duration for any UI transition (e.g., fade-out)
  };

  return (
    <div
      className="h-screen inset-0 bg-cover bg-center flex justify-center items-center transition-opacity duration-500"
      style={{ backgroundImage: "url('/assets/images/couple.jpeg')" }}
    >
      {/* Black overlay with opacity */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative text-center text-white p-4">
        {/* Wedding Header */}
        <div className="flex justify-center mb-4">
          <img src="assets/images/ring.png" className="w-20" alt="Wedding Ring" />
        </div>
        <h2 className="font-serif text-2xl md:text-3xl mb-2">The Wedding of</h2>

        {/* Couple's Names */}
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
          Putra &amp; Putri
        </h1>

        {/* Event Status */}
        <p className="text-lg mb-4">ACARA SUDAH BERLANGSUNG!</p>
        <p className="text-sm mb-8">
          Hadir secara virtual melalui siaran langsung Instagram:
        </p>

        {/* Instagram Button */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-full text-white text-sm shadow-lg transition-all duration-300"
        >
          <FaInstagram />
          @putraperkasa
        </a>

        {/* Guest Name */}
        <div className="mt-8 text-lg italic">
          <p>Kepada Yth.</p>
          <p className="font-bold mb-4">{guestName}</p>
          <hr />
        </div>

        {/* Scroll or Open Invitation Button */}
        <button
          onClick={openInvitation} // Use openInvitation to trigger scroll with a delay
          className="mt-8 flex items-center justify-center mx-auto gap-2 px-6 py-3 bg-white text-black rounded-full shadow-lg text-sm font-semibold hover:bg-gray-200 transition-all duration-300"
        >
          <span>Klik untuk Melihat Detail Acara</span>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
