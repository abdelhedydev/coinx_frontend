/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ApolloClient from 'apollo-client';
import { createUploadLink } from 'apollo-upload-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import thunk from 'redux-thunk';
// eslint-disable-next-line import/no-unresolved
import { shoppingCartReducer } from './Recducers/shoppingCartReducer';
import authReducer from './Recducers/authReducer';


const middleware = [thunk];

export const client = new ApolloClient({
  ssrMode: typeof window !== 'undefined',
  cache: new InMemoryCache(),
  link: createUploadLink({ uri: 'http://localhost:4000/graphql' }),
});

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
