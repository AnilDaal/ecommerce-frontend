import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Cart from './components/Cart';
import WishList from './components/Wishlist';
import Home from './components/Home';
import CheckoutSuccess from './components/stripe/CheckoutSuccess';
import SingleProduct from './components/products/single-product/SingleProduct';
import SellerHomePage from './seller-page/SellerHomePage';
import SellerAddProduct from './seller-page/SellerAddProduct';
import AdminLogin from './components/auth/AdminLogin';
import CustomerLogin from './components/auth/CustomerLogin';
import SellerLogin from './components/auth/SellerLogin';
import CustomerRegister from './components/auth/CustomerRegister';
import AuthProtected from './utils/AuthProtected';
import AdminAddProducts from './admin-page/AdminAddProducts';
import Footer from './components/footer/Footer';
import SellerRegister from './components/auth/SellerRegister';
import SellerUpdateProduct from './seller-page/SellerUpdateProduct';
import ProductListClone from './components/products/product-list/ProductListClone';
import ProductListing from './admin-page/ProductListing';
import SellersListing from './admin-page/SellersListing';
import AdminUpdateProduct from './admin-page/AdminUpdateProduct';
import SellerProductListing from './seller-page/SellerProductListing';
import AdminHomePageMat from './admin-page/mat/AdminHomePageMat';
import AdminDashboard from './admin-page/mat/utils/Dashboard';
import AdminSingleProduct from './admin-page/AdminSingleProduct';
import SellerDashboard from './seller-page/util/SellerDashboard';
import NewNavbar from './components/navbar/NewNavbar';
import SellerSingleProduct from './seller-page/SellerSingleProduct';
import ContactUs from './pages/contact-us/ContactUs';
import About from './pages/about-us/About';
import Payment from './pages/payment/Payment';
import Shipping from './pages/shipping/Shipping';
import FAQ from './pages/faq/FAQ';
import Privacy from './pages/privacy/Privacy';
import Terms from './pages/terms/Terms';
import Security from './pages/security/Security';
import Policy from './pages/policy/Policy';

function App() {
  const [role, setRole] = useState(null);
  const { token } = useSelector((state) => state.auth);
  const { color } = useSelector((state) => state.color);

  useEffect(() => {
    if (token) {
      const { role } = jwtDecode(token);

      setRole(role);
    } else {
      setRole('');
    }
  }, [token]);

  if (role === 'admin') {
    return (
      <BrowserRouter>
        <Routes>
          <Route element={<AdminHomePageMat />}>
            <Route path="/" element={<Navigate to="/admin/dashboard" />} />
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
        <Routes>
          <Route element={<SellerHomePage />}>
            <Route path="/" element={<Navigate to="/seller/dashboard" />} />
            <Route element={<SellerDashboard />} path="/seller/dashboard" />
            <Route
              element={<SellerProductListing />}
              path="/seller/product-list"
            />
            <Route
              element={<SellerAddProduct />}
              path="/seller/create-product"
            />

            <Route
              element={<SellerUpdateProduct />}
              path="/seller/update-product/:productId"
            />
            <Route
              element={<SellerSingleProduct />}
              path="/seller/single-product/:id"
            />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }

  if (role === 'customer' || role === '') {
    return (
      <BrowserRouter>
        <section>
          <style
            dangerouslySetInnerHTML={{
              __html: ` :root {
                             --bg-nav: ${color};
                             
                           }`,
            }}
          />
        </section>

        <NewNavbar />
        <ToastContainer autoClose={1000} closeOnClick />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/security" element={<Security />} />
          <Route path="/policy" element={<Policy />} />

          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/checkout-success" element={<CheckoutSuccess />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />

          <Route element={<AuthProtected />}>
            <Route element={<AdminLogin />} path="/admin-login" />

            <Route element={<CustomerRegister />} path="/customer-register" />
            <Route element={<CustomerLogin />} path="/customer-login" />

            <Route element={<SellerLogin />} path="/seller-login" />
            <Route element={<SellerRegister />} path="/seller-register" />
          </Route>

          <Route element={<SingleProduct />} path="/product/:id" />

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

          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }

  if (role === null) return 'loading..';
  return <h1>you are not a valid user</h1>;
}
// }

export default App;
