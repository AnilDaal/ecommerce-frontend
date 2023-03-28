import { createSlice } from '@reduxjs/toolkit';

import {
  registerUser,
  loginUser,
  loginAdmin,
  registerSeller,
  loginSeller,
} from '../thunks/auth';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token') || null,
    // role: localStorage.getItem('role') || null,

    registerLoading: false,
    registerError: null,

    loginLoading: false,
    loginError: null,

    loginAdminLoading: false,
    loginAdminError: null,

    registerSellerLoading: false,
    registerSellerError: null,

    loginSellerLoading: false,
    loginSellerError: null,
  },
  reducers: {
    logoutUser(state, action) {
      localStorage.removeItem('token');
      state.token = null;
      localStorage.removeItem('role');
    },
  },
  extraReducers(builder) {
    builder.addCase(registerUser.pending, (state, action) => {
      state.registerLoading = true;
      state.registerError = null;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.registerLoading = false;
      state.token = action.payload;
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
      state.loginLoading = false;
      state.token = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loginLoading = false;
      state.loginError = action.payload;
    });

    builder.addCase(loginAdmin.pending, (state, action) => {
      state.loginAdminLoading = true;
      state.loginAdminError = null;
    });
    builder.addCase(loginAdmin.fulfilled, (state, action) => {
      state.loginAdminLoading = false;
      state.token = action.payload;
      // state.role = localStorage.getItem('role');
    });
    builder.addCase(loginAdmin.rejected, (state, action) => {
      state.loginAdminLoading = false;
      state.loginAdminError = action.payload;
    });

    builder.addCase(registerSeller.pending, (state, action) => {
      state.loginAdminLoading = true;
      state.loginAdminError = null;
    });
    builder.addCase(registerSeller.fulfilled, (state, action) => {
      state.loginAdminLoading = false;
    });
    builder.addCase(registerSeller.rejected, (state, action) => {
      state.loginAdminLoading = false;
      state.loginAdminError = action.payload;
    });

    builder.addCase(loginSeller.pending, (state, action) => {
      state.loginSellerLoading = true;
      state.loginSellerError = null;
    });
    builder.addCase(loginSeller.fulfilled, (state, action) => {
      state.loginSellerLoading = false;
      state.token = action.payload;
      // state.role = localStorage.getItem('role');
    });
    builder.addCase(loginSeller.rejected, (state, action) => {
      state.loginSellerLoading = false;
      state.loginSellerError = action.payload;
    });
  },
});

export const authReducer = authSlice.reducer;
export const { logoutUser } = authSlice.actions;
