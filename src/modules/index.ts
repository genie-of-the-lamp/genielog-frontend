import { combineReducers } from "redux";
import post, { postSaga } from './post';
import { all } from 'redux-saga/effects';
import write from './write';
import sidemenu from './sidemenu';

const rootReducer = combineReducers({
    post,
    write,
    sidemenu
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
    yield all([postSaga()]);
}