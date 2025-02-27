import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import enrollReducer, { EnrollState } from "./slices/enrollSlice";
import storage from "redux-persist/lib/storage";

const enrollPersistConfig: PersistConfig<EnrollState> = {
  key: "enroll", // enroll 상태의 키
  storage, // localStorage 사용
  throttle: 5000,
};

const persistedEnrollReducer = persistReducer(
  enrollPersistConfig,
  enrollReducer
);

//persistor.pause persistor.persist

export const store = configureStore({
  reducer: {
    enroll: persistedEnrollReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
