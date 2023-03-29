/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { arr } from "../../../data/jsonTestData";

import { addToCart, fetchProducts } from "../../../store";
import "./products.css";

const Products = () => {
  // eslint-disable-next-line no-undef
  const { allProducts, isLoading, error } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  console.log(allProducts);

  // eslint-disable-next-line no-undef
  useEffect(() => {
    // eslint-disable-next-line no-undef
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleClick = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <section class="section product" style={{ paddingBottom: "10px" }}>
      <div class="container" style={{ margin: "0 auto" }}>
        <h2 class="h2 section-title">Products of the week</h2>

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
                  <div class="pt-4 pb-3 px-4">
                    <a href="view.html">
                      <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                        {item.Name}
                      </h4>
                    </a>
                    <div class=" items-baseline mb-1 space-x-2">
                      <p>&#8377;{item["Regular price"]}</p>
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

      <Link
        to="/product-list"
        style={{
          display: "inline-block",
          width: "100%",
          textAlign: "center",
        }}
      >
        <button class="btn  bg-teal-400">View All Products</button>
      </Link>
    </section>
  );
};

export default Products;
