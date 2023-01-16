import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRepo } from "../../models/IRepo";

interface IReposState {
  repos: IRepo[];
  error: string;
}

const initialState: IReposState = {
  repos: [],
  error: "",
};

const reposSlice = createSlice({
  name: "repos",
  initialState,
  reducers: {
    reposFetchingSucces(state, action: PayloadAction<IRepo[]>) {
      state.error = "";
      state.repos = action.payload;
    },
    reposFetchingError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      console.log(state.error);
    },
  },
});

export default reposSlice.reducer;
export const { reposFetchingError, reposFetchingSucces } = reposSlice.actions;
