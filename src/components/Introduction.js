import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Box, Modal, Fade, Backdrop } from '@mui/material';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import intro0 from '../assets/images/intro1.jpeg';
import intro1 from '../assets/images/intro2.jpeg';
import intro2 from '../assets/images/intro3.jpeg';
import intro3 from '../assets/images/intro4.jpeg';
import intro4 from '../assets/images/intro5.jpeg';
import intro5 from '../assets/images/intro6.jpeg';
import intro6 from '../assets/images/intro7.jpeg';
import intro7 from '../assets/images/intro8.jpeg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper';
import { useOpenModel } from './Hooks';

const carousselPhotos = [
  {
    id: '0',
    img: intro0,
    title: '【藻礁生態環境教室】',
  },
  {
    id: '1',
    img: intro1,
    title: '【藻礁生態環境教室】',
  },
  {
    id: '2',
    img: intro2,
    title: '【藻礁生態環境教室】',
  },
  {
    id: '3',
    img: intro3,
    title: '【藻礁生態環境教室】',
  },
  {
    id: '4',
    img: intro4,
    title: '【藻礁生態環境教室】',
  },
  {
    id: '5',
    img: intro5,
    title: '【藻礁生態環境教室】',
  },
  {
    id: '6',
    img: intro6,
    title: '【藻礁生態環境教室】',
  },
  {
    id: '7',
    img: intro7,
    title: '【藻礁生態環境教室】',
  },
];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  border: '0px solid #000',
  transform: 'translate(-50%, -50%)',
  width: 800,
  heigh: 600,
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className='p-5'>
          <p>{children}</p>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Introduction = (props) => {
  const [selected, setSelected] = useState(0);

  const [
    open,
    contentIndex,
    setContentIndex,
    handleOpen,
    handleClose,
    modal,
    setModal,
  ] = useOpenModel(carousselPhotos);

  const handleChange = (event, newSelected) => {
    setSelected(newSelected);
  };
  const handleSelected = (props) => setContentIndex(props.activeIndex);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <div
      ref={props.aboutRef}
      className='container mx-auto mt-20 min-h-screen w-full'
    >
      <h2 className='mb-6 text-center text-4xl sm:text-left'>認識我們</h2>
      <Tabs
        value={selected}
        onChange={handleChange}
        aria-label='introductions'
        centered={matches}
      >
        <Tab label='場館簡介' {...a11yProps(0)} />
        <Tab label='時光隧道' {...a11yProps(1)} />
        <Tab label='認識藻礁' {...a11yProps(2)} />
      </Tabs>

      <TabPanel value={selected} index={0}>
        <span>
          歲月是什麼模樣？站在台灣本島面積最大的藻礁地形﹣觀新藻礁前，千年流轉時光化成的生態巨作令人大為震撼，也深覺人類的渺小。
          <br />
          <br />
          占地約370公頃的觀新藻礁，不同於動物所形成的珊瑚礁，藻礁是由無節珊瑚藻類死亡鈣化後，沉積於礫石灘上所形成石灰岩礁體的｢植物礁｣，平均10年才可生成1公分。
          <br />
          <br />
          桃園的藻礁群曾經自大園、觀音綿延到新屋，然而隨著沿海工業區的開發，現已從27公里僅存約5公里。為保育這4000年的海洋珍寶，2014年劃設｢桃園觀新藻礁生態系野生動物保護區｣，成為認識藻礁環境的無牆教室。而每年舉辦的｢珍愛桃園藻礁千人健行｣活動，也讓民眾身體力行愛護這片海岸。
          <br />
          <br />
          觀新藻礁位於觀音區小飯壢溪以南到新屋區後湖溪口以北的沿海，除了驚艷於這珍貴的千年地景，豐富的生物多樣性也是觀新藻礁的亮點之一﹔目前共發現有10種藻類、129種動物，動物密度是高美濕地的5倍，香山濕地的8倍，宛如是北台灣的海洋生態博物館。觀新藻礁共劃分為核心區、緩衝區及永續利用區。每當退潮，礁體露出於海面時，可在潮間帶發現藻類魚蝦、螺貝類、綠藻等多種海岸生物，而踏上木棧道可前往紅樹林教育園區，近距離觀察彈塗魚、招潮蟹。順遊推薦新屋百年石滬、觀音草漯沙丘、許厝港濕地，一覽桃園濱海四大亮點。
          <br />
          <br />
          桃園沿海藻礁帶約有27公里，是全台僅存最大、生長最完整的藻礁地形，為了讓民眾貼近自然、推動生態教育，將新屋區永興掩埋場打造成「藻礁生態環境教室」。
        </span>
      </TabPanel>

      <TabPanel value={selected} index={1}>
        <span>
          全國第一座的藻礁生態環境教室位於桃園市新屋區永興里，前身為永興垃圾掩埋場自民國95年起封閉，桃園市政府將其轉型於108年7月4日揭牌啟用。
          <br />
          <br />
          館內介紹藻礁形成與分布、常見生物、新屋溪紅樹林生態，館內採免費參觀，如需導覽服務歡迎至Fb線上報名專業導覽活動，讓您親近千年觀新藻礁。藻礁生態環境教室不只是展示，更成為富有教育意義之海岸環境教育場域。
          <br />
          <br />
          桃園沿海藻礁約27公里，桃園藻礁分布的範圍北起大園區竹圍漁港，南至新屋區永安漁港，是目前全國最大、生長最完整的藻礁地形，最古老的年代則超過7500年。藻礁生態環境教室週邊海岸即為觀新藻礁生態系野生動物保護區所在地，屬桃園最南邊的藻礁帶，延伸約4.5公里，多孔隙生態系的特性孕育豐富生物多樣性。
          <br />
          <br />
          藻礁生態環境教室以推廣環境教育為目的，歡迎您至藻礁生態環境教室，感受藻礁生態之美與我們一起守護。
        </span>
      </TabPanel>

      <TabPanel value={selected} index={2}>
        <span>
          桃園觀新藻礁生態系野生動物保護區位於臺灣桃園市觀音區至新屋區海岸一帶，於2014年7月7日，桃園縣政府針對觀新藻礁約4公里區域，依《野生動物保育法》公告劃定為野生動物保護區及重要棲息環境，稱為桃園觀新藻礁生態系野生動物保護區。
          <br />
          桃園觀新藻礁保護區是屬於全球少見的藻礁最南邊區塊的藻礁地形。桃園藻礁是以無節或殼狀珊瑚藻為主要的造礁生物，經由其體內鈣化作用沉積碳酸鈣所建造之生物礁體。
          <br />
          <br />
          相較於珊瑚蟲形成的珊瑚礁，藻礁和珊瑚礁一樣會形成碳酸鈣的骨架，但在生成環境上有所差異。珊瑚礁通常需要溫暖且清澈的海水才有辦法形成；而珊瑚藻的耐受性較珊瑚蟲強，因此能生長在一些環境較差，不利於珊瑚礁生成的環境裡，包括光線昏暗的深水地區、易受浪潮打擊的潮間帶區、鹽度變化較大的泥沙岸以及濁度和營養鹽濃度高的河口環境中。
        </span>
      </TabPanel>

      <Swiper
        onSlideChange={(swiper) => handleSelected(swiper)}
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
        className='introduction-swiper mt-16 pb-16'
      >
        {carousselPhotos.map((photo) => (
          <SwiperSlide key={photo.id}>
            <img
              onClick={handleOpen}
              src={photo.img}
              className='h-full w-full'
              alt=''
            />
            <p className='mt-1 text-center'>{photo.title}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <img src={modal.img} alt='' />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Introduction;
