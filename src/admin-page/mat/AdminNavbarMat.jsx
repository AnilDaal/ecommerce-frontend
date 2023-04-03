import './admin-styles/admin-navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { Link } from 'react-router-dom';
import { SiFuraffinity } from 'react-icons/si';
// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";

const AdminNavbarMat = () => {
  // const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar p-10  shadow-sm">
      <div className="wrapper ">
        <div className="left  ">
          <Link to="/">
            <div className="flex items-center gap-2">
              <SiFuraffinity className="text-6xl text-primary" />
              <h1 className="text-2xl font-bold header-logo">FurniutreLelo</h1>
              {/* <img src="" alt="" /> */}
            </div>
          </Link>
        </div>
        <div className="items">
          <a
            href="https://pacifencesolutions.com/"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'inherit' }}
          >
            <div
              className="item"
              style={{ fontWeight: 'bold', cursor: 'pointer' }}
            >
              <LanguageOutlinedIcon className="icon" />
              Pacifence Solutions
            </div>{' '}
          </a>

          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbarMat;
