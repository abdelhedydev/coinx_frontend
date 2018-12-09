import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import App from './App';
import store, { client } from './store';

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}><App /></Provider>
  </ApolloProvider>
  ,
  document.querySelector('#root')
);
