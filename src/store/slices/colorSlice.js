import { createSlice } from '@reduxjs/toolkit';

const colorSlice = createSlice({
  name: 'color',
  initialState: {
    color: 'black',
  },
  reducers: {
    changeColor(state, action) {
      state.color = action.payload;
    },
  },
});

export const colorReducer = colorSlice.reducer;
export const { changeColor } = colorSlice.actions;
