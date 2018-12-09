/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// eslint-disable-next-line import/no-unresolved
import { shoppingCartReducer } from './Recducers/shoppingCartReducer';
import authReducer from './Recducers/authReducer';


const middleware = [thunk];


const store = createStore(
  combineReducers({
    shoppingCartReducer,
    authReducer,
  }),
  {},
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
