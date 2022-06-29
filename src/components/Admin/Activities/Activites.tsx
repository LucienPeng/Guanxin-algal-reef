import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Stack,
  Box,
  Container,
  ListSubheader,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@mui/material';
import AuthContext from '../LoginAuthContext';
import { useLocalStorage, useSetActiveItem } from '../../Hooks';

import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

const ACTIVITIES_MENUS = [
  {
    id: '1',
    title: '藻礁生態導覽',
    icon: <SendIcon />,
    subtitle: [
      { id: '1', name: '新增場次', url: '/admin/post/add' },
      { id: '2', name: '編輯活動', url: '/admin/post/delete' },
      { id: '3', name: '查看報名狀況', url: '/admin/post/delete' },
    ],
  },
  {
    id: '2',
    title: '竹筏生態體驗',
    icon: <DraftsIcon />,
    subtitle: [
      { id: '1', name: '新增場次', url: '/admin/post/add' },
      { id: '2', name: '編輯活動', url: '/admin/post/delete' },
      { id: '3', name: '查看報名狀況', url: '/admin/post/delete' },
    ],
  },
  {
    id: '3',
    title: '獨木舟體驗',
    icon: <SendIcon />,
    subtitle: [
      { id: '1', name: '新增場次', url: '/admin/post/add' },
      { id: '2', name: '編輯活動', url: '/admin/post/delete' },
      { id: '3', name: '查看報名狀況', url: '/admin/post/delete' },
    ],
  },
  {
    id: '4',
    title: '客家擂茶DIY',
    icon: <SendIcon />,
    subtitle: [
      { id: '1', name: '新增場次', url: '/admin/post/add' },
      { id: '2', name: '編輯活動', url: '/admin/post/delete' },
      { id: '3', name: '查看報名狀況', url: '/admin/post/delete' },
    ],
  },
  {
    id: '5',
    title: '黑米DIY-爆米香',
    icon: <SendIcon />,
    subtitle: [
      { id: '1', name: '新增場次', url: '/admin/post/add' },
      { id: '2', name: '編輯活動', url: '/admin/post/delete' },
      { id: '3', name: '查看報名狀況', url: '/admin/post/delete' },
    ],
  },
  {
    id: '6',
    title: '黑米DIY－紅龜粿',
    icon: <SendIcon />,
    subtitle: [
      { id: '1', name: '新增場次', url: '/admin/post/add' },
      { id: '2', name: '編輯活動', url: '/admin/post/delete' },
      { id: '3', name: '查看報名狀況', url: '/admin/post/delete' },
    ],
  },
];

export const Activities = () => {
  const navigation = useNavigate();
  const [activeItem, handleClick, open] = useSetActiveItem('0');

  return (
    <Container
      sx={{
        height: '100vh',
        width: '50vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Stack spacing={3} alignItems='center'>
        <List
          sx={{ width: '50vw', minHeight: '70vh' }}
          component='nav'
          aria-labelledby='nested-list-subheader'
          subheader={
            <ListSubheader component='div' id='nested-list-subheader'>
              <h2 className='mb-10 text-center text-lg'>後台管理系統</h2>
            </ListSubheader>
          }
        >
          {ACTIVITIES_MENUS.map((menu) => (
            <Box key={menu.id}>
              <ListItemButton onClick={() => handleClick(menu.id)}>
                <ListItemIcon>{menu.icon}</ListItemIcon>
                <ListItemText primary={menu.title} />
                {activeItem === menu.id ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              {menu.subtitle.map((subMenu) => (
                <Collapse
                  key={subMenu.id}
                  in={activeItem === menu.id}
                  timeout='auto'
                  unmountOnExit
                >
                  <List
                    //onClick={() => navigation(subMenu.url)}
                    component='div'
                    disablePadding
                  >
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary={subMenu.name} />
                    </ListItemButton>
                  </List>
                </Collapse>
              ))}
            </Box>
          ))}
        </List>
      </Stack>
    </Container>
  );
};
