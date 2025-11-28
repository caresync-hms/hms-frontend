import { configureStore } from "@reduxjs/toolkit";
import userRoleReducer from "../features/auth/userRoleSlice";

export const store = configureStore({
  reducer: {
    userRole: userRoleReducer,
  },
});
