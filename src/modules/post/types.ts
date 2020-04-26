import { ActionType } from "typesafe-actions";
import * as actions from "./actions";
import { Post } from "../../lib/api/post";
import { AxiosError } from "axios";

export type PostAction = ActionType<typeof actions>;

export type PostState = {
  loading: boolean;
  error: AxiosError | null;
  post: Post | null;
};
