import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const SellerRouteProtected = () => {
  const { token } = useSelector((state) => state.auth);

  if (token) {
    return (
      <>
        <h1>hello auth Middleware</h1>
        <Outlet />
      </>
    );
  } else {
    return <Navigate to="/admin-login" />;
  }
};

export default SellerRouteProtected;
