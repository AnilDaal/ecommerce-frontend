import React from 'react';
import { Link } from 'react-router-dom';
import './hero.css';
const HeroImage = () => {
  return (
    <div className="d-hero-image">
      {/* <img
        src="https://img.freepik.com/free-vector/realistic-home-interior-template-with-sofa-pillows-bar-modern-wicker-hanging-chair-lamps-plant-flowerpot-green-background-illustration_1284-51319.jpg?size=626&ext=jpg&ga=GA1.2.351337750.1677481415&semt=sph"
        alt=""
      /> */}
      <div className="d-hero-content">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex md:flex-col  md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font text-sm lg:text-3xl mb-4 font-medium text-gray-900">
            Before they sold out
            <br class="hidden lg:inline-block" />
            get premium furniture
          </h1>
          {/* <p class="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p> */}
          <div class="flex justify-center">
            <Link to="/product-list">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm md:text-lg">
                Buy Now
              </button>
            </Link>
            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-sm md:text-lg">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
