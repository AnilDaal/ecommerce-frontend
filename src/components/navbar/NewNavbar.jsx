import React, { useState, useEffect } from 'react';
import { SiFuraffinity } from 'react-icons/si';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { BsBag, BsCart2 } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';
import './new-navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../store';

export default function NewNavbar() {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  // const [toggleMenu, setToggleMenu] = useState(false);
  // const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // const toggleNav = () => {
  //   setToggleMenu((prev) => !prev);
  // };

  // useEffect(() => {
  //   const changeWidth = () => {
  //     setScreenWidth(window.innerWidth);
  //   };

  //   window.addEventListener('resize', changeWidth);

  //   return () => {
  //     window.removeEventListener('resize', changeWidth);
  //   };
  // }, []);

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
          {/* <img src="" alt="" /> */}
        </div>
      </Link>
      <div style={{ position: 'relative' }} className="input-toggle">
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
          className=" p-3 header-nav-input"
          type="text"
          placeholder="Search for furnitures"
          style={{
            backgroundColor: '#f5f5f6',
            borderColor: '#f5f5f6',
            paddingLeft: '36px',
          }}
        />
      </div>
      <nav className="flex">
        <ul className="list flex items-center gap-6">
          <li className="items">
            <NavLink
              className="flex flex-col items-center gap-1 navlink-container"
              to="/cart"
            >
              <BsCart2 className="text-2xl " />
              <span className="text-sm font-bold menu-name">Cart</span>
              <span className="count bg-teal-500">4</span>
            </NavLink>
          </li>
          <li className="items">
            <NavLink className="flex flex-col items-center gap-1 navlink-container">
              <AiOutlineHeart className="text-2xl" />
              <span className="text-sm font-bold menu-name">Wishlist</span>
              <span className="count bg-pink-500">6</span>
            </NavLink>
          </li>
          <li className="items ">
            <NavLink
              className="flex flex-col items-center gap-1"
              to="/product-list"
            >
              <BsBag className="text-2xl" />
              <span className="text-sm font-bold menu-name">Products</span>
            </NavLink>
          </li>

          {token ? (
            <button
              onClick={handleLogout}
              class="inline-flex items-center bg-primary text-white border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0"
            >
              Logout
            </button>
          ) : (
            <Link to="/customer-login">
              <button class="inline-flex items-center bg-teal-400 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                Login
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </Link>
          )}
        </ul>
      </nav>
    </header>
  );
}
