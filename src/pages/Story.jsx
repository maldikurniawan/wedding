import React from "react";

const Story = () => {
  const stories = [
    {
      title: "Jumpa Pertama",
      date: "10 OKTOBER 2015",
      description:
        "Pertama kali kami dipertemukan di sebuah acara malam keakraban di kampus Universitas Dian Nuswantoro. Sebagai seorang mahasiswa baru, kala itu Dinda melihat Indra sedang sibuk memegang megaphone (toa) di tengah hiruk pikuk acara. Belum ada sesuatu yang spesial, kala itu justru Dinda melihat Indra banyak menerima surat pink (tanda kagum) dari teman sesama mahasiswa barunya.",
      image: "assets/images/cowo.png",
    },
    {
      title: "Kembali Berjumpa",
      date: "12 DESEMBER 2016",
      description:
        "Setelah lama tidak berkomunikasi, Dinda dan Indra kembali dipertemukan di acara kampus lainnya. Kali ini, interaksi kami menjadi lebih sering, dan perlahan tumbuh rasa nyaman di antara kami.",
      image: "assets/images/cewe.png",
    },
  ];

  return (
    <div className="h-fit bg-white flex flex-col items-center py-12 px-4">
      {/* Title */}
      <h1 className="text-pink-500 text-4xl font-semibold mb-2">Jalan Berdua</h1>
      <p className="text-gray-500 text-lg mb-12">
        Kisah kasih sejak awal kami berjumpa
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
              <p className="text-gray-500 text-sm mt-2">{story.date}</p>
              <p className="text-gray-700 mt-4 text-justify">{story.description}</p>

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
