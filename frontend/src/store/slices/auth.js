import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
  searchText: "",
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      // window.location.reload();
    },
    setUser: (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
      localStorage.setItem("token", payload.token);
      localStorage.setItem("user", JSON.stringify(payload.user));
    },
    setSearchText: (state, { payload }) => {
      state.searchText = payload;
    },
  },
});

export const { logout, setUser, setSearchText } = slice.actions;

export default slice.reducer;
