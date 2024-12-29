import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push({ ...action.payload, count: 1 });
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.name !== action.payload.name,
      );
    },
    increaseCount: (state, action) => {
      const cartItem = state.products.find(
        (p) => p.name === action.payload.name,
      );
      if (cartItem) {
        cartItem.count += 1;
      }
    },
    decreaseCount: (state, action) => {
      const cartItem = state.products.find(
        (item) => item.name === action.payload.name,
      );
      if (cartItem && cartItem.count > 1) {
        cartItem.count -= 1;
      } else {
        cartItem.count = 0;
      }
    },
  },
});

export const { addProduct, removeProduct, increaseCount, decreaseCount } =
  productSlice.actions;

export default productSlice.reducer;
