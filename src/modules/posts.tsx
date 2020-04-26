import { createAsyncAction, createReducer } from "typesafe-actions";
import * as postAPI from "../lib/api/post";
import { AxiosError } from "axios";
import createAsyncSaga from "../lib/createAsyncSaga";
import { takeLatest } from "redux-saga/effects";

const LIST_POSTS = "posts/LIST_POSTS";
const LIST_POSTS_SUCCESS = "posts/LIST_POSTS_SUCCESS";
const LIST_POSTS_FAILURE = "posts/LIST_POSTS_FAILURE";

export const listPosts = createAsyncAction(
  LIST_POSTS,
  LIST_POSTS_SUCCESS,
  LIST_POSTS_FAILURE
)<postAPI.ListParams, postAPI.Post[], AxiosError>();

const listPostsSaga = createAsyncSaga(listPosts, postAPI.listPost);
export function* postsSaga() {
  yield takeLatest(LIST_POSTS, listPostsSaga);
}

export type PostsState = {
  posts: postAPI.Post[] | null;
  error: AxiosError | null;
};

const initialState: PostsState = {
  posts: null,
  error: null,
};

const posts = createReducer<PostsState, any>(initialState, {
  [LIST_POSTS_SUCCESS]: (
    state,
    action: ReturnType<typeof listPosts.success>
  ) => {
    return { ...state, posts: action.payload };
  },
  [LIST_POSTS_FAILURE]: (
    state,
    action: ReturnType<typeof listPosts.failure>
  ) => {
    return { ...state, error: action.payload };
  },
});

export default posts;
