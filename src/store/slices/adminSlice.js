import { createSlice } from '@reduxjs/toolkit';
import { sellerListing } from '../thunks/auth';

const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    sellerList: [],
    isLoading: null,
    error: null,
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
  },
});

export const adminReducer = adminSlice.reducer;
