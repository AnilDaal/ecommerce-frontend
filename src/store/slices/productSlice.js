import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from '../thunks/products';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.status = 'pending';
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = 'success';
      state.items = action.payload.products;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    });
  },
});

export const productReducer = productSlice.reducer;
