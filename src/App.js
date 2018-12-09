import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'semantic-ui-css/semantic.min.css';

import { addToCart, removeFromCart } from './actions/basketActions';
import { authorise } from './actions/authActions';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import ShowCard from './components/ShowCard';
import Profile from './components/Profile';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
});
const App = (props) => (
  <ApolloProvider client={client}>
    <div>
      <Header articleCount={props.articleCount} />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={({ history }) => <Home {...history} addToCart={props.addToCart} />} />
          <Route path="/articles/:idArticle" render={({ match: { params } }) => <ShowCard showCardId={params.idArticle} addToCart={props.addToCart} />} />
          <Route path="/profile/:idProfile" render={({ match: { params } }) => <Profile profileId={params.Profile} />} />

        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  </ApolloProvider>
);

App.propTypes = {
  addToCart: PropTypes.func.isRequired,
  authorise: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  articles: PropTypes.array.isRequired,
  totalPrice: PropTypes.number.isRequired,
  articleCount: PropTypes.number.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToprops = (state) => ({
  articles: state.shoppingCartReducer.articles,
  articleCount: state.shoppingCartReducer.articleCount,
  totalPrice: state.shoppingCartReducer.totalPrice,
  removeFromCart: state.shoppingCartReducer.removeFromCart,
  isAuthenticated: state.authReducer.isAuthenticated,
  authorise: state.authReducer.authorise,
});

export default connect(mapStateToprops, { addToCart, removeFromCart, authorise })(App);
