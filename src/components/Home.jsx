import { Link } from "react-router-dom";

import Category from "./category/Category";
import Products from "./products/products/Products";
import FeatureCategory from "./feature-category/FeatureCategory";
import TopProducts from "./products/products/TopProducts";
import DummyProducts from "../utils/DummyProducts";
import CategoryNavbar from "./category-navbar/CategoryNavbar";
import SliderPage from "./slider/Slider";
import Testimonials from "./testimonials/Testimonials";

function Home() {
  return (
    <main>
      <div
        className="flex items-center justify-center gap-2 md:gap-24 "
        style={{
          backgroundColor: "#eeeeee",
          height: "60px",
        }}
      >
        <CategoryNavbar
          title="New Books"
          links={[
            "NCERT Books",
            "RBSE Books",
            "B-Tech Books",
            "M-Tech Books",
            "more category",
          ]}
        />
        <CategoryNavbar
          title="Old Books"
          links={[
            "NCERT Books",
            "RBSE Books",
            "B-Tech Books",
            "M-Tech Books",
            "more category",
          ]}
        />
        <CategoryNavbar
          title="Customized"
          links={[
            "NoteBook Cover",
            "Custom Size",
            "A4 Notebook",
            "Notbook for Gift",
          ]}
        />
        {/* <CategoryNavbar
          title="Dinning Room"
          links={[
            "Dinning Tables",
            "Dinning Chairs",
            "Bar Stools",
            "Bar cabinets",
          ]}
        /> */}
      </div>

      {/* <HeroBanner /> */}

      <SliderPage />
      {/* <Hero /> */}

      {/* <Product />
      <ProductListDummy1 /> */}
      <FeatureCategory />

      {/* <Services /> */}
      <TopProducts />

      {/* add section */}
      <div class="container m-auto">
        <Link to="/product-list">
          <img className="home-flex-img" src="/slider1.png" alt="home-flex" />
        </Link>
      </div>
      <Products />
      {/* <ProductListing /> */}
      {/* <Blog /> */}
      <Category />
      {/* <HeroImage /> */}
      <DummyProducts />
      <Testimonials />
    </main>
  );
}

export default Home;
