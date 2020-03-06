import { createStore, applyMiddleware } from 'redux';
//import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise'
import reducer from '../reducers';

let store = createStore(reducer,applyMiddleware(promiseMiddleware))
export default store;