import { takeLatest, put, call } from 'redux-saga/effects';
import { Types } from './books';
import Api from '../api';

export function* getBooks(query) {
  try {
    const response = yield call(Api.fetchBooks, query);

    yield put({ type: Types.GET_BOOKS_SUCCESS, payload: response });
  } catch (err) {
    yield put({ type: Types.GET_BOOKS_FAILURE, payload: err });
  }
}

export default function* root() {
  yield [
    takeLatest(Types.GET_BOOKS, getBooks)
  ];
}
