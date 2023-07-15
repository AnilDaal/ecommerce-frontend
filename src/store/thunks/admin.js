import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://e-book-backend-ok7v.onrender.com/api/v1",
});

const approveSeller = createAsyncThunk(
  "seller/approve",
  async (values, { rejectWithValue, getState }) => {
    const state = getState();
    try {
      const response = await instance.patch(
        `/admin/seller/${values.id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${state.auth.token}`,
          },
        }
      );
      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

const adminAddProduct = createAsyncThunk(
  "addProduct/admin",
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

const adminGetProduct = createAsyncThunk(
  "getproduct/admin",
  async ({ page = 1, limit = 20 }, { rejectWithValue, getState }) => {
    const state = getState();

    try {
      const response = await instance.get(
        `/seller/products?page=${page}&limit=${limit}`,

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

const deleteSeller = createAsyncThunk(
  "seller/delete",
  async (values, { rejectWithValue, getState }) => {
    const state = getState();
    try {
      const response = await instance.patch(
        `/admin/seller/${values.id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${state.auth.token}`,
          },
        }
      );
      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

export { approveSeller, adminAddProduct, adminGetProduct };
