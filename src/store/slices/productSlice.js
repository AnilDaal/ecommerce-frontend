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
    searchTerm: '',
  },
  reducers: {
    handleFilter(state, action) {
      const filteredData = state.allProducts.filter((p) =>
        p.category.toLowerCase().includes(action.payload)
      );
      state.filterProducts = filteredData;
    },
    handleSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;

      // const filteredProducts = state.allProducts.filter(
      //   (item, index) => state.allProducts.indexOf(item) === index
      // );
      // state.allProducts.push(...action.payload.data);

      // const filteredProducts = state.allProducts.filter(
      //   (value, index, self) => {
      //     return index === self.findIndex((t) => t._id === value._id);
      //   }
      // );

      // console.log();
      state.allProducts = action.payload;
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
export const { handleFilter, handleSearchTerm } = productSlice.actions;
