import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import clipboardSlice from "./reducers/clipboardSlice";
import loaderSlice from "./reducers/loaderSlice";
import reposSlice from "./reducers/reposSlice";

export const store = configureStore({
  reducer: {
    clipboard: clipboardSlice,
    loader: loaderSlice,
    repos: reposSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
