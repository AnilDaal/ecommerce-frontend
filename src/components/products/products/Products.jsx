import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { arr } from '../../../data/jsonTestData';

import { addToCart } from '../../../store';
import './products.css';

const Products = () => {
  const dispatch = useDispatch();
  console.log(arr);
  const handleClick = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <section class="section product" style={{ paddingBottom: '60px' }}>
      <div class="container">
        <h2 class="h2 section-title">Products of the week</h2>

        <ul class="filter-list">
          <li>
            <button class="filter-btn  active">Best Seller</button>
          </li>

          <li>
            <button class="filter-btn">Hot Collection</button>
          </li>

          <li>
            <button class="filter-btn">Trendy</button>
          </li>

          <li>
            <button class="filter-btn">New Arrival</button>
          </li>
        </ul>

        <ul class="product-list">
          {arr.slice(0, 6).map((item) => {
            return (
              <div className="card" key={item.ID}>
                <Link to={`/product/${item.ID}`}>
                  <img
                    src={item.Images}
                    alt="Avatar"
                    style={{
                      width: '100%',
                      height: '100px',
                      objectFit: 'contain',
                    }}
                  />
                </Link>
                <div className="container">
                  <h5 style={{ height: '40px' }}>{item.Name}</h5>
                  <p>${item['Regular price']}</p>
                </div>

                <div className="btn-container">
                  <button
                    onClick={() => handleClick(item)}
                    className="btn-1 cart-btn"
                  >
                    Cart
                  </button>
                  <Link to={`/product/${item.ID}`}>
                    <button className="btn-1 detail-btn">Details</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </ul>

        <Link to="/product-list">
          <button class="btn btn-outline">View All Products</button>
        </Link>
      </div>
    </section>
  );
};

export default Products;
