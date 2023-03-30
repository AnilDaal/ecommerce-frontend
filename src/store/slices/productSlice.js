import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts, fetchSingleProduct } from '../thunks/products';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    allProducts: [],
    filterProducts: [],
    singleProduct: {},
    isLoading: false,
    error: null,
  },
  reducers: {
    handleFilter(state, action) {
      const filteredData = state.allProducts.filter((p) =>
        p.category.toLowerCase().includes(action.payload)
      );
      state.filterProducts = filteredData;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allProducts = action.payload.data;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(fetchSingleProduct.pending, (state, action) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.singleProduct = action.payload.data;
    });
    builder.addCase(fetchSingleProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const productReducer = productSlice.reducer;
export const { handleFilter } = productSlice.actions;
