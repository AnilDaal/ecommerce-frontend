import React, { useState } from 'react';

const SellerAddProduct = () => {
  const [productData, setProductData] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    image: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productData);
  };
  return (
    <div>
      <h2>Add product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={productData.title}
            onChange={(e) =>
              setProductData((prev) => ({ ...prev, title: e.target.value }))
            }
          />
        </div>
        <div>
          <label htmlFor="">Description</label>
          <input
            type="text"
            value={productData.description}
            onChange={(e) =>
              setProductData((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
          />
        </div>
        <div>
          <label htmlFor="">Category</label>
          <input
            type="text"
            value={productData.category}
            onChange={(e) =>
              setProductData((prev) => ({ ...prev, category: e.target.value }))
            }
          />
        </div>
        <div>
          <label htmlFor=""> price</label>
          <input
            type="text"
            value={productData.price}
            onChange={(e) =>
              setProductData((prev) => ({ ...prev, price: e.target.value }))
            }
          />
        </div>
        <div>
          <label htmlFor="">Image</label>
          <input
            type="text"
            value={productData.image}
            onChange={(e) =>
              setProductData((prev) => ({ ...prev, image: e.target.value }))
            }
          />
        </div>
      </form>
    </div>
  );
};

export default SellerAddProduct;
