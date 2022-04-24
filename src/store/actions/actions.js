import types from './actionTypes';


export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
});

export const setFlights = (obj) => ({
    type: types.SET_FLIGHTS,
    payload: obj,
});

export const onSetFlights = (payload) => ({
    type: types.ON_SET_FLIGHTS,
    payload
});

export const flightsFailure = (error) => ({
    type: types.FLIGHTS_IN_FAILURE,
    payload: error,
  });


