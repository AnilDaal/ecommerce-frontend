import { Link, Outlet } from 'react-router-dom';

import AdminNavbarMat from './AdminNavbarMat';
import AdminSidebarMat from './AdminSidebarMat';
import './admin-styles/admin-homepage.scss';
import AdminTable from './utils/AdminTable';

const AdminHomePageMat = () => {
  return (
    <div className="home">
      <AdminSidebarMat />

      <div className="home-container">
        <AdminNavbarMat />
        {/* <div className="addNew">
          <Link to="/employees/new">
            <button>Add New</button>
          </Link>
        </div> */}
        <Outlet />
        {/* <AdminTable /> */}
      </div>
    </div>
  );
};

export default AdminHomePageMat;
