import React, { useContext, useState, useEffect } from 'react';
import { Login } from '../components/Admin/Login';
import { Menu } from '../components/Admin/Menu';
import AuthContext from '../components/Admin/LoginAuthContext';

const AdminPage = () => {
  const ctx = useContext(AuthContext);

  return (
    <>
      {ctx.isLoggedIn === false ? <Login /> : null}
      {ctx.isLoggedIn === true ? <Menu /> : null}
    </>
  );
};

export default AdminPage;
