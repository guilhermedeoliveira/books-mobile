import { takeLatest, put, call } from 'redux-saga/effects';
import { Types } from './books';
import Api from '../api';

export function* asyncFetchBooks({ payload }) {
  try {
    const response = yield call(Api.fetchBooks, payload);

    yield put({ type: Types.GET_BOOKS_SUCCESS, payload: response });
  } catch (err) {
    yield put({ type: Types.GET_BOOKS_FAILURE, payload: err });
  }
}

export default function* root() {
  yield takeLatest(Types.GET_BOOKS, asyncFetchBooks);
}
