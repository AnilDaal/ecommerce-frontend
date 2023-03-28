import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../utils/api';

const fetchProducts = createAsyncThunk(
  'products/fetch',
  async (id = null, { rejectWithValue }) => {
    try {
      const response = await instance.get('/public');
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const fetchSingleProduct = createAsyncThunk(
  'singleproducts/fetch',
  async (id = null, { rejectWithValue }) => {
    try {
      const response = await instance.get(`/public/${id}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export { fetchProducts, fetchSingleProduct };
