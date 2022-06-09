import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper';

const Neighborhood = (props) => {
  return (
    <div ref={props.neighborhoodRef} className='container mx-auto mt-10 w-full'>
      <h2 className='mb-6 text-4xl'>鄰近景點</h2>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 50,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className='coverflow-swiper'
      >
        <SwiperSlide>
          <img src='https://picsum.photos/300/300' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://picsum.photos/300/300' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://picsum.photos/300/300' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://picsum.photos/300/300' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://picsum.photos/300/300' alt='' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Neighborhood;
