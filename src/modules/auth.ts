import { createAsyncAction, createReducer } from "typesafe-actions";
import createAsyncSaga from "../lib/createAsyncSaga";
import * as authAPI from "../lib/api/auth";
import { AxiosError } from "axios";
import { takeLatest } from "redux-saga/effects";

const SIGNUP = "auth/SIGNUP";
const SIGNUP_SUCCESS = "auth/SIGNUP_SUCCESS";
const SIGNUP_FAILURE = "auth/SIGNUP_FAILURE";

const SIGNIN = "auth/SIGNIN";
const SIGNIN_SUCCESS = "auth/SIGNIN_SUCCESS";
const SIGNIN_FAILURE = "auth/SIGNIN_FAILURE";

export const signup = createAsyncAction(SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE)<
  authAPI.User,
  authAPI.User,
  AxiosError
>();
export const signin = createAsyncAction(SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILURE)<
  authAPI.User,
  authAPI.User,
  AxiosError
>();

const signupSaga = createAsyncSaga(signup, authAPI.signup);
const signinSaga = createAsyncSaga(signin, authAPI.signin);
export function* authSaga() {
  yield takeLatest(SIGNUP, signupSaga);
  yield takeLatest(SIGNIN, signinSaga);
}

export type AuthState = {
  auth: authAPI.User | null;
  error: AxiosError | null;
};

const initialState: AuthState = {
  auth: null,
  error: null,
};

const auth = createReducer<AuthState, any>(initialState, {
  [SIGNUP_SUCCESS]: (state, action: ReturnType<typeof signup.success>) => {
    const auth = action.payload;
    return { ...state, error: null, auth };
  },
  [SIGNUP_FAILURE]: (state, action: ReturnType<typeof signup.failure>) => {
    const error = action.payload;
    return { ...state, error };
  },
  [SIGNIN_SUCCESS]: (state, action: ReturnType<typeof signin.success>) => {
    const auth = action.payload;
    return { ...state, error: null, auth };
  },
  [SIGNIN_FAILURE]: (state, action: ReturnType<typeof signin.failure>) => {
    const error = action.payload;
    return { ...state, error };
  },
});

export default auth;
