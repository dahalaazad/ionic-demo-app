import { combineReducers, configureStore } from "@reduxjs/toolkit";
import inspirationReducer from "./inspirationSlice";
inspirationReducer
const rootReducer = combineReducers({
  inspiration: inspirationReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
