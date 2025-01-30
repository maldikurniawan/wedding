import React from 'react';

const Thanks = () => {
  return (
    <div className="h-fit py-12 px-4 bg-gray-50">
      <div className="text-center">
        <h1 className="text-3xl md:text-6xl text-pink-500 font-cookie mb-8">
          Terima Kasih
        </h1>
      </div>

      <div className="text-base sm:text-lg md:text-xl text-gray-500 leading-relaxed text-center max-w-4xl mx-auto">
        <p>
          Dengan segala kerendahan hati, kami mengucapkan terima kasih yang
          sebesar-besarnya atas doa, restu, serta kehadiran saudara/i sekalian.
        </p>
        <p className="mt-4">
          Semoga kebahagiaan dan keberkahan senantiasa menyertai kita semua.
        </p>
        <p className="mt-6 font-semibold italic">
          Wassalamualaikum warahmatullahi wabarakatuh.
        </p>
      </div>
    </div>
  );
}

export default Thanks;
