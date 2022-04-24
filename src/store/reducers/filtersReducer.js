import types from '../actions/actionTypes';

const initialState = {
    flights: [],
    isLoaded: false,
    error: null,
};

const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload,
            };
        case types.SET_FLIGHTS:
            return {
                ...state,
                photos: action.payload,
                isLoaded: true,
            };
        default:
            return state;
    }
}


export default filtersReducer;