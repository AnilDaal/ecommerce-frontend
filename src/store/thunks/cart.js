import { createAsyncThunk } from '@reduxjs/toolkit';

import instance from '../../utils/api';

const productAddToCart = createAsyncThunk(
  'product/addToCart',
  async (productId, { rejectWithValue, getState }) => {
    const state = getState();
    try {
      const { data } = await instance.put(
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
      // localStorage.setItem('token', response.data.token);
      console.log(data);
      return data.data;
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
      const { data } = await instance.put(
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
      console.log(data.data.productId);
      return data.data.productId;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export { productAddToCart, productDeleteToCart, productCartList };
