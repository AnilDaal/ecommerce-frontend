import React from 'react';
import { Link } from 'react-router-dom';
import SellerAddProduct from './SellerAddProduct';
import SellerProductListing from './SellerProductListing';

const SellerHomePage = () => {
  return (
    <>
      <Link to="/seller/create-product">Add Product</Link>

      <div className="flex items-center flex-col">
        <h1>SellerHomepage</h1>
        <SellerProductListing />
      </div>
    </>
  );
};

export default SellerHomePage;
