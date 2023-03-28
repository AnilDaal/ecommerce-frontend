import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { logoutUser } from '../store';

const SellerSidebar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <div className="flex">
      <div
        style={{
          width: '20%',
          backgroundColor: 'teal',
          height: '80vh',
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: '20px',
        }}
      >
        <h3 className="w3-bar-item">Menu</h3>
        <Link to="/seller/product-list" className="text-xl text-white">
          Seller Product List
        </Link>
        <Link to="/seller/create-product" className="text-xl text-white">
          Add Product
        </Link>

        <button onClick={handleLogout} className="p-2 btn bg-red-500 w-24 mt-2">
          Logout
        </button>
      </div>

      <div style={{ flex: '4', marginLeft: '1rem' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default SellerSidebar;
