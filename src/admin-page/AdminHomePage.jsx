import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import ProductListing from './ProductListing';

import SellersListing from './SellersListing';

const AdminHomePage = () => {
  return (
    <div className="container">
      <div>AdminHomePage</div>
      <ul>
        <li>
          <Link to="">Add Product</Link>
        </li>
        <li>
          <Link to="">Seller List</Link>
        </li>
        <li>
          <Link to="">Product List</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default AdminHomePage;
