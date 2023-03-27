import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchProducts } from '../../../store';
import { addToCart } from '../../../store';
import './products.css';

import Skeleton from 'react-loading-skeleton';

const Products = () => {
  const { allProducts, isLoading, error } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  console.log(allProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleClick = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <section class="section product" style={{ paddingBottom: '60px' }}>
      <div class="container" style={{ margin: '0 auto' }}>
        <h2 class="h2 section-title">Products of the week</h2>

        <div class="container pb-16">
          <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">
            recomended for you
          </h2>
          {error ? (
            <p>{error.message}</p>
          ) : (
            <div class="grid grid-cols-5 gap-6">
              {isLoading ? (
                <>
                  <Skeleton height={140} />
                  <Skeleton height={140} />
                  <Skeleton height={140} />
                  <Skeleton height={140} />
                  <Skeleton height={140} />
                  <Skeleton height={140} />
                  <Skeleton height={140} />
                  <Skeleton height={140} />
                  <Skeleton height={140} />
                  <Skeleton height={140} />
                </>
              ) : (
                allProducts.slice(0, 10).map((item) => {
                  return (
                    <div class="group rounded bg-white shadow overflow-hidden">
                      <div class="relative">
                        <img
                          src={item.image}
                          class="w-full"
                          alt={item.title}
                          style={{ height: '200px', objectFit: 'contain' }}
                        />
                        <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                          <a
                            href="view.html"
                            class="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center"
                          >
                            <i class="fas fa-search"></i>
                          </a>
                          <button class="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center">
                            <i class="far fa-heart"></i>
                          </button>
                        </div>
                      </div>

                      <div class="pt-4 pb-3 px-4">
                        <Link to={`/product/${item._id}`}>
                          <h4 class="uppercase font-medium text-sm mb-2 text-gray-800 hover:text-primary transition">
                            {item.title}
                          </h4>
                        </Link>
                        <div class="flex items-baseline mb-1 space-x-2">
                          <p class="text-xl text-primary font-roboto font-semibold">
                            &#8377;{item.price}
                          </p>
                          <p class="text-sm text-gray-400 font-roboto line-through">
                            {/* $55.00 */}
                          </p>
                        </div>
                        <div class="flex items-center">
                          <div class="flex gap-1 text-sm text-yellow-400">
                            <span>
                              <i class="fas fa-star"></i>
                            </span>
                            <span>
                              <i class="fas fa-star"></i>
                            </span>
                            <span>
                              <i class="fas fa-star"></i>
                            </span>
                            <span>
                              <i class="fas fa-star"></i>
                            </span>
                            <span>
                              <i class="fas fa-star"></i>
                            </span>
                          </div>
                          <div class="text-xs text-gray-500 ml-3">(150)</div>
                        </div>
                      </div>

                      <button
                        onClick={() => handleClick(item)}
                        class="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
                      >
                        Add to Cart
                      </button>
                    </div>
                  );
                })
              )}
            </div>
          )}
        </div>
      </div>

      <Link
        to="/product-list"
        style={{
          display: 'inline-block',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <button class="btn  ">View All Products</button>
      </Link>
    </section>
  );
};

export default Products;
