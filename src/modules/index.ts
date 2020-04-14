import { combineReducers } from "redux";
import post, { postSaga } from './post';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
    post
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
    yield all([postSaga()]);
}