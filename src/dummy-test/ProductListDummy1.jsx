import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import productsData from './productData';
import './productList.css';

const ProductListDummy1 = () => {
  const [products, setProducts] = React.useState(productsData);

  const handleSortByPrice = (e) => {
    if (e.target.value === 'lowest') {
      setProducts([...products].sort((a, b) => a.price - b.price));
    } else {
      setProducts([...products].sort((a, b) => b.price - a.price));
    }
  };

  const handleFilterByCategory = (e) => {
    const category = e.target.value;
    if (category === 'all') {
      setProducts(productsData);
    } else {
      setProducts(
        productsData.filter((product) => product.category === category)
      );
    }
  };

  return (
    <div className="product-list-container">
      <div className="product-list-header">
        <h1>Our Products</h1>
        <div className="product-list-filters">
          <div className="product-list-filter">
            <label htmlFor="sort-by-price">Sort by price:</label>
            <select id="sort-by-price" onChange={handleSortByPrice}>
              <option value="highest">Highest to Lowest</option>
              <option value="lowest">Lowest to Highest</option>
            </select>
          </div>
          <div className="product-list-filter">
            <label htmlFor="filter-by-category">Filter by category:</label>
            <select id="filter-by-category" onChange={handleFilterByCategory}>
              <option value="all">All</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="home">Home</option>
              <option value="sports">Sports</option>
            </select>
          </div>
        </div>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-details">
              <h2>{product.title}</h2>
              <p className="product-description">{product.description}</p>
              <div className="product-price">${product.price.toFixed(2)}</div>
              <Link
                to={`/product/${product.id}`}
                className="product-details-link"
              >
                Details
              </Link>
              <button className="add-to-cart">
                <FiShoppingCart />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListDummy1;
