import {
  MoneyOffCsredRounded,
  ProductionQuantityLimits,
  SupervisedUserCircleOutlined,
} from '@mui/icons-material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import './admin-styles/admin-sidebar.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../store';
// import { logout } from '../../store';

const activeStyle = {
  border: 'none',
  borderRadius: '10px',
  fontWeight: 'bold',
  background: 'rgb(254,60,87)',
};

const AdminSidebarMat = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(logoutUser()).unwrap(() => navigate('/'));
    console.log('logout');
  };
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">FurnitureLelo-Admin</span>
      </div>

      <hr />
      <div className="center">
        <ul>
          <NavLink
            to="/admin/dashboard"
            className="nav-container"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            <DashboardIcon />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/admin/product-list"
            className="nav-container"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            {' '}
            <ProductionQuantityLimits />
            <span>Product Listing</span>
          </NavLink>
          <NavLink
            to="/admin/create-product"
            className="nav-container"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            <SupervisedUserCircleOutlined />
            <span>Add Product</span>
          </NavLink>
          <NavLink
            to="/admin/seller-list"
            className="nav-container"
            style={({ isActive }) => (isActive ? activeStyle : null)}
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
