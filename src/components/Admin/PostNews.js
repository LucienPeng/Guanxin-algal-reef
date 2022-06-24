import React, { useState } from 'react';
import { Paper, Grid, Stack, TextField, Button, Box } from '@mui/material';
import { Alert, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import dayjs from 'dayjs';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { doc, setDoc } from 'firebase/firestore';
import { firebaseConfig } from '../Hooks';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const PostNews = () => {
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openWarning, setOpenWarning] = useState(false);

  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const date = dayjs().format('YYYY/MM/DD HH:mm');

  const setData = (title, detail, date) => {
    if (title === '' || detail === '') {
      setOpenSuccess(false);
      setOpenWarning(true);
      return;
    } else {
      setDoc(doc(db, 'news', title), {
        date: date,
        name: title,
        detail: detail,
      });
      setTitle('');
      setDetail('');
      setOpenWarning(false);
      setOpenSuccess(true);
    }
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
            <h2 className='text-center text-3xl'>新增最新消息</h2>
            <Stack spacing={5}>
              <TextField
                id='admin-acc'
                placeholder='請輸入標題'
                label='標題'
                variant='outlined'
                required
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
              <TextField
                id='admin-acc'
                placeholder='請輸入最新消息內容'
                label='內容'
                variant='outlined'
                required
                multiline
                rows={10}
                onChange={(e) => setDetail(e.target.value)}
                value={detail}
              />
            </Stack>

            {openSuccess ? (
              <Alert
                severity='success'
                color='info'
                action={
                  <IconButton
                    aria-label='close'
                    color='inherit'
                    size='small'
                    onClick={() => {
                      setOpenSuccess(false);
                    }}
                  >
                    <CloseIcon fontSize='inherit' />
                  </IconButton>
                }
              >
                成功提交新消息！
              </Alert>
            ) : null}

            {openWarning ? (
              <Alert
                severity='error'
                action={
                  <IconButton
                    aria-label='close'
                    color='inherit'
                    size='small'
                    onClick={() => {
                      setOpenWarning(false);
                    }}
                  >
                    <CloseIcon fontSize='inherit' />
                  </IconButton>
                }
              >
                請勿遺漏！
              </Alert>
            ) : null}

            <Stack direction='row' justifyContent='center' spacing={2}>
              <Button variant='outlined'>放棄</Button>
              <Button
                variant='contained'
                onClick={() => setData(title, detail, date)}
              >
                送出
              </Button>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
