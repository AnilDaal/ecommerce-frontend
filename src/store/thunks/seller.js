import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const instance = axios.create({
  baseURL: "https://e-book-backend-ok7v.onrender.com/api/v1/",
});

const addProduct = createAsyncThunk(
  "product/add",
  async (values, { rejectWithValue, getState }) => {
    const state = getState();

    try {
      const response = await instance.post(
        `/seller/products`,
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
  "product/get",
  async (values, { rejectWithValue, getState }) => {
    const state = getState();

    try {
      const response = await instance.get(
        `/seller/products`,

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
  "product/add",
  async (values, { rejectWithValue, getState }) => {
    const state = getState();

    try {
      const response = await instance.delete(
        `/seller/product/${values}`,

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
  "product/update",
  async (values, { rejectWithValue, getState }) => {
    const state = getState();

    try {
      const response = await instance.patch(
        `/seller/product/${values.id}`,
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
