import { readPostAsync, READ_POST } from "./actions";
import { readPost } from "../../lib/api/post";
import { takeEvery } from 'redux-saga/effects';
import createAsyncSaga from "../../lib/createAsyncSaga";

// function* readPostSaga(action: ReturnType<typeof readPostAsync.request>){
//     try{
//         const post: Post = yield call(readPost, action.payload);
//         yield put(readPostAsync.success(post));
//     } catch(e) {
//         yield put(readPostAsync.failure(e));
//     }
// }

const readPostSaga = createAsyncSaga(readPostAsync, readPost);

export function* postSaga() {
    yield takeEvery(READ_POST, readPostSaga);
}