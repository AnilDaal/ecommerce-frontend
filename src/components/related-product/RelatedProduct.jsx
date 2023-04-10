import Skeleton from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { useGetAllProductsQuery } from '../../store';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { toast } from 'react-toastify';
import { productAddToCart, productCartList } from '../../store/thunks/cart';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const RelatedProduct = ({ value, col = 4 }) => {
  const location = useLocation();

  const { data, error, isLoading } = useGetAllProductsQuery(
    location.state ? location.state.count : 2
  );
  const { token } = useSelector((state) => state.auth);
  // const { isLoading: productAddToCartLoading } = useSelector(
  //   (state) => state.productCart
  // );
  const dispatch = useDispatch();

  const handleClick = (product) => {
    if (token) {
      // dispatch(addToCart(product));
      dispatch(productAddToCart(product._id))
        .unwrap()
        .then(() => {
          toast.success(`Product Added To Cart `, {
            position: 'top-right',
          });
          dispatch(productCartList());
        })
        .catch((err) => {
          if (err.status === 'fail') {
            toast.info(`Product Already Added To Cart `, {
              position: 'top-right',
            });
          }
        });
    } else {
      toast.error(`Please Login First `, {
        position: 'top-right',
      });
    }
  };

  const content = data?.data.slice(0, value).map((item) => {
    return (
      <div
        class="bg-white shadow rounded overflow-hidden group mr-5 mx-2 "
        key={item._id}
      >
        <div class="relative ">
          <Link to={`/product/${item._id}`}>
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
          <Link to={`/product/${item._id}`}>
            <h4 class="uppercase font-medium text-sm mb-2 text-gray-800 hover:text-primary transition">
              {item.title.substring(0, 20)}...
            </h4>
          </Link>
          <div class="flex items-baseline mb-1 space-x-2">
            <p class="text-sm text-primary font-semibold">
              &#8377;{item.price}
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button
            disabled={isLoading}
            onClick={() => handleClick(item)}
            class="block w-24 py-1 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition"
            style={{ display: 'inline-block' }}
          >
            {/* {productAddToCartLoading ? <Loader /> : 'Add To Cart'} */}
            Add To Cart
          </button>
        </div>
      </div>
    );
  });
  return (
    <>
      {error && <h2>{error.message}</h2>}
      <div class={`grid grid-cols gap-6`}>
        {isLoading ? (
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <Skeleton height={140} width={140} />
            <Skeleton height={140} width={140} />
            <Skeleton height={140} width={140} />
            <Skeleton height={140} width={140} />
            <Skeleton height={140} width={140} />
            <Skeleton height={140} width={140} />
          </div>
        ) : (
          <Carousel responsive={responsive}>{content}</Carousel>
        )}
      </div>
    </>
  );
};

export default RelatedProduct;
