// /* eslint-disable react-hooks/rules-of-hooks */
// import Button from "react-bootstrap/Button";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import {
//   decrementwishlist,
//   incrementwishlist,
//   resetwishlist,
//   removewishlist,
//   getTotals,
// } from "../store";
// import PayButton from "./stripe/PayButton";
// import "./wishlist.css";

// const wishlist = () => {
//   const { wishlistItems, wishlistTotalAmount } = useSelector(
//     (state) => state.wishlist
//   );
//   const { token } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const handleReset = () => {
//     dispatch(resetwishlist());
//   };
//   const handleIncrementwishlist = (product) => {
//     dispatch(incrementwishlist(product));
//   };
//   const handleDecrementwishlist = (product) => {
//     dispatch(decrementwishlist(product));
//   };
//   const handlewishlistRemove = (product) => {
//     dispatch(removewishlist(product));
//   };

//   // dispatch(getTotals());
//   // useEffect(() => {
//   //   dispatch(getTotals());
//   // }, [dispatch]);

//   dispatch(getTotals());
//   return (
//     <div className="container">
//       <h1>Shopping wishlist</h1>
//       {wishlistItems.length === 0 && (
//         <p>
//           Your wishlist is empty click <Link to="/">Here</Link>
//         </p>
//       )}
//       <div>
//         <Link to="/">&#x2190; Continue Shopping</Link>
//       </div>
//       <div>
//         {wishlistItems.map((product) => (
//           <div key={product.ID} className="wishlist_single">
//             <img src={product.Images} alt={product.Name} />
//             <p className="wishlist-title">{product.Name}</p>
//             <p>&#8377;{product["Regular price"]}</p>
//             <button
//               className="btn btn-danger"
//               onClick={() => handlewishlistRemove(product)}
//             >
//               Remove
//             </button>
//             <div>
//               <button onClick={() => handleDecrementwishlist(product)}>
//                 -
//               </button>
//               <span>{product.wishlistQuantity}</span>
//               <button onClick={() => handleIncrementwishlist(product)}>
//                 +
//               </button>
//             </div>
//             <h6 style={{ paddingRight: "1rem" }}>
//               total:&#8377;
//               {(product["Regular price"] * product.wishlistQuantity).toFixed(2)}
//             </h6>
//           </div>
//         ))}

//         {wishlistItems.length > 0 && (
//           <>
//             <div className="wishlist-total">
//               <button onClick={handleReset}>Clear wishlist</button>
//               <div>
//                 <span>Subtotal</span>
//                 <strong>&#8377;{wishlistTotalAmount.toFixed(2)}</strong>
//               </div>
//             </div>
//           </>
//         )}

//         {wishlistItems.length > 0 && (
//           <div style={{ textAlign: "end" }}>
//             <p>Taxes and shipping charge calculated at checkout page</p>
//             {token ? (
//               <PayButton wishlistItems={wishlistItems} />
//             ) : (
//               <Button variant="warning">
//                 <Link
//                   to="/login"
//                   style={{ color: "white", fontWeight: "bold" }}
//                   className="imp-link"
//                 >
//                   Login To Checkout
//                 </Link>
//               </Button>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const Wishlist = () => {
//   return <div>{wishlist}</div>;
// };

// export default Wishlist;
import React from "react";

function Wishlist() {
  return <div>Wishlist</div>;
}

export default Wishlist;
