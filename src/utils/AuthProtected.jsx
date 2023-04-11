import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

const AuthProtected = () => {
  const { token } = useSelector((state) => state.auth);

  if (token) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',

          gap: '2rem',
        }}
      ></div>
      <Outlet />
    </>
  );
};

export default AuthProtected;
