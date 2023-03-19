import React, { useState } from 'react';
import axios from 'axios';
import instance from '../utils/api';
import { useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  marginBottom: '5rem',
};
const AdminAddProducts = () => {
  const { token } = useSelector((state) => state.auth);
  const { id } = jwtDecode(token);

  const [productData, setProductData] = useState({
    title: '',
    description: '',
    short_description: '',
    category: '',
    stock: '',
    price: '',
    sale_price: '',
    image: '',
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await instance.post(
        `/admin/${id}/product`,
        {
          ...productData,
          sellerId: id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(productData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
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
          <label htmlFor="">Short Description</label>
          <input
            required
            type="text"
            value={productData.short_description}
            onChange={(e) =>
              setProductData((prev) => ({
                ...prev,
                short_description: e.target.value,
              }))
            }
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
        <div>
          <label htmlFor="">Sale price</label>
          <input
            required
            type="text"
            value={productData.sale_price}
            onChange={(e) =>
              setProductData((prev) => ({
                ...prev,
                sale_price: e.target.value,
              }))
            }
          />
        </div>
        <div>
          <label htmlFor="">Stock</label>
          <input
            required
            type="text"
            value={productData.stock}
            onChange={(e) =>
              setProductData((prev) => ({ ...prev, stock: e.target.value }))
            }
          />
        </div>

        <button>Add Product</button>
      </form>
    </div>
  );
};

export default AdminAddProducts;
