import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { addProduct, updateProduct } from '../store';
import instance from '../utils/api';

const SellerUpdateProduct = () => {
  const { productId } = useParams();

  const [productData, setProductData] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    image: '',
    id: productId,
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await instance.get(`public/${productId}`);
      console.log(data.data);
      setProductData({ ...data.data, id: productId });
    };
    fetchData();
  }, [productId]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(productData))
      .unwrap()
      .then(() => navigate('/seller'));
  };

  console.log('productData', productData);
  console.log('productData.title', productData.title);

  return (
    <div className="container">
      <Link to="/seller">Seller Listing</Link>
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

        <button>Update Product</button>
      </form>
    </div>
  );
};

export default SellerUpdateProduct;
