import React, { useContext, useEffect } from 'react';
import { Paper, Grid, Stack, TextField, Button, Box } from '@mui/material';
import AuthContext from './LoginAuthContext';
import { useLocalStorage } from '../Hooks';

export const Login = () => {
  const ctx = useContext(AuthContext);
  const setLocalStorage = useLocalStorage('isLoggedIn', ctx.isLoggedIn);

  const handler = () => {
    ctx.setLoggedIn(true);
    setLocalStorage.setItem();
  };
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
                required
                id='admin-acc'
                placeholder='請輸入管理員email'
                label='帳號'
                variant='outlined'
              />
              <TextField
                required
                id='admin-psw'
                placeholder='請輸入管理員密碼'
                label='密碼'
                variant='outlined'
              />
            </Stack>
            <Button variant='contained' onClick={handler}>
              登入
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
