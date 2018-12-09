import React from 'react';
import PropTypes from 'prop-types';
import ListOfArticals from './ListOfArticals';
import SliderComp from './SimpleSlider';
const Home = ({ addToCart }) => (
  <div>
    <SliderComp />
    <div style={{ margin: '50px' }} >
      <ListOfArticals addToCart={addToCart} />
    </div>
  </div>
);

Home.propTypes = {
  addToCart: PropTypes.func,
};

export default Home;
