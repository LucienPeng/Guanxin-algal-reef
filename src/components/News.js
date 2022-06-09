import React from 'react';
import { Paper } from '@mui/material';

const News = (props) => {
  return (
    <Paper
      ref={props.newsRef}
      elevation={3}
      className='flex w-full items-center justify-center px-5 '
    >
      <h2>最新消息</h2>
    </Paper>
  );
};

export default News;
