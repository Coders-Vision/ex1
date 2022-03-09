import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {  signIn  } from "../../apiService";

export const signinUser = createAsyncThunk(
  "user/signInUser",
  async (signinData) => {
    const response = await signIn (signinData);
    return response.data;
  }
);


const initialUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: initialUser,
    error: null,
    status: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
  extraReducers: {
    [signinUser.pending]: (state, action) => {
      state.error = null;
      state.status = "Signing In";
    },
    [signinUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
      localStorage.setItem('token',state.user.jwt)
      state.status = "Signed In";
    },
    [signinUser.rejected]: (state, action) => {
      const { message } = action.error;
      state.error = message;
      state.status = "Sign in Failed";
    },
  },
});

export const { logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectStatus = (state) => state.user.status;
export const selectError = (state) => state.user.error;
export default userSlice.reducer;
