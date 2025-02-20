import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addProducts: (state, actions) => {
      state.products = actions.payload;
    },
  },
});

export const { addProducts } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
