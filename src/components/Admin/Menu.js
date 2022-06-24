import React, { useContext, useEffect } from 'react';
import { Button } from '@mui/material';
import AuthContext from './LoginAuthContext';
import { useLocalStorage } from '../Hooks';

export const Menu = () => {
  const ctx = useContext(AuthContext);
  const setLocalStorage = useLocalStorage('isLoggedIn', ctx.isLoggedIn);

  const handler = () => {
    ctx.setLoggedIn(false);
    setLocalStorage.setItem();
  };

  return (
    <div>
      <Button variant='contained' onClick={handler}>
        登出
      </Button>
    </div>
  );
};
