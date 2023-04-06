import {
  MoneyOffCsredRounded,
  ProductionQuantityLimits,
  SupervisedUserCircleOutlined,
} from '@mui/icons-material';
import DashboardIcon from '@mui/icons-material/Dashboard';

import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../store';

const activeStyle = {
  border: 'none',
  borderRadius: '10px',
  fontWeight: 'bold',
  background: 'rgb(254,60,87)',
};

const SellerSidebar = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logoutUser());
    window.location.reload();
  };
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">FurnitureLelo-Seller</span>
      </div>

      <hr />
      <div className="center">
        <ul>
          <NavLink
            to="/seller/dashboard"
            className="nav-container flex items-center justify-start gap-2"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            <DashboardIcon />
            <span className="text-lg">Dashboard</span>
          </NavLink>

          <NavLink
            to="/seller/product-list"
            className="nav-container flex items-center justify-start gap-2"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            <ProductionQuantityLimits />
            <span className="text-lg">Product Listing</span>
          </NavLink>
          <NavLink
            to="/seller/create-product"
            className="nav-container flex items-center justify-start gap-2"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            <SupervisedUserCircleOutlined />
            <span className="text-lg">Add Product</span>
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
