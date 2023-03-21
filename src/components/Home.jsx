import ProductCard from './ProductCard';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts, useGetAllProductsQuery } from '../store';

import Hero from './hero/Hero';
import Category from './category/Category';

import Services from './services/Services';
import Blog from './blog/Blog';
import Footer from './footer/Footer';
import Products from './products/products/Products';

function Home() {
  const { data, error, isLoading } = useGetAllProductsQuery();
  // const { items, error } = useSelector((state) => state.products);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, []);
  // console.log(error);

  // if (isLoading) return <p>Loading...</p>;
  // if (error) return <p>error is: {error.error}</p>;
  return (
    <main>
      <article>
        <Hero />

        <Category />
        <Services />
        <Products />
        {/* <ProductListing /> */}
        <Blog />
        <Footer />
      </article>
    </main>
  );
}

export default Home;
