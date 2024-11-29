import React from "react";

const Location = () => {
  return (
    <div className="h-fit py-20 px-4 bg-white">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h2 className="relative z-10 font-bold text-2xl sm:text-3xl md:text-4xl text-pink-600">
          Lokasi Acara
        </h2>
      </div>

      {/* Map Section */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] px-20 rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.35815106341!2d105.23523151874544!3d-5.362209795125176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40c54bd49cd90f%3A0xfabcc0fa2c9295de!2sGSG%20Universitas%20Lampung!5e0!3m2!1sid!2sid!4v1732854091132!5m2!1sid!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="shadow-lg"
        />
      </div>
    </div>
  );
};

export default Location;
