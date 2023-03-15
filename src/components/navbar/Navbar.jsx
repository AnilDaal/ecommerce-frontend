import './navbar.css';
import { BsCart2, BsSearch } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <header
      className="header"
      data-header
      // style={{ backgroundColor: 'orangered' }}
    >
      <div className="container">
        <div className="overlay" data-overlay></div>

        <div className="header-search">
          <input
            type="search"
            name="search"
            placeholder="Search Product..."
            className="input-field"
          />

          <button className="search-btn" aria-label="Search">
            <BsSearch />
          </button>
        </div>

        <a href="#" className="logo" style={{ fontSize: '2rem' }}>
          {/* <img
            src="./assets/images/logo.svg"
            alt="Casmart logo"
            width="130"
            height="31"
          /> */}
          Furniture-Lelo
        </a>

        <div className="header-actions nav-login-rel-parent">
          <button className="header-action-btn">
            {/* <Link to="/login"> */}
            <BiUser />
            <p className="header-action-label">Sign in</p>
            <ul className="nav-login-rel-child">
              <Link to="/admin-login">
                <li>Admin</li>
              </Link>
              <Link to="/seller-login">
                {' '}
                <li>Seller</li>
              </Link>
              <Link to="/customer-login">
                {' '}
                <li>Customer</li>
              </Link>
            </ul>
            {/* </Link> */}
          </button>

          <Link to="/cart">
            <button className="header-action-btn">
              <BsCart2 />

              <p className="header-action-label">Cart</p>

              <div className="btn-badge green" aria-hidden="true">
                3
              </div>
            </button>
          </Link>

          <Link to="/wishlist">
            <button className="header-action-btn">
              <AiOutlineHeart />

              <p className="header-action-label">Wishlisht</p>

              <div className="btn-badge" aria-hidden="true">
                2
              </div>
            </button>
          </Link>
        </div>

        <button
          className="nav-open-btn"
          data-nav-open-btn
          aria-label="Open Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* <nav className="navbar" data-navbar>
          <div className="navbar-top">
            <a href="#" className="logo">
              <img
                src="./assets/images/logo.svg"
                alt="Casmart logo"
                width="130"
                height="31"
              />
            </a>

            <button
              className="nav-close-btn"
              data-nav-close-btn
              aria-label="Close Menu"
            >
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>

          <ul className="navbar-list">
            <li>
              <a href="#home" className="navbar-link">
                Home
              </a>
            </li>

            <li>
              <a href="#" className="navbar-link">
                Shop
              </a>
            </li>

            <li>
              <a href="#" className="navbar-link">
                About
              </a>
            </li>

            <li>
              <a href="#blog" className="navbar-link">
                Blog
              </a>
            </li>

            <li>
              <a href="#" className="navbar-link">
                Contact
              </a>
            </li>
          </ul>
        </nav> */}
      </div>
    </header>
  );
};

export default Navbar;
