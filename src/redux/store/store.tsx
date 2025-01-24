import { configureStore } from "@reduxjs/toolkit";
import likedProductsReducer from "../likedProductsSlice";

const store = configureStore({
  reducer: {
    likedProducts: likedProductsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
