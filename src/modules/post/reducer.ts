import { PostState, PostAction } from "./types";
import { createReducer } from "typesafe-actions";
import { READ_POST, READ_POST_SUCCESS, READ_POST_FAILURE } from "./actions";

const initialState: PostState = {
  loading: false,
  error: null,
  post: null,
};

const post = createReducer<PostState, PostAction>(initialState, {
  [READ_POST]: () => ({ ...initialState, loading: true }),
  [READ_POST_SUCCESS]: (state, action) => ({
    loading: false,
    error: null,
    post: action.payload,
  }),
  [READ_POST_FAILURE]: (state, action) => ({
    loading: false,
    error: action.payload,
    post: null,
  }),
});

export default post;
