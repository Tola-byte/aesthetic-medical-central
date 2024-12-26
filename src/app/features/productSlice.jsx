import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      // Add a new product to the store
      const addedProduct = action.payload;
      addedProduct.count = 1;
      state.products.push(addedProduct);
    },
    removeProduct: (state, action) => {
      // Remove a product by ID
      state.products = state.products.filter(
        (product) => product.name !== action.payload.name,
      );
    },
    increaseCount: (state, action) => {
      const product = action.payload;
      const cartItem = state.products.find((p) => p.name === product.name);
      if (cartItem) {
        cartItem.count += 1;
      }
    },
    decreaseCount: (state, action) => {
      const product = action.payload;
      const cartItem = state.products.find(
        (item) => item.name === product.name,
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
