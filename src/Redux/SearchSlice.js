import { createSlice } from "@reduxjs/toolkit";
let initialState = { keyword: "" };
export let SearchSlice = createSlice({
  name: "Search",
  initialState,
  reducers: {
    setKeyword: (state, { payload }) => {
      state.keyword = payload;
    },
  },
});

export let searchReducer = SearchSlice.reducer;
export let { setKeyword } = SearchSlice.actions;
