import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    language: "en",
  },
  reducers: {
    changeLunguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { changeLunguage } = configSlice.actions;

export default configSlice.reducer;
