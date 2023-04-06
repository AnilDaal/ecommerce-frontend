import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import instance from '../../utils/api';

const registerCustomer = createAsyncThunk(
  'customer/register',
  async (values, { rejectWithValue }) => {
    try {
      const response = await instance.post('/customer/signup', {
        ...values,
      });
      localStorage.setItem('token', response.data.token);
      console.log(response);
      return response.data.token;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

const loginCustomer = createAsyncThunk(
  'customer/login',
  async (values, { rejectWithValue }) => {
    try {
      const response = await instance.post('/customer/login', {
        email: values.email,
        password: values.password,
      });
      localStorage.setItem('token', response.data.token);
      return response.data.token;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

const loginAdmin = createAsyncThunk(
  'admin/login',
  async (values, { rejectWithValue }) => {
    try {
      const response = await instance.post('/admin/login', {
        email: values.email,
        password: values.password,
      });

      localStorage.setItem('token', response.data.token);
      // localStorage.setItem('role', jwtDecode(response.data.token).role);

      return response.data.token;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

const registerSeller = createAsyncThunk(
  'seller/register',
  async (values, { rejectWithValue }) => {
    try {
      const response = await instance.post('/seller/signup', {
        ...values,
      });

      return response.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

const sellerListing = createAsyncThunk(
  'listing/seller',
  async (values, { rejectWithValue, getState }) => {
    const state = getState();
    console.log(state);
    try {
      const response = await instance.get('/seller', {
        headers: {
          Authorization: `Bearer ${state.auth.token}`,
        },
      });

      return response.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

const loginSeller = createAsyncThunk(
  'seller/login',
  async (values, { rejectWithValue }) => {
    try {
      const response = await instance.post('/seller/login', {
        ...values,
      });

      localStorage.setItem('token', response.data.token);
      // localStorage.setItem('role', jwtDecode(response.data.token).role);
      return response.data.token;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export {
  registerCustomer,
  loginCustomer,
  loginAdmin,
  registerSeller,
  sellerListing,
  loginSeller,
};
