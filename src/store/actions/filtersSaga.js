import { all, call, put, takeLatest } from 'redux-saga/effects';

import { flightsFailure } from './actions';
import { getFlights } from '../api';
import types from './actionTypes';


export function* setFlightsSaga() {

  try {
    const response = yield getFlights();
    // yield put(setPhotos(response.data))
    console.log(response.data);
  } catch (error) {
    yield put(flightsFailure(error));
  }
}


export function* onSetFlights() {
  yield takeLatest(types.ON_SET_FLIGHTS, setFlightsSaga);
}


export function* filtersSagas() {
  yield all([
    call(onSetFlights),
  ]);
}