import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createReduxEnhancer } from "@sentry/react";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";
import authSlice from "./auth/slice";
import chatMediaSlice from "./chatMedia/slice";
import priceMngSlice from "./priceMng/slice";

const persistConfig = {
  key: "root",
  storage,
  //   whitelist: [AUTH_NAME, CHAT_NAME, COMMON_NAME],
};

const sentryReduxEnhancer = createReduxEnhancer();

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    auth: authSlice.reducer,
    chatMedia: chatMediaSlice.reducer,
    priceMng: priceMngSlice.reducer,
  })
);

const store = configureStore({
  reducer: {
    persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(thunk),
});

const persistor = persistStore(store);

export { store, persistor };
