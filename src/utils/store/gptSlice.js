import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: true,
    gptMovies: null,
  },
  reducers: {
    toggleGPTSearch: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGPTMoviesResult: (state, action) => {
      state.gptMovies = action.payload;
    },
  },
});

export const { toggleGPTSearch, addGPTMoviesResult } = gptSlice.actions;

export default gptSlice.reducer;
