import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Cart from './components/Cart';
import WishList from './components/Wishlist';
import Home from './components/Home';

import NavbarComponent from './components/navbar/Navbar';
import CheckoutSuccess from './components/stripe/CheckoutSuccess';
import SingleProduct from './components/products/single-product/SingleProduct';

import SellerHomePage from './seller-page/SellerHomePage';
import SellerAddProduct from './seller-page/SellerAddProduct';
import AdminLogin from './components/auth/AdminLogin';
import CustomerLogin from './components/auth/CustomerLogin';
import SellerLogin from './components/auth/SellerLogin';
import CustomerRegister from './components/auth/CustomerRegister';

import AuthProtected from './utils/AuthProtected';
import AdminHomePage from './admin-page/mat/AdminHomePageMat';
import AdminAddProducts from './admin-page/AdminAddProducts';
import AdminRouteProtected from './utils/AdminRouteProtected';

import Footer from './components/footer/Footer';
import SellerRegister from './components/auth/SellerRegister';
import SellerUpdateProduct from './seller-page/SellerUpdateProduct';
import ProductListClone from './components/products/product-list/ProductListClone';
import ProductListing from './admin-page/ProductListing';
import SellersListing from './admin-page/SellersListing';
import AdminUpdateProduct from './admin-page/AdminUpdateProduct';
import SellerRouteProtected from './utils/SellerRouteProtected';
import SellerProductListing from './seller-page/SellerProductListing';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';

import AdminHomePageMat from './admin-page/mat/AdminHomePageMat';
import AdminTable from './admin-page/mat/utils/AdminTable';
import AdminDashboard from './admin-page/mat/utils/Dashboard';
import AdminSingleProduct from './admin-page/AdminSingleProduct';
import SellerDashboard from './seller-page/util/SellerDashboard';

function App() {
  const [role, setRole] = useState('');
  const { token } = useSelector((state) => state.auth);
  console.log(role);
  useEffect(() => {
    console.log(token);
    if (token) {
      const { role } = jwtDecode(token);
      console.log(role);
      setRole(role);
    }
  }, [token]);

  if (role === 'admin') {
    return (
      <BrowserRouter>
        <h1>Hello admin</h1>
        <Routes>
          <Route element={<AdminHomePageMat />}>
            <Route element={<AdminDashboard />} path="/admin/dashboard" />
            <Route element={<ProductListing />} path="/admin/product-list" />
            <Route
              element={<AdminAddProducts />}
              path="/admin/create-product"
            />
            <Route element={<SellersListing />} path="/admin/seller-list" />
            <Route
              element={<AdminUpdateProduct />}
              path="/admin/update-product/:productId"
            />
            <Route
              element={<AdminSingleProduct />}
              path="/admin/single-product/:id"
            />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  if (role === 'seller') {
    return (
      <BrowserRouter>
        <h1>Hello Seller</h1>
        <Routes>
          <Route element={<SellerHomePage />}>
            <Route element={<SellerDashboard />} path="/seller/dashboard" />
            <Route element={<AdminTable />} path="/admin/product-list" />
            <Route
              element={<AdminAddProducts />}
              path="/admin/create-product"
            />
            {/* <Route element={<SellersListing />} path="/admin/seller-list" /> */}
            <Route
              element={<AdminUpdateProduct />}
              path="/admin/update-product/:productId"
            />
            <Route
              element={<AdminSingleProduct />}
              path="/admin/single-product/:id"
            />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  // if (role === 'customer' || role === '') {
  //   return <h2>normal customer</h2>;
  // }
  if (role === 'customer' || role === '') {
    return (
      <BrowserRouter>
        <NavbarComponent />
        <ToastContainer />
        <Routes>
          {/* <Route
          path="/customerregister"
          element={token ? <Navigate to="/" /> : <Register />}
        />
        <Route
          path="/login"
          element={token ? <Navigate to="/cart" /> : <Login />}
        /> */}
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/checkout-success" element={<CheckoutSuccess />} />

          <Route element={<SellerRouteProtected />}>
            <Route element={<SellerHomePage />}>
              <Route
                path="/seller/create-product"
                element={<SellerAddProduct />}
              />
              <Route
                path="/seller/product-list"
                element={<SellerProductListing />}
              />
              <Route
                path="/seller/update-product/:productId"
                element={<SellerUpdateProduct />}
              />
            </Route>
          </Route>

          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />

          <Route element={<AuthProtected />}>
            <Route element={<AdminLogin />} path="/admin-login" />

            <Route element={<CustomerRegister />} path="/customer-register" />
            <Route element={<CustomerLogin />} path="/customer-login" />

            <Route element={<SellerLogin />} path="/seller-login" />
            <Route element={<SellerRegister />} path="/seller-register" />
          </Route>

          <Route element={<AdminRouteProtected />}>
            <Route element={<AdminHomePage />}>
              <Route element={<ProductListing />} path="/admin/product-list" />
              <Route
                element={<AdminAddProducts />}
                path="/admin/create-product"
              />
              <Route element={<SellersListing />} path="/admin/seller-list" />
              <Route
                element={<AdminUpdateProduct />}
                path="/admin/update-product/:productId"
              />
            </Route>
          </Route>

          {/* <Route element={<AllProducts />} path="/products" /> */}
          <Route element={<SingleProduct />} path="/product/:id" />
          {/* <Route element={<ProductList />} path="/product-list" /> */}
          <Route element={<ProductListClone />} path="/product-list" />

          <Route
            element={
              <div className="container mx-auto">
                <h1 className="text-2xl mx-auto  my-4">
                  Thanks for submitting the seller for now our team check your
                  credentials and contact you within 5-6 days
                </h1>
                <Link to="/" className="btn bg-yellow-400 ">
                  Back To Homepage
                </Link>
              </div>
            }
            path="/dummy-seller"
          />
        </Routes>
        <Footer />
        {/* <div class="bg-gray-800 py-4 w-full">
        <div class="container flex items-center justify-between">
          <p class="text-white">&copy; FurnitureLelo - All Right Reserved</p>
          <div>
            <img src="assets/images/methods.png" alt="methods" class="h-5" />
          </div>
        </div>
      </div> */}
      </BrowserRouter>
    );
  }
}

export default App;
