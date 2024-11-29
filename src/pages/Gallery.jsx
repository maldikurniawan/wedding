import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

const Gallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const images = [
    "assets/images/pic1.jpeg",
    "assets/images/pic2.jpeg",
    "assets/images/pic3.jpeg",
    "assets/images/pic4.jpeg",
    "assets/images/pic1.jpeg",
    "assets/images/pic2.jpeg",
    "assets/images/pic3.jpeg",
    "assets/images/pic4.jpeg",
  ];

  return (
    <div id="Gallery" className="h-fit py-20 bg-gray-50 flex flex-col items-center text-center px-4">
      <div>
        <h1 className="text-3xl md:text-6xl text-pink-500 font-cookie mb-4">
          #PutraPutri
        </h1>
        <p className="text-gray-500 tracking-tight text-sm sm:text-lg mb-12 px-4 sm:px-12 lg:px-[340px]">
          "And of His signs is that He created for you from yourselves mates
          that you may find tranquility in them; and He placed between you
          affection and mercy. Indeed in that are signs for a people who give
          thought" <br /> (Ar-Rum 30:21).
        </p>
      </div>
      <div className="w-full sm:w-3/4 lg:w-2/3 mx-auto">
        <Swiper
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Autoplay, Navigation, Pagination, Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
          className="w-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbs Swiper */}
        <Swiper
          onSwiper={setThumbsSwiper}
          slidesPerView={2} // Default for small screens
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 3, // For screens >= 640px
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 4, // For screens >= 768px
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5, // For screens >= 1024px
              spaceBetween: 20,
            },
          }}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[Thumbs]}
          className="mt-4"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="object-cover w-full h-full cursor-pointer"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
