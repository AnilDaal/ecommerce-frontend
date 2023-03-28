import React from 'react';
import { Link } from 'react-router-dom';
import SellerAddProduct from './SellerAddProduct';
import SellerProductListing from './SellerProductListing';
import SellerSidebar from './SellerSidebar';

const SellerHomePage = () => {
  return (
    <div className="container">
      <h1 className="bg-black w-full text-white text-center text-2xl">
        SellerHomePage
      </h1>

      <SellerSidebar />
    </div>
  );
};

export default SellerHomePage;
