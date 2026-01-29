import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "../features/auth/authSlice";
import { api } from "../services/api";
import { dotnetApi } from "../services/dotnetApi";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [dotnetApi.reducerPath]: dotnetApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware).concat(dotnetApi.middleware),
});

setupListeners(store.dispatch);
