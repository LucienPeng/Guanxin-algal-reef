import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';

const banners = [
  {
    id: '1',
    className: 'swiper-bg1',
  },
  {
    id: '2',
    className: 'swiper-bg2',
  },
  {
    id: '3',
    className: 'swiper-bg3',
  },
  {
    id: '4',
    className: 'swiper-bg4',
  },
  {
    id: '5',
    className: 'swiper-bg5 text-black',
  },
];

const Banner = () => {
  return (
    <div className='hero-banner bg-local text-center lg:bg-fixed'>
      <Swiper
        spaceBetween={100}
        effect={'fade'}
        navigation={true}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className='banner-swiper'
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div
              className={`${banner.className} flex min-h-screen w-full flex-col items-center justify-center text-xl`}
            >
              <p>潮間帶探秘</p>
              <h1 className='mb-5 text-9xl font-bold'>藻礁生態趣</h1>
              <p>
                全台面積最大的千年藻礁，因其生長速度緩慢，每一方寸都彌足珍貴。
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
