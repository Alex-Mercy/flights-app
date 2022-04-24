import { all } from 'redux-saga/effects';

import { filtersSagas } from './actions/filtersSaga';



export default function* rootSaga() {
  yield all([
    filtersSagas(),
  ]);
}