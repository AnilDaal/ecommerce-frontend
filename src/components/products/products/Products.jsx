import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { arr } from '../../../data/jsonTestData';

import { addToCart } from '../../../store';
import './products.css';

const Products = () => {
  const dispatch = useDispatch();
  console.log(arr);
  const handleClick = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <section class="section product" style={{ paddingBottom: '60px' }}>
      <div class="container" style={{ margin: '0 auto' }}>
        <h2 class="h2 section-title">Products of the week</h2>

        {/* <ul class="filter-list">
          <li>
            <button class="filter-btn  active">Best Seller</button>
          </li>

          <li>
            <button class="filter-btn">Hot Collection</button>
          </li>

          <li>
            <button class="filter-btn">Trendy</button>
          </li>

          <li>
            <button class="filter-btn">New Arrival</button>
          </li>
        </ul> */}

        {/* <div class="product-container"> */}
        <div class="container pb-16">
          <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">
            recomended for you
          </h2>
          <div class="grid grid-cols-5 gap-6">
            {arr.slice(0, 10).map((item) => {
              return (
                <div class="group rounded bg-white shadow overflow-hidden">
                  <div class="relative">
                    <img src={item.Images} class="w-full" alt={item.Name} />
                    <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                      <a
                        href="view.html"
                        class="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center"
                      >
                        <i class="fas fa-search"></i>
                      </a>
                      <a
                        href="#"
                        class="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center"
                      >
                        <i class="far fa-heart"></i>
                      </a>
                    </div>
                  </div>

                  <div class="pt-4 pb-3 px-4">
                    <a href="view.html">
                      <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                        {item.Name}
                      </h4>
                    </a>
                    <div class="flex items-baseline mb-1 space-x-2">
                      <p class="text-xl text-primary font-roboto font-semibold">
                        &#8377;{item['Regular price']}
                      </p>
                      <p class="text-sm text-gray-400 font-roboto line-through">
                        $55.00
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

                  <a
                    href="#"
                    class="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
                  >
                    Add to Cart
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Link to="/product-list">
        <button class="btn bg-black">View All Products</button>
      </Link>
      {/* </div> */}
    </section>
  );
};

export default Products;
