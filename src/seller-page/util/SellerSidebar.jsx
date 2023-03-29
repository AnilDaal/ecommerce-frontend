import {
  MoneyOffCsredRounded,
  ProductionQuantityLimits,
  SupervisedUserCircleOutlined,
} from '@mui/icons-material';
import DashboardIcon from '@mui/icons-material/Dashboard';

import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../store';

const SellerSidebar = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logoutUser());
    window.location.reload();
    console.log('logout');
  };
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">FurnitureLelo-Seller</span>
      </div>

      <hr />
      <div className="center">
        <ul>
          <NavLink to="/seller/dashboard" className="nav-container">
            <DashboardIcon />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/seller/product-list"
            className={({ isActive }) =>
              isActive ? 'active nav-container' : 'inactive nav-container'
            }
          >
            <ProductionQuantityLimits />
            <span>Product Listing</span>
          </NavLink>
          <NavLink
            to="/seller/create-product"
            className={({ isActive }) =>
              isActive ? 'active nav-container' : 'inactive nav-container'
            }
          >
            <SupervisedUserCircleOutlined />
            <span>Add Product</span>
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

export default SellerSidebar;
