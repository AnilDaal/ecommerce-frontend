import './navbar.css';
import { BsCart2, BsSearch } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../store';
const Navbar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span class="ml-3 text-xl">Furniture Lelo</span>
        </Link>
        <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link
            class="mr-5 hover:text-gray-900"
            className="header-action-btn"
            to="/cart"
          >
            <BsCart2 />
            <p className="header-action-label">Cart</p>
            <div className="btn-badge bg-teal-600" aria-hidden="true">
              {cartTotalQuantity}
            </div>
          </Link>
          <Link class="mr-5 hover:text-gray-900" className="header-action-btn">
            <AiOutlineHeart />

            <p className="header-action-label">Wishlisht</p>

            <div className="btn-badge bg-pink-600" aria-hidden="true">
              2
            </div>
          </Link>
          <Link class="mr-5 hover:text-gray-900" to="/product-list">
            Products
          </Link>
          {/* <Link class="mr-5 hover:text-gray-900">Fourth Link</Link> */}
        </nav>
        {!token ? (
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
        ) : (
          <button
            onClick={() => dispatch(logoutUser())}
            class="inline-flex items-center bg-red-400 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
            Logout
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
        )}
      </div>
    </header>
  );
};

export default Navbar;

// <header
//   style={{ backgroundColor: 'alice' }}
//   className="header"
//   data-header
//   // style={{ backgroundColor: 'orangered' }}
// >
//   <div className="container">
//     <div className="overlay" data-overlay></div>

//     <div className="header-search">
//       <input
//         type="search"
//         name="search"
//         placeholder="Search Product..."
//         className="input-field"
//       />

//       <button className="search-btn" aria-label="Search">
//         <BsSearch />
//       </button>
//     </div>

//     <a href="#" className="logo" style={{ fontSize: '2rem' }}>
//       {/* <img
//         src="./assets/images/logo.svg"
//         alt="Casmart logo"
//         width="130"
//         height="31"
//       /> */}
//       Furniture-Lelo
//     </a>

//     <div className="header-actions nav-login-rel-parent">
//       <button className="header-action-btn">
//         {/* <Link to="/login"> */}
//         <BiUser />
//         <p className="header-action-label">Sign in</p>
//         <ul className="nav-login-rel-child">
//           <Link to="/admin-login">
//             <li>Admin</li>
//           </Link>
//           <Link to="/seller-login">
//             {' '}
//             <li>Seller</li>
//           </Link>
//           <Link to="/customer-login">
//             {' '}
//             <li>Customer</li>
//           </Link>
//         </ul>
//         {/* </Link> */}
//       </button>

//       <Link to="/cart">
//         <button className="header-action-btn">
//           <BsCart2 />

//           <p className="header-action-label">Cart</p>

//           <div className="btn-badge green" aria-hidden="true">
//             3
//           </div>
//         </button>
//       </Link>

//       <Link to="/wishlist">
//         <button className="header-action-btn">
//           <AiOutlineHeart />

//           <p className="header-action-label">Wishlisht</p>

//           <div className="btn-badge" aria-hidden="true">
//             2
//           </div>
//         </button>
//       </Link>
//     </div>

//     <button
//       className="nav-open-btn"
//       data-nav-open-btn
//       aria-label="Open Menu"
//     >
//       <span></span>
//       <span></span>
//       <span></span>
//     </button>
//   </div>
// </header>
