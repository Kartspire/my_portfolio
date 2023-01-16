import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IClipboardSliceState {
  isShown: boolean;
}
const initialState: IClipboardSliceState = {
  isShown: false,
};

const clipboardSlice = createSlice({
  name: "clipboard",
  initialState,
  reducers: {
    changeClipboardVisible(state, action: PayloadAction<boolean>) {
      state.isShown = action.payload;
      //   state.isShown = !state.isShown;
    },
  },
});

export default clipboardSlice.reducer;
export const { changeClipboardVisible } = clipboardSlice.actions;
