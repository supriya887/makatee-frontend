import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import appReducer from "./slices/app-slice";
import userReducer from "./slices/user-slice";
import cartReducer from "./slices/cart-slice";
import wishlistReducer from "./slices/wishlist-slice";
import categoryReducer from "./slices/category-slice";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import storage from "./sync_storage";

// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const combinedReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
  category: categoryReducer,
});

const persistConfig = {
  key: "makatee",
  storage: storage,
  whitelist: ["app", "user", "cart"],
};
const persistedReducer = persistReducer(persistConfig, combinedReducer); // Create a new reducer with our existing reducer

const reduxPersistActions = [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER];

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [...reduxPersistActions]
      },
    }),
  devTools: true,
});

export const persistor = persistStore(store);
