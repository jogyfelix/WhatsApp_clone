import {all} from 'redux-saga/effects';
import {userApiSaga} from '../saga/userDetailsSaga';

export function* rootSaga() {
  yield all([...userApiSaga]);
}
