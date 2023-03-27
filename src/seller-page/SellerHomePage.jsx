import React from 'react';
import { Link } from 'react-router-dom';
import SellerAddProduct from './SellerAddProduct';
import SellerProductListing from './SellerProductListing';

const SellerHomePage = () => {
  return (
    <div className="container ">
      <Link to="/seller/create-product">
        <button className="btn bg-slate-500">Add Product</button>
      </Link>

      <div className="flex items-center flex-col">
        <h1>SellerHomepage</h1>
        <SellerProductListing />
      </div>
    </div>
  );
};

export default SellerHomePage;
