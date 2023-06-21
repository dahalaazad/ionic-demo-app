import { combineReducers, configureStore } from "@reduxjs/toolkit";
import inspirationReducer from "./inspirationSlice";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["inspirationList", "currentInspiration"],
};

const persistedReducer = persistReducer(persistConfig, inspirationReducer);

const rootReducer = combineReducers({
  inspiration: persistedReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
