import React from 'react';
import Skeleton from 'react-loading-skeleton';
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';
import { useGetAllProductsQuery } from '../store';

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

const DummyProducts = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();

  const content = data?.data.map((p) => {
    return (
      <div className="border mr-4 p-2">
        <Link
          to={`/product/${p._id}`}
          class="block relative h-48 rounded overflow-hidden"
        >
          <img
            alt="ecommerce"
            class="object-cover object-center w-full h-full block"
            style={{ objectFit: 'contain' }}
            // src="https://dummyimage.com/420x260"
            src={p.image}
          />
        </Link>
        <div class="mt-4">
          <h2 class="text-gray-900 title-font text-sm font-medium text-center">
            <Link to={`/product/${p._id}`}>{p.title}</Link>
          </h2>
          <p class="mt-1 text-center"> &#8377;{p.price}</p>
        </div>
      </div>
    );
  });
  if (isLoading) {
    return (
      <div
        clasName="container "
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
        }}
      >
        <Skeleton height={160} width={160} />
        <Skeleton height={160} width={160} />
        <Skeleton height={160} width={160} />
        <Skeleton height={160} width={160} />
        <Skeleton height={160} width={160} />
        <Skeleton height={160} width={160} />
        <Skeleton height={160} width={160} />
      </div>
    );
  }
  return (
    <section class="text-gray-600 body-font">
      <h1 className="text-center text-2xl font-bold">Products of the day</h1>
      <div class="container px-5 py-24 mx-auto">
        {/* <div class="flex flex-wrap -m-4"> */}
        <Carousel responsive={responsive}>{content}</Carousel>
        {/* </div> */}
      </div>
    </section>
  );
};

export default DummyProducts;
