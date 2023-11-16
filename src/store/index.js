import { configureStore } from "@reduxjs/toolkit";

import user from "../slices/userSlice";

const store = configureStore({
  reducer: user,
  middleware: [],
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;