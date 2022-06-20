import React, { useEffect, useRef, useState } from 'react';
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
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { Pagination, Navigation, FreeMode, Thumbs } from 'swiper';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Box } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useOpenModel } from './Hooks';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='down' ref={ref} {...props} />;
});

const activities = [
  {
    id: '1',
    img: activity1,
    title: '藻礁生態導覽',
    brief:
      '想要與觀新藻礁譜一場千年之戀嗎？認識10年才長1公分的海洋生物育嬰房，走～由專業海岸生態解說員帶您一起去探索！',
    intro: 'TEST1',
  },
  {
    id: '2',
    img: activity2,
    title: '黑米DIY－紅龜粿',
    brief:
      '想要與觀新藻礁譜一場千年之戀嗎？認識10年才長1公分的海洋生物育嬰房，走～由專業海岸生態解說員帶您一起去探索！',
    intro: 'TEST2',
  },
  {
    id: '3',
    img: activity3,
    title: '客家擂茶DIY',
    brief:
      '想要與觀新藻礁譜一場千年之戀嗎？認識10年才長1公分的海洋生物育嬰房，走～由專業海岸生態解說員帶您一起去探索！',
    intro: 'TEST3',
  },
  {
    id: '4',
    img: activity4,
    title: '竹筏生態體驗',
    brief:
      '想要與觀新藻礁譜一場千年之戀嗎？認識10年才長1公分的海洋生物育嬰房，走～由專業海岸生態解說員帶您一起去探索！',
    intro: 'TEST4',
  },
  {
    id: '5',
    img: activity5,
    title: '黑米DIY-爆米香',
    brief:
      '想要與觀新藻礁譜一場千年之戀嗎？認識10年才長1公分的海洋生物育嬰房，走～由專業海岸生態解說員帶您一起去探索！',
    intro: 'TEST5',
  },
  {
    id: '6',
    img: activity6,
    title: '獨木舟體驗',
    brief:
      '想要與觀新藻礁譜一場千年之戀嗎？認識10年才長1公分的海洋生物育嬰房，走～由專業海岸生態解說員帶您一起去探索！',
    intro: 'TEST6',
  },
];

const Activities = (props) => {
  const [
    open,
    contentIndex,
    setContentIndex,
    handleOpen,
    handleClose,
    modal,
    setModal,
  ] = useOpenModel(activities);

  const handleSelected = (e) => setContentIndex(e.target.dataset.id);

  return (
    <div
      ref={props.activityRef}
      className='container mx-auto mb-10 mt-20 w-full'
    >
      <div className='flex-col items-center'>
        <h2 className='mb-6 text-center text-4xl sm:text-left'>活動體驗</h2>
        <Swiper
          slidesPerView={4}
          spaceBetween={5}
          slidesPerGroup={1}
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
          className='activity-swiper pb-16'
        >
          {activities.map((activity) => (
            <SwiperSlide onClick={handleSelected} key={activity.id}>
              <Card onClick={handleOpen} elevation={2}>
                <CardActionArea>
                  <Box sx={{ overflow: 'hidden' }}>
                    <CardMedia
                      data-id={activity.id}
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
                      alt={activity.id}
                    />
                  </Box>
                  <CardContent>
                    <h3 data-id={activity.id} className='mb-2 text-xl'>
                      {activity.title}
                    </h3>
                    <p data-id={activity.id} className='text-sm'>
                      {activity.brief}
                    </p>
                  </CardContent>
                </CardActionArea>
              </Card>
            </SwiperSlide>
          ))}
          <ActivityDetails
            open={open}
            modal={modal}
            handleClose={handleClose}
          />
        </Swiper>
      </div>
    </div>
  );
};

const ActivityDetails = ({ open, handleClose, modal }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  if (modal) {
    return (
      <Dialog
        open={open}
        maxWidth={'xl'}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby='alert-dialog-slide-description'
        className='dialog-swiper'
      >
        <DialogTitle className='text-center'>{modal.title}</DialogTitle>

        <DialogContent>
          <Swiper
            style={{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }}
            loop={true}
            spaceBetween={5}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className='mySwiper2'
          >
            <SwiperSlide>
              <img src={modal.img} alt='' />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={3}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className='mySwiper'
          >
            <SwiperSlide>
              <img src={modal.img} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={modal.img} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={modal.img} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={modal.img} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={modal.img} alt='' />
            </SwiperSlide>
          </Swiper>
          <DialogContentText id='alert-dialog-slide-description'>
            <div>
              活動解說：
              <br />
              {modal.brief}
            </div>
            <div>
              費用：
              <br />
            </div>
            <div>
              時長：
              <br />
            </div>
            <div>
              地點：
              <br />
            </div>
            <div>
              注意事項：
              <br />
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' onClick={handleClose}>
            關閉
          </Button>
          <Button variant='contained' onClick={handleClose}>
            立即報名
          </Button>
        </DialogActions>
      </Dialog>
    );
  } else {
    return false;
  }
};

export default Activities;
