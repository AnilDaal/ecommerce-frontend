import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import 'react-color-palette/lib/css/styles.css';
import { SiFuraffinity } from 'react-icons/si';
import { Link, NavLink } from 'react-router-dom';
import { BsBag, BsCart2, BsMoonStars } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import { MdCancel } from 'react-icons/md';
import { AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { changeColor, logoutUser } from '../../store';
import { handleSearchTerm } from '../../store';
import './new-navbar.css';
import { productCartList } from '../../store/thunks/cart';
import { ColorPicker, useColor } from 'react-color-palette';

export default function NewNavbar() {
  const [color, setColor] = useColor('hex', '#121212');
  const [show, setShow] = useState(false);
  const [colorShow, setColorShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { token } = useSelector((state) => state.auth);
  const { cartProductQty, wishlistProductQty } = useSelector(
    (state) => state.productCart
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(changeColor(color.hex));
  }, [dispatch, color]);

  useEffect(() => {
    dispatch(productCartList());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutUser());
    window.location.reload();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    dispatch(handleSearchTerm(searchTerm));
    navigate('/product-list');
  };

  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 10px',
        position: 'sticky',
        top: 0,
        zIndex: '1000',
        height: '100px',
        backgroundColor: '#fff',
      }}
      className="shadow-sm"
    >
      <Link to="/">
        <div className="flex items-center gap-2">
          <SiFuraffinity className="text-6xl text-primary" />
          <h1 className="text-2xl font-bold header-logo">FurniutreLelo</h1>
        </div>
      </Link>
      <form
        style={{ position: 'relative' }}
        className="input-toggle"
        onSubmit={handleSubmit}
      >
        <AiOutlineSearch
          style={{
            position: 'absolute',
            left: '5px',
            top: '14px',
            fontSize: '24px',
            color: 'gray',
          }}
        />
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className=" p-3 header-nav-input"
          type="text"
          placeholder="Search for furnitures"
          style={{
            backgroundColor: '#f5f5f6',
            borderColor: '#f5f5f6',
            paddingLeft: '36px',
            width: '400px',
          }}
        />
      </form>

      <nav className="flex">
        <div className="moon-sun-mode">
          {colorShow ? (
            <div
              style={{
                borderRadius: '100%',
                textAlign: 'center',
                position: 'absolute',
                top: '100px',
              }}
            >
              <ColorPicker
                width={200}
                height={100}
                color={color}
                onChange={setColor}
                hideHSV
                hideRGB
                hideHEX
                light
              />
              <button
                onClick={() => setColorShow((prev) => !prev)}
                style={{
                  position: 'absolute',
                  top: '-10px',
                  cursor: 'pointer',
                  fontSize: '16px',
                }}
              >
                <MdCancel style={{ color: 'gray' }} />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setColorShow((prev) => !prev)}
              style={{
                marginRight: '40px',
                fontSize: '24px',
              }}
              className="text-primary"
            >
              <BsMoonStars style={{ color: 'gray' }} />
            </button>
          )}
        </div>
        <ul className="list flex items-center gap-6  border p-2">
          <li className="items">
            <NavLink
              className="flex flex-col items-center gap-1 navlink-container"
              to="/cart"
            >
              <BsCart2 className="text-2xl " style={{ color: 'gray' }} />
              {/* <span className="text-sm font-bold menu-name">Cart</span> */}
              <span className="count bg-primary">{cartProductQty}</span>
            </NavLink>
          </li>
          <li className="items">
            <NavLink
              to="/wishlist"
              className="flex flex-col items-center gap-1 navlink-container"
            >
              <AiOutlineHeart className="text-2xl " style={{ color: 'gray' }} />
              {/* <span className="text-sm font-bold menu-name">Wishlist</span> */}
              <span className="count bg-primary">{wishlistProductQty}</span>
            </NavLink>
          </li>
          {/* <li className="items ">
            <NavLink
              className="flex flex-col items-center gap-1"
              to="/product-list"
            >
              <BsBag className="text-2xl" />
              <span className="text-sm font-bold menu-name">Products</span>
            </NavLink>
          </li> */}

          {token ? (
            <button
              onClick={handleLogout}
              class="inline-flex items-center bg-primary text-white border-0 py-1 px-3 focus:outline-none  rounded text-base  md:mt-0"
            >
              Logout
            </button>
          ) : (
            <div
              to="/customer-login"
              className="flex items-center justify-center"
              style={{ position: 'relative' }}
            >
              <button
                // class="inline-flex items-center bg-primary border-0 py-1 px-3 focus:outline-none text-white rounded text-base  md:mt-0"
                onClick={() => setShow((prev) => !prev)}
                // onMouseEnter={() => setShow(true)}
                // onMouseLeave={() => setShow(false)}
                style={{ fontSize: '30px', color: 'gray' }}
              >
                <BiUserCircle />
              </button>
              {show && (
                <div
                  style={{
                    backgroundColor: 'rgba(0,255,255,0.1)',
                    position: 'absolute',
                    bottom: '-100px',
                    right: 0,
                    border: '1px solid teal',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    fontWeight: 'bold',
                    width: '240px',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <Link
                    to="/customer-login"
                    style={{
                      borderBottom: '1px solid gray',
                      width: '100%',
                      display: 'block',
                      color: 'gray',
                    }}
                  >
                    Customer Login/Register
                  </Link>
                  <Link
                    to="/seller-login"
                    style={{ display: 'block', color: 'gray' }}
                  >
                    Become A Seller
                  </Link>
                  <Link
                    to="/admin-login"
                    style={{ display: 'block', color: 'gray' }}
                  >
                    Admin
                  </Link>
                </div>
              )}
            </div>
          )}
        </ul>
      </nav>
    </header>
  );
}
