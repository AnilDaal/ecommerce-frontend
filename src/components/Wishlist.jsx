import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './cart.css';
import { useEffect } from 'react';
import {
  productCartList,
  productDeleteToCart,
  productCartIncrement,
  productCartWishlist,
  productDeleteToWishlist,
} from '../store/thunks/cart';
import { toast } from 'react-toastify';

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
      <h1>Shopping WishList</h1>
      {/* {cartItems?.length === 0 && (
        <p>
          Your cart is empty click <Link to="/">Here</Link>
        </p>
      )} */}
      <div>
        <Link to="/">&#x2190; Continue Shopping</Link>
      </div>

      <div>
        {productWishlistItems?.map((product) => {
          // console.log(product);
          // const xproduct = product.data.data;
          console.log(product);
          return (
            <div key={product._id} className="cart_single">
              <img src={product.image} alt={product.title} />
              <p className="cart-title">{product.title}</p>
              <p>&#8377;{product.price}</p>

              {/* <div style={{ display: 'flex', gap: '4px' }}>
                <button
                  disabled={productQuantity < 2}
                  onClick={() =>
                    handleDecrementCart({
                      productQuantity,
                      productId: product._id,
                    })
                  }
                  className="border px-2 "
                  style={{ fontSize: '1.2rem' }}
                >
                  -
                </button>
                <span>{productQuantity}</span>
                <button
                  // disabled={productQuantity === product.totalQuantity}
                  className="border px-2 "
                  style={{ fontSize: '1.2rem' }}
                  onClick={() =>
                    handleIncrementCart({
                      productQuantity,
                      productId: product._id,
                      totalQuantity: product.totalQuantity,
                    })
                  }
                >
                  +
                </button>
              </div> */}
              {/* <h6 style={{ paddingRight: '1rem' }}>
                total:&#8377;
                {(product.price * productQuantity).toFixed(2)}
              </h6> */}
              <button
                className="btn btn-danger bg-red-600 border-none"
                onClick={() => handleWishlistRemove(product)}
              >
                Remove
              </button>
            </div>
          );
        })}

        {/* {cartItems.length > 0 && (
          <>
            <div className="flex justify-between mt-10">
              <button
                onClick={() => dispatch(resetCart())}
                className="btn bg-red-400"
              >
                Clear Cart
              </button>
              <div>
                <span>Subtotal</span>
                <strong>&#8377;{cartTotalAmount}</strong>
              </div>
            </div>
          </>
        )} */}

        {/* {cartItems.length > 0 && (
          <div style={{ textAlign: 'end' }}>
            <p>Taxes and shipping charge calculated at checkout page</p>
            {token ? (
              <PayButton cartItems={cartItems} />
            ) : (
              <button className="btn bg-yellow-300">
                <Link
                  to="/login"
                  style={{ color: 'white', fontWeight: 'bold' }}
                  className="imp-link"
                >
                  Login To Checkout
                </Link>
              </button>
            )}
          </div>
        )} */}
      </div>

      <hr />
      {/* <button
        className="btn bg-teal-600"
        onClick={() => handleSubmitToDatabases()}
      >
        Save To The Database
      </button> */}
    </div>
  );
};

export default Wishlist;
