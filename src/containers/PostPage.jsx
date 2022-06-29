import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

const PostPage = () => {
  return (
    <Box>
      <Box className='bg-sky-800 py-14'></Box>
      <Outlet />
    </Box>
  );
};

export default PostPage;
