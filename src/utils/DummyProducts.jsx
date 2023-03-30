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

export function DummyProducts2() {
  const { data, error, isLoading } = useGetAllProductsQuery();

  const content = data?.data.map((p) => {
    return (
      <div
        class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow "
        key={p._id}
      >
        <Link to={`/product/${p._id}`}>
          <img
            class="p-8 rounded-t-lg"
            src={p.image}
            alt={p.title}
            style={{
              height: '120px',
            }}
          />
        </Link>
        <div class="px-5 pb-5">
          <a href="#">
            <h5 class="text-sm font-semibold tracking-tight text-gray-900 ">
              {p.title}
            </h5>
          </a>
          {/* <div class="flex items-center mt-2.5 mb-5">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Second star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Third star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fourth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fifth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              5.0
            </span>
          </div> */}
          <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">
              $599
            </span>
            <a
              href="#"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Details
            </a>
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
    <section class="text-gray-600 body-font">
      <h1 className="text-center text-2xl font-bold">Products of the day</h1>
      <div class="container px-5 py-24 mx-auto">
        {/* <div class="flex flex-wrap -m-4"> */}
        <Carousel responsive={responsive}>{content}</Carousel>
        {/* </div> */}
      </div>
    </section>
  );
}
