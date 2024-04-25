import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/auth";
import globalLoader from "./slices/globalLoader";

const store = configureStore({
  reducer: {
    auth,
    globalLoader
  },
});

export default store;
