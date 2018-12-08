import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// eslint-disable-next-line import/no-unresolved
import { shoppingCartReducer } from './Recducers/shoppingCartReducer';

const store = createStore(combineReducers(shoppingCartReducer), {}, compose(
  applyMiddleware(thunk),
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
export default store;
