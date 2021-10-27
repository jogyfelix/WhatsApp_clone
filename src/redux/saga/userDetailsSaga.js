import {call, put, takeLatest} from 'redux-saga/effects';
import {setUserApi} from '../actions';
import {getUsersDetailsApi} from '../../data/usersApi';
import actionTypes from '../../constants/actionTypes';

export function* getUserApiSaga() {
  try {
    const response = yield call(getUsersDetailsApi);
    const result = response.data;
    yield put(setUserApi(result));
  } catch (error) {
    alert(error);
  }
}

export const userApiSaga = [
  takeLatest(actionTypes.GET_USER_API, getUserApiSaga),
];
