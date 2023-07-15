import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProduct, getProduct } from '../store';
const SellerProductListing = () => {
  const { sellerList } = useSelector((state) => state.seller);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  console.log(sellerList);

  const handleDelete = (id) => {
    if (window.confirm('Do you really want to delete this item permanently?')) {
      dispatch(deleteProduct(id))
        .unwrap()
        .then(() => dispatch(getProduct()))
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>
      <h1>SellerProductListing</h1>
      <div>
        {sellerList?.map((item) => {
          return (
            <div
              className="flex justify-around items-center border shadow w-full"
              key={item._id}
            >
              <Link to={`/seller/single-product/${item._id}`}>
                <img
                  src={item.image}
                  alt=""
                  style={{ height: '100px', width: '100px' }}
                />
              </Link>
              <h2 className="w-48">
                <Link to={`/seller/single-product/${item._id}`}>
                  {item.title}
                </Link>
              </h2>
              <h2 className="w-48">Price:&#8377;{item.price}</h2>

              <Link to={`/seller/single-product/${item._id}`}>
                <button className="btn bg-blue-400 p-1">View</button>
              </Link>

              <Link to={`/seller/update-product/${item._id}`}>
                <button className="btn bg-green-400 p-2">Update</button>
              </Link>
              <button
                className="btn bg-red-400 h-12"
                onClick={() => handleDelete(item._id)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SellerProductListing;
