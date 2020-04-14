import { call, put } from 'redux-saga/effects';
import { PayloadAction, EmptyActionCreator, PayloadActionCreator } from 'typesafe-actions';

type AsyncActions<T1 extends string, P1, T2 extends string, P2, T3 extends string, P3> = {
    request: EmptyActionCreator<T1> | PayloadActionCreator<T1, P1>;
    success: EmptyActionCreator<T2> | PayloadActionCreator<T2, P2>;
    failure: EmptyActionCreator<T3> | PayloadActionCreator<T3, P3>;
};

type PromiseCreatorFunction<P, T> = ((payload: P) => Promise<T>) | (() => Promise<T>);

function isPayloadAction<P>(action: any): action is PayloadAction<string, P> {
  return action.payload !== undefined;
}

export default function createAsyncSaga<T1 extends string, P1, T2 extends string, P2, T3 extends string, P3>(
  asyncActions: AsyncActions<T1, P1, T2, P2, T3, P3>,
  promiseCreator: PromiseCreatorFunction<P1, P2>
) {
  return function* saga(action: ReturnType<typeof asyncActions.request>) {
    try {
      const result = isPayloadAction<P1>(action)
        ? yield call(promiseCreator, action.payload)
        : yield call(promiseCreator);
      yield put(asyncActions.success(result));
    } catch (e) {
      yield put(asyncActions.failure(e));
    }
  };
}