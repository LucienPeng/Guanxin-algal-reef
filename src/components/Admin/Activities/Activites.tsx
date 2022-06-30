import React, { useState } from 'react';
import { Button, Stack, Container, ButtonGroup } from '@mui/material';
import Scheduler from '../Scheduler/Scheduler';

const ACTIVITIES_MENUS = [
  {
    id: '1',
    title: '藻礁生態導覽',
    subtitle: [
      { id: '1', name: '新增場次', url: '/admin/post/add' },
      { id: '2', name: '編輯活動', url: '/admin/post/delete' },
      { id: '3', name: '查看報名狀況', url: '/admin/post/delete' },
    ],
  },
  {
    id: '2',
    title: '竹筏生態體驗',
    subtitle: [
      { id: '1', name: '新增場次', url: '/admin/post/add' },
      { id: '2', name: '編輯活動', url: '/admin/post/delete' },
      { id: '3', name: '查看報名狀況', url: '/admin/post/delete' },
    ],
  },
  {
    id: '3',
    title: '獨木舟體驗',
    subtitle: [
      { id: '1', name: '新增場次', url: '/admin/post/add' },
      { id: '2', name: '編輯活動', url: '/admin/post/delete' },
      { id: '3', name: '查看報名狀況', url: '/admin/post/delete' },
    ],
  },
  {
    id: '4',
    title: '客家擂茶DIY',
    subtitle: [
      { id: '1', name: '新增場次', url: '/admin/post/add' },
      { id: '2', name: '編輯活動', url: '/admin/post/delete' },
      { id: '3', name: '查看報名狀況', url: '/admin/post/delete' },
    ],
  },
  {
    id: '5',
    title: '黑米DIY-爆米香',
    subtitle: [
      { id: '1', name: '新增場次', url: '/admin/post/add' },
      { id: '2', name: '編輯活動', url: '/admin/post/delete' },
      { id: '3', name: '查看報名狀況', url: '/admin/post/delete' },
    ],
  },
  {
    id: '6',
    title: '黑米DIY－紅龜粿',
    subtitle: [
      { id: '1', name: '新增場次', url: '/admin/post/add' },
      { id: '2', name: '編輯活動', url: '/admin/post/delete' },
      { id: '3', name: '查看報名狀況', url: '/admin/post/delete' },
    ],
  },
];

export const Activities = () => {
  //const navigation = useNavigate();

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Stack
        sx={{ width: '100%', marginBottom: 5 }}
        spacing={3}
        alignItems='center'
      >
        <h2 className='my-10 text-center text-lg'>活動報名管理系統</h2>
        <ButtonGroup aria-label='menu group'>
          {ACTIVITIES_MENUS.map((item) => (
            <Button variant='contained' key={item.id}>
              {item.title}
            </Button>
          ))}
        </ButtonGroup>
      </Stack>
      <Scheduler />
    </Container>
  );
};
