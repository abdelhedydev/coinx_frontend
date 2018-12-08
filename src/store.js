/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// eslint-disable-next-line import/no-unresolved
import { shoppingCartReducer } from './Recducers/shoppingCartReducer';

const middleware = [thunk];


const store = createStore(
  combineReducers({
    shoppingCartReducer,
  }),
  {},
  compose(applyMiddleware(...middleware))
);

export default store;
