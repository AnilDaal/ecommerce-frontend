import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsCart2 } from 'react-icons/bs';
import {
  addToCart,
  fetchProducts,
  productAddToWishlist,
  productCartList,
} from '../../../store';

import { toast } from 'react-toastify';
import { productAddToCart } from '../../../store';
import './products.css';

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

  const handleWishlist = (productId) => {
    if (token) {
      dispatch(productAddToWishlist(productId))
        .unwrap()
        .then(() => {
          toast.success(`Product Added To Wishlist`, {
            position: 'top-right',
          });
        })
        .catch((err) => {
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
                  style={{ borderRadius: '5px', position: 'relative' }}
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

                  {/* <div style={{ textAlign: 'center' }}>
                    <button
                      onClick={() => handleClick(item)}
                      class="block w-24 py-1 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition"
                      style={{ display: 'inline-block' }}
                    >
                      Add to Cart
                    </button>
                  </div> */}

                  <div
                    style={{
                      position: 'absolute',
                      top: '10px',
                      right: '5px',
                    }}
                    className="box-flex-middle-icons"
                  >
                    <button
                      onClick={() => handleWishlist(item._id)}
                      class="rounded-full w-8 h-8 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 "
                    >
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                      </svg>
                    </button>
                  </div>
                  <div
                    style={{ position: 'absolute', top: '10px', right: '40px' }}
                    className="box-flex-middle-icons"
                  >
                    <button
                      onClick={() => handleClick(item._id)}
                      class="rounded-full w-8 h-8 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 "
                    >
                      <BsCart2 />
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
