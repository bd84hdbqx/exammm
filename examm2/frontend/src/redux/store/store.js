import { configureStore } from '@reduxjs/toolkit'
import foodReducer from "../slices/foodsSlice"
import wishlistReducer from "../slices/wishlistSlice"
export const store = configureStore({
  reducer: {
foods:foodReducer,
wishlists:wishlistReducer

  },
})