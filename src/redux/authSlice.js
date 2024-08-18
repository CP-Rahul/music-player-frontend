import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("authToken") || null,
    isLoggedIn: !!localStorage.getItem("authToken") || false,
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("authToken", action.payload);
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.token = null;
      localStorage.removeItem("authToken");
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
