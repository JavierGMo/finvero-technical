import { Product } from "@/types/product";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  open: boolean;
  products: Product[];
}

const initialState: InitialState = {
  open: false,
  products: [],
};

export const cartCheckoutSlice = createSlice({
  name: "cartCheckout",
  initialState,
  reducers: {
    openSheet: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
    saveItemsInCart: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    removeItemsInCart: (state) => {
      state.products = [];
    },
  },
});

export const { openSheet, removeItemsInCart, saveItemsInCart } =
  cartCheckoutSlice.actions;
export default cartCheckoutSlice.reducer;
