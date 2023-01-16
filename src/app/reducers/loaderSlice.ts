import { createSlice } from "@reduxjs/toolkit";

interface ILoaderState {
  loader: boolean;
}

const initialState: ILoaderState = {
  loader: true,
};

const loaderSlice = createSlice({
  name: "loaderSlice",
  initialState,
  reducers: {
    removeLoader(state) {
      state.loader = !state.loader;
    },
  },
});

export default loaderSlice.reducer;
export const { removeLoader } = loaderSlice.actions;
