import React, { useState, useEffect } from 'react';
import { SiFuraffinity } from 'react-icons/si';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { BsBag, BsCart2 } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';
import './new-navbar.css';

export default function NewNavbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu((prev) => !prev);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

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
          <button className="py-1 px-2 border-blue-400 rounded border text-blue-400">
            Login
          </button>
        </ul>
      </nav>
    </header>
  );
}
