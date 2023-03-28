import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';

const AdminHomePage = () => {
  return (
    <div className="container">
      <div>AdminHomePage</div>
      <ul>
        <li>
          <Link to="/admin/create-product">Add Product</Link>
        </li>
        <li>
          <Link to="/admin/seller-list">Seller List</Link>
        </li>
        <li>
          <Link to="/admin/product-list">Product List</Link>
        </li>
      </ul>
      <AdminSidebar />
    </div>
  );
};

export default AdminHomePage;
