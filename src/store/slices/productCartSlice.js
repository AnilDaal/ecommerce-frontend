import { createSlice } from '@reduxjs/toolkit';
import {
  productAddToCart,
  productCartList,
  productCartWishlist,
} from '../thunks/cart';

const productCartSlice = createSlice({
  name: 'productCart',
  initialState: {
    productCartItems: [],
    isLoading: null,
    error: null,
    cartProductQty: null,
    productWishlistItems: [],
  },
  reducers: {
    // handleCartProductQty(state,action){
    // }
  },
  extraReducers(builder) {
    // builder.addCase(productAddToCart.pending, (state, action) => {
    //   state.isLoading = true;
    //   state.error = null;
    // });
    // builder.addCase(productAddToCart.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   // state.productCartItems = action.payload;
    //   state.cartProductQty = action.payload;
    //   console.log(state.cartProductQty);
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
      console.log(state.productCartItems);
      state.productCartItems = action.payload;
      state.cartProductQty = action.payload.reduce(
        (acc, curr) => acc + curr.productQuantity,
        0
      );
    });
    builder.addCase(productCartList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(productCartWishlist.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(productCartWishlist.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log(state.productCartItems);
      state.productWishlistItems = action.payload;
    });
    builder.addCase(productCartWishlist.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const productCartReducer = productCartSlice.reducer;
