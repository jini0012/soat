import { storage } from "./customStorage";
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

export const enrollPersistConfig: PersistConfig<EnrollState> = {
  key: "enroll", // enroll 상태의 키
  storage, // localStorage 사용
  throttle: 500,
  blacklist: ["isDirty", "step"],
};

const persistedEnrollReducer = persistReducer(
  enrollPersistConfig,
  enrollReducer
);

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
export const persistor = persistStore(store, { manualPersist: true }); //공식문서에는 존재하는 옵션인데 찾을 수 없다고 뜨네요..

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
