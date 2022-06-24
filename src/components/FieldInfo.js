import React from 'react';
import News from './News';
import TideForecast from './TideForecast';
import { Grid } from '@mui/material';

const FieldInfo = (props) => {
  return (
    <div className='container mx-auto mt-10 w-full'>
      <h2 className='mb-6 text-center text-4xl sm:text-left'>遊憩資訊</h2>
      <Grid
        container
        className='px-2'
        direction={{ xs: 'column', lg: 'row' }}
        spacing={5}
      >
        <Grid item xs={6}>
          <TideForecast />
        </Grid>
        <Grid item xs={6}>
          <News newsRef={props.newsRef} />
        </Grid>
      </Grid>
    </div>
  );
};

export default FieldInfo;
