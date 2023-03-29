/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { addToCart, fetchProducts } from '../../../store';
import './products.css';

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
    <section class="section product">
      <div class="container" style={{ margin: '0 auto' }}>
        <div class="container pb-8">
          <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6 text-center">
            recomended for you
          </h2>
          <div class="box-flex">
            {allProducts.map((item) => {
              return (
                <div class="box-flex-middle" key={item._id}>
                  <Link to={`/product/${item._id}`}>
                    <img src={item.image} alt={item.title} />
                  </Link>
                  <div>
                    <Link to={`/product/${item._id}`}>
                      <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                        {item.title}
                      </h4>
                    </Link>
                    <div class=" items-baseline mb-1 space-x-2">
                      <p>&#8377;{item.price}</p>
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
            })}
          </div>
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
        <button class="btn  bg-teal-400">View All Products</button>
      </Link>
    </section>
  );
};

export default Products;
