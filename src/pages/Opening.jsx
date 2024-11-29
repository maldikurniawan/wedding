import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Opening = () => {
  return (
    <div
      id="Opening"
      className="h-fit py-12 mx-4 sm:mx-12 md:mx-24 lg:mx-40 xl:mx-[200px] flex flex-col items-center justify-center text-center bg-white p-4"
    >
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-pink-500">
        Assalamualaikum Wr. Wb
      </h1>

      {/* Date */}
      <p className="text-sm sm:text-base md:text-lg text-gray-500 mt-2">
        Sabtu, 03 Oktober 2020
      </p>

      {/* Message */}
      <p className="text-sm sm:text-md md:text-lg text-gray-700 mt-4 px-4">
        Dengan memohon Rahmat dan Ridho Illahi, teriring niat menjalankan Sunnah Rasulullah ﷺ untuk membentuk rumah tangga yang Sakinah, Mawaddah wa Rahmah, kami mohon doa agar senantiasa diberikan kelancaran dan keberkahan.
      </p>

      {/* Couple's Information */}
      <div className="mt-8 flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 w-full">
        {/* Left text container */}
        <div className="md:flex hidden flex-col items-center md:items-end p-4 md:w-1/2">
          <p className="text-pink-500 font-semibold text-center md:text-right">
            Putra Perkasa, S.Kom.
          </p>
          <p className="text-center md:text-right">
            Putra Bapak Sumanto <br />& Ibu Susanti
          </p>
        </div>

        {/* Left Image */}
        <img
          src="assets/images/cowo.png"
          alt="Putra Perkasa"
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover mx-4"
        />

        <div className="flex md:hidden flex-col items-center md:items-end p-4 md:w-1/2">
          <p className="text-pink-500 font-semibold text-center md:text-right">
            Putra Perkasa, S.Kom.
          </p>
          <p className="text-center md:text-right">
            Putra Bapak Sumanto <br />& Ibu Susanti
          </p>
        </div>

        {/* Heart icon */}
        <div className="relative flex items-center justify-center">
          <FaHeart className="absolute text-pink-500 w-10 h-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* Right Image */}
        <img
          src="assets/images/cewe.png"
          alt="Putri Pertiwi"
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover mx-4"
        />

        {/* Right text container */}
        <div className="flex flex-col items-center md:items-start p-4 md:w-1/2">
          <p className="text-pink-500 font-semibold text-center md:text-left">
            Putri Pertiwi, S.I.Kom.
          </p>
          <p className="text-center md:text-left">
            Putri Bapak Sutrisno <br />& Ibu Pertiwi
          </p>
        </div>
      </div>
    </div>
  );
};

export default Opening;
