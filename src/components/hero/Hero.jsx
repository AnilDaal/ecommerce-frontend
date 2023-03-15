import React from 'react';

const Hero = () => {
  return (
    <section
      class="hero"
      id="home"
      style={{ backgroundImage: "url('./assets/images/hero-banner.jpg')" }}
    >
      <div class="container">
        <div class="hero-content">
          <p class="hero-subtitle">Furniture Everyday</p>

          <h2 class="h1 hero-title">Unrivalled Furniture House</h2>

          <button class="btn btn-primary">Shop Now</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
