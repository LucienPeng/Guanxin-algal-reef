import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={5}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://picsum.photos/700/300" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/700/300" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/700/300" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/700/300" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/700/300" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/700/300" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/700/300" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/700/300" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/700/300" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
