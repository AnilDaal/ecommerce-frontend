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
    // <header class="text-gray-600 body-font">
    //   <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    //     <Link
    //       to="/"
    //       class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
    //     >
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         stroke="currentColor"
    //         stroke-linecap="round"
    //         stroke-linejoin="round"
    //         stroke-width="2"
    //         class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
    //         viewBox="0 0 24 24"
    //       >
    //         <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
    //       </svg>
    //       <span class="ml-3 text-xl">Furniture Lelo</span>
    //     </Link>
    //     <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
    //       <Link
    //         class="mr-5 hover:text-gray-900"
    //         className="header-action-btn"
    //         to="/cart"
    //       >
    //         <BsCart2 />
    //         <p className="header-action-label">Cart</p>
    //         <div className="btn-badge bg-teal-600" aria-hidden="true">
    //           {cartTotalQuantity}
    //         </div>
    //       </Link>
    //       <Link class="mr-5 hover:text-gray-900" className="header-action-btn">
    //         <AiOutlineHeart />

    //         <p className="header-action-label">Wishlisht</p>

    //         <div className="btn-badge bg-pink-600" aria-hidden="true">
    //           2
    //         </div>
    //       </Link>
    //       <Link class="mr-5 hover:text-gray-900" to="/product-list">
    //         Products
    //       </Link>
    //       {/* <Link class="mr-5 hover:text-gray-900">Fourth Link</Link> */}
    //     </nav>
    //     {!token ? (
    //       <Link to="/customer-login">
    //         <button class="inline-flex items-center bg-teal-400 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
    //           Login
    //           <svg
    //             fill="none"
    //             stroke="currentColor"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="2"
    //             class="w-4 h-4 ml-1"
    //             viewBox="0 0 24 24"
    //           >
    //             <path d="M5 12h14M12 5l7 7-7 7"></path>
    //           </svg>
    //         </button>
    //       </Link>
    //     ) : (
    //       <button
    //         onClick={() => dispatch(logoutUser())}
    //         class="inline-flex items-center bg-red-400 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
    //       >
    //         Logout
    //         <svg
    //           fill="none"
    //           stroke="currentColor"
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //           stroke-width="2"
    //           class="w-4 h-4 ml-1"
    //           viewBox="0 0 24 24"
    //         >
    //           <path d="M5 12h14M12 5l7 7-7 7"></path>
    //         </svg>
    //       </button>
    //     )}
    //   </div>
    // </header>
    // <header class="py-4 shadow-sm bg-pink-100 lg:bg-white">
    //   <div class="container flex items-center justify-between">
    //     <a href="#" class="block w-32">
    //       <img src="images/logo.svg" alt="logo" class="w-full" />
    //     </a>

    //     <div class="w-full xl:max-w-xl lg:max-w-lg lg:flex relative hidden">
    //       <span class="absolute left-4 top-3 text-lg text-gray-400">
    //         <i class="fas fa-search"></i>
    //       </span>
    //       <input
    //         type="text"
    //         class="pl-12 w-full border border-r-0 border-primary py-3 px-3 rounded-l-md focus:ring-primary focus:border-primary"
    //         placeholder="search"
    //       />
    //       <button
    //         type="submit"
    //         class="bg-primary border border-primary text-white px-8 font-medium rounded-r-md hover:bg-transparent hover:text-primary transition"
    //       >
    //         Search
    //       </button>
    //     </div>

    //     <div class="space-x-4 flex items-center">
    //       <a
    //         href="wishlist.html"
    //         class="block text-center text-gray-700 hover:text-primary transition relative"
    //       >
    //         <span class="absolute -right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
    //           5
    //         </span>
    //         <div class="text-2xl">
    //           <i class="far fa-heart"></i>
    //         </div>
    //         <div class="text-xs leading-3">Wish List</div>
    //       </a>
    //       <a
    //         href="cart.html"
    //         class="lg:block text-center text-gray-700 hover:text-primary transition hidden relative"
    //       >
    //         <span class="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
    //           3
    //         </span>
    //         <div class="text-2xl">
    //           <i class="fas fa-shopping-bag"></i>
    //         </div>
    //         <div class="text-xs leading-3">Cart</div>
    //       </a>
    //       <a
    //         href="account.html"
    //         class="block text-center text-gray-700 hover:text-primary transition"
    //       >
    //         <div class="text-2xl">
    //           <i class="far fa-user"></i>
    //         </div>
    //         <div class="text-xs leading-3">Account</div>
    //       </a>
    //     </div>
    //   </div>
    // </header>
    <header class="text-gray-600 body-font ">
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
        <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center gap-5">
          <Link
            class="mr-5 hover:text-gray-900"
            className="header-action-btn"
            to="/cart"
          >
            <BsCart2 className="text-2xl" />
            <p className="header-action-label">Cart</p>
            <div className="btn-badge bg-teal-600" aria-hidden="true">
              {cartTotalQuantity}
            </div>
          </Link>
          <Link class="mr-5 hover:text-gray-900" className="header-action-btn">
            <AiOutlineHeart className="text-2xl" />

            <p className="header-action-label">Wish</p>

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
