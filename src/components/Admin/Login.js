import React from 'react';
import {
  Paper,
  Grid,
  Stack,
  TextField,
  Button,
  Box,
} from '@mui/material';

export const Login = () => {
  return (
    <Box className='flex h-screen items-center'>
      <Grid justifyContent='center' container>
        <Grid item xs={5}>
          <Paper
            elevation={3}
            sx={{
              paddingX: 5,
              paddingY: 10,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 5,
            }}
          >
           
            <h2 className='text-center text-3xl'>管理員登入</h2>
            <Stack spacing={5}>
              <TextField
                id='admin-acc'
                placeholder='請輸入管理員email'
                label='帳號'
                variant='outlined'
              />
              <TextField
                id='admin-psw'
                placeholder='請輸入管理員密碼'
                label='密碼'
                variant='outlined'
              />
            </Stack>
            <Button variant='contained'>登入</Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
