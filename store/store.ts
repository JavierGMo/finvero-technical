import { configureStore } from "@reduxjs/toolkit";
import { paginatedProducts } from "./features/product/services/products";
import { setupListeners } from "@reduxjs/toolkit/query";
import cartCheckout from "./features/cartCheckout/cartCheckoutSlice";

export const store = () =>
  configureStore({
    reducer: {
      [paginatedProducts.reducerPath]: paginatedProducts.reducer,
      cartCheckout: cartCheckout,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(paginatedProducts.middleware),
  });

setupListeners(store().dispatch);
// Infer the type of makeStore
export type AppStore = ReturnType<typeof store>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
