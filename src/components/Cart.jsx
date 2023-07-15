import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotals } from "../store";
import { AiFillDelete } from "react-icons/ai";
import "./cart.css";
// import RazorpayCheckout from 'react-native-razorpay';
import { useEffect } from "react";
import {
  productCartList,
  productDeleteToCart,
  productCartIncrement,
} from "../store/thunks/cart";
import { toast } from "react-toastify";

const Cart = () => {
  const { productCartItems } = useSelector((state) => state.productCart);
  const dispatch = useDispatch();
  console.log(productCartItems);
  useEffect(() => {
    dispatch(productCartList());
  }, [dispatch]);

  const handleIncrementCart = async (product) => {
    if (product.productQuantity === product.totalQuantity) {
      return toast.error(`Product Out Of Stock`, {
        position: "top-right",
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
      if ((err.status = "fail"))
        return toast.error(`Product Out Of Stock`, {
          position: "top-right",
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
      if ((err.status = "fail"))
        return toast.error(`Product Out Of Stock`, {
          position: "top-right",
        });
    }
  };
  const handleCartRemove = (product) => {
    // dispatch(removeCart(product));
    console.log(product);
    dispatch(productDeleteToCart(product._id))
      .unwrap()
      .then(() => {
        toast.error(`Product remove from Cart`, {
          position: "top-right",
        });
        dispatch(productCartList());
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    dispatch(getTotals());
  }, [dispatch]);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl py-4 font-bold text-gray-600">Shopping Cart</h1>

      <button className="btn bg-blue-300">
        <Link to="/">&#x2190; Continue Shopping</Link>
      </button>

      {productCartItems?.length > 0 ? (
        <div className="py-10 cart_single-wrapper mx-6 flex gap-2 ">
          <div className="d-con-1">
            {productCartItems?.map(
              ({ productId: product, productQuantity }) => {
                console.log(product);
                return (
                  <div key={product._id} className="cart_single ">
                    <div className="flex flex-col items-center gap-2 justify-center  w-48">
                      <img
                        src={product.image}
                        alt={product.title}
                        style={{
                          width: "100%",
                          height: "100px",
                          objectFit: "contain",
                          borderRadius: "10px",
                        }}
                      />
                      <div style={{ display: "flex", gap: "4px" }}>
                        <button
                          disabled={productQuantity < 2}
                          onClick={() =>
                            handleDecrementCart({
                              productQuantity,
                              productId: product._id,
                            })
                          }
                          className="border px-2 "
                          style={{ fontSize: "1.2rem" }}
                        >
                          -
                        </button>
                        <span>{productQuantity}</span>
                        <button
                          // disabled={productQuantity === product.totalQuantity}
                          className="border px-2 "
                          style={{ fontSize: "1.2rem" }}
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
                    </div>

                    <div className="flex gap-24 d-gap-small">
                      <div className="flex flex-col gap-2">
                        <p className="cart-title text-sm text-gray-400">
                          {product.title}
                        </p>
                        <p className="text-xl text-gray-800 font-bold">
                          &#8377;{product.price}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h6
                          style={{ paddingRight: "1rem" }}
                          className="font-bold text"
                        >
                          total:&#8377;
                          {(product.price * productQuantity).toFixed(2)}
                        </h6>
                        <button
                          className="text-2xl text-red-600"
                          onClick={() => handleCartRemove(product)}
                        >
                          <AiFillDelete />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      ) : (
        <div className="  font-bold text-center py-6">
          <h2 className="text-xl">
            <Link to="/"> You have an empty cart shop now</Link>
          </h2>
          <img
            className="h-56 w-full object-contain"
            src="https://www.kindpng.com/picc/m/174-1749396_empty-cart-your-cart-is-empty-hd-png.png"
            alt="Empty-cart - Your Cart Is Empty"
          ></img>
        </div>
      )}
      {/* <div className="d-con-2">
            <button className="btn bg-gray-300" onClick={}>Proceed to Checkout</button>
          </div> */}
      <hr />
    </div>
  );
};

export default Cart;
