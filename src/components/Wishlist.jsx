import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './cart.css';
import { useEffect } from 'react';
import {
  productCartWishlist,
  productDeleteToWishlist,
} from '../store/thunks/cart';

const Wishlist = () => {
  const { productWishlistItems } = useSelector((state) => state.productCart);
  console.log(productWishlistItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productCartWishlist());
  }, [dispatch]);

  const handleWishlistRemove = (product) => {
    // dispatch(removeCart(product));
    dispatch(productDeleteToWishlist(product._id))
      .unwrap()
      .then(() => {
        dispatch(productCartWishlist());
      })
      .catch((err) => console.log(err));

    // .unwrap()
    // .then(() => window.location.reload())
    // .catch((err) => console.log(err));
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl py-4 font-bold text-gray-600">
        Shopping Wishlist
      </h1>

      <button className="btn bg-blue-300">
        <Link to="/">&#x2190; Continue Shopping</Link>
      </button>

      {productWishlistItems?.length > 0 ? (
        <div className="py-10">
          {productWishlistItems?.map((product) => {
            return (
              <div key={product._id} className="cart_single">
                <img src={product.image} alt={product.title} />
                <p className="cart-title">{product.title}</p>
                <p>&#8377;{product.price}</p>

                <button
                  className="btn btn-danger bg-red-600 border-none"
                  onClick={() => handleWishlistRemove(product)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="  font-bold text-center py-6">
          <h2 className="text-xl">
            <Link to="/"> You have an empty wishlist</Link>
          </h2>
          <img
            className="h-56 w-full object-contain"
            src="https://shopperswarehouse.com/assets/e_website/assets/site_image/empty_wishlist.png"
            alt="Empty-wishlist - Your Wishlist Is Empty"
          ></img>
        </div>
      )}

      <hr />
    </div>
  );
};

export default Wishlist;
