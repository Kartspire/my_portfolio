import axios from "axios";
import { removeLoader } from "../app/reducers/loaderSlice";
import {
  reposFetchingError,
  reposFetchingSucces,
} from "../app/reducers/reposSlice";
import { AppDispatch } from "../app/store";
import { IRepo } from "../models/IRepo";

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    const responce = await axios.get<IRepo[]>(
      "https://api.github.com/users/Kartspire/repos"
    );
    dispatch(reposFetchingSucces(responce.data));
    dispatch(removeLoader());
  } catch (e) {
    if (e instanceof Error) {
      dispatch(reposFetchingError(e.message));
    }
  }
};
