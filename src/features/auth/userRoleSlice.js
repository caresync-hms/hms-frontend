import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   role: null,
  role: "admin",
  // allowed values: "admin" | "patient" | "doctor" | "nurse" | "accountant"
};

const userRoleSlice = createSlice({
  name: "userRole",
  initialState,
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload; // payload = "admin" | "patient" | "doctor" | "nurse" | "accountant"
    },
    clearRole: (state) => {
      state.role = null;
    },
  },
});

export const { setRole, clearRole } = userRoleSlice.actions;
export default userRoleSlice.reducer;
