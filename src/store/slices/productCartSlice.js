import { createSlice } from '@reduxjs/toolkit';
import { productAddToCart, productCartList } from '../thunks/cart';

const productCartSlice = createSlice({
  name: 'productCart',
  initialState: {
    productCartItems: [],
    isLoading: null,
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    // builder.addCase(productAddToCart.pending, (state, action) => {
    //   state.isLoading = true;
    //   state.error = null;
    // });
    // builder.addCase(productAddToCart.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   // state.productCartItems = action.payload;
    // });
    // builder.addCase(productAddToCart.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // });

    builder.addCase(productCartList.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(productCartList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.productCartItems = action.payload;
    });
    builder.addCase(productCartList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const productCartReducer = productCartSlice.reducer;
