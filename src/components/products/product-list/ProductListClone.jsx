import React, { useEffect, useLayoutEffect, useState } from 'react';
import Spinner from '../../../utils/Spinner';
import {
  handleFilterCat,
  productAddToCart,
  productCartList,
} from '../../../store';
import { useDispatch, useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import { handleFilter } from '../../../store';
import { fetchProducts } from '../../../store';

import './product-listclone.css';
import { toast } from 'react-toastify';

const ProductListClone = () => {
  const [count, setCount] = useState(1);
  const [cartLoading, setCartLoading] = useState(false);
  console.log(count);
  const dispatch = useDispatch();
  const {
    allProducts,
    filterProducts,
    searchTerm,
    error,
    isLoading,
    totalProduct,
    paginateProduct,
    filterCat,
  } = useSelector((state) => state.products);

  console.log(paginateProduct);

  const { token } = useSelector((state) => state.auth);

  const handleClick = (product) => {
    if (token) {
      setCartLoading(true);
      dispatch(productAddToCart(product._id))
        .unwrap()
        .then(() => {
          setCartLoading(false);
          toast.success(`Product Added To Cart`, {
            position: 'top-right',
          });
          dispatch(productCartList());
        })
        .catch((err) => {
          setCartLoading(false);
          if (err.status === 'fail')
            toast.info(`Product Already In Cart`, {
              position: 'top-right',
            });
        });
    } else {
      toast.error(`Please Login First `, {
        position: 'top-right',
      });
    }
  };

  const handleFilterData = (product) => {
    dispatch(handleFilterCat(product));
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    dispatch(fetchProducts({ searchTerm, filterCat, number: count }));
  }, [dispatch, searchTerm, count, filterCat]);

  const handlePreviousCount = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const handleNextCount = () => {
    if (count < 20) {
      setCount((prev) => prev + 1);
    }
  };

  console.log(filterProducts);

  const content = (
    filterProducts.length === 0 ? allProducts : filterProducts
  ).map((item) => {
    return (
      <div
        class="bg-white shadow rounded overflow-hidden group d-product-list-content"
        key={item._id}
      >
        <div class="relative">
          <Link to={`/product/${item._id}`} state={{ count: count }}>
            <img
              src={item.image}
              alt="product 1"
              class="w-full"
              style={{ height: '200px' }}
            />
            <div
              class="absolute inset-0 bg-black bg-opacity-40 flex items-center 
            justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
            ></div>
          </Link>
        </div>
        <div class="pt-4 pb-3 px-4">
          <Link to={`/product/${item._id}`} state={{ count: count }}>
            <h4 class="uppercase font-medium text-sm mb-2 h-8 text-gray-800 hover:text-primary transition">
              {item.title?.substring(0, 22)}...
            </h4>
          </Link>
          <div class="flex items-baseline mb-1 space-x-2">
            <p class="text-sm text-primary font-semibold">
              &#8377;{item.price}
            </p>
          </div>
          <div class="flex items-center"></div>
        </div>
        <div
          style={{
            textAlign: 'center',
          }}
        >
          <button
            onClick={() => handleClick(item)}
            class="block w-24 py-1 text-center text-white mb-1 bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition"
            style={{ display: 'inline-block' }}
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  });
  return (
    <div>
      {/* <div class="container py-4 flex items-center gap-3 d-filter-overlay">
        <button
          class="inline-flex items-center bg-gray-400 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          onClick={() => handleFilterData('')}
        >
          All
        </button>
        <button
          class="inline-flex items-center bg-gray-400 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          onClick={() => handleFilterData('chairs')}
        >
          Chair
        </button>
        <button
          class="inline-flex items-center bg-gray-400 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          onClick={() => handleFilterData('tables')}
        >
          Table
        </button>
      </div> */}

      <div class="container grid grid-cols-4 gap-6 pt-4 pb-16 items-start mx-auto">
        <div
          class="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden d-product-list-left"
          style={{ position: 'sticky', left: 0, top: '100px' }}
        >
          <div class="divide-y divide-gray-200 space-y-5">
            <div>
              <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">
                Categories
              </h3>
              <div class="space-y-2">
                {/* <div class="flex items-center ">
                  <div class="ml-auto text-gray-600 text-sm">(15)</div>
                </div>
                <div class="flex items-center">
                  <div class="ml-auto text-gray-600 text-sm">(9)</div>
                </div>
                <div class="flex items-center">
                  <input
                    type="checkbox"
                    name="cat-3"
                    id="cat-3"
                    class="text-primary focus:ring-0 rounded-sm cursor-pointer mb-2"
                  />
                  <label for="cat-3" class="text-gray-600 ml-3 cusror-pointer">
                    Office
                  </label>
                  <div class="ml-auto text-gray-600 text-sm">(21)</div>
                </div> */}
                <div class="flex flex-col ">
                  <button
                    onClick={() => handleFilterData('mesh')}
                    class={`text-gray-600 ml-3 cusror-pointer border p-2 ${
                      filterCat === 'mesh' ? 'selected' : null
                    }`}
                  >
                    Mesh Chairs
                  </button>
                  <button
                    onClick={() => handleFilterData('table')}
                    class={`text-gray-600 ml-3 cusror-pointer border p-2 ${
                      filterCat === 'table' ? 'selected' : null
                    }`}
                  >
                    Tables
                  </button>
                  <button
                    onClick={() => handleFilterData('sofa')}
                    class={`text-gray-600 ml-3 cusror-pointer border p-2 ${
                      filterCat === 'sofa' ? 'selected' : null
                    }`}
                  >
                    Sofa
                  </button>
                  <button
                    onClick={() => handleFilterData('bar')}
                    class={`text-gray-600 ml-3 cusror-pointer border p-2 ${
                      filterCat === 'bar' ? 'selected' : null
                    }`}
                  >
                    Bar Stools
                  </button>
                  <button
                    class={`text-gray-600 ml-3 cusror-pointer border p-2 ${
                      filterCat === 'cabinets' ? 'selected' : null
                    }`}
                    onClick={() => handleFilterData('cabinets')}
                  >
                    Cabinets
                  </button>
                </div>
              </div>
            </div>

            <div class="pt-4">
              <button onClick={() => handleFilterData('')}>Clear Filter</button>
            </div>
          </div>
        </div>

        <div class="col-span-3 d-product-list-right ">
          <div class="flex items-center mb-4">
            <div class="flex gap-2 ml-auto">
              <div class="border border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer">
                <i class="fa-solid fa-grip-vertical"></i>
              </div>
              <div class="border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer">
                <i class="fa-solid fa-list"></i>
              </div>
            </div>
          </div>

          {error && <h2>{error.message}</h2>}
          {/* <div class="grid grid-cols-4 gap-6 d-product-list"> */}
          {isLoading ? (
            <div class="grid grid-cols-4 gap-6 d-product-list">
              <Skeleton height={140} />
              <Skeleton height={140} />
              <Skeleton height={140} />
              <Skeleton height={140} />
              <Skeleton height={140} />
              <Skeleton height={140} />
              <Skeleton height={140} />
            </div>
          ) : paginateProduct > 0 ? (
            <>
              <div class="grid grid-cols-4 gap-6 d-product-list">{content}</div>
              <br />

              <div
                className="pagination flex  "
                style={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '500px',
                }}
              >
                <div className="text-xl text-gray-300">page {count}</div>
                <div className="flex gap-2">
                  <button
                    onClick={handlePreviousCount}
                    className="p-2 border text-xl w-32 hover:border-cyan-900"
                    disabled={count === 1}
                  >
                    &laquo; Previous
                  </button>

                  <button
                    onClick={handleNextCount}
                    className="p-2 border text-xl hover:border-cyan-900 w-32"
                  >
                    &raquo; Next
                  </button>
                </div>
              </div>
            </>
          ) : (
            <p>
              There Are No More Product Go Back{' '}
              <button
                onClick={handlePreviousCount}
                className="p-2 border text-xl w-32 hover:border-cyan-900"
                disabled={count === 1}
              >
                &laquo; Previous
              </button>
            </p>
          )}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductListClone;
