import { createAsyncThunk } from '@reduxjs/toolkit';

import instance from '../../utils/api';

const productAddToCart = createAsyncThunk(
  'product/addToCart',
  async (productId, { rejectWithValue, getState }) => {
    const state = getState();
    try {
      const { data } = await instance.patch(
        `/customer/customerCart/${productId}`,
        {
          productId,
        },
        {
          headers: {
            Authorization: `Bearer ${state.auth.token}`,
          },
        }
      );

      console.log(data?.data.cartProduct?.length);
      return data?.data.cartProduct.length;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

const productDeleteToCart = createAsyncThunk(
  'product/deleteToCart',
  async (productId, { rejectWithValue, getState }) => {
    const state = getState();
    try {
      const { data } = await instance.patch(
        `/customer/deleteCartProduct/${productId}`,
        {
          productId,
        },
        {
          headers: {
            Authorization: `Bearer ${state.auth.token}`,
          },
        }
      );
      // localStorage.setItem('token', response.data.token);
      console.log(data);
      return data.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);
const productCartList = createAsyncThunk(
  'product/cartList',
  async (productId, { rejectWithValue, getState }) => {
    const state = getState();
    try {
      const { data } = await instance.get(
        `/customer/customerCart`,

        {
          headers: {
            Authorization: `Bearer ${state.auth.token}`,
          },
        }
      );
      // localStorage.setItem('token', response.data.token);

      console.log(data?.data.cartProduct);
      return data?.data.cartProduct;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

const productCartIncrement = createAsyncThunk(
  'cartIncrement/product',
  async (values, { getState, rejectWithValue }) => {
    const state = getState();
    try {
      const { data } = await instance.post(
        `/customer/productQuantity`,
        {
          productId: values.productId,
          totalProduct: values.incrementedProductQuantity,
        },

        {
          headers: {
            Authorization: `Bearer ${state.auth.token}`,
          },
        }
      );
      // localStorage.setItem('token', response.data.token);

      console.log(data);
      return data?.data?.productId;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export {
  productAddToCart,
  productDeleteToCart,
  productCartList,
  productCartIncrement,
};
