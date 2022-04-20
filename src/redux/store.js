import {combineReducers, createStore} from "redux";
import filterReducer from "./filterReducer";


let reducers = combineReducers({
    filter: filterReducer

});


let store = createStore(reducers);

export default store;