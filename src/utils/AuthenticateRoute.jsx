import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

const AuthenticateRoute = () => {
  // const
  const { token } = useSelector((state) => state.auth);
  return (
    <>
      <div>AuthenticateRoute</div>
      <Outlet />
    </>
  );
};

export default AuthenticateRoute;
