import ProductCard from './ProductCard';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts, useGetAllProductsQuery } from '../store';

import Hero from './hero/Hero';
import Category from './category/Category';

// import Services from "./services/Services";
// import Blog from "./blog/Blog";
// import Footer from "./footer/Footer";
// import Products from "./products/products/Products";
// import FeatureCategory from "./feature-category/FeatureCategory";
// import Slider from "./slider/Slider";
// import HeroImage from "./hero/HeroImage";
// import HeroBanner from "./hero/HeroBanner";
// import TopProducts from "./products/products/TopProducts";
// import { Link } from "react-router-dom";
// import DummyProducts from "../utils/DummyProducts.jsx";

import Services from './services/Services';
import Blog from './blog/Blog';
import Footer from './footer/Footer';
import Products from './products/products/Products';
import FeatureCategory from './feature-category/FeatureCategory';
import Slider from './slider/Slider';
import HeroImage from './hero/HeroImage';
import HeroBanner from './hero/HeroBanner';
import TopProducts from './products/products/TopProducts';
import DummyProducts from '../utils/DummyProducts';
import { Link } from 'react-router-dom';
import offerImg from '../assets/offerpic.png';
import CategoryNavbar from './category-navbar/CategoryNavbar';
function Home() {
  // const { data, error, isLoading } = useGetAllProductsQuery();
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
      {/* <Slider /> */}
      <div
        className="flex items-center justify-center gap-2 md:gap-24 "
        style={{
          backgroundColor: '#eeeeee',
          height: '60px',
        }}
      >
        <CategoryNavbar
          title="Office furniture"
          links={[
            'Office Chair',
            'Office Table',
            'Computer Table',
            'Mesh Chair',
            'Resturant Chair',
          ]}
        />
        <CategoryNavbar
          title="Bedroom"
          links={[
            'Beds',
            'Chest Of Drawers',
            'Mattresses',
            'Wardrobes',
            'Bedside Tables',
            'Dressing Tables',
          ]}
        />
        <CategoryNavbar
          title="Living Room"
          links={[
            'Pouffes & Ottomans',
            'Sofas & Couches',
            'Bean Bags',
            'Bookshelves',
            'Sofa Sets',
            'Tables',
            'Cabinets',
          ]}
        />
        <CategoryNavbar
          title="Dinning Room"
          links={[
            'Dinning Sets',
            'Dinning Tables',
            'Dinning Chairs',
            'Bar Stools',
            'Bar cabinets',
          ]}
        />
      </div>
      <HeroBanner />
      {/* <Hero /> */}

      <FeatureCategory />

      {/* <Services /> */}
      <TopProducts />

      {/* add section */}
      <div class="container m-auto">
        <Link to="/product-list">
          <img className="home-flex-img" src="/offer pic.png" alt="home-flex" />
        </Link>
      </div>
      <Products />
      {/* <ProductListing /> */}
      {/* <Blog /> */}
      <Category />
      {/* <HeroImage /> */}
      <DummyProducts />
    </main>
  );
}

export default Home;
