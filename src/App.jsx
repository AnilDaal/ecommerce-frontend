import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from 'react-router-dom';

import Cart from './pages/cart-page/Cart';
import WishList from './pages/wishlist-page/WishList';
import Home from './components/Home';

import NavbarComponent from './components/navbar/Navbar';
import CheckoutSuccess from './components/stripe/CheckoutSuccess';
import SingleProduct from './components/singleProduct/SingleProduct';
import AuthenticateRoute from './utils/AuthenticateRoute';
import SellerHomePage from './seller-page/SellerHomepage';
import SellerAddProduct from './seller-page/SellerAddProduct';
import AdminLogin from './components/auth/AdminLogin';
import CustomerLogin from './components/auth/CustomerLogin';
import SellerLogin from './components/auth/SellerLogin';
import CustomerRegister from './components/auth/CustomerRegister';

import AuthProtected from './utils/AuthProtected';

function App() {
  const { token } = useSelector((state) => state.auth);
  return (
    <BrowserRouter>
      <NavbarComponent />
      <ToastContainer />
      <Routes>
        <Route path="/cart" element={<Cart />} />
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

        <Route element={<AuthenticateRoute />}>
          <Route path="/seller/:id" element={<SellerHomePage />} />
          <Route
            path="/seller/:id/create-product"
            element={<SellerAddProduct />}
          />
        </Route>

        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />

        <Route element={<AuthProtected />}>
          <Route element={<AdminLogin />} path="/admin-login" />
          <Route element={<CustomerLogin />} path="/customer-login" />
          <Route element={<SellerLogin />} path="/seller-login" />
          <Route element={<CustomerRegister />} path="/customer-register" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
