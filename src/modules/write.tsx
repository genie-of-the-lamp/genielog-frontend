import {
  createAction,
  createReducer,
  createAsyncAction,
} from "typesafe-actions";
import * as postAPI from "../lib/api/post";
import { AxiosError } from "axios";
import createAsyncSaga from "../lib/createAsyncSaga";
import { takeLatest } from "redux-saga/effects";

const INITIALIZE = "write/INITIALIZE";

const CHANGE_MARKDOWN = "write/CHANGE_MARKDOWN";
const CHANGE_TITLE = "write/CHANGE_TITLE";

const WRITE_POST = "write/WRITE_POST";
const WRITE_POST_SUCCESS = "write/WRITE_POST_SUCCESS";
const WRITE_POST_FAILURE = "write/WRITE_POST_FAILURE";

const SET_POST = "write/SET_POST";

const MODIFY_POST = "write/MODIFY_POST";
const MODIFY_POST_SUCCESS = "write/MODIFY_POST_SUCCESS";
const MODIFY_POST_FAILURE = "write/MODIFY_POST_FAILURE";

export const initialize = createAction(INITIALIZE)();
export const changeMarkdown = createAction(CHANGE_MARKDOWN)<string>();
export const changeTitle = createAction(CHANGE_TITLE)<string>();

export const writePost = createAsyncAction(
  WRITE_POST,
  WRITE_POST_SUCCESS,
  WRITE_POST_FAILURE
)<postAPI.Write, postAPI.Post, AxiosError>();

export const setPost = createAction(SET_POST)<postAPI.Post>();

export const modifyPost = createAsyncAction(
  MODIFY_POST,
  MODIFY_POST_SUCCESS,
  MODIFY_POST_FAILURE
)<postAPI.Modify, postAPI.Post, AxiosError>();

type ChangeMarkdown = ReturnType<typeof changeMarkdown>;
type ChangeTitle = ReturnType<typeof changeTitle>;

type WriteState = {
  title: string;
  body: string;
  post: postAPI.Post | null;
  error: AxiosError | null;
  postId: string | number | null;
};

type SetPost = ReturnType<typeof setPost>;

const writePostSaga = createAsyncSaga(writePost, postAPI.writePost);
const modifyPostSaga = createAsyncSaga(modifyPost, postAPI.modifyPost);
export function* writeSaga() {
  yield takeLatest(WRITE_POST, writePostSaga);
  yield takeLatest(MODIFY_POST, modifyPostSaga);
}

const initialState: WriteState = {
  title: "",
  body: "",
  post: null,
  error: null,
  postId: null,
};

const write = createReducer<WriteState, any>(initialState, {
  [INITIALIZE]: (state) => initialState,
  [CHANGE_MARKDOWN]: (state, action: ChangeMarkdown) => {
    return { ...state, body: action.payload };
  },
  [CHANGE_TITLE]: (state, action: ChangeTitle) => {
    return { ...state, title: action.payload };
  },
  [WRITE_POST_SUCCESS]: (state, action) => {
    return { ...state, post: action.payload };
  },
  [WRITE_POST_FAILURE]: (state, action) => {
    return { ...state, error: action.payload };
  },
  [SET_POST]: (state, action: SetPost) => {
    const post = action.payload;
    return {
      ...state,
      title: post.title,
      body: post.body,
      postId: post._id,
      post: null,
    };
  },
  [MODIFY_POST_SUCCESS]: (state, action) => {
    return { ...state, post: action.payload };
  },
  [MODIFY_POST_FAILURE]: (state, action) => {
    return { ...state, error: action.payload };
  },
});

export default write;
