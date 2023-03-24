import { createAsyncThunk } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.furniturelelo.com/api/v1',
});

const addProduct = createAsyncThunk(
  'product/add',
  async (values, { rejectWithValue, getState }) => {
    const state = getState();
    const { id } = jwtDecode(state.auth.token);
    try {
      const response = await instance.post(
        `/seller/${id}/product`,
        { ...values },
        {
          headers: {
            Authorization: `Bearer ${state.auth.token}`,
          },
        }
      );

      return response.data.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

const getProduct = createAsyncThunk(
  'product/get',
  async (values, { rejectWithValue, getState }) => {
    const state = getState();
    const { id } = jwtDecode(state.auth.token);
    try {
      const response = await instance.get(
        `/seller/${id}/product`,

        {
          headers: {
            Authorization: `Bearer ${state.auth.token}`,
          },
        }
      );
      return response.data.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

const deleteProduct = createAsyncThunk(
  'product/add',
  async (values, { rejectWithValue, getState }) => {
    const state = getState();
    const { id } = jwtDecode(state.auth.token);
    try {
      const response = await instance.delete(
        `/seller/${id}/product/${values}`,

        {
          headers: {
            Authorization: `Bearer ${state.auth.token}`,
          },
        }
      );

      console.log(response);
      return response.data.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

const updateProduct = createAsyncThunk(
  'product/update',
  async (values, { rejectWithValue, getState }) => {
    const state = getState();
    const { id } = jwtDecode(state.auth.token);
    try {
      const response = await instance.put(
        `/seller/${id}/product/${values.id}`,
        { ...values },
        {
          headers: {
            Authorization: `Bearer ${state.auth.token}`,
          },
        }
      );

      console.log(response);
      return response.data.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

export { addProduct, getProduct, deleteProduct, updateProduct };
