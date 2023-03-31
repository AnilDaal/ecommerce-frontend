import { createSlice } from '@reduxjs/toolkit';

import {
  loginAdmin,
  registerSeller,
  loginSeller,
  registerCustomer,
  loginCustomer,
} from '../thunks/auth';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token') || null,

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
    },
  },
  extraReducers(builder) {
    builder.addCase(registerCustomer.pending, (state, action) => {
      state.registerLoading = true;
      state.registerError = null;
    });
    builder.addCase(registerCustomer.fulfilled, (state, action) => {
      state.registerLoading = false;
      state.token = action.payload;
    });
    builder.addCase(registerCustomer.rejected, (state, action) => {
      state.registerLoading = false;
      state.registerError = action.payload;
    });

    builder.addCase(loginCustomer.pending, (state, action) => {
      state.loginLoading = true;
      state.loginError = null;
    });
    builder.addCase(loginCustomer.fulfilled, (state, action) => {
      state.loginLoading = false;
      state.token = action.payload;
    });
    builder.addCase(loginCustomer.rejected, (state, action) => {
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
