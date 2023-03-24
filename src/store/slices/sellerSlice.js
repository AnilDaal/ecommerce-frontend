import { createSlice } from '@reduxjs/toolkit';
import { addProduct, getProduct } from '../thunks/seller';

const sellerSlice = createSlice({
  name: 'seller',
  initialState: {
    products: [],
    sellerList: [],
    isLoading: null,
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(addProduct.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(addProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(getProduct.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.sellerList = action.payload;
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const sellerReducer = sellerSlice.reducer;
