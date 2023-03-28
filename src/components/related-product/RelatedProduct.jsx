import Skeleton from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, useGetAllProductsQuery } from '../../store';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const RelatedProduct = ({ value, col = 4 }) => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const handleClick = (product) => {
    dispatch(addToCart(product));
  };

  const content = data?.data.slice(0, value).map((item) => {
    return (
      // <h1>hello slider</h1>
      <div
        class="bg-white shadow rounded overflow-hidden group mr-5 mx-2"
        key={item._id}
      >
        <div class="relative">
          <img src={item.image} alt="product 1" class="w-full" />
          <div
            class="absolute inset-0 bg-black bg-opacity-40 flex items-center
            justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
          >
            {/* <button
              class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              title="view product"
            >
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <button
              class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              title="add to wishlist"
            >
              <i class="fa-solid fa-heart"></i>
            </button> */}
          </div>
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
            {/* <p class="text-sm text-gray-400 line-through">$55.90</p> */}
          </div>
          {/* <div class="flex items-center">
            <div class="flex gap-1 text-sm text-yellow-400">
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
            </div>
            <div class="text-xs text-gray-500 ml-3">(150)</div>
          </div> */}
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
    <>
      {error && <h2>{error.message}</h2>}
      <div class={`grid grid-cols gap-6`}>
        {isLoading ? (
          <>
            <Skeleton height={140} />
            <Skeleton height={140} />
            <Skeleton height={140} />
            <Skeleton height={140} />
            <Skeleton height={140} />
            <Skeleton height={140} />
            <Skeleton height={140} />
          </>
        ) : (
          <Carousel responsive={responsive}>{content}</Carousel>
        )}
      </div>
    </>
  );
};

export default RelatedProduct;
