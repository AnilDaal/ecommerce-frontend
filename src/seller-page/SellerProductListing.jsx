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
              className="flex justify-around items-center border hover:bg-slate-300"
              key={item._id}
            >
              <img
                src={item.image}
                alt=""
                style={{ height: '100px', width: '100px' }}
              />
              <h2 className="w-48">{item.title}</h2>
              <h2 className="w-48">Price:&#8377;{item.price}</h2>
              <button
                className="btn bg-red-400 h-12"
                onClick={() => handleDelete(item._id)}
              >
                Delete
              </button>
              <Link to={`/seller/update-product/${item._id}`}>
                <button className="btn bg-green-400 p-2">Update</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SellerProductListing;
