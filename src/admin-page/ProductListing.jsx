// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { adminAddProduct, adminGetProduct, deleteProduct } from '../store';
// const ProductListing = () => {
//   const { adminProductList } = useSelector((state) => state.admin);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(adminGetProduct());
//   }, [dispatch]);

//   const handleDelete = (id) => {
//     dispatch(deleteProduct(id))
//       .unwrap()
//       .then(() => dispatch(adminGetProduct()))
//       .catch((err) => console.log(err));
//   };
//   return (
//     <div>
//       <h1>SellerProductListing</h1>
//       <div>
//         {adminProductList?.map((item) => {
//           return (
//             <div>
//               <img
//                 src={item.image}
//                 alt=""
//                 style={{ height: '200px', width: '200px' }}
//               />
//               <button
//                 className="btn bg-red-400"
//                 onClick={() => handleDelete(item._id)}
//               >
//                 Delete
//               </button>
//               <Link to={`/seller/update-product/${item._id}`}>
//                 <button className="btn bg-green-400">Update</button>
//               </Link>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ProductListing;
