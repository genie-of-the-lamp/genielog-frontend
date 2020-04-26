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

export const initialize = createAction(INITIALIZE)();
export const changeMarkdown = createAction(CHANGE_MARKDOWN)<string>();
export const changeTitle = createAction(CHANGE_TITLE)<string>();

export const writePost = createAsyncAction(
  WRITE_POST,
  WRITE_POST_SUCCESS,
  WRITE_POST_FAILURE
)<postAPI.Write, postAPI.Post, AxiosError>();

type ChangeMarkdown = ReturnType<typeof changeMarkdown>;
type ChangeTitle = ReturnType<typeof changeTitle>;

type WriteState = {
  title: string;
  body: string;
  post: postAPI.Post | null;
  error: AxiosError | null;
};

const writePostSaga = createAsyncSaga(writePost, postAPI.writePost);
export function* writeSaga() {
  yield takeLatest(WRITE_POST, writePostSaga);
}

const initialState: WriteState = {
  title: "",
  body: "",
  post: null,
  error: null,
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
});

export default write;
