import React from "react";

const Story = () => {
  const stories = [
    {
      title: "Jumpa Pertama",
      date: "10 JANUARI 2018",
      description:
        "Aku pertama kali bertemu Putri di sebuah seminar teknologi di Jakarta. Saat itu, aku hanya menganggapnya sebagai salah satu peserta seperti yang lain. Tapi, ada sesuatu dari caranya tersenyum yang menarik perhatianku. Kami sempat berbicara singkat saat istirahat makan siang, dan itu menjadi awal dari semuanya.",
      image: "assets/images/cowo.png",
    },
    {
      title: "Pertemanan yang Tumbuh",
      date: "12 FEBRUARI 2018",
      description:
        "Setelah pertemuan itu, kami bertukar kontak dan mulai sering berkomunikasi. Awalnya, hanya tentang hal-hal umum, tapi lama-lama aku merasa nyaman berbicara dengannya. Putri sering bertanya tentang pekerjaanku, dan aku menikmati mendengar cerita-ceritanya tentang fotografi. Perlahan, aku menyadari bahwa aku mulai menunggu-nunggu pesan darinya.",
      image: "assets/images/cewe.png",
    },
    {
      title: "Kencan Pertama",
      date: "16 JULI 2018",
      description:
        "Akhirnya, aku mengumpulkan keberanian untuk mengajaknya makan malam. Kami memilih restoran kecil yang tenang, tempat yang kupikir cocok untuk berbicara lebih dalam. Aku menghabiskan waktu berhari-hari memikirkan apakah aku harus mengungkapkan perasaanku. Malam itu, aku memberanikan diri, dan saat dia menerima, rasanya seperti dunia ini lebih indah dari sebelumnya.",
      image: "assets/images/cowo.png",
    },
    {
      title: "Tahun-tahun Penuh Kenangan",
      date: "2019 - 2020",
      description:
        "Hubungan kami semakin dekat, dan aku merasa Putri adalah orang yang selalu membuat hariku lebih baik. Kami melakukan banyak hal bersama yang menjadi kenangan indah. Liburan pertama kami ke Bali adalah salah satu momen terbaik dalam hidupku; melihat dia tertawa lepas di tepi pantai adalah pemandangan yang tidak akan pernah kulupakan. Ketika aku memulai usaha baru, dia adalah orang pertama yang percaya padaku, dan dukungannya membuatku merasa bahwa aku bisa mengatasi segala tantangan. Aku juga bangga bisa mendukungnya di pameran fotografinya; melihat hasil karya Putri dipuji banyak orang membuatku semakin yakin bahwa dia adalah orang yang luar biasa. Setiap momen yang kami lewati selama tahun-tahun itu semakin memperkuat keyakinanku bahwa Putri adalah bagian penting dalam hidupku.",
      image: "assets/images/cewe.png",
    },
    {
      title: "Momen Lamaran",
      date: "20 DESEMBER 2021",
      description:
        "Aku tahu Putri adalah orang yang ingin kuhabiskan sisa hidupku bersama. Aku menyiapkan momen lamaran ini dengan hati-hati, memilih tempat dan waktu yang spesial. Aku ingin dia tahu betapa berharganya dia bagiku. Hari itu adalah salah satu hari paling menegangkan, tapi ketika dia menerima lamaranku, aku merasa menjadi pria paling beruntung di dunia.",
      image: "assets/images/cowo.png",
    },
    {
      title: "Pernikahan yang Bahagia",
      date: "2 OKTOBER 2020",
      description:
        "Hari pernikahan kami adalah hari yang tak akan pernah kulupakan. Saat aku melihatnya berjalan ke arahku dengan gaun putihnya, aku tahu aku telah membuat keputusan terbaik dalam hidupku. Pernikahan kami sederhana, tapi penuh makna. Aku siap menjalani hidup baru bersama Putri. Namun, semua berubah ketika aku terbangun dari koma setelah kecelakaan. Putri kini bersama orang lain. Kenyataan itu menghancurkan hatiku. Dia melanjutkan hidup tanpa aku, dan aku hanya bisa menatapnya dari jauh, mengenang masa lalu yang kini tinggal kenangan.",
      image: "assets/images/cewe.png",
    },
  ];

  return (
    <div id="Kisah" className="h-fit bg-white flex flex-col items-center py-20 px-4">
      {/* Title */}
      <h1 className="text-4xl md:text-6xl text-pink-500 font-cookie mb-2">
        Our Story
      </h1>
      <p className="text-gray-500 text-lg text-center mb-12">
        Kisah kasih sejak awal kami berjumpa dari sudut pandang saya (Putra).
      </p>

      {/* Timeline Container */}
      <div className="relative flex flex-col items-center w-full max-w-6xl">
        {/* Vertical Line */}
        <div className="absolute w-1 bg-gray-300 h-full top-0 left-6 lg:left-1/2 transform -translate-x-1/2"></div>

        {/* Story Items */}
        {stories.map((story, index) => (
          <div
            key={index}
            className={`flex items-center w-full mb-16 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
          >
            {/* Content Box */}
            <div
              className={`relative bg-white shadow-md p-6 rounded-lg border lg:ml-0 ml-16 w-full lg:w-[400px] ${index % 2 === 0
                ? "text-left lg:pr-12"
                : "text-left lg:pl-12"
                }`}
            >
              <h2 className="text-xl font-semibold text-pink-500">{story.title}</h2>
              <p className="text-gray-500 text-sm my-4">{story.date}</p>
              <p className="text-gray-500 text-sm text-justify">{story.description}</p>

              {/* Arrow */}
              <div
                className={`absolute top-1/2 lg:block hidden transform -translate-y-1/2 w-0 h-0 border-solid ${index % 2 === 0
                  ? "border-l-[15px] border-l-pink-600 border-y-[10px] border-y-transparent left-[399px]"
                  : "border-r-[15px] border-r-pink-600 border-y-[10px] border-y-transparent right-[399px]"
                  }`}
              ></div>
            </div>

            {/* Timeline Point (Image) */}
            <div
              className="absolute left-6 lg:left-1/2 transform -translate-x-1/2"
            >
              <img
                src={story.image}
                alt={story.title}
                className="lg:w-[110px] lg:h-[110px] w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Story;
