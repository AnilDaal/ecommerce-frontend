import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser } from '../thunks/auth';
import jwtDecode from 'jwt-decode';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token') || null,
    name: '',
    email: '',
    _id: '',
    registerLoading: false,
    registerError: null,
    loginLoading: false,
    loginError: null,
  },
  reducers: {
    logoutUser(state, action) {
      localStorage.removeItem('token');
      state.token = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(registerUser.pending, (state, action) => {
      state.registerLoading = true;
      state.registerError = null;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      const user = jwtDecode(action.payload);
      state.registerLoading = false;
      state.token = action.payload;
      state.name = user.name;
      state.email = user.email;
      state._id = user._id;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.registerLoading = false;
      state.registerError = action.payload;
    });

    builder.addCase(loginUser.pending, (state, action) => {
      state.loginLoading = true;
      state.loginError = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      const user = jwtDecode(action.payload);
      state.loginLoading = false;
      state.token = action.payload;
      state.name = user.name;
      state.email = user.email;
      state._id = user._id;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loginLoading = false;
      state.loginError = action.payload;
    });
  },
});

export const authReducer = authSlice.reducer;
export const { logoutUser } = authSlice.actions;
