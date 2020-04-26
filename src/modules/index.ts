import { combineReducers } from "redux";
import post, { postSaga } from "./post";
import { all } from "redux-saga/effects";
import write, { writeSaga } from "./write";
import sidemenu from "./sidemenu";
import auth, { authSaga } from "./auth";
import user, { userSaga } from "./user";
import posts, { postsSaga } from "./posts";

const rootReducer = combineReducers({
  post,
  write,
  sidemenu,
  auth,
  user,
  posts,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([postSaga(), authSaga(), userSaga(), writeSaga(), postsSaga()]);
}
