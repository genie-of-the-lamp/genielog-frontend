import { ActionType } from "typesafe-actions";
import * as actions from './actions';
import { Post } from "../../lib/api/post";

export type PostAction = ActionType<typeof actions>;

export type PostState = {
    loading: boolean;
    error: Error | null;
    data: Post | null;
};