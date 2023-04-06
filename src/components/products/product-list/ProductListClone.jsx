import React, { useEffect, useLayoutEffect, useState } from 'react';

import {
  addToCart,
  productAddToCart,
  productCartList,
  useGetAllProductsQuery,
} from '../../../store';
import { useDispatch, useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import { handleFilter } from '../../../store';
import { fetchProducts } from '../../../store';

import './product-listclone.css';
import { toast } from 'react-toastify';

const activeStyle = {
  backgroundColor: 'teal',
};

const ProductListClone = () => {
  const [count, setCount] = useState(1);
  console.log(count);
  const dispatch = useDispatch();
  const { allProducts, filterProducts, searchTerm, error, isLoading } =
    useSelector((state) => state.products);
  const { token } = useSelector((state) => state.auth);

  const handleClick = (product) => {
    if (token) {
      dispatch(productAddToCart(product._id))
        .unwrap()
        .then(() => dispatch(productCartList()))
        .catch((err) => {
          if (err.status === 'fail')
            return toast.info(`Product Already In Cart`, {
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
    dispatch(handleFilter(product));
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    dispatch(fetchProducts({ searchTerm, number: count }));
  }, [dispatch, searchTerm, count]);

  // const handleLoadMore = () => {
  //   setCount((prev) => prev + 1);
  //   dispatch(fetchProducts(count));
  // };

  const handlePreviousCount = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
      console.log(count);
      dispatch(fetchProducts({ number: count, searchTerm }));
    }
  };

  const handleNextCount = () => {
    if (count < 20) {
      setCount((prev) => prev + 1);
      dispatch(fetchProducts({ number: count, searchTerm }));
    }
  };

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
            <img src={item.image} alt="product 1" class="w-full" />
            <div
              class="absolute inset-0 bg-black bg-opacity-40 flex items-center 
            justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
            ></div>
          </Link>
        </div>
        <div class="pt-4 pb-3 px-4">
          <Link to={`/product/${item._id}`} state={{ count: count }}>
            <h4 class="uppercase font-medium text-sm mb-2 text-gray-800 hover:text-primary transition">
              {item.title?.substring(0, 20)}...
            </h4>
          </Link>
          <div class="flex items-baseline mb-1 space-x-2">
            <p class="text-xl text-primary font-semibold">
              &#8377;{item.price}
            </p>
          </div>
          <div class="flex items-center"></div>
        </div>
        <button
          onClick={() => handleClick(item)}
          class="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
        >
          Add to cart
        </button>
      </div>
    );
  });
  return (
    <div>
      <div class="container py-4 flex items-center gap-3 d-filter-overlay">
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
      </div>

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
                <div class="flex items-center ">
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
                </div>
                <div class="flex items-center">
                  <input
                    type="checkbox"
                    name="cat-4"
                    id="cat-4"
                    class="text-primary focus:ring-0 rounded-sm cursor-pointer mb-2"
                  />
                  <label for="cat-4" class="text-gray-600 ml-3 cusror-pointer">
                    Outdoor
                  </label>
                  <div class="ml-auto text-gray-600 text-sm">(10)</div>
                </div>
              </div>
            </div>

            <div class="pt-4">
              <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">
                Brands
              </h3>
              <div class="space-y-2">
                <div class="flex items-center">
                  <input
                    type="checkbox"
                    name="brand-1"
                    id="brand-1"
                    class="text-primary focus:ring-0 rounded-sm cursor-pointer mb-2"
                  />
                  <label
                    for="brand-1"
                    class="text-gray-600 ml-3 cusror-pointer"
                  >
                    Cooking Color
                  </label>
                  <div class="ml-auto text-gray-600 text-sm">(15)</div>
                </div>
                <div class="flex items-center">
                  <input
                    type="checkbox"
                    name="brand-2"
                    id="brand-2"
                    class="text-primary focus:ring-0 rounded-sm cursor-pointer mb-2"
                  />
                  <label
                    for="brand-2"
                    class="text-gray-600 ml-3 cusror-pointer"
                  >
                    Magniflex
                  </label>
                  <div class="ml-auto text-gray-600 text-sm">(9)</div>
                </div>
                <div class="flex items-center">
                  <input
                    type="checkbox"
                    name="brand-3"
                    id="brand-3"
                    class="text-primary focus:ring-0 rounded-sm cursor-pointer mb-2"
                  />
                  <label
                    for="brand-3"
                    class="text-gray-600 ml-3 cusror-pointer"
                  >
                    Ashley
                  </label>
                  <div class="ml-auto text-gray-600 text-sm">(21)</div>
                </div>
                <div class="flex items-center">
                  <input
                    type="checkbox"
                    name="brand-4"
                    id="brand-4"
                    class="text-primary focus:ring-0 rounded-sm cursor-pointer mb-2"
                  />
                  <label
                    for="brand-4"
                    class="text-gray-600 ml-3 cusror-pointer"
                  >
                    M&D
                  </label>
                  <div class="ml-auto text-gray-600 text-sm">(10)</div>
                </div>
                <div class="flex items-center">
                  <input
                    type="checkbox"
                    name="brand-5"
                    id="brand-5"
                    class="text-primary focus:ring-0 rounded-sm cursor-pointer mb-2"
                  />
                  <label
                    for="brand-5"
                    class="text-gray-600 ml-3 cusror-pointer"
                  >
                    Olympic
                  </label>
                  <div class="ml-auto text-gray-600 text-sm">(10)</div>
                </div>
              </div>
            </div>

            <div class="pt-4">
              <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">
                Price
              </h3>
              <div class="mt-4 flex items-center">
                <input
                  type="text"
                  name="min"
                  id="min"
                  class="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                  placeholder="min"
                />
                <span class="mx-3 text-gray-500">-</span>
                <input
                  type="text"
                  name="max"
                  id="max"
                  class="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                  placeholder="max"
                />
              </div>
            </div>

            <div class="pt-4">
              <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">
                size
              </h3>
              <div class="flex items-center gap-2">
                <div class="size-selector">
                  <input type="radio" name="size" id="size-xs" class="hidden" />
                  <label
                    for="size-xs"
                    class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    XS
                  </label>
                </div>
                <div class="size-selector">
                  <input type="radio" name="size" id="size-sm" class="hidden" />
                  <label
                    for="size-sm"
                    class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    S
                  </label>
                </div>
                <div class="size-selector">
                  <input type="radio" name="size" id="size-m" class="hidden" />
                  <label
                    for="size-m"
                    class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    M
                  </label>
                </div>
                <div class="size-selector">
                  <input type="radio" name="size" id="size-l" class="hidden" />
                  <label
                    for="size-l"
                    class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    L
                  </label>
                </div>
                <div class="size-selector">
                  <input type="radio" name="size" id="size-xl" class="hidden" />
                  <label
                    for="size-xl"
                    class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    XL
                  </label>
                </div>
              </div>
            </div>

            <div class="pt-4">
              <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">
                Color
              </h3>
              <div class="flex items-center gap-2">
                <div class="color-selector">
                  <input type="radio" name="color" id="red" class="hidden" />
                  <label
                    for="red"
                    class="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                    style={{ backgroundColor: '#fc3d57' }}
                  ></label>
                </div>
                <div class="color-selector">
                  <input type="radio" name="color" id="black" class="hidden" />
                  <label
                    for="black"
                    class="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                    style={{ backgroundColor: '#000' }}
                  ></label>
                </div>
                <div class="color-selector">
                  <input type="radio" name="color" id="white" class="hidden" />
                  <label
                    for="white"
                    class="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                    style={{ backgroundColor: '#fff' }}
                  ></label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-3 d-product-list-right ">
          <div class="flex items-center mb-4">
            {/* <select
              name="sort"
              id="sort"
              class="w-44 text-sm text-gray-600 py-3 px-4 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary "
              style={{ border: '1px solid black' }}
            > */}
            {/* <option value="">Default sorting</option> */}
            {/* <button
              value="price-low-to-high"
              onClick={handleLowToHigh}
              className="btn bg-slate-500"
            >
              Price low to high
            </button> */}
            {/* <button
              value="price-high-to-low"
              onClick={handleHighToLow}
              className="btn bg-slate-500"
            >
              Price high to low
            </button> */}
            {/* <option value="latest">Latest product</option>
            </select> */}

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
          ) : (
            <>
              <div class="grid grid-cols-4 gap-6 d-product-list">{content}</div>
              <br />
              {/* <hr /> */}
              {/* <button className="btn bg-teal-500" onClick={handleLoadMore}>
                  Load More
                </button> */}
              <div
                class="pagination flex  w-full"
                style={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '500px',
                }}
              >
                <div className="text-xl text-gray-300">
                  page of {count} of 20
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handlePreviousCount}
                    className="p-2 border text-xl w-32 hover:border-cyan-900"
                    disabled={count === 1}
                  >
                    &laquo; Previous
                  </button>
                  {/* <NavLink
                      className="btn bg-slate-400 "
                      style={({ isActive }) => (isActive ? activeStyle : null)}
                    >
                      1
                    </NavLink>
                    <NavLink className="border p-2 ">2</NavLink>
                    <NavLink className="border p-2 ">3</NavLink>
                    <NavLink className="border p-2 ">4</NavLink>
                    <NavLink className="border p-2 ">5</NavLink>
                    <NavLink className="border p-2 ">6</NavLink> */}
                  <button
                    onClick={handleNextCount}
                    className="p-2 border text-xl hover:border-cyan-900 w-32"
                  >
                    &raquo; Next
                  </button>
                </div>
              </div>
            </>
          )}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductListClone;
