import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  status: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (dispatch, getState) => {
    const data = await fetch("https://fakestoreapi.com/products");
    const res = await data.json();
    return res;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [fetchProducts.pending]: (state, { type, payload }) => {
      state.status = "loading";
    },
    [fetchProducts.fulfilled]: (state, { type, payload }) => {
      state.status = "success";
      state.products = payload;
    },
    [fetchProducts.rejected]: (state, { type, payload }) => {
      state.status = "failed";
    },
  },
});

export default productSlice.reducer;
