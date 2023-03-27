import React, { useState } from 'react';

import instance from '../utils/api';
import { useDispatch, useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { adminAddProduct } from '../store';
import AdminHomePage from './AdminHomePage';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  marginBottom: '5rem',
};
const AdminAddProducts = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { id } = jwtDecode(token);

  const [productData, setProductData] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    image: '',
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(adminAddProduct(productData));
  };
  return (
    <AdminHomePage>
      <h2>Add product</h2>
      <form onSubmit={handleSubmit} style={style}>
        <div>
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={productData.title}
            onChange={(e) =>
              setProductData((prev) => ({ ...prev, title: e.target.value }))
            }
            required
          />
        </div>

        <div>
          <label htmlFor="">Description</label>
          <input
            required
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
            required
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
            required
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
            required
            type="text"
            value={productData.image}
            onChange={(e) =>
              setProductData((prev) => ({ ...prev, image: e.target.value }))
            }
          />
        </div>

        <button>Add Product</button>
      </form>
    </AdminHomePage>
  );
};

export default AdminAddProducts;
