import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { decrementCart, getTotals } from '../store';

import './cart.css';
import { useEffect } from 'react';
import {
  productCartList,
  productDeleteToCart,
  productCartIncrement,
} from '../store/thunks/cart';
import { toast } from 'react-toastify';

const Cart = () => {
  const { productCartItems } = useSelector((state) => state.productCart);
  // const { cartItems, cartTotalAmount } = useSelector((state) => state.cart);
  // const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // const [dItems, setDItems] = useState([]);

  // console.log(cartItems);

  // const filterItems = cartItems.map((p) => {
  //   return { productId: p._id, productQuantity: p.cartQuantity };
  // });

  // const handleSubmitToDatabases = () => {
  //   dispatch(productAddToCart(filterItems));
  // };
  // console.log(dItems);
  useEffect(() => {
    dispatch(productCartList());
  }, [dispatch]);

  // useEffect(() => {
  //   const controller = new AbortController();
  //   const { signal } = controller;
  //   if (productCartItems.length > 0) {
  //     Promise.all(
  //       productCartItems.map((item) =>
  //         instance.get('/public/' + item.productId)
  //       )
  //     )
  //       .then((products) => setDItems(products))
  //       .catch((error) => {
  //         if (!signal.aborted) {
  //           console.log(error);
  //         }
  //       });
  //   }

  //   return () => {
  //     controller.abort();
  //   };
  // }, [productCartItems]);

  // const handleReset = () => {
  //   dispatch(resetCart());
  // };
  const handleIncrementCart = async (product) => {
    if (product.productQuantity === product.totalQuantity) {
      return toast.error(`Product Out Of Stock`, {
        position: 'top-right',
      });
    }
    try {
      const originalPromiseResult = await dispatch(
        productCartIncrement({
          productId: product.productId,
          incrementedProductQuantity: product.productQuantity + 1,
        })
      ).unwrap();
      dispatch(productCartList());
    } catch (err) {
      console.log(err);
      if ((err.status = 'fail'))
        return toast.error(`Product Out Of Stock`, {
          position: 'top-right',
        });
    }
  };
  const handleDecrementCart = async (product) => {
    if (product.productQuantity < 2) {
      return;
    }
    try {
      const originalPromiseResult = await dispatch(
        productCartIncrement({
          productId: product.productId,
          incrementedProductQuantity: product.productQuantity - 1,
        })
      ).unwrap();
      dispatch(productCartList());
    } catch (err) {
      console.log(err);
      if ((err.status = 'fail'))
        return toast.error(`Product Out Of Stock`, {
          position: 'top-right',
        });
    }
  };
  const handleCartRemove = (product) => {
    // dispatch(removeCart(product));
    dispatch(productDeleteToCart(product._id))
      .unwrap()
      .then(() => {
        dispatch(productCartList());
      })
      .catch((err) => console.log(err));

    // .unwrap()
    // .then(() => window.location.reload())
    // .catch((err) => console.log(err));
  };

  // dispatch(getTotals());
  useEffect(() => {
    dispatch(getTotals());
  }, [dispatch]);

  // console.log(dItems);
  return (
    <div className="container mx-auto">
      <h1>Shopping Cart</h1>
      {/* {cartItems?.length === 0 && (
        <p>
          Your cart is empty click <Link to="/">Here</Link>
        </p>
      )} */}
      <div>
        <Link to="/">&#x2190; Continue Shopping</Link>
      </div>
      {/* <div>
        {cartItems?.map((product) => {
          // console.log(product);
          // const xproduct = product.data.data;
          return (
            <div key={product._id} className="cart_single">
              <img src={product.image} alt={product.title} />
              <p className="cart-title">{product.title}</p>
              <p>&#8377;{product.price}</p>

              <div style={{ display: 'flex', gap: '4px' }}>
                <button
                  onClick={() => dispatch(decrementCart(product))}
                  className="border px-2 "
                  style={{ fontSize: '1.2rem' }}
                >
                  -
                </button>
                <span>{product.cartQuantity}</span>
                <button
                  className="border px-2 "
                  style={{ fontSize: '1.2rem' }}
                  onClick={() => dispatch(incrementCart(product))}
                >
                  +
                </button>
              </div>
              <h6 style={{ paddingRight: '1rem' }}>
                total:&#8377;
                {(product.price * product.cartQuantity).toFixed(2)}
              </h6>
              <button
                className="btn btn-danger bg-red-600 border-none"
                onClick={() => dispatch(removeCart(product))}
              >
                Remove
              </button>
            </div>
          );
        })}

        {cartItems.length > 0 && (
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
        )}

        {cartItems.length > 0 && (
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
        )}
      </div> */}
      <div>
        {productCartItems?.map(({ productId: product, productQuantity }) => {
          // console.log(product);
          // const xproduct = product.data.data;
          console.log(product);
          return (
            <div key={product._id} className="cart_single">
              <img src={product.image} alt={product.title} />
              <p className="cart-title">{product.title}</p>
              <p>&#8377;{product.price}</p>

              <div style={{ display: 'flex', gap: '4px' }}>
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
              </div>
              <h6 style={{ paddingRight: '1rem' }}>
                total:&#8377;
                {(product.price * productQuantity).toFixed(2)}
              </h6>
              <button
                className="btn btn-danger bg-red-600 border-none"
                onClick={() => handleCartRemove(product)}
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

export default Cart;
