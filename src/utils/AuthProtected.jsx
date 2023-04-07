import React from 'react';
import { Outlet, Navigate, NavLink } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { useSelector } from 'react-redux';

const comStyle = `inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-blue-400 rounded text-base mt-4 md:mt-0`;

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
      >
        {/* <NavLink to="/admin-login">
          <button
            className={({ isActive }) =>
              isActive ? ` ${comStyle} bg-blue-400` : `${comStyle}`
            }
          >
            admin login
          </button>
        </NavLink>
        <NavLink to="/seller-login">
          <button
            className={({ isActive }) =>
              isActive ? ` ${comStyle} bg-blue-400` : `${comStyle}`
            }
          >
            seller login
          </button>
        </NavLink>
        <NavLink to="/seller-register">
          <button
            className={({ isActive }) =>
              isActive ? ` ${comStyle} bg-blue-400` : `${comStyle}`
            }
          >
            seller register
          </button>
        </NavLink>
        <NavLink to="/customer-login">
          <button
            className={({ isActive }) =>
              isActive ? ` ${comStyle} bg-blue-400` : `${comStyle}`
            }
          >
            customer login
          </button>
        </NavLink>
        <NavLink to="/customer-register">
          <button
            className={({ isActive }) =>
              isActive ? ` ${comStyle} bg-blue-400` : `${comStyle}`
            }
          >
            customer register
          </button>
        </NavLink> */}
      </div>
      <Outlet />
    </>
  );
};

export default AuthProtected;
