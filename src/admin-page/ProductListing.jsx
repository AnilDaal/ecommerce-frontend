import React, { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { adminGetProduct, deleteProduct } from '../store';
import AdminHomePage from './AdminHomePage';
const ProductListing = () => {
  const { adminProductList, isLoading } = useSelector((state) => state.admin);

  console.log(adminProductList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(adminGetProduct());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm('Do you really want to delete this item permanently?')) {
      dispatch(deleteProduct(id))
        .unwrap()
        .then(() => dispatch(adminGetProduct()))
        .catch((err) => console.log(err));
    }
  };
  if (isLoading) {
    return (
      <>
        <Skeleton height={120} />
        <Skeleton height={120} />
        <Skeleton height={120} />
        <Skeleton height={120} />
        <Skeleton height={120} />
      </>
    );
  }
  return (
    <>
      <h1>SellerProductListing</h1>
      <div>
        {adminProductList?.map((item) => {
          return (
            <div className="flex justify-around items-center border hover:bg-slate-300">
              <img
                src={item.image}
                alt=""
                style={{ height: '100px', width: '100px' }}
              />
              <h2 className="w-48">{item.title}</h2>
              <button
                className="btn bg-red-400 h-12"
                onClick={() => handleDelete(item._id)}
              >
                Delete
              </button>
              <Link to={`/admin/update-product/${item._id}`}>
                <button className="btn bg-green-400 p-2">Update</button>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductListing;
