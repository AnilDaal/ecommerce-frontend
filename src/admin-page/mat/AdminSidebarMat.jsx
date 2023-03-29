import {
  MoneyOffCsredRounded,
  ProductionQuantityLimits,
  SupervisedUserCircleOutlined,
} from '@mui/icons-material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import './admin-styles/admin-sidebar.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../store';
// import { logout } from '../../store';
const AdminSidebarMat = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logoutUser());
  };
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">FurnitureLelo-Admin</span>
      </div>

      <hr />
      <div className="center">
        <ul>
          <NavLink to="/admin/dashboard" className="nav-container">
            <DashboardIcon />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/admin/product-list"
            className={({ isActive }) =>
              isActive ? 'active nav-container' : 'inactive nav-container'
            }
          >
            {' '}
            <ProductionQuantityLimits />
            <span>Product Listing</span>
          </NavLink>
          <NavLink
            to="/admin/create-product"
            className={({ isActive }) =>
              isActive ? 'active nav-container' : 'inactive nav-container'
            }
          >
            <SupervisedUserCircleOutlined />
            <span>Add Product</span>
          </NavLink>
          <NavLink
            to="/admin/seller-list"
            className={({ isActive }) =>
              isActive ? 'active nav-container' : 'inactive nav-container'
            }
          >
            <MoneyOffCsredRounded />
            <span>Seller Listing</span>
          </NavLink>
          {/* <li><DeliveryDining /><span>Delivery</span></li>
          <p className='title'>SERVICE</p><li><SatelliteAltSharp /><span>Stats</span></li>
          <li><NotificationAdd /><span>Notifications</span></li>
          <li><HealthAndSafety /><span>System Health</span></li>
          <p className='title'>YAGAMI</p>
          <li><LogoDevSharp /><span>Logs</span></li>
          <li><SettingsAccessibility /><span>Settings</span></li>
          <p className='title'>USER</p><li><PrecisionManufacturingOutlined /><span>Profile</span></li> */}

          <button onClick={logoutHandler} className="logout">
            Logout
          </button>
        </ul>
      </div>
      {/* <div className='bottom'>color mode themes</div> */}
    </div>
  );
};

export default AdminSidebarMat;
