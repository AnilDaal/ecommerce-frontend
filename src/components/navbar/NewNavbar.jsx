import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { SiFuraffinity } from 'react-icons/si';
import { Link, NavLink } from 'react-router-dom';
import { BsBag, BsCart2 } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../store';
import { handleSearchTerm } from '../../store';
import './new-navbar.css';
import { productCartList } from '../../store/thunks/cart';

export default function NewNavbar() {
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { token } = useSelector((state) => state.auth);
  const { cartProductQty } = useSelector((state) => state.productCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(productCartList());
  }, [dispatch]);

  // console.log(
  //   productCartItems.reduce((acc, curr) => {
  //     return acc + curr.productQuantity;
  //   }, 0)

  // const sumWithInitial = array1.reduce(
  //   (accumulator, currentValue) => accumulator + currentValue,
  //   initialValue
  // );
  // );

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
          }}
        />
      </form>
      <nav className="flex">
        <ul className="list flex items-center gap-6">
          <li className="items">
            <NavLink
              className="flex flex-col items-center gap-1 navlink-container"
              to="/cart"
            >
              <BsCart2 className="text-2xl " />
              <span className="text-sm font-bold menu-name">Cart</span>
              <span className="count bg-teal-500">
                {/* {productCartItems.reduce((acc, curr) => {
                  return acc + curr.productQuantity;
                }, 0)} */}
                {cartProductQty}
              </span>
            </NavLink>
          </li>
          <li className="items">
            <NavLink
              to="/wishlist"
              className="flex flex-col items-center gap-1 navlink-container"
            >
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
                class="inline-flex items-center bg-yellow-400 border-0 py-1 px-3 focus:outline-none text-white rounded text-base  md:mt-0"
                onClick={() => setShow((prev) => !prev)}
              >
                Login
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
