
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {stars} from "./stars-reducer";
const rootReducer = combineReducers({stars});
const middlewares = process.env.NODE_ENV === 'development' ?
    applyMiddleware(thunk, createLogger({})) : applyMiddleware(thunk);
const store = createStore(rootReducer, middlewares);
export default store;