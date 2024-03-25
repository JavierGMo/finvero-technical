import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  open: boolean;
}

const initialState: InitialState = {
  open: false,
};

export const cartCheckoutSlice = createSlice({
  name: "cartCheckout",
  initialState,
  reducers: {
    openSheet: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
  },
});

export const { openSheet } = cartCheckoutSlice.actions;
export default cartCheckoutSlice.reducer;
