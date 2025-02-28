import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  PersistConfig,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import enrollReducer, { EnrollState } from "./slices/enrollSlice";
import storage from "redux-persist/lib/storage";

const enrollPersistConfig: PersistConfig<EnrollState> = {
  key: "enroll", // enroll 상태의 키
  storage, // localStorage 사용
  throttle: 10,
  blacklist: ["isDirty"],
};

const persistedEnrollReducer = persistReducer(
  enrollPersistConfig,
  enrollReducer
);

//persistor.pause persistor.persist

const rootReducer = combineReducers({
  enroll: persistedEnrollReducer,
  //reducer 추가 부분
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
