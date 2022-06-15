import React from 'react';
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
import { CardActionArea, Box, Grid } from '@mui/material';

import neighbohood1 from '../assets/images/neighborhood1.jpg';
import neighbohood2 from '../assets/images/neighborhood2.jpg';
import neighbohood3 from '../assets/images/neighborhood3.jpg';
import neighbohood4 from '../assets/images/neighborhood4.jpg';

const neighbohoods = [
  {
    id: '1',
    img: neighbohood1,
    title: '冠美錦鯉園',
    details:
      '這兒原是錦鯉養殖場，後來主人擴增烤肉及露營場地，名稱正式修改為冠美錦鯉休閒廣場。園區風景優美，精心佈置。有烤肉區，露營區，衛浴設備，相當齊全。交通便利，自行開車佳。',
  },
  {
    id: '2',
    img: neighbohood2,
    title: '永興玫瑰園',
    details:
      '這兒原是錦鯉養殖場，後來主人擴增烤肉及露營場地，名稱正式修改為冠美錦鯉休閒廣場。園區風景優美，精心佈置。有烤肉區，露營區，衛浴設備，相當齊全。交通便利，自行開車佳。',
  },
  {
    id: '3',
    img: neighbohood3,
    title: '後湖溪木麻黃步道',
    details:
      '這兒原是錦鯉養殖場，後來主人擴增烤肉及露營場地，名稱正式修改為冠美錦鯉休閒廣場。園區風景優美，精心佈置。有烤肉區，露營區，衛浴設備，相當齊全。交通便利，自行開車佳。',
  },
  {
    id: '4',
    img: neighbohood4,
    title: '新屋溪口紅樹林',
    details:
      '這兒原是錦鯉養殖場，後來主人擴增烤肉及露營場地，名稱正式修改為冠美錦鯉休閒廣場。園區風景優美，精心佈置。有烤肉區，露營區，衛浴設備，相當齊全。交通便利，自行開車佳。',
  },
];

const Neighborhood = (props) => {
  return (
    <div
      ref={props.neighborhoodRef}
      className='container mx-auto mb-20 mt-10 w-full'
    >
      <div className='flex flex-col'>
        <h2 className='mb-6 text-4xl'>鄰近景點</h2>
        <Grid container spacing={2}>
          {neighbohoods.map((neighborhood) => (
            <Grid key={neighborhood.id} item md={6} xs={12}>
              <Card sx={{ height: 200 }} key={neighborhood.id} elevation={3}>
                <CardActionArea>
                  <Box sx={{ display: 'flex' }}>
                    <Box sx={{ overflow: 'hidden' }}>
                      <CardMedia
                        sx={{
                          objectFit: 'cover',
                          height: 200,
                          width: 700,
                          '&:hover': {
                            opacity: 0.9,
                            transform: 'scale(1.2)',
                            transition: 'all ease-out 0.5s',
                          },
                        }}
                        component='img'
                        image={neighborhood.img}
                        alt='activites'
                      />
                    </Box>
                    <CardContent
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >
                      <h3 className='my-5 text-center text-xl'>
                        {neighborhood.title}
                      </h3>
                      <p>{neighborhood.details}</p>
                    </CardContent>
                  </Box>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Neighborhood;
