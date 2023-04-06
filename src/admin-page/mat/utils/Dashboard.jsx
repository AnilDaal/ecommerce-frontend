import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  adminGetProduct,
  sellerListing,
  useGetAllProductsQuery,
} from '../../../store';
import { DummyProducts2 } from '../../../utils/DummyProducts';

const Dashboard = () => {
  const { sellerList, adminProductList } = useSelector((state) => state.admin);
  const { data, isLoading, error } = useGetAllProductsQuery();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sellerListing());

    dispatch(adminGetProduct());
  }, [dispatch]);

  console.log(adminProductList);
  return (
    <div className="w-full  " style={{ width: '80vw' }}>
      <h1>latest products</h1>

      <div>
        <div class="flex justify-center gap-8">
          <div class="block max-w-sm rounded-lg bg-white p-6 shadow-lg ">
            <h5 class="mb-2 text-xl font-medium leading-tight text-black ">
              Total Sellers
            </h5>
            <p class="mb-4 text-base text-neutral-600 font-bold">
              {sellerList ? sellerList?.data?.length : 3}
            </p>
            <Link to={'/admin/seller-list'}>
              <button
                type="button"
                class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                check
              </button>
            </Link>
          </div>
          <div class="block max-w-sm rounded-lg bg-white p-6 shadow-lg ">
            <h5 class="mb-2 text-xl font-medium leading-tight text-black ">
              Total Products
            </h5>
            <p class="mb-4 text-base text-neutral-600 font-bold">
              {/* {sellerList?.data.length} */} 4
            </p>
            <Link to={'/admin/product-list'}>
              <button
                type="button"
                class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                check
              </button>
            </Link>
          </div>
        </div>
      </div>

      <DummyProducts2 />
    </div>
  );
};

export default Dashboard;
