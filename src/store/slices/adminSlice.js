import { createSlice } from '@reduxjs/toolkit';
import { adminAddProduct } from '../thunks/admin';
import { sellerListing } from '../thunks/auth';

const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    sellerList: [],
    isLoading: null,
    error: null,
    adminProductList: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(sellerListing.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(sellerListing.fulfilled, (state, action) => {
      state.isLoading = false;
      state.sellerList = action.payload;
    });
    builder.addCase(sellerListing.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(adminAddProduct.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(adminAddProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.adminProductList = action.payload;
    });
    builder.addCase(adminAddProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const adminReducer = adminSlice.reducer;
