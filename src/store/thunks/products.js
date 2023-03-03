import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000',
});

const fetchProducts = createAsyncThunk(
  'products/fetch',
  async (id = null, { rejectWithValue }) => {
    try {
      const response = await instance.get('/products');
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export { fetchProducts };
