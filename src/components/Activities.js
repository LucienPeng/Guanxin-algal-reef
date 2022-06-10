import React, { useRef, useState } from 'react';
import activity1 from '../assets/images/activity-1.jpeg';
import activity2 from '../assets/images/activity-2.jpeg';
import activity3 from '../assets/images/activity-3.jpeg';
import activity4 from '../assets/images/activity-4.webp';
import activity5 from '../assets/images/activity-5.jpeg';
import activity6 from '../assets/images/activity-6.jpeg';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Box } from '@mui/material';

const activities = [
  {
    id: '1',
    img: activity1,
    title: '藻礁生態導覽',
    details:
      '123456789想要與觀新藻礁譜一場千年之戀嗎？認識10年才長1公分的海洋生物育嬰房，走～由專業海岸生態解說員帶您一起去探索！',
  },
  {
    id: '2',
    img: activity2,
    title: '黑米DIY－紅龜粿',
    details:
      '想要與觀新藻礁譜一場千年之戀嗎？認識10年才長1公分的海洋生物育嬰房，走～由專業海岸生態解說員帶您一起去探索！',
  },
  {
    id: '3',
    img: activity3,
    title: '客家擂茶DIY',
    details:
      '想要與觀新藻礁譜一場千年之戀嗎？認識10年才長1公分的海洋生物育嬰房，走～由專業海岸生態解說員帶您一起去探索！',
  },
  {
    id: '4',
    img: activity4,
    title: '竹筏生態體驗',
    details:
      '想要與觀新藻礁譜一場千年之戀嗎？認識10年才長1公分的海洋生物育嬰房，走～由專業海岸生態解說員帶您一起去探索！',
  },
  {
    id: '5',
    img: activity5,
    title: '黑米DIY-爆米香',
    details:
      '想要與觀新藻礁譜一場千年之戀嗎？認識10年才長1公分的海洋生物育嬰房，走～由專業海岸生態解說員帶您一起去探索！',
  },
  {
    id: '6',
    img: activity6,
    title: '獨木舟體驗',
    details:
      '想要與觀新藻礁譜一場千年之戀嗎？認識10年才長1公分的海洋生物育嬰房，走～由專業海岸生態解說員帶您一起去探索！',
  },
];

const Activities = (props) => {
  return (
    <div
      ref={props.activityRef}
      className='container mx-auto mb-20 mt-10 w-full'
    >
      <div className='flex-col items-center'>
        <h2 className='mb-6 text-4xl '>活動體驗</h2>
        <Swiper
          slidesPerView={4}
          spaceBetween={5}
          slidesPerGroup={2}
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
          className='activity-swiper pb-10'
        >
          {activities.map((activity) => (
            <SwiperSlide key={activity.id}>
              <Card>
                <CardActionArea>
                  <Box sx={{ overflow: 'hidden' }}>
                    <CardMedia
                      sx={{
                        height: 300,
                        '&:hover': {
                          opacity: 0.9,
                          transform: 'scale(1.2)',
                          transition: 'all ease-out 0.5s',
                        },
                      }}
                      component='img'
                      image={activity.img}
                      alt='activites'
                    />
                  </Box>
                  <CardContent>
                    <h3 className='mb-2 text-xl'>{activity.title}</h3>
                    <p className='text-sm'>{activity.details}</p>
                  </CardContent>
                </CardActionArea>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Activities;
