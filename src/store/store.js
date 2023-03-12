import { configureStore } from '@reduxjs/toolkit'
import { reducer } from "./сombiner";

export const store = configureStore({
  reducer,
})