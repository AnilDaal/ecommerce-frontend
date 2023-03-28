import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { approveSeller } from '../store/thunks/admin';
import { sellerListing } from '../store/thunks/auth';
import Loader from '../utils/Loader';

const SellersListing = () => {
  const dispatch = useDispatch();
  const { sellerList, error, isLoading } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(sellerListing());
  }, [dispatch]);

  const handleClick = async (id) => {
    dispatch(approveSeller({ id }))
      .unwrap()
      .then(() => dispatch(sellerListing()))
      .catch((err) => console.log(err));
  };
  console.log(sellerList);
  console.log(error);
  return (
    <>
      <h1>SellersListing</h1>

      <div>
        {sellerList?.data?.map(
          ({
            name,
            email,
            number,
            address,
            pancard,
            adharcard,
            isVerified,
            _id,
          }) => {
            return (
              <div className="border mb-5">
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Number: {number}</p>
                <p>Address: {address}</p>
                <p>Pancard: {pancard}</p>
                <p>Adharcard: {adharcard}</p>
                <p className="flex">
                  tag:
                  <span className="bg-red-300">
                    {isVerified ? 'verified' : 'not verified'}
                  </span>
                </p>
                <hr />
                {_id}
                {!isVerified && (
                  <button
                    onClick={() => handleClick(_id)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    {isLoading ? <Loader /> : 'Verify'}
                  </button>
                )}
              </div>
            );
          }
        )}
      </div>
    </>
  );
};

export default SellersListing;
