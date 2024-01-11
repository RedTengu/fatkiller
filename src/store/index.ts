// Redux imports
import { configureStore } from "@reduxjs/toolkit";
// Slice imports
import user from "../slices/userSlice";

const store = configureStore({
  reducer: user,
  middleware: [],
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;