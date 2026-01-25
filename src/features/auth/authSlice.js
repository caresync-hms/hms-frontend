import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  role: localStorage.getItem("role"),
  isAuthenticated: !!localStorage.getItem("token"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { token, role, id } = action.payload;
      state.token = token;
      state.role = role;
      state.id = id;
      state.isAuthenticated = true;
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("id", id);
    },
    logout: (state) => {
      state.token = null;
      state.role = null;
      state.id = null;
      state.isAuthenticated = false;
      localStorage.clear();
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
