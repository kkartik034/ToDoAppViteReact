import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist/es/constants";

const persistConfig = {
  key: "App",
  storage,
  whitelist: ["todo"], // ✅ Corrected whitelist to match reducer key
};

const rootReducer = combineReducers({
  todo: todoReducer, // ✅ Changed `reducer` to `todo` (must match slice name)
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // ✅ Prevents non-serializable warnings
      },
    }),
});

export const persistor = persistStore(store);
