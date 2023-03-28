import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';

const AdminHomePage = () => {
  return (
    <div className="container">
      <h1 className="bg-black w-full text-white text-center text-2xl">
        AdminHomePage
      </h1>

      <AdminSidebar />
    </div>
  );
};

export default AdminHomePage;
