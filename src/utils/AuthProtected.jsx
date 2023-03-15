import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

const AuthProtected = () => {
  return (
    <>
      <h1>hello auth Middleware</h1>
      <Outlet />
    </>
  );
};

export default AuthProtected;
