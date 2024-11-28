import React from "react";
import { FaInstagram, FaRegCalendar, FaRegClock } from "react-icons/fa";

const Wedding = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/reception.jpeg')" }}
      ></div>

      {/* Black Overlay with 50% Opacity */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full px-4">
        {/* Bismillah */}
        <p className="text-sm md:text-lg font-light">
          بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
        </p>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold mt-2">
          Akad Nikah dan Syukuran Pernikahan
        </h1>

        {/* Subtitle */}
        <p className="text-md md:text-lg font-light mt-2">
          Insha Allah akan diselenggarakan pada:
        </p>

        {/* Event Box */}
        <div className="bg-white/20 border border-white rounded-lg shadow-lg p-10 mt-6 text-white w-11/12 md:w-1/4">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">AKAD NIKAH</h2>
          <hr />

          {/* Time and Date */}
          <div className="items-start mt-6 max-[450px]:text-sm whitespace-nowrap">
            <div className="flex items-center space-x-2">
            <FaRegClock />
              <p>08:00 WIB (Live di Instagram)</p>
            </div>
            <div className="flex items-center space-x-2">
            <FaRegCalendar />
              <p>Sabtu, 03 Oktober 2020</p>
            </div>
          </div>
        </div>

        {/* Instagram Info */}
        <p className="mt-6 text-md md:text-lg">
          Hadir secara virtual melalui siaran langsung Instagram:
        </p>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 bg-pink-500 hover:bg-pink-600 gap-2 text-white font-medium py-2 px-4 rounded-full inline-flex items-center"
        >
          <FaInstagram />
          @putraperkasa
        </a>
      </div>
    </div>
  );
};

export default Wedding;
