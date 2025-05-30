import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import appReducer from "./slices/app-slice";
import userReducer from "./slices/user-slice";
import cartReducer from "./slices/cart-slice";
import wishlistReducer from "./slices/wishlist-slice";

const combinedReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
});

const persistConfig = {
  key: "makatee",
  // storage,
  whitelist: ["navigation"],
};

export const store = configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: true,
    }),
  devTools: true,
});
