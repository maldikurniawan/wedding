import React from 'react';

const Thanks = () => {
  return (
    <div className="h-fit py-12 px-4 bg-gray-50">
      <div className="text-center">
        <h1 className="text-3xl md:text-6xl text-pink-500 font-cookie mb-8">
          Terima Kasih
        </h1>
      </div>

      <div className="text-base sm:text-lg md:text-xl text-gray-500 leading-tight text-center max-w-4xl mx-auto">
        <p>
          Berdasarkan kondisi saat ini, tanpa mengurangi rasa hormat, diharapkan tetap bisa menjalin silaturahmi melalui media online, bukan dengan kontak fisik secara langsung.
        </p>
        <p className="mb-4">
          Mohon pengertiannya.
        </p>
        <p className="mb-4">
          Atas segala do'a dan restu saudara/i, kami ucapkan terima kasih. <br />
          Wassalamualaikum warahmatullahi wabarakatuh.
        </p>
      </div>
    </div>
  );
}

export default Thanks;
