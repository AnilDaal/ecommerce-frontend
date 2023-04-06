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
    items: 4,
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
      <div className="border mr-4 p-2" key={p._id}>
        <Link
          to={`/product/${p._id}`}
          className="block relative h-48 rounded overflow-hidden"
        >
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            style={{ objectFit: 'contain' }}
            // src="https://dummyimage.com/420x260"
            src={p.image}
          />
        </Link>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-sm font-medium text-center">
            <Link to={`/product/${p._id}`}>{p.title}</Link>
          </h2>
          <p className="mt-1 text-center"> &#8377;{p.price}</p>
        </div>
      </div>
    );
  });
  if (isLoading) {
    return (
      <div
        // clasName="container "
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
    <section className="text-gray-600 body-font">
      <h1 className="text-center text-2xl font-bold">Products of the day</h1>
      <div className="container px-5 py-24 mx-auto">
        {/* <div className="flex flex-wrap -m-4"> */}
        <Carousel responsive={responsive}>{content}</Carousel>
        {/* </div> */}
      </div>
    </section>
  );
};

export default DummyProducts;

export function DummyProducts2() {
  const { data, error, isLoading } = useGetAllProductsQuery();

  const content = data?.data.map((p) => {
    return (
      <div
        className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow h-56"
        key={p._id}
      >
        <Link
          to={`/admin/single-product/${p._id}`}
          className=" flex items-center justify-center"
        >
          <img
            className=" rounded-t-lg"
            src={p.image}
            alt={p.title}
            style={{
              height: '120px',
            }}
          />
        </Link>
        <div className="px-5 pb-5">
          <Link to={`/admin/single-product/${p._id}`}>
            <h5 className="text-sm font-semibold tracking-tight text-gray-900 ">
              {p.title}
            </h5>
          </Link>

          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              &#8377;{p.price}
            </span>
            <Link
              to={`/admin/single-product/${p._id}`}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Details
            </Link>
          </div>
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
    <section className="text-gray-600 body-font">
      <h1 className="text-center text-2xl font-bold">Products of the day</h1>
      <div className="container px-5 py-24 mx-auto">
        {/* <div className="flex flex-wrap -m-4"> */}
        <Carousel responsive={responsive}>{content}</Carousel>
        {/* </div> */}
      </div>
    </section>
  );
}
