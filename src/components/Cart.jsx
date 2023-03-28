import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  decrementCart,
  incrementCart,
  resetCart,
  removeCart,
  getTotals,
} from "../store";
import PayButton from "./stripe/PayButton";
import "./cart.css";

const Cart = () => {
  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleReset = () => {
    dispatch(resetCart());
  };
  const handleIncrementCart = (product) => {
    dispatch(incrementCart(product));
  };
  const handleDecrementCart = (product) => {
    dispatch(decrementCart(product));
  };
  const handleCartRemove = (product) => {
    dispatch(removeCart(product));
  };

  // dispatch(getTotals());
  // useEffect(() => {
  //   dispatch(getTotals());
  // }, [dispatch]);

  dispatch(getTotals());
  return (
    <div className="container mx-auto">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 && (
        <p>
          Your cart is empty click <Link to="/">Here</Link>
        </p>
      )}
      <div>
        <Link to="/">&#x2190; Continue Shopping</Link>
      </div>
      <div>
        {cartItems.map((product) => (
          <div key={product._id} className="cart_single">
            <img src={product.image} alt={product.title} />
            <p className="cart-title">{product.title}</p>
            <p>&#8377;{product.price}</p>

            <div style={{ display: "flex", gap: "4px" }}>
              <button
                onClick={() => handleDecrementCart(product)}
                className="border px-2 "
                style={{ fontSize: "1.2rem" }}
              >
                -
              </button>
              <span>{product.cartQuantity}</span>
              <button
                className="border px-2 "
                style={{ fontSize: "1.2rem" }}
                onClick={() => handleIncrementCart(product)}
              >
                +
              </button>
            </div>
            <h6 style={{ paddingRight: "1rem" }}>
              total:&#8377;
              {(product.price * product.cartQuantity).toFixed(2)}
            </h6>
            <button
              className="btn btn-danger bg-red-600 border-none"
              onClick={() => handleCartRemove(product)}
            >
              Remove
            </button>
          </div>
        ))}

        {cartItems.length > 0 && (
          <>
            <div className="flex justify-between mt-10">
              <button onClick={handleReset} className="btn bg-red-400">
                Clear Cart
              </button>
              <div>
                <span>Subtotal</span>
                <strong>&#8377;{cartTotalAmount.toFixed(2)}</strong>
              </div>
            </div>
          </>
        )}

        {cartItems.length > 0 && (
          <div style={{ textAlign: "end" }}>
            <p>Taxes and shipping charge calculated at checkout page</p>
            {token ? (
              <PayButton cartItems={cartItems} />
            ) : (
              <button className="btn bg-yellow-300">
                <Link
                  to="/login"
                  style={{ color: "white", fontWeight: "bold" }}
                  className="imp-link"
                >
                  Login To Checkout
                </Link>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
