// import './navbar.css';
// import { BsCart2, BsSearch } from 'react-icons/bs';
// import { AiOutlineHeart } from 'react-icons/ai';
// import { BsBag } from 'react-icons/bs';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { logoutUser } from '../../store';
// import { useState } from 'react';
// import jwtDecode from 'jwt-decode';

// const Navbar = () => {
//   const { token } = useSelector((state) => state.auth);
//   const { cartTotalQuantity } = useSelector((state) => state.cart);
//   // const { token } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const handleLogout = () => {
//     dispatch(logoutUser());
//   };

//   return (
//     <header class="text-gray-600 body-font ">
//       <div class=" container mx-auto nav-res">
//         <Link
//           to="/"
//           class="flex title-font font-medium items-center text-gray-900 md:mb-0"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             stroke="currentColor"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             stroke-width="2"
//             class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
//             viewBox="0 0 24 24"
//           >
//             <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//           </svg>
//           <span class="ml-3 text-xl">Furniture Lelo</span>
//         </Link>

//         {/* {role === 'admin' && (
//           <>
//             <h2>Admin Panel</h2>
//             <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center gap-5">
//               <Link class="mr-5 hover:text-gray-900" to="/admin/product-list">
//                 Product List
//               </Link>
//               <Link class="mr-5 hover:text-gray-900" to="/admin/create-product">
//                 Add Product
//               </Link>
//               <Link class="mr-5 hover:text-gray-900" to="/admin/seller-list">
//                 Seller List
//               </Link>
//             </nav>
//           </>
//         )}

//         {role === 'seller' && (
//           <>
//             <h2>Seller Panel</h2>
//             <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center gap-5">
//               <Link class="mr-5 hover:text-gray-900" to="/seller">
//                 Seller Home Page
//               </Link>
//               <Link
//                 class="mr-5 hover:text-gray-900"
//                 to="/seller/create-product"
//               >
//                 Add Product
//               </Link>
//             </nav>
//           </>
//         )} */}
//         <div className="nav-res-show">
//           <div>
//             <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 nav-res-icon">
//               <Link
//                 class="mr-5 hover:text-gray-900"
//                 className="header-action-btn"
//                 to="/cart"
//               >
//                 {/* <p className="header-action-label">Cart</p> */}
//                 <div className="btn-badge bg-teal-600" aria-hidden="true">
//                   {cartTotalQuantity}
//                 </div>
//                 <BsCart2 className="text-2xl" />
//               </Link>
//               <Link
//                 class="mr-5 hover:text-gray-900"
//                 className="header-action-btn"
//               >
//                 <AiOutlineHeart className="text-2xl" />

//                 {/* <p className="header-action-label">Wish</p> */}

//                 <div className="btn-badge bg-teal-600" aria-hidden="true">
//                   0
//                 </div>
//               </Link>
//               <Link class="mr-5 hover:text-gray-900" to="/product-list">
//                 <BsBag className="text-2xl" />
//               </Link>

//               {/* <Link class="mr-5 hover:text-gray-900">Fourth Link</Link> */}
//             </nav>
//           </div>

//           {token ? (
//             <button
//               onClick={handleLogout}
//               class="inline-flex items-center bg-primary text-white border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0"
//             >
//               Logout
//             </button>
//           ) : (
//             <Link to="/customer-login">
//               <button class="inline-flex items-center bg-teal-400 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
//                 Login
//                 <svg
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2"
//                   class="w-4 h-4 ml-1"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M5 12h14M12 5l7 7-7 7"></path>
//                 </svg>
//               </button>
//             </Link>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
