/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { arr } from "../../../data/jsonTestData";

import { addToCart } from "../../../store";
import "./products.css";

const Products = () => {
  const dispatch = useDispatch();
  console.log(arr);
  const handleClick = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <section class="section product" style={{ paddingBottom: "60px" }}>
      <div class="container" style={{ margin: "0 auto" }}>
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
          <div class="box-flex">
            {arr.slice(0, 10).map((item) => {
              return (
                <div class="box-flex-middle">
                  <div>
                    <img src={item.Images} alt={item.Name} />
                  </div>
                  <div>
                    <a href="view.html">
                      <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                        {item.Name}
                      </h4>
                    </a>
                    <div class=" items-baseline mb-1 space-x-2">
                      <p>&#8377;{item["Regular price"]}</p>
                    </div>
                    <div class="start-chage-size">
                      <div>
                        <span>⭐</span>
                        <span>⭐</span>
                        <span>⭐</span>
                        <span>⭐</span>
                        <span>⭐</span>
                      </div>
                      <p>(150)</p>
                    </div>
                  </div>

                  <a
                    href="#"
                    class="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition "
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
