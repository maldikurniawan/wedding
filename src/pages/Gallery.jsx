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
    <div className="h-fit py-20 bg-pink-50 flex flex-col items-center text-center px-4">
      <div>
        <h1 className="text-pink-500 text-4xl font-semibold mb-2">#PutraPutri</h1>
        <p className="text-gray-500 text-lg mb-12 px-[320px]">
          "And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy. Indeed in that are signs for a people who give thought"
          (Ar-Rum 30:21).
        </p>
      </div>
      <div className="w-3/4 mx-auto">
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
          slidesPerView={5}
          spaceBetween={10}
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
