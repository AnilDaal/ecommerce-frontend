import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser, loginAdmin } from '../thunks/auth';

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
    });
    builder.addCase(loginAdmin.rejected, (state, action) => {
      state.loginAdminLoading = false;
      state.loginAdminError = action.payload;
    });
  },
});

export const authReducer = authSlice.reducer;
export const { logoutUser } = authSlice.actions;
