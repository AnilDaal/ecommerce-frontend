import ProductCard from "./ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts, useGetAllProductsQuery } from "../store";

import Hero from "./hero/Hero";
import Category from "./category/Category";

import Services from "./services/Services";
import Blog from "./blog/Blog";
import Footer from "./footer/Footer";
import Products from "./products/products/Products";
import FeatureCategory from "./feature-category/FeatureCategory";
import Slider from "./slider/Slider";
import HeroImage from "./hero/HeroImage";
import HeroBanner from "./hero/HeroBanner";
import TopProducts from "./products/products/TopProducts";

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
      <HeroBanner />
      {/* <HeroImage /> */}
      {/* <Hero /> */}
      <FeatureCategory />
      <Category />
      {/* <Services /> */}
      <TopProducts />

      {/* add section */}
      <div class="container pb-16" style={{ margin: "0 auto" }}>
        <a href="#">
          <img src="/offer pic.png" class="w-full" />
        </a>
      </div>
      <Products />
      {/* <ProductListing /> */}
      {/* <Blog /> */}
    </main>
  );
}

export default Home;
