import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Opening = () => {
  return (
    <div id="Opening" className="h-fit my-12 mx-[200px] flex flex-col items-center justify-center text-center bg-white">
      {/* Title */}
      <h1 className="text-4xl font-semibold text-pink-500">Assalamualaikum Wr. Wb</h1>

      {/* Date */}
      <p className="text-lg text-gray-500 mt-2">Sabtu, 03 Oktober 2020</p>

      {/* Message */}
      <p className="text-md text-gray-700 mt-4 px-4">
        Dengan memohon Rahmat dan Ridho Illahi, teriring niat menjalankan Sunnah Rasulullah ﷺ untuk membentuk rumah tangga yang Sakinah, Mawaddah wa Rahmah, kami mohon doa agar senantiasa diberikan kelancaran dan keberkahan.
      </p>

      {/* Couple's Information */}
      <div className="mt-8 flex justify-center items-center space-x-8 w-full">
        {/* Left text container */}
        <div className="flex flex-col items-end p-4 w-1/2">
          <p className="text-pink-500 font-semibold">Putra Perkasa, S.Kom.</p>
          <p className="text-right whitespace-nowrap">
            Putra Bapak Bunari <br />& Ibu Suratun
          </p>
        </div>

        {/* Dinda Image */}
        <img
          src="assets/images/cowo.png"
          alt="Dinda Saraswati"
          className="w-32 h-32 rounded-full object-cover mx-4"
        />

        {/* Heart icon */}
        <FaHeart className="text-pink-500 text-4xl" />

        {/* Indra Image */}
        <img
          src="assets/images/cewe.png"
          alt="Indra Kusuma"
          className="w-32 h-32 rounded-full object-cover mx-4"
        />

        {/* Right text container */}
        <div className="flex flex-col items-start p-4 w-1/2">
          <p className="text-pink-500 font-semibold">Putri Pertiwi, S.I.Kom.</p>
          <p className="text-left whitespace-nowrap">
            Putri Bapak Totok Somo Dipoyono <br />& Ibu Setyo Listiani
          </p>
        </div>
      </div>
    </div>
  );
};

export default Opening;
