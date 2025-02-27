import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateProduct } from '../store';
import instance from '../utils/api';
import Loader from '../utils/Loader';

const AdminUpdateProduct = () => {
  const { error, isLoading } = useSelector((state) => state.admin);
  const { productId } = useParams();

  const [productData, setProductData] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    image: '',
    totalQuantity: 1,
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

  console.log(productData);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(productData))
      .unwrap()
      .then(() => navigate('/admin/product-list'))
      .catch((err) => console.log(err));
  };

  console.log('productData', productData);
  console.log('productData.title', productData.title);

  return (
    <>
      <div class="login-root">
        <div
          class="box-root flex-flex flex-direction--column"
          style={{ minHeight: '100vh', flexGrow: '1' }}
        >
          <div
            class="box-root padding-top--24 flex-flex flex-direction--column"
            style={{ flexGrow: '1', zIndex: '9' }}
          >
            {/* <div class="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
            <h1>Furniture Lelo</h1>
          </div> */}
            <div class="formbg-outer">
              <div class="formbg">
                <div class="formbg-inner padding-horizontal--48 ">
                  <span class="padding-bottom--15">Update Product</span>
                  <form id="stripe-login" onSubmit={handleSubmit}>
                    <div class="field padding-bottom--24">
                      <label for="title" className="text-left ">
                        Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        value={productData.title}
                        onChange={(e) =>
                          setProductData((prev) => ({
                            ...prev,
                            title: e.target.value,
                          }))
                        }
                      />
                    </div>

                    <div class="field padding-bottom--24">
                      <div class="grid--50-50">
                        <label for="desc" className="text-left ">
                          Description
                        </label>
                      </div>
                      <input
                        type="text"
                        id="desc"
                        value={productData.description}
                        onChange={(e) =>
                          setProductData((prev) => ({
                            ...prev,
                            description: e.target.value,
                          }))
                        }
                      />
                    </div>
                    <div class="field padding-bottom--24">
                      <div class="grid--50-50">
                        <label for="category" className="text-left ">
                          Category
                        </label>
                      </div>
                      <input
                        type="text"
                        id="category"
                        value={productData.category}
                        onChange={(e) =>
                          setProductData((prev) => ({
                            ...prev,
                            category: e.target.value,
                          }))
                        }
                      />
                    </div>

                    <div class="field padding-bottom--24">
                      <div class="grid--50-50">
                        <label for="price" className="text-left ">
                          Price
                        </label>
                      </div>
                      <input
                        type="text"
                        id="price"
                        value={productData.price}
                        onChange={(e) =>
                          setProductData((prev) => ({
                            ...prev,
                            price: e.target.value,
                          }))
                        }
                      />
                    </div>

                    <div class="field padding-bottom--24">
                      <div class="grid--50-50">
                        <label for="price" className="text-left ">
                          Stock Quantity
                        </label>
                      </div>
                      <input
                        type="number"
                        id="price"
                        value={productData.totalQuantity}
                        onChange={(e) =>
                          setProductData((prev) => ({
                            ...prev,
                            totalQuantity: e.target.value,
                          }))
                        }
                      />
                    </div>

                    <div class="field padding-bottom--24">
                      <div class="grid--50-50">
                        <label for="image" className="text-left ">
                          Image
                        </label>
                      </div>
                      <input
                        type="text"
                        id="image"
                        value={productData.image}
                        onChange={(e) =>
                          setProductData((prev) => ({
                            ...prev,
                            image: e.target.value,
                          }))
                        }
                      />
                    </div>
                    {error && <p className="text-red-400">{error.message}</p>}
                    <div class="field padding-bottom--24">
                      <button disabled={Boolean(isLoading)}>
                        {isLoading ? <Loader /> : 'Update Product'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminUpdateProduct;
