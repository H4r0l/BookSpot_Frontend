import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    token: null,
  },
  reducers: {
    setAuthenticated: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload;
    },
    setUnauthenticated: (state) => {
      state.isAuthenticated = false;
      state.token = null;
    },
  },
});

export const { setAuthenticated, setUnauthenticated } = authSlice.actions;

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
