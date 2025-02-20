import { configureStore } from "@reduxjs/toolkit";
import enrollReducer from "./slices/enrollSlice";

export const store = configureStore({
  reducer: {
    enroll: enrollReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
