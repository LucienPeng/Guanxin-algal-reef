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
import AuthContext from './LoginAuthContext';
import { useLocalStorage, useSetActiveItem } from '../Hooks';
import { getAuth, signOut } from 'firebase/auth';

import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

const MENUS = [
  {
    id: '1',
    title: '管理最新消息',
    icon: <SendIcon />,
    subtitle: [
      { id: '1', name: '新增最新消息', url: '/admin/post/add' },
      { id: '2', name: '刪除最新消息', url: '/admin/post/delete' },
    ],
  },
  {
    id: '2',
    title: '管理活動／報名系統',
    icon: <DraftsIcon />,
    subtitle: [
      { id: '1', name: '管理現有活動', url: '/admin/activites/manage' },
      { id: '2', name: '表列即將到來活動', url: '/admin/activites/add' },
      { id: '3', name: '表列歷史活動', url: '/admin/post' },
    ],
  },
];

export const Menu = () => {
  const navigation = useNavigate();
  const auth = getAuth();
  const ctx = useContext(AuthContext);
  const setLocalStorage = useLocalStorage('isLoggedIn', ctx.isLoggedIn);
  const loginStatus = setLocalStorage.getItem('isLoggedIn');

  const handler = () => {
    ctx.setLoggedIn(false);
    setLocalStorage.setItem('isLoggedIn', false);
    signOut(auth)
      .then(() => {
        console.log('Sign-out successful.');
      })
      .catch((error) => {
        console.log('Sign-out failed.' + error);
      });
  };
  const [activeItem, handleClick, open] = useSetActiveItem('0');

  if (loginStatus) {
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
            {MENUS.map((menu) => (
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
                      onClick={() => navigation(subMenu.url)}
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

          <Button variant='contained' onClick={handler}>
            管理員登出
          </Button>
        </Stack>
      </Container>
    );
  } else return false;
};
