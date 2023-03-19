import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.furniturelelo.com/api/v1',
});

const registerUser = createAsyncThunk(
  'user/register',
  async (values, { rejectWithValue }) => {
    try {
      console.log(values);
      const response = await instance.post('/signup', {
        name: values.name,
        email: values.email,
        password: values.password,
        number: values.number,
      });
      console.log(response);
      // localStorage.setItem('token', response.data.token);
      return response.data.token;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

const loginUser = createAsyncThunk(
  'user/login',
  async (values, { rejectWithValue }) => {
    try {
      const response = await instance.post('/login', {
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
      return response.data.token;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);
export { registerUser, loginUser, loginAdmin };
