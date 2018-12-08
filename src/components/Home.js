import React from 'react';
import ListOfArticals from './ListOfArticals';
import SliderComp from './SimpleSlider';
const Home = () => (
  <div>
    <SliderComp />
    <div style={{ margin: '50px' }} >
      <ListOfArticals />
    </div>
  </div>
);
export default Home;
