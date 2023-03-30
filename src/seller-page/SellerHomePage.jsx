import { Outlet } from 'react-router-dom';

import SellerSidebar from './util/SellerSidebar';
import SellerNavbar from './util/SellerNavbar';

const SellerHomePage = () => {
  return (
    <div className="home">
      <SellerSidebar />

      <div className="home-container">
        <SellerNavbar />

        <Outlet />
      </div>
    </div>
  );
};

export default SellerHomePage;
