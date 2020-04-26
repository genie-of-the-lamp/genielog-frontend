import {
  createAction,
  createAsyncAction,
  createReducer,
} from "typesafe-actions";
import * as authAPI from "../lib/api/auth";
import createAsyncSaga from "../lib/createAsyncSaga";
import { takeLatest, call } from "redux-saga/effects";
import { AxiosError } from "axios";

const TEMP_SET_USER = "user/TEMP_SET_USER";

const CHECK = "user/CHECK";
const CHECK_SUCCESS = "user/CHECK_SUCCESS";
const CHECK_FAILURE = "user/CHECK_FAILURE";

const SIGNOUT = "user/SIGNOUT";

export const tempSetUser = createAction(TEMP_SET_USER)<authAPI.User>();

export const check = createAsyncAction(CHECK, CHECK_SUCCESS, CHECK_FAILURE)<
  undefined,
  authAPI.User,
  AxiosError
>();

export const signout = createAction(SIGNOUT)();

const checkSaga = createAsyncSaga(check, authAPI.check);

function checkFailureSaga() {
  try {
    localStorage.removeItem("user");
  } catch (e) {
    console.log("localStorage isn't working.");
  }
}

function* signoutSaga() {
  try {
    yield call(authAPI.signout);
    localStorage.removeItem("user");
  } catch (e) {
    console.error(e);
  }
}

export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(CHECK_FAILURE, checkFailureSaga);
  yield takeLatest(SIGNOUT, signoutSaga);
}

type TempSetUser = ReturnType<typeof tempSetUser>;
type CheckSuccess = ReturnType<typeof check.success>;
type CheckFailure = ReturnType<typeof check.failure>;

type UserState = {
  user: authAPI.User | null;
  error: AxiosError | null;
};
const initialState: UserState = {
  user: null,
  error: null,
};

const user = createReducer<UserState, any>(initialState, {
  [TEMP_SET_USER]: (state, action: TempSetUser) => {
    return { ...state, user: action.payload };
  },
  [CHECK_SUCCESS]: (state, action: CheckSuccess) => {
    return { ...state, user: action.payload, error: null };
  },
  [CHECK_FAILURE]: (state, action: CheckFailure) => {
    return { ...state, user: null, error: action.payload };
  },
  [SIGNOUT]: (state) => ({ ...state, user: null }),
});

export default user;
