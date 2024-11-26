import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";

const Welcome = () => {
  const [guestName, setGuestName] = useState("Bapak/Ibu/Saudara/i");

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

  const openInvitation = () => {
    // Enable scrolling when the button is clicked
    document.body.style.overflow = "auto";
    console.log("Invitation opened!");
  };

  return (
    <div
      className="bg-white opacity-90 flex justify-center items-center h-screen"
      id="welcome"
    >
      <div className="text-center">
        {/* Title */}
        <h2 className="font-serif mb-4 text-3xl text-black">The Wedding Of</h2>

        {/* Circular Image */}
        <img
          src="/assets/images/bg.png"
          alt="background"
          className="w-56 h-56 rounded-full border-4 border-white shadow-lg mb-4 mx-auto"
        />

        {/* Couple's Names */}
        <h2 className="font-serif mb-4 text-3xl text-black">Putra &amp; Putri</h2>

        {/* Guest Name */}
        <div className="text-gray-900 text-lg">
          Kepada Yth {guestName}
        </div>

        {/* Open Invitation Button */}
        <button
          type="button"
          className="shadow-lg rounded-full flex mx-auto items-center gap-2 border-black border mt-3 px-6 py-2 bg-white text-black font-semibold"
          onClick={openInvitation}
        >
          <FaHome />
          <span>Open Invitation</span>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
