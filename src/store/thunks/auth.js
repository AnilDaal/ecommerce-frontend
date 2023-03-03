import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
});

const registerUser = createAsyncThunk(
  'user/register',
  async (values, { rejectWithValue }) => {
    try {
      const response = await instance.post('/register', {
        name: values.name,
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

const loginUser = createAsyncThunk(
  'user/login',
  async (values, { rejectWithValue }) => {
    try {
      const response = await instance.post('/login', {
        name: values.name,
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

export { registerUser, loginUser };
