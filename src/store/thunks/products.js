import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../utils/api';

const fetchProducts = createAsyncThunk(
  'products/fetch',
  async (
    { searchTerm = '', filterCat = '', number = 1, limit = 10 },
    { rejectWithValue }
  ) => {
    try {
      const response = await instance.get(
        `/public?search=${
          searchTerm ? searchTerm : filterCat
        }&page=${number}&limit=${limit}`
      );
      console.log(response.data);
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
