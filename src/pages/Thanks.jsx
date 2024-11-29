import React from 'react';

const Thanks = () => {
  return (
    <div className="h-fit py-20 px-4 bg-pink-50">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-pink-600 mb-4">
          Terima Kasih
        </h1>
      </div>

      <div className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
        <p className="mb-4">
          Berdasarkan kondisi saat ini, tanpa mengurangi rasa hormat, diharapkan tetap bisa menjalin silaturahmi melalui media online, bukan dengan kontak fisik secara langsung.
        </p>
        <p className="mb-4">
          Mohon pengertiannya.
        </p>
        <p className="mb-4">
          Atas segala do'a dan restu saudara/i, kami ucapkan terima kasih.
        </p>
        <p>
          Wassalamualaikum warahmatullahi wabarakatuh.
        </p>
      </div>
    </div>
  );
}

export default Thanks;
