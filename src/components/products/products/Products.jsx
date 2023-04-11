/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { addToCart, fetchProducts, productCartList } from '../../../store';
import './products.css';
import { toast } from 'react-toastify';
import { productAddToCart } from '../../../store';

const Products = () => {
  const { token } = useSelector((state) => state.auth);
  const { allProducts } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts({ number: 4, limit: 10 }));
  }, [dispatch]);

  const handleClick = (product) => {
    if (token) {
      dispatch(productAddToCart(product._id))
        .unwrap()
        .then(() => {
          toast.success(`Product Added To Cart `, {
            position: 'top-right',
          });
          dispatch(productCartList());
        })
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
  return (
    <section class="section product" style={{ paddingBottom: '10px' }}>
      <div class="container" style={{ margin: '0 auto' }}>
        {/* <h2 class="h2 section-title">Products of the week</h2> */}

        <div class="container pb-16">
          <h1 className="text-center text-4xl my-8">Recomended For You</h1>
          <div class="box-flex">
            {allProducts.map((item) => {
              return (
                <div
                  class="box-flex-middle "
                  key={item._id}
                  style={{ borderRadius: '5px' }}
                >
                  <Link to={`/product/${item._id}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full"
                      style={{ height: '200px' }}
                    />
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

                  <div style={{ textAlign: 'center' }}>
                    <button
                      onClick={() => handleClick(item)}
                      class="block w-24 py-1 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition"
                      style={{ display: 'inline-block' }}
                    >
                      Add to Cart
                    </button>
                  </div>
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
        <button class="btn  bg-primary">View All Products</button>
      </Link>
    </section>
  );
};

export default Products;
