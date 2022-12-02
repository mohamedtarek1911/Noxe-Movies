import { configureStore } from "@reduxjs/toolkit";
import { searchReducer } from "./SearchSlice";

export let store = configureStore({
  reducer: {
    Search: searchReducer,
  },
});
