import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    globalLoader: false,
};

const slice = createSlice({
  name: "globalLoader",
  initialState,
  reducers: {
    setGlobalLoader: (state, { payload }) => {
      state.globalLoader = payload;
    },
  },
});

export const { setGlobalLoader } = slice.actions;

export default slice.reducer;
