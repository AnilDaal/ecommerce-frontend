import React from 'react';
import './product-style.css';
const Product = () => {
  // return (
  //   <div className="product-container">
  //     <div className="product-image">
  //       <img src="https://via.placeholder.com/500x500" alt="product" />
  //     </div>
  //     <div className="product-details">
  //       <h1>Product Title</h1>
  //       <p className="product-description">
  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
  //         ultricies neque ac hendrerit. Donec eget suscipit magna. Nunc vel
  //         nulla lobortis, vestibulum arcu vel, rhoncus metus. Duis sit amet
  //         turpis nunc.
  //       </p>
  //       <div className="product-price">$50.00</div>
  //       <button className="add-to-cart-button">Add to Cart</button>
  //     </div>
  //   </div>
  // );

  const products = [
    {
      id: 1,
      title: 'Product 1',
      description: 'Lorem ipsum dolor sit amet',
      price: '$50.00',
      image: 'https://via.placeholder.com/500x500',
    },
    {
      id: 2,
      title: 'Product 2',
      description: 'Consectetur adipiscing elit',
      price: '$75.00',
      image: 'https://via.placeholder.com/500x500',
    },
    {
      id: 3,
      title: 'Product 3',
      description: 'Sed euismod ultricies neque ac hendrerit',
      price: '$100.00',
      image: 'https://via.placeholder.com/500x500',
    },
  ];

  return (
    <div className="product-list-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="product-image">
            <img src={product.image} alt="product" />
          </div>
          <div className="product-details">
            <h1>{product.title}</h1>
            <p className="product-description">{product.description}</p>
            <div className="product-price">{product.price}</div>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
