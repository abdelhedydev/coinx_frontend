import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'semantic-ui-css/semantic.min.css';

import { addToCart, removeFromCart } from './actions/basketActions';
import { authorise } from './actions/authActions';
import Basket from './components/Basket';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import AddProduct from './components/AddProduct';
import ShowCard from './components/ShowCard';

const App = (props) => (
  <div>
    <BrowserRouter>
      <div>
        <Header
          articleCount={props.itemsCount}
          basketItems={props.items}
          totalPrice={props.totalPrice}
          remove={props.removeFromCart}
        />
        <Switch>
          <Route path="/" exact render={({ history }) => <Home {...history} addToCart={props.addToCart} />} />
          <Route path="/add-product" exact component={AddProduct} />
          <Route path="/articles/:idArticle" render={({ match: { params } }) => <ShowCard showCardId={params.idArticle} addToCart={props.addToCart} />} />
          <Route path="/basket" render={() => <Basket basketItems={props.items} remove={props.removeFromCart} totalPrice={props.totalPrice} addToCart={props.addToCart} isAuthenticated={props.isAuthenticated} />} />
        </Switch>
      </div>
    </BrowserRouter>
    <Footer />
  </div>
);

App.propTypes = {
  addToCart: PropTypes.func.isRequired,
  authorise: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  totalPrice: PropTypes.number.isRequired,
  itemsCount: PropTypes.number.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToprops = (state) => ({
  items: state.shoppingCartReducer.items,
  itemsCount: state.shoppingCartReducer.itemsCount,
  totalPrice: state.shoppingCartReducer.totalPrice,
  removeFromCart: state.shoppingCartReducer.removeFromCart,
  isAuthenticated: state.authReducer.isAuthenticated,
  authorise: state.authReducer.authorise,
});

export default connect(mapStateToprops, { addToCart, removeFromCart, authorise })(App);
