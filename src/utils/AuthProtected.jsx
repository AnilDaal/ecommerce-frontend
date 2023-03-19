import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { useSelector } from 'react-redux';

const AuthProtected = () => {
  const { token } = useSelector((state) => state.auth);

  if (token) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <h1>hello auth Middleware</h1>
      <Outlet />
    </>
  );
};

export default AuthProtected;
