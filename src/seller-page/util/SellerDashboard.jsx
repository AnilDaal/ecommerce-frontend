import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProduct } from '../../store';
import { DummyProducts2 } from '../../utils/DummyProducts';

const SellerDashboard = () => {
  const { sellerList } = useSelector((state) => state.seller);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  console.log(sellerList);
  return (
    <div>
      <div>
        <h1>Product Listing</h1>

        <div class="ml-4 w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 light:bg-gray-800 dark:border-gray-700">
          <div class="flex items-center justify-between mb-4">
            <h5 class="text-xl font-bold leading-none text-gray-900 ">
              Latest Products
            </h5>
            <Link
              to="/seller/product-list"
              class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              View all
            </Link>
          </div>
          <div class="flow-root">
            <ul class="divide-y divide-gray-200 dark:divide-gray-700">
              {sellerList?.map((s) => {
                return (
                  <li class="py-3 sm:py-4">
                    <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0">
                        <img
                          class="w-16 h-16 rounded-full"
                          src={s.image}
                          alt={s.title}
                        />
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate ">
                          {s.title}
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                          {s.description.substring(0, 50)}...
                        </p>
                      </div>
                      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $320
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* <DummyProducts2 /> */}
      </div>
    </div>
  );
};

export default SellerDashboard;
